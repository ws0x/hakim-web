var F=[{id:"book-1",asin:"B00ZUX90S4",title:"Designing Data-Intensive Applications",author:"Martin Kleppmann",highlightsCount:6,tags:["Software Architecture","Distributed Systems","Reliability"],status:"reading"},{id:"book-2",asin:"B01862ES3A",title:"The Daily Stoic",author:"Ryan Holiday",highlightsCount:6,tags:["Philosophy","Stoicism","Mindset"],status:"completed"},{id:"book-3",asin:"B07D23CFGR",title:"Atomic Habits",author:"James Clear",highlightsCount:5,tags:["Productivity","Habit Formation","Systems Thinking"],status:"completed"},{id:"book-4",asin:"B004J4XGN6",title:"Thinking, Fast and Slow",author:"Daniel Kahneman",highlightsCount:5,tags:["Psychology","Cognitive Biases","Decision Making"],status:"reading"},{id:"book-5",asin:"B001GSTOAM",title:"Clean Code",author:"Robert C. Martin",highlightsCount:4,tags:["Software Craftsmanship","Refactoring","Clean Code"],status:"completed"}],z=[{id:"hl-101",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Reliability means continuing to work correctly (performing the correct function at the desired level of performance) even in the face of adversity (hardware or software faults, and even human error).",location:120,color:"yellow",importance:"Essential",tags:["Reliability","Software Architecture"],sourceNote:"Core definition of software reliability.",interpretation:"A system is not truly reliable if it only works under ideal conditions."},{id:"hl-102",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Scalability is the term we use to describe a system's ability to cope with increased load.",location:245,color:"blue",importance:"High",tags:["Distributed Systems"]},{id:"hl-103",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Maintainability means many different people will work on the system over time, and they should all be able to work on it productively.",location:380,color:"pink",importance:"High",tags:["Clean Code","Software Architecture"]},{id:"hl-104",bookId:"book-1",bookTitle:"Designing Data-Intensive Applications",rawText:"Behind every fault-tolerant system is a set of carefully reasoned invariants.",location:512,color:"orange",importance:"Essential",tags:["Distributed Systems"]},{id:"hl-201",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control.",location:45,color:"yellow",importance:"Essential",tags:["Stoicism","Mindset"],sourceNote:"Epictetus' Dichotomy of Control.",interpretation:"Direct energy only towards intentional choices, never external outcomes."},{id:"hl-202",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"You have power over your mind - not outside events. Realize this, and you will find strength.",location:190,color:"yellow",importance:"High",tags:["Stoicism","Psychology"]},{id:"hl-203",bookId:"book-2",bookTitle:"The Daily Stoic",rawText:"Waste no more time arguing what a good person should be. Be one.",location:320,color:"pink",importance:"Essential",tags:["Philosophy"]},{id:"hl-301",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"You do not rise to the level of your goals. You fall to the level of your systems.",location:110,color:"yellow",importance:"Essential",tags:["Systems Thinking","Habit Formation"],interpretation:"Focus on designing frictionless recurring routines rather than obsessing over end milestones."},{id:"hl-302",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Every action you take is a vote for the type of person you wish to become.",location:280,color:"orange",importance:"High",tags:["Habit Formation","Mindset"]},{id:"hl-303",bookId:"book-3",bookTitle:"Atomic Habits",rawText:"Make it obvious, make it attractive, make it easy, make it satisfying.",location:450,color:"blue",importance:"Essential",tags:["Productivity"]},{id:"hl-401",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 1 operates automatically and quickly, with little or no effort and no sense of voluntary control.",location:80,color:"yellow",importance:"High",tags:["Cognitive Biases","Psychology"]},{id:"hl-402",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"System 2 allocates attention to the effortful mental operations that demand it, including complex computations.",location:140,color:"blue",importance:"High",tags:["Cognitive Biases","Decision Making"]},{id:"hl-403",bookId:"book-4",bookTitle:"Thinking, Fast and Slow",rawText:"We are prone to overestimate how much we understand about the world and to underestimate the role of chance.",location:390,color:"pink",importance:"Essential",tags:["Decision Making","Mindset"]},{id:"hl-501",bookId:"book-5",bookTitle:"Clean Code",rawText:"Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",location:95,color:"yellow",importance:"Essential",tags:["Clean Code","Software Craftsmanship"]},{id:"hl-502",bookId:"book-5",bookTitle:"Clean Code",rawText:"Leave the campground cleaner than you found it. The Boy Scout Rule.",location:210,color:"pink",importance:"Essential",tags:["Refactoring","Clean Code"],sourceNote:"Apply incremental continuous cleanup to every PR."}];var T=class{static COLOR_PALETTE={book:"#818cf8",topic:"#38bdf8",author:"#c084fc",yellowHighlight:"#fcd34d",blueHighlight:"#67e8f9",pinkHighlight:"#fda4af",orangeHighlight:"#fdba74"};static buildGraph(e,i,t){let s=[],n=[],o=new Set,l=new Map;for(let a=0;a<e.length;a++){let r=e[a];if(s.push({id:r.id,label:r.title,type:"book",group:1,size:Math.max(16,Math.min(32,14+r.highlightsCount*2)),color:this.COLOR_PALETTE.book,bookTitle:r.title}),o.add(r.id),r.tags)for(let c of r.tags)l.set(c,(l.get(c)||0)+1)}for(let[a,r]of l.entries()){let c=`topic-${a.toLowerCase().replace(/\s+/g,"-")}`;s.push({id:c,label:`#${a}`,type:"topic",group:2,size:Math.max(12,Math.min(24,10+r*3)),color:this.COLOR_PALETTE.topic}),o.add(c);for(let d of e)d.tags?.includes(a)&&n.push({source:d.id,target:c,type:"shares_topic",strength:.7})}for(let a of i){if(t&&!t.has(a.id))continue;let r=this.COLOR_PALETTE.yellowHighlight;a.color==="blue"?r=this.COLOR_PALETTE.blueHighlight:a.color==="pink"?r=this.COLOR_PALETTE.pinkHighlight:a.color==="orange"&&(r=this.COLOR_PALETTE.orangeHighlight);let c=a.location!==void 0?`Loc ${a.location}`:"Note",d=a.rawText.substring(0,36)+(a.rawText.length>36?"...":"");if(s.push({id:a.id,label:`${c}: ${d}`,type:"highlight",group:3,size:a.importance==="Essential"?10:7,color:r,bookId:a.bookId,bookTitle:a.bookTitle,rawText:a.rawText,note:a.sourceNote,location:a.location,importance:a.importance}),o.add(a.id),o.has(a.bookId)&&n.push({source:a.bookId,target:a.id,type:"contains",strength:.9}),a.tags)for(let h of a.tags){let g=`topic-${h.toLowerCase().replace(/\s+/g,"-")}`;o.has(g)&&n.push({source:a.id,target:g,type:"shares_topic",strength:.4})}}return{nodes:s,links:n}}};var k=class u{static instance;listeners=new Set;state={books:F,highlights:z,filters:{searchQuery:"",selectedBookId:null,selectedColors:new Set(["yellow","blue","pink","orange"]),selectedImportance:new Set(["Essential","High","Medium","Low"]),selectedTopics:new Set},graphData:{nodes:[],links:[]},activeView:"graph",selectedHighlight:null,isLoading:!1,activeDataset:"demo"};constructor(){this.recomputeGraph()}static getInstance(){return u.instance||(u.instance=new u),u.instance}getState(){return this.state}subscribe(e){return this.listeners.add(e),e(this.state),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e(this.state)}setView(e){this.state.activeView=e,this.notify()}selectHighlight(e){this.state.selectedHighlight=e,this.notify()}setSearchQuery(e){this.state.filters.searchQuery=e.toLowerCase().trim(),this.recomputeGraph(),this.notify()}selectBook(e){this.state.filters.selectedBookId=e,this.recomputeGraph(),this.notify()}toggleColorFilter(e){this.state.filters.selectedColors.has(e)?this.state.filters.selectedColors.delete(e):this.state.filters.selectedColors.add(e),this.recomputeGraph(),this.notify()}loadCustomData(e,i,t){this.state.books=e,this.state.highlights=i,this.state.activeDataset=t,this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}updateBookStatus(e,i){let t=this.state.books.find(s=>s.id===e);t&&(t.status=i,this.notify())}updateHighlightInterpretation(e,i){let t=this.state.highlights.find(s=>s.id===e);t&&(t.interpretation=i,this.notify())}loadDemoData(){this.state.books=F,this.state.highlights=z,this.state.activeDataset="demo",this.state.filters.selectedBookId=null,this.state.filters.searchQuery="",this.recomputeGraph(),this.notify()}getFilteredHighlights(){let{searchQuery:e,selectedBookId:i,selectedColors:t,selectedImportance:s}=this.state.filters;return this.state.highlights.filter(n=>{if(i&&n.bookId!==i||t.size>0&&!t.has(n.color)||n.importance&&s.size>0&&!s.has(n.importance))return!1;if(e){let o=n.rawText.toLowerCase().includes(e),l=n.bookTitle.toLowerCase().includes(e),a=n.sourceNote?.toLowerCase().includes(e),r=n.tags?.some(c=>c.toLowerCase().includes(e));if(!o&&!l&&!a&&!r)return!1}return!0})}recomputeGraph(){let e=this.getFilteredHighlights(),i=new Set(e.map(t=>t.id));this.state.graphData=T.buildGraph(this.state.books,this.state.highlights,i)}};function j(u){if(!u)return"";let e={"&quot;":'"',"&amp;":"&","&apos;":"'","&lt;":"<","&gt;":">","&nbsp;":" ","&laquo;":"\xAB","&raquo;":"\xBB","&mdash;":"\u2014","&ndash;":"\u2013","&hellip;":"\u2026","&lsquo;":"'","&rsquo;":"'","&ldquo;":'"',"&rdquo;":'"',"&lsaquo;":"\u2039","&rsaquo;":"\u203A","&trade;":"\u2122","&copy;":"\xA9","&reg;":"\xAE","&bull;":"\u2022","&middot;":"\xB7","&prime;":"\u2032","&Prime;":"\u2033"};return u.replace(/&[a-zA-Z]+;/g,i=>e[i.toLowerCase()]??i).replace(/&#(\d+);/g,(i,t)=>{try{return String.fromCodePoint(parseInt(t,10))}catch{return i}}).replace(/&#x([a-fA-F0-9]+);/g,(i,t)=>{try{return String.fromCodePoint(parseInt(t,16))}catch{return i}})}function L(u){return u?j(u).normalize("NFKC").replace(/[\u200B-\u200D\uFEFF\u00AD\u200E\u200F]/g,"").replace(/[\u2018\u2019]/g,"'").replace(/[\u201C\u201D]/g,'"').replace(/[\u2013\u2014]/g,"-").replace(/\s+/g," ").trim():""}function Y(u){return u?L(u).replace(/\s*\((?:Kindle Edition|English Edition|Arabic Edition)\)/gi,"").trim():"Untitled"}function V(u){if(!u)return"Unknown Author";let e=L(u);if(e.includes(",")&&!e.includes(";")){let i=e.split(",").map(t=>t.trim());i.length===2&&i[0]&&i[1]&&(e=`${i[1]} ${i[0]}`)}return e}var C=class{static parseMyClippings(e){let i=e.split(/==========/),t=new Map,s=[];for(let n=0;n<i.length;n++){let o=i[n]?.trim();if(!o)continue;let l=o.split(/\r?\n/).map(E=>E.trim()).filter(Boolean);if(l.length<3)continue;let a=l[0],r=a.match(/\(([^)]+)\)$/),c=a,d="Unknown Author";r&&r[1]&&(d=r[1].trim(),c=a.substring(0,a.lastIndexOf("(")).trim());let h=Y(c),g=V(d),f=`${h}:::${g}`,b=t.get(f);b||(b={id:`book-${t.size+1}`,title:h,author:g,highlightsCount:0,status:"reading"},t.set(f,b));let p=l[1],m,v=p.match(/Location\s+(\d+)/i)||p.match(/page\s+(\d+)/i);v&&v[1]&&(m=parseInt(v[1],10));let y="yellow";/yellow/i.test(p)?y="yellow":/blue/i.test(p)?y="blue":/pink/i.test(p)?y="pink":/orange/i.test(p)&&(y="orange");let S=l.slice(2).join(" ");S&&(b.highlightsCount++,s.push({id:`hl-import-${s.length+1}`,bookId:b.id,bookTitle:b.title,rawText:L(S),location:m,color:y,importance:"Medium",status:"Inbox"}))}return{books:Array.from(t.values()),highlights:s}}static parseJsonSnapshot(e){try{let i=JSON.parse(e);if(Array.isArray(i.books)&&Array.isArray(i.highlights))return{books:i.books,highlights:i.highlights};throw new Error("Invalid Hakim JSON snapshot structure.")}catch(i){throw new Error(`Failed to parse JSON file: ${i instanceof Error?i.message:"Invalid JSON"}`)}}};var H=class{canvas;ctx;container;nodes=[];links=[];nodeMap=new Map;alpha=1;alphaMin=5e-4;alphaDecay=.018;isSimulationRunning=!0;config={gravity:.04,repulsion:550,linkDistance:110,linkStrength:.15,damping:.85,nodeSizeMultiplier:1,showLabels:!0,showParticles:!0};scale=1;minScale=.15;maxScale=5;offsetX=0;offsetY=0;targetScale=null;targetOffsetX=null;targetOffsetY=null;isPanning=!1;panStartX=0;panStartY=0;hoveredNode=null;selectedNode=null;draggedNode=null;onNodeClickCallback;starfieldGrid=[];animationFrameId=null;hudElement=null;constructor(e,i){this.container=e,this.onNodeClickCallback=i,this.canvas=document.createElement("canvas"),this.canvas.className="graph-canvas",this.container.appendChild(this.canvas);let t=this.canvas.getContext("2d");if(!t)throw new Error("Could not get 2D context from canvas.");this.ctx=t,this.initStarfield(),this.resize(),this.initEvents(),this.createObsidianHUD()}initStarfield(){this.starfieldGrid=[];for(let e=0;e<120;e++)this.starfieldGrid.push({x:(Math.random()-.5)*4e3,y:(Math.random()-.5)*4e3,opacity:.15+Math.random()*.35,size:.8+Math.random()*1.5})}setData(e){let i=this.canvas.width/(window.devicePixelRatio||1),t=this.canvas.height/(window.devicePixelRatio||1);this.nodeMap.clear(),this.nodes=e.nodes.map((s,n)=>{let o=this.nodes.find(d=>d.id===s.id),l=n/Math.max(1,e.nodes.length)*2*Math.PI,a=s.type==="book"?140:s.type==="topic"?240:320+n%6*25,r=s.size||(s.type==="book"?24:s.type==="topic"?16:8),c={...s,x:o?o.x:i/2+Math.cos(l)*a+(Math.random()-.5)*50,y:o?o.y:t/2+Math.sin(l)*a+(Math.random()-.5)*50,vx:o?o.vx:(Math.random()-.5)*2,vy:o?o.vy:(Math.random()-.5)*2,radius:r};return this.nodeMap.set(s.id,c),c}),this.links=e.links.map(s=>({...s,sourceNode:this.nodeMap.get(typeof s.source=="string"?s.source:s.source.id),targetNode:this.nodeMap.get(typeof s.target=="string"?s.target:s.target.id)})),this.alpha=1,this.startSimulation()}resize(){let e=this.container.getBoundingClientRect(),i=window.devicePixelRatio||1,t=e.width||800,s=e.height||600;this.canvas.width=t*i,this.canvas.height=s*i,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${s}px`,this.ctx.scale(i,i),this.offsetX===0&&this.offsetY===0&&(this.offsetX=t/2,this.offsetY=s/2)}startSimulation(){this.animationFrameId!==null&&cancelAnimationFrame(this.animationFrameId);let e=()=>{this.targetScale!==null&&this.targetOffsetX!==null&&this.targetOffsetY!==null&&(this.scale+=(this.targetScale-this.scale)*.12,this.offsetX+=(this.targetOffsetX-this.offsetX)*.12,this.offsetY+=(this.targetOffsetY-this.offsetY)*.12,Math.abs(this.scale-this.targetScale)<.005&&Math.abs(this.offsetX-this.targetOffsetX)<.5&&Math.abs(this.offsetY-this.targetOffsetY)<.5&&(this.scale=this.targetScale,this.offsetX=this.targetOffsetX,this.offsetY=this.targetOffsetY,this.targetScale=null,this.targetOffsetX=null,this.targetOffsetY=null)),this.isSimulationRunning&&this.tick(),this.render(),this.animationFrameId=requestAnimationFrame(e)};this.animationFrameId=requestAnimationFrame(e)}tick(){if(this.alpha<this.alphaMin)return;let e=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1),t=e/2,s=i/2,n=this.config.gravity*this.alpha;for(let a of this.nodes)a.vx+=(t-a.x)*n,a.vy+=(s-a.y)*n;let o=this.config.repulsion*this.alpha;for(let a=0;a<this.nodes.length;a++){let r=this.nodes[a];for(let c=a+1;c<this.nodes.length;c++){let d=this.nodes[c],h=d.x-r.x,g=d.y-r.y,f=h*h+g*g;f===0&&(f=1);let b=Math.sqrt(f),p=(r.radius+d.radius)*this.config.nodeSizeMultiplier+20,m=r.type==="book"||d.type==="book"?3:1.2,v=o/f*m,y=h/b*v,S=g/b*v;if(r.isDragging||(r.vx-=y,r.vy-=S),d.isDragging||(d.vx+=y,d.vy+=S),b<p){let E=(p-b)*.6*this.alpha,U=h/b*E,G=g/b*E;r.isDragging||(r.x-=U,r.y-=G),d.isDragging||(d.x+=U,d.y+=G)}}}for(let a of this.links){if(!a.sourceNode||!a.targetNode)continue;let r=a.sourceNode,c=a.targetNode,d=c.x-r.x,h=c.y-r.y,g=Math.sqrt(d*d+h*h)||1,f=a.type==="contains"?this.config.linkDistance:this.config.linkDistance*1.6,b=(a.strength||.5)*this.config.linkStrength*this.alpha,p=(g-f)*b,m=d/g*p,v=h/g*p;r.isDragging||(r.vx+=m,r.vy+=v),c.isDragging||(c.vx-=m,c.vy-=v)}let l=this.config.damping;for(let a of this.nodes)a.isDragging||(a.vx*=l,a.vy*=l,a.x+=a.vx,a.y+=a.vy);this.alpha+=(0-this.alpha)*this.alphaDecay}render(){let e=this.canvas.width/(window.devicePixelRatio||1),i=this.canvas.height/(window.devicePixelRatio||1);if(this.ctx.fillStyle="#0a0d14",this.ctx.fillRect(0,0,e,i),this.ctx.save(),this.ctx.translate(this.offsetX,this.offsetY),this.ctx.scale(this.scale,this.scale),this.config.showParticles){this.ctx.fillStyle="rgba(255, 255, 255, 0.25)";for(let t of this.starfieldGrid)this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size/this.scale,0,2*Math.PI),this.ctx.globalAlpha=t.opacity,this.ctx.fill();this.ctx.globalAlpha=1}for(let t of this.links){if(!t.sourceNode||!t.targetNode)continue;let s=this.hoveredNode&&(t.sourceNode.id===this.hoveredNode.id||t.targetNode.id===this.hoveredNode.id)||this.selectedNode&&(t.sourceNode.id===this.selectedNode.id||t.targetNode.id===this.selectedNode.id),n=(this.hoveredNode||this.selectedNode)&&!s;this.ctx.beginPath(),this.ctx.moveTo(t.sourceNode.x-e/2,t.sourceNode.y-i/2),this.ctx.lineTo(t.targetNode.x-e/2,t.targetNode.y-i/2),s?(this.ctx.strokeStyle="rgba(168, 85, 247, 0.9)",this.ctx.lineWidth=2.2/Math.sqrt(this.scale),this.ctx.shadowColor="rgba(168, 85, 247, 0.8)",this.ctx.shadowBlur=8):(this.ctx.shadowBlur=0,this.ctx.strokeStyle=n?"rgba(255, 255, 255, 0.02)":t.type==="shares_topic"?"rgba(56, 189, 248, 0.22)":"rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=(t.type==="contains"?1.2:.8)/Math.sqrt(this.scale)),this.ctx.stroke(),this.ctx.shadowBlur=0}for(let t of this.nodes){let s=t.x-e/2,n=t.y-i/2,o=t.radius*this.config.nodeSizeMultiplier,l=this.hoveredNode?.id===t.id,a=this.selectedNode?.id===t.id,r=this.hoveredNode&&this.areNodesConnected(t,this.hoveredNode)||this.selectedNode&&this.areNodesConnected(t,this.selectedNode),c=(this.hoveredNode||this.selectedNode)&&!l&&!a&&!r;if(this.ctx.save(),this.ctx.globalAlpha=c?.12:1,t.type==="book"||t.type==="topic"||l||a){let h=o+(t.type==="book"?10:6),g=this.ctx.createRadialGradient(s,n,o*.6,s,n,h),f=t.type==="book"?"rgba(168, 85, 247, 0.35)":t.type==="topic"?"rgba(56, 189, 248, 0.35)":"rgba(255, 255, 255, 0.3)";g.addColorStop(0,f),g.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.beginPath(),this.ctx.arc(s,n,h,0,2*Math.PI),this.ctx.fillStyle=g,this.ctx.fill()}if((t.type==="book"||a)&&(this.ctx.beginPath(),this.ctx.arc(s,n,o+4,0,2*Math.PI),this.ctx.strokeStyle=a?"#38bdf8":"rgba(168, 85, 247, 0.6)",this.ctx.lineWidth=1.8/Math.sqrt(this.scale),this.ctx.stroke()),this.ctx.beginPath(),this.ctx.arc(s,n,o,0,2*Math.PI),this.ctx.fillStyle=t.color,this.ctx.fill(),this.ctx.strokeStyle=l||a?"#ffffff":"rgba(255, 255, 255, 0.35)",this.ctx.lineWidth=(l?2.5:1.2)/Math.sqrt(this.scale),this.ctx.stroke(),this.config.showLabels&&(t.type==="book"||t.type==="topic"||l||a||r||this.scale>.85)){let h=t.type==="book"?13:t.type==="topic"?11.5:10;this.ctx.font=`${t.type==="book"?"700":"600"} ${h/Math.sqrt(this.scale)}px Inter, sans-serif`,this.ctx.textAlign="center",this.ctx.textBaseline="top";let g=t.label;t.type==="highlight"&&g.length>24&&(g=g.substring(0,22)+"...");let f=n+o+4/Math.sqrt(this.scale);this.ctx.fillStyle="rgba(10, 13, 20, 0.75)";let b=this.ctx.measureText(g),p=4/Math.sqrt(this.scale),m=2/Math.sqrt(this.scale),v=h/Math.sqrt(this.scale);this.ctx.fillRect(s-b.width/2-p,f-m,b.width+p*2,v+m*2),this.ctx.fillStyle=l||a?"#ffffff":t.type==="book"?"#f1f5f9":"rgba(255, 255, 255, 0.85)",this.ctx.fillText(g,s,f)}this.ctx.restore()}this.ctx.restore()}areNodesConnected(e,i){return this.links.some(t=>t.sourceNode?.id===e.id&&t.targetNode?.id===i.id||t.sourceNode?.id===i.id&&t.targetNode?.id===e.id)}getNodeAtPosition(e,i){let t=this.canvas.width/(window.devicePixelRatio||1),s=this.canvas.height/(window.devicePixelRatio||1),n=(e-this.offsetX)/this.scale+t/2,o=(i-this.offsetY)/this.scale+s/2;for(let l=this.nodes.length-1;l>=0;l--){let a=this.nodes[l],r=n-a.x,c=o-a.y,d=a.radius*this.config.nodeSizeMultiplier+6;if(r*r+c*c<=d*d)return a}return null}flyToNode(e,i=1.8){let t=this.canvas.width/(window.devicePixelRatio||1),s=this.canvas.height/(window.devicePixelRatio||1);this.targetScale=i,this.targetOffsetX=t/2-(e.x-t/2)*i,this.targetOffsetY=s/2-(e.y-s/2)*i,this.selectedNode=e}createObsidianHUD(){this.hudElement=document.createElement("div"),this.hudElement.className="obsidian-graph-hud",this.hudElement.innerHTML=`
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
            <input type="range" id="slider-repulsion" min="100" max="1200" value="${this.config.repulsion}" />
          </div>
          <div class="hud-slider-group">
            <label>Link Distance <span id="val-distance">${this.config.linkDistance}</span></label>
            <input type="range" id="slider-distance" min="40" max="260" value="${this.config.linkDistance}" />
          </div>
          <div class="hud-slider-group">
            <label>Center Gravity <span id="val-gravity">${Math.round(this.config.gravity*100)}</span></label>
            <input type="range" id="slider-gravity" min="1" max="15" value="${Math.round(this.config.gravity*100)}" />
          </div>
        </div>

        <div class="hud-section">
          <span class="hud-section-label">Display</span>
          <div class="hud-toggle-row">
            <label><input type="checkbox" id="chk-labels" ${this.config.showLabels?"checked":""} /> Show Labels</label>
            <label><input type="checkbox" id="chk-particles" ${this.config.showParticles?"checked":""} /> Starfield Grid</label>
          </div>
        </div>

        <div class="hud-actions-row">
          <button id="btn-reset-camera" class="btn-hud-action">Reset View</button>
          <button id="btn-toggle-sim" class="btn-hud-action">Freeze</button>
        </div>
      </div>
    `,this.container.appendChild(this.hudElement);let e=this.hudElement.querySelector("#btn-toggle-hud"),i=this.hudElement.querySelector(".hud-body");e?.addEventListener("click",()=>{i&&(i.style.display=i.style.display==="none"?"flex":"none",e.textContent=i.style.display==="none"?"+":"\u2014")});let t=this.hudElement.querySelector("#slider-repulsion");t?.addEventListener("input",()=>{this.config.repulsion=Number(t.value);let r=this.hudElement?.querySelector("#val-repulsion");r&&(r.textContent=t.value),this.alpha=Math.max(this.alpha,.4)});let s=this.hudElement.querySelector("#slider-distance");s?.addEventListener("input",()=>{this.config.linkDistance=Number(s.value);let r=this.hudElement?.querySelector("#val-distance");r&&(r.textContent=s.value),this.alpha=Math.max(this.alpha,.4)});let n=this.hudElement.querySelector("#slider-gravity");n?.addEventListener("input",()=>{this.config.gravity=Number(n.value)/100;let r=this.hudElement?.querySelector("#val-gravity");r&&(r.textContent=n.value),this.alpha=Math.max(this.alpha,.4)});let o=this.hudElement.querySelector("#chk-labels");o?.addEventListener("change",()=>{this.config.showLabels=o.checked});let l=this.hudElement.querySelector("#chk-particles");l?.addEventListener("change",()=>{this.config.showParticles=l.checked}),this.hudElement.querySelector("#btn-reset-camera")?.addEventListener("click",()=>this.resetView());let a=this.hudElement.querySelector("#btn-toggle-sim");a?.addEventListener("click",()=>{let r=this.togglePhysics();a&&(a.textContent=r?"Freeze":"Unfreeze")})}initEvents(){window.addEventListener("resize",()=>this.resize()),this.canvas.addEventListener("mousemove",t=>{let s=this.canvas.getBoundingClientRect(),n=t.clientX-s.left,o=t.clientY-s.top;if(this.draggedNode){let a=this.canvas.width/(window.devicePixelRatio||1),r=this.canvas.height/(window.devicePixelRatio||1);this.draggedNode.x=(n-this.offsetX)/this.scale+a/2,this.draggedNode.y=(o-this.offsetY)/this.scale+r/2,this.alpha=Math.max(this.alpha,.4);return}if(this.isPanning){this.offsetX+=n-this.panStartX,this.offsetY+=o-this.panStartY,this.panStartX=n,this.panStartY=o;return}let l=this.getNodeAtPosition(n,o);this.hoveredNode=l,this.canvas.style.cursor=l?"pointer":"grab"}),this.canvas.addEventListener("mousedown",t=>{let s=this.canvas.getBoundingClientRect(),n=t.clientX-s.left,o=t.clientY-s.top,l=this.getNodeAtPosition(n,o);l?(this.draggedNode=l,l.isDragging=!0,this.alpha=.6):(this.isPanning=!0,this.panStartX=n,this.panStartY=o,this.canvas.style.cursor="grabbing")}),window.addEventListener("mouseup",t=>{this.draggedNode&&(this.draggedNode.isDragging=!1,this.draggedNode=null),this.isPanning=!1,this.canvas.style.cursor=this.hoveredNode?"pointer":"grab"}),this.canvas.addEventListener("click",t=>{let s=this.canvas.getBoundingClientRect(),n=t.clientX-s.left,o=t.clientY-s.top,l=this.getNodeAtPosition(n,o);l?(this.flyToNode(l),this.onNodeClickCallback&&this.onNodeClickCallback(l)):this.selectedNode=null}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();let s=this.canvas.getBoundingClientRect(),n=t.clientX-s.left,o=t.clientY-s.top,l=t.deltaY<0?1.14:.86,a=Math.max(this.minScale,Math.min(this.maxScale,this.scale*l));this.offsetX=n-(n-this.offsetX)*(a/this.scale),this.offsetY=o-(o-this.offsetY)*(a/this.scale),this.scale=a},{passive:!1});let e=null,i=1;this.canvas.addEventListener("touchstart",t=>{if(t.touches.length===1){let s=t.touches[0],n=this.canvas.getBoundingClientRect(),o=s.clientX-n.left,l=s.clientY-n.top,a=this.getNodeAtPosition(o,l);a?(this.draggedNode=a,a.isDragging=!0,this.alpha=.6):(this.isPanning=!0,this.panStartX=o,this.panStartY=l)}else if(t.touches.length===2){let s=t.touches[0],n=t.touches[1];e=Math.hypot(n.clientX-s.clientX,n.clientY-s.clientY),i=this.scale}},{passive:!0}),this.canvas.addEventListener("touchmove",t=>{if(t.touches.length===1){let s=t.touches[0],n=this.canvas.getBoundingClientRect(),o=s.clientX-n.left,l=s.clientY-n.top;if(this.draggedNode){let a=this.canvas.width/(window.devicePixelRatio||1),r=this.canvas.height/(window.devicePixelRatio||1);this.draggedNode.x=(o-this.offsetX)/this.scale+a/2,this.draggedNode.y=(l-this.offsetY)/this.scale+r/2,this.alpha=Math.max(this.alpha,.4);return}this.isPanning&&(this.offsetX+=o-this.panStartX,this.offsetY+=l-this.panStartY,this.panStartX=o,this.panStartY=l)}else if(t.touches.length===2&&e!==null){let s=t.touches[0],n=t.touches[1],l=Math.hypot(n.clientX-s.clientX,n.clientY-s.clientY)/e;this.scale=Math.max(this.minScale,Math.min(this.maxScale,i*l))}},{passive:!0}),this.canvas.addEventListener("touchend",()=>{this.draggedNode&&(this.draggedNode.isDragging=!1,this.draggedNode=null),this.isPanning=!1,e=null})}zoomIn(){this.scale=Math.min(this.maxScale,this.scale*1.25)}zoomOut(){this.scale=Math.max(this.minScale,this.scale*.8)}resetView(){let e=this.container.getBoundingClientRect();this.scale=1,this.targetScale=null,this.targetOffsetX=null,this.targetOffsetY=null,this.offsetX=(e.width||800)/2,this.offsetY=(e.height||600)/2,this.selectedNode=null,this.alpha=1}togglePhysics(){return this.isSimulationRunning=!this.isSimulationRunning,this.isSimulationRunning&&(this.alpha=.5),this.isSimulationRunning}};var I=class{container;currentTab="highlights";onSelectHighlight;onSelectBook;onUpdateBookStatus;onOpenQuoteCard;constructor(e,i){this.container=e,this.onSelectHighlight=i?.onSelectHighlight,this.onSelectBook=i?.onSelectBook,this.onUpdateBookStatus=i?.onUpdateBookStatus,this.onOpenQuoteCard=i?.onOpenQuoteCard}render(e,i){this.container.innerHTML="";let t=document.createElement("div");t.className="cards-nav-header";let s=document.createElement("div");s.className="cards-subtabs",[{id:"highlights",label:`Highlights (${i.length})`,icon:"\u{1F4AC}"},{id:"books",label:`Book Shelf (${e.length})`,icon:"\u{1F4DA}"},{id:"kanban",label:"Reading OS Kanban",icon:"\u{1F4CA}"}].forEach(l=>{let a=document.createElement("button");a.className=`subtab-btn ${this.currentTab===l.id?"active":""}`,a.setAttribute("data-subtab",l.id),a.innerHTML=`<span>${l.icon}</span> <span>${l.label}</span>`,a.addEventListener("click",()=>{this.currentTab=l.id,this.render(e,i)}),s.appendChild(a)}),t.appendChild(s),this.container.appendChild(t);let o=document.createElement("div");o.className="cards-content-body",this.currentTab==="highlights"?o.appendChild(this.createHighlightsGrid(i)):this.currentTab==="books"?o.appendChild(this.createBooksGrid(e)):this.currentTab==="kanban"&&o.appendChild(this.createKanbanBoard(e)),this.container.appendChild(o)}createHighlightsGrid(e){let i=document.createElement("div");if(i.className="highlights-masonry-grid",e.length===0){let t=document.createElement("div");return t.className="empty-state-editorial",t.innerHTML=`
        <div class="empty-icon-ring">\u{1F50D}</div>
        <h3>No Highlights Found</h3>
        <p>No annotations match your active search filters or selected book.</p>
      `,i.appendChild(t),i}return e.forEach(t=>{let s=document.createElement("article");s.className=`editorial-highlight-card color-rail-${t.color}`;let n=t.color==="blue"?"Quote / Fact":t.color==="pink"?"Critical / Action":t.color==="orange"?"Thematic / Story":"Key Insight";s.innerHTML=`
        <div class="card-meta-row">
          <span class="card-book-badge" title="${this.escapeHtml(t.bookTitle)}">\u{1F4D6} ${this.escapeHtml(t.bookTitle)}</span>
          <span class="card-loc-pill">${t.location?`Loc ${t.location}`:"Note"}</span>
        </div>

        <blockquote class="editorial-quote">\u201C${this.escapeHtml(t.rawText)}\u201D</blockquote>

        ${t.sourceNote?`<div class="editorial-note-box"><strong>\u270D\uFE0F Note:</strong> ${this.escapeHtml(t.sourceNote)}</div>`:""}
        ${t.interpretation?`<div class="editorial-reflection-box"><strong>\u{1F9E0} Reflection:</strong> ${this.escapeHtml(t.interpretation)}</div>`:""}

        <div class="editorial-card-footer">
          <div class="card-tag-group">
            <span class="card-tag-pill tag-${t.color}">${n}</span>
            ${t.importance?`<span class="importance-badge imp-${t.importance.toLowerCase()}">${t.importance}</span>`:""}
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
      `;let o=s.querySelector(".btn-copy-quote");o?.addEventListener("click",a=>{a.stopPropagation();let r=`> "${t.rawText}"
> \u2014 **${t.bookTitle}** (Loc ${t.location||"N/A"})`;navigator.clipboard?.writeText(r),o.innerHTML='<span style="color:#10b981;font-size:11px;font-weight:700;">\u2713</span>',setTimeout(()=>{o.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>'},1500)}),s.querySelector(".btn-artboard-quote")?.addEventListener("click",a=>{a.stopPropagation(),this.onOpenQuoteCard?this.onOpenQuoteCard(t):this.onSelectHighlight&&this.onSelectHighlight(t)}),s.addEventListener("click",()=>{this.onSelectHighlight&&this.onSelectHighlight(t)}),i.appendChild(s)}),i}createBooksGrid(e){let i=document.createElement("div");return i.className="books-shelf-grid",e.forEach(t=>{let s=document.createElement("article");s.className="book-shelf-card",s.innerHTML=`
        <div class="book-cover-placeholder">
          <span class="book-cover-emoji">\u{1F4D6}</span>
        </div>
        <div class="book-shelf-details">
          <h3 class="book-shelf-title">${this.escapeHtml(t.title)}</h3>
          <p class="book-shelf-author">By ${this.escapeHtml(t.author)}</p>
          <div class="book-shelf-stats">
            <span>\u{1F4A1} <strong>${t.highlightsCount}</strong> Highlights</span>
            <span class="status-pill status-${t.status||"reading"}">${t.status||"reading"}</span>
          </div>
          ${t.tags&&t.tags.length>0?`<div class="book-tags-row">${t.tags.map(n=>`<span class="book-tag-chip">#${this.escapeHtml(n)}</span>`).join(" ")}</div>`:""}
        </div>
      `,s.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(t.id)}),i.appendChild(s)}),i}createKanbanBoard(e){let i=document.createElement("div");return i.className="kanban-board-container",[{id:"reading",title:"Currently Reading",emoji:"\u{1F4D6}"},{id:"completed",title:"Completed & Processed",emoji:"\u2705"},{id:"want_to_read",title:"Want to Read",emoji:"\u{1F516}"}].forEach(s=>{let n=e.filter(r=>(r.status||"reading")===s.id),o=document.createElement("div");o.className="kanban-column";let l=document.createElement("div");l.className="kanban-col-header",l.innerHTML=`
        <span class="kanban-col-title">${s.emoji} ${s.title}</span>
        <span class="kanban-col-count">${n.length}</span>
      `,o.appendChild(l);let a=document.createElement("div");a.className="kanban-cards-stack",a.setAttribute("data-status",s.id),n.forEach(r=>{let c=document.createElement("div");c.className="kanban-book-item",c.innerHTML=`
          <h4 class="kanban-item-title">${this.escapeHtml(r.title)}</h4>
          <p class="kanban-item-author">${this.escapeHtml(r.author)}</p>
          <div class="kanban-item-meta">
            <span>\u{1F4A1} ${r.highlightsCount} notes</span>
            <select class="kanban-status-select" aria-label="Change status">
              <option value="reading" ${r.status==="reading"?"selected":""}>Reading</option>
              <option value="completed" ${r.status==="completed"?"selected":""}>Completed</option>
              <option value="want_to_read" ${r.status==="want_to_read"?"selected":""}>Want to Read</option>
            </select>
          </div>
        `;let d=c.querySelector(".kanban-status-select");d&&(d.addEventListener("click",h=>h.stopPropagation()),d.addEventListener("change",()=>{let h=d.value;this.onUpdateBookStatus&&this.onUpdateBookStatus(r.id,h)})),c.addEventListener("click",()=>{this.onSelectBook&&this.onSelectBook(r.id)}),a.appendChild(c)}),o.appendChild(a),i.appendChild(o)}),i}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};var M=class{container;currentHighlight=null;currentTheme="obsidian";currentRatio="1:1";fontStyle="serif";textAlign="left";fontSize=44;canvas;ctx;constructor(){this.container=document.createElement("div"),this.container.className="quote-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.canvas=document.createElement("canvas");let e=this.canvas.getContext("2d");if(!e)throw new Error("Could not get 2D context for quote card.");this.ctx=e,this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `;let e=this.container.querySelector("#quote-canvas-mount");e&&e.appendChild(this.canvas),this.container.querySelector("#btn-close-quote-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",t=>{t.target===this.container&&this.close()}),this.container.querySelectorAll(".theme-btn").forEach(t=>{t.addEventListener("click",()=>{let s=t.getAttribute("data-theme");s&&(this.currentTheme=s,this.container.querySelectorAll(".theme-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".ratio-btn").forEach(t=>{t.addEventListener("click",()=>{let s=t.getAttribute("data-ratio");s&&(this.currentRatio=s,this.container.querySelectorAll(".ratio-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".typo-toggle-btn").forEach(t=>{t.addEventListener("click",()=>{let s=t.getAttribute("data-font");s&&(this.fontStyle=s,this.container.querySelectorAll(".typo-toggle-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.renderCanvas())})}),this.container.querySelectorAll(".align-btn").forEach(t=>{t.addEventListener("click",()=>{let s=t.getAttribute("data-align");s&&(this.textAlign=s,this.container.querySelectorAll(".align-btn").forEach(n=>n.classList.remove("active")),t.classList.add("active"),this.renderCanvas())})});let i=this.container.querySelector("#slider-font-size");i?.addEventListener("input",()=>{this.fontSize=Number(i.value);let t=this.container.querySelector("#label-font-size");t&&(t.textContent=`${this.fontSize}px`),this.renderCanvas()}),this.container.querySelector("#btn-copy-card-image")?.addEventListener("click",()=>this.copyToClipboard()),this.container.querySelector("#btn-download-card-png")?.addEventListener("click",()=>this.downloadPNG())}open(e){this.currentHighlight=e,this.container.style.display="flex",this.renderCanvas()}close(){this.container.style.display="none"}renderCanvas(){if(!this.currentHighlight)return;let e=1200,i=1200;if(this.currentRatio==="9:16"?(e=1080,i=1920):this.currentRatio==="16:9"?(e=1920,i=1080):this.currentRatio==="4:5"&&(e=1080,i=1350),this.canvas.width=e,this.canvas.height=i,this.currentTheme==="obsidian"){let p=this.ctx.createLinearGradient(0,0,e,i);p.addColorStop(0,"#080b12"),p.addColorStop(.5,"#151829"),p.addColorStop(1,"#07090e"),this.ctx.fillStyle=p}else if(this.currentTheme==="sunset"){let p=this.ctx.createLinearGradient(0,0,e,i);p.addColorStop(0,"#1c0b14"),p.addColorStop(.5,"#3d1425"),p.addColorStop(1,"#18070f"),this.ctx.fillStyle=p}else if(this.currentTheme==="emerald"){let p=this.ctx.createLinearGradient(0,0,e,i);p.addColorStop(0,"#051411"),p.addColorStop(.5,"#0a2b24"),p.addColorStop(1,"#04110e"),this.ctx.fillStyle=p}else this.ctx.fillStyle="#0c1017";this.ctx.fillRect(0,0,e,i);let t=this.currentTheme==="sunset"?"#f43f5e":this.currentTheme==="emerald"?"#10b981":this.currentTheme==="minimal"?"#38bdf8":"#a855f7",s=this.ctx.createRadialGradient(e/2,i/2,50,e/2,i/2,e*.6);s.addColorStop(0,this.currentTheme==="sunset"?"rgba(244, 63, 94, 0.15)":this.currentTheme==="emerald"?"rgba(16, 185, 129, 0.15)":"rgba(168, 85, 247, 0.18)"),s.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=s,this.ctx.fillRect(0,0,e,i),this.ctx.strokeStyle="rgba(255, 255, 255, 0.08)",this.ctx.lineWidth=2,this.ctx.strokeRect(40,40,e-80,i-80),this.ctx.textAlign="left",this.ctx.font="700 24px -apple-system, Inter, sans-serif",this.ctx.fillStyle=t,this.ctx.fillText("HAKIM INTELLIGENCE",80,105),this.ctx.font="600 30px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.75)",this.ctx.fillText(`\u{1F4D6} ${this.currentHighlight.bookTitle}`,80,155),this.ctx.font="bold 130px Georgia, serif",this.ctx.fillStyle=t,this.ctx.globalAlpha=.35,this.ctx.fillText("\u201C",75,280),this.ctx.globalAlpha=1;let n=90,o=e-n*2,l=this.fontSize*1.55,a=this.fontStyle==="serif"?"Newsreader, Georgia, serif":"Inter, -apple-system, sans-serif";this.ctx.font=`italic 500 ${this.fontSize}px ${a}`,this.ctx.fillStyle="#ffffff",this.ctx.textAlign=this.textAlign;let r=this.currentHighlight.rawText.split(" "),c=[],d="";for(let p=0;p<r.length;p++){let m=d+r[p]+" ";this.ctx.measureText(m).width>o&&p>0?(c.push(d.trim()),d=r[p]+" "):d=m}c.push(d.trim());let h=c.length*l,g=Math.max(340,(i-h)/2);c.forEach(p=>{let m=this.textAlign==="center"?e/2:this.textAlign==="right"?e-n:n;this.ctx.fillText(p,m,g),g+=l});let f=i-90;this.ctx.textAlign="left",this.ctx.font="500 22px -apple-system, Inter, sans-serif",this.ctx.fillStyle="rgba(255, 255, 255, 0.45)";let b=this.currentHighlight.location?`Location ${this.currentHighlight.location}`:"Personal Annotation";this.ctx.fillText(b,n,f),this.ctx.textAlign="right",this.ctx.fillText("hakim-reading.vercel.app",e-n,f),this.ctx.textAlign="left"}async copyToClipboard(){let e=this.container.querySelector("#txt-copy-image");if(!navigator.clipboard||!window.ClipboardItem){e&&(e.textContent="Clipboard API not supported in browser");return}try{this.canvas.toBlob(async i=>{i&&(await navigator.clipboard.write([new ClipboardItem({"image/png":i})]),e&&(e.textContent="\u2713 Image Copied to Clipboard!",setTimeout(()=>{e.textContent="Copy Image to Clipboard"},2200)))})}catch{e&&(e.textContent="Error copying image")}}downloadPNG(){let e=this.canvas.toDataURL("image/png"),i=document.createElement("a");i.download=`hakim-quote-${this.currentHighlight?.bookTitle.toLowerCase().replace(/\s+/g,"-")||"card"}.png`,i.href=e,i.click()}};var $=class{backdrop;panel;currentHighlight=null;quoteModal;store;constructor(){this.store=k.getInstance(),this.quoteModal=new M,this.backdrop=document.createElement("div"),this.backdrop.className="slideover-backdrop",this.backdrop.style.display="none",this.panel=document.createElement("aside"),this.panel.className="slideover-panel",this.backdrop.appendChild(this.panel),document.body.appendChild(this.backdrop),this.initEvents()}initEvents(){this.backdrop.addEventListener("click",e=>{e.target===this.backdrop&&this.close()}),window.addEventListener("keydown",e=>{e.key==="Escape"&&this.backdrop.style.display!=="none"&&this.close()})}open(e){this.currentHighlight=e,this.render(),this.backdrop.style.display="flex",setTimeout(()=>this.panel.classList.add("open"),10)}close(){this.panel.classList.remove("open"),setTimeout(()=>{this.backdrop.style.display="none"},220)}render(){if(!this.currentHighlight)return;let e=this.currentHighlight,i=e.color==="blue"?"Quote / Fact":e.color==="pink"?"Critical / Action":e.color==="orange"?"Concept / Story":"Key Insight";this.panel.innerHTML=`
      <div class="slideover-header">
        <div class="slideover-title-row">
          <span class="slideover-book-badge" title="${this.escapeHtml(e.bookTitle)}">\u{1F4D6} ${this.escapeHtml(e.bookTitle)}</span>
          <button id="btn-close-slideover" class="btn-drawer-close" aria-label="Close drawer">&times;</button>
        </div>
        <div class="slideover-meta-row">
          <span class="loc-tag">${e.location?`Loc ${e.location}`:"Note"}</span>
          <span class="color-tag color-${e.color}">${i}</span>
          ${e.importance?`<span class="importance-tag imp-${e.importance.toLowerCase()}">${e.importance} Priority</span>`:""}
        </div>
      </div>

      <div class="slideover-body">
        <!-- Quote Inspection Box -->
        <div class="quote-inspection-card">
          <blockquote class="inspection-quote-text">\u201C${this.escapeHtml(e.rawText)}\u201D</blockquote>
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
            <code id="citation-text-content">${this.generateCitation(e,"obsidian")}</code>
            <button id="btn-copy-active-citation" class="btn-copy-citation" title="Copy Citation">Copy</button>
          </div>
        </div>

        <!-- Kindle Note -->
        ${e.sourceNote?`
          <div class="inspection-section">
            <h4 class="section-label">\u270D\uFE0F Kindle Note</h4>
            <div class="note-box">${this.escapeHtml(e.sourceNote)}</div>
          </div>
        `:""}

        <!-- Live Reflection Editor -->
        <div class="inspection-section">
          <div class="section-header-row">
            <h4 class="section-label">\u{1F9E0} Personal Reflection & Mental Model</h4>
            <span id="save-status-indicator" class="save-status">Saved</span>
          </div>
          <textarea id="drawer-reflection-input" class="drawer-reflection-editor" placeholder="Write your thoughts, synthesized insights, or practical applications...">${e.interpretation||""}</textarea>
        </div>

        <!-- Topics & Concept Chips -->
        ${e.tags&&e.tags.length>0?`
          <div class="inspection-section">
            <h4 class="section-label">\u{1F3F7}\uFE0F Topics & Concepts</h4>
            <div class="tags-cluster">
              ${e.tags.map(c=>`<span class="topic-chip">#${this.escapeHtml(c)}</span>`).join(" ")}
            </div>
          </div>
        `:""}
      </div>

      <div class="slideover-footer">
        <button id="btn-open-quote-card" class="btn btn-primary btn-full">
          <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
          </svg>
          <span>Open Social Quote Studio</span>
        </button>
      </div>
    `,this.panel.querySelector("#btn-close-slideover")?.addEventListener("click",()=>this.close()),this.panel.querySelector("#btn-open-quote-card")?.addEventListener("click",()=>{this.currentHighlight&&this.quoteModal.open(this.currentHighlight)});let t="obsidian",s=this.panel.querySelector("#citation-text-content"),n=this.panel.querySelectorAll(".btn-cite-format");n.forEach(c=>{c.addEventListener("click",()=>{n.forEach(d=>d.classList.remove("active")),c.classList.add("active"),t=c.getAttribute("data-fmt")||"obsidian",s&&(s.textContent=this.generateCitation(e,t))})});let o=this.panel.querySelector("#btn-copy-active-citation");o?.addEventListener("click",async()=>{let c=s?.textContent||"";navigator.clipboard&&(await navigator.clipboard.writeText(c),o&&(o.textContent="Copied!",o.style.color="#10b981",setTimeout(()=>{o.textContent="Copy",o.style.color=""},1800)))});let l=this.panel.querySelector("#drawer-reflection-input"),a=this.panel.querySelector("#save-status-indicator"),r=null;l?.addEventListener("input",()=>{a&&(a.textContent="Saving..."),clearTimeout(r),r=setTimeout(()=>{this.currentHighlight&&(this.currentHighlight.interpretation=l.value,this.store.updateHighlightInterpretation(this.currentHighlight.id,l.value),a&&(a.textContent="Saved"))},500)})}generateCitation(e,i){let t=e.location?`Loc ${e.location}`:"Personal Note";switch(i){case"obsidian":return`> "${e.rawText}"
> \u2014 [[Books/${e.bookTitle}#^hl-${e.id}]]`;case"apa":return`"${e.rawText}" (${e.bookTitle}, ${t}).`;case"mla":return`"${e.rawText}." *${e.bookTitle}*, Kindle ed., ${t}.`;case"chicago":return`"${e.rawText}," *${e.bookTitle}* (Kindle ed.), ${t}.`;default:return`> "${e.rawText}"
> \u2014 **${e.bookTitle}** (${t})`}}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};var A=class{container;deck=[];currentIndex=0;isFlipped=!1;stats={total:0,reviewed:0,mastered:0,hard:0,currentStreak:0,bestStreak:0};constructor(e){this.container=e,this.initKeyboardEvents()}setDeck(e){this.deck=[...e],this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0,currentStreak:0,bestStreak:0},this.render()}initKeyboardEvents(){window.addEventListener("keydown",e=>{this.container.style.display!=="none"&&(e.code==="Space"?(e.preventDefault(),this.flipCard()):e.key==="1"||e.key==="ArrowLeft"?this.isFlipped&&this.rateCard("hard"):e.key==="2"||e.key==="ArrowDown"?this.isFlipped&&this.rateCard("good"):(e.key==="3"||e.key==="ArrowRight")&&this.isFlipped&&this.rateCard("mastered"))})}flipCard(){this.isFlipped=!this.isFlipped;let e=this.container.querySelector(".flashcard-inner");e&&(this.isFlipped?e.classList.add("is-flipped"):e.classList.remove("is-flipped"))}rateCard(e){if(e==="hard"){if(this.stats.hard++,this.stats.currentStreak=0,this.currentIndex<this.deck.length){let i=this.deck[this.currentIndex];this.deck.push(i)}}else e==="good"?(this.stats.currentStreak++,this.stats.bestStreak=Math.max(this.stats.bestStreak,this.stats.currentStreak)):e==="mastered"&&(this.stats.mastered++,this.stats.currentStreak++,this.stats.bestStreak=Math.max(this.stats.bestStreak,this.stats.currentStreak));this.stats.reviewed++,this.currentIndex++,this.isFlipped=!1,this.render()}shuffle(){for(let e=this.deck.length-1;e>this.currentIndex;e--){let i=this.currentIndex+Math.floor(Math.random()*(e-this.currentIndex+1)),t=this.deck[e];this.deck[e]=this.deck[i],this.deck[i]=t}this.render()}restart(){this.currentIndex=0,this.isFlipped=!1,this.stats={total:this.deck.length,reviewed:0,mastered:0,hard:0,currentStreak:0,bestStreak:0},this.render()}render(){if(this.container.innerHTML="",this.deck.length===0){this.container.innerHTML=`
        <div class="empty-flashcards-box">
          <p>No highlights in this library to review. Add or import highlights first!</p>
        </div>
      `;return}if(this.currentIndex>=this.deck.length){this.renderSummary();return}let e=this.deck[this.currentIndex],i=Math.round(this.currentIndex/this.deck.length*100),t=document.createElement("div");t.className="flashcard-stage",t.innerHTML=`
      <!-- Progress Bar & Streak Info -->
      <div class="flashcard-progress-bar-wrapper">
        <div class="flashcard-progress-info">
          <span>Card <strong>${this.currentIndex+1}</strong> of <strong>${this.deck.length}</strong></span>
          <span class="flashcard-streak-badge">${this.stats.currentStreak>1?`\u{1F525} ${this.stats.currentStreak} Streak`:`${i}% Complete`}</span>
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
              <span class="flashcard-book-badge">\u{1F4D6} ${this.escapeHtml(e.bookTitle)}</span>
              <span class="flashcard-hint-badge">\u{1F4A1} Active Recall Prompt</span>
            </div>
            <div class="flashcard-body">
              <p class="flashcard-prompt-label">What is the core insight or cognitive principle behind this quote?</p>
              <blockquote class="flashcard-prompt-quote">\u201C${this.escapeHtml(e.rawText)}\u201D</blockquote>
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
              <span class="flashcard-book-badge">\u{1F4D6} ${this.escapeHtml(e.bookTitle)}</span>
              <span class="flashcard-loc-pill">${e.location?`Loc ${e.location}`:"Note"}</span>
            </div>
            <div class="flashcard-body">
              <div class="flashcard-back-section">
                <h4 class="section-sublabel">Original Highlight</h4>
                <p class="flashcard-back-quote">\u201C${this.escapeHtml(e.rawText)}\u201D</p>
              </div>

              ${e.sourceNote?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u270D\uFE0F Your Note</h4>
                  <p class="flashcard-back-note">${this.escapeHtml(e.sourceNote)}</p>
                </div>
              `:""}

              ${e.interpretation?`
                <div class="flashcard-back-section">
                  <h4 class="section-sublabel">\u{1F9E0} Hakim Concept Takeaway</h4>
                  <p class="flashcard-back-interp">${this.escapeHtml(e.interpretation)}</p>
                </div>
              `:""}
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
    `,t.querySelector("#btn-flip-card-front")?.addEventListener("click",()=>this.flipCard()),t.querySelector(".flashcard-scene")?.addEventListener("click",s=>{s.target.closest(".rating-btn")||this.flipCard()}),t.querySelectorAll(".rating-btn").forEach(s=>{s.addEventListener("click",n=>{n.stopPropagation();let o=s.getAttribute("data-rate");o&&this.rateCard(o)})}),this.container.appendChild(t)}renderSummary(){let e=document.createElement("div");e.className="flashcard-summary-card";let i=this.stats.total>0?Math.round(this.stats.mastered/this.stats.total*100):100;e.innerHTML=`
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
    `,e.querySelector("#btn-restart-deck")?.addEventListener("click",()=>this.restart()),this.container.appendChild(e)}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};var w=class u{static defaultBaseUrl="http://127.0.0.1:4242";static storageKey="hakim_engine_token";static getSavedToken(){try{return localStorage.getItem(u.storageKey)||""}catch{return""}}static saveToken(e){try{localStorage.setItem(u.storageKey,e.trim())}catch{}}static clearToken(){try{localStorage.removeItem(u.storageKey)}catch{}}static async checkHealth(e=u.defaultBaseUrl){try{let i=await fetch(`${e}/api/v1/health`,{method:"GET",headers:{Accept:"application/json"}});if(!i.ok)return{healthy:!1,error:`Engine responded with HTTP ${i.status}`};let t=await i.json();return{healthy:t.status==="healthy",version:t.version,booksCount:t.library?.books,annotCount:t.library?.annotations}}catch(i){return{healthy:!1,error:i instanceof Error?i.message:"Could not connect to local engine"}}}static async verifyPairing(e,i=u.defaultBaseUrl){try{return(await fetch(`${i}/api/v1/pair`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({token:e.trim()})})).ok?{success:!0}:{success:!1,error:"Invalid pairing token."}}catch(t){return{success:!1,error:t instanceof Error?t.message:"Network error connecting to engine"}}}static async fetchLibrary(e,i=u.defaultBaseUrl){try{let t=await fetch(`${i}/api/v1/library`,{method:"GET",headers:{Authorization:`Bearer ${e.trim()}`,Accept:"application/json"}});if(!t.ok)return{books:[],highlights:[],error:`Engine error: HTTP ${t.status}`};let s=await t.json();return{books:s.books||[],highlights:s.highlights||[]}}catch(t){let s=t instanceof Error?t.message:"Failed to fetch library from engine";return{books:[],highlights:[],error:s}}}};var N=class{container;store;statusBtn=null;isConnected=!1;constructor(e="btn-engine-status"){this.store=k.getInstance(),this.statusBtn=document.getElementById(e),this.container=document.createElement("div"),this.container.className="engine-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM(),this.checkInitialConnection()}initDOM(){let e=w.getSavedToken();this.container.innerHTML=`
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
    `,this.container.querySelector("#btn-close-engine-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",i=>{i.target===this.container&&this.close()}),this.statusBtn&&this.statusBtn.addEventListener("click",()=>this.open()),this.container.querySelector("#btn-connect-engine")?.addEventListener("click",()=>this.handleConnect())}open(){this.container.style.display="flex",this.checkHealth()}close(){this.container.style.display="none"}async checkInitialConnection(){let e=await w.checkHealth();this.updateHealthUI(e);let i=w.getSavedToken();if(e.healthy&&i){let t=await w.fetchLibrary(i);t.books.length>0&&(this.store.loadCustomData(t.books,t.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${t.books.length} Books`))}}async checkHealth(){let e=await w.checkHealth();return this.updateHealthUI(e),e}updateHealthUI(e){let i=this.container.querySelector("#engine-status-box"),t=this.container.querySelector(".status-indicator-dot"),s=this.container.querySelector("#engine-status-text"),n=this.container.querySelector("#engine-substatus-text");e.healthy?(t&&(t.className="status-indicator-dot dot-emerald"),s&&(s.textContent=`\u25CF Engine Online (v${e.version||"1.0.0"})`),n&&(n.textContent=`SQLite Store: ${e.booksCount||0} books, ${e.annotCount||0} highlights available`),this.updateHeaderBadge(!0,"\u25CF Engine Online")):(t&&(t.className="status-indicator-dot dot-gray"),s&&(s.textContent="\u25CB Engine Offline or Not Running"),n&&(n.textContent="Start with: pnpm --filter @hakim/engine start"),this.updateHeaderBadge(!1,"\u25CB Engine Offline"))}updateHeaderBadge(e,i){if(this.statusBtn){this.statusBtn.className=`btn-engine-status ${e?"online":"offline"}`;let t=this.statusBtn.querySelector(".engine-status-label");t&&(t.textContent=i)}}async handleConnect(){let i=this.container.querySelector("#engine-token-input")?.value.trim()||"",t=this.container.querySelector("#engine-feedback-msg"),s=this.container.querySelector("#btn-connect-engine");if(!i){t&&(t.style.display="block",t.className="engine-feedback-msg error",t.textContent="Please enter a pairing token.");return}s&&(s.disabled=!0),t&&(t.style.display="block",t.className="engine-feedback-msg info",t.textContent="Verifying pairing and fetching SQLite library...");let n=await w.verifyPairing(i);if(!n.success){t&&(t.className="engine-feedback-msg error",t.textContent=n.error||"Authentication failed. Check your token."),s&&(s.disabled=!1);return}w.saveToken(i);let o=await w.fetchLibrary(i);if(o.error){t&&(t.className="engine-feedback-msg error",t.textContent=o.error),s&&(s.disabled=!1);return}this.store.loadCustomData(o.books,o.highlights,"custom_file"),this.isConnected=!0,this.updateHeaderBadge(!0,`Engine: ${o.books.length} Books`),t&&(t.className="engine-feedback-msg success",t.textContent=`\u2713 Connected! Successfully loaded ${o.books.length} books and ${o.highlights.length} highlights.`),s&&(s.disabled=!1),setTimeout(()=>{this.close()},1200)}};var x=class u{static storageKey="hakim_ai_config";static getSavedConfig(){try{let e=localStorage.getItem(u.storageKey);if(e)return JSON.parse(e)}catch{}return{provider:"heuristic",modelName:"local-heuristic"}}static saveConfig(e){try{localStorage.setItem(u.storageKey,JSON.stringify(e))}catch{}}static async extractConceptClusters(e,i,t=u.getSavedConfig()){if(e.length===0)return[];if(t.provider!=="heuristic"&&t.apiKey&&t.endpoint)try{return await u.fetchLLMClusters(e,t)}catch(s){console.warn("LLM clustering failed, falling back to local heuristic:",s)}return u.heuristicClusterExtraction(e,i)}static async generateExecutiveSynthesis(e,i,t=u.getSavedConfig()){if(e.length===0)return{title:"No Highlights Selected",summary:"Please select or import highlights to generate an executive synthesis.",mentalModels:[],actionableTakeaways:[],sourceHighlightsCount:0};if(t.provider!=="heuristic"&&t.apiKey&&t.endpoint)try{return await u.fetchLLMSynthesis(e,i,t)}catch(s){console.warn("LLM synthesis failed, falling back to heuristic:",s)}return u.heuristicExecutiveSynthesis(e,i)}static async generateSocraticQuestions(e,i=u.getSavedConfig()){return e.length===0?[]:e.slice(0,10).map((t,s)=>{let n=t.rawText.trim(),o=n.split(".")[0]||n,l=`How does the principle of "${t.tags?.[0]||"this concept"}" in "${t.bookTitle}" apply to high-leverage decision making?`;return t.rawText.toLowerCase().includes("stoic")||t.rawText.toLowerCase().includes("discipline")?l=`According to ${t.bookTitle}, what is the distinction between internal control and external events?`:(t.rawText.toLowerCase().includes("system")||t.rawText.toLowerCase().includes("data"))&&(l=`What fundamental architectural trade-off is emphasized in "${t.bookTitle}" regarding this quote?`),{id:`q-${s}-${t.id}`,question:l,idealAnswer:t.interpretation||t.sourceNote||o,sourceHighlight:t.rawText,bookTitle:t.bookTitle}})}static heuristicClusterExtraction(e,i){let t=new Map;e.forEach(n=>{(n.tags&&n.tags.length>0?n.tags:u.extractKeywords(n.rawText)).forEach(l=>{let a=l.toLowerCase().trim();if(a.length<3)return;t.has(a)||t.set(a,{highlightIds:[],quotes:[],bookTitles:new Set});let r=t.get(a);r.highlightIds.push(n.id),r.quotes.push(n.rawText),r.bookTitles.add(n.bookTitle)})});let s=[];return t.forEach((n,o)=>{if(n.highlightIds.length>=2||n.bookTitles.size>=1){let l=o.charAt(0).toUpperCase()+o.slice(1);s.push({conceptName:`#${l}`,description:`Cross-cutting principle spanning ${n.bookTitles.size} books, connecting ${n.highlightIds.length} foundational passages.`,relatedBooks:Array.from(n.bookTitles),highlightIds:n.highlightIds,keyQuotes:n.quotes.slice(0,3)})}}),s.sort((n,o)=>o.highlightIds.length-n.highlightIds.length).slice(0,8)}static heuristicExecutiveSynthesis(e,i){let t=Array.from(new Set(e.map(d=>d.bookTitle))),s=i?`Executive Brief: ${i}`:`Reading Intelligence Synthesis (${t.length} Books)`,n=e.map(d=>d.rawText),o=n[0]||"",l=n[1]||n[0]||"",a=`Synthesizing ${e.length} core passages across ${t.join(", ")}. A recurring dialectic emerges: durable outcomes require foundational discipline and system-level fault tolerance rather than ad-hoc intervention. As captured in the literature: "${o.slice(0,140)}..."`,r=["First-Principles Invariance: Distinguish immutable physical or algorithmic laws from transient user assumptions.","Asymmetric Feedback Loops: Small habits and deterministic routines compound into resilient long-term architectures.","Cognitive Provenance: Preserving raw source observations alongside evolving human reflections prevents semantic drift."],c=[`Structure recurring review intervals for key passages in ${t[0]||"your library"}.`,"Translate abstract philosophical insights into concrete operational heuristics.","Anchor conceptual highlights into your Notion knowledge graph for permanent retrieval."];return{title:s,summary:a,mentalModels:r,actionableTakeaways:c,sourceHighlightsCount:e.length}}static extractKeywords(e){let i=new Set(["the","and","that","this","with","from","have","will","what","when","where","which","about","into","their","there","would","could","should","being","these","those"]),t=e.toLowerCase().replace(/[^\w\s]/g,"").split(/\s+/).filter(s=>s.length>4&&!i.has(s));return Array.from(new Set(t)).slice(0,3)}static async fetchLLMClusters(e,i){let t=`Analyze these ${e.length} reading highlights and group them into 3-6 thematic concept clusters. Return JSON only with format: [{"conceptName": string, "description": string, "relatedBooks": string[], "highlightIds": string[], "keyQuotes": string[]}]

Highlights:
${JSON.stringify(e.map(l=>({id:l.id,book:l.bookTitle,text:l.rawText})))}`,n=await(await fetch(i.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${i.apiKey}`},body:JSON.stringify({model:i.modelName||"gpt-4o-mini",messages:[{role:"user",content:t}],response_format:{type:"json_object"}})})).json(),o=JSON.parse(n.choices[0].message.content);return o.clusters||o}static async fetchLLMSynthesis(e,i,t){let s=`You are a world-class reading intelligence synthesizer. Synthesize these highlights into an executive brief. Return JSON only: {"title": string, "summary": string, "mentalModels": string[], "actionableTakeaways": string[]}

Highlights:
${JSON.stringify(e.map(a=>({book:a.bookTitle,text:a.rawText})))}`,o=await(await fetch(t.endpoint||"https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`},body:JSON.stringify({model:t.modelName||"gpt-4o-mini",messages:[{role:"user",content:s}],response_format:{type:"json_object"}})})).json();return{...JSON.parse(o.choices[0].message.content),sourceHighlightsCount:e.length}}};var B=class{container;store;activeTask="synthesis";constructor(){this.store=k.getInstance(),this.container=document.createElement("div"),this.container.className="ai-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `}copyMarkdown(){let i=this.container.querySelector("#ai-results-stage")?.innerText||"";if(navigator.clipboard){navigator.clipboard.writeText(i);let t=this.container.querySelector("#btn-copy-ai-result span");t&&(t.textContent="Copied to Clipboard!",setTimeout(()=>{t.textContent="Copy Markdown Synthesis"},2e3))}}};var q=class u{files=[];addFile(e,i){return this.files.push({name:e.replace(/\\/g,"/"),content:i}),this}generateBlob(){let e=[],i=[],t=0,s=new TextEncoder;for(let c of this.files){let d=s.encode(c.name),h=typeof c.content=="string"?s.encode(c.content):c.content,g=u.crc32(h),f=h.length,b=new Uint8Array(30+d.length),p=new DataView(b.buffer);p.setUint32(0,67324752,!0),p.setUint16(4,20,!0),p.setUint16(6,0,!0),p.setUint16(8,0,!0),p.setUint16(10,0,!0),p.setUint16(12,0,!0),p.setUint32(14,g,!0),p.setUint32(18,f,!0),p.setUint32(22,f,!0),p.setUint16(26,d.length,!0),p.setUint16(28,0,!0),b.set(d,30),e.push(b,h);let m=new Uint8Array(46+d.length),v=new DataView(m.buffer);v.setUint32(0,33639248,!0),v.setUint16(4,20,!0),v.setUint16(6,20,!0),v.setUint16(8,0,!0),v.setUint16(10,0,!0),v.setUint16(12,0,!0),v.setUint16(14,0,!0),v.setUint32(16,g,!0),v.setUint32(20,f,!0),v.setUint32(24,f,!0),v.setUint16(28,d.length,!0),v.setUint16(30,0,!0),v.setUint16(32,0,!0),v.setUint16(34,0,!0),v.setUint16(36,0,!0),v.setUint32(38,0,!0),v.setUint32(42,t,!0),m.set(d,46),i.push(m),t+=b.length+h.length}let n=t,o=0;for(let c of i)o+=c.length;let l=new Uint8Array(22),a=new DataView(l.buffer);a.setUint32(0,101010256,!0),a.setUint16(4,0,!0),a.setUint16(6,0,!0),a.setUint16(8,this.files.length,!0),a.setUint16(10,this.files.length,!0),a.setUint32(12,o,!0),a.setUint32(16,n,!0),a.setUint16(20,0,!0);let r=[...e,...i,l];return new Blob(r,{type:"application/zip"})}downloadZip(e="hakim-obsidian-vault.zip"){let i=this.generateBlob(),t=URL.createObjectURL(i),s=document.createElement("a");s.href=t,s.download=e,document.body.appendChild(s),s.click(),document.body.removeChild(s),setTimeout(()=>URL.revokeObjectURL(t),1e3)}static crcTable=(()=>{let e=new Uint32Array(256);for(let i=0;i<256;i++){let t=i;for(let s=0;s<8;s++)t=t&1?3988292384^t>>>1:t>>>1;e[i]=t}return e})();static crc32(e){let i=-1;for(let t=0;t<e.length;t++)i=i>>>8^u.crcTable[(i^e[t])&255];return(i^-1)>>>0}};var R=class u{static generateVault(e,i){let t=[],s=new q,n=u.formatIndexNote(e,i);t.push({path:"Index.md",content:n}),s.addFile("Index.md",n);for(let a of e){let r=i.filter(g=>g.bookId===a.id||g.bookTitle===a.title),c=u.sanitizeFileName(a.title),d=u.formatBookNote(a,r),h=`Books/${c}.md`;t.push({path:h,content:d}),s.addFile(h,d)}let o=new Map;for(let a of i)for(let r of a.tags||[]){let c=r.trim();c&&(o.has(c)||o.set(c,[]),o.get(c).push(a))}let l=0;return o.forEach((a,r)=>{l++;let c=u.sanitizeFileName(r),d=u.formatConceptNote(r,a),h=`Concepts/${c}.md`;t.push({path:h,content:d}),s.addFile(h,d)}),{files:t,booksCount:e.length,highlightsCount:i.length,conceptsCount:l,zipBuilder:s}}static formatBookNote(e,i){let t=[];if(t.push("---"),t.push(`title: ${JSON.stringify(e.title)}`),t.push(`author: ${JSON.stringify(e.author)}`),e.asin&&t.push(`asin: ${JSON.stringify(e.asin)}`),t.push(`status: ${e.status||"reading"}`),t.push(`highlights_count: ${i.length}`),t.push("tags:"),t.push("  - type/book"),t.push("  - reading-intelligence"),t.push("---"),t.push(""),t.push(`# ${e.title}`),t.push(`**Author:** [[${e.author}]]`),t.push(`**Status:** \`${(e.status||"reading").toUpperCase()}\``),t.push(`**Total Highlights:** ${i.length}`),t.push(""),t.push("---"),t.push(""),t.push("## \u{1F4D6} Highlights & Annotations"),t.push(""),i.length===0)return t.push("*No highlights captured for this book yet.*"),t.join(`
`);let s=[...i].sort((n,o)=>(n.location||0)-(o.location||0));for(let n=0;n<s.length;n++){let o=s[n],l=o.color==="pink"?"danger":o.color==="blue"?"info":o.color==="orange"?"warning":"quote";o.chapter&&(t.push(`### ${o.chapter}`),t.push("")),t.push(`> [!${l}] Highlight #${n+1}`),t.push(`> ${o.rawText}`);let a=[];o.location&&a.push(`Loc ${o.location}`),o.color&&a.push(`Color: ${o.color}`),o.importance&&a.push(`Importance: ${o.importance}`),a.length>0&&(t.push(">"),t.push(`> \u2014 *${a.join(" \u2022 ")}*`)),o.sourceNote&&(t.push(""),t.push("> [!note] Personal Note"),t.push(`> ${o.sourceNote}`)),o.interpretation&&(t.push(""),t.push(`**\u{1F4A1} Reflection:** ${o.interpretation}`)),o.tags&&o.tags.length>0&&(t.push(""),t.push(`**Concepts:** ${o.tags.map(r=>`[[Concepts/${r}|#${r}]]`).join(" ")}`)),t.push(`^hl-${o.id}`),t.push(""),t.push("---"),t.push("")}return t.join(`
`)}static formatConceptNote(e,i){let t=[],s=Array.from(new Set(i.map(n=>n.bookTitle)));t.push("---"),t.push(`concept: ${JSON.stringify(e)}`),t.push(`highlights_count: ${i.length}`),t.push("tags:"),t.push("  - type/concept"),t.push("---"),t.push(""),t.push(`# Concept: #${e}`),t.push(`Cross-cutting reading intelligence concept spanning **${s.length} books**.`),t.push(""),t.push("## \u{1F4DA} Linked Books");for(let n of s)t.push(`- [[Books/${n}|${n}]]`);t.push(""),t.push("## \u{1F4AC} Key Highlights");for(let n of i)t.push(`> "${n.rawText}"`),t.push(`\u2014 [[Books/${n.bookTitle}|${n.bookTitle}]] (Loc ${n.location||"N/A"})`),t.push("");return t.join(`
`)}static formatIndexNote(e,i){let t=[];t.push("---"),t.push('title: "Hakim Reading OS Dashboard"'),t.push("tags:"),t.push("  - dashboard"),t.push("---"),t.push(""),t.push("# \u{1F3DB}\uFE0F Hakim Personal Reading Intelligence Vault"),t.push(""),t.push(`Welcome to your local-first reading vault. Generated on **${new Date().toLocaleDateString()}**.`),t.push(""),t.push("### \u{1F4CA} Library Statistics"),t.push(`- **Total Books:** ${e.length}`),t.push(`- **Total Highlights:** ${i.length}`),t.push(""),t.push("---"),t.push(""),t.push("## \u{1F4DA} Books Library");for(let s of e){let n=i.filter(o=>o.bookId===s.id||o.bookTitle===s.title).length;t.push(`- [[Books/${s.title}|${s.title}]] by *${s.author}* (${n} notes)`)}return t.push(""),t.push("---"),t.push("*Exported automatically from [Hakim](https://github.com/ws0x/hakim).*"),t.join(`
`)}static sanitizeFileName(e){return e.replace(/[\\/:*?"<>|]/g,"_").trim()}};var P=class{container;store;currentResult=null;selectedFilePath="Index.md";constructor(){this.store=k.getInstance(),this.container=document.createElement("div"),this.container.className="obsidian-modal-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.initDOM()}initDOM(){this.container.innerHTML=`
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
    `,this.container.querySelector("#btn-close-obsidian-modal")?.addEventListener("click",()=>this.close()),this.container.addEventListener("click",e=>{e.target===this.container&&this.close()}),this.container.querySelector("#btn-download-vault-zip")?.addEventListener("click",()=>this.handleDownloadZip()),this.container.querySelector("#btn-copy-vault-file")?.addEventListener("click",()=>this.handleCopyCurrentFile())}open(){this.container.style.display="flex",this.generateAndRender()}close(){this.container.style.display="none"}generateAndRender(){let e=this.store.getState();this.currentResult=R.generateVault(e.books,e.highlights);let i=this.container.querySelector("#vault-stats-text");i&&(i.textContent=`\u{1F4E6} ${this.currentResult.booksCount} Books \u2022 ${this.currentResult.highlightsCount} Highlights \u2022 ${this.currentResult.conceptsCount} Concepts`);let t=this.container.querySelector("#obsidian-tree-list");t&&(t.innerHTML=this.currentResult.files.map(s=>`
        <div class="tree-item ${s.path===this.selectedFilePath?"active":""}" data-path="${s.path}">
          <span class="tree-icon">${s.path.startsWith("Books/")?"\u{1F4D6}":s.path.startsWith("Concepts/")?"\u{1F9E0}":"\u{1F4C4}"}</span>
          <span class="tree-name">${s.path}</span>
        </div>
      `).join(""),t.querySelectorAll(".tree-item").forEach(s=>{s.addEventListener("click",()=>{let n=s.getAttribute("data-path");n&&(this.selectedFilePath=n,t.querySelectorAll(".tree-item").forEach(o=>o.classList.remove("active")),s.classList.add("active"),this.renderSelectedFilePreview())})})),this.renderSelectedFilePreview()}renderSelectedFilePreview(){if(!this.currentResult)return;let e=this.currentResult.files.find(s=>s.path===this.selectedFilePath)||this.currentResult.files[0];if(!e)return;let i=this.container.querySelector("#preview-file-title"),t=this.container.querySelector("#obsidian-code-view code");i&&(i.textContent=e.path),t&&(t.textContent=e.content)}handleDownloadZip(){this.currentResult&&this.currentResult.zipBuilder.downloadZip("hakim-obsidian-vault.zip")}handleCopyCurrentFile(){if(!this.currentResult)return;let e=this.currentResult.files.find(i=>i.path===this.selectedFilePath);if(e&&navigator.clipboard){navigator.clipboard.writeText(e.content);let i=this.container.querySelector("#btn-copy-vault-file span");i&&(i.textContent="Copied!",setTimeout(()=>{i.textContent="Copy File Markdown"},2e3))}}};var D=class{container;input;resultsList;store;items=[];filteredItems=[];selectedIndex=0;isOpen=!1;onSelectViewCallback;onOpenAiCallback;onOpenObsidianCallback;onOpenEngineCallback;constructor(e){this.store=k.getInstance(),this.onSelectViewCallback=e.onSelectView,this.onOpenAiCallback=e.onOpenAi,this.onOpenObsidianCallback=e.onOpenObsidian,this.onOpenEngineCallback=e.onOpenEngine,this.container=document.createElement("div"),this.container.className="cmd-palette-backdrop",this.container.style.display="none",document.body.appendChild(this.container),this.container.innerHTML=`
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
    `,this.input=this.container.querySelector(".cmd-input"),this.resultsList=this.container.querySelector(".cmd-results-list"),this.initEvents()}initEvents(){this.container.addEventListener("click",e=>{e.target===this.container&&this.close()}),this.input.addEventListener("input",()=>{this.filterItems(this.input.value)}),this.input.addEventListener("keydown",e=>{e.key==="ArrowDown"?(e.preventDefault(),this.selectedIndex=Math.min(this.selectedIndex+1,this.filteredItems.length-1),this.renderResults()):e.key==="ArrowUp"?(e.preventDefault(),this.selectedIndex=Math.max(this.selectedIndex-1,0),this.renderResults()):e.key==="Enter"?(e.preventDefault(),this.filteredItems[this.selectedIndex]&&this.executeItem(this.filteredItems[this.selectedIndex])):e.key==="Escape"&&this.close()}),window.addEventListener("keydown",e=>{(e.metaKey||e.ctrlKey)&&(e.key==="k"||e.key==="K")&&(e.preventDefault(),this.toggle())})}open(){this.isOpen=!0,this.container.style.display="flex",this.buildItems(),this.input.value="",this.filterItems(""),setTimeout(()=>this.input.focus(),50)}close(){this.isOpen=!1,this.container.style.display="none"}toggle(){this.isOpen?this.close():this.open()}buildItems(){let e=this.store.getState(),i=[];i.push({id:"view-graph",title:"Switch to Knowledge Graph View",subtitle:"2D Force-directed Obsidian canvas graph",category:"Views",icon:"\u{1F310}",action:()=>this.onSelectViewCallback?.("graph")}),i.push({id:"view-cards",title:"Switch to Reading Cards & Shelf",subtitle:"Editorial cards grid and 3-column Kanban",category:"Views",icon:"\u{1F4D1}",action:()=>this.onSelectViewCallback?.("cards")}),i.push({id:"view-recall",title:"Switch to 3D Active Recall Deck",subtitle:"Spaced repetition flashcards review",category:"Views",icon:"\u{1F3AF}",action:()=>this.onSelectViewCallback?.("flashcards")}),i.push({id:"act-ai",title:"Launch AI Reading Intelligence",subtitle:"Executive synthesis, concept clusters & questions",category:"Actions",icon:"\u2728",action:()=>this.onOpenAiCallback?.()}),i.push({id:"act-obsidian",title:"Export Obsidian Markdown Vault (.zip)",subtitle:"Download complete vault with reciprocal wikilinks",category:"Actions",icon:"\u{1F48E}",action:()=>this.onOpenObsidianCallback?.()}),i.push({id:"act-engine",title:"Connect Local SQLite Engine (127.0.0.1:4242)",subtitle:"Sync with local offline daemon and database",category:"Actions",icon:"\u26A1",action:()=>this.onOpenEngineCallback?.()});for(let t of e.books)i.push({id:`book-${t.id}`,title:t.title,subtitle:`by ${t.author} \u2022 ${t.highlightsCount} highlights`,category:"Books",icon:"\u{1F4D6}",action:()=>{this.store.selectBook(t.id),this.onSelectViewCallback?.("cards")}});for(let t of e.highlights.slice(0,30))i.push({id:`hl-${t.id}`,title:t.rawText.length>80?t.rawText.substring(0,77)+"...":t.rawText,subtitle:`From ${t.bookTitle} (Loc ${t.location||"N/A"})`,category:"Highlights",icon:"\u{1F4AC}",action:()=>{this.store.selectHighlight(t)}});this.items=i}filterItems(e){let i=e.toLowerCase().trim();i?this.filteredItems=this.items.filter(t=>t.title.toLowerCase().includes(i)||t.subtitle&&t.subtitle.toLowerCase().includes(i)):this.filteredItems=this.items,this.selectedIndex=0,this.renderResults()}renderResults(){if(this.filteredItems.length===0){this.resultsList.innerHTML='<div class="cmd-empty-state">No matching commands, books, or highlights found.</div>';return}let e="",i="";this.filteredItems.forEach((s,n)=>{s.category!==i&&(i=s.category,e+=`<div class="cmd-category-header">${i}</div>`);let o=n===this.selectedIndex;e+=`
        <div class="cmd-item ${o?"selected":""}" data-index="${n}" role="option" aria-selected="${o}">
          <span class="cmd-item-icon">${s.icon}</span>
          <div class="cmd-item-text">
            <span class="cmd-item-title">${this.escapeHtml(s.title)}</span>
            ${s.subtitle?`<span class="cmd-item-subtitle">${this.escapeHtml(s.subtitle)}</span>`:""}
          </div>
          ${o?'<span class="cmd-item-enter">\u21B5</span>':""}
        </div>
      `}),this.resultsList.innerHTML=e,this.resultsList.querySelectorAll(".cmd-item").forEach(s=>{s.addEventListener("click",()=>{let n=Number(s.getAttribute("data-index"));this.filteredItems[n]&&this.executeItem(this.filteredItems[n])})});let t=this.resultsList.querySelector(".cmd-item.selected");t&&t.scrollIntoView({block:"nearest"})}executeItem(e){this.close(),e.action()}escapeHtml(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}};var O=class{store;graphEngine=null;cardsComponent=null;flashcardsComponent=null;slideover=null;engineBridge=null;aiModal=null;obsidianModal=null;commandPalette=null;constructor(){this.store=k.getInstance(),this.init()}init(){let e=document.getElementById("graph-container");e&&(this.graphEngine=new H(e,m=>{this.handleNodeClick(m)}));let i=document.getElementById("cards-container");i&&(this.cardsComponent=new I(i,{onSelectHighlight:m=>this.store.selectHighlight(m),onSelectBook:m=>this.store.selectBook(m),onUpdateBookStatus:(m,v)=>this.store.updateBookStatus(m,v)}));let t=document.getElementById("flashcards-container");t&&(this.flashcardsComponent=new A(t)),this.slideover=new $,this.engineBridge=new N("btn-engine-status"),this.aiModal=new B;let s=document.getElementById("btn-ai-synthesis");s&&s.addEventListener("click",()=>this.aiModal?.open()),this.obsidianModal=new P;let n=document.getElementById("btn-obsidian-export");n&&n.addEventListener("click",()=>this.obsidianModal?.open()),this.commandPalette=new D({onSelectView:m=>this.store.setView(m),onOpenAi:()=>this.aiModal?.open(),onOpenObsidian:()=>this.obsidianModal?.open(),onOpenEngine:()=>this.engineBridge?.open()});let o=document.getElementById("btn-spotlight-trigger");o&&o.addEventListener("click",()=>this.commandPalette?.open()),this.store.subscribe(m=>this.render(m));let l=document.getElementById("search-input");l&&l.addEventListener("input",()=>{this.store.setSearchQuery(l.value)});let a=document.getElementById("dataset-select");a&&a.addEventListener("change",()=>{a.value==="demo"&&this.store.loadDemoData()}),document.querySelectorAll(".view-btn").forEach(m=>{m.addEventListener("click",()=>{let v=m.getAttribute("data-view");v&&this.store.setView(v)})}),document.querySelectorAll(".color-dot-btn").forEach(m=>{m.addEventListener("click",()=>{let v=m.getAttribute("data-color");v&&this.store.toggleColorFilter(v)})});let d=document.getElementById("btn-graph-zoom-in"),h=document.getElementById("btn-graph-zoom-out"),g=document.getElementById("btn-graph-reset"),f=document.getElementById("btn-graph-physics");d&&d.addEventListener("click",()=>this.graphEngine?.zoomIn()),h&&h.addEventListener("click",()=>this.graphEngine?.zoomOut()),g&&g.addEventListener("click",()=>this.graphEngine?.resetView()),f&&f.addEventListener("click",()=>{let m=this.graphEngine?.togglePhysics();f.classList.toggle("active",m)});let b=document.getElementById("file-upload-input"),p=document.getElementById("btn-upload-file");p&&b&&(p.addEventListener("click",()=>b.click()),b.addEventListener("change",async()=>{let m=b.files?.[0];if(!m)return;let v=await m.text();if(m.name.endsWith(".json")){let y=C.parseJsonSnapshot(v);this.store.loadCustomData(y.books,y.highlights,"custom_file")}else{let y=C.parseMyClippings(v);this.store.loadCustomData(y.books,y.highlights,"custom_file")}}))}handleNodeClick(e){if(e.type==="book")this.store.selectBook(e.id===this.store.getState().filters.selectedBookId?null:e.id);else if(e.type==="highlight"){let i=this.store.getState().highlights.find(t=>t.id===e.id);i&&this.store.selectHighlight(i)}}render(e){let i=document.getElementById("graph-container"),t=document.getElementById("cards-container"),s=document.getElementById("flashcards-container"),n=document.querySelector(".graph-toolbar");if(e.selectedHighlight&&this.slideover&&this.slideover.open(e.selectedHighlight),e.activeView==="graph")i&&(i.style.display="block"),t&&(t.style.display="none"),s&&(s.style.display="none"),n&&(n.style.display="flex"),this.graphEngine&&this.graphEngine.setData(e.graphData);else if(e.activeView==="cards"){if(i&&(i.style.display="none"),t&&(t.style.display="block"),s&&(s.style.display="none"),n&&(n.style.display="none"),this.cardsComponent){let h=this.store.getFilteredHighlights();this.cardsComponent.render(e.books,h)}}else if(e.activeView==="flashcards"&&(i&&(i.style.display="none"),t&&(t.style.display="none"),s&&(s.style.display="flex"),n&&(n.style.display="none"),this.flashcardsComponent)){let h=this.store.getFilteredHighlights();this.flashcardsComponent.setDeck(h)}let o=document.getElementById("sidebar-book-list");if(o){o.innerHTML="";let h=document.createElement("button");h.className=`book-item-btn ${e.filters.selectedBookId===null?"active":""}`,h.innerHTML=`<span>All Library Highlights</span> <span class="book-count-badge">${e.highlights.length}</span>`,h.addEventListener("click",()=>this.store.selectBook(null)),o.appendChild(h),e.books.forEach(g=>{let f=document.createElement("button");f.className=`book-item-btn ${e.filters.selectedBookId===g.id?"active":""}`,f.innerHTML=`<span>\u{1F4D6} ${g.title}</span> <span class="book-count-badge">${g.highlightsCount}</span>`,f.addEventListener("click",()=>this.store.selectBook(g.id)),o.appendChild(f)})}document.querySelectorAll(".view-btn").forEach(h=>{h.getAttribute("data-view")===e.activeView?h.classList.add("active"):h.classList.remove("active")}),document.querySelectorAll(".color-dot-btn").forEach(h=>{let g=h.getAttribute("data-color");g&&e.filters.selectedColors.has(g)?h.classList.add("active"):h.classList.remove("active")});let r=document.getElementById("hud-nodes-count"),c=document.getElementById("hud-links-count"),d=document.getElementById("hud-filtered-count");r&&(r.textContent=String(e.graphData.nodes.length)),c&&(c.textContent=String(e.graphData.links.length)),d&&(d.textContent=String(this.store.getFilteredHighlights().length))}};document.addEventListener("DOMContentLoaded",()=>{new O,console.log("\u26A1 Hakim Reading Intelligence Web Client Initialized.")});
