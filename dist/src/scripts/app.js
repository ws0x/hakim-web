var D=[{id:"book-1",asin:"B00ZUX90S4",title:"Designing Data-Intensive Applications",author:"Martin Kleppmann",highlightsCount:6,tags:["Software Architecture","Distributed Systems","Reliability"],status:"reading"},{id:"book-2",asin:"B01862ES3A",title:"The Daily Stoic",author:"Ryan Holiday",highlightsCount:6,tags:["Philosophy","Stoicism","Mindset"],status:"completed"},{id:"book-3",asin:"B07D23CFGR",title:"Atomic Habits",author:"James Clear",highlightsCount:5,tags:["Productivity","Habit Formation","Systems Thinking"],status:"completed"},{id:"book-4",asin:"B004J4XGN6",title:"Thinking, Fast and Slow",author:"Daniel Kahneman",highlightsCount:5,tags:["Psychology","Cognitive Biases","Decision Making"],status:"reading"},{id:"book-5",asin:"B001GSTOAM",title:"Clean Code",author:"Robert C. Martin",highlightsCount:4,tags:["Software Craftsmanship","Refactoring","Clean Code"],status:"completed"}],R=[{id:"hl-101",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Reliability means continuing to work correctly (performing the correct function at the desired level of performance) even in the face of adversity (hardware or software faults, and even human error).",location:120,color:"yellow",importance:"Essential",tags:["Reliability","Software Architecture"],sourceNote:"Core definition of software reliability.",interpretation:"A system is not truly reliable if it only works under ideal conditions."},{id:"hl-102",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Scalability is the term we use to describe a system's ability to cope with increased load.",location:245,color:"blue",importance:"High",tags:["Distributed Systems"]},{id:"hl-103",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Maintainability means many different people will work on the system over time, and they should all be able to work on it productively.",location:380,color:"pink",importance:"High",tags:["Clean Code","Software Architecture"]},{id:"hl-104",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Behind every fault-tolerant system is a set of carefully reasoned invariants.",location:512,color:"orange",importance:"Essential",tags:["Distributed Systems"]},{id:"hl-201",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",location:45,color:"yellow",importance:"Essential",tags:["Stoicism","Mindset"],sourceNote:"Epictetus' Dichotomy of Control.",interpretation:"Direct energy only towards intentional choices, never external outcomes."},{id:"hl-202",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"You have power over your mind - not outside events. Realize this, and you will find strength.",location:190,color:"yellow",importance:"High",tags:["Stoicism","Psychology"]},{id:"hl-203",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"Waste no more time arguing what a good person should be. Be one.",location:320,color:"pink",importance:"Essential",tags:["Philosophy"]},{id:"hl-301",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"You do not rise to the level of your goals. You fall to the level of your systems.",location:110,color:"yellow",importance:"Essential",tags:["Systems Thinking","Habit Formation"],interpretation:"Focus on designing frictionless recurring routines rather than obsessing over end milestones."},{id:"hl-302",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Every action you take is a vote for the type of person you wish to become.",location:280,color:"orange",importance:"High",tags:["Habit Formation","Mindset"]},{id:"hl-303",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Make it obvious, make it attractive, make it easy, make it satisfying.",location:450,color:"blue",importance:"Essential",tags:["Productivity"]},{id:"hl-401",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.",location:80,color:"yellow",importance:"High",tags:["Cognitive Biases","Psychology"]},{id:"hl-402",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 2 allocates attention to the effortful mental operations that demand it, including complex computations.",location:140,color:"blue",importance:"High",tags:["Cognitive Biases","Decision Making"]},{id:"hl-403",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"We are prone to overestimate how much we understand about the world and to underestimate the role of chance.",location:390,color:"pink",importance:"Essential",tags:["Decision Making","Mindset"]},{id:"hl-501",bookId:"book-5",bookTitle:"Clean Code",rawText:"Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",location:95,color:"yellow",importance:"Essential",tags:["Clean Code","Software Craftsmanship"]},{id:"hl-502",bookId:"book-5",bookTitle:"Clean Code",rawText:"Leave the campground cleaner than you found it. The Boy Scout Rule.",location:210,color:"pink",importance:"Essential",tags:["Refactoring","Clean Code"],sourceNote:"Apply incremental continuous cleanup to every PR."}];var E=class{static COLOR_PALETTE={book:"#818cf8",topic:"#38bdf8",author:"#c084fc",yellowHighlight:"#fcd34d",blueHighlight:"#67e8f9",pinkHighlight:"#fda4af",orangeHighlight:"#fdba74"};static buildGraph(t,i,e){let s=[],n=[],a=new Set,c=new Map;for(let o=0;o<t.length;o++){let r=t[o];if(s.push({id:r.id,label:r.title,type:"book",group:1,size:Math.max(16,Math.min(32,14+r.highlightsCount*2)),color:this.COLOR_PALETTE.book,bookTitle:r.title}),a.add(r.id),r.tags)for(let d of r.tags)c.set(d,(c.get(d)||0)+1)}for(let[o,r]of c.entries()){let d=`topic-${o.toLowerCase().replace(/\s+/g,"-")}`;s.push({id:d,label:`#${o}`,type:"topic",group:2,size:Math.max(12,Math.min(24,10+r*3)),color:this.COLOR_PALETTE.topic}),a.add(d);for(let p of t)p.tags?.includes(o)&&n.push({source:p.id,target:d,type:"shares_topic",strength:.7})}for(let o of i){if(e&&!e.has(o.id))continue;let r=this.COLOR_PALETTE.yellowHighlight;o.color==="blue"?r=this.COLOR_PALETTE.blueHighlight:o.color==="pink"?r=this.COLOR_PALETTE.pinkHighlight:o.color==="orange"&&(r=this.COLOR_PALETTE.orangeHighlight);let d=o.location!==void 0?`Loc ${o.location}`:"Note",p=o.rawText.substring(0,36)+(o.rawText.length>36?"...":"");if(s.push({id:o.id,label:`${d}: ${p}`,type:"highlight",group:3,size:o.importance==="Essential"?10:7,color:r,bookId:o.bookId,bookTitle:o.bookTitle,rawText:o.rawText,note:o.sourceNote,location:o.location,importance:o.importance}),a.add(o.id),a.has(o.bookId)&&n.push({source:o.bookId,target:o.id,type:"contains",strength:.9}),o.tags)for(let l of o.tags){let u=`topic-${l.toLowerCase().replace(/\s+/g,"-")}`;a.has(u)&&n.push({source:o.id,target:u,type:"shares_topic",strength:.4})}}return{nodes:s,links:n}}};var x=class h{static instance;listeners=new Set;state={books:D,highlights:R,filters:{searchQuery:"",selectedBookId:null,selectedColors:new Set(["yellow","blue","pink","orange"]),selectedImportance:new Set(["Essential","High","Medium","Low"]),selectedTopics:new Set},graphData:{nodes:[],links:[]},activeView:"graph",selectedHighlight:null,isLoading:!1,activeDataset:"demo"};constructor(){this.recomputeGraph()}static getInstance(){return h.instance||(h.instance=new h),h.instance}getState(){return this.state}subscribe(t){return this.listeners.add(t),t(this.state),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t(this.state)}setView(t){this.state.activeView=t,this.notify()}selectHighlight(t){this.state.selectedHighlight=t,this.notify()}setSearchQuery(t){this.state.filters.searchQuery=t.toLowerCase().trim(),this.recomputeGraph(),this.notify()}selectBook(t){this.state.filters.selectedBookId=t,this.recomputeGraph(),this.notify()}toggleColorFilter(t){this.state.filters.selectedColors.has(t)?this.state.filters.selectedColors.delete(t):this.state.filters.selectedColors.add(t),this.recomputeGraph(),this.notify()}loadCustomData(t,i,e){this.state.books=t,this.state.highlights=i,this.state.activeDataset=e,this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}updateBookStatus(t,i){let e=this.state.books.find(s=>s.id===t);e&&(e.status=i,this.notify())}loadDemoData(){this.state.books=D,this.state.highlights=R,this.state.activeDataset="demo",this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}getFilteredHighlights(){let{searchQuery:t,selectedBookId:i,selectedColors:e,selectedImportance:s}=this.state.filters;return this.state.highlights.filter(n=>{if(i&&n.bookId!==i||e.size>0&&!e.has(n.color)||n.importance&&s.size>0&&!s.has(n.importance))return!1;if(t){let a=n.rawText.toLowerCase().includes(t),c=n.bookTitle.toLowerCase().includes(t),o=n.sourceNote?.toLowerCase().includes(t),r=n.tags?.some(d=>d.toLowerCase().includes(t));if(!a&&!c&&!o&&!r)return!1}return!0})}recomputeGraph(){let t=this.getFilteredHighlights(),i=new Set(t.map(e=>e.id));this.state.graphData=E.buildGraph(this.state.books,this.state.highlights,i)}};function G(h){if(!h)return"";let t={"&quot;":'"',"&amp;":"&","&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"\xAB","&raquo;":"\xBB","&mdash;":"\u2014","&ndash;":"\u2013","&hellip;":"\u2026","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&lsaquo;":"\u2039","&rsaquo;":"\u203A","&trade;":"\u2122","&copy;":"\xA9","&reg;":"\xAE","&bull;":"\u2022","&middot;":"\xB7","&prime;":"\u2032","&Prime;":"\u2033"};return h.replace(/&[a-zA-Z]+;/g,i=>t[i.toLowerCase()]??i).replace(/&#(\d+);/g,(i,e)=>{try{return String.fromCodePoint(parseInt(e,10))}catch{return i}}).replace(/&#x([a-fA-F0-9]+);/g,(i,e)=>{try{return String.fromCodePoint(parseInt(e,16))}catch{return i}})}function I(h){return h?G(h).normalize("NFKC").replace(/[\u200B-\u200D\uFEFF\u00AD\u200E\u200F]/g,"").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\s+/g," ").trim():""}function F(h){return h?I(h).replace(/\s*\((?:Kindle Edition|English Edition|Arabic Edition)\)/gi,"").trim():"Untitled"}function O(h){if(!h)return"Unknown Author";let t=I(h);if(t.includes(",")&&!t.includes(";")){let i=t.split(",").map(e=>e.trim());i.length===2&&i[0]&&i[1]&&(t=`${i[1]} ${i[0]}`)}return t}var S=class{static parseMyClippings(t){let i=t.split(/==========/),e=new Map,s=[];for(let n=0;n<i.length;n++){let a=i[n]?.trim();if(!a)continue;let c=a.split(/\r?\n/).map(T=>T.trim()).filter(Boolean);if(c.length<3)continue;let o=c[0],r=o.match(/\(([^)]+)\)$/),d=o,p="Unknown Author";r&&r[1]&&(p=r[1].trim(),d=o.substring(0,o.lastIndexOf("(")).trim());let l=F(d),u=O(p),v=`${l}:::${u}`,g=e.get(v);g||(g={id:`book-${e.size+1}`,title:l,author:u,highlightsCount:0,status:"reading"},e.set(v,g));let m=c[1],f,y=m.match(/Location\s+(\d+)/i)||m.match(/page\s+(\d+)/i);y&&y[1]&&(f=parseInt(y[1],10));let k="yellow";/yellow/i.test(m)?k="yellow":/blue/i.test(m)?k="blue":/pink/i.test(m)?k="pink":/orange/i.test(m)&&(k="orange");let C=c.slice(2).join(" ");C&&(g.highlightsCount++,s.push({id:`hl-import-${s.length+1}`,bookId:g.id,bookTitle:g.title,rawText:I(C),location:f,color:k,importance:"Medium",status:"Inbox"}))}return{books:Array.from(e.values()),highlights:s}}static parseJsonSnapshot(t){try{let i=JSON.parse(t);if(Array.isArray(i.books)&&Array.isArray(i.highlights))return{books:i.books,highlights:i.highlights};throw new Error("Invalid Hakim JSON snapshot structure.")}catch(i){throw new Error(`Failed to parse JSON file: ${i instanceof Error?i.message:"Invalid JSON"}`)}}};var L=class{canvas;ctx;container;nodes=[];links=[];nodeMap=new Map;alpha=1;alphaMin=.001;alphaDecay=.022;isSimulationRunning=!0;scale=1;minScale=.2;maxScale=4;offsetX=0;offsetY=0;isPanning=!1;panStartX=0;panStartY=0;hoveredNode=null;draggedNode=null;onNodeClickCallback;animationFrameId=null;constructor(t,i){this.container=t,this.onNodeClickCallback=i,this.canvas=document.createElement("canvas"),this.canvas.className="graph-canvas",this.container.appendChild(this.canvas);let e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get 2D context from canvas.");this.ctx=e,this.resize(),this.initEvents()}setData(t){let i=this.canvas.width/(window.devicePixelRatio||1),e=this.canvas.height/(window.devicePixelRatio||1);this.nodeMap.clear(),this.nodes=t.nodes.map((s,n)=>{let a=this.nodes.find(d=>d.id===s.id),c=n/Math.max(1,t.nodes.length)*2*Math.PI,o=s.type==="book"?120:s.type==="topic"?220:280+n%5*20,r={...s,x:a?a.x:i/2+Math.cos(c)*o+(Math.random()-.5)*40,y:a?a.y:e/2+Math.sin(c)*o+(Math.random()-.5)*40,vx:0,vy:0,radius:s.size||(s.type==="book"?22:s.type==="topic"?16:8)};return this.nodeMap.set(s.id,r),r}),this.links=t.links.map(s=>({...s,sourceNode:this.nodeMap.get(typeof s.source=="string"?s.source:s.source.id),targetNode:this.nodeMap.get(typeof s.target=="string"?s.target:s.target.id)})),this.alpha=1,this.startSimulation()}resize(){let t=this.container.getBoundingClientRect(),i=window.devicePixelRatio||1,e=t.width||800,s=t.height||600;this.canvas.width=e*i,this.canvas.height=s*i,this.canvas.style.width=`${e}px`,this.canvas.style.height=`${s}px`,this.ctx.scale(i,i),this.offsetX===0&&this.offsetY===0&&(this.offsetX=e/2,this.offsetY=s/2)}startSimulation(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId);let t=()=>{this.isSimulationRunning&&this.tick(),this.render(),this.animationFrameId=requestAnimationFrame(t)};this.animationFrameId=requestAnimationFrame(t)}tick(){if(this.alpha<this.alphaMin)return;let t=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1),e=t/2,s=i/2,n=.035*this.alpha;for(let o of this.nodes)o.vx+=(e-o.x)*n,o.vy+=(s-o.y)*n;let a=450*this.alpha;for(let o=0;o<this.nodes.length;o++){let r=this.nodes[o];for(let d=o+1;d<this.nodes.length;d++){let p=this.nodes[d],l=p.x-r.x,u=p.y-r.y,v=l*l+u*u;v===0&&(v=1);let g=Math.sqrt(v),m=r.radius+p.radius+15,f=a/v*(r.type==="book"||p.type==="book"?2.5:1),y=l/g*f,k=u/g*f;if(r.isDragging||(r.vx-=y,r.vy-=k),p.isDragging||(p.vx+=y,p.vy+=k),g<m){let C=(m-g)*.5*this.alpha,T=l/g*C,P=u/g*C;r.isDragging||(r.x-=T,r.y-=P),p.isDragging||(p.x+=T,p.y+=P)}}}for(let o of this.links){if(!o.sourceNode||!o.targetNode)continue;let r=o.sourceNode,d=o.targetNode,p=d.x-r.x,l=d.y-r.y,u=Math.sqrt(p*p+l*l)||1,v=o.type==="contains"?90:160,g=(o.strength||.5)*.12*this.alpha,m=(u-v)*g,f=p/u*m,y=l/u*m;r.isDragging||(r.vx+=f,r.vy+=y),d.isDragging||(d.vx-=f,d.vy-=y)}let c=.65;for(let o of this.nodes)o.isDragging||(o.vx*=c,o.vy*=c,o.x+=o.vx,o.y+=o.vy);this.alpha+=(0-this.alpha)*this.alphaDecay}render(){let t=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1);this.ctx.clearRect(0,0,t,i),this.ctx.save(),this.ctx.translate(this.offsetX,this.offsetY),this.ctx.scale(this.scale,this.scale);for(let e of this.links){if(!e.sourceNode||!e.targetNode)continue;let s=this.hoveredNode&&(e.sourceNode.id===this.hoveredNode.id||e.targetNode.id===this.hoveredNode.id);this.ctx.beginPath(),this.ctx.moveTo(e.sourceNode.x-t/2,e.sourceNode.y-i/2),this.ctx.lineTo(e.targetNode.x-t/2,e.targetNode.y-i/2),s?(this.ctx.strokeStyle="rgba(129, 140, 248, 0.85)",this.ctx.lineWidth=2):(this.ctx.strokeStyle=e.type==="shares_topic"?"rgba(56, 189, 248, 0.18)":"rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=e.type==="contains"?1.2:.8),this.ctx.stroke()}for(let e of this.nodes){let s=e.x-t/2,n=e.y-i/2,a=this.hoveredNode?.id===e.id,c=this.hoveredNode&&!a&&!this.areNodesConnected(e,this.hoveredNode);this.ctx.save(),this.ctx.globalAlpha=c?.25:1,(e.type==="book"||a)&&(this.ctx.beginPath(),this.ctx.arc(s,n,e.radius+6,0,2*Math.PI),this.ctx.fillStyle=e.type==="book"?"rgba(99, 102, 241, 0.25)":"rgba(255, 255, 255, 0.2)",this.ctx.fill()),this.ctx.beginPath(),this.ctx.arc(s,n,e.radius,0,2*Math.PI),this.ctx.fillStyle=e.color,this.ctx.fill(),this.ctx.strokeStyle=a?"#ffffff":"rgba(255, 255, 255, 0.25)",this.ctx.lineWidth=a?2.5:1.2,this.ctx.stroke(),this.ctx.font=e.type==="book"?"bold 12px Inter, sans-serif":e.type==="topic"?"600 11px Inter, sans-serif":"10px Inter, sans-serif",this.ctx.fillStyle=a?"#ffffff":e.type==="book"?"#e0e7ff":"rgba(255, 255, 255, 0.85)",this.ctx.textAlign="center",this.ctx.textBaseline="top";let o=e.label;e.type==="highlight"&&o.length>24&&(o=o.substring(0,22)+"..."),this.ctx.fillText(o,s,n+e.radius+4),this.ctx.restore()}this.ctx.restore()}areNodesConnected(t,i){return this.links.some(e=>e.sourceNode?.id===t.id&&e.targetNode?.id===i.id||e.sourceNode?.id===i.id&&e.targetNode?.id===t.id)}getNodeAtPosition(t,i){let e=this.canvas.width/(window.devicePixelRatio||1),s=this.canvas.height/(window.devicePixelRatio||1),n=(t-this.offsetX)/this.scale+e/2,a=(i-this.offsetY)/this.scale+s/2;for(let c=this.nodes.length-1;c>=0;c--){let o=this.nodes[c],r=n-o.x,d=a-o.y;if(r*r+d*d<=(o.radius+4)*(o.radius+4))return o}return null}initEvents(){window.addEventListener("resize",()=>this.resize()),this.canvas.addEventListener("mousemove",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top;if(this.draggedNode){let a=this.canvas.width/(window.devicePixelRatio||1),c=this.canvas.height/(window.devicePixelRatio||1);this.draggedNode.x=(e-this.offsetX)/this.scale+a/2,this.draggedNode.y=(s-this.offsetY)/this.scale+c/2,this.alpha=Math.max(this.alpha,.3);return}if(this.isPanning){this.offsetX+=e-this.panStartX,this.offsetY+=s-this.panStartY,this.panStartX=e,this.panStartY=s;return}let n=this.getNodeAtPosition(e,s);this.hoveredNode=n,this.canvas.style.cursor=n?"pointer":"grab"}),this.canvas.addEventListener("mousedown",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,n=this.getNodeAtPosition(e,s);n?(this.draggedNode=n,n.isDragging=!0,this.alpha=.5):(this.isPanning=!0,this.panStartX=e,this.panStartY=s,this.canvas.style.cursor="grabbing")}),window.addEventListener("mouseup",t=>{this.draggedNode&&(this.draggedNode.isDragging=!1,this.draggedNode=null),this.isPanning=!1,this.canvas.style.cursor=this.hoveredNode?"pointer":"grab"}),this.canvas.addEventListener("click",t=>{let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,n=this.getNodeAtPosition(e,s);n&&this.onNodeClickCallback&&this.onNodeClickCallback(n)}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();let i=this.canvas.getBoundingClientRect(),e=t.clientX-i.left,s=t.clientY-i.top,n=t.deltaY<0?1.12:.88,a=Math.max(this.minScale,Math.min(this.maxScale,this.scale*n));this.offsetX=e-(e-this.offsetX)*(a/this.scale),this.offsetY=s-(s-this.offsetY)*(a/this.scale),this.scale=a},{passive:!1})}zoomIn(){this.scale=Math.min(this.maxScale,this.scale*1.25)}zoomOut(){this.scale=Math.max(this.minScale,this.scale*.8)}resetView(){let t=this.container.getBoundingClientRect();this.scale=1,this.offsetX=(t.width||800)/2,this.offsetY=(t.height||600)/2,this.alpha=1}togglePhysics(){return this.isSimulationRunning=!this.isSimulationRunning,this.isSimulationRunning}};var H=class{container;currentTab="highlights";onSelectHighlight;onSelectBook;onUpdateBookStatus;constructor(t,i){this.container=t,this.onSelectHighlight=i?.onSelectHighlight,this.onSelectBook=i?.onSelectBook,this.onUpdateBookStatus=i?.onUpdateBookStatus}render(t,i){this.container.innerHTML="";let e=document.createElement("div");e.className="cards-nav-header";let s=document.createElement("div");s.className="cards-subtabs",[{id:"highlights",label:`Highlights Grid (${i.length})`},{id:"books",label:`Books Shelf (${t.length})`},{id:"kanban",label:"Reading OS Kanban"}].forEach(c=>{let o=document.createElement("button");o.className=`subtab-btn ${this.currentTab===c.id?"active":""}`,o.setAttribute("data-subtab",c.id),o.textContent=c.label,o.addEventListener("click",()=>{this.currentTab=c.id,this.render(t,i)}),s.appendChild(o)}),e.appendChild(s),this.container.appendChild(e);let a=document.createElement("div");a.className="cards-content-body",this.currentTab==="highlights"?a.appendChild(this.createHighlightsGrid(i)):this.currentTab==="books"?a.appendChild(this.createBooksGrid(t)):this.currentTab==="kanban"&&a.appendChild(this.createKanbanBoard(t)),this.container.appendChild(a)}createHighlightsGrid(t){let i=document.createElement("div");if(i.className="highlights-card-grid",t.length===0){let e=document.createElement("div");return e.className="empty-state-card",e.innerHTML="<p>No highlights match the current filters.</p>",i.appendChild(e),i}return t.forEach(e=>{let s=document.createElement("article");s.className=`highlight-card color-border-${e.color}`;let n=e.color==="blue"?"tag-blue":e.color==="pink"?"tag-pink":e.color==="orange"?"tag-orange":"tag-yellow",a=e.color==="blue"?"Quote / Fact":e.color==="pink"?"Critical / Action":e.color==="orange"?"Concept / Story":"Key Insight";s.innerHTML=`
        <div class="card-meta-top">
          <span class="book-title-badge" title="${e.bookTitle}">\u{1F4D6} ${e.bookTitle}</span>
          <span class="loc-pill">${e.location?`Loc ${e.location}`:"Note"}</span>
        </div>
        <blockquote class="card-quote-text">\u201C${e.rawText}\u201D</blockquote>
        ${e.sourceNote?`<div class="card-note-box"><strong>\u270D\uFE0F Note:</strong> ${e.sourceNote}</div>`:""}
        ${e.interpretation?`<div class="card-interp-box"><strong>\u{1F9E0} Reflection:</strong> ${e.interpretation}</div>`:""}
        <div class="card-footer">
          <span class="${n}">${a}</span>
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
          ${e.tags&&e.tags.length>0?`<div class="book-tags-row">${e.tags.map(n=>`<span class="book-tag-chip">#${n}</span>`).join(" ")}</div>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(e.id)}),i.appendChild(s)}),i}createKanbanBoard(t){let i=document.createElement("div");return i.className="kanban-board-container",[{id:"reading",title:"Currently Reading",emoji:"\u{1F4D6}"},{id:"completed",title:"Completed & Processed",emoji:"\u2705"},{id:"want_to_read",title:"Want to Read",emoji:"\u{1F516}"}].forEach(s=>{let n=t.filter(r=>(r.status||"reading")===s.id),a=document.createElement("div");a.className="kanban-column";let c=document.createElement("div");c.className="kanban-col-header",c.innerHTML=`
        <span class="kanban-col-title">${s.emoji} ${s.title}</span>
        <span class="kanban-col-count">${n.length}</span>
      `,a.appendChild(c);let o=document.createElement("div");o.className="kanban-cards-stack",o.setAttribute("data-status",s.id),n.forEach(r=>{let d=document.createElement("div");d.className="kanban-book-item",d.innerHTML=`
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
        `;let p=d.querySelector(".kanban-status-select");p&&(p.addEventListener("click",l=>l.stopPropagation()),p.addEventListener("change",()=>{let l=p.value;this.onUpdateBookStatus&&this.onUpdateBookStatus(r.id,l)})),d.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(r.id)}),o.appendChild(d)}),a.appendChild(o),i.appendChild(a)}),i}};var M=class{container;currentHighlight=null;currentTheme="obsidian";currentRatio="1:1";canvas;ctx;constructor(){this.container=document.createElement("div"),this.container.className="quote-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.canvas=document.createElement("canvas");let t=this.canvas.getContext("2d");if(!t)throw new Error("Could not get 2D context for quote card.");this.ctx=t,this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `;let t=this.container.querySelector("#quote-canvas-mount");t&&t.appendChild(this.canvas),this.container.querySelector("#btn-close-quote-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.container.querySelectorAll(".theme-btn").forEach(i=>{i.addEventListener("click",()=>{let e=i.getAttribute("data-theme");e&&(this.currentTheme=e,this.container.querySelectorAll(".theme-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".ratio-btn").forEach(i=>{i.addEventListener("click",()=>{let e=i.getAttribute("data-ratio");e&&(this.currentRatio=e,this.container.querySelectorAll(".ratio-btn").forEach(s=>s.classList.remove("active")),i.classList.add("active"),this.renderCanvas())})}),this.container.querySelector("#btn-download-card-png")?.addEventListener("click",()=>this.downloadPNG())}open(t){this.currentHighlight=t,this.container.style.display="flex",this.renderCanvas()}close(){this.container.style.display="none"}renderCanvas(){if(!this.currentHighlight)return;let t=1200,i=1200;if(this.currentRatio==="9:16"?(t=1080,i=1920):this.currentRatio==="16:9"&&(t=1920,i=1080),this.canvas.width=t,this.canvas.height=i,this.currentTheme==="obsidian"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#090a0f"),l.addColorStop(.5,"#151828"),l.addColorStop(1,"#090a0f"),this.ctx.fillStyle=l}else if(this.currentTheme==="sunset"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#1f0d14"),l.addColorStop(.5,"#3b1122"),l.addColorStop(1,"#18080f"),this.ctx.fillStyle=l}else if(this.currentTheme==="emerald"){let l=this.ctx.createLinearGradient(0,0,t,i);l.addColorStop(0,"#061512"),l.addColorStop(.5,"#0b2923"),l.addColorStop(1,"#051310"),this.ctx.fillStyle=l}else this.ctx.fillStyle="#0a0a0d";this.ctx.fillRect(0,0,t,i);let e=this.currentTheme==="sunset"?"#f43f5e":this.currentTheme==="emerald"?"#10b981":this.currentTheme==="minimal"?"#64748b":"#818cf8";this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=2,this.ctx.strokeRect(40,40,t-80,i-80),this.ctx.font="bold 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle=e,this.ctx.fillText("HAKIM READING INTELLIGENCE",80,110),this.ctx.font="600 32px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",this.ctx.fillText(`\u{1F4D6} ${this.currentHighlight.bookTitle}`,80,160),this.ctx.font="bold 140px Georgia, serif",this.ctx.fillStyle=e,this.ctx.globalAlpha=.35,this.ctx.fillText("\u201C",75,300),this.ctx.globalAlpha=1;let s=t-180,n=t>1200?46:40,a=n*1.55;this.ctx.font=`italic 500 ${n}px Georgia, serif`,this.ctx.fillStyle="#ffffff";let c=this.currentHighlight.rawText.split(" "),o="",r=360;for(let l=0;l<c.length;l++){let u=o+c[l]+" ";this.ctx.measureText(u).width>s&&l>0?(this.ctx.fillText(o.trim(),90,r),o=c[l]+" ",r+=a):o=u}this.ctx.fillText(o.trim(),90,r),this.currentHighlight.sourceNote&&(r+=60,this.ctx.font="bold 28px -apple-system, Inter, sans-serif",this.ctx.fillStyle=e,this.ctx.fillText("\u270D\uFE0F Personal Reflection:",90,r),r+=40,this.ctx.font="italic 26px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.85)",this.ctx.fillText(`"${this.currentHighlight.sourceNote}"`,90,r));let d=i-100;this.ctx.font="500 24px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.5)";let p=this.currentHighlight.location?`Location ${this.currentHighlight.location}`:"Personal Note";this.ctx.fillText(p,90,d),this.ctx.textAlign="right",this.ctx.fillText("hakim.app",t-90,d),this.ctx.textAlign="left"}downloadPNG(){let t=this.canvas.toDataURL("image/png"),i=document.createElement("a");i.download=`hakim-quote-${this.currentHighlight?.bookTitle.toLowerCase().replace(/\s+/g,"-")||"card"}.png`,i.href=t,i.click()}};var N=class{backdrop;panel;currentHighlight=null;quoteModal;constructor(){this.quoteModal=new M,this.backdrop=document.createElement("div"),this.backdrop.className="slideover-backdrop",this.backdrop.style.display="none",this.panel=document.createElement("aside"),this.panel.className="slideover-panel",this.backdrop.appendChild(this.panel),document.body.appendChild(this.backdrop),this.initEvents()}initEvents(){this.backdrop.addEventListener("click",t=>{t.target===this.backdrop&&this.close()}),window.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()})}open(t){this.currentHighlight=t,this.render(),this.backdrop.style.display="flex",setTimeout(()=>this.panel.classList.add("open"),10)}close(){this.panel.classList.remove("open"),setTimeout(()=>{this.backdrop.style.display="none"},200)}render(){if(!this.currentHighlight)return;let t=this.currentHighlight,i=t.color==="blue"?"Quote / Fact":t.color==="pink"?"Critical / Action":t.color==="orange"?"Concept / Story":"Key Insight";this.panel.innerHTML=`
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

\u2014 **${t.bookTitle}** (Location ${t.location||0})`;navigator.clipboard&&(await navigator.clipboard.writeText(s),e&&(e.textContent="Copied to Clipboard!",setTimeout(()=>{e.textContent="Copy Quote & Citation"},2500)))})}};var B=class{container;deck=[];currentIndex=0;isFlipped=!1;stats={total:0,reviewed:0,mastered:0,hard:0};constructor(t){this.container=t,this.initKeyboardEvents()}setDeck(t){this.deck=[...t],this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}initKeyboardEvents(){window.addEventListener("keydown",t=>{this.container.style.display!=="none"&&(t.code==="Space"?(t.preventDefault(),this.flipCard()):t.key==="1"||t.key==="ArrowLeft"?this.isFlipped&&this.rateCard("hard"):t.key==="2"||t.key==="ArrowDown"?this.isFlipped&&this.rateCard("good"):(t.key==="3"||t.key==="ArrowRight")&&this.isFlipped&&this.rateCard("mastered"))})}flipCard(){this.isFlipped=!this.isFlipped;let t=this.container.querySelector(".flashcard-inner");t&&(this.isFlipped?t.classList.add("is-flipped"):t.classList.remove("is-flipped"))}rateCard(t){if(t==="hard"){if(this.stats.hard++,this.currentIndex<this.deck.length){let i=this.deck[this.currentIndex];this.deck.push(i)}}else t==="mastered"&&this.stats.mastered++;this.stats.reviewed++,this.currentIndex++,this.isFlipped=!1,this.render()}restart(){this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0},this.render()}render(){if(this.container.innerHTML="",this.deck.length===0){this.container.innerHTML=`
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
    `,e.querySelector("#btn-flip-card-front")?.addEventListener("click",()=>this.flipCard()),e.querySelector(".flashcard-scene")?.addEventListener("click",s=>{s.target.closest(".rating-btn")||this.flipCard()}),e.querySelectorAll(".rating-btn").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();let a=s.getAttribute("data-rate");a&&this.rateCard(a)})}),this.container.appendChild(e)}renderSummary(){let t=document.createElement("div");t.className="flashcard-summary-card";let i=this.stats.total>0?Math.round(this.stats.mastered/this.stats.total*100):100;t.innerHTML=`
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
    `,t.querySelector("#btn-restart-deck")?.addEventListener("click",()=>this.restart()),this.container.appendChild(t)}};var b=class h{static defaultBaseUrl="http://127.0.0.1:4242";static storageKey="hakim_engine_token";static getSavedToken(){try{return localStorage.getItem(h.storageKey)||""}catch{return""}}static saveToken(t){try{localStorage.setItem(h.storageKey,t.trim())}catch{}}static clearToken(){try{localStorage.removeItem(h.storageKey)}catch{}}static async checkHealth(t=h.defaultBaseUrl){try{let i=await fetch(`${t}/api/v1/health`,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)return{healthy:!1,error:`Engine responded with HTTP ${i.status}`};let e=await i.json();return{healthy:e.status==="healthy",version:e.version,booksCount:e.library?.books,annotCount:e.library?.annotations}}catch(i){return{healthy:!1,error:i instanceof Error?i.message:"Could not connect to local engine"}}}static async verifyPairing(t,i=h.defaultBaseUrl){try{return(await fetch(`${i}/api/v1/pair`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({token:t.trim()})})).ok?{success:!0}:{success:!1,error:"Invalid pairing token."}}catch(e){return{success:!1,error:e instanceof Error?e.message:"Network error connecting to engine"}}}static async fetchLibrary(t,i=h.defaultBaseUrl){try{let e=await fetch(`${i}/api/v1/library`,{method:"GET",headers:{Authorization:`Bearer ${t.trim()}`,Accept:"application/json"}});if(!e.ok)return{books:[],highlights:[],error:`Engine error: HTTP ${e.status}`};let s=await e.json();return{books:s.books||[],highlights:s.highlights||[]}}catch(e){let s=e instanceof Error?e.message:"Failed to fetch library from engine";return{books:[],highlights:[],error:s}}}};var $=class{container;store;statusBtn=null;isConnected=!1;constructor(t="btn-engine-status"){this.store=x.getInstance(),this.statusBtn=document.getElementById(t),this.container=document.createElement("div"),this.container.className="engine-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM(),this.checkInitialConnection()}initDOM(){let t=b.getSavedToken();this.container.innerHTML=`
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
    `,this.container.querySelector("#btn-close-engine-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.statusBtn&&this.statusBtn.addEventListener("click",()=>this.open()),this.container.querySelector("#btn-connect-engine")?.addEventListener("click",()=>this.handleConnect())}open(){this.container.style.display="flex",this.checkHealth()}close(){this.container.style.display="none"}async checkInitialConnection(){let t=await b.checkHealth();this.updateHealthUI(t);let i=b.getSavedToken();if(t.healthy&&i){let e=await b.fetchLibrary(i);e.books.length>0&&(this.store.loadCustomData(e.books,e.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${e.books.length} Books`))}}async checkHealth(){let t=await b.checkHealth();return this.updateHealthUI(t),t}updateHealthUI(t){let i=this.container.querySelector("#engine-status-box"),e=this.container.querySelector(".status-indicator-dot"),s=this.container.querySelector("#engine-status-text"),n=this.container.querySelector("#engine-substatus-text");t.healthy?(e&&(e.className="status-indicator-dot dot-emerald"),s&&(s.textContent=`\u25CF Engine Online (v${t.version||"1.0.0"})`),n&&(n.textContent=`SQLite Store: ${t.booksCount||0} books, ${t.annotCount||0} highlights available`),this.updateHeaderBadge(!0,"\u25CF Engine Online")):(e&&(e.className="status-indicator-dot dot-gray"),s&&(s.textContent="\u25CB Engine Offline or Not Running"),n&&(n.textContent="Start with: pnpm --filter @hakim/engine start"),this.updateHeaderBadge(!1,"\u25CB Engine Offline"))}updateHeaderBadge(t,i){if(this.statusBtn){this.statusBtn.className=`btn-engine-status ${t?"online":"offline"}`;let e=this.statusBtn.querySelector(".engine-status-label");e&&(e.textContent=i)}}async handleConnect(){let i=this.container.querySelector("#engine-token-input")?.value.trim()||"",e=this.container.querySelector("#engine-feedback-msg"),s=this.container.querySelector("#btn-connect-engine");if(!i){e&&(e.style.display="block",e.className="engine-feedback-msg error",e.textContent="Please enter a pairing token.");return}s&&(s.disabled=!0),e&&(e.style.display="block",e.className="engine-feedback-msg info",e.textContent="Verifying pairing and fetching SQLite library...");let n=await b.verifyPairing(i);if(!n.success){e&&(e.className="engine-feedback-msg error",e.textContent=n.error||"Authentication failed. Check your token."),s&&(s.disabled=!1);return}b.saveToken(i);let a=await b.fetchLibrary(i);if(a.error){e&&(e.className="engine-feedback-msg error",e.textContent=a.error),s&&(s.disabled=!1);return}this.store.loadCustomData(a.books,a.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${a.books.length} Books`),e&&(e.className="engine-feedback-msg success",e.textContent=`\u2713 Connected! Successfully loaded ${a.books.length} books and ${a.highlights.length} highlights.`),s&&(s.disabled=!1),setTimeout(()=>{this.close()},1200)}};var w=class h{static storageKey="hakim_ai_config";static getSavedConfig(){try{let t=localStorage.getItem(h.storageKey);if(t)return JSON.parse(t)}catch{}return{provider:"heuristic",modelName:"local-heuristic"}}static saveConfig(t){try{localStorage.setItem(h.storageKey,JSON.stringify(t))}catch{}}static async extractConceptClusters(t,i,e=h.getSavedConfig()){if(t.length===0)return[];if(e.provider!=="heuristic"&&e.apiKey&&e.endpoint)try{return await h.fetchLLMClusters(t,e)}catch(s){console.warn("LLM clustering failed, falling back to local heuristic:",s)}return h.heuristicClusterExtraction(t,i)}static async generateExecutiveSynthesis(t,i,e=h.getSavedConfig()){if(t.length===0)return{title:"No Highlights Selected",summary:"Please select or import highlights to generate an executive synthesis.",mentalModels:[],actionableTakeaways:[],sourceHighlightsCount:0};if(e.provider!=="heuristic"&&e.apiKey&&e.endpoint)try{return await h.fetchLLMSynthesis(t,i,e)}catch(s){console.warn("LLM synthesis failed, falling back to heuristic:",s)}return h.heuristicExecutiveSynthesis(t,i)}static async generateSocraticQuestions(t,i=h.getSavedConfig()){return t.length===0?[]:t.slice(0,10).map((e,s)=>{let n=e.rawText.trim(),a=n.split(".")[0]||n,c=`How does the principle of "${e.tags?.[0]||"this concept"}" in "${e.bookTitle}" apply to high-leverage decision making?`;return e.rawText.toLowerCase().includes("stoic")||e.rawText.toLowerCase().includes("discipline")?c=`According to ${e.bookTitle}, what is the distinction between internal control and external events?`:(e.rawText.toLowerCase().includes("system")||e.rawText.toLowerCase().includes("data"))&&(c=`What fundamental architectural trade-off is emphasized in "${e.bookTitle}" regarding this quote?`),{id:`q-${s}-${e.id}`,question:c,idealAnswer:e.interpretation||e.sourceNote||a,sourceHighlight:e.rawText,bookTitle:e.bookTitle}})}static heuristicClusterExtraction(t,i){let e=new Map;t.forEach(n=>{(n.tags&&n.tags.length>0?n.tags:h.extractKeywords(n.rawText)).forEach(c=>{let o=c.toLowerCase().trim();if(o.length<3)return;e.has(o)||e.set(o,{highlightIds:[],quotes:[],bookTitles:new Set});let r=e.get(o);r.highlightIds.push(n.id),r.quotes.push(n.rawText),r.bookTitles.add(n.bookTitle)})});let s=[];return e.forEach((n,a)=>{if(n.highlightIds.length>=2||n.bookTitles.size>=1){let c=a.charAt(0).toUpperCase()+a.slice(1);s.push({conceptName:`#${c}`,description:`Cross-cutting principle spanning ${n.bookTitles.size} books, connecting ${n.highlightIds.length} foundational passages.`,relatedBooks:Array.from(n.bookTitles),highlightIds:n.highlightIds,keyQuotes:n.quotes.slice(0,3)})}}),s.sort((n,a)=>a.highlightIds.length-n.highlightIds.length).slice(0,8)}static heuristicExecutiveSynthesis(t,i){let e=Array.from(new Set(t.map(p=>p.bookTitle))),s=i?`Executive Brief: ${i}`:`Reading Intelligence Synthesis (${e.length} Books)`,n=t.map(p=>p.rawText),a=n[0]||"",c=n[1]||n[0]||"",o=`Synthesizing ${t.length} core passages across ${e.join(", ")}. A recurring dialectic emerges: durable outcomes require foundational discipline and system-level fault tolerance rather than ad-hoc intervention. As captured in the literature: "${a.slice(0,140)}..."`,r=["First-Principles Invariance: Distinguish immutable physical or algorithmic laws from transient user assumptions.","Asymmetric Feedback Loops: Small habits and deterministic routines compound into resilient long-term architectures.","Cognitive Provenance: Preserving raw source observations alongside evolving human reflections prevents semantic drift."],d=[`Structure recurring review intervals for key passages in ${e[0]||"your library"}.`,"Translate abstract philosophical insights into concrete operational heuristics.","Anchor conceptual highlights into your Notion knowledge graph for permanent retrieval."];return{title:s,summary:o,mentalModels:r,actionableTakeaways:d,sourceHighlightsCount:t.length}}static extractKeywords(t){let i=new Set(["the","and","that","this","with","from","have","will","what","when","where","which","about","into","their","there","would","could","should","being","these","those"]),e=t.toLowerCase().replace(/[^\w\s]/g,"").split(/\s+/).filter(s=>s.length>4&&!i.has(s));return Array.from(new Set(e)).slice(0,3)}static async fetchLLMClusters(t,i){let e=`Analyze these ${t.length} reading highlights and group them into 3-6 thematic concept clusters. Return JSON only with format: [{"conceptName": string, "description": string, "relatedBooks": string[], "highlightIds": string[], "keyQuotes": string[]}]

Highlights:
${JSON.stringify(t.map(c=>({id:c.id,book:c.bookTitle,text:c.rawText})))}`,n=await(await fetch(i.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.apiKey}`},body:JSON.stringify({model:i.modelName||"gpt-4o-mini",messages:[{role:"user",content:e}],response_format:{type:"json_object"}})})).json(),a=JSON.parse(n.choices[0].message.content);return a.clusters||a}static async fetchLLMSynthesis(t,i,e){let s=`You are a world-class reading intelligence synthesizer. Synthesize these highlights into an executive brief. Return JSON only: {"title": string, "summary": string, "mentalModels": string[], "actionableTakeaways": string[]}

Highlights:
${JSON.stringify(t.map(o=>({book:o.bookTitle,text:o.rawText})))}`,a=await(await fetch(e.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e.apiKey}`},body:JSON.stringify({model:e.modelName||"gpt-4o-mini",messages:[{role:"user",content:s}],response_format:{type:"json_object"}})})).json();return{...JSON.parse(a.choices[0].message.content),sourceHighlightsCount:t.length}}};var A=class{container;store;activeTask="synthesis";constructor(){this.store=x.getInstance(),this.container=document.createElement("div"),this.container.className="ai-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `,this.container.querySelector("#btn-close-ai-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",t=>{t.target===this.container&&this.close()}),this.container.querySelectorAll(".ai-task-btn").forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("data-task");i&&(this.activeTask=i,this.container.querySelectorAll(".ai-task-btn").forEach(e=>e.classList.remove("active")),t.classList.add("active"),this.runActiveTask())})}),this.container.querySelector("#btn-re-synthesize")?.addEventListener("click",()=>this.runActiveTask()),this.container.querySelector("#btn-copy-ai-result")?.addEventListener("click",()=>this.copyMarkdown())}open(){this.container.style.display="flex",this.runActiveTask()}close(){this.container.style.display="none"}async runActiveTask(){let t=this.container.querySelector("#ai-results-stage");if(!t)return;t.innerHTML=`
      <div class="ai-loading-state">
        <span class="ai-spinner"></span>
        <p>Synthesizing insights and cognitive models...</p>
      </div>
    `;let i=this.store.getFilteredHighlights(),e=this.store.getState().books;if(this.activeTask==="synthesis"){let s=await w.generateExecutiveSynthesis(i);this.renderSynthesis(t,s)}else if(this.activeTask==="clusters"){let s=await w.extractConceptClusters(i,e);this.renderClusters(t,s)}else if(this.activeTask==="questions"){let s=await w.generateSocraticQuestions(i);this.renderQuestions(t,s)}}renderSynthesis(t,i){t.innerHTML=`
      <div class="synthesis-result-card">
        <h3 class="synthesis-title">${i.title}</h3>
        <p class="synthesis-summary">${i.summary}</p>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u{1F9E0} Core Mental Models</h4>
          <ul class="synthesis-list">
            ${i.mentalModels.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>

        <div class="synthesis-section">
          <h4 class="synthesis-section-title">\u26A1 Actionable Principles</h4>
          <ul class="synthesis-list">
            ${i.actionableTakeaways.map(e=>`<li>${e}</li>`).join("")}
          </ul>
        </div>
      </div>
    `}renderClusters(t,i){if(i.length===0){t.innerHTML='<p class="empty-state-text">No multi-book conceptual clusters found in the active filter.</p>';return}t.innerHTML=`
      <div class="clusters-grid">
        ${i.map(e=>`
          <div class="cluster-card">
            <div class="cluster-header">
              <span class="cluster-title">${e.conceptName}</span>
              <span class="cluster-count">${e.highlightIds.length} Highlights</span>
            </div>
            <p class="cluster-desc">${e.description}</p>
            <div class="cluster-books-row">
              ${e.relatedBooks.map(s=>`<span class="cluster-book-chip">\u{1F4D6} ${s}</span>`).join(" ")}
            </div>
            <blockquote class="cluster-quote">\u201C${e.keyQuotes[0]?.slice(0,140)||""}...\u201D</blockquote>
          </div>
        `).join("")}
      </div>
    `}renderQuestions(t,i){if(i.length===0){t.innerHTML='<p class="empty-state-text">No questions generated. Add more highlights to your library.</p>';return}t.innerHTML=`
      <div class="questions-list">
        ${i.map((e,s)=>`
          <div class="question-item">
            <div class="question-header">
              <span class="question-badge">Prompt #${s+1}</span>
              <span class="question-book">\u{1F4D6} ${e.bookTitle}</span>
            </div>
            <h4 class="question-text">${e.question}</h4>
            <div class="question-ideal-box">
              <strong>\u{1F4A1} Ideal Answer / Principle:</strong> ${e.idealAnswer}
            </div>
          </div>
        `).join("")}
      </div>
    `}copyMarkdown(){let i=this.container.querySelector("#ai-results-stage")?.innerText||"";if(navigator.clipboard){navigator.clipboard.writeText(i);let e=this.container.querySelector("#btn-copy-ai-result span");e&&(e.textContent="Copied to Clipboard!",setTimeout(()=>{e.textContent="Copy Markdown Synthesis"},2e3))}}};var q=class{store;graphEngine=null;cardsComponent=null;flashcardsComponent=null;slideover=null;engineBridge=null;aiModal=null;constructor(){this.store=x.getInstance(),this.init()}init(){let t=document.getElementById("graph-container");t&&(this.graphEngine=new L(t,g=>{this.handleNodeClick(g)}));let i=document.getElementById("cards-container");i&&(this.cardsComponent=new H(i,{onSelectHighlight:g=>this.store.selectHighlight(g),onSelectBook:g=>this.store.selectBook(g),onUpdateBookStatus:(g,m)=>this.store.updateBookStatus(g,m)}));let e=document.getElementById("flashcards-container");e&&(this.flashcardsComponent=new B(e)),this.slideover=new N,this.engineBridge=new $("btn-engine-status"),this.aiModal=new A;let s=document.getElementById("btn-ai-synthesis");s&&s.addEventListener("click",()=>this.aiModal?.open()),this.store.subscribe(g=>this.render(g));let n=document.getElementById("search-input");n&&n.addEventListener("input",()=>{this.store.setSearchQuery(n.value)});let a=document.getElementById("dataset-select");a&&a.addEventListener("change",()=>{a.value==="demo"&&this.store.loadDemoData()}),document.querySelectorAll(".view-btn").forEach(g=>{g.addEventListener("click",()=>{let m=g.getAttribute("data-view");m&&this.store.setView(m)})}),document.querySelectorAll(".color-dot-btn").forEach(g=>{g.addEventListener("click",()=>{let m=g.getAttribute("data-color");m&&this.store.toggleColorFilter(m)})});let r=document.getElementById("btn-graph-zoom-in"),d=document.getElementById("btn-graph-zoom-out"),p=document.getElementById("btn-graph-reset"),l=document.getElementById("btn-graph-physics");r&&r.addEventListener("click",()=>this.graphEngine?.zoomIn()),d&&d.addEventListener("click",()=>this.graphEngine?.zoomOut()),p&&p.addEventListener("click",()=>this.graphEngine?.resetView()),l&&l.addEventListener("click",()=>{let g=this.graphEngine?.togglePhysics();l.classList.toggle("active",g)});let u=document.getElementById("file-upload-input"),v=document.getElementById("btn-upload-file");v&&u&&(v.addEventListener("click",()=>u.click()),u.addEventListener("change",async()=>{let g=u.files?.[0];if(!g)return;let m=await g.text();if(g.name.endsWith(".json")){let f=S.parseJsonSnapshot(m);this.store.loadCustomData(f.books,f.highlights,"custom_file")}else{let f=S.parseMyClippings(m);this.store.loadCustomData(f.books,f.highlights,"custom_file")}}))}handleNodeClick(t){if(t.type==="book")this.store.selectBook(t.id===this.store.getState().filters.selectedBookId?null:t.id);else if(t.type==="highlight"){let i=this.store.getState().highlights.find(e=>e.id===t.id);i&&this.store.selectHighlight(i)}}render(t){let i=document.getElementById("graph-container"),e=document.getElementById("cards-container"),s=document.getElementById("flashcards-container"),n=document.querySelector(".graph-toolbar");if(t.selectedHighlight&&this.slideover&&this.slideover.open(t.selectedHighlight),t.activeView==="graph")i&&(i.style.display="block"),e&&(e.style.display="none"),s&&(s.style.display="none"),n&&(n.style.display="flex"),this.graphEngine&&this.graphEngine.setData(t.graphData);else if(t.activeView==="cards"){if(i&&(i.style.display="none"),e&&(e.style.display="block"),s&&(s.style.display="none"),n&&(n.style.display="none"),this.cardsComponent){let l=this.store.getFilteredHighlights();this.cardsComponent.render(t.books,l)}}else if(t.activeView==="flashcards"&&(i&&(i.style.display="none"),e&&(e.style.display="none"),s&&(s.style.display="flex"),n&&(n.style.display="none"),this.flashcardsComponent)){let l=this.store.getFilteredHighlights();this.flashcardsComponent.setDeck(l)}let a=document.getElementById("sidebar-book-list");if(a){a.innerHTML="";let l=document.createElement("button");l.className=`book-item-btn ${t.filters.selectedBookId===null?"active":""}`,l.innerHTML=`<span>All Library Highlights</span> <span class="book-count-badge">${t.highlights.length}</span>`,l.addEventListener("click",()=>this.store.selectBook(null)),a.appendChild(l),t.books.forEach(u=>{let v=document.createElement("button");v.className=`book-item-btn ${t.filters.selectedBookId===u.id?"active":""}`,v.innerHTML=`<span>\u{1F4D6} ${u.title}</span> <span class="book-count-badge">${u.highlightsCount}</span>`,v.addEventListener("click",()=>this.store.selectBook(u.id)),a.appendChild(v)})}document.querySelectorAll(".view-btn").forEach(l=>{l.getAttribute("data-view")===t.activeView?l.classList.add("active"):l.classList.remove("active")}),document.querySelectorAll(".color-dot-btn").forEach(l=>{let u=l.getAttribute("data-color");u&&t.filters.selectedColors.has(u)?l.classList.add("active"):l.classList.remove("active")});let r=document.getElementById("hud-nodes-count"),d=document.getElementById("hud-links-count"),p=document.getElementById("hud-filtered-count");r&&(r.textContent=String(t.graphData.nodes.length)),d&&(d.textContent=String(t.graphData.links.length)),p&&(p.textContent=String(this.store.getFilteredHighlights().length))}};document.addEventListener("DOMContentLoaded",()=>{new q,console.log("\u26A1 Hakim Reading Intelligence Web Client Initialized.")});
