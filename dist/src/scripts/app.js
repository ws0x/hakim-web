var F=[{id:"book-1",asin:"B00ZUX90S4",title:"Designing Data-Intensive Applications",author:"Martin Kleppmann",highlightsCount:6,tags:["Software Architecture","Distributed Systems","Reliability"],status:"reading"},{id:"book-2",asin:"B01862ES3A",title:"The Daily Stoic",author:"Ryan Holiday",highlightsCount:6,tags:["Philosophy","Stoicism","Mindset"],status:"completed"},{id:"book-3",asin:"B07D23CFGR",title:"Atomic Habits",author:"James Clear",highlightsCount:5,tags:["Productivity","Habit Formation","Systems Thinking"],status:"completed"},{id:"book-4",asin:"B004J4XGN6",title:"Thinking, Fast and Slow",author:"Daniel Kahneman",highlightsCount:5,tags:["Psychology","Cognitive Biases","Decision Making"],status:"reading"},{id:"book-5",asin:"B001GSTOAM",title:"Clean Code",author:"Robert C. Martin",highlightsCount:4,tags:["Software Craftsmanship","Refactoring","Clean Code"],status:"completed"}],O=[{id:"hl-101",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Reliability means continuing to work correctly (performing the correct function at the desired level of performance) even in the face of adversity (hardware or software faults, and even human error).",location:120,color:"yellow",importance:"Essential",tags:["Reliability","Software Architecture"],sourceNote:"Core definition of software reliability.",interpretation:"A system is not truly reliable if it only works under ideal conditions."},{id:"hl-102",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Scalability is the term we use to describe a system's ability to cope with increased load.",location:245,color:"blue",importance:"High",tags:["Distributed Systems"]},{id:"hl-103",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Maintainability means many different people will work on the system over time, and they should all be able to work on it productively.",location:380,color:"pink",importance:"High",tags:["Clean Code","Software Architecture"]},{id:"hl-104",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Behind every fault-tolerant system is a set of carefully reasoned invariants.",location:512,color:"orange",importance:"Essential",tags:["Distributed Systems"]},{id:"hl-201",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",location:45,color:"yellow",importance:"Essential",tags:["Stoicism","Mindset"],sourceNote:"Epictetus' Dichotomy of Control.",interpretation:"Direct energy only towards intentional choices, never external outcomes."},{id:"hl-202",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"You have power over your mind - not outside events. Realize this, and you will find strength.",location:190,color:"yellow",importance:"High",tags:["Stoicism","Psychology"]},{id:"hl-203",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"Waste no more time arguing what a good person should be. Be one.",location:320,color:"pink",importance:"Essential",tags:["Philosophy"]},{id:"hl-301",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"You do not rise to the level of your goals. You fall to the level of your systems.",location:110,color:"yellow",importance:"Essential",tags:["Systems Thinking","Habit Formation"],interpretation:"Focus on designing frictionless recurring routines rather than obsessing over end milestones."},{id:"hl-302",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Every action you take is a vote for the type of person you wish to become.",location:280,color:"orange",importance:"High",tags:["Habit Formation","Mindset"]},{id:"hl-303",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Make it obvious, make it attractive, make it easy, make it satisfying.",location:450,color:"blue",importance:"Essential",tags:["Productivity"]},{id:"hl-401",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.",location:80,color:"yellow",importance:"High",tags:["Cognitive Biases","Psychology"]},{id:"hl-402",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 2 allocates attention to the effortful mental operations that demand it, including complex computations.",location:140,color:"blue",importance:"High",tags:["Cognitive Biases","Decision Making"]},{id:"hl-403",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"We are prone to overestimate how much we understand about the world and to underestimate the role of chance.",location:390,color:"pink",importance:"Essential",tags:["Decision Making","Mindset"]},{id:"hl-501",bookId:"book-5",bookTitle:"Clean Code",rawText:"Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",location:95,color:"yellow",importance:"Essential",tags:["Clean Code","Software Craftsmanship"]},{id:"hl-502",bookId:"book-5",bookTitle:"Clean Code",rawText:"Leave the campground cleaner than you found it. The Boy Scout Rule.",location:210,color:"pink",importance:"Essential",tags:["Refactoring","Clean Code"],sourceNote:"Apply incremental continuous cleanup to every PR."}];var E=class{static COLOR_PALETTE={book:"#818cf8",topic:"#38bdf8",author:"#c084fc",yellowHighlight:"#fcd34d",blueHighlight:"#67e8f9",pinkHighlight:"#fda4af",orangeHighlight:"#fdba74"};static buildGraph(e,i,t){let s=[],o=[],a=new Set,c=new Map;for(let n=0;n<e.length;n++){let r=e[n];if(s.push({id:r.id,label:r.title,type:"book",group:1,size:Math.max(16,Math.min(32,14+r.highlightsCount*2)),color:this.COLOR_PALETTE.book,bookTitle:r.title}),a.add(r.id),r.tags)for(let d of r.tags)c.set(d,(c.get(d)||0)+1)}for(let[n,r]of c.entries()){let d=`topic-${n.toLowerCase().replace(/\s+/g,"-")}`;s.push({id:d,label:`#${n}`,type:"topic",group:2,size:Math.max(12,Math.min(24,10+r*3)),color:this.COLOR_PALETTE.topic}),a.add(d);for(let p of e)p.tags?.includes(n)&&o.push({source:p.id,target:d,type:"shares_topic",strength:.7})}for(let n of i){if(t&&!t.has(n.id))continue;let r=this.COLOR_PALETTE.yellowHighlight;n.color==="blue"?r=this.COLOR_PALETTE.blueHighlight:n.color==="pink"?r=this.COLOR_PALETTE.pinkHighlight:n.color==="orange"&&(r=this.COLOR_PALETTE.orangeHighlight);let d=n.location!==void 0?`Loc ${n.location}`:"Note",p=n.rawText.substring(0,36)+(n.rawText.length>36?"...":"");if(s.push({id:n.id,label:`${d}: ${p}`,type:"highlight",group:3,size:n.importance==="Essential"?10:7,color:r,bookId:n.bookId,bookTitle:n.bookTitle,rawText:n.rawText,note:n.sourceNote,location:n.location,importance:n.importance}),a.add(n.id),a.has(n.bookId)&&o.push({source:n.bookId,target:n.id,type:"contains",strength:.9}),n.tags)for(let l of n.tags){let g=`topic-${l.toLowerCase().replace(/\s+/g,"-")}`;a.has(g)&&o.push({source:n.id,target:g,type:"shares_topic",strength:.4})}}return{nodes:s,links:o}}};var k=class h{static instance;listeners=new Set;state={books:F,highlights:O,filters:{searchQuery:"",selectedBookId:null,selectedColors:new Set(["yellow","blue","pink","orange"]),selectedImportance:new Set(["Essential","High","Medium","Low"]),selectedTopics:new Set},graphData:{nodes:[],links:[]},activeView:"graph",selectedHighlight:null,isLoading:!1,activeDataset:"demo"};constructor(){this.recomputeGraph()}static getInstance(){return h.instance||(h.instance=new h),h.instance}getState(){return this.state}subscribe(e){return this.listeners.add(e),e(this.state),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e(this.state)}setView(e){this.state.activeView=e,this.notify()}selectHighlight(e){this.state.selectedHighlight=e,this.notify()}setSearchQuery(e){this.state.filters.searchQuery=e.toLowerCase().trim(),this.recomputeGraph(),this.notify()}selectBook(e){this.state.filters.selectedBookId=e,this.recomputeGraph(),this.notify()}toggleColorFilter(e){this.state.filters.selectedColors.has(e)?this.state.filters.selectedColors.delete(e):this.state.filters.selectedColors.add(e),this.recomputeGraph(),this.notify()}loadCustomData(e,i,t){this.state.books=e,this.state.highlights=i,this.state.activeDataset=t,this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}updateBookStatus(e,i){let t=this.state.books.find(s=>s.id===e);t&&(t.status=i,this.notify())}loadDemoData(){this.state.books=F,this.state.highlights=O,this.state.activeDataset="demo",this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}getFilteredHighlights(){let{searchQuery:e,selectedBookId:i,selectedColors:t,selectedImportance:s}=this.state.filters;return this.state.highlights.filter(o=>{if(i&&o.bookId!==i||t.size>0&&!t.has(o.color)||o.importance&&s.size>0&&!s.has(o.importance))return!1;if(e){let a=o.rawText.toLowerCase().includes(e),c=o.bookTitle.toLowerCase().includes(e),n=o.sourceNote?.toLowerCase().includes(e),r=o.tags?.some(d=>d.toLowerCase().includes(e));if(!a&&!c&&!n&&!r)return!1}return!0})}recomputeGraph(){let e=this.getFilteredHighlights(),i=new Set(e.map(t=>t.id));this.state.graphData=E.buildGraph(this.state.books,this.state.highlights,i)}};function j(h){if(!h)return"";let e={"&quot;":'"',"&amp;":"&","&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"\xAB","&raquo;":"\xBB","&mdash;":"\u2014","&ndash;":"\u2013","&hellip;":"\u2026","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&lsaquo;":"\u2039","&rsaquo;":"\u203A","&trade;":"\u2122","&copy;":"\xA9","&reg;":"\xAE","&bull;":"\u2022","&middot;":"\xB7","&prime;":"\u2032","&Prime;":"\u2033"};return h.replace(/&[a-zA-Z]+;/g,i=>e[i.toLowerCase()]??i).replace(/&#(\d+);/g,(i,t)=>{try{return String.fromCodePoint(parseInt(t,10))}catch{return i}}).replace(/&#x([a-fA-F0-9]+);/g,(i,t)=>{try{return String.fromCodePoint(parseInt(t,16))}catch{return i}})}function L(h){return h?j(h).normalize("NFKC").replace(/[\u200B-\u200D\uFEFF\u00AD\u200E\u200F]/g,"").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\s+/g," ").trim():""}function z(h){return h?L(h).replace(/\s*\((?:Kindle Edition|English Edition|Arabic Edition)\)/gi,"").trim():"Untitled"}function G(h){if(!h)return"Unknown Author";let e=L(h);if(e.includes(",")&&!e.includes(";")){let i=e.split(",").map(t=>t.trim());i.length===2&&i[0]&&i[1]&&(e=`${i[1]} ${i[0]}`)}return e}var S=class{static parseMyClippings(e){let i=e.split(/==========/),t=new Map,s=[];for(let o=0;o<i.length;o++){let a=i[o]?.trim();if(!a)continue;let c=a.split(/\r?\n/).map(T=>T.trim()).filter(Boolean);if(c.length<3)continue;let n=c[0],r=n.match(/\(([^)]+)\)$/),d=n,p="Unknown Author";r&&r[1]&&(p=r[1].trim(),d=n.substring(0,n.lastIndexOf("(")).trim());let l=z(d),g=G(p),v=`${l}:::${g}`,f=t.get(v);f||(f={id:`book-${t.size+1}`,title:l,author:g,highlightsCount:0,status:"reading"},t.set(v,f));let u=c[1],b,m=u.match(/Location\s+(\d+)/i)||u.match(/page\s+(\d+)/i);m&&m[1]&&(b=parseInt(m[1],10));let w="yellow";/yellow/i.test(u)?w="yellow":/blue/i.test(u)?w="blue":/pink/i.test(u)?w="pink":/orange/i.test(u)&&(w="orange");let C=c.slice(2).join(" ");C&&(f.highlightsCount++,s.push({id:`hl-import-${s.length+1}`,bookId:f.id,bookTitle:f.title,rawText:L(C),location:b,color:w,importance:"Medium",status:"Inbox"}))}return{books:Array.from(t.values()),highlights:s}}static parseJsonSnapshot(e){try{let i=JSON.parse(e);if(Array.isArray(i.books)&&Array.isArray(i.highlights))return{books:i.books,highlights:i.highlights};throw new Error("Invalid Hakim JSON snapshot structure.")}catch(i){throw new Error(`Failed to parse JSON file: ${i instanceof Error?i.message:"Invalid JSON"}`)}}};var I=class{canvas;ctx;container;nodes=[];links=[];nodeMap=new Map;alpha=1;alphaMin=.001;alphaDecay=.022;isSimulationRunning=!0;scale=1;minScale=.2;maxScale=4;offsetX=0;offsetY=0;isPanning=!1;panStartX=0;panStartY=0;hoveredNode=null;draggedNode=null;onNodeClickCallback;animationFrameId=null;constructor(e,i){this.container=e,this.onNodeClickCallback=i,this.canvas=document.createElement("canvas"),this.canvas.className="graph-canvas",this.container.appendChild(this.canvas);let t=this.canvas.getContext("2d");if(!t)throw new Error("Could not get 2D context from canvas.");this.ctx=t,this.resize(),this.initEvents()}setData(e){let i=this.canvas.width/(window.devicePixelRatio||1),t=this.canvas.height/(window.devicePixelRatio||1);this.nodeMap.clear(),this.nodes=e.nodes.map((s,o)=>{let a=this.nodes.find(d=>d.id===s.id),c=o/Math.max(1,e.nodes.length)*2*Math.PI,n=s.type==="book"?120:s.type==="topic"?220:280+o%5*20,r={...s,x:a?a.x:i/2+Math.cos(c)*n+(Math.random()-.5)*40,y:a?a.y:t/2+Math.sin(c)*n+(Math.random()-.5)*40,vx:0,vy:0,radius:s.size||(s.type==="book"?22:s.type==="topic"?16:8)};return this.nodeMap.set(s.id,r),r}),this.links=e.links.map(s=>({...s,sourceNode:this.nodeMap.get(typeof s.source=="string"?s.source:s.source.id),targetNode:this.nodeMap.get(typeof s.target=="string"?s.target:s.target.id)})),this.alpha=1,this.startSimulation()}resize(){let e=this.container.getBoundingClientRect(),i=window.devicePixelRatio||1,t=e.width||800,s=e.height||600;this.canvas.width=t*i,this.canvas.height=s*i,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${s}px`,this.ctx.scale(i,i),this.offsetX===0&&this.offsetY===0&&(this.offsetX=t/2,this.offsetY=s/2)}startSimulation(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId);let e=()=>{this.isSimulationRunning&&this.tick(),this.render(),this.animationFrameId=requestAnimationFrame(e)};this.animationFrameId=requestAnimationFrame(e)}tick(){if(this.alpha<this.alphaMin)return;let e=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1),t=e/2,s=i/2,o=.035*this.alpha;for(let n of this.nodes)n.vx+=(t-n.x)*o,n.vy+=(s-n.y)*o;let a=450*this.alpha;for(let n=0;n<this.nodes.length;n++){let r=this.nodes[n];for(let d=n+1;d<this.nodes.length;d++){let p=this.nodes[d],l=p.x-r.x,g=p.y-r.y,v=l*l+g*g;v===0&&(v=1);let f=Math.sqrt(v),u=r.radius+p.radius+15,b=a/v*(r.type==="book"||p.type==="book"?2.5:1),m=l/f*b,w=g/f*b;if(r.isDragging||(r.vx-=m,r.vy-=w),p.isDragging||(p.vx+=m,p.vy+=w),f<u){let C=(u-f)*.5*this.alpha,T=l/f*C,U=g/f*C;r.isDragging||(r.x-=T,r.y-=U),p.isDragging||(p.x+=T,p.y+=U)}}}for(let n of this.links){if(!n.sourceNode||!n.targetNode)continue;let r=n.sourceNode,d=n.targetNode,p=d.x-r.x,l=d.y-r.y,g=Math.sqrt(p*p+l*l)||1,v=n.type==="contains"?90:160,f=(n.strength||.5)*.12*this.alpha,u=(g-v)*f,b=p/g*u,m=l/g*u;r.isDragging||(r.vx+=b,r.vy+=m),d.isDragging||(d.vx-=b,d.vy-=m)}let c=.65;for(let n of this.nodes)n.isDragging||(n.vx*=c,n.vy*=c,n.x+=n.vx,n.y+=n.vy);this.alpha+=(0-this.alpha)*this.alphaDecay}render(){let e=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1);this.ctx.clearRect(0,0,e,i),this.ctx.save(),this.ctx.translate(this.offsetX,this.offsetY),this.ctx.scale(this.scale,this.scale);for(let t of this.links){if(!t.sourceNode||!t.targetNode)continue;let s=this.hoveredNode&&(t.sourceNode.id===this.hoveredNode.id||t.targetNode.id===this.hoveredNode.id);this.ctx.beginPath(),this.ctx.moveTo(t.sourceNode.x-e/2,t.sourceNode.y-i/2),this.ctx.lineTo(t.targetNode.x-e/2,t.targetNode.y-i/2),s?(this.ctx.strokeStyle="rgba(129, 140, 248, 0.85)",this.ctx.lineWidth=2):(this.ctx.strokeStyle=t.type==="shares_topic"?"rgba(56, 189, 248, 0.18)":"rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=t.type==="contains"?1.2:.8),this.ctx.stroke()}for(let t of this.nodes){let s=t.x-e/2,o=t.y-i/2,a=this.hoveredNode?.id===t.id,c=this.hoveredNode&&!a&&!this.areNodesConnected(t,this.hoveredNode);this.ctx.save(),this.ctx.globalAlpha=c?.25:1,(t.type==="book"||a)&&(this.ctx.beginPath(),this.ctx.arc(s,o,t.radius+6,0,2*Math.PI),this.ctx.fillStyle=t.type==="book"?"rgba(99, 102, 241, 0.25)":"rgba(255, 255, 255, 0.2)",this.ctx.fill()),this.ctx.beginPath(),this.ctx.arc(s,o,t.radius,0,2*Math.PI),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.strokeStyle=a?"#ffffff":"rgba(255, 255, 255, 0.25)",this.ctx.lineWidth=a?2.5:1.2,this.ctx.stroke(),this.ctx.font=t.type==="book"?"bold 12px Inter, sans-serif":t.type==="topic"?"600 11px Inter, sans-serif":"10px Inter, sans-serif",this.ctx.fillStyle=a?"#ffffff":t.type==="book"?"#e0e7ff":"rgba(255, 255, 255, 0.85)",this.ctx.textAlign="center",this.ctx.textBaseline="top";let n=t.label;t.type==="highlight"&&n.length>24&&(n=n.substring(0,22)+"..."),this.ctx.fillText(n,s,o+t.radius+4),this.ctx.restore()}this.ctx.restore()}areNodesConnected(e,i){return this.links.some(t=>t.sourceNode?.id===e.id&&t.targetNode?.id===i.id||t.sourceNode?.id===i.id&&t.targetNode?.id===e.id)}getNodeAtPosition(e,i){let t=this.canvas.width/(window.devicePixelRatio||1),s=this.canvas.height/(window.devicePixelRatio||1),o=(e-this.offsetX)/this.scale+t/2,a=(i-this.offsetY)/this.scale+s/2;for(let c=this.nodes.length-1;c>=0;c--){let n=this.nodes[c],r=o-n.x,d=a-n.y;if(r*r+d*d<=(n.radius+4)*(n.radius+4))return n}return null}initEvents(){window.addEventListener("resize",()=>this.resize()),this.canvas.addEventListener("mousemove",e=>{let i=this.canvas.getBoundingClientRect(),t=e.clientX-i.left,s=e.clientY-i.top;if(this.draggedNode){let a=this.canvas.width/(window.devicePixelRatio||1),c=this.canvas.height/(window.devicePixelRatio||1);this.draggedNode.x=(t-this.offsetX)/this.scale+a/2,this.draggedNode.y=(s-this.offsetY)/this.scale+c/2,this.alpha=Math.max(this.alpha,.3);return}if(this.isPanning){this.offsetX+=t-this.panStartX,this.offsetY+=s-this.panStartY,this.panStartX=t,this.panStartY=s;return}let o=this.getNodeAtPosition(t,s);this.hoveredNode=o,this.canvas.style.cursor=o?"pointer":"grab"}),this.canvas.addEventListener("mousedown",e=>{let i=this.canvas.getBoundingClientRect(),t=e.clientX-i.left,s=e.clientY-i.top,o=this.getNodeAtPosition(t,s);o?(this.draggedNode=o,o.isDragging=!0,this.alpha=.5):(this.isPanning=!0,this.panStartX=t,this.panStartY=s,this.canvas.style.cursor="grabbing")}),window.addEventListener("mouseup",e=>{this.draggedNode&&(this.draggedNode.isDragging=!1,this.draggedNode=null),this.isPanning=!1,this.canvas.style.cursor=this.hoveredNode?"pointer":"grab"}),this.canvas.addEventListener("click",e=>{let i=this.canvas.getBoundingClientRect(),t=e.clientX-i.left,s=e.clientY-i.top,o=this.getNodeAtPosition(t,s);o&&this.onNodeClickCallback&&this.onNodeClickCallback(o)}),this.canvas.addEventListener("wheel",e=>{e.preventDefault();let i=this.canvas.getBoundingClientRect(),t=e.clientX-i.left,s=e.clientY-i.top,o=e.deltaY<0?1.12:.88,a=Math.max(this.minScale,Math.min(this.maxScale,this.scale*o));this.offsetX=t-(t-this.offsetX)*(a/this.scale),this.offsetY=s-(s-this.offsetY)*(a/this.scale),this.scale=a},{passive:!1})}zoomIn(){this.scale=Math.min(this.maxScale,this.scale*1.25)}zoomOut(){this.scale=Math.max(this.minScale,this.scale*.8)}resetView(){let e=this.container.getBoundingClientRect();this.scale=1,this.offsetX=(e.width||800)/2,this.offsetY=(e.height||600)/2,this.alpha=1}togglePhysics(){return this.isSimulationRunning=!this.isSimulationRunning,this.isSimulationRunning}};var H=class{container;currentTab="highlights";onSelectHighlight;onSelectBook;onUpdateBookStatus;constructor(e,i){this.container=e,this.onSelectHighlight=i?.onSelectHighlight,this.onSelectBook=i?.onSelectBook,this.onUpdateBookStatus=i?.onUpdateBookStatus}render(e,i){this.container.innerHTML="";let t=document.createElement("div");t.className="cards-nav-header";let s=document.createElement("div");s.className="cards-subtabs",[{id:"highlights",label:`Highlights Grid (${i.length})`},{id:"books",label:`Books Shelf (${e.length})`},{id:"kanban",label:"Reading OS Kanban"}].forEach(c=>{let n=document.createElement("button");n.className=`subtab-btn ${this.currentTab===c.id?"active":""}`,n.setAttribute("data-subtab",c.id),n.textContent=c.label,n.addEventListener("click",()=>{this.currentTab=c.id,this.render(e,i)}),s.appendChild(n)}),t.appendChild(s),this.container.appendChild(t);let a=document.createElement("div");a.className="cards-content-body",this.currentTab==="highlights"?a.appendChild(this.createHighlightsGrid(i)):this.currentTab==="books"?a.appendChild(this.createBooksGrid(e)):this.currentTab==="kanban"&&a.appendChild(this.createKanbanBoard(e)),this.container.appendChild(a)}createHighlightsGrid(e){let i=document.createElement("div");if(i.className="highlights-card-grid",e.length===0){let t=document.createElement("div");return t.className="empty-state-card",t.innerHTML="<p>No highlights match the current filters.</p>",i.appendChild(t),i}return e.forEach(t=>{let s=document.createElement("article");s.className=`highlight-card color-border-${t.color}`;let o=t.color==="blue"?"tag-blue":t.color==="pink"?"tag-pink":t.color==="orange"?"tag-orange":"tag-yellow",a=t.color==="blue"?"Quote / Fact":t.color==="pink"?"Critical / Action":t.color==="orange"?"Concept / Story":"Key Insight";s.innerHTML=`
        <div class="card-meta-top">
          <span class="book-title-badge" title="${t.bookTitle}">\u{1F4D6} ${t.bookTitle}</span>
          <span class="loc-pill">${t.location?`Loc ${t.location}`:"Note"}</span>
        </div>
        <blockquote class="card-quote-text">\u201C${t.rawText}\u201D</blockquote>
        ${t.sourceNote?`<div class="card-note-box"><strong>\u270D\uFE0F Note:</strong> ${t.sourceNote}</div>`:""}
        ${t.interpretation?`<div class="card-interp-box"><strong>\u{1F9E0} Reflection:</strong> ${t.interpretation}</div>`:""}
        <div class="card-footer">
          <span class="${o}">${a}</span>
          ${t.importance?`<span class="importance-pill imp-${t.importance.toLowerCase()}">${t.importance}</span>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectHighlight&&this.onSelectHighlight(t)}),i.appendChild(s)}),i}createBooksGrid(e){let i=document.createElement("div");return i.className="books-card-grid",e.forEach(t=>{let s=document.createElement("article");s.className="book-shelf-card",s.innerHTML=`
        <div class="book-cover-placeholder">
          <span class="book-cover-emoji">\u{1F4D6}</span>
        </div>
        <div class="book-shelf-details">
          <h3 class="book-shelf-title">${t.title}</h3>
          <p class="book-shelf-author">By ${t.author}</p>
          <div class="book-shelf-stats">
            <span>\u{1F4A1} <strong>${t.highlightsCount}</strong> Highlights</span>
            <span class="status-pill status-${t.status||"reading"}">${t.status||"reading"}</span>
          </div>
          ${t.tags&&t.tags.length>0?`<div class="book-tags-row">${t.tags.map(o=>`<span class="book-tag-chip">#${o}</span>`).join(" ")}</div>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(t.id)}),i.appendChild(s)}),i}createKanbanBoard(e){let i=document.createElement("div");return i.className="kanban-board-container",[{id:"reading",title:"Currently Reading",emoji:"\u{1F4D6}"},{id:"completed",title:"Completed & Processed",emoji:"\u2705"},{id:"want_to_read",title:"Want to Read",emoji:"\u{1F516}"}].forEach(s=>{let o=e.filter(r=>(r.status||"reading")===s.id),a=document.createElement("div");a.className="kanban-column";let c=document.createElement("div");c.className="kanban-col-header",c.innerHTML=`
        <span class="kanban-col-title">${s.emoji} ${s.title}</span>
        <span class="kanban-col-count">${o.length}</span>
      `,a.appendChild(c);let n=document.createElement("div");n.className="kanban-cards-stack",n.setAttribute("data-status",s.id),o.forEach(r=>{let d=document.createElement("div");d.className="kanban-book-item",d.innerHTML=`
          <h4 class="kanban-item-title">${r.title}</h4>
          <p class="kanban-item-author">${r.author}</p>
          <div class="kanban-item-meta">
            <span>\u{1F4A1} ${r.highlightsCount} notes</span>
            <select class="kanban-status-select" aria-label="Change status">
              <option value="reading" ${r.status==="reading"?"selected":""}>Reading</option>
              <option value="completed" ${r.status==="completed"?"selected":""}>Completed</option>
              <option value="want_to_read" ${r.status==="want_to_read"?"selected":""}>Want to Read</option>
            </select>
          </div>
        `;let p=d.querySelector(".kanban-status-select");p&&(p.addEventListener("click",l=>l.stopPropagation()),p.addEventListener("change",()=>{let l=p.value;this.onUpdateBookStatus&&this.onUpdateBookStatus(r.id,l)})),d.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(r.id)}),n.appendChild(d)}),a.appendChild(n),i.appendChild(a)}),i}};var $=class{container;currentHighlight=null;currentTheme="obsidian";currentRatio="1:1";canvas;ctx;constructor(){this.container=document.createElement("div"),this.container.className="quote-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.canvas=document.createElement("canvas");let e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get 2D context for quote card.");this.ctx=e,this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `;let e=this.container.querySelector("#quote-canvas-mount");e&&e.appendChild(this.canvas),this.container.querySelector("#btn-close-quote-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.container.querySelectorAll(".theme-btn").forEach(i=>{i.addEventListener("click",()=>{let t=i.getAttribute("data-theme");t&&(this.currentTheme=t,this.container.querySelectorAll(".theme-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".ratio-btn").forEach(i=>{i.addEventListener("click",()=>{let t=i.getAttribute("data-ratio");t&&(this.currentRatio=t,this.container.querySelectorAll(".ratio-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelector("#btn-download-card-png")?.addEventListener("click",()=>this.downloadPNG())}open(e){this.currentHighlight=e,this.container.style.display="flex",this.renderCanvas()}close(){this.container.style.display="none"}renderCanvas(){if(!this.currentHighlight)return;let e=1200,i=1200;if(this.currentRatio==="9:16"?(e=1080,i=1920):this.currentRatio==="16:9"&&(e=1920,i=1080),this.canvas.width=e,this.canvas.height=i,this.currentTheme==="obsidian"){let l=this.ctx.createLinearGradient(0,0,e,i);l.addColorStop(0,"#090a0f"),l.addColorStop(.5,"#151828"),l.addColorStop(1,"#090a0f"),this.ctx.fillStyle=l}else if(this.currentTheme==="sunset"){let l=this.ctx.createLinearGradient(0,0,e,i);l.addColorStop(0,"#1f0d14"),l.addColorStop(.5,"#3b1122"),l.addColorStop(1,"#18080f"),this.ctx.fillStyle=l}else if(this.currentTheme==="emerald"){let l=this.ctx.createLinearGradient(0,0,e,i);l.addColorStop(0,"#061512"),l.addColorStop(.5,"#0b2923"),l.addColorStop(1,"#051310"),this.ctx.fillStyle=l}else this.ctx.fillStyle="#0a0a0d";this.ctx.fillRect(0,0,e,i);let t=this.currentTheme==="sunset"?"#f43f5e":this.currentTheme==="emerald"?"#10b981":this.currentTheme==="minimal"?"#64748b":"#818cf8";this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=2,this.ctx.strokeRect(40,40,e-80,i-80),this.ctx.font="bold 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle=t,this.ctx.fillText("HAKIM READING INTELLIGENCE",80,110),this.ctx.font="600 32px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.ctx.fillText(`\u{1F4D6} ${this.currentHighlight.bookTitle}`,80,160),this.ctx.font="bold 140px Georgia, serif",this.ctx.fillStyle=t,this.ctx.globalAlpha=.35,this.ctx.fillText("\u201C",75,300),this.ctx.globalAlpha=1;let s=e-180,o=e>1200?46:40,a=o*1.55;this.ctx.font=`italic 500 ${o}px Georgia, serif`,this.ctx.fillStyle="#ffffff";let c=this.currentHighlight.rawText.split(" "),n="",r=360;for(let l=0;l<c.length;l++){let g=n+c[l]+" ";this.ctx.measureText(g).width>s&&l>0?(this.ctx.fillText(n.trim(),90,r),n=c[l]+" ",r+=a):n=g}this.ctx.fillText(n.trim(),90,r),this.currentHighlight.sourceNote&&(r+=60,this.ctx.font="bold 28px -apple-system, Inter, sans-serif",this.ctx.fillStyle=t,this.ctx.fillText("\u270D\uFE0F Personal Reflection:",90,r),r+=40,this.ctx.font="italic 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.85)",this.ctx.fillText(`"${this.currentHighlight.sourceNote}"`,90,r));let d=i-100;this.ctx.font="500 24px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)";let p=this.currentHighlight.location?`Location ${this.currentHighlight.location}`:"Personal Note";this.ctx.fillText(p,90,d),this.ctx.textAlign="right",this.ctx.fillText("hakim.app",e-90,d),this.ctx.textAlign="left"}downloadPNG(){let e=this.canvas.toDataURL("image/png"),i=document.createElement("a");i.download=`hakim-quote-${this.currentHighlight?.bookTitle.toLowerCase().replace(/\s+/g,"-")||"card"}.png`,i.href=e,i.click()}};var B=class{backdrop;panel;currentHighlight=null;quoteModal;constructor(){this.quoteModal=new $,this.backdrop=document.createElement("div"),this.backdrop.className="slideover-backdrop",this.backdrop.style.display="none",this.panel=document.createElement("aside"),this.panel.className="slideover-panel",this.backdrop.appendChild(this.panel),document.body.appendChild(this.backdrop),this.initEvents()}initEvents(){this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.close()})}open(e){this.currentHighlight=e,this.render(),this.backdrop.style.display="flex",setTimeout(()=>this.panel.classList.add("open"),10)}close(){this.panel.classList.remove("open"),setTimeout(()=>{this.backdrop.style.display="none"},200)}render(){if(!this.currentHighlight)return;let e=this.currentHighlight,i=e.color==="blue"?"Quote / Fact":e.color==="pink"?"Critical / Action":e.color==="orange"?"Concept / Story":"Key Insight";this.panel.innerHTML=`
      <div class="slideover-header">
        <div class="slideover-title-row">
          <span class="slideover-book-badge">\u{1F4D6} ${e.bookTitle}</span>
          <button id="btn-close-slideover" class="btn-drawer-close" aria-label="Close drawer">&times;</button>
        </div>
        <div class="slideover-meta-row">
          <span class="loc-tag">${e.location?`Location ${e.location}`:"Personal Note"}</span>
          <span class="color-tag color-${e.color}">${i}</span>
          ${e.importance?`<span class="importance-tag imp-${e.importance.toLowerCase()}">${e.importance} Priority</span>`:""}
        </div>
      </div>

      <div class="slideover-body">
        <div class="quote-inspection-card">
          <blockquote class="inspection-quote-text">\u201C${e.rawText}\u201D</blockquote>
        </div>

        ${e.sourceNote?`
          <div class="inspection-section">
            <h4 class="section-label">\u270D\uFE0F Kindle Note</h4>
            <div class="note-box">${e.sourceNote}</div>
          </div>
        `:""}

        ${e.interpretation?`
          <div class="inspection-section">
            <h4 class="section-label">\u{1F9E0} Personal Interpretation</h4>
            <div class="interp-box">${e.interpretation}</div>
          </div>
        `:""}

        ${e.tags&&e.tags.length>0?`
          <div class="inspection-section">
            <h4 class="section-label">\u{1F3F7}\uFE0F Topics & Concepts</h4>
            <div class="tags-cluster">
              ${e.tags.map(t=>`<span class="topic-chip">#${t}</span>`).join(" ")}
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
    `,this.panel.querySelector("#btn-close-slideover")?.addEventListener("click",()=>this.close()),this.panel.querySelector("#btn-open-quote-card")?.addEventListener("click",()=>{this.currentHighlight&&this.quoteModal.open(this.currentHighlight)}),this.panel.querySelector("#btn-copy-quote-md")?.addEventListener("click",async()=>{let t=this.panel.querySelector("#btn-copy-quote-md span"),s=`> "${e.rawText}"

\u2014 **${e.bookTitle}** (Location ${e.location||0})`;navigator.clipboard&&(await navigator.clipboard.writeText(s),t&&(t.textContent="Copied to Clipboard!",setTimeout(()=>{t.textContent="Copy Quote & Citation"},2500)))})}};var M=class{container;deck=[];currentIndex=0;isFlipped=!1;stats={total:0,reviewed:0,mastered:0,hard:0};constructor(e){this.container=e,this.initKeyboardEvents()}setDeck(e){this.deck=[...e],this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}initKeyboardEvents(){window.addEventListener("keydown",e=>{this.container.style.display!=="none"&&(e.code==="Space"?(e.preventDefault(),this.flipCard()):e.key==="1"||e.key==="ArrowLeft"?this.isFlipped&&this.rateCard("hard"):e.key==="2"||e.key==="ArrowDown"?this.isFlipped&&this.rateCard("good"):(e.key==="3"||e.key==="ArrowRight")&&this.isFlipped&&this.rateCard("mastered"))})}flipCard(){this.isFlipped=!this.isFlipped;let e=this.container.querySelector(".flashcard-inner");e&&(this.isFlipped?e.classList.add("is-flipped"):e.classList.remove("is-flipped"))}rateCard(e){if(e==="hard"){if(this.stats.hard++,this.currentIndex<this.deck.length){let i=this.deck[this.currentIndex];this.deck.push(i)}}else e==="mastered"&&this.stats.mastered++;this.stats.reviewed++,this.currentIndex++,this.isFlipped=!1,this.render()}restart(){this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}render(){if(this.container.innerHTML="",this.deck.length===0){this.container.innerHTML=`
        <div class="empty-flashcards-box">
          <p>No highlights in this library to review. Add or import highlights first!</p>
        </div>
      `;return}if(this.currentIndex>=this.deck.length){this.renderSummary();return}let e=this.deck[this.currentIndex],i=Math.round(this.currentIndex/this.deck.length*100),t=document.createElement("div");t.className="flashcard-stage",t.innerHTML=`
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
              <span class="flashcard-book-badge">\u{1F4D6} ${e.bookTitle}</span>
              <span class="flashcard-hint-badge">\u{1F4A1} Active Recall Prompt</span>
            </div>
            <div class="flashcard-body">
              <p class="flashcard-prompt-label">What is the core insight or principle behind this quote?</p>
              <blockquote class="flashcard-prompt-quote">\u201C${e.rawText}\u201D</blockquote>
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
              <span class="flashcard-book-badge">\u{1F4D6} ${e.bookTitle}</span>
              <span class="flashcard-loc-pill">${e.location?`Loc ${e.location}`:"Note"}</span>
            </div>
            <div class="flashcard-body">
              <div class="flashcard-back-section">
                <h4 class="section-sublabel">Original Highlight</h4>
                <p class="flashcard-back-quote">\u201C${e.rawText}\u201D</p>
              </div>

              ${e.sourceNote?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u270D\uFE0F Your Note</h4>
                  <p class="flashcard-back-note">${e.sourceNote}</p>
                </div>
              `:""}

              ${e.interpretation?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u{1F9E0} Hakim Concept Takeaway</h4>
                  <p class="flashcard-back-interp">${e.interpretation}</p>
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
    `,t.querySelector("#btn-flip-card-front")?.addEventListener("click",()=>this.flipCard()),t.querySelector(".flashcard-scene")?.addEventListener("click",s=>{s.target.closest(".rating-btn")||this.flipCard()}),t.querySelectorAll(".rating-btn").forEach(s=>{s.addEventListener("click",o=>{o.stopPropagation();let a=s.getAttribute("data-rate");a&&this.rateCard(a)})}),this.container.appendChild(t)}renderSummary(){let e=document.createElement("div");e.className="flashcard-summary-card";let i=this.stats.total>0?Math.round(this.stats.mastered/this.stats.total*100):100;e.innerHTML=`
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
    `,e.querySelector("#btn-restart-deck")?.addEventListener("click",()=>this.restart()),this.container.appendChild(e)}};var y=class h{static defaultBaseUrl="http://127.0.0.1:4242";static storageKey="hakim_engine_token";static getSavedToken(){try{return localStorage.getItem(h.storageKey)||""}catch{return""}}static saveToken(e){try{localStorage.setItem(h.storageKey,e.trim())}catch{}}static clearToken(){try{localStorage.removeItem(h.storageKey)}catch{}}static async checkHealth(e=h.defaultBaseUrl){try{let i=await fetch(`${e}/api/v1/health`,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)return{healthy:!1,error:`Engine responded with HTTP ${i.status}`};let t=await i.json();return{healthy:t.status==="healthy",version:t.version,booksCount:t.library?.books,annotCount:t.library?.annotations}}catch(i){return{healthy:!1,error:i instanceof Error?i.message:"Could not connect to local engine"}}}static async verifyPairing(e,i=h.defaultBaseUrl){try{return(await fetch(`${i}/api/v1/pair`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({token:e.trim()})})).ok?{success:!0}:{success:!1,error:"Invalid pairing token."}}catch(t){return{success:!1,error:t instanceof Error?t.message:"Network error connecting to engine"}}}static async fetchLibrary(e,i=h.defaultBaseUrl){try{let t=await fetch(`${i}/api/v1/library`,{method:"GET",headers:{Authorization:`Bearer ${e.trim()}`,Accept:"application/json"}});if(!t.ok)return{books:[],highlights:[],error:`Engine error: HTTP ${t.status}`};let s=await t.json();return{books:s.books||[],highlights:s.highlights||[]}}catch(t){let s=t instanceof Error?t.message:"Failed to fetch library from engine";return{books:[],highlights:[],error:s}}}};var N=class{container;store;statusBtn=null;isConnected=!1;constructor(e="btn-engine-status"){this.store=k.getInstance(),this.statusBtn=document.getElementById(e),this.container=document.createElement("div"),this.container.className="engine-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM(),this.checkInitialConnection()}initDOM(){let e=y.getSavedToken();this.container.innerHTML=`
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
              value="${e}"
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
    `,this.container.querySelector("#btn-close-engine-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.statusBtn&&this.statusBtn.addEventListener("click",()=>this.open()),this.container.querySelector("#btn-connect-engine")?.addEventListener("click",()=>this.handleConnect())}open(){this.container.style.display="flex",this.checkHealth()}close(){this.container.style.display="none"}async checkInitialConnection(){let e=await y.checkHealth();this.updateHealthUI(e);let i=y.getSavedToken();if(e.healthy&&i){let t=await y.fetchLibrary(i);t.books.length>0&&(this.store.loadCustomData(t.books,t.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${t.books.length} Books`))}}async checkHealth(){let e=await y.checkHealth();return this.updateHealthUI(e),e}updateHealthUI(e){let i=this.container.querySelector("#engine-status-box"),t=this.container.querySelector(".status-indicator-dot"),s=this.container.querySelector("#engine-status-text"),o=this.container.querySelector("#engine-substatus-text");e.healthy?(t&&(t.className="status-indicator-dot dot-emerald"),s&&(s.textContent=`\u25CF Engine Online (v${e.version||"1.0.0"})`),o&&(o.textContent=`SQLite Store: ${e.booksCount||0} books, ${e.annotCount||0} highlights available`),this.updateHeaderBadge(!0,"\u25CF Engine Online")):(t&&(t.className="status-indicator-dot dot-gray"),s&&(s.textContent="\u25CB Engine Offline or Not Running"),o&&(o.textContent="Start with: pnpm --filter @hakim/engine start"),this.updateHeaderBadge(!1,"\u25CB Engine Offline"))}updateHeaderBadge(e,i){if(this.statusBtn){this.statusBtn.className=`btn-engine-status ${e?"online":"offline"}`;let t=this.statusBtn.querySelector(".engine-status-label");t&&(t.textContent=i)}}async handleConnect(){let i=this.container.querySelector("#engine-token-input")?.value.trim()||"",t=this.container.querySelector("#engine-feedback-msg"),s=this.container.querySelector("#btn-connect-engine");if(!i){t&&(t.style.display="block",t.className="engine-feedback-msg error",t.textContent="Please enter a pairing token.");return}s&&(s.disabled=!0),t&&(t.style.display="block",t.className="engine-feedback-msg info",t.textContent="Verifying pairing and fetching SQLite library...");let o=await y.verifyPairing(i);if(!o.success){t&&(t.className="engine-feedback-msg error",t.textContent=o.error||"Authentication failed. Check your token."),s&&(s.disabled=!1);return}y.saveToken(i);let a=await y.fetchLibrary(i);if(a.error){t&&(t.className="engine-feedback-msg error",t.textContent=a.error),s&&(s.disabled=!1);return}this.store.loadCustomData(a.books,a.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${a.books.length} Books`),t&&(t.className="engine-feedback-msg success",t.textContent=`\u2713 Connected! Successfully loaded ${a.books.length} books and ${a.highlights.length} highlights.`),s&&(s.disabled=!1),setTimeout(()=>{this.close()},1200)}};var x=class h{static storageKey="hakim_ai_config";static getSavedConfig(){try{let e=localStorage.getItem(h.storageKey);if(e)return JSON.parse(e)}catch{}return{provider:"heuristic",modelName:"local-heuristic"}}static saveConfig(e){try{localStorage.setItem(h.storageKey,JSON.stringify(e))}catch{}}static async extractConceptClusters(e,i,t=h.getSavedConfig()){if(e.length===0)return[];if(t.provider!=="heuristic"&&t.apiKey&&t.endpoint)try{return await h.fetchLLMClusters(e,t)}catch(s){console.warn("LLM clustering failed, falling back to local heuristic:",s)}return h.heuristicClusterExtraction(e,i)}static async generateExecutiveSynthesis(e,i,t=h.getSavedConfig()){if(e.length===0)return{title:"No Highlights Selected",summary:"Please select or import highlights to generate an executive synthesis.",mentalModels:[],actionableTakeaways:[],sourceHighlightsCount:0};if(t.provider!=="heuristic"&&t.apiKey&&t.endpoint)try{return await h.fetchLLMSynthesis(e,i,t)}catch(s){console.warn("LLM synthesis failed, falling back to heuristic:",s)}return h.heuristicExecutiveSynthesis(e,i)}static async generateSocraticQuestions(e,i=h.getSavedConfig()){return e.length===0?[]:e.slice(0,10).map((t,s)=>{let o=t.rawText.trim(),a=o.split(".")[0]||o,c=`How does the principle of "${t.tags?.[0]||"this concept"}" in "${t.bookTitle}" apply to high-leverage decision making?`;return t.rawText.toLowerCase().includes("stoic")||t.rawText.toLowerCase().includes("discipline")?c=`According to ${t.bookTitle}, what is the distinction between internal control and external events?`:(t.rawText.toLowerCase().includes("system")||t.rawText.toLowerCase().includes("data"))&&(c=`What fundamental architectural trade-off is emphasized in "${t.bookTitle}" regarding this quote?`),{id:`q-${s}-${t.id}`,question:c,idealAnswer:t.interpretation||t.sourceNote||a,sourceHighlight:t.rawText,bookTitle:t.bookTitle}})}static heuristicClusterExtraction(e,i){let t=new Map;e.forEach(o=>{(o.tags&&o.tags.length>0?o.tags:h.extractKeywords(o.rawText)).forEach(c=>{let n=c.toLowerCase().trim();if(n.length<3)return;t.has(n)||t.set(n,{highlightIds:[],quotes:[],bookTitles:new Set});let r=t.get(n);r.highlightIds.push(o.id),r.quotes.push(o.rawText),r.bookTitles.add(o.bookTitle)})});let s=[];return t.forEach((o,a)=>{if(o.highlightIds.length>=2||o.bookTitles.size>=1){let c=a.charAt(0).toUpperCase()+a.slice(1);s.push({conceptName:`#${c}`,description:`Cross-cutting principle spanning ${o.bookTitles.size} books, connecting ${o.highlightIds.length} foundational passages.`,relatedBooks:Array.from(o.bookTitles),highlightIds:o.highlightIds,keyQuotes:o.quotes.slice(0,3)})}}),s.sort((o,a)=>a.highlightIds.length-o.highlightIds.length).slice(0,8)}static heuristicExecutiveSynthesis(e,i){let t=Array.from(new Set(e.map(p=>p.bookTitle))),s=i?`Executive Brief: ${i}`:`Reading Intelligence Synthesis (${t.length} Books)`,o=e.map(p=>p.rawText),a=o[0]||"",c=o[1]||o[0]||"",n=`Synthesizing ${e.length} core passages across ${t.join(", ")}. A recurring dialectic emerges: durable outcomes require foundational discipline and system-level fault tolerance rather than ad-hoc intervention. As captured in the literature: "${a.slice(0,140)}..."`,r=["First-Principles Invariance: Distinguish immutable physical or algorithmic laws from transient user assumptions.","Asymmetric Feedback Loops: Small habits and deterministic routines compound into resilient long-term architectures.","Cognitive Provenance: Preserving raw source observations alongside evolving human reflections prevents semantic drift."],d=[`Structure recurring review intervals for key passages in ${t[0]||"your library"}.`,"Translate abstract philosophical insights into concrete operational heuristics.","Anchor conceptual highlights into your Notion knowledge graph for permanent retrieval."];return{title:s,summary:n,mentalModels:r,actionableTakeaways:d,sourceHighlightsCount:e.length}}static extractKeywords(e){let i=new Set(["the","and","that","this","with","from","have","will","what","when","where","which","about","into","their","there","would","could","should","being","these","those"]),t=e.toLowerCase().replace(/[^\w\s]/g,"").split(/\s+/).filter(s=>s.length>4&&!i.has(s));return Array.from(new Set(t)).slice(0,3)}static async fetchLLMClusters(e,i){let t=`Analyze these ${e.length} reading highlights and group them into 3-6 thematic concept clusters. Return JSON only with format: [{"conceptName": string, "description": string, "relatedBooks": string[], "highlightIds": string[], "keyQuotes": string[]}]

Highlights:
${JSON.stringify(e.map(c=>({id:c.id,book:c.bookTitle,text:c.rawText})))}`,o=await(await fetch(i.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.apiKey}`},body:JSON.stringify({model:i.modelName||"gpt-4o-mini",messages:[{role:"user",content:t}],response_format:{type:"json_object"}})})).json(),a=JSON.parse(o.choices[0].message.content);return a.clusters||a}static async fetchLLMSynthesis(e,i,t){let s=`You are a world-class reading intelligence synthesizer. Synthesize these highlights into an executive brief. Return JSON only: {"title": string, "summary": string, "mentalModels": string[], "actionableTakeaways": string[]}

Highlights:
${JSON.stringify(e.map(n=>({book:n.bookTitle,text:n.rawText})))}`,a=await(await fetch(t.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`},body:JSON.stringify({model:t.modelName||"gpt-4o-mini",messages:[{role:"user",content:s}],response_format:{type:"json_object"}})})).json();return{...JSON.parse(a.choices[0].message.content),sourceHighlightsCount:e.length}}};var A=class{container;store;activeTask="synthesis";constructor(){this.store=k.getInstance(),this.container=document.createElement("div"),this.container.className="ai-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM()}initDOM(){this.container.innerHTML=`
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
          <button class="ai-task-btn ${this.activeTask==="synthesis"?"active":""}" data-task="synthesis">
            \u{1F4DD} Executive Synthesis
          </button>
          <button class="ai-task-btn ${this.activeTask==="clusters"?"active":""}" data-task="clusters">
            \u{1F9E0} Concept Clusters
          </button>
          <button class="ai-task-btn ${this.activeTask==="questions"?"active":""}" data-task="questions">
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
    `,this.container.querySelector("#btn-close-ai-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",e=>{e.target===this.container&&this.close()}),this.container.querySelectorAll(".ai-task-btn").forEach(e=>{e.addEventListener("click",()=>{let i=e.getAttribute("data-task");i&&(this.activeTask=i,this.container.querySelectorAll(".ai-task-btn").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.runActiveTask())})}),this.container.querySelector("#btn-re-synthesize")?.addEventListener("click",()=>this.runActiveTask()),this.container.querySelector("#btn-copy-ai-result")?.addEventListener("click",()=>this.copyMarkdown())}open(){this.container.style.display="flex",this.runActiveTask()}close(){this.container.style.display="none"}async runActiveTask(){let e=this.container.querySelector("#ai-results-stage");if(!e)return;e.innerHTML=`
      <div class="ai-loading-state">
        <span class="ai-spinner"></span>
        <p>Synthesizing insights and cognitive models...</p>
      </div>
    `;let i=this.store.getFilteredHighlights(),t=this.store.getState().books;if(this.activeTask==="synthesis"){let s=await x.generateExecutiveSynthesis(i);this.renderSynthesis(e,s)}else if(this.activeTask==="clusters"){let s=await x.extractConceptClusters(i,t);this.renderClusters(e,s)}else if(this.activeTask==="questions"){let s=await x.generateSocraticQuestions(i);this.renderQuestions(e,s)}}renderSynthesis(e,i){e.innerHTML=`
      <div class="synthesis-result-card">
        <h3 class="synthesis-title">${i.title}</h3>
        <p class="synthesis-summary">${i.summary}</p>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u{1F9E0} Core Mental Models</h4>
          <ul class="synthesis-list">
            ${i.mentalModels.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u26A1 Actionable Principles</h4>
          <ul class="synthesis-list">
            ${i.actionableTakeaways.map(t=>`<li>${t}</li>`).join("")}
          </ul>
        </div>
      </div>
    `}renderClusters(e,i){if(i.length===0){e.innerHTML='<p class="empty-state-text">No multi-book conceptual clusters found in the active filter.</p>';return}e.innerHTML=`
      <div class="clusters-grid">
        ${i.map(t=>`
          <div class="cluster-card">
            <div class="cluster-header">
              <span class="cluster-title">${t.conceptName}</span>
              <span class="cluster-count">${t.highlightIds.length} Highlights</span>
            </div>
            <p class="cluster-desc">${t.description}</p>
            <div class="cluster-books-row">
              ${t.relatedBooks.map(s=>`<span class="cluster-book-chip">\u{1F4D6} ${s}</span>`).join(" ")}
            </div>
            <blockquote class="cluster-quote">\u201C${t.keyQuotes[0]?.slice(0,140)||""}...\u201D</blockquote>
          </div>
        `).join("")}
      </div>
    `}renderQuestions(e,i){if(i.length===0){e.innerHTML='<p class="empty-state-text">No questions generated. Add more highlights to your library.</p>';return}e.innerHTML=`
      <div class="questions-list">
        ${i.map((t,s)=>`
          <div class="question-item">
            <div class="question-header">
              <span class="question-badge">Prompt #${s+1}</span>
              <span class="question-book">\u{1F4D6} ${t.bookTitle}</span>
            </div>
            <h4 class="question-text">${t.question}</h4>
            <div class="question-ideal-box">
              <strong>\u{1F4A1} Ideal Answer / Principle:</strong> ${t.idealAnswer}
            </div>
          </div>
        `).join("")}
      </div>
    `}copyMarkdown(){let i=this.container.querySelector("#ai-results-stage")?.innerText||"";if(navigator.clipboard){navigator.clipboard.writeText(i);let t=this.container.querySelector("#btn-copy-ai-result span");t&&(t.textContent="Copied to Clipboard!",setTimeout(()=>{t.textContent="Copy Markdown Synthesis"},2e3))}}};var R=class h{files=[];addFile(e,i){return this.files.push({name:e.replace(/\\/g,"/"),content:i}),this}generateBlob(){let e=[],i=[],t=0,s=new TextEncoder;for(let d of this.files){let p=s.encode(d.name),l=typeof d.content=="string"?s.encode(d.content):d.content,g=h.crc32(l),v=l.length,f=new Uint8Array(30+p.length),u=new DataView(f.buffer);u.setUint32(0,67324752,!0),u.setUint16(4,20,!0),u.setUint16(6,0,!0),u.setUint16(8,0,!0),u.setUint16(10,0,!0),u.setUint16(12,0,!0),u.setUint32(14,g,!0),u.setUint32(18,v,!0),u.setUint32(22,v,!0),u.setUint16(26,p.length,!0),u.setUint16(28,0,!0),f.set(p,30),e.push(f,l);let b=new Uint8Array(46+p.length),m=new DataView(b.buffer);m.setUint32(0,33639248,!0),m.setUint16(4,20,!0),m.setUint16(6,20,!0),m.setUint16(8,0,!0),m.setUint16(10,0,!0),m.setUint16(12,0,!0),m.setUint16(14,0,!0),m.setUint32(16,g,!0),m.setUint32(20,v,!0),m.setUint32(24,v,!0),m.setUint16(28,p.length,!0),m.setUint16(30,0,!0),m.setUint16(32,0,!0),m.setUint16(34,0,!0),m.setUint16(36,0,!0),m.setUint32(38,0,!0),m.setUint32(42,t,!0),b.set(p,46),i.push(b),t+=f.length+l.length}let o=t,a=0;for(let d of i)a+=d.length;let c=new Uint8Array(22),n=new DataView(c.buffer);n.setUint32(0,101010256,!0),n.setUint16(4,0,!0),n.setUint16(6,0,!0),n.setUint16(8,this.files.length,!0),n.setUint16(10,this.files.length,!0),n.setUint32(12,a,!0),n.setUint32(16,o,!0),n.setUint16(20,0,!0);let r=[...e,...i,c];return new Blob(r,{type:"application/zip"})}downloadZip(e="hakim-obsidian-vault.zip"){let i=this.generateBlob(),t=URL.createObjectURL(i),s=document.createElement("a");s.href=t,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(t),1e3)}static crcTable=(()=>{let e=new Uint32Array(256);for(let i=0;i<256;i++){let t=i;for(let s=0;s<8;s++)t=t&1?3988292384^t>>>1:t>>>1;e[i]=t}return e})();static crc32(e){let i=-1;for(let t=0;t<e.length;t++)i=i>>>8^h.crcTable[(i^e[t])&255];return(i^-1)>>>0}};var q=class h{static generateVault(e,i){let t=[],s=new R,o=h.formatIndexNote(e,i);t.push({path:"Index.md",content:o}),s.addFile("Index.md",o);for(let n of e){let r=i.filter(g=>g.bookId===n.id||g.bookTitle===n.title),d=h.sanitizeFileName(n.title),p=h.formatBookNote(n,r),l=`Books/${d}.md`;t.push({path:l,content:p}),s.addFile(l,p)}let a=new Map;for(let n of i)for(let r of n.tags||[]){let d=r.trim();d&&(a.has(d)||a.set(d,[]),a.get(d).push(n))}let c=0;return a.forEach((n,r)=>{c++;let d=h.sanitizeFileName(r),p=h.formatConceptNote(r,n),l=`Concepts/${d}.md`;t.push({path:l,content:p}),s.addFile(l,p)}),{files:t,booksCount:e.length,highlightsCount:i.length,conceptsCount:c,zipBuilder:s}}static formatBookNote(e,i){let t=[];if(t.push("---"),t.push(`title: ${JSON.stringify(e.title)}`),t.push(`author: ${JSON.stringify(e.author)}`),e.asin&&t.push(`asin: ${JSON.stringify(e.asin)}`),t.push(`status: ${e.status||"reading"}`),t.push(`highlights_count: ${i.length}`),t.push("tags:"),t.push("  - type/book"),t.push("  - reading-intelligence"),t.push("---"),t.push(""),t.push(`# ${e.title}`),t.push(`**Author:** [[${e.author}]]`),t.push(`**Status:** \`${(e.status||"reading").toUpperCase()}\``),t.push(`**Total Highlights:** ${i.length}`),t.push(""),t.push("---"),t.push(""),t.push("## \u{1F4D6} Highlights & Annotations"),t.push(""),i.length===0)return t.push("*No highlights captured for this book yet.*"),t.join(`
`);let s=[...i].sort((o,a)=>(o.location||0)-(a.location||0));for(let o=0;o<s.length;o++){let a=s[o],c=a.color==="pink"?"danger":a.color==="blue"?"info":a.color==="orange"?"warning":"quote";a.chapter&&(t.push(`### ${a.chapter}`),t.push("")),t.push(`> [!${c}] Highlight #${o+1}`),t.push(`> ${a.rawText}`);let n=[];a.location&&n.push(`Loc ${a.location}`),a.color&&n.push(`Color: ${a.color}`),a.importance&&n.push(`Importance: ${a.importance}`),n.length>0&&(t.push(">"),t.push(`> \u2014 *${n.join(" \u2022 ")}*`)),a.sourceNote&&(t.push(""),t.push("> [!note] Personal Note"),t.push(`> ${a.sourceNote}`)),a.interpretation&&(t.push(""),t.push(`**\u{1F4A1} Reflection:** ${a.interpretation}`)),a.tags&&a.tags.length>0&&(t.push(""),t.push(`**Concepts:** ${a.tags.map(r=>`[[Concepts/${r}|#${r}]]`).join(" ")}`)),t.push(`^hl-${a.id}`),t.push(""),t.push("---"),t.push("")}return t.join(`
`)}static formatConceptNote(e,i){let t=[],s=Array.from(new Set(i.map(o=>o.bookTitle)));t.push("---"),t.push(`concept: ${JSON.stringify(e)}`),t.push(`highlights_count: ${i.length}`),t.push("tags:"),t.push("  - type/concept"),t.push("---"),t.push(""),t.push(`# Concept: #${e}`),t.push(`Cross-cutting reading intelligence concept spanning **${s.length} books**.`),t.push(""),t.push("## \u{1F4DA} Linked Books");for(let o of s)t.push(`- [[Books/${o}|${o}]]`);t.push(""),t.push("## \u{1F4AC} Key Highlights");for(let o of i)t.push(`> "${o.rawText}"`),t.push(`\u2014 [[Books/${o.bookTitle}|${o.bookTitle}]] (Loc ${o.location||"N/A"})`),t.push("");return t.join(`
`)}static formatIndexNote(e,i){let t=[];t.push("---"),t.push('title: "Hakim Reading OS Dashboard"'),t.push("tags:"),t.push("  - dashboard"),t.push("---"),t.push(""),t.push("# \u{1F3DB}\uFE0F Hakim Personal Reading Intelligence Vault"),t.push(""),t.push(`Welcome to your local-first reading vault. Generated on **${new Date().toLocaleDateString()}**.`),t.push(""),t.push("### \u{1F4CA} Library Statistics"),t.push(`- **Total Books:** ${e.length}`),t.push(`- **Total Highlights:** ${i.length}`),t.push(""),t.push("---"),t.push(""),t.push("## \u{1F4DA} Books Library");for(let s of e){let o=i.filter(a=>a.bookId===s.id||a.bookTitle===s.title).length;t.push(`- [[Books/${s.title}|${s.title}]] by *${s.author}* (${o} notes)`)}return t.push(""),t.push("---"),t.push("*Exported automatically from [Hakim](https://github.com/ws0x/hakim).*"),t.join(`
`)}static sanitizeFileName(e){return e.replace(/[\\/:*?"<>|]/g,"_").trim()}};var D=class{container;store;currentResult=null;selectedFilePath="Index.md";constructor(){this.store=k.getInstance(),this.container=document.createElement("div"),this.container.className="obsidian-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `,this.container.querySelector("#btn-close-obsidian-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",e=>{e.target===this.container&&this.close()}),this.container.querySelector("#btn-download-vault-zip")?.addEventListener("click",()=>this.handleDownloadZip()),this.container.querySelector("#btn-copy-vault-file")?.addEventListener("click",()=>this.handleCopyCurrentFile())}open(){this.container.style.display="flex",this.generateAndRender()}close(){this.container.style.display="none"}generateAndRender(){let e=this.store.getState();this.currentResult=q.generateVault(e.books,e.highlights);let i=this.container.querySelector("#vault-stats-text");i&&(i.textContent=`\u{1F4E6} ${this.currentResult.booksCount} Books \u2022 ${this.currentResult.highlightsCount} Highlights \u2022 ${this.currentResult.conceptsCount} Concepts`);let t=this.container.querySelector("#obsidian-tree-list");t&&(t.innerHTML=this.currentResult.files.map(s=>`
        <div class="tree-item ${s.path===this.selectedFilePath?"active":""}" data-path="${s.path}">
          <span class="tree-icon">${s.path.startsWith("Books/")?"\u{1F4D6}":s.path.startsWith("Concepts/")?"\u{1F9E0}":"\u{1F4C4}"}</span>
          <span class="tree-name">${s.path}</span>
        </div>
      `).join(""),t.querySelectorAll(".tree-item").forEach(s=>{s.addEventListener("click",()=>{let o=s.getAttribute("data-path");o&&(this.selectedFilePath=o,t.querySelectorAll(".tree-item").forEach(a=>a.classList.remove("active")),s.classList.add("active"),this.renderSelectedFilePreview())})})),this.renderSelectedFilePreview()}renderSelectedFilePreview(){if(!this.currentResult)return;let e=this.currentResult.files.find(s=>s.path===this.selectedFilePath)||this.currentResult.files[0];if(!e)return;let i=this.container.querySelector("#preview-file-title"),t=this.container.querySelector("#obsidian-code-view code");i&&(i.textContent=e.path),t&&(t.textContent=e.content)}handleDownloadZip(){this.currentResult&&this.currentResult.zipBuilder.downloadZip("hakim-obsidian-vault.zip")}handleCopyCurrentFile(){if(!this.currentResult)return;let e=this.currentResult.files.find(i=>i.path===this.selectedFilePath);if(e&&navigator.clipboard){navigator.clipboard.writeText(e.content);let i=this.container.querySelector("#btn-copy-vault-file span");i&&(i.textContent="Copied!",setTimeout(()=>{i.textContent="Copy File Markdown"},2e3))}}};var P=class{store;graphEngine=null;cardsComponent=null;flashcardsComponent=null;slideover=null;engineBridge=null;aiModal=null;obsidianModal=null;constructor(){this.store=k.getInstance(),this.init()}init(){let e=document.getElementById("graph-container");e&&(this.graphEngine=new I(e,u=>{this.handleNodeClick(u)}));let i=document.getElementById("cards-container");i&&(this.cardsComponent=new H(i,{onSelectHighlight:u=>this.store.selectHighlight(u),onSelectBook:u=>this.store.selectBook(u),onUpdateBookStatus:(u,b)=>this.store.updateBookStatus(u,b)}));let t=document.getElementById("flashcards-container");t&&(this.flashcardsComponent=new M(t)),this.slideover=new B,this.engineBridge=new N("btn-engine-status"),this.aiModal=new A;let s=document.getElementById("btn-ai-synthesis");s&&s.addEventListener("click",()=>this.aiModal?.open()),this.obsidianModal=new D;let o=document.getElementById("btn-obsidian-export");o&&o.addEventListener("click",()=>this.obsidianModal?.open()),this.store.subscribe(u=>this.render(u));let a=document.getElementById("search-input");a&&a.addEventListener("input",()=>{this.store.setSearchQuery(a.value)});let c=document.getElementById("dataset-select");c&&c.addEventListener("change",()=>{c.value==="demo"&&this.store.loadDemoData()}),document.querySelectorAll(".view-btn").forEach(u=>{u.addEventListener("click",()=>{let b=u.getAttribute("data-view");b&&this.store.setView(b)})}),document.querySelectorAll(".color-dot-btn").forEach(u=>{u.addEventListener("click",()=>{let b=u.getAttribute("data-color");b&&this.store.toggleColorFilter(b)})});let d=document.getElementById("btn-graph-zoom-in"),p=document.getElementById("btn-graph-zoom-out"),l=document.getElementById("btn-graph-reset"),g=document.getElementById("btn-graph-physics");d&&d.addEventListener("click",()=>this.graphEngine?.zoomIn()),p&&p.addEventListener("click",()=>this.graphEngine?.zoomOut()),l&&l.addEventListener("click",()=>this.graphEngine?.resetView()),g&&g.addEventListener("click",()=>{let u=this.graphEngine?.togglePhysics();g.classList.toggle("active",u)});let v=document.getElementById("file-upload-input"),f=document.getElementById("btn-upload-file");f&&v&&(f.addEventListener("click",()=>v.click()),v.addEventListener("change",async()=>{let u=v.files?.[0];if(!u)return;let b=await u.text();if(u.name.endsWith(".json")){let m=S.parseJsonSnapshot(b);this.store.loadCustomData(m.books,m.highlights,"custom_file")}else{let m=S.parseMyClippings(b);this.store.loadCustomData(m.books,m.highlights,"custom_file")}}))}handleNodeClick(e){if(e.type==="book")this.store.selectBook(e.id===this.store.getState().filters.selectedBookId?null:e.id);else if(e.type==="highlight"){let i=this.store.getState().highlights.find(t=>t.id===e.id);i&&this.store.selectHighlight(i)}}render(e){let i=document.getElementById("graph-container"),t=document.getElementById("cards-container"),s=document.getElementById("flashcards-container"),o=document.querySelector(".graph-toolbar");if(e.selectedHighlight&&this.slideover&&this.slideover.open(e.selectedHighlight),e.activeView==="graph")i&&(i.style.display="block"),t&&(t.style.display="none"),s&&(s.style.display="none"),o&&(o.style.display="flex"),this.graphEngine&&this.graphEngine.setData(e.graphData);else if(e.activeView==="cards"){if(i&&(i.style.display="none"),t&&(t.style.display="block"),s&&(s.style.display="none"),o&&(o.style.display="none"),this.cardsComponent){let l=this.store.getFilteredHighlights();this.cardsComponent.render(e.books,l)}}else if(e.activeView==="flashcards"&&(i&&(i.style.display="none"),t&&(t.style.display="none"),s&&(s.style.display="flex"),o&&(o.style.display="none"),this.flashcardsComponent)){let l=this.store.getFilteredHighlights();this.flashcardsComponent.setDeck(l)}let a=document.getElementById("sidebar-book-list");if(a){a.innerHTML="";let l=document.createElement("button");l.className=`book-item-btn ${e.filters.selectedBookId===null?"active":""}`,l.innerHTML=`<span>All Library Highlights</span> <span class="book-count-badge">${e.highlights.length}</span>`,l.addEventListener("click",()=>this.store.selectBook(null)),a.appendChild(l),e.books.forEach(g=>{let v=document.createElement("button");v.className=`book-item-btn ${e.filters.selectedBookId===g.id?"active":""}`,v.innerHTML=`<span>\u{1F4D6} ${g.title}</span> <span class="book-count-badge">${g.highlightsCount}</span>`,v.addEventListener("click",()=>this.store.selectBook(g.id)),a.appendChild(v)})}document.querySelectorAll(".view-btn").forEach(l=>{l.getAttribute("data-view")===e.activeView?l.classList.add("active"):l.classList.remove("active")}),document.querySelectorAll(".color-dot-btn").forEach(l=>{let g=l.getAttribute("data-color");g&&e.filters.selectedColors.has(g)?l.classList.add("active"):l.classList.remove("active")});let r=document.getElementById("hud-nodes-count"),d=document.getElementById("hud-links-count"),p=document.getElementById("hud-filtered-count");r&&(r.textContent=String(e.graphData.nodes.length)),d&&(d.textContent=String(e.graphData.links.length)),p&&(p.textContent=String(this.store.getFilteredHighlights().length))}};document.addEventListener("DOMContentLoaded",()=>{new P,console.log("\u26A1 Hakim Reading Intelligence Web Client Initialized.")});
