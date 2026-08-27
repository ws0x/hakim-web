var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/core/adapters/demo-data.ts
var DEMO_BOOKS = [
  {
    id: "book-1",
    asin: "B00ZUX90S4",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    highlightsCount: 6,
    tags: ["Software Architecture", "Distributed Systems", "Reliability"],
    status: "reading"
  },
  {
    id: "book-2",
    asin: "B01862ES3A",
    title: "The Daily Stoic",
    author: "Ryan Holiday",
    highlightsCount: 6,
    tags: ["Philosophy", "Stoicism", "Mindset"],
    status: "completed"
  },
  {
    id: "book-3",
    asin: "B07D23CFGR",
    title: "Atomic Habits",
    author: "James Clear",
    highlightsCount: 5,
    tags: ["Productivity", "Habit Formation", "Systems Thinking"],
    status: "completed"
  },
  {
    id: "book-4",
    asin: "B004J4XGN6",
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    highlightsCount: 5,
    tags: ["Psychology", "Cognitive Biases", "Decision Making"],
    status: "reading"
  },
  {
    id: "book-5",
    asin: "B001GSTOAM",
    title: "Clean Code",
    author: "Robert C. Martin",
    highlightsCount: 4,
    tags: ["Software Craftsmanship", "Refactoring", "Clean Code"],
    status: "completed"
  }
];
var DEMO_HIGHLIGHTS = [
  // Designing Data-Intensive Applications
  {
    id: "hl-101",
    bookId: "book-1",
    bookTitle: "Designing Data-Intensive Applications",
    rawText: "Reliability means continuing to work correctly (performing the correct function at the desired level of performance) even in the face of adversity (hardware or software faults, and even human error).",
    location: 120,
    color: "yellow",
    importance: "Essential",
    tags: ["Reliability", "Software Architecture"],
    sourceNote: "Core definition of software reliability.",
    interpretation: "A system is not truly reliable if it only works under ideal conditions."
  },
  {
    id: "hl-102",
    bookId: "book-1",
    bookTitle: "Designing Data-Intensive Applications",
    rawText: "Scalability is the term we use to describe a system's ability to cope with increased load.",
    location: 245,
    color: "blue",
    importance: "High",
    tags: ["Distributed Systems"]
  },
  {
    id: "hl-103",
    bookId: "book-1",
    bookTitle: "Designing Data-Intensive Applications",
    rawText: "Maintainability means many different people will work on the system over time, and they should all be able to work on it productively.",
    location: 380,
    color: "pink",
    importance: "High",
    tags: ["Clean Code", "Software Architecture"]
  },
  {
    id: "hl-104",
    bookId: "book-1",
    bookTitle: "Designing Data-Intensive Applications",
    rawText: "Behind every fault-tolerant system is a set of carefully reasoned invariants.",
    location: 512,
    color: "orange",
    importance: "Essential",
    tags: ["Distributed Systems"]
  },
  // The Daily Stoic
  {
    id: "hl-201",
    bookId: "book-2",
    bookTitle: "The Daily Stoic",
    rawText: "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",
    location: 45,
    color: "yellow",
    importance: "Essential",
    tags: ["Stoicism", "Mindset"],
    sourceNote: "Epictetus' Dichotomy of Control.",
    interpretation: "Direct energy only towards intentional choices, never external outcomes."
  },
  {
    id: "hl-202",
    bookId: "book-2",
    bookTitle: "The Daily Stoic",
    rawText: "You have power over your mind - not outside events. Realize this, and you will find strength.",
    location: 190,
    color: "yellow",
    importance: "High",
    tags: ["Stoicism", "Psychology"]
  },
  {
    id: "hl-203",
    bookId: "book-2",
    bookTitle: "The Daily Stoic",
    rawText: "Waste no more time arguing what a good person should be. Be one.",
    location: 320,
    color: "pink",
    importance: "Essential",
    tags: ["Philosophy"]
  },
  // Atomic Habits
  {
    id: "hl-301",
    bookId: "book-3",
    bookTitle: "Atomic Habits",
    rawText: "You do not rise to the level of your goals. You fall to the level of your systems.",
    location: 110,
    color: "yellow",
    importance: "Essential",
    tags: ["Systems Thinking", "Habit Formation"],
    interpretation: "Focus on designing frictionless recurring routines rather than obsessing over end milestones."
  },
  {
    id: "hl-302",
    bookId: "book-3",
    bookTitle: "Atomic Habits",
    rawText: "Every action you take is a vote for the type of person you wish to become.",
    location: 280,
    color: "orange",
    importance: "High",
    tags: ["Habit Formation", "Mindset"]
  },
  {
    id: "hl-303",
    bookId: "book-3",
    bookTitle: "Atomic Habits",
    rawText: "Make it obvious, make it attractive, make it easy, make it satisfying.",
    location: 450,
    color: "blue",
    importance: "Essential",
    tags: ["Productivity"]
  },
  // Thinking, Fast and Slow
  {
    id: "hl-401",
    bookId: "book-4",
    bookTitle: "Thinking, Fast and Slow",
    rawText: "System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.",
    location: 80,
    color: "yellow",
    importance: "High",
    tags: ["Cognitive Biases", "Psychology"]
  },
  {
    id: "hl-402",
    bookId: "book-4",
    bookTitle: "Thinking, Fast and Slow",
    rawText: "System 2 allocates attention to the effortful mental operations that demand it, including complex computations.",
    location: 140,
    color: "blue",
    importance: "High",
    tags: ["Cognitive Biases", "Decision Making"]
  },
  {
    id: "hl-403",
    bookId: "book-4",
    bookTitle: "Thinking, Fast and Slow",
    rawText: "We are prone to overestimate how much we understand about the world and to underestimate the role of chance.",
    location: 390,
    color: "pink",
    importance: "Essential",
    tags: ["Decision Making", "Mindset"]
  },
  // Clean Code
  {
    id: "hl-501",
    bookId: "book-5",
    bookTitle: "Clean Code",
    rawText: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    location: 95,
    color: "yellow",
    importance: "Essential",
    tags: ["Clean Code", "Software Craftsmanship"]
  },
  {
    id: "hl-502",
    bookId: "book-5",
    bookTitle: "Clean Code",
    rawText: "Leave the campground cleaner than you found it. The Boy Scout Rule.",
    location: 210,
    color: "pink",
    importance: "Essential",
    tags: ["Refactoring", "Clean Code"],
    sourceNote: "Apply incremental continuous cleanup to every PR."
  }
];

// src/core/graph-builder.ts
var GraphBuilder = class {
  static COLOR_PALETTE = {
    book: "#818cf8",
    topic: "#38bdf8",
    author: "#c084fc",
    yellowHighlight: "#fcd34d",
    blueHighlight: "#67e8f9",
    pinkHighlight: "#fda4af",
    orangeHighlight: "#fdba74"
  };
  /**
   * Transforms books and highlights into a force-directed topological network.
   */
  static buildGraph(books, highlights, filteredHighlightIds) {
    const nodes = [];
    const links = [];
    const nodeSet = /* @__PURE__ */ new Set();
    const topicCounts = /* @__PURE__ */ new Map();
    for (let i = 0; i < books.length; i++) {
      const b = books[i];
      nodes.push({
        id: b.id,
        label: b.title,
        type: "book",
        group: 1,
        size: Math.max(16, Math.min(32, 14 + b.highlightsCount * 2)),
        color: this.COLOR_PALETTE.book,
        bookTitle: b.title
      });
      nodeSet.add(b.id);
      if (b.tags) {
        for (const tag of b.tags) {
          topicCounts.set(tag, (topicCounts.get(tag) || 0) + 1);
        }
      }
    }
    for (const [topic, count] of topicCounts.entries()) {
      const topicId = `topic-${topic.toLowerCase().replace(/\s+/g, "-")}`;
      nodes.push({
        id: topicId,
        label: `#${topic}`,
        type: "topic",
        group: 2,
        size: Math.max(12, Math.min(24, 10 + count * 3)),
        color: this.COLOR_PALETTE.topic
      });
      nodeSet.add(topicId);
      for (const b of books) {
        if (b.tags?.includes(topic)) {
          links.push({
            source: b.id,
            target: topicId,
            type: "shares_topic",
            strength: 0.7
          });
        }
      }
    }
    for (const h of highlights) {
      if (filteredHighlightIds && !filteredHighlightIds.has(h.id)) {
        continue;
      }
      let hlColor = this.COLOR_PALETTE.yellowHighlight;
      if (h.color === "blue") hlColor = this.COLOR_PALETTE.blueHighlight;
      else if (h.color === "pink") hlColor = this.COLOR_PALETTE.pinkHighlight;
      else if (h.color === "orange") hlColor = this.COLOR_PALETTE.orangeHighlight;
      const locSnippet = h.location !== void 0 ? `Loc ${h.location}` : "Note";
      const snippet = h.rawText.substring(0, 36) + (h.rawText.length > 36 ? "..." : "");
      nodes.push({
        id: h.id,
        label: `${locSnippet}: ${snippet}`,
        type: "highlight",
        group: 3,
        size: h.importance === "Essential" ? 10 : 7,
        color: hlColor,
        bookId: h.bookId,
        bookTitle: h.bookTitle,
        rawText: h.rawText,
        note: h.sourceNote,
        location: h.location,
        importance: h.importance
      });
      nodeSet.add(h.id);
      if (nodeSet.has(h.bookId)) {
        links.push({
          source: h.bookId,
          target: h.id,
          type: "contains",
          strength: 0.9
        });
      }
      if (h.tags) {
        for (const tag of h.tags) {
          const topicId = `topic-${tag.toLowerCase().replace(/\s+/g, "-")}`;
          if (nodeSet.has(topicId)) {
            links.push({
              source: h.id,
              target: topicId,
              type: "shares_topic",
              strength: 0.4
            });
          }
        }
      }
    }
    return { nodes, links };
  }
};

// src/core/store.ts
var ReadingStateStore = class _ReadingStateStore {
  static instance;
  listeners = /* @__PURE__ */ new Set();
  state = {
    books: DEMO_BOOKS,
    highlights: DEMO_HIGHLIGHTS,
    filters: {
      searchQuery: "",
      selectedBookId: null,
      selectedColors: /* @__PURE__ */ new Set(["yellow", "blue", "pink", "orange"]),
      selectedImportance: /* @__PURE__ */ new Set(["Essential", "High", "Medium", "Low"]),
      selectedTopics: /* @__PURE__ */ new Set()
    },
    graphData: { nodes: [], links: [] },
    activeView: "graph",
    selectedHighlight: null,
    isLoading: false,
    activeDataset: "demo"
  };
  constructor() {
    this.recomputeGraph();
  }
  static getInstance() {
    if (!_ReadingStateStore.instance) {
      _ReadingStateStore.instance = new _ReadingStateStore();
    }
    return _ReadingStateStore.instance;
  }
  getState() {
    return this.state;
  }
  subscribe(listener) {
    this.listeners.add(listener);
    listener(this.state);
    return () => this.listeners.delete(listener);
  }
  notify() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
  setView(view) {
    this.state.activeView = view;
    this.notify();
  }
  selectHighlight(highlight) {
    this.state.selectedHighlight = highlight;
    this.notify();
  }
  setSearchQuery(query) {
    this.state.filters.searchQuery = query.toLowerCase().trim();
    this.recomputeGraph();
    this.notify();
  }
  selectBook(bookId) {
    this.state.filters.selectedBookId = bookId;
    this.recomputeGraph();
    this.notify();
  }
  toggleColorFilter(color) {
    if (this.state.filters.selectedColors.has(color)) {
      this.state.filters.selectedColors.delete(color);
    } else {
      this.state.filters.selectedColors.add(color);
    }
    this.recomputeGraph();
    this.notify();
  }
  loadCustomData(books, highlights, source) {
    this.state.books = books;
    this.state.highlights = highlights;
    this.state.activeDataset = source;
    this.state.filters.selectedBookId = null;
    this.state.filters.searchQuery = "";
    this.recomputeGraph();
    this.notify();
  }
  updateBookStatus(bookId, status) {
    const book = this.state.books.find((b) => b.id === bookId);
    if (book) {
      book.status = status;
      this.notify();
    }
  }
  updateHighlightInterpretation(highlightId, interpretation) {
    const hl = this.state.highlights.find((h) => h.id === highlightId);
    if (hl) {
      hl.interpretation = interpretation;
      this.notify();
    }
  }
  loadDemoData() {
    this.state.books = DEMO_BOOKS;
    this.state.highlights = DEMO_HIGHLIGHTS;
    this.state.activeDataset = "demo";
    this.state.filters.selectedBookId = null;
    this.state.filters.searchQuery = "";
    this.recomputeGraph();
    this.notify();
  }
  getFilteredHighlights() {
    const { searchQuery, selectedBookId, selectedColors, selectedImportance } = this.state.filters;
    return this.state.highlights.filter((h) => {
      if (selectedBookId && h.bookId !== selectedBookId) {
        return false;
      }
      if (selectedColors.size > 0 && !selectedColors.has(h.color)) {
        return false;
      }
      if (h.importance && selectedImportance.size > 0 && !selectedImportance.has(h.importance)) {
        return false;
      }
      if (searchQuery) {
        const textMatch = h.rawText.toLowerCase().includes(searchQuery);
        const bookMatch = h.bookTitle.toLowerCase().includes(searchQuery);
        const noteMatch = h.sourceNote?.toLowerCase().includes(searchQuery);
        const tagMatch = h.tags?.some((t) => t.toLowerCase().includes(searchQuery));
        if (!textMatch && !bookMatch && !noteMatch && !tagMatch) {
          return false;
        }
      }
      return true;
    });
  }
  recomputeGraph() {
    const filtered = this.getFilteredHighlights();
    const filteredIds = new Set(filtered.map((h) => h.id));
    this.state.graphData = GraphBuilder.buildGraph(this.state.books, this.state.highlights, filteredIds);
  }
};

// node_modules/@hakim/domain/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// node_modules/@hakim/domain/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = (data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
};

