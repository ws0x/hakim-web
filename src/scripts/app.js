var A=[{id:"book-1",asin:"B00ZUX90S4",title:"Designing Data-Intensive Applications",author:"Martin Kleppmann",highlightsCount:6,tags:["Software Architecture","Distributed Systems","Reliability"],status:"reading"},{id:"book-2",asin:"B01862ES3A",title:"The Daily Stoic",author:"Ryan Holiday",highlightsCount:6,tags:["Philosophy","Stoicism","Mindset"],status:"completed"},{id:"book-3",asin:"B07D23CFGR",title:"Atomic Habits",author:"James Clear",highlightsCount:5,tags:["Productivity","Habit Formation","Systems Thinking"],status:"completed"},{id:"book-4",asin:"B004J4XGN6",title:"Thinking, Fast and Slow",author:"Daniel Kahneman",highlightsCount:5,tags:["Psychology","Cognitive Biases","Decision Making"],status:"reading"},{id:"book-5",asin:"B001GSTOAM",title:"Clean Code",author:"Robert C. Martin",highlightsCount:4,tags:["Software Craftsmanship","Refactoring","Clean Code"],status:"completed"}],D=[{id:"hl-101",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Reliability means continuing to work correctly (performing the correct function at the desired level of performance) even in the face of adversity (hardware or software faults, and even human error).",location:120,color:"yellow",importance:"Essential",tags:["Reliability","Software Architecture"],sourceNote:"Core definition of software reliability.",interpretation:"A system is not truly reliable if it only works under ideal conditions."},{id:"hl-102",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Scalability is the term we use to describe a system's ability to cope with increased load.",location:245,color:"blue",importance:"High",tags:["Distributed Systems"]},{id:"hl-103",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Maintainability means many different people will work on the system over time, and they should all be able to work on it productively.",location:380,color:"pink",importance:"High",tags:["Clean Code","Software Architecture"]},{id:"hl-104",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Behind every fault-tolerant system is a set of carefully reasoned invariants.",location:512,color:"orange",importance:"Essential",tags:["Distributed Systems"]},{id:"hl-201",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",location:45,color:"yellow",importance:"Essential",tags:["Stoicism","Mindset"],sourceNote:"Epictetus' Dichotomy of Control.",interpretation:"Direct energy only towards intentional choices, never external outcomes."},{id:"hl-202",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"You have power over your mind - not outside events. Realize this, and you will find strength.",location:190,color:"yellow",importance:"High",tags:["Stoicism","Psychology"]},{id:"hl-203",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"Waste no more time arguing what a good person should be. Be one.",location:320,color:"pink",importance:"Essential",tags:["Philosophy"]},{id:"hl-301",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"You do not rise to the level of your goals. You fall to the level of your systems.",location:110,color:"yellow",importance:"Essential",tags:["Systems Thinking","Habit Formation"],interpretation:"Focus on designing frictionless recurring routines rather than obsessing over end milestones."},{id:"hl-302",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Every action you take is a vote for the type of person you wish to become.",location:280,color:"orange",importance:"High",tags:["Habit Formation","Mindset"]},{id:"hl-303",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Make it obvious, make it attractive, make it easy, make it satisfying.",location:450,color:"blue",importance:"Essential",tags:["Productivity"]},{id:"hl-401",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.",location:80,color:"yellow",importance:"High",tags:["Cognitive Biases","Psychology"]},{id:"hl-402",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 2 allocates attention to the effortful mental operations that demand it, including complex computations.",location:140,color:"blue",importance:"High",tags:["Cognitive Biases","Decision Making"]},{id:"hl-403",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"We are prone to overestimate how much we understand about the world and to underestimate the role of chance.",location:390,color:"pink",importance:"Essential",tags:["Decision Making","Mindset"]},{id:"hl-501",bookId:"book-5",bookTitle:"Clean Code",rawText:"Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",location:95,color:"yellow",importance:"Essential",tags:["Clean Code","Software Craftsmanship"]},{id:"hl-502",bookId:"book-5",bookTitle:"Clean Code",rawText:"Leave the campground cleaner than you found it. The Boy Scout Rule.",location:210,color:"pink",importance:"Essential",tags:["Refactoring","Clean Code"],sourceNote:"Apply incremental continuous cleanup to every PR."}];var E=class{static COLOR_PALETTE={book:"#818cf8",topic:"#38bdf8",author:"#c084fc",yellowHighlight:"#fcd34d",blueHighlight:"#67e8f9",pinkHighlight:"#fda4af",orangeHighlight:"#fdba74"};static buildGraph(t,i,e){let s=[],a=[],r=new Set,d=new Map;for(let o=0;o<t.length;o++){let n=t[o];if(s.push({id:n.id,label:n.title,type:"book",group:1,size:Math.max(16,Math.min(32,14+n.highlightsCount*2)),color:this.COLOR_PALETTE.book,bookTitle:n.title}),r.add(n.id),n.tags)for(let c of n.tags)d.set(c,(d.get(c)||0)+1)}for(let[o,n]of d.entries()){let c=`topic-${o.toLowerCase().replace(/\s+/g,"-")}`;s.push({id:c,label:`#${o}`,type:"topic",group:2,size:Math.max(12,Math.min(24,10+n*3)),color:this.COLOR_PALETTE.topic}),r.add(c);for(let p of t)p.tags?.includes(o)&&a.push({source:p.id,target:c,type:"shares_topic",strength:.7})}for(let o of i){if(e&&!e.has(o.id))continue;let n=this.COLOR_PALETTE.yellowHighlight;o.color==="blue"?n=this.COLOR_PALETTE.blueHighlight:o.color==="pink"?n=this.COLOR_PALETTE.pinkHighlight:o.color==="orange"&&(n=this.COLOR_PALETTE.orangeHighlight);let c=o.location!==void 0?`Loc ${o.location}`:"Note",p=o.rawText.substring(0,36)+(o.rawText.length>36?"...":"");if(s.push({id:o.id,label:`${c}: ${p}`,type:"highlight",group:3,size:o.importance==="Essential"?10:7,color:n,bookId:o.bookId,bookTitle:o.bookTitle,rawText:o.rawText,note:o.sourceNote,location:o.location,importance:o.importance}),r.add(o.id),r.has(o.bookId)&&a.push({source:o.bookId,target:o.id,type:"contains",strength:.9}),o.tags)for(let l of o.tags){let u=`topic-${l.toLowerCase().replace(/\s+/g,"-")}`;r.has(u)&&a.push({source:o.id,target:u,type:"shares_topic",strength:.4})}}return{nodes:s,links:a}}};var x=class g{static instance;listeners=new Set;state={books:A,highlights:D,filters:{searchQuery:"",selectedBookId:null,selectedColors:new Set(["yellow","blue","pink","orange"]),selectedImportance:new Set(["Essential","High","Medium","Low"]),selectedTopics:new Set},graphData:{nodes:[],links:[]},activeView:"graph",selectedHighlight:null,isLoading:!1,activeDataset:"demo"};constructor(){this.recomputeGraph()}static getInstance(){return g.instance||(g.instance=new g),g.instance}getState(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t(this.state)}setView(t){this.state.activeView=t,this.notify()}selectHighlight(t){this.state.selectedHighlight=t,this.notify()}setSearchQuery(t){this.state.filters.searchQuery=t.toLowerCase().trim(),this.recomputeGraph(),this.notify()}selectBook(t){this.state.filters.selectedBookId=t,this.recomputeGraph(),this.notify()}toggleColorFilter(t){this.state.filters.selectedColors.has(t)?this.state.filters.selectedColors.delete(t):this.state.filters.selectedColors.add(t),this.recomputeGraph(),this.notify()}loadCustomData(t,i,e){this.state.books=t,this.state.highlights=i,this.state.activeDataset=e,this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}updateBookStatus(t,i){let e=this.state.books.find(s=>s.id===t);e&&(e.status=i,this.notify())}loadDemoData(){this.state.books=A,this.state.highlights=D,this.state.activeDataset="demo",this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}getFilteredHighlights(){let{searchQuery:t,selectedBookId:i,selectedColors:e,selectedImportance:s}=this.state.filters;return this.state.highlights.filter(a=>{if(i&&a.bookId!==i||e.size>0&&!e.has(a.color)||a.importance&&s.size>0&&!s.has(a.importance))return!1;if(t){let r=a.rawText.toLowerCase().includes(t),d=a.bookTitle.toLowerCase().includes(t),o=a.sourceNote?.toLowerCase().includes(t),n=a.tags?.some(c=>c.toLowerCase().includes(t));if(!r&&!d&&!o&&!n)return!1}return!0})}recomputeGraph(){let t=this.getFilteredHighlights(),i=new Set(t.map(e=>e.id));this.state.graphData=E.buildGraph(this.state.books,this.state.highlights,i)}};function G(g){if(!g)return"";let t={"&quot;":'"',"&amp;":"&","&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"\xAB","&raquo;":"\xBB","&mdash;":"\u2014","&ndash;":"\u2013","&hellip;":"\u2026","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&lsaquo;":"\u2039","&rsaquo;":"\u203A","&trade;":"\u2122","&copy;":"\xA9","&reg;":"\xAE","&bull;":"\u2022","&middot;":"\xB7","&prime;":"\u2032","&Prime;":"\u2033"};return g.replace(/&[a-zA-Z]+;/g,i=>t[i.toLowerCase()]??i).replace(/&#(\d+);/g,(i,e)=>{try{return String.fromCodePoint(parseInt(e,10))}catch{return i}}).replace(/&#x([a-fA-F0-9]+);/g,(i,e)=>{try{return String.fromCodePoint(parseInt(e,16))}catch{return i}})}function T(g){return g?G(g).normalize("NFKC").replace(/[\u200B-\u200D\uFEFF\u00AD\u200E\u200F]/g,"").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\s+/g," ").trim():""}function q(g){return g?T(g).replace(/\s*\((?:Kindle Edition|English Edition|Arabic Edition)\)/gi,"").trim():"Untitled"}function P(g){if(!g)return"Unknown Author";let t=T(g);if(t.includes(",")&&!t.includes(";")){let i=t.split(",").map(e=>e.trim());i.length===2&&i[0]&&i[1]&&(t=`${i[1]} ${i[0]}`)}return t}var C=class{static parseMyClippings(t){let i=t.split(/==========/),e=new Map,s=[];for(let a=0;a<i.length;a++){let r=i[a]?.trim();if(!r)continue;let d=r.split(/\r?\n/).map(S=>S.trim()).filter(Boolean);if(d.length<3)continue;let o=d[0],n=o.match(/\(([^)]+)\)$/),c=o,p="Unknown Author";n&&n[1]&&(p=n[1].trim(),c=o.substring(0,o.lastIndexOf("(")).trim());let l=q(c),u=P(p),h=`${l}:::${u}`,m=e.get(h);m||(m={id:`book-${e.size+1}`,title:l,author:u,highlightsCount:0,status:"reading"},e.set(h,m));let f=d[1],y,b=f.match(/Location\s+(\d+)/i)||f.match(/page\s+(\d+)/i);b&&b[1]&&(y=parseInt(b[1],10));let k="yellow";/yellow/i.test(f)?k="yellow":/blue/i.test(f)?k="blue":/pink/i.test(f)?k="pink":/orange/i.test(f)&&(k="orange");let w=d.slice(2).join(" ");w&&(m.highlightsCount++,s.push({id:`hl-import-${s.length+1}`,bookId:m.id,bookTitle:m.title,rawText:T(w),location:y,color:k,importance:"Medium",status:"Inbox"}))}return{books:Array.from(e.values()),highlights:s}}static parseJsonSnapshot(t){try{let i=JSON.parse(t);if(Array.isArray(i.books)&&Array.isArray(i.highlights))return{books:i.books,highlights:i.highlights};throw new Error("Invalid Hakim JSON snapshot structure.")}catch(i){throw new Error(`Failed to parse JSON file: ${i instanceof Error?i.message:"Invalid JSON"}`)}}};var H=class{canvas;ctx;container;nodes=[];links=[];nodeMap=new Map;alpha=1;alphaMin=.001;alphaDecay=.022;isSimulationRunning=!0;scale=1;minScale=.2;maxScale=4;offsetX=0;offsetY=0;isPanning=!1;panStartX=0;panStartY=0;hoveredNode=null;draggedNode=null;onNodeClickCallback;animationFrameId=null;constructor(t,i){this.container=t,this.onNodeClickCallback=i,this.canvas=document.createElement("canvas"),this.canvas.className="graph-canvas",this.container.appendChild(this.canvas);let e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get 2D context from canvas.");this.ctx=e,this.resize(),this.initEvents()}setData(t){let i=this.canvas.width/(window.devicePixelRatio||1),e=this.canvas.height/(window.devicePixelRatio||1);this.nodeMap.clear(),this.nodes=t.nodes.map((s,a)=>{let r=this.nodes.find(c=>c.id===s.id),d=a/Math.max(1,t.nodes.length)*2*Math.PI,o=s.type==="book"?120:s.type==="topic"?220:280+a%5*20,n={...s,x:r?r.x:i/2+Math.cos(d)*o+(Math.random()-.5)*40,y:r?r.y:e/2+Math.sin(d)*o+(Math.random()-.5)*40,vx:0,vy:0,radius:s.size||(s.type==="book"?22:s.type==="topic"?16:8)};return this.nodeMap.set(s.id,n),n}),this.links=t.links.map(s=>({...s,sourceNode:this.nodeMap.get(typeof s.source=="string"?s.source:s.source.id),targetNode:this.nodeMap.get(typeof s.target=="string"?s.target:s.target.id)})),this.alpha=1,this.startSimulation()}resize(){let t=this.container.getBoundingClientRect(),i=window.devicePixelRatio||1,e=t.width||800,s=t.height||600;this.canvas.width=e*i,this.canvas.height=s*i,this.canvas.style.width=`${e}px`,this.canvas.style.height=`${s}px`,this.ctx.scale(i,i),this.offsetX===0&&this.offsetY===0&&(this.offsetX=e/2,this.offsetY=s/2)}startSimulation(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId);let t=()=>{this.isSimulationRunning&&this.tick(),this.render(),this.animationFrameId=requestAnimationFrame(t)};this.animationFrameId=requestAnimationFrame(t)}tick(){if(this.alpha<this.alphaMin)return;let t=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1),e=t/2,s=i/2,a=.035*this.alpha;for(let o of this.nodes)o.vx+=(e-o.x)*a,o.vy+=(s-o.y)*a;let r=450*this.alpha;for(let o=0;o<this.nodes.length;o++){let n=this.nodes[o];for(let c=o+1;c<this.nodes.length;c++){let p=this.nodes[c],l=p.x-n.x,u=p.y-n.y,h=l*l+u*u;h===0&&(h=1);let m=Math.sqrt(h),f=n.radius+p.radius+15,y=r/h*(n.type==="book"||p.type==="book"?2.5:1),b=l/m*y,k=u/m*y;if(n.isDragging||(n.vx-=b,n.vy-=k),p.isDragging||(p.vx+=b,p.vy+=k),m<f){let w=(f-m)*.5*this.alpha,S=l/m*w,R=u/m*w;n.isDragging||(n.x-=S,n.y-=R),p.isDragging||(p.x+=S,p.y+=R)}}}for(let o of this.links){if(!o.sourceNode||!o.targetNode)continue;let n=o.sourceNode,c=o.targetNode,p=c.x-n.x,l=c.y-n.y,u=Math.sqrt(p*p+l*l)||1,h=o.type==="contains"?90:160,m=(o.strength||.5)*.12*this.alpha,f=(u-h)*m,y=p/u*f,b=l/u*f;n.isDragging||(n.vx+=y,n.vy+=b),c.isDragging||(c.vx-=y,c.vy-=b)}let d=.65;for(let o of this.nodes)o.isDragging||(o.vx*=d,o.vy*=d,o.x+=o.vx,o.y+=o.vy);this.alpha+=(0-this.alpha)*this.alphaDecay}render(){let t=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1);this.ctx.clearRect(0,0,t,i),this.ctx.save(),this.ctx.translate(this.offsetX,this.offsetY),this.ctx.scale(this.scale,this.scale);for(let e of this.links){if(!e.sourceNode||!e.targetNode)continue;let s=this.hoveredNode&&(e.sourceNode.id===this.hoveredNode.id||e.targetNode.id===this.hoveredNode.id);this.ctx.beginPath(),this.ctx.moveTo(e.sourceNode.x-t/2,e.sourceNode.y-i/2),this.ctx.lineTo(e.targetNode.x-t/2,e.targetNode.y-i/2),s?(this.ctx.strokeStyle="rgba(129, 140, 248, 0.85)",this.ctx.lineWidth=2):(this.ctx.strokeStyle=e.type==="shares_topic"?"rgba(56, 189, 248, 0.18)":"rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=e.type==="contains"?1.2:.8),this.ctx.stroke()}for(let e of this.nodes){let s=e.x-t/2,a=e.y-i/2,r=this.hoveredNode?.id===e.id,d=this.hoveredNode&&!r&&!this.areNodesConnected(e,this.hoveredNode);this.ctx.save(),this.ctx.globalAlpha=d?.25:1,(e.type==="book"||r)&&(this.ctx.beginPath(),this.ctx.arc(s,a,e.radius+6,0,2*Math.PI),this.ctx.fillStyle=e.type==="book"?"rgba(99, 102, 241, 0.25)":"rgba(255, 255, 255, 0.2)",this.ctx.fill()),this.ctx.beginPath(),this.ctx.arc(s,a,e.radius,0,2*Math.PI),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.strokeStyle=r?"#ffffff":"rgba(255, 255, 255, 0.25)",this.ctx.lineWidth=r?2.5:1.2,this.ctx.stroke(),this.ctx.font=e.type==="book"?"bold 12px Inter, sans-serif":e.type==="topic"?"600 11px Inter, sans-serif":"10px Inter, sans-serif",this.ctx.fillStyle=r?"#ffffff":e.type==="book"?"#e0e7ff":"rgba(255, 255, 255, 0.85)",this.ctx.textAlign="center",this.ctx.textBaseline="top";let o=e.label;e.type==="highlight"&&o.length>24&&(o=o.substring(0,22)+"..."),this.ctx.fillText(o,s,a+e.radius+4),this.ctx.restore()}this.ctx.restore()}areNodesConnected(t,i){return this.links.some(e=>e.sourceNode?.id===t.id&&e.targetNode?.id===i.id||e.sourceNode?.id===i.id&&e.targetNode?.id===t.id)}getNodeAtPosition(t,i){let e=this.canvas.width/(window.devicePixelRatio||1),s=this.canvas.height/(window.devicePixelRatio||1),a=(t-this.offsetX)/this.scale+e/2,r=(i-this.offsetY)/this.scale+s/2;for(let d=this.nodes.length-1;d>=0;d--){let o=this.nodes[d],n=a-o.x,c=r-o.y;if(n*n+c*c<=(o.radius+4)*(o.radius+4))return o}return null}initEvents(){window.addEventListener("resize",()=>this.resize()),this.canvas.addEventListener("mousemove",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top;if(this.draggedNode){let r=this.canvas.width/(window.devicePixelRatio||1),d=this.canvas.height/(window.devicePixelRatio||1);this.draggedNode.x=(e-this.offsetX)/this.scale+r/2,this.draggedNode.y=(s-this.offsetY)/this.scale+d/2,this.alpha=Math.max(this.alpha,.3);return}if(this.isPanning){this.offsetX+=e-this.panStartX,this.offsetY+=s-this.panStartY,this.panStartX=e,this.panStartY=s;return}let a=this.getNodeAtPosition(e,s);this.hoveredNode=a,this.canvas.style.cursor=a?"pointer":"grab"}),this.canvas.addEventListener("mousedown",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,a=this.getNodeAtPosition(e,s);a?(this.draggedNode=a,a.isDragging=!0,this.alpha=.5):(this.isPanning=!0,this.panStartX=e,this.panStartY=s,this.canvas.style.cursor="grabbing")}),window.addEventListener("mouseup",t=>{this.draggedNode&&(this.draggedNode.isDragging=!1,this.draggedNode=null),this.isPanning=!1,this.canvas.style.cursor=this.hoveredNode?"pointer":"grab"}),this.canvas.addEventListener("click",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,a=this.getNodeAtPosition(e,s);a&&this.onNodeClickCallback&&this.onNodeClickCallback(a)}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,a=t.deltaY<0?1.12:.88,r=Math.max(this.minScale,Math.min(this.maxScale,this.scale*a));this.offsetX=e-(e-this.offsetX)*(r/this.scale),this.offsetY=s-(s-this.offsetY)*(r/this.scale),this.scale=r},{passive:!1})}zoomIn(){this.scale=Math.min(this.maxScale,this.scale*1.25)}zoomOut(){this.scale=Math.max(this.minScale,this.scale*.8)}resetView(){let t=this.container.getBoundingClientRect();this.scale=1,this.offsetX=(t.width||800)/2,this.offsetY=(t.height||600)/2,this.alpha=1}togglePhysics(){return this.isSimulationRunning=!this.isSimulationRunning,this.isSimulationRunning}};var I=class{container;currentTab="highlights";onSelectHighlight;onSelectBook;onUpdateBookStatus;constructor(t,i){this.container=t,this.onSelectHighlight=i?.onSelectHighlight,this.onSelectBook=i?.onSelectBook,this.onUpdateBookStatus=i?.onUpdateBookStatus}render(t,i){this.container.innerHTML="";let e=document.createElement("div");e.className="cards-nav-header";let s=document.createElement("div");s.className="cards-subtabs",[{id:"highlights",label:`Highlights Grid (${i.length})`},{id:"books",label:`Books Shelf (${t.length})`},{id:"kanban",label:"Reading OS Kanban"}].forEach(d=>{let o=document.createElement("button");o.className=`subtab-btn ${this.currentTab===d.id?"active":""}`,o.setAttribute("data-subtab",d.id),o.textContent=d.label,o.addEventListener("click",()=>{this.currentTab=d.id,this.render(t,i)}),s.appendChild(o)}),e.appendChild(s),this.container.appendChild(e);let r=document.createElement("div");r.className="cards-content-body",this.currentTab==="highlights"?r.appendChild(this.createHighlightsGrid(i)):this.currentTab==="books"?r.appendChild(this.createBooksGrid(t)):this.currentTab==="kanban"&&r.appendChild(this.createKanbanBoard(t)),this.container.appendChild(r)}createHighlightsGrid(t){let i=document.createElement("div");if(i.className="highlights-card-grid",t.length===0){let e=document.createElement("div");return e.className="empty-state-card",e.innerHTML="<p>No highlights match the current filters.</p>",i.appendChild(e),i}return t.forEach(e=>{let s=document.createElement("article");s.className=`highlight-card color-border-${e.color}`;let a=e.color==="blue"?"tag-blue":e.color==="pink"?"tag-pink":e.color==="orange"?"tag-orange":"tag-yellow",r=e.color==="blue"?"Quote / Fact":e.color==="pink"?"Critical / Action":e.color==="orange"?"Concept / Story":"Key Insight";s.innerHTML=`
        <div class="card-meta-top">
          <span class="book-title-badge" title="${e.bookTitle}">\u{1F4D6} ${e.bookTitle}</span>
          <span class="loc-pill">${e.location?`Loc ${e.location}`:"Note"}</span>
        </div>
        <blockquote class="card-quote-text">\u201C${e.rawText}\u201D</blockquote>
        ${e.sourceNote?`<div class="card-note-box"><strong>\u270D\uFE0F Note:</strong> ${e.sourceNote}</div>`:""}
        ${e.interpretation?`<div class="card-interp-box"><strong>\u{1F9E0} Reflection:</strong> ${e.interpretation}</div>`:""}
        <div class="card-footer">
          <span class="${a}">${r}</span>
          ${e.importance?`<span class="importance-pill imp-${e.importance.toLowerCase()}">${e.importance}</span>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectHighlight&&this.onSelectHighlight(e)}),i.appendChild(s)}),i}createBooksGrid(t){let i=document.createElement("div");return i.className="books-card-grid",t.forEach(e=>{let s=document.createElement("article");s.className="book-shelf-card",s.innerHTML=`
        <div class="book-cover-placeholder">
          <span class="book-cover-emoji">\u{1F4D6}</span>
        </div>
        <div class="book-shelf-details">
          <h3 class="book-shelf-title">${e.title}</h3>
          <p class="book-shelf-author">By ${e.author}</p>
          <div class="book-shelf-stats">
            <span>\u{1F4A1} <strong>${e.highlightsCount}</strong> Highlights</span>
            <span class="status-pill status-${e.status||"reading"}">${e.status||"reading"}</span>
          </div>
          ${e.tags&&e.tags.length>0?`<div class="book-tags-row">${e.tags.map(a=>`<span class="book-tag-chip">#${a}</span>`).join(" ")}</div>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(e.id)}),i.appendChild(s)}),i}createKanbanBoard(t){let i=document.createElement("div");return i.className="kanban-board-container",[{id:"reading",title:"Currently Reading",emoji:"\u{1F4D6}"},{id:"completed",title:"Completed & Processed",emoji:"\u2705"},{id:"want_to_read",title:"Want to Read",emoji:"\u{1F516}"}].forEach(s=>{let a=t.filter(n=>(n.status||"reading")===s.id),r=document.createElement("div");r.className="kanban-column";let d=document.createElement("div");d.className="kanban-col-header",d.innerHTML=`
        <span class="kanban-col-title">${s.emoji} ${s.title}</span>
        <span class="kanban-col-count">${a.length}</span>
      `,r.appendChild(d);let o=document.createElement("div");o.className="kanban-cards-stack",o.setAttribute("data-status",s.id),a.forEach(n=>{let c=document.createElement("div");c.className="kanban-book-item",c.innerHTML=`
          <h4 class="kanban-item-title">${n.title}</h4>
          <p class="kanban-item-author">${n.author}</p>
          <div class="kanban-item-meta">
            <span>\u{1F4A1} ${n.highlightsCount} notes</span>
            <select class="kanban-status-select" aria-label="Change status">
              <option value="reading" ${n.status==="reading"?"selected":""}>Reading</option>
              <option value="completed" ${n.status==="completed"?"selected":""}>Completed</option>
              <option value="want_to_read" ${n.status==="want_to_read"?"selected":""}>Want to Read</option>
            </select>
          </div>
        `;let p=c.querySelector(".kanban-status-select");p&&(p.addEventListener("click",l=>l.stopPropagation()),p.addEventListener("change",()=>{let l=p.value;this.onUpdateBookStatus&&this.onUpdateBookStatus(n.id,l)})),c.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(n.id)}),o.appendChild(c)}),r.appendChild(o),i.appendChild(r)}),i}};var L=class{container;currentHighlight=null;currentTheme="obsidian";currentRatio="1:1";canvas;ctx;constructor(){this.container=document.createElement("div"),this.container.className="quote-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.canvas=document.createElement("canvas");let t=this.canvas.getContext("2d");if(!t)throw new Error("Could not get 2D context for quote card.");this.ctx=t,this.initDOM()}initDOM(){this.container.innerHTML=`
      <div class="quote-modal-window" role="dialog" aria-labelledby="quote-modal-title" aria-modal="true">
        <div class="quote-modal-header">
          <h3 id="quote-modal-title" class="quote-modal-title">\u2728 Aesthetic Quote Card Generator</h3>
          <button id="btn-close-quote-modal" class="btn-modal-close" aria-label="Close modal">&times;</button>
        </div>

        <div class="quote-modal-body">
          <!-- Canvas Preview -->
          <div class="quote-canvas-preview-wrapper">
            <div id="quote-canvas-mount" class="quote-canvas-mount"></div>
          </div>

          <!-- Controls Sidebar -->
          <div class="quote-modal-controls">
            <div class="control-group">
              <label class="control-label">Card Theme Gradient</label>
              <div class="theme-options-grid">
                <button class="theme-btn theme-obsidian active" data-theme="obsidian">Obsidian</button>
                <button class="theme-btn theme-sunset" data-theme="sunset">Sunset</button>
                <button class="theme-btn theme-emerald" data-theme="emerald">Emerald</button>
                <button class="theme-btn theme-minimal" data-theme="minimal">Minimal</button>
              </div>
            </div>

            <div class="control-group">
              <label class="control-label">Aspect Ratio</label>
              <div class="ratio-options-grid">
                <button class="ratio-btn active" data-ratio="1:1">1:1 (Square)</button>
                <button class="ratio-btn" data-ratio="9:16">9:16 (Story)</button>
                <button class="ratio-btn" data-ratio="16:9">16:9 (Banner)</button>
              </div>
            </div>

            <div class="modal-actions-footer">
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
    `;let t=this.container.querySelector("#quote-canvas-mount");t&&t.appendChild(this.canvas),this.container.querySelector("#btn-close-quote-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.container.querySelectorAll(".theme-btn").forEach(i=>{i.addEventListener("click",()=>{let e=i.getAttribute("data-theme");e&&(this.currentTheme=e,this.container.querySelectorAll(".theme-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".ratio-btn").forEach(i=>{i.addEventListener("click",()=>{let e=i.getAttribute("data-ratio");e&&(this.currentRatio=e,this.container.querySelectorAll(".ratio-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelector("#btn-download-card-png")?.addEventListener("click",()=>this.downloadPNG())}open(t){this.currentHighlight=t,this.container.style.display="flex",this.renderCanvas()}close(){this.container.style.display="none"}renderCanvas(){if(!this.currentHighlight)return;let t=1200,i=1200;if(this.currentRatio==="9:16"?(t=1080,i=1920):this.currentRatio==="16:9"&&(t=1920,i=1080),this.canvas.width=t,this.canvas.height=i,this.currentTheme==="obsidian"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#090a0f"),l.addColorStop(.5,"#151828"),l.addColorStop(1,"#090a0f"),this.ctx.fillStyle=l}else if(this.currentTheme==="sunset"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#1f0d14"),l.addColorStop(.5,"#3b1122"),l.addColorStop(1,"#18080f"),this.ctx.fillStyle=l}else if(this.currentTheme==="emerald"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#061512"),l.addColorStop(.5,"#0b2923"),l.addColorStop(1,"#051310"),this.ctx.fillStyle=l}else this.ctx.fillStyle="#0a0a0d";this.ctx.fillRect(0,0,t,i);let e=this.currentTheme==="sunset"?"#f43f5e":this.currentTheme==="emerald"?"#10b981":this.currentTheme==="minimal"?"#64748b":"#818cf8";this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=2,this.ctx.strokeRect(40,40,t-80,i-80),this.ctx.font="bold 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle=e,this.ctx.fillText("HAKIM READING INTELLIGENCE",80,110),this.ctx.font="600 32px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.ctx.fillText(`\u{1F4D6} ${this.currentHighlight.bookTitle}`,80,160),this.ctx.font="bold 140px Georgia, serif",this.ctx.fillStyle=e,this.ctx.globalAlpha=.35,this.ctx.fillText("\u201C",75,300),this.ctx.globalAlpha=1;let s=t-180,a=t>1200?46:40,r=a*1.55;this.ctx.font=`italic 500 ${a}px Georgia, serif`,this.ctx.fillStyle="#ffffff";let d=this.currentHighlight.rawText.split(" "),o="",n=360;for(let l=0;l<d.length;l++){let u=o+d[l]+" ";this.ctx.measureText(u).width>s&&l>0?(this.ctx.fillText(o.trim(),90,n),o=d[l]+" ",n+=r):o=u}this.ctx.fillText(o.trim(),90,n),this.currentHighlight.sourceNote&&(n+=60,this.ctx.font="bold 28px -apple-system, Inter, sans-serif",this.ctx.fillStyle=e,this.ctx.fillText("\u270D\uFE0F Personal Reflection:",90,n),n+=40,this.ctx.font="italic 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.85)",this.ctx.fillText(`"${this.currentHighlight.sourceNote}"`,90,n));let c=i-100;this.ctx.font="500 24px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)";let p=this.currentHighlight.location?`Location ${this.currentHighlight.location}`:"Personal Note";this.ctx.fillText(p,90,c),this.ctx.textAlign="right",this.ctx.fillText("hakim.app",t-90,c),this.ctx.textAlign="left"}downloadPNG(){let t=this.canvas.toDataURL("image/png"),i=document.createElement("a");i.download=`hakim-quote-${this.currentHighlight?.bookTitle.toLowerCase().replace(/\s+/g,"-")||"card"}.png`,i.href=t,i.click()}};var B=class{backdrop;panel;currentHighlight=null;quoteModal;constructor(){this.quoteModal=new L,this.backdrop=document.createElement("div"),this.backdrop.className="slideover-backdrop",this.backdrop.style.display="none",this.panel=document.createElement("aside"),this.panel.className="slideover-panel",this.backdrop.appendChild(this.panel),document.body.appendChild(this.backdrop),this.initEvents()}initEvents(){this.backdrop.addEventListener("click",t=>{t.target===this.backdrop&&this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()})}open(t){this.currentHighlight=t,this.render(),this.backdrop.style.display="flex",setTimeout(()=>this.panel.classList.add("open"),10)}close(){this.panel.classList.remove("open"),setTimeout(()=>{this.backdrop.style.display="none"},200)}render(){if(!this.currentHighlight)return;let t=this.currentHighlight,i=t.color==="blue"?"Quote / Fact":t.color==="pink"?"Critical / Action":t.color==="orange"?"Concept / Story":"Key Insight";this.panel.innerHTML=`
      <div class="slideover-header">
        <div class="slideover-title-row">
          <span class="slideover-book-badge">\u{1F4D6} ${t.bookTitle}</span>
          <button id="btn-close-slideover" class="btn-drawer-close" aria-label="Close drawer">&times;</button>
        </div>
        <div class="slideover-meta-row">
          <span class="loc-tag">${t.location?`Location ${t.location}`:"Personal Note"}</span>
          <span class="color-tag color-${t.color}">${i}</span>
          ${t.importance?`<span class="importance-tag imp-${t.importance.toLowerCase()}">${t.importance} Priority</span>`:""}
        </div>
      </div>

      <div class="slideover-body">
        <div class="quote-inspection-card">
          <blockquote class="inspection-quote-text">\u201C${t.rawText}\u201D</blockquote>
        </div>

        ${t.sourceNote?`
          <div class="inspection-section">
            <h4 class="section-label">\u270D\uFE0F Kindle Note</h4>
            <div class="note-box">${t.sourceNote}</div>
          </div>
        `:""}

        ${t.interpretation?`
          <div class="inspection-section">
            <h4 class="section-label">\u{1F9E0} Personal Interpretation</h4>
            <div class="interp-box">${t.interpretation}</div>
          </div>
        `:""}

        ${t.tags&&t.tags.length>0?`
          <div class="inspection-section">
            <h4 class="section-label">\u{1F3F7}\uFE0F Topics & Concepts</h4>
            <div class="tags-cluster">
              ${t.tags.map(e=>`<span class="topic-chip">#${e}</span>`).join(" ")}
            </div>
          </div>
        `:""}
      </div>

      <div class="slideover-footer">
        <button id="btn-open-quote-card" class="btn btn-primary btn-full">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Generate Aesthetic Quote Card</span>
        </button>

        <button id="btn-copy-quote-md" class="btn btn-secondary btn-full">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span>Copy Quote & Citation</span>
        </button>
      </div>
    `,this.panel.querySelector("#btn-close-slideover")?.addEventListener("click",()=>this.close()),this.panel.querySelector("#btn-open-quote-card")?.addEventListener("click",()=>{this.currentHighlight&&this.quoteModal.open(this.currentHighlight)}),this.panel.querySelector("#btn-copy-quote-md")?.addEventListener("click",async()=>{let e=this.panel.querySelector("#btn-copy-quote-md span"),s=`> "${t.rawText}"

\u2014 **${t.bookTitle}** (Location ${t.location||0})`;navigator.clipboard&&(await navigator.clipboard.writeText(s),e&&(e.textContent="Copied to Clipboard!",setTimeout(()=>{e.textContent="Copy Quote & Citation"},2500)))})}};var N=class{container;deck=[];currentIndex=0;isFlipped=!1;stats={total:0,reviewed:0,mastered:0,hard:0};constructor(t){this.container=t,this.initKeyboardEvents()}setDeck(t){this.deck=[...t],this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}initKeyboardEvents(){window.addEventListener("keydown",t=>{this.container.style.display!=="none"&&(t.code==="Space"?(t.preventDefault(),this.flipCard()):t.key==="1"||t.key==="ArrowLeft"?this.isFlipped&&this.rateCard("hard"):t.key==="2"||t.key==="ArrowDown"?this.isFlipped&&this.rateCard("good"):(t.key==="3"||t.key==="ArrowRight")&&this.isFlipped&&this.rateCard("mastered"))})}flipCard(){this.isFlipped=!this.isFlipped;let t=this.container.querySelector(".flashcard-inner");t&&(this.isFlipped?t.classList.add("is-flipped"):t.classList.remove("is-flipped"))}rateCard(t){if(t==="hard"){if(this.stats.hard++,this.currentIndex<this.deck.length){let i=this.deck[this.currentIndex];this.deck.push(i)}}else t==="mastered"&&this.stats.mastered++;this.stats.reviewed++,this.currentIndex++,this.isFlipped=!1,this.render()}restart(){this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}render(){if(this.container.innerHTML="",this.deck.length===0){this.container.innerHTML=`
        <div class="empty-flashcards-box">
          <p>No highlights in this library to review. Add or import highlights first!</p>
        </div>
      `;return}if(this.currentIndex>=this.deck.length){this.renderSummary();return}let t=this.deck[this.currentIndex],i=Math.round(this.currentIndex/this.deck.length*100),e=document.createElement("div");e.className="flashcard-stage",e.innerHTML=`
      <!-- Progress Bar -->
      <div class="flashcard-progress-bar-wrapper">
        <div class="flashcard-progress-info">
          <span>Card <strong>${this.currentIndex+1}</strong> of <strong>${this.deck.length}</strong></span>
          <span>${i}% Complete</span>
        </div>
        <div class="flashcard-progress-track">
          <div class="flashcard-progress-fill" style="width: ${i}%"></div>
        </div>
      </div>

      <!-- 3D Flippable Flashcard -->
      <div class="flashcard-scene">
        <div class="flashcard-inner ${this.isFlipped?"is-flipped":""}">
          <!-- FRONT SIDE -->
          <div class="flashcard-face flashcard-front">
            <div class="flashcard-header">
              <span class="flashcard-book-badge">\u{1F4D6} ${t.bookTitle}</span>
              <span class="flashcard-hint-badge">\u{1F4A1} Active Recall Prompt</span>
            </div>
            <div class="flashcard-body">
              <p class="flashcard-prompt-label">What is the core insight or principle behind this quote?</p>
              <blockquote class="flashcard-prompt-quote">\u201C${t.rawText}\u201D</blockquote>
            </div>
            <div class="flashcard-footer">
              <button id="btn-flip-card-front" class="btn btn-primary">
                <span>Show Full Reflection (Press Space)</span>
              </button>
            </div>
          </div>

          <!-- BACK SIDE -->
          <div class="flashcard-face flashcard-back">
            <div class="flashcard-header">
              <span class="flashcard-book-badge">\u{1F4D6} ${t.bookTitle}</span>
              <span class="flashcard-loc-pill">${t.location?`Loc ${t.location}`:"Note"}</span>
            </div>
            <div class="flashcard-body">
              <div class="flashcard-back-section">
                <h4 class="section-sublabel">Original Highlight</h4>
                <p class="flashcard-back-quote">\u201C${t.rawText}\u201D</p>
              </div>

              ${t.sourceNote?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u270D\uFE0F Your Note</h4>
                  <p class="flashcard-back-note">${t.sourceNote}</p>
                </div>
              `:""}

              ${t.interpretation?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u{1F9E0} Hakim Concept Takeaway</h4>
                  <p class="flashcard-back-interp">${t.interpretation}</p>
                </div>
              `:""}
            </div>

            <div class="flashcard-ratings-row">
              <button class="rating-btn rate-hard" data-rate="hard" title="Shortcut: 1 or Left Arrow">
                <span>\u{1F534} Again (Hard)</span>
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
        <span><kbd>1</kbd> Hard</span>
        <span><kbd>2</kbd> Good</span>
        <span><kbd>3</kbd> Mastered</span>
      </div>
    `,e.querySelector("#btn-flip-card-front")?.addEventListener("click",()=>this.flipCard()),e.querySelector(".flashcard-scene")?.addEventListener("click",s=>{s.target.closest(".rating-btn")||this.flipCard()}),e.querySelectorAll(".rating-btn").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation();let r=s.getAttribute("data-rate");r&&this.rateCard(r)})}),this.container.appendChild(e)}renderSummary(){let t=document.createElement("div");t.className="flashcard-summary-card";let i=this.stats.total>0?Math.round(this.stats.mastered/this.stats.total*100):100;t.innerHTML=`
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
          <span class="summary-stat-num text-accent">${i}%</span>
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
    `,t.querySelector("#btn-restart-deck")?.addEventListener("click",()=>this.restart()),this.container.appendChild(t)}};var v=class g{static defaultBaseUrl="http://127.0.0.1:4242";static storageKey="hakim_engine_token";static getSavedToken(){try{return localStorage.getItem(g.storageKey)||""}catch{return""}}static saveToken(t){try{localStorage.setItem(g.storageKey,t.trim())}catch{}}static clearToken(){try{localStorage.removeItem(g.storageKey)}catch{}}static async checkHealth(t=g.defaultBaseUrl){try{let i=await fetch(`${t}/api/v1/health`,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)return{healthy:!1,error:`Engine responded with HTTP ${i.status}`};let e=await i.json();return{healthy:e.status==="healthy",version:e.version,booksCount:e.library?.books,annotCount:e.library?.annotations}}catch(i){return{healthy:!1,error:i instanceof Error?i.message:"Could not connect to local engine"}}}static async verifyPairing(t,i=g.defaultBaseUrl){try{return(await fetch(`${i}/api/v1/pair`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({token:t.trim()})})).ok?{success:!0}:{success:!1,error:"Invalid pairing token."}}catch(e){return{success:!1,error:e instanceof Error?e.message:"Network error connecting to engine"}}}static async fetchLibrary(t,i=g.defaultBaseUrl){try{let e=await fetch(`${i}/api/v1/library`,{method:"GET",headers:{Authorization:`Bearer ${t.trim()}`,Accept:"application/json"}});if(!e.ok)return{books:[],highlights:[],error:`Engine error: HTTP ${e.status}`};let s=await e.json();return{books:s.books||[],highlights:s.highlights||[]}}catch(e){let s=e instanceof Error?e.message:"Failed to fetch library from engine";return{books:[],highlights:[],error:s}}}};var M=class{container;store;statusBtn=null;isConnected=!1;constructor(t="btn-engine-status"){this.store=x.getInstance(),this.statusBtn=document.getElementById(t),this.container=document.createElement("div"),this.container.className="engine-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM(),this.checkInitialConnection()}initDOM(){let t=v.getSavedToken();this.container.innerHTML=`
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
              value="${t}"
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
    `,this.container.querySelector("#btn-close-engine-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.statusBtn&&this.statusBtn.addEventListener("click",()=>this.open()),this.container.querySelector("#btn-connect-engine")?.addEventListener("click",()=>this.handleConnect())}open(){this.container.style.display="flex",this.checkHealth()}close(){this.container.style.display="none"}async checkInitialConnection(){let t=await v.checkHealth();this.updateHealthUI(t);let i=v.getSavedToken();if(t.healthy&&i){let e=await v.fetchLibrary(i);e.books.length>0&&(this.store.loadCustomData(e.books,e.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${e.books.length} Books`))}}async checkHealth(){let t=await v.checkHealth();return this.updateHealthUI(t),t}updateHealthUI(t){let i=this.container.querySelector("#engine-status-box"),e=this.container.querySelector(".status-indicator-dot"),s=this.container.querySelector("#engine-status-text"),a=this.container.querySelector("#engine-substatus-text");t.healthy?(e&&(e.className="status-indicator-dot dot-emerald"),s&&(s.textContent=`\u25CF Engine Online (v${t.version||"1.0.0"})`),a&&(a.textContent=`SQLite Store: ${t.booksCount||0} books, ${t.annotCount||0} highlights available`),this.updateHeaderBadge(!0,"\u25CF Engine Online")):(e&&(e.className="status-indicator-dot dot-gray"),s&&(s.textContent="\u25CB Engine Offline or Not Running"),a&&(a.textContent="Start with: pnpm --filter @hakim/engine start"),this.updateHeaderBadge(!1,"\u25CB Engine Offline"))}updateHeaderBadge(t,i){if(this.statusBtn){this.statusBtn.className=`btn-engine-status ${t?"online":"offline"}`;let e=this.statusBtn.querySelector(".engine-status-label");e&&(e.textContent=i)}}async handleConnect(){let i=this.container.querySelector("#engine-token-input")?.value.trim()||"",e=this.container.querySelector("#engine-feedback-msg"),s=this.container.querySelector("#btn-connect-engine");if(!i){e&&(e.style.display="block",e.className="engine-feedback-msg error",e.textContent="Please enter a pairing token.");return}s&&(s.disabled=!0),e&&(e.style.display="block",e.className="engine-feedback-msg info",e.textContent="Verifying pairing and fetching SQLite library...");let a=await v.verifyPairing(i);if(!a.success){e&&(e.className="engine-feedback-msg error",e.textContent=a.error||"Authentication failed. Check your token."),s&&(s.disabled=!1);return}v.saveToken(i);let r=await v.fetchLibrary(i);if(r.error){e&&(e.className="engine-feedback-msg error",e.textContent=r.error),s&&(s.disabled=!1);return}this.store.loadCustomData(r.books,r.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${r.books.length} Books`),e&&(e.className="engine-feedback-msg success",e.textContent=`\u2713 Connected! Successfully loaded ${r.books.length} books and ${r.highlights.length} highlights.`),s&&(s.disabled=!1),setTimeout(()=>{this.close()},1200)}};var $=class{store;graphEngine=null;cardsComponent=null;flashcardsComponent=null;slideover=null;engineBridge=null;constructor(){this.store=x.getInstance(),this.init()}init(){let t=document.getElementById("graph-container");t&&(this.graphEngine=new H(t,h=>{this.handleNodeClick(h)}));let i=document.getElementById("cards-container");i&&(this.cardsComponent=new I(i,{onSelectHighlight:h=>this.store.selectHighlight(h),onSelectBook:h=>this.store.selectBook(h),onUpdateBookStatus:(h,m)=>this.store.updateBookStatus(h,m)}));let e=document.getElementById("flashcards-container");e&&(this.flashcardsComponent=new N(e)),this.slideover=new B,this.engineBridge=new M("btn-engine-status"),this.store.subscribe(h=>this.render(h));let s=document.getElementById("search-input");s&&s.addEventListener("input",()=>{this.store.setSearchQuery(s.value)});let a=document.getElementById("dataset-select");a&&a.addEventListener("change",()=>{a.value==="demo"&&this.store.loadDemoData()}),document.querySelectorAll(".view-btn").forEach(h=>{h.addEventListener("click",()=>{let m=h.getAttribute("data-view");m&&this.store.setView(m)})}),document.querySelectorAll(".color-dot-btn").forEach(h=>{h.addEventListener("click",()=>{let m=h.getAttribute("data-color");m&&this.store.toggleColorFilter(m)})});let o=document.getElementById("btn-graph-zoom-in"),n=document.getElementById("btn-graph-zoom-out"),c=document.getElementById("btn-graph-reset"),p=document.getElementById("btn-graph-physics");o&&o.addEventListener("click",()=>this.graphEngine?.zoomIn()),n&&n.addEventListener("click",()=>this.graphEngine?.zoomOut()),c&&c.addEventListener("click",()=>this.graphEngine?.resetView()),p&&p.addEventListener("click",()=>{let h=this.graphEngine?.togglePhysics();p.classList.toggle("active",h)});let l=document.getElementById("file-upload-input"),u=document.getElementById("btn-upload-file");u&&l&&(u.addEventListener("click",()=>l.click()),l.addEventListener("change",async()=>{let h=l.files?.[0];if(!h)return;let m=await h.text();if(h.name.endsWith(".json")){let f=C.parseJsonSnapshot(m);this.store.loadCustomData(f.books,f.highlights,"custom_file")}else{let f=C.parseMyClippings(m);this.store.loadCustomData(f.books,f.highlights,"custom_file")}}))}handleNodeClick(t){if(t.type==="book")this.store.selectBook(t.id===this.store.getState().filters.selectedBookId?null:t.id);else if(t.type==="highlight"){let i=this.store.getState().highlights.find(e=>e.id===t.id);i&&this.store.selectHighlight(i)}}render(t){let i=document.getElementById("graph-container"),e=document.getElementById("cards-container"),s=document.getElementById("flashcards-container"),a=document.querySelector(".graph-toolbar");if(t.selectedHighlight&&this.slideover&&this.slideover.open(t.selectedHighlight),t.activeView==="graph")i&&(i.style.display="block"),e&&(e.style.display="none"),s&&(s.style.display="none"),a&&(a.style.display="flex"),this.graphEngine&&this.graphEngine.setData(t.graphData);else if(t.activeView==="cards"){if(i&&(i.style.display="none"),e&&(e.style.display="block"),s&&(s.style.display="none"),a&&(a.style.display="none"),this.cardsComponent){let l=this.store.getFilteredHighlights();this.cardsComponent.render(t.books,l)}}else if(t.activeView==="flashcards"&&(i&&(i.style.display="none"),e&&(e.style.display="none"),s&&(s.style.display="flex"),a&&(a.style.display="none"),this.flashcardsComponent)){let l=this.store.getFilteredHighlights();this.flashcardsComponent.setDeck(l)}let r=document.getElementById("sidebar-book-list");if(r){r.innerHTML="";let l=document.createElement("button");l.className=`book-item-btn ${t.filters.selectedBookId===null?"active":""}`,l.innerHTML=`<span>All Library Highlights</span> <span class="book-count-badge">${t.highlights.length}</span>`,l.addEventListener("click",()=>this.store.selectBook(null)),r.appendChild(l),t.books.forEach(u=>{let h=document.createElement("button");h.className=`book-item-btn ${t.filters.selectedBookId===u.id?"active":""}`,h.innerHTML=`<span>\u{1F4D6} ${u.title}</span> <span class="book-count-badge">${u.highlightsCount}</span>`,h.addEventListener("click",()=>this.store.selectBook(u.id)),r.appendChild(h)})}document.querySelectorAll(".view-btn").forEach(l=>{l.getAttribute("data-view")===t.activeView?l.classList.add("active"):l.classList.remove("active")}),document.querySelectorAll(".color-dot-btn").forEach(l=>{let u=l.getAttribute("data-color");u&&t.filters.selectedColors.has(u)?l.classList.add("active"):l.classList.remove("active")});let n=document.getElementById("hud-nodes-count"),c=document.getElementById("hud-links-count"),p=document.getElementById("hud-filtered-count");n&&(n.textContent=String(t.graphData.nodes.length)),c&&(c.textContent=String(t.graphData.links.length)),p&&(p.textContent=String(this.store.getFilteredHighlights().length))}};document.addEventListener("DOMContentLoaded",()=>{new $,console.log("\u26A1 Hakim Reading Intelligence Web Client Initialized.")});
