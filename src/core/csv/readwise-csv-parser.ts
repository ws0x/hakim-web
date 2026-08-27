export interface ReadwiseCsvRow {
  highlight: string;
  bookTitle: string;
  bookAuthor: string;
  asin?: string;
  location?: string;
  locationUrl?: string;
  highlightedAt?: string;
  note?: string;
  color?: string;
  tags?: string;
}

export function parseCsvRows(csvText: string): string[][] {
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentField = "";
  let insideQuotes = false;

  const text = csvText.startsWith("\uFEFF") ? csvText.slice(1) : csvText;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (insideQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          currentField += '"';
          i++;
        } else {
          insideQuotes = false;
        }
      } else {
        currentField += char;
      }
    } else {
      if (char === '"') {
        insideQuotes = true;
      } else if (char === ",") {
        currentRow.push(currentField);
        currentField = "";
      } else if (char === "\r") {
        if (nextChar === "\n") {
          i++;
        }
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = "";
      } else if (char === "\n") {
        currentRow.push(currentField);
        rows.push(currentRow);
        currentRow = [];
        currentField = "";
      } else {
        currentField += char;
      }
    }
  }

  if (currentField.length > 0 || currentRow.length > 0) {
    currentRow.push(currentField);
    rows.push(currentRow);
  }

  return rows;
}

export class ReadwiseCsvParser {
  public static parse(csvContent: string): {
    source: string;
    importedAt: string;
    books: Array<{ title: string; author: string; asin?: string }>;
    annotations: Array<{
      bookTitle: string;
      bookAuthor: string;
      type: "highlight" | "note" | "bookmark";
      text: string;
      note?: string;
      locationStart?: number;
      locationEnd?: number;
      annotatedAt?: string;
      color?: string;
      tags?: string[];
    }>;
  } {
    const rows = parseCsvRows(csvContent);
    if (rows.length < 2) {
      return {
        source: "cloud_sync",
        importedAt: new Date().toISOString(),
        books: [],
        annotations: [],
      };
    }

    const headers = rows[0]!.map((h) => h.trim().toLowerCase());
    
    const highlightIdx = headers.findIndex((h) => h.includes("highlight") && !h.includes("at") && !h.includes("url"));
    const titleIdx = headers.findIndex((h) => h.includes("title") || h.includes("book title"));
    const authorIdx = headers.findIndex((h) => h.includes("author") || h.includes("book author"));
    const asinIdx = headers.findIndex((h) => h.includes("asin") || h.includes("amazon book id"));
    const locationIdx = headers.findIndex((h) => h.includes("location") && !h.includes("url"));
    const dateIdx = headers.findIndex((h) => h.includes("highlighted at") || h.includes("date") || h.includes("created"));
    const noteIdx = headers.findIndex((h) => h.includes("note") || h.includes("annotation"));
    const colorIdx = headers.findIndex((h) => h.includes("color"));
    const tagsIdx = headers.findIndex((h) => h.includes("tag"));

    const booksMap = new Map<string, { title: string; author: string; asin?: string }>();
    const annotations: Array<{
      bookTitle: string;
      bookAuthor: string;
      type: "highlight" | "note" | "bookmark";
      text: string;
      note?: string;
      locationStart?: number;
      locationEnd?: number;
      annotatedAt?: string;
      color?: string;
      tags?: string[];
    }> = [];

    for (let r = 1; r < rows.length; r++) {
      const row = rows[r]!;
      if (row.length === 0 || (row.length === 1 && row[0] === "")) continue;

      const rawText = highlightIdx !== -1 ? row[highlightIdx] || "" : "";
      const rawTitle = titleIdx !== -1 ? row[titleIdx] || "Untitled Book" : "Untitled Book";
      const rawAuthor = authorIdx !== -1 ? row[authorIdx] || "Unknown Author" : "Unknown Author";
      const asin = asinIdx !== -1 ? row[asinIdx]?.trim() || undefined : undefined;
      const rawLocation = locationIdx !== -1 ? row[locationIdx]?.trim() : undefined;
      const rawDate = dateIdx !== -1 ? row[dateIdx]?.trim() : undefined;
      const rawNote = noteIdx !== -1 ? row[noteIdx]?.trim() : undefined;
      const rawColor = colorIdx !== -1 ? row[colorIdx]?.toLowerCase().trim() : undefined;
      const rawTags = tagsIdx !== -1 ? row[tagsIdx]?.trim() : undefined;

      const cleanText = rawText.trim();
      const cleanTitle = rawTitle.trim();
      const cleanAuthor = rawAuthor.trim();

      if (!cleanText && !rawNote) continue;

      let locationStart: number | undefined;
      let locationEnd: number | undefined;
      if (rawLocation) {
        const locMatch = rawLocation.match(/(\d+)(?:-(\d+))?/);
        if (locMatch && locMatch[1]) {
          locationStart = parseInt(locMatch[1], 10);
          locationEnd = locMatch[2] ? parseInt(locMatch[2], 10) : locationStart;
        }
      }

      let annotatedAt: string | undefined;
      if (rawDate) {
        const parsed = Date.parse(rawDate);
        if (!isNaN(parsed)) {
          annotatedAt = new Date(parsed).toISOString();
        }
      }

      let color = "yellow";
      if (rawColor) {
        if (rawColor.includes("blue")) color = "blue";
        else if (rawColor.includes("pink") || rawColor.includes("red")) color = "pink";
        else if (rawColor.includes("orange")) color = "orange";
      }

      const bookKey = `${cleanTitle}:::${cleanAuthor}`;
      let book = booksMap.get(bookKey);
      if (!book) {
        book = {
          title: cleanTitle,
          author: cleanAuthor,
          asin,
        };
        booksMap.set(bookKey, book);
      }

      annotations.push({
        bookTitle: cleanTitle,
        bookAuthor: cleanAuthor,
        type: cleanText.length > 0 ? "highlight" : "note",
        text: cleanText || rawNote || "",
        note: cleanText ? rawNote : undefined,
        locationStart,
        locationEnd,
        annotatedAt,
        color,
        tags: rawTags ? rawTags.split(",").map((t) => t.trim()).filter(Boolean) : undefined,
      });
    }

    return {
      source: "cloud_sync",
      importedAt: new Date().toISOString(),
      books: Array.from(booksMap.values()),
      annotations,
    };
  }
}