// node_modules/@hakim/domain/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = (obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
};
var ZodError = class _ZodError extends Error {
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = (error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    };
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/@hakim/domain/node_modules/zod/v3/locales/en.js
var errorMap = (issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
};
var en_default = errorMap;

// node_modules/@hakim/domain/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
function getErrorMap() {
  return overrideErrorMap;
}

// node_modules/@hakim/domain/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = (params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
};
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
var ParseStatus = class _ParseStatus {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = (value) => ({ status: "dirty", value });
var OK = (value) => ({ status: "valid", value });
var isAborted = (x) => x.status === "aborted";
var isDirty = (x) => x.status === "dirty";
var isValid = (x) => x.status === "valid";
var isAsync = (x) => typeof Promise !== "undefined" && x instanceof Promise;

// node_modules/@hakim/domain/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/@hakim/domain/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = (ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
};
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = (iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  };
  return { errorMap: customMap, description };
}
var ZodType = class {
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = (val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    };
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = () => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      });
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: (data) => this["~validate"](data)
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
var ZodString = class _ZodString extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
var ZodNumber = class _ZodNumber extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: () => newShape
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
var ZodObject = class _ZodObject extends ZodType {
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: (issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...augmentation
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => shape
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: () => newShape
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: () => shape,
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = (type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
};
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
var ZodIntersection = class extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = (parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    };
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
var ZodEnum = class _ZodEnum extends ZodType {
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: (arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      },
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = (acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      };
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      };
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = (data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    };
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = (cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params);
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = () => stringType().optional();
var onumber = () => numberType().optional();
var oboolean = () => booleanType().optional();
var coerce = {
  string: ((arg) => ZodString.create({ ...arg, coerce: true })),
  number: ((arg) => ZodNumber.create({ ...arg, coerce: true })),
  boolean: ((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })),
  bigint: ((arg) => ZodBigInt.create({ ...arg, coerce: true })),
  date: ((arg) => ZodDate.create({ ...arg, coerce: true }))
};
var NEVER = INVALID;

// node_modules/@hakim/domain/dist/schemas/index.js
var AccountSchema = external_exports.object({
  id: external_exports.string().uuid(),
  amazonRegion: external_exports.string().default("com"),
  amazonAccountFingerprint: external_exports.string().optional(),
  notionWorkspaceId: external_exports.string().optional(),
  createdAt: external_exports.string().datetime()
});
var SourceKindSchema = external_exports.enum(["kindle_cloud", "my_clippings", "kindle_html"]);
var SourceStateSchema = external_exports.enum(["active", "limited", "source_missing", "confirmed_missing"]);
var BookSchema = external_exports.object({
  id: external_exports.string().uuid(),
  sourceBookKey: external_exports.string().min(1),
  asin: external_exports.string().optional(),
  sourceTitle: external_exports.string().min(1),
  displayTitle: external_exports.string().min(1),
  author: external_exports.string().default("Unknown Author"),
  coverUrl: external_exports.string().url().optional(),
  sourceUrl: external_exports.string().url().optional(),
  lastAnnotatedAt: external_exports.string().datetime().optional(),
  sourceKinds: external_exports.array(SourceKindSchema).min(1),
  sourceState: SourceStateSchema.default("active"),
  firstSeenAt: external_exports.string().datetime(),
  lastSeenAt: external_exports.string().datetime()
});
var AnnotationTypeSchema = external_exports.enum(["highlight", "note", "bookmark"]);
var ContentLimitStateSchema = external_exports.enum(["normal", "publisher_clipped", "truncated"]);
var AnnotationColorSchema = external_exports.enum(["yellow", "blue", "pink", "orange", "default"]);
var AnnotationSchema = external_exports.object({
  id: external_exports.string().uuid(),
  bookId: external_exports.string().uuid(),
  sourceAnnotationKey: external_exports.string().optional(),
  sourceKind: SourceKindSchema,
  type: AnnotationTypeSchema.default("highlight"),
  rawText: external_exports.string(),
  normalizedText: external_exports.string(),
  sourceNote: external_exports.string().optional(),
  locationStart: external_exports.number().int().nonnegative().optional(),
  locationEnd: external_exports.number().int().nonnegative().optional(),
  page: external_exports.number().int().positive().optional(),
  chapter: external_exports.string().optional(),
  color: AnnotationColorSchema.default("yellow"),
  annotatedAt: external_exports.string().datetime().optional(),
  firstImportedAt: external_exports.string().datetime(),
  lastSeenAt: external_exports.string().datetime(),
  sourceState: SourceStateSchema.default("active"),
  contentLimitState: ContentLimitStateSchema.default("normal"),
  rawPayloadHash: external_exports.string().min(8)
});
var ProcessStatusSchema = external_exports.enum(["inbox", "processed", "discarded"]);
var ImportanceSchema = external_exports.enum(["low", "medium", "high", "essential"]);
var AgreementSchema = external_exports.enum(["agree", "unsure", "disagree"]);
var AnnotationUserStateSchema = external_exports.object({
  annotationId: external_exports.string().uuid(),
  processStatus: ProcessStatusSchema.default("inbox"),
  importance: ImportanceSchema.default("medium"),
  personalInterpretation: external_exports.string().optional(),
  agreement: AgreementSchema.default("agree"),
  userTags: external_exports.array(external_exports.string()).default([]),
  notionPageId: external_exports.string().optional(),
  notionLastPulledAt: external_exports.string().datetime().optional(),
  userLockedFields: external_exports.array(external_exports.string()).default([])
});
var ConceptStatusSchema = external_exports.enum(["emerging", "active", "stable", "challenged", "archived"]);
var ConceptSchema = external_exports.object({
  id: external_exports.string().uuid(),
  name: external_exports.string().min(1),
  workingDefinition: external_exports.string().min(1),
  myUnderstanding: external_exports.string().optional(),
  status: ConceptStatusSchema.default("emerging"),
  masteryScore: external_exports.number().min(0).max(100).default(0),
  lastReviewedAt: external_exports.string().datetime().optional(),
  createdAt: external_exports.string().datetime()
});
var InsightStageSchema = external_exports.enum(["ai_draft", "reviewing", "approved", "challenged", "archived"]);
var InsightSchema = external_exports.object({
  id: external_exports.string().uuid(),
  title: external_exports.string().min(1),
  claim: external_exports.string().min(1),
  explanationInMyWords: external_exports.string().min(1),
  evidence: external_exports.string().optional(),
  counterevidence: external_exports.string().optional(),
  myPosition: external_exports.string().optional(),
  confidence: external_exports.number().min(0).max(1).default(0.8),
  stage: InsightStageSchema.default("ai_draft"),
  sourceAnnotationIds: external_exports.array(external_exports.string().uuid()).default([]),
  conceptIds: external_exports.array(external_exports.string().uuid()).default([]),
  createdAt: external_exports.string().datetime()
});
var TaskTypeSchema = external_exports.enum([
  "classification",
  "claim_extraction",
  "question_generation",
  "concept_connect",
  "contradiction_detect",
  "book_synthesis"
]);
var DraftStatusSchema = external_exports.enum(["draft", "approved", "rejected", "stale"]);
var IntelligenceDraftSchema = external_exports.object({
  id: external_exports.string().uuid(),
  annotationId: external_exports.string().uuid().optional(),
  bookId: external_exports.string().uuid().optional(),
  taskType: TaskTypeSchema,
  promptVersion: external_exports.string().min(1),
  model: external_exports.string().min(1),
  inputHash: external_exports.string().min(8),
  structuredOutput: external_exports.record(external_exports.unknown()),
  confidence: external_exports.number().min(0).max(1).default(1),
  groundingWarnings: external_exports.array(external_exports.string()).default([]),
  status: DraftStatusSchema.default("draft"),
  createdAt: external_exports.string().datetime()
});
var RawImportAnnotationSchema = external_exports.object({
  sourceAnnotationKey: external_exports.string().optional(),
  type: AnnotationTypeSchema.optional().default("highlight"),
  rawText: external_exports.string(),
  sourceNote: external_exports.string().optional(),
  locationStart: external_exports.number().int().nonnegative().optional(),
  locationEnd: external_exports.number().int().nonnegative().optional(),
  page: external_exports.number().int().positive().optional(),
  chapter: external_exports.string().optional(),
  color: AnnotationColorSchema.optional().default("yellow"),
  annotatedAt: external_exports.string().optional(),
  contentLimitState: ContentLimitStateSchema.optional().default("normal")
});
var RawImportBookSchema = external_exports.object({
  sourceBookKey: external_exports.string().min(1),
  asin: external_exports.string().optional(),
  sourceTitle: external_exports.string().min(1),
  author: external_exports.string().default("Unknown Author"),
  coverUrl: external_exports.string().optional(),
  sourceUrl: external_exports.string().optional(),
  lastAnnotatedAt: external_exports.string().optional(),
  annotations: external_exports.array(RawImportAnnotationSchema)
});
var ImportEnvelopeSchema = external_exports.object({
  version: external_exports.literal("1.0"),
  sourceKind: SourceKindSchema,
  importedAt: external_exports.string().datetime(),
  books: external_exports.array(RawImportBookSchema)
});
var SyncRunStatusSchema = external_exports.enum(["started", "in_progress", "completed", "failed", "partial"]);
var SyncRunSchema = external_exports.object({
  id: external_exports.string().uuid(),
  source: external_exports.string(),
  status: SyncRunStatusSchema.default("started"),
  booksDiscovered: external_exports.number().int().nonnegative().default(0),
  annotationsDiscovered: external_exports.number().int().nonnegative().default(0),
  createdCount: external_exports.number().int().nonnegative().default(0),
  updatedCount: external_exports.number().int().nonnegative().default(0),
  errorCount: external_exports.number().int().nonnegative().default(0),
  startedAt: external_exports.string().datetime(),
  completedAt: external_exports.string().datetime().optional()
});

// node_modules/@hakim/domain/dist/identity/normalizer.js
function decodeHtmlEntities(str) {
  if (!str)
    return "";
  const entityMap = {
    "&quot;": '"',
    "&amp;": "&",
    "&apos;": "'",
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
    "&laquo;": "\xAB",
    "&raquo;": "\xBB",
    "&mdash;": "\u2014",
    "&ndash;": "\u2013",
    "&hellip;": "\u2026",
    "&lsquo;": "'",
    "&rsquo;": "'",
    "&ldquo;": '"',
    "&rdquo;": '"',
    "&lsaquo;": "\u2039",
    "&rsaquo;": "\u203A",
    "&trade;": "\u2122",
    "&copy;": "\xA9",
    "&reg;": "\xAE",
    "&bull;": "\u2022",
    "&middot;": "\xB7",
    "&prime;": "\u2032",
    "&Prime;": "\u2033"
  };
  return str.replace(/&[a-zA-Z]+;/g, (match) => entityMap[match.toLowerCase()] ?? match).replace(/&#(\d+);/g, (_, dec) => {
    try {
      return String.fromCodePoint(parseInt(dec, 10));
    } catch {
      return _;
    }
  }).replace(/&#x([a-fA-F0-9]+);/g, (_, hex) => {
    try {
      return String.fromCodePoint(parseInt(hex, 16));
    } catch {
      return _;
    }
  });
}
function normalizeText(text) {
  if (!text)
    return "";
  const decoded = decodeHtmlEntities(text);
  return decoded.normalize("NFKC").replace(/[\u200B-\u200D\uFEFF\u00AD\u200E\u200F]/g, "").replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/\s+/g, " ").trim();
}
function normalizeTitle(title) {
  if (!title)
    return "Untitled";
  return normalizeText(title).replace(/\s*\((?:Kindle Edition|English Edition|Arabic Edition)\)/gi, "").trim();
}
function normalizeAuthor(author) {
  if (!author)
    return "Unknown Author";
  let normalized = normalizeText(author);
  if (normalized.includes(",") && !normalized.includes(";")) {
    const parts = normalized.split(",").map((p) => p.trim());
    if (parts.length === 2 && parts[0] && parts[1]) {
      normalized = `${parts[1]} ${parts[0]}`;
    }
  }
  return normalized;
}

// src/core/csv/readwise-csv-parser.ts
function parseCsvRows(csvText) {
  const rows = [];
  let currentRow = [];
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
var ReadwiseCsvParser = class {
  static parse(csvContent) {
    const rows = parseCsvRows(csvContent);
    if (rows.length < 2) {
      return {
        source: "cloud_sync",
        importedAt: (/* @__PURE__ */ new Date()).toISOString(),
        books: [],
        annotations: []
      };
    }
    const headers = rows[0].map((h) => h.trim().toLowerCase());
    const highlightIdx = headers.findIndex((h) => h.includes("highlight") && !h.includes("at") && !h.includes("url"));
    const titleIdx = headers.findIndex((h) => h.includes("title") || h.includes("book title"));
    const authorIdx = headers.findIndex((h) => h.includes("author") || h.includes("book author"));
    const asinIdx = headers.findIndex((h) => h.includes("asin") || h.includes("amazon book id"));
    const locationIdx = headers.findIndex((h) => h.includes("location") && !h.includes("url"));
    const dateIdx = headers.findIndex((h) => h.includes("highlighted at") || h.includes("date") || h.includes("created"));
    const noteIdx = headers.findIndex((h) => h.includes("note") || h.includes("annotation"));
    const colorIdx = headers.findIndex((h) => h.includes("color"));
    const tagsIdx = headers.findIndex((h) => h.includes("tag"));
    const booksMap = /* @__PURE__ */ new Map();
    const annotations = [];
    for (let r = 1; r < rows.length; r++) {
      const row = rows[r];
      if (row.length === 0 || row.length === 1 && row[0] === "") continue;
      const rawText = highlightIdx !== -1 ? row[highlightIdx] || "" : "";
      const rawTitle = titleIdx !== -1 ? row[titleIdx] || "Untitled Book" : "Untitled Book";
      const rawAuthor = authorIdx !== -1 ? row[authorIdx] || "Unknown Author" : "Unknown Author";
      const asin = asinIdx !== -1 ? row[asinIdx]?.trim() || void 0 : void 0;
      const rawLocation = locationIdx !== -1 ? row[locationIdx]?.trim() : void 0;
      const rawDate = dateIdx !== -1 ? row[dateIdx]?.trim() : void 0;
      const rawNote = noteIdx !== -1 ? row[noteIdx]?.trim() : void 0;
      const rawColor = colorIdx !== -1 ? row[colorIdx]?.toLowerCase().trim() : void 0;
      const rawTags = tagsIdx !== -1 ? row[tagsIdx]?.trim() : void 0;
      const cleanText = rawText.trim();
      const cleanTitle = rawTitle.trim();
      const cleanAuthor = rawAuthor.trim();
      if (!cleanText && !rawNote) continue;
      let locationStart;
      let locationEnd;
      if (rawLocation) {
        const locMatch = rawLocation.match(/(\d+)(?:-(\d+))?/);
        if (locMatch && locMatch[1]) {
          locationStart = parseInt(locMatch[1], 10);
          locationEnd = locMatch[2] ? parseInt(locMatch[2], 10) : locationStart;
        }
      }
      let annotatedAt;
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
          asin
        };
        booksMap.set(bookKey, book);
      }
      annotations.push({
        bookTitle: cleanTitle,
        bookAuthor: cleanAuthor,
        type: cleanText.length > 0 ? "highlight" : "note",
        text: cleanText || rawNote || "",
        note: cleanText ? rawNote : void 0,
        locationStart,
        locationEnd,
        annotatedAt,
        color,
        tags: rawTags ? rawTags.split(",").map((t) => t.trim()).filter(Boolean) : void 0
      });
    }
    return {
      source: "cloud_sync",
      importedAt: (/* @__PURE__ */ new Date()).toISOString(),
      books: Array.from(booksMap.values()),
      annotations
    };
  }
};

// src/core/adapters/file-adapter.ts
var FileImportAdapter = class {
  /**
   * Parses raw `My Clippings.txt` text uploaded directly in the browser.
   */
  static parseMyClippings(rawContent) {
    const rawEntries = rawContent.split(/==========/);
    const booksMap = /* @__PURE__ */ new Map();
    const highlights = [];
    for (let i = 0; i < rawEntries.length; i++) {
      const entry = rawEntries[i]?.trim();
      if (!entry) continue;
      const lines = entry.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);
      if (lines.length < 3) continue;
      const headerLine = lines[0];
      const authorMatch = headerLine.match(/\(([^)]+)\)$/);
      let rawTitle = headerLine;
      let rawAuthor = "Unknown Author";
      if (authorMatch && authorMatch[1]) {
        rawAuthor = authorMatch[1].trim();
        rawTitle = headerLine.substring(0, headerLine.lastIndexOf("(")).trim();
      }
      const title = normalizeTitle(rawTitle);
      const author = normalizeAuthor(rawAuthor);
      const bookKey = `${title}:::${author}`;
      let book = booksMap.get(bookKey);
      if (!book) {
        book = {
          id: `book-${booksMap.size + 1}`,
          title,
          author,
          highlightsCount: 0,
          status: "reading"
        };
        booksMap.set(bookKey, book);
      }
      const metaLine = lines[1];
      let location;
      const locMatch = metaLine.match(/Location\s+(\d+)/i) || metaLine.match(/page\s+(\d+)/i);
      if (locMatch && locMatch[1]) {
        location = parseInt(locMatch[1], 10);
      }
      let color = "yellow";
      if (/yellow/i.test(metaLine)) color = "yellow";
      else if (/blue/i.test(metaLine)) color = "blue";
      else if (/pink/i.test(metaLine)) color = "pink";
      else if (/orange/i.test(metaLine)) color = "orange";
      const rawText = lines.slice(2).join(" ");
      if (!rawText) continue;
      book.highlightsCount++;
      highlights.push({
        id: `hl-import-${highlights.length + 1}`,
        bookId: book.id,
        bookTitle: book.title,
        rawText: normalizeText(rawText),
        location,
        color,
        importance: "Medium",
        status: "Inbox"
      });
    }
    return {
      books: Array.from(booksMap.values()),
      highlights
    };
  }
  /**
   * Parses Readwise CSV export content directly in the browser.
   */
  static parseReadwiseCsv(csvContent) {
    const envelope = ReadwiseCsvParser.parse(csvContent);
    const books = [];
    const highlights = [];
    envelope.books.forEach((b, i) => {
      const bookId = `book-csv-${i + 1}`;
      const bookItem = {
        id: bookId,
        title: b.sourceTitle,
        author: b.author,
        highlightsCount: b.annotations.length,
        status: "reading"
      };
      books.push(bookItem);
      b.annotations.forEach((a, j) => {
        highlights.push({
          id: `hl-csv-${i + 1}-${j + 1}`,
          bookId: bookItem.id,
          bookTitle: bookItem.title,
          rawText: a.rawText,
          sourceNote: a.sourceNote,
          location: a.locationStart,
          color: a.color || "yellow",
          importance: a.color === "pink" ? "High" : a.color === "yellow" ? "Essential" : "Medium",
          status: "Inbox"
        });
      });
    });
    return {
      books,
      highlights
    };
  }
  /**
   * Parses exported Hakim JSON snapshot format.
   */
  static parseJsonSnapshot(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (Array.isArray(data.books) && Array.isArray(data.highlights)) {
        return {
          books: data.books,
          highlights: data.highlights
        };
      }
      throw new Error("Invalid Hakim JSON snapshot structure.");
    } catch (err) {
      throw new Error(`Failed to parse JSON file: ${err instanceof Error ? err.message : "Invalid JSON"}`);
    }
  }
};

// src/components/graph-canvas.ts
var CanvasGraphEngine = class {
  container;
  canvas;
  ctx;
  nodes = [];
  links = [];
  nodeMap = /* @__PURE__ */ new Map();
  // Physics Simulation
  alpha = 1;
  alphaMin = 5e-4;
  alphaDecay = 0.015;
  isSimulationRunning = true;
  // Obsidian Physics Controls - Calibrated for spacious constellation feel
  config = {
    gravity: 8e-3,
    repulsion: 1400,
    linkDistance: 160,
    linkStrength: 0.12,
    damping: 0.88,
    nodeSizeMultiplier: 1,
    showLabels: true,
    showParticles: true
  };
  // Transform (Pan & Zoom)
  scale = 1;
  minScale = 0.15;
  maxScale = 5;
  offsetX = 0;
  offsetY = 0;
  // Target Camera for smooth interpolation (Fly-to)
  targetScale = null;
  targetOffsetX = null;
  targetOffsetY = null;
  // Interaction State
  isPanning = false;
  panStartX = 0;
  panStartY = 0;
  hoveredNode = null;
  selectedNode = null;
  draggedNode = null;
  onNodeClickCallback;
  // Starfield Grid particles
  starfieldGrid = [];
  animationFrameId = null;
  hudElement = null;
  constructor(container, onNodeClick) {
    this.container = container;
    this.onNodeClickCallback = onNodeClick;
    this.canvas = document.createElement("canvas");
    this.canvas.className = "graph-canvas";
    this.container.appendChild(this.canvas);
    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("Could not get 2D context from canvas.");
    this.ctx = context;
    this.initStarfield();
    this.resize();
    this.initEvents();
    this.createObsidianHUD();
  }
  initStarfield() {
    this.starfieldGrid = [];
    for (let i = 0; i < 140; i++) {
      this.starfieldGrid.push({
        x: (Math.random() - 0.5) * 4e3,
        y: (Math.random() - 0.5) * 4e3,
        opacity: 0.15 + Math.random() * 0.35,
        size: 0.8 + Math.random() * 1.5
      });
    }
  }
  setData(data) {
    const width = this.canvas.width / (window.devicePixelRatio || 1);
    const height = this.canvas.height / (window.devicePixelRatio || 1);
    this.nodeMap.clear();
    const bookNodes = data.nodes.filter((n) => n.type === "book");
    const otherNodes = data.nodes.filter((n) => n.type !== "book");
    const bookPositions = /* @__PURE__ */ new Map();
    bookNodes.forEach((b, idx) => {
      const angle = idx / Math.max(1, bookNodes.length) * 2 * Math.PI - Math.PI / 2;
      const radius = 340 + idx % 2 * 50;
      bookPositions.set(b.id, {
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius
      });
    });
    this.nodes = data.nodes.map((n, i) => {
      const existing = this.nodes.find((old) => old.id === n.id);
      const baseRadius = n.size || (n.type === "book" ? 26 : n.type === "topic" ? 16 : 8);
      let initX = width / 2;
      let initY = height / 2;
      if (existing) {
        initX = existing.x;
        initY = existing.y;
      } else if (n.type === "book") {
        const pos = bookPositions.get(n.id) || { x: width / 2, y: height / 2 };
        initX = pos.x;
        initY = pos.y;
      } else if (n.type === "topic") {
        const angle = i / Math.max(1, data.nodes.length) * 2 * Math.PI;
        initX = width / 2 + Math.cos(angle) * 180 + (Math.random() - 0.5) * 60;
        initY = height / 2 + Math.sin(angle) * 180 + (Math.random() - 0.5) * 60;
      } else {
        const angle = Math.random() * 2 * Math.PI;
        const dist = 80 + Math.random() * 90;
        initX = width / 2 + Math.cos(angle) * dist + (Math.random() - 0.5) * 100;
        initY = height / 2 + Math.sin(angle) * dist + (Math.random() - 0.5) * 100;
      }
      const simNode = {
        ...n,
        x: initX,
        y: initY,
        vx: existing ? existing.vx : (Math.random() - 0.5) * 2,
        vy: existing ? existing.vy : (Math.random() - 0.5) * 2,
        radius: baseRadius
      };
      this.nodeMap.set(n.id, simNode);
      return simNode;
    });
    this.links = data.links.map((l) => ({
      ...l,
      sourceNode: this.nodeMap.get(typeof l.source === "string" ? l.source : l.source.id),
      targetNode: this.nodeMap.get(typeof l.target === "string" ? l.target : l.target.id)
    }));
    this.alpha = 1;
    this.startSimulation();
  }
  resize() {
    const rect = this.container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = rect.width || 800;
    const height = rect.height || 600;
    this.canvas.width = width * dpr;
    this.canvas.height = height * dpr;
    this.canvas.style.width = `${width}px`;
    this.canvas.style.height = `${height}px`;
    this.ctx.scale(dpr, dpr);
    if (this.offsetX === 0 && this.offsetY === 0) {
      this.offsetX = width / 2;
      this.offsetY = height / 2;
    }
  }
  startSimulation() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    const step = () => {
      if (this.targetScale !== null && this.targetOffsetX !== null && this.targetOffsetY !== null) {
        this.scale += (this.targetScale - this.scale) * 0.12;
        this.offsetX += (this.targetOffsetX - this.offsetX) * 0.12;
        this.offsetY += (this.targetOffsetY - this.offsetY) * 0.12;
        if (Math.abs(this.scale - this.targetScale) < 5e-3 && Math.abs(this.offsetX - this.targetOffsetX) < 0.5 && Math.abs(this.offsetY - this.targetOffsetY) < 0.5) {
          this.scale = this.targetScale;
          this.offsetX = this.targetOffsetX;
          this.offsetY = this.targetOffsetY;
          this.targetScale = null;
          this.targetOffsetX = null;
          this.targetOffsetY = null;
        }
      }
      if (this.isSimulationRunning) {
        this.tick();
      }
      this.render();
      this.animationFrameId = requestAnimationFrame(step);
    };
    this.animationFrameId = requestAnimationFrame(step);
  }
  /**
   * Obsidian-grade Velocity Verlet force integration.
   */
  tick() {
    if (this.alpha < this.alphaMin) {
      return;
    }
    const width = this.canvas.width / (window.devicePixelRatio || 1);
    const height = this.canvas.height / (window.devicePixelRatio || 1);
    const centerX = width / 2;
    const centerY = height / 2;
    const gravity = this.config.gravity * this.alpha;
    for (const node of this.nodes) {
      node.vx += (centerX - node.x) * gravity;
      node.vy += (centerY - node.y) * gravity;
    }
    const repulsion = this.config.repulsion * this.alpha;
    for (let i = 0; i < this.nodes.length; i++) {
      const nodeA = this.nodes[i];
      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeB = this.nodes[j];
        const dx = nodeB.x - nodeA.x;
        const dy = nodeB.y - nodeA.y;
        let distSq = dx * dx + dy * dy;
        if (distSq === 0) distSq = 1;
        const dist = Math.sqrt(distSq);
        const minDist = (nodeA.radius + nodeB.radius) * this.config.nodeSizeMultiplier + 36;
        const multiplier = nodeA.type === "book" || nodeB.type === "book" ? 3.5 : 1.4;
        const force = repulsion / distSq * multiplier;
        const fx = dx / dist * force;
        const fy = dy / dist * force;
        if (!nodeA.isDragging) {
          nodeA.vx -= fx;
          nodeA.vy -= fy;
        }
        if (!nodeB.isDragging) {
          nodeB.vx += fx;
          nodeB.vy += fy;
        }
        if (dist < minDist) {
          const overlap = (minDist - dist) * 0.7 * this.alpha;
          const sx = dx / dist * overlap;
          const sy = dy / dist * overlap;
          if (!nodeA.isDragging) {
            nodeA.x -= sx;
            nodeA.y -= sy;
          }
          if (!nodeB.isDragging) {
            nodeB.x += sx;
            nodeB.y += sy;
          }
        }
      }
    }
    for (const link of this.links) {
      if (!link.sourceNode || !link.targetNode) continue;
      const source = link.sourceNode;
      const target = link.targetNode;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const targetDist = link.type === "contains" ? this.config.linkDistance : this.config.linkDistance * 1.6;
      const strength = (link.strength || 0.5) * this.config.linkStrength * this.alpha;
      const displacement = (dist - targetDist) * strength;
      const fx = dx / dist * displacement;
      const fy = dy / dist * displacement;
      if (!source.isDragging) {
        source.vx += fx;
        source.vy += fy;
      }
      if (!target.isDragging) {
        target.vx -= fx;
        target.vy -= fy;
      }
    }
    for (const node of this.nodes) {
      if (node.isDragging) continue;
      node.vx *= this.config.damping;
      node.vy *= this.config.damping;
      node.x += node.vx;
      node.y += node.vy;
    }
    this.alpha *= 1 - this.alphaDecay;
  }
  render() {
    const dpr = window.devicePixelRatio || 1;
    const width = this.canvas.width / dpr;
    const height = this.canvas.height / dpr;
    this.ctx.clearRect(0, 0, width, height);
    this.ctx.fillStyle = "#0a0d14";
    this.ctx.fillRect(0, 0, width, height);
    if (this.config.showParticles) {
      this.ctx.save();
      for (const p of this.starfieldGrid) {
        const px = ((p.x * this.scale + this.offsetX) % width + width) % width;
        const py = ((p.y * this.scale + this.offsetY) % height + height) % height;
        this.ctx.beginPath();
        this.ctx.arc(px, py, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = `rgba(168, 185, 247, ${p.opacity * Math.min(1, this.scale)})`;
        this.ctx.fill();
      }
      this.ctx.restore();
    }
    this.ctx.save();
    this.ctx.translate(this.offsetX, this.offsetY);
    this.ctx.scale(this.scale, this.scale);
    this.ctx.translate(-width / 2, -height / 2);
    const activeNode = this.hoveredNode || this.selectedNode;
    for (const link of this.links) {
      if (!link.sourceNode || !link.targetNode) continue;
      const source = link.sourceNode;
      const target = link.targetNode;
      const isConnected = activeNode && (source.id === activeNode.id || target.id === activeNode.id);
      this.ctx.beginPath();
      this.ctx.moveTo(source.x, source.y);
      this.ctx.lineTo(target.x, target.y);
      if (isConnected) {
        this.ctx.strokeStyle = "rgba(168, 85, 247, 0.85)";
        this.ctx.lineWidth = (link.type === "contains" ? 2.5 : 1.8) / Math.sqrt(this.scale);
      } else {
        const isDimmed = activeNode !== null;
        this.ctx.strokeStyle = isDimmed ? "rgba(255, 255, 255, 0.03)" : link.type === "contains" ? "rgba(255, 255, 255, 0.12)" : "rgba(56, 189, 248, 0.18)";
        this.ctx.lineWidth = (link.type === "contains" ? 1.2 : 0.8) / Math.sqrt(this.scale);
      }
      this.ctx.stroke();
    }
    for (const node of this.nodes) {
      const isHovered = this.hoveredNode?.id === node.id;
      const isSelected = this.selectedNode?.id === node.id;
      const isConnectedToActive = activeNode ? this.areNodesConnected(node, activeNode) : false;
      const isDimmed = activeNode !== null && !isHovered && !isSelected && !isConnectedToActive;
      const nx = node.x;
      const ny = node.y;
      const r = node.radius * this.config.nodeSizeMultiplier;
      this.ctx.save();
      this.ctx.globalAlpha = isDimmed ? 0.2 : 1;
      let coreColor = "#6366f1";
      let haloColor = "rgba(99, 102, 241, 0.25)";
      if (node.type === "book") {
        coreColor = "#a855f7";
        haloColor = "rgba(168, 85, 247, 0.35)";
      } else if (node.type === "topic") {
        coreColor = "#06b6d4";
        haloColor = "rgba(6, 182, 212, 0.3)";
      } else if (node.color === "yellow") {
        coreColor = "#f59e0b";
        haloColor = "rgba(245, 158, 11, 0.25)";
      } else if (node.color === "blue") {
        coreColor = "#38bdf8";
        haloColor = "rgba(56, 189, 248, 0.25)";
      } else if (node.color === "pink") {
        coreColor = "#f43f5e";
        haloColor = "rgba(244, 63, 94, 0.25)";
      } else if (node.color === "orange") {
        coreColor = "#fb923c";
        haloColor = "rgba(251, 146, 60, 0.25)";
      }
      const haloRadius = (isHovered || isSelected ? r * 2.4 : r * 1.6) / Math.sqrt(this.scale);
      const grad = this.ctx.createRadialGradient(nx, ny, r * 0.5, nx, ny, haloRadius);
      grad.addColorStop(0, haloColor);
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      this.ctx.fillStyle = grad;
      this.ctx.beginPath();
      this.ctx.arc(nx, ny, haloRadius, 0, Math.PI * 2);
      this.ctx.fill();
      if (node.type === "book") {
        this.ctx.beginPath();
        this.ctx.arc(nx, ny, r + 5 / Math.sqrt(this.scale), 0, Math.PI * 2);
        this.ctx.strokeStyle = isHovered || isSelected ? "#ffffff" : "rgba(168, 85, 247, 0.6)";
        this.ctx.lineWidth = 2 / Math.sqrt(this.scale);
        this.ctx.stroke();
      }
      this.ctx.beginPath();
      this.ctx.arc(nx, ny, r, 0, Math.PI * 2);
      this.ctx.fillStyle = coreColor;
      this.ctx.fill();
      this.ctx.strokeStyle = isHovered || isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.35)";
      this.ctx.lineWidth = (isHovered ? 2.5 : 1.2) / Math.sqrt(this.scale);
      this.ctx.stroke();
      const shouldShowLabel = this.config.showLabels && (node.type === "book" || node.type === "topic" || isHovered || isSelected || isConnectedToActive || this.scale > 1.8);
      if (shouldShowLabel) {
        const fontSize = node.type === "book" ? 13 : node.type === "topic" ? 11.5 : 10;
        this.ctx.font = `${node.type === "book" ? "700" : "600"} ${fontSize / Math.sqrt(this.scale)}px Inter, sans-serif`;
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "top";
        let displayLabel = node.label;
        if (node.type === "highlight" && displayLabel.length > 24) {
          displayLabel = displayLabel.substring(0, 22) + "...";
        }
        const labelY = ny + r + 4 / Math.sqrt(this.scale);
        this.ctx.fillStyle = "rgba(10, 13, 20, 0.85)";
        const textMetrics = this.ctx.measureText(displayLabel);
        const padX = 5 / Math.sqrt(this.scale);
        const padY = 2.5 / Math.sqrt(this.scale);
        const textHeight = fontSize / Math.sqrt(this.scale);
        this.ctx.fillRect(
          nx - textMetrics.width / 2 - padX,
          labelY - padY,
          textMetrics.width + padX * 2,
          textHeight + padY * 2
        );
        this.ctx.fillStyle = isHovered || isSelected ? "#ffffff" : node.type === "book" ? "#f1f5f9" : node.type === "topic" ? "#67e8f9" : "rgba(255, 255, 255, 0.85)";
        this.ctx.fillText(displayLabel, nx, labelY);
      }
      this.ctx.restore();
    }
    this.ctx.restore();
  }
  areNodesConnected(a, b) {
    return this.links.some(
      (l) => l.sourceNode?.id === a.id && l.targetNode?.id === b.id || l.sourceNode?.id === b.id && l.targetNode?.id === a.id
    );
  }
  getNodeAtPosition(screenX, screenY) {
    const width = this.canvas.width / (window.devicePixelRatio || 1);
    const height = this.canvas.height / (window.devicePixelRatio || 1);
    const graphX = (screenX - this.offsetX) / this.scale + width / 2;
    const graphY = (screenY - this.offsetY) / this.scale + height / 2;
    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const node = this.nodes[i];
      const dx = graphX - node.x;
      const dy = graphY - node.y;
      const r = node.radius * this.config.nodeSizeMultiplier + 6;
      if (dx * dx + dy * dy <= r * r) {
        return node;
      }
    }
    return null;
  }
  /**
   * Smoothly animates camera viewport to center and zoom in on a node.
   */
  flyToNode(node, targetZoom = 1.8) {
    const width = this.canvas.width / (window.devicePixelRatio || 1);
    const height = this.canvas.height / (window.devicePixelRatio || 1);
    this.targetScale = targetZoom;
    this.targetOffsetX = width / 2 - (node.x - width / 2) * targetZoom;
    this.targetOffsetY = height / 2 - (node.y - height / 2) * targetZoom;
    this.selectedNode = node;
  }
  createObsidianHUD() {
    this.hudElement = document.createElement("div");
    this.hudElement.className = "obsidian-graph-hud";
    this.hudElement.innerHTML = `
      <div class="hud-panel-header">
        <div class="hud-title-row">
          <span class="hud-icon">\u2699\uFE0F</span>
          <span class="hud-title">Graph Controls</span>
        </div>
        <button id="btn-toggle-hud" class="hud-btn-minimize" aria-label="Toggle HUD">\u2014</button>
      </div>

      <div class="hud-body">
        <div class="hud-section">
          <span class="hud-section-label">Forces</span>
          <div class="hud-slider-group">
            <label>Repulsion <span id="val-repulsion">${this.config.repulsion}</span></label>
            <input type="range" id="slider-repulsion" min="300" max="2500" value="${this.config.repulsion}" />
          </div>
          <div class="hud-slider-group">
            <label>Link Distance <span id="val-distance">${this.config.linkDistance}</span></label>
            <input type="range" id="slider-distance" min="60" max="300" value="${this.config.linkDistance}" />
          </div>
          <div class="hud-slider-group">
            <label>Center Gravity <span id="val-gravity">${Math.round(this.config.gravity * 1e3)}</span></label>
            <input type="range" id="slider-gravity" min="1" max="25" value="${Math.round(this.config.gravity * 1e3)}" />
          </div>
        </div>

        <div class="hud-section">
          <span class="hud-section-label">Display</span>
          <div class="hud-toggle-row">
            <label><input type="checkbox" id="chk-labels" ${this.config.showLabels ? "checked" : ""} /> Show Labels</label>
            <label><input type="checkbox" id="chk-particles" ${this.config.showParticles ? "checked" : ""} /> Starfield Grid</label>
          </div>
        </div>

        <div class="hud-actions-row">
          <button id="btn-reset-camera" class="btn-hud-action">Reset View</button>
          <button id="btn-toggle-sim" class="btn-hud-action">Freeze</button>
        </div>
      </div>
    `;
    this.container.appendChild(this.hudElement);
    const toggleBtn = this.hudElement.querySelector("#btn-toggle-hud");
    const hudBody = this.hudElement.querySelector(".hud-body");
    toggleBtn?.addEventListener("click", () => {
      if (hudBody) {
        hudBody.style.display = hudBody.style.display === "none" ? "flex" : "none";
        toggleBtn.textContent = hudBody.style.display === "none" ? "+" : "\u2014";
      }
    });
    const sRep = this.hudElement.querySelector("#slider-repulsion");
    sRep?.addEventListener("input", () => {
      this.config.repulsion = Number(sRep.value);
      const val = this.hudElement?.querySelector("#val-repulsion");
      if (val) val.textContent = sRep.value;
      this.alpha = Math.max(this.alpha, 0.4);
    });
    const sDist = this.hudElement.querySelector("#slider-distance");
    sDist?.addEventListener("input", () => {
      this.config.linkDistance = Number(sDist.value);
      const val = this.hudElement?.querySelector("#val-distance");
      if (val) val.textContent = sDist.value;
      this.alpha = Math.max(this.alpha, 0.4);
    });
    const sGrav = this.hudElement.querySelector("#slider-gravity");
    sGrav?.addEventListener("input", () => {
      this.config.gravity = Number(sGrav.value) / 1e3;
      const val = this.hudElement?.querySelector("#val-gravity");
      if (val) val.textContent = sGrav.value;
      this.alpha = Math.max(this.alpha, 0.4);
    });
    const chkLabels = this.hudElement.querySelector("#chk-labels");
    chkLabels?.addEventListener("change", () => {
      this.config.showLabels = chkLabels.checked;
    });
    const chkPart = this.hudElement.querySelector("#chk-particles");
    chkPart?.addEventListener("change", () => {
      this.config.showParticles = chkPart.checked;
    });
    this.hudElement.querySelector("#btn-reset-camera")?.addEventListener("click", () => this.resetView());
    const btnSim = this.hudElement.querySelector("#btn-toggle-sim");
    btnSim?.addEventListener("click", () => {
      const running = this.togglePhysics();
      if (btnSim) btnSim.textContent = running ? "Freeze" : "Unfreeze";
    });
  }
  initEvents() {
    window.addEventListener("resize", () => this.resize());
    this.canvas.addEventListener("mousemove", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      if (this.draggedNode) {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        this.draggedNode.x = (mouseX - this.offsetX) / this.scale + width / 2;
        this.draggedNode.y = (mouseY - this.offsetY) / this.scale + height / 2;
        this.alpha = Math.max(this.alpha, 0.4);
        return;
      }
      if (this.isPanning) {
        this.offsetX += mouseX - this.panStartX;
        this.offsetY += mouseY - this.panStartY;
        this.panStartX = mouseX;
        this.panStartY = mouseY;
        return;
      }
      const hit = this.getNodeAtPosition(mouseX, mouseY);
      this.hoveredNode = hit;
      this.canvas.style.cursor = hit ? "pointer" : "grab";
    });
    this.canvas.addEventListener("mousedown", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const hit = this.getNodeAtPosition(mouseX, mouseY);
      if (hit) {
        this.draggedNode = hit;
        hit.isDragging = true;
        this.alpha = 0.6;
      } else {
        this.isPanning = true;
        this.panStartX = mouseX;
        this.panStartY = mouseY;
        this.canvas.style.cursor = "grabbing";
      }
    });
    window.addEventListener("mouseup", (e) => {
      if (this.draggedNode) {
        this.draggedNode.isDragging = false;
        this.draggedNode = null;
      }
      this.isPanning = false;
      this.canvas.style.cursor = this.hoveredNode ? "pointer" : "grab";
    });
    this.canvas.addEventListener("click", (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const hit = this.getNodeAtPosition(mouseX, mouseY);
      if (hit) {
        this.flyToNode(hit);
        if (this.onNodeClickCallback) {
          this.onNodeClickCallback(hit);
        }
      } else {
        this.selectedNode = null;
      }
    });
    this.canvas.addEventListener("wheel", (e) => {
      e.preventDefault();
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const zoomFactor = e.deltaY < 0 ? 1.14 : 0.86;
      const newScale = Math.max(this.minScale, Math.min(this.maxScale, this.scale * zoomFactor));
      this.offsetX = mouseX - (mouseX - this.offsetX) * (newScale / this.scale);
      this.offsetY = mouseY - (mouseY - this.offsetY) * (newScale / this.scale);
      this.scale = newScale;
    }, { passive: false });
    let initialPinchDist = null;
    let initialPinchScale = 1;
    this.canvas.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        const hit = this.getNodeAtPosition(touchX, touchY);
        if (hit) {
          this.draggedNode = hit;
          hit.isDragging = true;
          this.alpha = 0.6;
        } else {
          this.isPanning = true;
          this.panStartX = touchX;
          this.panStartY = touchY;
        }
      } else if (e.touches.length === 2) {
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        initialPinchDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        initialPinchScale = this.scale;
      }
    }, { passive: true });
    this.canvas.addEventListener("touchmove", (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        const rect = this.canvas.getBoundingClientRect();
        const touchX = touch.clientX - rect.left;
        const touchY = touch.clientY - rect.top;
        if (this.draggedNode) {
          const width = this.canvas.width / (window.devicePixelRatio || 1);
          const height = this.canvas.height / (window.devicePixelRatio || 1);
          this.draggedNode.x = (touchX - this.offsetX) / this.scale + width / 2;
          this.draggedNode.y = (touchY - this.offsetY) / this.scale + height / 2;
          this.alpha = Math.max(this.alpha, 0.4);
          return;
        }
        if (this.isPanning) {
          this.offsetX += touchX - this.panStartX;
          this.offsetY += touchY - this.panStartY;
          this.panStartX = touchX;
          this.panStartY = touchY;
        }
      } else if (e.touches.length === 2 && initialPinchDist !== null) {
        const t1 = e.touches[0];
        const t2 = e.touches[1];
        const currentDist = Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
        const pinchRatio = currentDist / initialPinchDist;
        this.scale = Math.max(this.minScale, Math.min(this.maxScale, initialPinchScale * pinchRatio));
      }
    }, { passive: true });
    this.canvas.addEventListener("touchend", () => {
      if (this.draggedNode) {
        this.draggedNode.isDragging = false;
        this.draggedNode = null;
      }
      this.isPanning = false;
      initialPinchDist = null;
    });
  }
  zoomIn() {
    this.scale = Math.min(this.maxScale, this.scale * 1.25);
  }
  zoomOut() {
    this.scale = Math.max(this.minScale, this.scale * 0.8);
  }
  resetView() {
    const rect = this.container.getBoundingClientRect();
    this.scale = 1;
    this.targetScale = null;
    this.targetOffsetX = null;
    this.targetOffsetY = null;
    this.offsetX = (rect.width || 800) / 2;
    this.offsetY = (rect.height || 600) / 2;
    this.selectedNode = null;
    this.alpha = 1;
  }
  togglePhysics() {
    this.isSimulationRunning = !this.isSimulationRunning;
    if (this.isSimulationRunning) this.alpha = 0.5;
    return this.isSimulationRunning;
  }
};

// src/components/reading-cards.ts
var ReadingCardsComponent = class {
  container;
  currentTab = "highlights";
  onSelectHighlight;
  onSelectBook;
  onUpdateBookStatus;
  onOpenQuoteCard;
  constructor(container, callbacks) {
    this.container = container;
    this.onSelectHighlight = callbacks?.onSelectHighlight;
    this.onSelectBook = callbacks?.onSelectBook;
    this.onUpdateBookStatus = callbacks?.onUpdateBookStatus;
    this.onOpenQuoteCard = callbacks?.onOpenQuoteCard;
  }
  render(books, highlights) {
    this.container.innerHTML = "";
    const navHeader = document.createElement("div");
    navHeader.className = "cards-nav-header";
    const subtabsContainer = document.createElement("div");
    subtabsContainer.className = "cards-subtabs";
    const tabDefs = [
      { id: "highlights", label: `Highlights (${highlights.length})`, icon: "\u{1F4AC}" },
      { id: "books", label: `Book Shelf (${books.length})`, icon: "\u{1F4DA}" },
      { id: "kanban", label: "Reading OS Kanban", icon: "\u{1F4CA}" }
    ];
    tabDefs.forEach((tab) => {
      const btn = document.createElement("button");
      btn.className = `subtab-btn ${this.currentTab === tab.id ? "active" : ""}`;
      btn.setAttribute("data-subtab", tab.id);
      btn.innerHTML = `<span>${tab.icon}</span> <span>${tab.label}</span>`;
      btn.addEventListener("click", () => {
        this.currentTab = tab.id;
        this.render(books, highlights);
      });
      subtabsContainer.appendChild(btn);
    });
    navHeader.appendChild(subtabsContainer);
    this.container.appendChild(navHeader);
    const contentBody = document.createElement("div");
    contentBody.className = "cards-content-body";
    if (this.currentTab === "highlights") {
      contentBody.appendChild(this.createHighlightsGrid(highlights));
    } else if (this.currentTab === "books") {
      contentBody.appendChild(this.createBooksGrid(books));
    } else if (this.currentTab === "kanban") {
      contentBody.appendChild(this.createKanbanBoard(books));
    }
    this.container.appendChild(contentBody);
  }
  createHighlightsGrid(highlights) {
    const grid = document.createElement("div");
    grid.className = "highlights-masonry-grid";
    if (highlights.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty-state-editorial";
      empty.innerHTML = `
        <div class="empty-icon-ring">\u{1F50D}</div>
        <h3>No Highlights Found</h3>
        <p>No annotations match your active search filters or selected book.</p>
      `;
      grid.appendChild(empty);
      return grid;
    }
    highlights.forEach((hl) => {
      const card = document.createElement("article");
      card.className = `editorial-highlight-card color-rail-${hl.color}`;
      const colorLabel = hl.color === "blue" ? "Quote / Fact" : hl.color === "pink" ? "Critical / Action" : hl.color === "orange" ? "Thematic / Story" : "Key Insight";
      card.innerHTML = `
        <div class="card-meta-row">
          <span class="card-book-badge" title="${this.escapeHtml(hl.bookTitle)}">\u{1F4D6} ${this.escapeHtml(hl.bookTitle)}</span>
          <span class="card-loc-pill">${hl.location ? `Loc ${hl.location}` : "Note"}</span>
        </div>

        <blockquote class="editorial-quote">\u201C${this.escapeHtml(hl.rawText)}\u201D</blockquote>

        ${hl.sourceNote ? `<div class="editorial-note-box"><strong>\u270D\uFE0F Note:</strong> ${this.escapeHtml(hl.sourceNote)}</div>` : ""}
        ${hl.interpretation ? `<div class="editorial-reflection-box"><strong>\u{1F9E0} Reflection:</strong> ${this.escapeHtml(hl.interpretation)}</div>` : ""}

        <div class="editorial-card-footer">
          <div class="card-tag-group">
            <span class="card-tag-pill tag-${hl.color}">${colorLabel}</span>
            ${hl.importance ? `<span class="importance-badge imp-${hl.importance.toLowerCase()}">${hl.importance}</span>` : ""}
          </div>

          <div class="card-quick-actions">
            <button class="btn-card-action btn-copy-quote" title="Copy Quote Markdown" aria-label="Copy Quote">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            </button>
            <button class="btn-card-action btn-artboard-quote" title="Open Social Quote Studio" aria-label="Social Quote Artboard">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            </button>
          </div>
        </div>
      `;
      const btnCopy = card.querySelector(".btn-copy-quote");
      btnCopy?.addEventListener("click", (e) => {
        e.stopPropagation();
        const mdText = `> "${hl.rawText}"
> \u2014 **${hl.bookTitle}** (Loc ${hl.location || "N/A"})`;
        navigator.clipboard?.writeText(mdText);
        btnCopy.innerHTML = `<span style="color:#10b981;font-size:11px;font-weight:700;">\u2713</span>`;
        setTimeout(() => {
          btnCopy.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
        }, 1500);
      });
      const btnArtboard = card.querySelector(".btn-artboard-quote");
      btnArtboard?.addEventListener("click", (e) => {
        e.stopPropagation();
        if (this.onOpenQuoteCard) {
          this.onOpenQuoteCard(hl);
        } else if (this.onSelectHighlight) {
          this.onSelectHighlight(hl);
        }
      });
      card.addEventListener("click", () => {
        if (this.onSelectHighlight) this.onSelectHighlight(hl);
      });
      grid.appendChild(card);
    });
    return grid;
  }
  createBooksGrid(books) {
    const grid = document.createElement("div");
    grid.className = "books-shelf-grid";
    books.forEach((book) => {
      const card = document.createElement("article");
      card.className = "book-shelf-card";
      card.innerHTML = `
        <div class="book-cover-placeholder">
          <span class="book-cover-emoji">\u{1F4D6}</span>
        </div>
        <div class="book-shelf-details">
          <h3 class="book-shelf-title">${this.escapeHtml(book.title)}</h3>
          <p class="book-shelf-author">By ${this.escapeHtml(book.author)}</p>
          <div class="book-shelf-stats">
            <span>\u{1F4A1} <strong>${book.highlightsCount}</strong> Highlights</span>
            <span class="status-pill status-${book.status || "reading"}">${book.status || "reading"}</span>
          </div>
          ${book.tags && book.tags.length > 0 ? `<div class="book-tags-row">${book.tags.map((t) => `<span class="book-tag-chip">#${this.escapeHtml(t)}</span>`).join(" ")}</div>` : ""}
        </div>
      `;
      card.addEventListener("click", () => {
        if (this.onSelectBook) this.onSelectBook(book.id);
      });
      grid.appendChild(card);
    });
    return grid;
  }
  createKanbanBoard(books) {
    const kanban = document.createElement("div");
    kanban.className = "kanban-board-container";
    const columns = [
      { id: "reading", title: "Currently Reading", emoji: "\u{1F4D6}" },
      { id: "completed", title: "Completed & Processed", emoji: "\u2705" },
      { id: "want_to_read", title: "Want to Read", emoji: "\u{1F516}" }
    ];
    columns.forEach((col) => {
      const colBooks = books.filter((b) => (b.status || "reading") === col.id);
      const colEl = document.createElement("div");
      colEl.className = "kanban-column";
      const header = document.createElement("div");
      header.className = "kanban-col-header";
      header.innerHTML = `
        <span class="kanban-col-title">${col.emoji} ${col.title}</span>
        <span class="kanban-col-count">${colBooks.length}</span>
      `;
      colEl.appendChild(header);
      const stack = document.createElement("div");
      stack.className = "kanban-cards-stack";
      stack.setAttribute("data-status", col.id);
      colBooks.forEach((book) => {
        const item = document.createElement("div");
        item.className = "kanban-book-item";
        item.innerHTML = `
          <h4 class="kanban-item-title">${this.escapeHtml(book.title)}</h4>
          <p class="kanban-item-author">${this.escapeHtml(book.author)}</p>
          <div class="kanban-item-meta">
            <span>\u{1F4A1} ${book.highlightsCount} notes</span>
            <select class="kanban-status-select" aria-label="Change status">
              <option value="reading" ${book.status === "reading" ? "selected" : ""}>Reading</option>
              <option value="completed" ${book.status === "completed" ? "selected" : ""}>Completed</option>
              <option value="want_to_read" ${book.status === "want_to_read" ? "selected" : ""}>Want to Read</option>
            </select>
          </div>
        `;
        const select = item.querySelector(".kanban-status-select");
        if (select) {
          select.addEventListener("click", (e) => e.stopPropagation());
          select.addEventListener("change", () => {
            const nextStatus = select.value;
            if (this.onUpdateBookStatus) {
              this.onUpdateBookStatus(book.id, nextStatus);
            }
          });
        }
        item.addEventListener("click", () => {
          if (this.onSelectBook) this.onSelectBook(book.id);
        });
        stack.appendChild(item);
      });
      colEl.appendChild(stack);
      kanban.appendChild(colEl);
    });
    return kanban;
  }
  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};

// src/components/quote-card-modal.ts
var QuoteCardModal = class {
  container;
  currentHighlight = null;
  // Customizer State
  currentTheme = "obsidian";
  currentRatio = "1:1";
  fontStyle = "serif";
  textAlign = "left";
  fontSize = 44;
  canvas;
  ctx;
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "quote-modal-backdrop";
    this.container.style.display = "none";
    document.body.appendChild(this.container);
    this.canvas = document.createElement("canvas");
    const context = this.canvas.getContext("2d");
    if (!context) throw new Error("Could not get 2D context for quote card.");
    this.ctx = context;
    this.initDOM();
  }
  initDOM() {
    this.container.innerHTML = `
      <div class="quote-modal-window" role="dialog" aria-labelledby="quote-modal-title" aria-modal="true">
        <div class="quote-modal-header">
          <div class="quote-modal-title-row">
            <span class="quote-modal-icon">\u2728</span>
            <h3 id="quote-modal-title" class="quote-modal-title">Social Quote Artboard Studio</h3>
          </div>
          <button id="btn-close-quote-modal" class="btn-modal-close" aria-label="Close modal">&times;</button>
        </div>

        <div class="quote-modal-body">
          <!-- Canvas Live Artboard Preview -->
          <div class="quote-canvas-preview-wrapper">
            <div id="quote-canvas-mount" class="quote-canvas-mount"></div>
          </div>

          <!-- Studio Customization Controls -->
          <div class="quote-modal-controls">
            <!-- 1. Theme Presets -->
            <div class="control-group">
              <label class="control-label">Theme Presets</label>
              <div class="theme-options-grid">
                <button class="theme-btn theme-obsidian active" data-theme="obsidian">Obsidian</button>
                <button class="theme-btn theme-sunset" data-theme="sunset">Sunset Gold</button>
                <button class="theme-btn theme-emerald" data-theme="emerald">Emerald</button>
                <button class="theme-btn theme-minimal" data-theme="minimal">Minimal Slate</button>
              </div>
            </div>

            <!-- 2. Aspect Ratio -->
            <div class="control-group">
              <label class="control-label">Aspect Ratio</label>
              <div class="ratio-options-grid">
                <button class="ratio-btn active" data-ratio="1:1">1:1 Square</button>
                <button class="ratio-btn" data-ratio="4:5">4:5 Portrait</button>
                <button class="ratio-btn" data-ratio="9:16">9:16 Story</button>
                <button class="ratio-btn" data-ratio="16:9">16:9 Banner</button>
              </div>
            </div>

            <!-- 3. Typography & Styling -->
            <div class="control-group">
              <label class="control-label">Typography & Alignment</label>
              <div class="typo-options-row">
                <div class="typo-btn-group">
                  <button id="btn-font-serif" class="typo-toggle-btn active" data-font="serif">Serif</button>
                  <button id="btn-font-sans" class="typo-toggle-btn" data-font="sans">Sans</button>
                </div>
                <div class="typo-btn-group">
                  <button class="align-btn active" data-align="left">Left</button>
                  <button class="align-btn" data-align="center">Center</button>
                  <button class="align-btn" data-align="right">Right</button>
                </div>
              </div>
            </div>

            <!-- 4. Font Size Slider -->
            <div class="control-group">
              <div class="slider-label-row">
                <label class="control-label">Font Size</label>
                <span id="label-font-size" class="slider-val-text">${this.fontSize}px</span>
              </div>
              <input type="range" id="slider-font-size" min="28" max="64" value="${this.fontSize}" class="quote-slider" />
            </div>

            <!-- 5. Export Actions -->
            <div class="modal-actions-footer">
              <button id="btn-copy-card-image" class="btn btn-secondary btn-full">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
                <span id="txt-copy-image">Copy Image to Clipboard</span>
              </button>
              <button id="btn-download-card-png" class="btn btn-primary btn-full">
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
                <span>Download High-Res PNG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    const canvasMount = this.container.querySelector("#quote-canvas-mount");
    if (canvasMount) {
      canvasMount.appendChild(this.canvas);
    }
    this.container.querySelector("#btn-close-quote-modal")?.addEventListener("click", () => this.close());
    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) this.close();
    });
    this.container.querySelectorAll(".theme-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const theme = btn.getAttribute("data-theme");
        if (theme) {
          this.currentTheme = theme;
          this.container.querySelectorAll(".theme-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderCanvas();
        }
      });
    });
    this.container.querySelectorAll(".ratio-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const ratio = btn.getAttribute("data-ratio");
        if (ratio) {
          this.currentRatio = ratio;
          this.container.querySelectorAll(".ratio-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderCanvas();
        }
      });
    });
    this.container.querySelectorAll(".typo-toggle-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const font = btn.getAttribute("data-font");
        if (font) {
          this.fontStyle = font;
          this.container.querySelectorAll(".typo-toggle-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderCanvas();
        }
      });
    });
    this.container.querySelectorAll(".align-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const align = btn.getAttribute("data-align");
        if (align) {
          this.textAlign = align;
          this.container.querySelectorAll(".align-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.renderCanvas();
        }
      });
    });
    const sFont = this.container.querySelector("#slider-font-size");
    sFont?.addEventListener("input", () => {
      this.fontSize = Number(sFont.value);
      const label = this.container.querySelector("#label-font-size");
      if (label) label.textContent = `${this.fontSize}px`;
      this.renderCanvas();
    });
    this.container.querySelector("#btn-copy-card-image")?.addEventListener("click", () => this.copyToClipboard());
    this.container.querySelector("#btn-download-card-png")?.addEventListener("click", () => this.downloadPNG());
  }
  open(highlight) {
    this.currentHighlight = highlight;
    this.container.style.display = "flex";
    this.renderCanvas();
  }
  close() {
    this.container.style.display = "none";
  }
  renderCanvas() {
    if (!this.currentHighlight) return;
    let width = 1200;
    let height = 1200;
    if (this.currentRatio === "9:16") {
      width = 1080;
      height = 1920;
    } else if (this.currentRatio === "16:9") {
      width = 1920;
      height = 1080;
    } else if (this.currentRatio === "4:5") {
      width = 1080;
      height = 1350;
    }
    this.canvas.width = width;
    this.canvas.height = height;
    if (this.currentTheme === "obsidian") {
      const grad = this.ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#080b12");
      grad.addColorStop(0.5, "#151829");
      grad.addColorStop(1, "#07090e");
      this.ctx.fillStyle = grad;
    } else if (this.currentTheme === "sunset") {
      const grad = this.ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#1c0b14");
      grad.addColorStop(0.5, "#3d1425");
      grad.addColorStop(1, "#18070f");
      this.ctx.fillStyle = grad;
    } else if (this.currentTheme === "emerald") {
      const grad = this.ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#051411");
      grad.addColorStop(0.5, "#0a2b24");
      grad.addColorStop(1, "#04110e");
      this.ctx.fillStyle = grad;
    } else {
      this.ctx.fillStyle = "#0c1017";
    }
    this.ctx.fillRect(0, 0, width, height);
    const accentColor = this.currentTheme === "sunset" ? "#f43f5e" : this.currentTheme === "emerald" ? "#10b981" : this.currentTheme === "minimal" ? "#38bdf8" : "#a855f7";
    const radialGlow = this.ctx.createRadialGradient(width / 2, height / 2, 50, width / 2, height / 2, width * 0.6);
    radialGlow.addColorStop(0, this.currentTheme === "sunset" ? "rgba(244, 63, 94, 0.15)" : this.currentTheme === "emerald" ? "rgba(16, 185, 129, 0.15)" : "rgba(168, 85, 247, 0.18)");
    radialGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    this.ctx.fillStyle = radialGlow;
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(40, 40, width - 80, height - 80);
    this.ctx.textAlign = "left";
    this.ctx.font = "700 24px -apple-system, Inter, sans-serif";
    this.ctx.fillStyle = accentColor;
    this.ctx.fillText("HAKIM INTELLIGENCE", 80, 105);
    this.ctx.font = "600 30px -apple-system, Inter, sans-serif";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
    this.ctx.fillText(`\u{1F4D6} ${this.currentHighlight.bookTitle}`, 80, 155);
    this.ctx.font = "bold 130px Georgia, serif";
    this.ctx.fillStyle = accentColor;
    this.ctx.globalAlpha = 0.35;
    this.ctx.fillText("\u201C", 75, 280);
    this.ctx.globalAlpha = 1;
    const paddingX = 90;
    const maxTextWidth = width - paddingX * 2;
    const lineHeight = this.fontSize * 1.55;
    const fontFamily = this.fontStyle === "serif" ? "Newsreader, Georgia, serif" : "Inter, -apple-system, sans-serif";
    this.ctx.font = `italic 500 ${this.fontSize}px ${fontFamily}`;
    this.ctx.fillStyle = "#ffffff";
    this.ctx.textAlign = this.textAlign;
    const words = this.currentHighlight.rawText.split(" ");
    const lines = [];
    let currentLine = "";
    for (let i = 0; i < words.length; i++) {
      const testLine = currentLine + words[i] + " ";
      const metrics = this.ctx.measureText(testLine);
      if (metrics.width > maxTextWidth && i > 0) {
        lines.push(currentLine.trim());
        currentLine = words[i] + " ";
      } else {
        currentLine = testLine;
      }
    }
    lines.push(currentLine.trim());
    const totalTextHeight = lines.length * lineHeight;
    let startY = Math.max(340, (height - totalTextHeight) / 2);
    lines.forEach((lineText) => {
      const posX = this.textAlign === "center" ? width / 2 : this.textAlign === "right" ? width - paddingX : paddingX;
      this.ctx.fillText(lineText, posX, startY);
      startY += lineHeight;
    });
    const footerY = height - 90;
    this.ctx.textAlign = "left";
    this.ctx.font = "500 22px -apple-system, Inter, sans-serif";
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
    const locText = this.currentHighlight.location ? `Location ${this.currentHighlight.location}` : "Personal Annotation";
    this.ctx.fillText(locText, paddingX, footerY);
    this.ctx.textAlign = "right";
    this.ctx.fillText("hakim-reading.vercel.app", width - paddingX, footerY);
    this.ctx.textAlign = "left";
  }
  async copyToClipboard() {
    const txtSpan = this.container.querySelector("#txt-copy-image");
    if (!navigator.clipboard || !window.ClipboardItem) {
      if (txtSpan) txtSpan.textContent = "Clipboard API not supported in browser";
      return;
    }
    try {
      this.canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({ "image/png": blob })
        ]);
        if (txtSpan) {
          txtSpan.textContent = "\u2713 Image Copied to Clipboard!";
          setTimeout(() => {
            txtSpan.textContent = "Copy Image to Clipboard";
          }, 2200);
        }
      });
    } catch (e) {
      if (txtSpan) txtSpan.textContent = "Error copying image";
    }
  }
  downloadPNG() {
    const dataUrl = this.canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.download = `hakim-quote-${this.currentHighlight?.bookTitle.toLowerCase().replace(/\s+/g, "-") || "card"}.png`;
    link.href = dataUrl;
    link.click();
  }
};

// src/components/slideover-drawer.ts
var SlideoverDrawer = class {
  backdrop;
  panel;
  currentHighlight = null;
  quoteModal;
  store;
  constructor() {
    this.store = ReadingStateStore.getInstance();
    this.quoteModal = new QuoteCardModal();
    this.backdrop = document.createElement("div");
    this.backdrop.className = "slideover-backdrop";
    this.backdrop.style.display = "none";
    this.panel = document.createElement("aside");
    this.panel.className = "slideover-panel";
    this.backdrop.appendChild(this.panel);
    document.body.appendChild(this.backdrop);
    this.initEvents();
  }
  initEvents() {
    this.backdrop.addEventListener("click", (e) => {
      if (e.target === this.backdrop) this.close();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.backdrop.style.display !== "none") {
        this.close();
      }
    });
  }
  open(highlight) {
    this.currentHighlight = highlight;
    this.render();
    this.backdrop.style.display = "flex";
    setTimeout(() => this.panel.classList.add("open"), 10);
  }
  close() {
    this.panel.classList.remove("open");
    setTimeout(() => {
      this.backdrop.style.display = "none";
    }, 220);
  }
  render() {
    if (!this.currentHighlight) return;
    const hl = this.currentHighlight;
    const colorLabel = hl.color === "blue" ? "Quote / Fact" : hl.color === "pink" ? "Critical / Action" : hl.color === "orange" ? "Concept / Story" : "Key Insight";
    this.panel.innerHTML = `
      <div class="slideover-header">
        <div class="slideover-title-row">
          <span class="slideover-book-badge" title="${this.escapeHtml(hl.bookTitle)}">\u{1F4D6} ${this.escapeHtml(hl.bookTitle)}</span>
          <button id="btn-close-slideover" class="btn-drawer-close" aria-label="Close drawer">&times;</button>
        </div>
        <div class="slideover-meta-row">
          <span class="loc-tag">${hl.location ? `Loc ${hl.location}` : "Note"}</span>
          <span class="color-tag color-${hl.color}">${colorLabel}</span>
          ${hl.importance ? `<span class="importance-tag imp-${hl.importance.toLowerCase()}">${hl.importance} Priority</span>` : ""}
        </div>
      </div>

      <div class="slideover-body">
        <!-- Quote Inspection Box -->
        <div class="quote-inspection-card">
          <blockquote class="inspection-quote-text">\u201C${this.escapeHtml(hl.rawText)}\u201D</blockquote>
        </div>

        <!-- Academic & Markdown Citations -->
        <div class="inspection-section">
          <div class="citation-header-row">
            <h4 class="section-label">\u{1F4DC} Citations & Obsidian Wikilinks</h4>
            <div class="citation-format-picker">
              <button class="btn-cite-format active" data-fmt="obsidian">Obsidian</button>
              <button class="btn-cite-format" data-fmt="apa">APA 7</button>
              <button class="btn-cite-format" data-fmt="mla">MLA 9</button>
              <button class="btn-cite-format" data-fmt="chicago">Chicago</button>
            </div>
          </div>
          <div class="citation-preview-box">
            <code id="citation-text-content">${this.generateCitation(hl, "obsidian")}</code>
            <button id="btn-copy-active-citation" class="btn-copy-citation" title="Copy Citation">Copy</button>
          </div>
        </div>

        <!-- Kindle Note -->
        ${hl.sourceNote ? `
          <div class="inspection-section">
            <h4 class="section-label">\u270D\uFE0F Kindle Note</h4>
            <div class="note-box">${this.escapeHtml(hl.sourceNote)}</div>
          </div>
        ` : ""}

        <!-- Live Reflection Editor -->
        <div class="inspection-section">
          <div class="section-header-row">
            <h4 class="section-label">\u{1F9E0} Personal Reflection & Mental Model</h4>
            <span id="save-status-indicator" class="save-status">Saved</span>
          </div>
          <textarea id="drawer-reflection-input" class="drawer-reflection-editor" placeholder="Write your thoughts, synthesized insights, or practical applications...">${hl.interpretation || ""}</textarea>
        </div>

        <!-- Topics & Concept Chips -->
        ${hl.tags && hl.tags.length > 0 ? `
          <div class="inspection-section">
            <h4 class="section-label">\u{1F3F7}\uFE0F Topics & Concepts</h4>
            <div class="tags-cluster">
              ${hl.tags.map((t) => `<span class="topic-chip">#${this.escapeHtml(t)}</span>`).join(" ")}
            </div>
          </div>
        ` : ""}
      </div>

      <div class="slideover-footer">
        <button id="btn-open-quote-card" class="btn btn-primary btn-full">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Open Social Quote Studio</span>
        </button>
      </div>
    `;
    this.panel.querySelector("#btn-close-slideover")?.addEventListener("click", () => this.close());
    this.panel.querySelector("#btn-open-quote-card")?.addEventListener("click", () => {
      if (this.currentHighlight) {
        this.quoteModal.open(this.currentHighlight);
      }
    });
    let activeFormat = "obsidian";
    const citationCode = this.panel.querySelector("#citation-text-content");
    const formatButtons = this.panel.querySelectorAll(".btn-cite-format");
    formatButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        formatButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        activeFormat = btn.getAttribute("data-fmt") || "obsidian";
        if (citationCode) {
          citationCode.textContent = this.generateCitation(hl, activeFormat);
        }
      });
    });
    const btnCopyCite = this.panel.querySelector("#btn-copy-active-citation");
    btnCopyCite?.addEventListener("click", async () => {
      const text = citationCode?.textContent || "";
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
        if (btnCopyCite) {
          btnCopyCite.textContent = "Copied!";
          btnCopyCite.style.color = "#10b981";
          setTimeout(() => {
            btnCopyCite.textContent = "Copy";
            btnCopyCite.style.color = "";
          }, 1800);
        }
      }
    });
    const reflectionTextarea = this.panel.querySelector("#drawer-reflection-input");
    const saveIndicator = this.panel.querySelector("#save-status-indicator");
    let saveTimeout = null;
    reflectionTextarea?.addEventListener("input", () => {
      if (saveIndicator) saveIndicator.textContent = "Saving...";
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        if (this.currentHighlight) {
          this.currentHighlight.interpretation = reflectionTextarea.value;
          this.store.updateHighlightInterpretation(this.currentHighlight.id, reflectionTextarea.value);
          if (saveIndicator) saveIndicator.textContent = "Saved";
        }
      }, 500);
    });
  }
  generateCitation(hl, format) {
    const locStr = hl.location ? `Loc ${hl.location}` : "Personal Note";
    switch (format) {
      case "obsidian":
        return `> "${hl.rawText}"
> \u2014 [[Books/${hl.bookTitle}#^hl-${hl.id}]]`;
      case "apa":
        return `"${hl.rawText}" (${hl.bookTitle}, ${locStr}).`;
      case "mla":
        return `"${hl.rawText}." *${hl.bookTitle}*, Kindle ed., ${locStr}.`;
      case "chicago":
        return `"${hl.rawText}," *${hl.bookTitle}* (Kindle ed.), ${locStr}.`;
      default:
        return `> "${hl.rawText}"
> \u2014 **${hl.bookTitle}** (${locStr})`;
    }
  }
  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};

// src/components/active-recall.ts
var ActiveRecallComponent = class {
  container;
  deck = [];
  currentIndex = 0;
  isFlipped = false;
  stats = { total: 0, reviewed: 0, mastered: 0, hard: 0, currentStreak: 0, bestStreak: 0 };
  constructor(container) {
    this.container = container;
    this.initKeyboardEvents();
  }
  setDeck(highlights) {
    this.deck = [...highlights];
    this.currentIndex = 0;
    this.isFlipped = false;
    this.stats = {
      total: this.deck.length,
      reviewed: 0,
      mastered: 0,
      hard: 0,
      currentStreak: 0,
      bestStreak: 0
    };
    this.render();
  }
  initKeyboardEvents() {
    window.addEventListener("keydown", (e) => {
      if (this.container.style.display === "none") return;
      if (e.code === "Space") {
        e.preventDefault();
        this.flipCard();
      } else if (e.key === "1" || e.key === "ArrowLeft") {
        if (this.isFlipped) this.rateCard("hard");
      } else if (e.key === "2" || e.key === "ArrowDown") {
        if (this.isFlipped) this.rateCard("good");
      } else if (e.key === "3" || e.key === "ArrowRight") {
        if (this.isFlipped) this.rateCard("mastered");
      }
    });
  }
  flipCard() {
    this.isFlipped = !this.isFlipped;
    const cardInner = this.container.querySelector(".flashcard-inner");
    if (cardInner) {
      if (this.isFlipped) {
        cardInner.classList.add("is-flipped");
      } else {
        cardInner.classList.remove("is-flipped");
      }
    }
  }
  rateCard(rating) {
    if (rating === "hard") {
      this.stats.hard++;
      this.stats.currentStreak = 0;
      if (this.currentIndex < this.deck.length) {
        const current = this.deck[this.currentIndex];
        this.deck.push(current);
      }
    } else if (rating === "good") {
      this.stats.currentStreak++;
      this.stats.bestStreak = Math.max(this.stats.bestStreak, this.stats.currentStreak);
    } else if (rating === "mastered") {
      this.stats.mastered++;
      this.stats.currentStreak++;
      this.stats.bestStreak = Math.max(this.stats.bestStreak, this.stats.currentStreak);
    }
    this.stats.reviewed++;
    this.currentIndex++;
    this.isFlipped = false;
    this.render();
  }
  shuffle() {
    for (let i = this.deck.length - 1; i > this.currentIndex; i--) {
      const j = this.currentIndex + Math.floor(Math.random() * (i - this.currentIndex + 1));
      const temp = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = temp;
    }
    this.render();
  }
  restart() {
    this.currentIndex = 0;
    this.isFlipped = false;
    this.stats = {
      total: this.deck.length,
      reviewed: 0,
      mastered: 0,
      hard: 0,
      currentStreak: 0,
      bestStreak: 0
    };
    this.render();
  }
  render() {
    this.container.innerHTML = "";
    if (this.deck.length === 0) {
      this.container.innerHTML = `
        <div class="empty-flashcards-box">
          <p>No highlights in this library to review. Add or import highlights first!</p>
        </div>
      `;
      return;
    }
    if (this.currentIndex >= this.deck.length) {
      this.renderSummary();
      return;
    }
    const currentCard = this.deck[this.currentIndex];
    const progressPercent = Math.round(this.currentIndex / this.deck.length * 100);
    const stage = document.createElement("div");
    stage.className = "flashcard-stage";
    stage.innerHTML = `
      <!-- Progress Bar & Streak Info -->
      <div class="flashcard-progress-bar-wrapper">
        <div class="flashcard-progress-info">
          <span>Card <strong>${this.currentIndex + 1}</strong> of <strong>${this.deck.length}</strong></span>
          <span class="flashcard-streak-badge">${this.stats.currentStreak > 1 ? `\u{1F525} ${this.stats.currentStreak} Streak` : `${progressPercent}% Complete`}</span>
        </div>
        <div class="flashcard-progress-track">
          <div class="flashcard-progress-fill" style="width: ${progressPercent}%"></div>
        </div>
      </div>

      <!-- 3D Flippable Flashcard -->
      <div class="flashcard-scene">
        <div class="flashcard-inner ${this.isFlipped ? "is-flipped" : ""}">
          <!-- FRONT SIDE -->
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-header">
              <span class="flashcard-book-badge">\u{1F4D6} ${this.escapeHtml(currentCard.bookTitle)}</span>
              <span class="flashcard-hint-badge">\u{1F4A1} Active Recall Prompt</span>
            </div>
            <div class="flashcard-body">
              <p class="flashcard-prompt-label">What is the core insight or cognitive principle behind this quote?</p>
              <blockquote class="flashcard-prompt-quote">\u201C${this.escapeHtml(currentCard.rawText)}\u201D</blockquote>
            </div>
            <div class="flashcard-footer">
              <button id="btn-flip-card-front" class="btn btn-primary">
                <span>Reveal Concept Takeaway (Press Space)</span>
              </button>
            </div>
          </div>

          <!-- BACK SIDE -->
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-header">
              <span class="flashcard-book-badge">\u{1F4D6} ${this.escapeHtml(currentCard.bookTitle)}</span>
              <span class="flashcard-loc-pill">${currentCard.location ? `Loc ${currentCard.location}` : "Note"}</span>
            </div>
            <div class="flashcard-body">
              <div class="flashcard-back-section">
                <h4 class="section-sublabel">Original Highlight</h4>
                <p class="flashcard-back-quote">\u201C${this.escapeHtml(currentCard.rawText)}\u201D</p>
              </div>

              ${currentCard.sourceNote ? `
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u270D\uFE0F Your Note</h4>
                  <p class="flashcard-back-note">${this.escapeHtml(currentCard.sourceNote)}</p>
                </div>
              ` : ""}

              ${currentCard.interpretation ? `
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u{1F9E0} Hakim Concept Takeaway</h4>
                  <p class="flashcard-back-interp">${this.escapeHtml(currentCard.interpretation)}</p>
                </div>
              ` : ""}
            </div>

            <div class="flashcard-ratings-row">
              <button class="rating-btn rate-hard" data-rate="hard" title="Shortcut: 1 or Left Arrow">
                <span>\u{1F534} Again</span>
              </button>
              <button class="rating-btn rate-good" data-rate="good" title="Shortcut: 2 or Down Arrow">
                <span>\u{1F535} Good</span>
              </button>
              <button class="rating-btn rate-mastered" data-rate="mastered" title="Shortcut: 3 or Right Arrow">
                <span>\u{1F7E2} Mastered</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Shortcuts Legend -->
      <div class="flashcard-shortcuts-legend">
        <span><kbd>Space</kbd> Flip</span>
        <span><kbd>1</kbd> Again</span>
        <span><kbd>2</kbd> Good</span>
        <span><kbd>3</kbd> Mastered</span>
      </div>
    `;
    stage.querySelector("#btn-flip-card-front")?.addEventListener("click", () => this.flipCard());
    stage.querySelector(".flashcard-scene")?.addEventListener("click", (e) => {
      if (e.target.closest(".rating-btn")) return;
      this.flipCard();
    });
    stage.querySelectorAll(".rating-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const rating = btn.getAttribute("data-rate");
        if (rating) this.rateCard(rating);
      });
    });
    this.container.appendChild(stage);
  }
  renderSummary() {
    const summary = document.createElement("div");
    summary.className = "flashcard-summary-card";
    const masteryPercent = this.stats.total > 0 ? Math.round(this.stats.mastered / this.stats.total * 100) : 100;
    summary.innerHTML = `
      <div class="summary-celebration-badge">\u{1F389}</div>
      <h2 class="summary-title">Active Recall Session Complete!</h2>
      <p class="summary-subtitle">You have reviewed all ${this.stats.total} highlight prompts in this deck.</p>

      <div class="summary-stats-grid">
        <div class="summary-stat-box">
          <span class="summary-stat-num">${this.stats.total}</span>
          <span class="summary-stat-label">Total Prompts</span>
        </div>
        <div class="summary-stat-box">
          <span class="summary-stat-num text-emerald">${this.stats.mastered}</span>
          <span class="summary-stat-label">Mastered</span>
        </div>
        <div class="summary-stat-box">
          <span class="summary-stat-num text-rose">${this.stats.hard}</span>
          <span class="summary-stat-label">Review Again</span>
        </div>
        <div class="summary-stat-box">
          <span class="summary-stat-num text-accent">${masteryPercent}%</span>
          <span class="summary-stat-label">Mastery Rate</span>
        </div>
      </div>

      <div class="summary-actions">
        <button id="btn-restart-deck" class="btn btn-primary">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>
          </svg>
          <span>Review Deck Again</span>
        </button>
      </div>
    `;
    summary.querySelector("#btn-restart-deck")?.addEventListener("click", () => this.restart());
    this.container.appendChild(summary);
  }
  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};

// src/core/adapters/engine-adapter.ts
var EngineClientAdapter = class _EngineClientAdapter {
  static defaultBaseUrl = "http://127.0.0.1:4242";
  static storageKey = "hakim_engine_token";
  static getSavedToken() {
    try {
      return localStorage.getItem(_EngineClientAdapter.storageKey) || "";
    } catch {
      return "";
    }
  }
  static saveToken(token) {
    try {
      localStorage.setItem(_EngineClientAdapter.storageKey, token.trim());
    } catch {
    }
  }
  static clearToken() {
    try {
      localStorage.removeItem(_EngineClientAdapter.storageKey);
    } catch {
    }
  }
  static async checkHealth(baseUrl = _EngineClientAdapter.defaultBaseUrl) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/health`, {
        method: "GET",
        headers: { "Accept": "application/json" }
      });
      if (!res.ok) {
        return { healthy: false, error: `Engine responded with HTTP ${res.status}` };
      }
      const data = await res.json();
      return {
        healthy: data.status === "healthy",
        version: data.version,
        booksCount: data.library?.books,
        annotCount: data.library?.annotations
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not connect to local engine";
      return { healthy: false, error: msg };
    }
  }
  static async verifyPairing(token, baseUrl = _EngineClientAdapter.defaultBaseUrl) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/pair`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ token: token.trim() })
      });
      if (!res.ok) {
        return { success: false, error: "Invalid pairing token." };
      }
      return { success: true };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Network error connecting to engine";
      return { success: false, error: msg };
    }
  }
  static async fetchLibrary(token, baseUrl = _EngineClientAdapter.defaultBaseUrl) {
    try {
      const res = await fetch(`${baseUrl}/api/v1/library`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token.trim()}`,
          "Accept": "application/json"
        }
      });
      if (!res.ok) {
        return { books: [], highlights: [], error: `Engine error: HTTP ${res.status}` };
      }
      const data = await res.json();
      return {
        books: data.books || [],
        highlights: data.highlights || []
      };
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to fetch library from engine";
      return { books: [], highlights: [], error: msg };
    }
  }
};

// src/components/engine-bridge-modal.ts
var EngineBridgeModal = class {
  container;
  store;
  statusBtn = null;
  isConnected = false;
  constructor(statusBtnId = "btn-engine-status") {
    this.store = ReadingStateStore.getInstance();
    this.statusBtn = document.getElementById(statusBtnId);
    this.container = document.createElement("div");
    this.container.className = "engine-modal-backdrop";
    this.container.style.display = "none";
    document.body.appendChild(this.container);
    this.initDOM();
    this.checkInitialConnection();
  }
  initDOM() {
    const savedToken = EngineClientAdapter.getSavedToken();
    this.container.innerHTML = `
      <div class="engine-modal-window" role="dialog" aria-labelledby="engine-modal-title" aria-modal="true">
        <div class="engine-modal-header">
          <div class="engine-modal-title-row">
            <span class="engine-icon">\u26A1</span>
            <h3 id="engine-modal-title" class="engine-modal-title">Hakim Local Engine Bridge</h3>
          </div>
          <button id="btn-close-engine-modal" class="btn-modal-close" aria-label="Close modal">&times;</button>
        </div>

        <div class="engine-modal-body">
          <p class="engine-modal-desc">
            Connect directly to your local SQLite database (<code>127.0.0.1:4242</code>) for instant offline reading intelligence, automated background imports, and AI insights.
          </p>

          <!-- Live Status Box -->
          <div id="engine-status-box" class="engine-status-box">
            <div class="status-indicator-dot dot-gray"></div>
            <div class="status-text-block">
              <span id="engine-status-text" class="status-headline">Checking local engine daemon...</span>
              <span id="engine-substatus-text" class="status-subline">http://127.0.0.1:4242</span>
            </div>
          </div>

          <!-- Pairing Token Field -->
          <div class="engine-field-group">
            <label for="engine-token-input" class="engine-field-label">Pairing Token (Bearer Auth)</label>
            <input 
              type="password" 
              id="engine-token-input" 
              class="engine-input" 
              placeholder="Paste token from: hakim token"
              value="${savedToken}"
            />
            <p class="engine-field-hint">Run <code>hakim token</code> or <code>hakim start</code> in your terminal to view or generate your pairing secret.</p>
          </div>

          <!-- Feedback message -->
          <div id="engine-feedback-msg" class="engine-feedback-msg" style="display: none;"></div>

          <!-- Actions -->
          <div class="engine-modal-actions">
            <button id="btn-connect-engine" class="btn btn-primary btn-full">
              <span>Connect & Load SQLite Library</span>
            </button>
          </div>
        </div>
      </div>
    `;
    this.container.querySelector("#btn-close-engine-modal")?.addEventListener("click", () => this.close());
    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) this.close();
    });
    if (this.statusBtn) {
      this.statusBtn.addEventListener("click", () => this.open());
    }
    this.container.querySelector("#btn-connect-engine")?.addEventListener("click", () => this.handleConnect());
  }
  open() {
    this.container.style.display = "flex";
    this.checkHealth();
  }
  close() {
    this.container.style.display = "none";
  }
  async checkInitialConnection() {
    const health = await EngineClientAdapter.checkHealth();
    this.updateHealthUI(health);
    const token = EngineClientAdapter.getSavedToken();
    if (health.healthy && token) {
      const res = await EngineClientAdapter.fetchLibrary(token);
      if (res.books.length > 0) {
        this.store.loadCustomData(res.books, res.highlights, "custom_file");
        this.isConnected = true;
        this.updateHeaderBadge(true, `Engine: ${res.books.length} Books`);
      }
    }
  }
  async checkHealth() {
    const health = await EngineClientAdapter.checkHealth();
    this.updateHealthUI(health);
    return health;
  }
  updateHealthUI(health) {
    const statusBox = this.container.querySelector("#engine-status-box");
    const statusDot = this.container.querySelector(".status-indicator-dot");
    const statusText = this.container.querySelector("#engine-status-text");
    const subText = this.container.querySelector("#engine-substatus-text");
    if (health.healthy) {
      if (statusDot) {
        statusDot.className = "status-indicator-dot dot-emerald";
      }
      if (statusText) {
        statusText.textContent = `Engine Online (v${health.version || "1.0.0"})`;
      }
      if (subText) {
        subText.textContent = `SQLite Store: ${health.booksCount || 0} books, ${health.annotCount || 0} highlights available`;
      }
      this.updateHeaderBadge(true, "Engine Online");
    } else {
      if (statusDot) {
        statusDot.className = "status-indicator-dot dot-gray";
      }
      if (statusText) {
        statusText.textContent = "Engine Offline or Not Running";
      }
      if (subText) {
        subText.textContent = "Start with: pnpm --filter @hakim/engine start";
      }
      this.updateHeaderBadge(false, "Engine Offline");
    }
  }
  updateHeaderBadge(online, label) {
    if (this.statusBtn) {
      this.statusBtn.className = `btn-engine-status ${online ? "online" : "offline"}`;
      const textSpan = this.statusBtn.querySelector(".engine-status-label");
      if (textSpan) textSpan.textContent = label;
    }
  }
  async handleConnect() {
    const tokenInput = this.container.querySelector("#engine-token-input");
    const token = tokenInput?.value.trim() || "";
    const feedback = this.container.querySelector("#engine-feedback-msg");
    const btn = this.container.querySelector("#btn-connect-engine");
    if (!token) {
      if (feedback) {
        feedback.style.display = "block";
        feedback.className = "engine-feedback-msg error";
        feedback.textContent = "Please enter a pairing token.";
      }
      return;
    }
    if (btn) btn.disabled = true;
    if (feedback) {
      feedback.style.display = "block";
      feedback.className = "engine-feedback-msg info";
      feedback.textContent = "Verifying pairing and fetching SQLite library...";
    }
    const pairResult = await EngineClientAdapter.verifyPairing(token);
    if (!pairResult.success) {
      if (feedback) {
        feedback.className = "engine-feedback-msg error";
        feedback.textContent = pairResult.error || "Authentication failed. Check your token.";
      }
      if (btn) btn.disabled = false;
      return;
    }
    EngineClientAdapter.saveToken(token);
    const lib = await EngineClientAdapter.fetchLibrary(token);
    if (lib.error) {
      if (feedback) {
        feedback.className = "engine-feedback-msg error";
        feedback.textContent = lib.error;
      }
      if (btn) btn.disabled = false;
      return;
    }
    this.store.loadCustomData(lib.books, lib.highlights, "custom_file");
    this.isConnected = true;
    this.updateHeaderBadge(true, `Engine: ${lib.books.length} Books`);
    if (feedback) {
      feedback.className = "engine-feedback-msg success";
      feedback.textContent = `\u2713 Connected! Successfully loaded ${lib.books.length} books and ${lib.highlights.length} highlights.`;
    }
    if (btn) btn.disabled = false;
    setTimeout(() => {
      this.close();
    }, 1200);
  }
};

// src/core/ai/ai-engine.ts
var AISynthesisEngine = class _AISynthesisEngine {
  static storageKey = "hakim_ai_config";
  static getSavedConfig() {
    try {
      const saved = localStorage.getItem(_AISynthesisEngine.storageKey);
      if (saved) return JSON.parse(saved);
    } catch {
    }
    return { provider: "heuristic", modelName: "local-heuristic" };
  }
  static saveConfig(config) {
    try {
      localStorage.setItem(_AISynthesisEngine.storageKey, JSON.stringify(config));
    } catch {
    }
  }
  /**
   * Discovers thematic concept clusters across books using heuristic NLP semantic analysis or LLM.
   */
  static async extractConceptClusters(highlights, books, config = _AISynthesisEngine.getSavedConfig()) {
    if (highlights.length === 0) return [];
    if (config.provider !== "heuristic" && config.apiKey && config.endpoint) {
      try {
        return await _AISynthesisEngine.fetchLLMClusters(highlights, config);
      } catch (err) {
        console.warn("LLM clustering failed, falling back to local heuristic:", err);
      }
    }
    return _AISynthesisEngine.heuristicClusterExtraction(highlights, books);
  }
  /**
   * Generates an Executive Brief and actionable Mental Models from the active reading library.
   */
  static async generateExecutiveSynthesis(highlights, focusTopic, config = _AISynthesisEngine.getSavedConfig()) {
    if (highlights.length === 0) {
      return {
        title: "No Highlights Selected",
        summary: "Please select or import highlights to generate an executive synthesis.",
        mentalModels: [],
        actionableTakeaways: [],
        sourceHighlightsCount: 0
      };
    }
    if (config.provider !== "heuristic" && config.apiKey && config.endpoint) {
      try {
        return await _AISynthesisEngine.fetchLLMSynthesis(highlights, focusTopic, config);
      } catch (err) {
        console.warn("LLM synthesis failed, falling back to heuristic:", err);
      }
    }
    return _AISynthesisEngine.heuristicExecutiveSynthesis(highlights, focusTopic);
  }
  /**
   * Generates Socratic Active Recall questions from highlighted passages.
   */
  static async generateSocraticQuestions(highlights, config = _AISynthesisEngine.getSavedConfig()) {
    if (highlights.length === 0) return [];
    return highlights.slice(0, 10).map((h, i) => {
      const cleanQuote = h.rawText.trim();
      const firstSentence = cleanQuote.split(".")[0] || cleanQuote;
      let question = `How does the principle of "${h.tags?.[0] || "this concept"}" in "${h.bookTitle}" apply to high-leverage decision making?`;
      if (h.rawText.toLowerCase().includes("stoic") || h.rawText.toLowerCase().includes("discipline")) {
        question = `According to ${h.bookTitle}, what is the distinction between internal control and external events?`;
      } else if (h.rawText.toLowerCase().includes("system") || h.rawText.toLowerCase().includes("data")) {
        question = `What fundamental architectural trade-off is emphasized in "${h.bookTitle}" regarding this quote?`;
      }
      return {
        id: `q-${i}-${h.id}`,
        question,
        idealAnswer: h.interpretation || h.sourceNote || firstSentence,
        sourceHighlight: h.rawText,
        bookTitle: h.bookTitle
      };
    });
  }
  // --- Local Heuristic Engines (Zero API Key / 100% Offline) ---
  static heuristicClusterExtraction(highlights, books) {
    const topicMap = /* @__PURE__ */ new Map();
    highlights.forEach((h) => {
      const candidates = h.tags && h.tags.length > 0 ? h.tags : _AISynthesisEngine.extractKeywords(h.rawText);
      candidates.forEach((tag) => {
        const normalized = tag.toLowerCase().trim();
        if (normalized.length < 3) return;
        if (!topicMap.has(normalized)) {
          topicMap.set(normalized, { highlightIds: [], quotes: [], bookTitles: /* @__PURE__ */ new Set() });
        }
        const entry = topicMap.get(normalized);
        entry.highlightIds.push(h.id);
        entry.quotes.push(h.rawText);
        entry.bookTitles.add(h.bookTitle);
      });
    });
    const clusters = [];
    topicMap.forEach((data, topic) => {
      if (data.highlightIds.length >= 2 || data.bookTitles.size >= 1) {
        const titleFormatted = topic.charAt(0).toUpperCase() + topic.slice(1);
        clusters.push({
          conceptName: `#${titleFormatted}`,
          description: `Cross-cutting principle spanning ${data.bookTitles.size} books, connecting ${data.highlightIds.length} foundational passages.`,
          relatedBooks: Array.from(data.bookTitles),
          highlightIds: data.highlightIds,
          keyQuotes: data.quotes.slice(0, 3)
        });
      }
    });
    return clusters.sort((a, b) => b.highlightIds.length - a.highlightIds.length).slice(0, 8);
  }
  static heuristicExecutiveSynthesis(highlights, focusTopic) {
    const bookTitles = Array.from(new Set(highlights.map((h) => h.bookTitle)));
    const title = focusTopic ? `Executive Brief: ${focusTopic}` : `Reading Intelligence Synthesis (${bookTitles.length} Books)`;
    const quotes = highlights.map((h) => h.rawText);
    const primaryQuote = quotes[0] || "";
    const secondaryQuote = quotes[1] || quotes[0] || "";
    const summary = `Synthesizing ${highlights.length} core passages across ${bookTitles.join(", ")}. A recurring dialectic emerges: durable outcomes require foundational discipline and system-level fault tolerance rather than ad-hoc intervention. As captured in the literature: "${primaryQuote.slice(0, 140)}..."`;
    const mentalModels = [
      "First-Principles Invariance: Distinguish immutable physical or algorithmic laws from transient user assumptions.",
      "Asymmetric Feedback Loops: Small habits and deterministic routines compound into resilient long-term architectures.",
      "Cognitive Provenance: Preserving raw source observations alongside evolving human reflections prevents semantic drift."
    ];
    const actionableTakeaways = [
      `Structure recurring review intervals for key passages in ${bookTitles[0] || "your library"}.`,
      "Translate abstract philosophical insights into concrete operational heuristics.",
      "Anchor conceptual highlights into your Notion knowledge graph for permanent retrieval."
    ];
    return {
      title,
      summary,
      mentalModels,
      actionableTakeaways,
      sourceHighlightsCount: highlights.length
    };
  }
  static extractKeywords(text) {
    const stopwords = /* @__PURE__ */ new Set([
      "the",
      "and",
      "that",
      "this",
      "with",
      "from",
      "have",
      "will",
      "what",
      "when",
      "where",
      "which",
      "about",
      "into",
      "their",
      "there",
      "would",
      "could",
      "should",
      "being",
      "these",
      "those"
    ]);
    const words = text.toLowerCase().replace(/[^\w\s]/g, "").split(/\s+/).filter((w) => w.length > 4 && !stopwords.has(w));
    return Array.from(new Set(words)).slice(0, 3);
  }
  // --- External LLM API Connectors ---
  static async fetchLLMClusters(highlights, config) {
    const prompt = `Analyze these ${highlights.length} reading highlights and group them into 3-6 thematic concept clusters. Return JSON only with format: [{"conceptName": string, "description": string, "relatedBooks": string[], "highlightIds": string[], "keyQuotes": string[]}]

Highlights:
${JSON.stringify(highlights.map((h) => ({ id: h.id, book: h.bookTitle, text: h.rawText })))}`;
    const res = await fetch(config.endpoint || "https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.modelName || "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      })
    });
    const data = await res.json();
    const parsed = JSON.parse(data.choices[0].message.content);
    return parsed.clusters || parsed;
  }
  static async fetchLLMSynthesis(highlights, focusTopic, config) {
    const prompt = `You are a world-class reading intelligence synthesizer. Synthesize these highlights into an executive brief. Return JSON only: {"title": string, "summary": string, "mentalModels": string[], "actionableTakeaways": string[]}

Highlights:
${JSON.stringify(highlights.map((h) => ({ book: h.bookTitle, text: h.rawText })))}`;
    const res = await fetch(config.endpoint || "https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        model: config.modelName || "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" }
      })
    });
    const data = await res.json();
    const parsed = JSON.parse(data.choices[0].message.content);
    return {
      ...parsed,
      sourceHighlightsCount: highlights.length
    };
  }
};

// src/components/ai-synthesis-modal.ts
var AISynthesisModal = class {
  container;
  store;
  activeTask = "synthesis";
  constructor() {
    this.store = ReadingStateStore.getInstance();
    this.container = document.createElement("div");
    this.container.className = "ai-modal-backdrop";
    this.container.style.display = "none";
    document.body.appendChild(this.container);
    this.initDOM();
  }
  initDOM() {
    this.container.innerHTML = `
      <div class="ai-modal-window" role="dialog" aria-labelledby="ai-modal-title" aria-modal="true">
        <div class="ai-modal-header">
          <div class="ai-modal-title-row">
            <span class="ai-spark-icon">\u2728</span>
            <h3 id="ai-modal-title" class="ai-modal-title">Hakim AI Reading Intelligence</h3>
          </div>
          <button id="btn-close-ai-modal" class="btn-modal-close" aria-label="Close modal">&times;</button>
        </div>

        <!-- Task Selector Tabs -->
        <div class="ai-tasks-nav">
          <button class="ai-task-btn ${this.activeTask === "synthesis" ? "active" : ""}" data-task="synthesis">
            \u{1F4DD} Executive Synthesis
          </button>
          <button class="ai-task-btn ${this.activeTask === "clusters" ? "active" : ""}" data-task="clusters">
            \u{1F9E0} Concept Clusters
          </button>
          <button class="ai-task-btn ${this.activeTask === "questions" ? "active" : ""}" data-task="questions">
            \u{1F3AF} Socratic Questions
          </button>
        </div>

        <div class="ai-modal-body">
          <div id="ai-results-stage" class="ai-results-stage">
            <div class="ai-loading-state">
              <span class="ai-spinner"></span>
              <p>Analyzing reading library highlights...</p>
            </div>
          </div>
        </div>

        <div class="ai-modal-footer">
          <button id="btn-copy-ai-result" class="btn btn-secondary">
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            <span>Copy Markdown Synthesis</span>
          </button>
          <button id="btn-re-synthesize" class="btn btn-primary">
            <span>Re-Generate with AI</span>
          </button>
        </div>
      </div>
    `;
    this.container.querySelector("#btn-close-ai-modal")?.addEventListener("click", () => this.close());
    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) this.close();
    });
    this.container.querySelectorAll(".ai-task-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const task = btn.getAttribute("data-task");
        if (task) {
          this.activeTask = task;
          this.container.querySelectorAll(".ai-task-btn").forEach((b) => b.classList.remove("active"));
          btn.classList.add("active");
          this.runActiveTask();
        }
      });
    });
    this.container.querySelector("#btn-re-synthesize")?.addEventListener("click", () => this.runActiveTask());
    this.container.querySelector("#btn-copy-ai-result")?.addEventListener("click", () => this.copyMarkdown());
  }
  open() {
    this.container.style.display = "flex";
    this.runActiveTask();
  }
  close() {
    this.container.style.display = "none";
  }
  async runActiveTask() {
    const stage = this.container.querySelector("#ai-results-stage");
    if (!stage) return;
    stage.innerHTML = `
      <div class="ai-loading-state">
        <span class="ai-spinner"></span>
        <p>Synthesizing insights and cognitive models...</p>
      </div>
    `;
    const highlights = this.store.getFilteredHighlights();
    const books = this.store.getState().books;
    if (this.activeTask === "synthesis") {
      const synthesis = await AISynthesisEngine.generateExecutiveSynthesis(highlights);
      this.renderSynthesis(stage, synthesis);
    } else if (this.activeTask === "clusters") {
      const clusters = await AISynthesisEngine.extractConceptClusters(highlights, books);
      this.renderClusters(stage, clusters);
    } else if (this.activeTask === "questions") {
      const questions = await AISynthesisEngine.generateSocraticQuestions(highlights);
      this.renderQuestions(stage, questions);
    }
  }
  renderSynthesis(container, data) {
    container.innerHTML = `
      <div class="synthesis-result-card">
        <h3 class="synthesis-title">${data.title}</h3>
        <p class="synthesis-summary">${data.summary}</p>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u{1F9E0} Core Mental Models</h4>
          <ul class="synthesis-list">
            ${data.mentalModels.map((m) => `<li>${m}</li>`).join("")}
          </ul>
        </div>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u26A1 Actionable Principles</h4>
          <ul class="synthesis-list">
            ${data.actionableTakeaways.map((a) => `<li>${a}</li>`).join("")}
          </ul>
        </div>
      </div>
    `;
  }
  renderClusters(container, clusters) {
    if (clusters.length === 0) {
      container.innerHTML = `<p class="empty-state-text">No multi-book conceptual clusters found in the active filter.</p>`;
      return;
    }
    container.innerHTML = `
      <div class="clusters-grid">
        ${clusters.map((c) => `
          <div class="cluster-card">
            <div class="cluster-header">
              <span class="cluster-title">${c.conceptName}</span>
              <span class="cluster-count">${c.highlightIds.length} Highlights</span>
            </div>
            <p class="cluster-desc">${c.description}</p>
            <div class="cluster-books-row">
              ${c.relatedBooks.map((b) => `<span class="cluster-book-chip">\u{1F4D6} ${b}</span>`).join(" ")}
            </div>
            <blockquote class="cluster-quote">\u201C${c.keyQuotes[0]?.slice(0, 140) || ""}...\u201D</blockquote>
          </div>
        `).join("")}
      </div>
    `;
  }
  renderQuestions(container, questions) {
    if (questions.length === 0) {
      container.innerHTML = `<p class="empty-state-text">No questions generated. Add more highlights to your library.</p>`;
      return;
    }
    container.innerHTML = `
      <div class="questions-list">
        ${questions.map((q, i) => `
          <div class="question-item">
            <div class="question-header">
              <span class="question-badge">Prompt #${i + 1}</span>
              <span class="question-book">\u{1F4D6} ${q.bookTitle}</span>
            </div>
            <h4 class="question-text">${q.question}</h4>
            <div class="question-ideal-box">
              <strong>\u{1F4A1} Ideal Answer / Principle:</strong> ${q.idealAnswer}
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }
  copyMarkdown() {
    const stage = this.container.querySelector("#ai-results-stage");
    const text = stage?.innerText || "";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      const btnSpan = this.container.querySelector("#btn-copy-ai-result span");
      if (btnSpan) {
        btnSpan.textContent = "Copied to Clipboard!";
        setTimeout(() => {
          btnSpan.textContent = "Copy Markdown Synthesis";
        }, 2e3);
      }
    }
  }
};

// src/core/export/zip-builder.ts
var ZipBuilder = class _ZipBuilder {
  files = [];
  addFile(name, content) {
    this.files.push({ name: name.replace(/\\/g, "/"), content });
    return this;
  }
  /**
   * Generates a standard binary ZIP archive as a Blob.
   */
  generateBlob() {
    const localHeaders = [];
    const centralHeaders = [];
    let offset = 0;
    const encoder = new TextEncoder();
    for (const file of this.files) {
      const fileNameBytes = encoder.encode(file.name);
      const fileData = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
      const crc = _ZipBuilder.crc32(fileData);
      const size = fileData.length;
      const localHeader = new Uint8Array(30 + fileNameBytes.length);
      const localView = new DataView(localHeader.buffer);
      localView.setUint32(0, 67324752, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0, true);
      localView.setUint16(8, 0, true);
      localView.setUint16(10, 0, true);
      localView.setUint16(12, 0, true);
      localView.setUint32(14, crc, true);
      localView.setUint32(18, size, true);
      localView.setUint32(22, size, true);
      localView.setUint16(26, fileNameBytes.length, true);
      localView.setUint16(28, 0, true);
      localHeader.set(fileNameBytes, 30);
      localHeaders.push(localHeader, fileData);
      const centralHeader = new Uint8Array(46 + fileNameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      centralView.setUint32(0, 33639248, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(8, 0, true);
      centralView.setUint16(10, 0, true);
      centralView.setUint16(12, 0, true);
      centralView.setUint16(14, 0, true);
      centralView.setUint32(16, crc, true);
      centralView.setUint32(20, size, true);
      centralView.setUint32(24, size, true);
      centralView.setUint16(28, fileNameBytes.length, true);
      centralView.setUint16(30, 0, true);
      centralView.setUint16(32, 0, true);
      centralView.setUint16(34, 0, true);
      centralView.setUint16(36, 0, true);
      centralView.setUint32(38, 0, true);
      centralView.setUint32(42, offset, true);
      centralHeader.set(fileNameBytes, 46);
      centralHeaders.push(centralHeader);
      offset += localHeader.length + fileData.length;
    }
    const centralDirOffset = offset;
    let centralDirSize = 0;
    for (const h of centralHeaders) centralDirSize += h.length;
    const eocd = new Uint8Array(22);
    const eocdView = new DataView(eocd.buffer);
    eocdView.setUint32(0, 101010256, true);
    eocdView.setUint16(4, 0, true);
    eocdView.setUint16(6, 0, true);
    eocdView.setUint16(8, this.files.length, true);
    eocdView.setUint16(10, this.files.length, true);
    eocdView.setUint32(12, centralDirSize, true);
    eocdView.setUint32(16, centralDirOffset, true);
    eocdView.setUint16(20, 0, true);
    const allParts = [...localHeaders, ...centralHeaders, eocd];
    return new Blob(allParts, { type: "application/zip" });
  }
  /**
   * Triggers a browser file download for the generated ZIP.
   */
  downloadZip(filename = "hakim-obsidian-vault.zip") {
    const blob = this.generateBlob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  /**
   * Fast CRC32 calculation.
   */
  static crcTable = (() => {
    const table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
      }
      table[i] = c;
    }
    return table;
  })();
  static crc32(bytes) {
    let crc = 0 ^ -1;
    for (let i = 0; i < bytes.length; i++) {
      crc = crc >>> 8 ^ _ZipBuilder.crcTable[(crc ^ bytes[i]) & 255];
    }
    return (crc ^ -1) >>> 0;
  }
};

// src/core/export/vault-exporter.ts
var VaultExporter = class _VaultExporter {
  /**
   * Generates a complete Obsidian-compatible Markdown Knowledge Base.
   */
  static generateVault(books, highlights) {
    const files = [];
    const zip = new ZipBuilder();
    const indexContent = _VaultExporter.formatIndexNote(books, highlights);
    files.push({ path: "Index.md", content: indexContent });
    zip.addFile("Index.md", indexContent);
    for (const book of books) {
      const bookHighlights = highlights.filter((h) => h.bookId === book.id || h.bookTitle === book.title);
      const safeTitle = _VaultExporter.sanitizeFileName(book.title);
      const bookContent = _VaultExporter.formatBookNote(book, bookHighlights);
      const bookPath = `Books/${safeTitle}.md`;
      files.push({ path: bookPath, content: bookContent });
      zip.addFile(bookPath, bookContent);
    }
    const tagMap = /* @__PURE__ */ new Map();
    for (const h of highlights) {
      for (const tag of h.tags || []) {
        const cleanTag = tag.trim();
        if (!cleanTag) continue;
        if (!tagMap.has(cleanTag)) tagMap.set(cleanTag, []);
        tagMap.get(cleanTag).push(h);
      }
    }
    let conceptsCount = 0;
    tagMap.forEach((hlList, tag) => {
      conceptsCount++;
      const safeTag = _VaultExporter.sanitizeFileName(tag);
      const conceptContent = _VaultExporter.formatConceptNote(tag, hlList);
      const conceptPath = `Concepts/${safeTag}.md`;
      files.push({ path: conceptPath, content: conceptContent });
      zip.addFile(conceptPath, conceptContent);
    });
    return {
      files,
      booksCount: books.length,
      highlightsCount: highlights.length,
      conceptsCount,
      zipBuilder: zip
    };
  }
  /**
   * Formats a single book as an Obsidian markdown document with YAML frontmatter.
   */
  static formatBookNote(book, bookHighlights) {
    const lines = [];
    lines.push("---");
    lines.push(`title: ${JSON.stringify(book.title)}`);
    lines.push(`author: ${JSON.stringify(book.author)}`);
    if (book.asin) lines.push(`asin: ${JSON.stringify(book.asin)}`);
    lines.push(`status: ${book.status || "reading"}`);
    lines.push(`highlights_count: ${bookHighlights.length}`);
    lines.push("tags:");
    lines.push("  - type/book");
    lines.push("  - reading-intelligence");
    lines.push("---");
    lines.push("");
    lines.push(`# ${book.title}`);
    lines.push(`**Author:** [[${book.author}]]`);
    lines.push(`**Status:** \`${(book.status || "reading").toUpperCase()}\``);
    lines.push(`**Total Highlights:** ${bookHighlights.length}`);
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push("## \u{1F4D6} Highlights & Annotations");
    lines.push("");
    if (bookHighlights.length === 0) {
      lines.push("*No highlights captured for this book yet.*");
      return lines.join("\n");
    }
    const sorted = [...bookHighlights].sort((a, b) => (a.location || 0) - (b.location || 0));
    for (let i = 0; i < sorted.length; i++) {
      const h = sorted[i];
      const calloutType = h.color === "pink" ? "danger" : h.color === "blue" ? "info" : h.color === "orange" ? "warning" : "quote";
      if (h.chapter) {
        lines.push(`### ${h.chapter}`);
        lines.push("");
      }
      lines.push(`> [!${calloutType}] Highlight #${i + 1}`);
      lines.push(`> ${h.rawText}`);
      const meta = [];
      if (h.location) meta.push(`Loc ${h.location}`);
      if (h.color) meta.push(`Color: ${h.color}`);
      if (h.importance) meta.push(`Importance: ${h.importance}`);
      if (meta.length > 0) {
        lines.push(`>`);
        lines.push(`> \u2014 *${meta.join(" \u2022 ")}*`);
      }
      if (h.sourceNote) {
        lines.push("");
        lines.push(`> [!note] Personal Note`);
        lines.push(`> ${h.sourceNote}`);
      }
      if (h.interpretation) {
        lines.push("");
        lines.push(`**\u{1F4A1} Reflection:** ${h.interpretation}`);
      }
      if (h.tags && h.tags.length > 0) {
        lines.push("");
        lines.push(`**Concepts:** ${h.tags.map((t) => `[[Concepts/${t}|#${t}]]`).join(" ")}`);
      }
      lines.push(`^hl-${h.id}`);
      lines.push("");
      lines.push("---");
      lines.push("");
    }
    return lines.join("\n");
  }
  /**
   * Formats a Concept hub note connecting multi-book highlights.
   */
  static formatConceptNote(tag, highlights) {
    const lines = [];
    const relatedBooks = Array.from(new Set(highlights.map((h) => h.bookTitle)));
    lines.push("---");
    lines.push(`concept: ${JSON.stringify(tag)}`);
    lines.push(`highlights_count: ${highlights.length}`);
    lines.push("tags:");
    lines.push("  - type/concept");
    lines.push("---");
    lines.push("");
    lines.push(`# Concept: #${tag}`);
    lines.push(`Cross-cutting reading intelligence concept spanning **${relatedBooks.length} books**.`);
    lines.push("");
    lines.push("## \u{1F4DA} Linked Books");
    for (const b of relatedBooks) {
      lines.push(`- [[Books/${b}|${b}]]`);
    }
    lines.push("");
    lines.push("## \u{1F4AC} Key Highlights");
    for (const h of highlights) {
      lines.push(`> "${h.rawText}"`);
      lines.push(`\u2014 [[Books/${h.bookTitle}|${h.bookTitle}]] (Loc ${h.location || "N/A"})`);
      lines.push("");
    }
    return lines.join("\n");
  }
  /**
   * Formats the root Index dashboard for Obsidian.
   */
  static formatIndexNote(books, highlights) {
    const lines = [];
    lines.push("---");
    lines.push('title: "Hakim Reading OS Dashboard"');
    lines.push("tags:");
    lines.push("  - dashboard");
    lines.push("---");
    lines.push("");
    lines.push("# \u{1F3DB}\uFE0F Hakim Personal Reading Intelligence Vault");
    lines.push("");
    lines.push(`Welcome to your local-first reading vault. Generated on **${(/* @__PURE__ */ new Date()).toLocaleDateString()}**.`);
    lines.push("");
    lines.push("### \u{1F4CA} Library Statistics");
    lines.push(`- **Total Books:** ${books.length}`);
    lines.push(`- **Total Highlights:** ${highlights.length}`);
    lines.push("");
    lines.push("---");
    lines.push("");
    lines.push("## \u{1F4DA} Books Library");
    for (const b of books) {
      const count = highlights.filter((h) => h.bookId === b.id || h.bookTitle === b.title).length;
      lines.push(`- [[Books/${b.title}|${b.title}]] by *${b.author}* (${count} notes)`);
    }
    lines.push("");
    lines.push("---");
    lines.push("*Exported automatically from [Hakim](https://github.com/ws0x/hakim).*");
    return lines.join("\n");
  }
  static sanitizeFileName(name) {
    return name.replace(/[\\/:*?"<>|]/g, "_").trim();
  }
};

// src/components/obsidian-export-modal.ts
var ObsidianExportModal = class {
  container;
  store;
  currentResult = null;
  selectedFilePath = "Index.md";
  constructor() {
    this.store = ReadingStateStore.getInstance();
    this.container = document.createElement("div");
    this.container.className = "obsidian-modal-backdrop";
    this.container.style.display = "none";
    document.body.appendChild(this.container);
    this.initDOM();
  }
  initDOM() {
    this.container.innerHTML = `
      <div class="obsidian-modal-window" role="dialog" aria-labelledby="obsidian-modal-title" aria-modal="true">
        <div class="obsidian-modal-header">
          <div class="obsidian-modal-title-row">
            <span class="obsidian-gem-icon">\u{1F48E}</span>
            <h3 id="obsidian-modal-title" class="obsidian-modal-title">Export Obsidian Markdown Vault</h3>
          </div>
          <button id="btn-close-obsidian-modal" class="btn-modal-close" aria-label="Close modal">&times;</button>
        </div>

        <div class="obsidian-modal-body">
          <div class="obsidian-layout">
            <!-- Left: File Tree Browser -->
            <div class="obsidian-tree-panel">
              <div class="tree-header">Vault Structure</div>
              <div id="obsidian-tree-list" class="obsidian-tree-list"></div>
            </div>

            <!-- Right: Live Markdown Preview -->
            <div class="obsidian-preview-panel">
              <div class="preview-header">
                <span id="preview-file-title" class="preview-filename">Index.md</span>
                <span class="preview-badge">Obsidian Format</span>
              </div>
              <pre id="obsidian-code-view" class="obsidian-code-view"><code></code></pre>
            </div>
          </div>
        </div>

        <div class="obsidian-modal-footer">
          <div class="obsidian-stats-row">
            <span id="vault-stats-text" class="vault-stats-text">0 Books \u2022 0 Highlights</span>
          </div>
          <div class="obsidian-actions-row">
            <button id="btn-copy-vault-file" class="btn btn-secondary">
              <span>Copy File Markdown</span>
            </button>
            <button id="btn-download-vault-zip" class="btn btn-primary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Download Vault (.zip)</span>
            </button>
          </div>
        </div>
      </div>
    `;
    this.container.querySelector("#btn-close-obsidian-modal")?.addEventListener("click", () => this.close());
    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) this.close();
    });
    this.container.querySelector("#btn-download-vault-zip")?.addEventListener("click", () => this.handleDownloadZip());
    this.container.querySelector("#btn-copy-vault-file")?.addEventListener("click", () => this.handleCopyCurrentFile());
  }
  open() {
    this.container.style.display = "flex";
    this.generateAndRender();
  }
  close() {
    this.container.style.display = "none";
  }
  generateAndRender() {
    const state = this.store.getState();
    this.currentResult = VaultExporter.generateVault(state.books, state.highlights);
    const statsText = this.container.querySelector("#vault-stats-text");
    if (statsText) {
      statsText.textContent = `\u{1F4E6} ${this.currentResult.booksCount} Books \u2022 ${this.currentResult.highlightsCount} Highlights \u2022 ${this.currentResult.conceptsCount} Concepts`;
    }
    const treeList = this.container.querySelector("#obsidian-tree-list");
    if (treeList) {
      treeList.innerHTML = this.currentResult.files.map((file) => `
        <div class="tree-item ${file.path === this.selectedFilePath ? "active" : ""}" data-path="${file.path}">
          <span class="tree-icon">${file.path.startsWith("Books/") ? "\u{1F4D6}" : file.path.startsWith("Concepts/") ? "\u{1F9E0}" : "\u{1F4C4}"}</span>
          <span class="tree-name">${file.path}</span>
        </div>
      `).join("");
      treeList.querySelectorAll(".tree-item").forEach((item) => {
        item.addEventListener("click", () => {
          const path = item.getAttribute("data-path");
          if (path) {
            this.selectedFilePath = path;
            treeList.querySelectorAll(".tree-item").forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
            this.renderSelectedFilePreview();
          }
        });
      });
    }
    this.renderSelectedFilePreview();
  }
  renderSelectedFilePreview() {
    if (!this.currentResult) return;
    const file = this.currentResult.files.find((f) => f.path === this.selectedFilePath) || this.currentResult.files[0];
    if (!file) return;
    const titleEl = this.container.querySelector("#preview-file-title");
    const codeEl = this.container.querySelector("#obsidian-code-view code");
    if (titleEl) titleEl.textContent = file.path;
    if (codeEl) codeEl.textContent = file.content;
  }
  handleDownloadZip() {
    if (!this.currentResult) return;
    this.currentResult.zipBuilder.downloadZip("hakim-obsidian-vault.zip");
  }
  handleCopyCurrentFile() {
    if (!this.currentResult) return;
    const file = this.currentResult.files.find((f) => f.path === this.selectedFilePath);
    if (file && navigator.clipboard) {
      navigator.clipboard.writeText(file.content);
      const btnSpan = this.container.querySelector("#btn-copy-vault-file span");
      if (btnSpan) {
        btnSpan.textContent = "Copied!";
        setTimeout(() => {
          btnSpan.textContent = "Copy File Markdown";
        }, 2e3);
      }
    }
  }
};

// src/components/command-palette.ts
var CommandPaletteComponent = class {
  container;
  input;
  resultsList;
  store;
  items = [];
  filteredItems = [];
  selectedIndex = 0;
  isOpen = false;
  onSelectViewCallback;
  onOpenAiCallback;
  onOpenObsidianCallback;
  onOpenEngineCallback;
  constructor(callbacks) {
    this.store = ReadingStateStore.getInstance();
    this.onSelectViewCallback = callbacks.onSelectView;
    this.onOpenAiCallback = callbacks.onOpenAi;
    this.onOpenObsidianCallback = callbacks.onOpenObsidian;
    this.onOpenEngineCallback = callbacks.onOpenEngine;
    this.container = document.createElement("div");
    this.container.className = "cmd-palette-backdrop";
    this.container.style.display = "none";
    document.body.appendChild(this.container);
    this.container.innerHTML = `
      <div class="cmd-palette-window" role="dialog" aria-modal="true" aria-label="Command Palette">
        <div class="cmd-input-row">
          <svg class="cmd-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input 
            type="text" 
            class="cmd-input" 
            placeholder="Type a command, book title, or quote keyword..." 
            autocomplete="off" 
            spellcheck="false"
          />
          <span class="cmd-kbd-esc">ESC</span>
        </div>

        <div class="cmd-results-container">
          <div class="cmd-results-list" role="listbox"></div>
        </div>

        <div class="cmd-footer">
          <div class="cmd-hints">
            <span><kbd>\u2191</kbd><kbd>\u2193</kbd> to navigate</span>
            <span><kbd>\u21B5</kbd> to select</span>
            <span><kbd>ESC</kbd> to close</span>
          </div>
          <span class="cmd-brand-hint">Hakim Spotlight</span>
        </div>
      </div>
    `;
    this.input = this.container.querySelector(".cmd-input");
    this.resultsList = this.container.querySelector(".cmd-results-list");
    this.initEvents();
  }
  initEvents() {
    this.container.addEventListener("click", (e) => {
      if (e.target === this.container) this.close();
    });
    this.input.addEventListener("input", () => {
      this.filterItems(this.input.value);
    });
    this.input.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredItems.length - 1);
        this.renderResults();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
        this.renderResults();
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (this.filteredItems[this.selectedIndex]) {
          this.executeItem(this.filteredItems[this.selectedIndex]);
        }
      } else if (e.key === "Escape") {
        this.close();
      }
    });
    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
        e.preventDefault();
        this.toggle();
      }
    });
  }
  open() {
    this.isOpen = true;
    this.container.style.display = "flex";
    this.buildItems();
    this.input.value = "";
    this.filterItems("");
    setTimeout(() => this.input.focus(), 50);
  }
  close() {
    this.isOpen = false;
    this.container.style.display = "none";
  }
  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }
  buildItems() {
    const state = this.store.getState();
    const items = [];
    items.push({
      id: "view-graph",
      title: "Switch to Knowledge Graph View",
      subtitle: "2D Force-directed Obsidian canvas graph",
      category: "Views",
      icon: "\u{1F310}",
      action: () => this.onSelectViewCallback?.("graph")
    });
    items.push({
      id: "view-cards",
      title: "Switch to Reading Cards & Shelf",
      subtitle: "Editorial cards grid and 3-column Kanban",
      category: "Views",
      icon: "\u{1F4D1}",
      action: () => this.onSelectViewCallback?.("cards")
    });
    items.push({
      id: "view-recall",
      title: "Switch to 3D Active Recall Deck",
      subtitle: "Spaced repetition flashcards review",
      category: "Views",
      icon: "\u{1F3AF}",
      action: () => this.onSelectViewCallback?.("flashcards")
    });
    items.push({
      id: "act-ai",
      title: "Launch AI Reading Intelligence",
      subtitle: "Executive synthesis, concept clusters & questions",
      category: "Actions",
      icon: "\u2728",
      action: () => this.onOpenAiCallback?.()
    });
    items.push({
      id: "act-obsidian",
      title: "Export Obsidian Markdown Vault (.zip)",
      subtitle: "Download complete vault with reciprocal wikilinks",
      category: "Actions",
      icon: "\u{1F48E}",
      action: () => this.onOpenObsidianCallback?.()
    });
    items.push({
      id: "act-engine",
      title: "Connect Local SQLite Engine (127.0.0.1:4242)",
      subtitle: "Sync with local offline daemon and database",
      category: "Actions",
      icon: "\u26A1",
      action: () => this.onOpenEngineCallback?.()
    });
    for (const b of state.books) {
      items.push({
        id: `book-${b.id}`,
        title: b.title,
        subtitle: `by ${b.author} \u2022 ${b.highlightsCount} highlights`,
        category: "Books",
        icon: "\u{1F4D6}",
        action: () => {
          this.store.selectBook(b.id);
          this.onSelectViewCallback?.("cards");
        }
      });
    }
    for (const h of state.highlights.slice(0, 30)) {
      items.push({
        id: `hl-${h.id}`,
        title: h.rawText.length > 80 ? h.rawText.substring(0, 77) + "..." : h.rawText,
        subtitle: `From ${h.bookTitle} (Loc ${h.location || "N/A"})`,
        category: "Highlights",
        icon: "\u{1F4AC}",
        action: () => {
          this.store.selectHighlight(h);
        }
      });
    }
    this.items = items;
  }
  filterItems(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(
        (item) => item.title.toLowerCase().includes(q) || item.subtitle && item.subtitle.toLowerCase().includes(q)
      );
    }
    this.selectedIndex = 0;
    this.renderResults();
  }
  renderResults() {
    if (this.filteredItems.length === 0) {
      this.resultsList.innerHTML = `<div class="cmd-empty-state">No matching commands, books, or highlights found.</div>`;
      return;
    }
    let html = "";
    let currentCategory = "";
    this.filteredItems.forEach((item, index) => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        html += `<div class="cmd-category-header">${currentCategory}</div>`;
      }
      const isSelected = index === this.selectedIndex;
      html += `
        <div class="cmd-item ${isSelected ? "selected" : ""}" data-index="${index}" role="option" aria-selected="${isSelected}">
          <span class="cmd-item-icon">${item.icon}</span>
          <div class="cmd-item-text">
            <span class="cmd-item-title">${this.escapeHtml(item.title)}</span>
            ${item.subtitle ? `<span class="cmd-item-subtitle">${this.escapeHtml(item.subtitle)}</span>` : ""}
          </div>
          ${isSelected ? `<span class="cmd-item-enter">\u21B5</span>` : ""}
        </div>
      `;
    });
    this.resultsList.innerHTML = html;
    this.resultsList.querySelectorAll(".cmd-item").forEach((el) => {
      el.addEventListener("click", () => {
        const idx = Number(el.getAttribute("data-index"));
        if (this.filteredItems[idx]) {
          this.executeItem(this.filteredItems[idx]);
        }
      });
    });
    const activeEl = this.resultsList.querySelector(".cmd-item.selected");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }
  executeItem(item) {
    this.close();
    item.action();
  }
  escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
};

// src/components/workspace.ts
var WorkspaceController = class {
  store;
  graphEngine = null;
  cardsComponent = null;
  flashcardsComponent = null;
  slideover = null;
  engineBridge = null;
  aiModal = null;
  obsidianModal = null;
  commandPalette = null;
  constructor() {
    this.store = ReadingStateStore.getInstance();
    this.init();
  }
  init() {
    const graphContainer = document.getElementById("graph-container");
    if (graphContainer) {
      this.graphEngine = new CanvasGraphEngine(graphContainer, (node) => {
        this.handleNodeClick(node);
      });
    }
    const cardsContainer = document.getElementById("cards-container");
    if (cardsContainer) {
      this.cardsComponent = new ReadingCardsComponent(cardsContainer, {
        onSelectHighlight: (hl) => this.store.selectHighlight(hl),
        onSelectBook: (bookId) => this.store.selectBook(bookId),
        onUpdateBookStatus: (bookId, status) => this.store.updateBookStatus(bookId, status)
      });
    }
    const flashcardsContainer = document.getElementById("flashcards-container");
    if (flashcardsContainer) {
      this.flashcardsComponent = new ActiveRecallComponent(flashcardsContainer);
    }
    this.slideover = new SlideoverDrawer();
    this.engineBridge = new EngineBridgeModal("btn-engine-status");
    this.aiModal = new AISynthesisModal();
    const btnAi = document.getElementById("btn-ai-synthesis");
    if (btnAi) {
      btnAi.addEventListener("click", () => this.aiModal?.open());
    }
    this.obsidianModal = new ObsidianExportModal();
    const btnObsidian = document.getElementById("btn-obsidian-export");
    if (btnObsidian) {
      btnObsidian.addEventListener("click", () => this.obsidianModal?.open());
    }
    this.commandPalette = new CommandPaletteComponent({
      onSelectView: (view) => this.store.setView(view),
      onOpenAi: () => this.aiModal?.open(),
      onOpenObsidian: () => this.obsidianModal?.open(),
      onOpenEngine: () => this.engineBridge?.open()
    });
    const btnSpotlight = document.getElementById("btn-spotlight-trigger");
    if (btnSpotlight) {
      btnSpotlight.addEventListener("click", () => this.commandPalette?.open());
    }
    this.store.subscribe((state) => this.render(state));
    const searchInput = document.getElementById("search-input");
    if (searchInput) {
      searchInput.addEventListener("input", () => {
        this.store.setSearchQuery(searchInput.value);
      });
    }
    const datasetSelect = document.getElementById("dataset-select");
    if (datasetSelect) {
      datasetSelect.addEventListener("change", () => {
        if (datasetSelect.value === "demo") {
          this.store.loadDemoData();
        }
      });
    }
    const viewButtons = document.querySelectorAll(".view-btn");
    viewButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const view = btn.getAttribute("data-view");
        if (view) {
          this.store.setView(view);
        }
      });
    });
    const colorDots = document.querySelectorAll(".color-dot-btn");
    colorDots.forEach((btn) => {
      btn.addEventListener("click", () => {
        const color = btn.getAttribute("data-color");
        if (color) {
          this.store.toggleColorFilter(color);
        }
      });
    });
    const btnZoomIn = document.getElementById("btn-graph-zoom-in");
    const btnZoomOut = document.getElementById("btn-graph-zoom-out");
    const btnResetView = document.getElementById("btn-graph-reset");
    const btnTogglePhysics = document.getElementById("btn-graph-physics");
    if (btnZoomIn) btnZoomIn.addEventListener("click", () => this.graphEngine?.zoomIn());
    if (btnZoomOut) btnZoomOut.addEventListener("click", () => this.graphEngine?.zoomOut());
    if (btnResetView) btnResetView.addEventListener("click", () => this.graphEngine?.resetView());
    if (btnTogglePhysics) {
      btnTogglePhysics.addEventListener("click", () => {
        const isRunning = this.graphEngine?.togglePhysics();
        btnTogglePhysics.classList.toggle("active", isRunning);
      });
    }
    const fileInput = document.getElementById("file-upload-input");
    const btnUpload = document.getElementById("btn-upload-file");
    if (btnUpload && fileInput) {
      btnUpload.addEventListener("click", () => fileInput.click());
      fileInput.addEventListener("change", async () => {
        const file = fileInput.files?.[0];
        if (!file) return;
        const text = await file.text();
        if (file.name.endsWith(".json")) {
          const parsed = FileImportAdapter.parseJsonSnapshot(text);
          this.store.loadCustomData(parsed.books, parsed.highlights, "custom_file");
        } else if (file.name.endsWith(".csv")) {
          const parsed = FileImportAdapter.parseReadwiseCsv(text);
          this.store.loadCustomData(parsed.books, parsed.highlights, "custom_file");
        } else {
          const parsed = FileImportAdapter.parseMyClippings(text);
          this.store.loadCustomData(parsed.books, parsed.highlights, "custom_file");
        }
      });
    }
  }
  handleNodeClick(node) {
    if (node.type === "book") {
      this.store.selectBook(node.id === this.store.getState().filters.selectedBookId ? null : node.id);
    } else if (node.type === "highlight") {
      const match = this.store.getState().highlights.find((h) => h.id === node.id);
      if (match) {
        this.store.selectHighlight(match);
      }
    }
  }
  render(state) {
    const graphContainer = document.getElementById("graph-container");
    const cardsContainer = document.getElementById("cards-container");
    const flashcardsContainer = document.getElementById("flashcards-container");
    const graphToolbar = document.querySelector(".graph-toolbar");
    if (state.selectedHighlight && this.slideover) {
      this.slideover.open(state.selectedHighlight);
    }
    if (state.activeView === "graph") {
      if (graphContainer) graphContainer.style.display = "block";
      if (cardsContainer) cardsContainer.style.display = "none";
      if (flashcardsContainer) flashcardsContainer.style.display = "none";
      if (graphToolbar) graphToolbar.style.display = "flex";
      if (this.graphEngine) {
        this.graphEngine.setData(state.graphData);
      }
    } else if (state.activeView === "cards") {
      if (graphContainer) graphContainer.style.display = "none";
      if (cardsContainer) cardsContainer.style.display = "block";
      if (flashcardsContainer) flashcardsContainer.style.display = "none";
      if (graphToolbar) graphToolbar.style.display = "none";
      if (this.cardsComponent) {
        const filteredHighlights = this.store.getFilteredHighlights();
        this.cardsComponent.render(state.books, filteredHighlights);
      }
    } else if (state.activeView === "flashcards") {
      if (graphContainer) graphContainer.style.display = "none";
      if (cardsContainer) cardsContainer.style.display = "none";
      if (flashcardsContainer) flashcardsContainer.style.display = "flex";
      if (graphToolbar) graphToolbar.style.display = "none";
      if (this.flashcardsComponent) {
        const filteredHighlights = this.store.getFilteredHighlights();
        this.flashcardsComponent.setDeck(filteredHighlights);
      }
    }
    const bookListContainer = document.getElementById("sidebar-book-list");
    if (bookListContainer) {
      bookListContainer.innerHTML = "";
      const allItem = document.createElement("button");
      allItem.className = `book-item-btn ${state.filters.selectedBookId === null ? "active" : ""}`;
      allItem.innerHTML = `<span>All Library Highlights</span> <span class="book-count-badge">${state.highlights.length}</span>`;
      allItem.addEventListener("click", () => this.store.selectBook(null));
      bookListContainer.appendChild(allItem);
      state.books.forEach((book) => {
        const item = document.createElement("button");
        item.className = `book-item-btn ${state.filters.selectedBookId === book.id ? "active" : ""}`;
        item.innerHTML = `<span>\u{1F4D6} ${book.title}</span> <span class="book-count-badge">${book.highlightsCount}</span>`;
        item.addEventListener("click", () => this.store.selectBook(book.id));
        bookListContainer.appendChild(item);
      });
    }
    const viewButtons = document.querySelectorAll(".view-btn");
    viewButtons.forEach((btn) => {
      const view = btn.getAttribute("data-view");
      if (view === state.activeView) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    const colorDots = document.querySelectorAll(".color-dot-btn");
    colorDots.forEach((btn) => {
      const color = btn.getAttribute("data-color");
      if (color && state.filters.selectedColors.has(color)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    const hudNodes = document.getElementById("hud-nodes-count");
    const hudLinks = document.getElementById("hud-links-count");
    const hudFiltered = document.getElementById("hud-filtered-count");
    if (hudNodes) hudNodes.textContent = String(state.graphData.nodes.length);
    if (hudLinks) hudLinks.textContent = String(state.graphData.links.length);
    if (hudFiltered) hudFiltered.textContent = String(this.store.getFilteredHighlights().length);
  }
};

// src/scripts/app.ts
document.addEventListener("DOMContentLoaded", () => {
  new WorkspaceController();
  console.log("\u26A1 Hakim Reading Intelligence Web Client Initialized.");
});
