import{f as h,u,j as e,g as b,L as g,c as p,S as y,C as j,d as N,b as w,e as v}from"./index-D1rIzvsH.js";import{a as k,C as $}from"./blog-BsFtsM4R.js";import{A as C,M as B}from"./article-layout-D4TdPiut.js";import"./markdown-BuJEmHer.js";const D=r=>{const{title:o,category:a,date:n,author:d="Liam Duncan"}=r,s=85,x=(o.length>s?`${o.substring(0,s)}...`:o).split(" "),i=[];let l="";x.forEach(c=>{const m=l?`${l} ${c}`:c;m.length>45&&l?(i.push(l),l=c):l=m}),l&&i.push(l);const f=`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0f0f23;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1a1a2e;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="1200" height="630" fill="url(#bgGradient)"/>
      
      <!-- Accent line -->
      <rect x="0" y="0" width="1200" height="8" fill="url(#accentGradient)"/>
      
      <!-- Category badge -->
      <rect x="80" y="120" rx="20" ry="20" width="${a.length*12+32}" height="40" 
            fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" stroke-width="1"/>
      <text x="96" y="143" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="600" fill="#60a5fa">${a}</text>
      
      <!-- Title -->
      ${i.map((c,m)=>`<text x="80" y="${220+m*65}" font-family="system-ui, -apple-system, sans-serif" 
               font-size="54" font-weight="700" fill="#ffffff">${c}</text>`).join("")}
      
      <!-- Date -->
      <text x="80" y="${i.length>2?450:390}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="24" font-weight="400" fill="#9ca3af">${n}</text>
      
      <!-- Author -->
      <text x="80" y="${i.length>2?500:440}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="20" font-weight="500" fill="#d1d5db">by ${d}</text>
      
      <!-- Blog indicator -->
      <text x="80" y="580" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="400" fill="#6b7280">lmdncn.github.io/liam-duncan-development</text>
            
      <!-- Decorative element -->
      <circle cx="1050" cy="150" r="60" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" stroke-width="2"/>
      <circle cx="1050" cy="150" r="35" fill="rgba(59, 130, 246, 0.2)"/>
      <circle cx="1050" cy="150" r="15" fill="#3b82f6"/>
    </svg>
  `.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f)}`},G=r=>r.image?r.image.startsWith("http")?r.image:`/images/blog/${r.image}`:D(r),T=r=>{const o=A(r.date);return{title:r.title,description:r.excerpt,image:G(r),url:`/blog/${r.slug}`,type:"article",article:{author:r.author||h.siteName,publishedTime:o,section:r.category,tag:r.tags||[r.category]}}},A=r=>{let o;if(r.includes(","))o=new Date(r);else{const[a,n]=r.split(" "),s=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(a);s===-1?(console.warn(`Invalid month name: ${a}`),o=new Date):o=new Date(parseInt(n),s,1)}return o.toISOString()},P=()=>{const{slug:r}=u(),o=r?k(r):void 0,a=o?T(o):null;if(!r||!o)return e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-6xl font-light text-muted-foreground mb-4",children:"404"}),e.jsx("h2",{className:"text-2xl font-normal text-foreground mb-2",children:"Not Found"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"The article you are looking for doesn't exist"}),e.jsx(b,{variant:"ghost",asChild:!0,className:"text-primary hover:bg-primary/10 transition-colors",children:e.jsx(g,{to:"/blog",children:"Return to Blog"})})]})});const n=e.jsxs("div",{className:"flex items-center gap-4 text-sm opacity-90",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{className:"h-4 w-4"}),o.date]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx($,{className:"h-4 w-4"}),o.readTime]})]}),d=o.images?o.content.replace(/\{\{images\.\w+\}\}/g,s=>{const t=s.replace(/\{\{images\.|\}\}/g,"");return o.images?.[t]||s}):o.content;return e.jsxs(e.Fragment,{children:[a&&e.jsx(y,{title:a.title,description:a.description,image:a.image,url:a.url,type:a.type,article:a.article}),e.jsxs(C,{title:o.title,backButton:{to:"/blog",label:"Back to Blog"},badge:{text:o.category},meta:n,footer:{backTo:"/blog",backLabel:"More Articles"},children:[e.jsx(B,{components:{h1:({node:s,...t})=>e.jsx("h1",{className:"text-4xl font-bold mt-12 mb-8 text-foreground leading-tight first:mt-0 border-b border-border/20 pb-4",...t}),h2:({node:s,...t})=>e.jsx("h2",{className:"text-3xl font-bold mt-12 mb-6 text-foreground leading-tight",...t}),h3:({node:s,...t})=>e.jsx("h3",{className:"text-2xl font-semibold mt-10 mb-5 text-foreground leading-tight",...t}),p:({node:s,...t})=>e.jsx("p",{className:"mb-6 text-foreground leading-relaxed text-lg font-light",...t}),ul:({node:s,...t})=>e.jsx("ul",{className:"mb-8 space-y-3 list-none",...t}),ol:({node:s,...t})=>e.jsx("ol",{className:"mb-8 ml-6 space-y-3 list-decimal",...t}),li:({node:s,...t})=>e.jsx("li",{className:"text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal",...t}),strong:({node:s,...t})=>e.jsx("strong",{className:"font-bold text-foreground",...t}),code:({node:s,...t})=>e.jsx("code",{className:"bg-secondary/60 text-secondary-foreground px-2 py-1 rounded text-base font-mono",...t}),pre:({node:s,...t})=>e.jsx("pre",{className:"bg-secondary/30 p-6 rounded-lg overflow-x-auto mb-8 text-sm border-l-4 border-primary/30",...t}),blockquote:({node:s,...t})=>e.jsx("blockquote",{className:"border-l-4 border-primary/30 pl-8 py-4 italic text-foreground/80 my-8 text-xl font-light",...t}),img:({src:s,alt:t})=>e.jsxs("figure",{className:"my-8",children:[e.jsx("img",{src:s,alt:t||"",className:"w-full max-w-3xl mx-auto rounded-lg shadow-lg"}),t&&e.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-4",children:t})]}),a:({href:s,children:t})=>s?.startsWith("/")?e.jsx(g,{to:s,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",children:t}):e.jsx("a",{href:s,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",target:"_blank",rel:"noopener noreferrer",children:t})},children:d}),o.relatedPosts&&o.relatedPosts.length>0&&e.jsxs("section",{className:"mt-16 pt-8 border-t border-border/20",children:[e.jsx("h3",{className:"text-2xl font-semibold text-foreground mb-6",children:"Related Articles"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:o.relatedPosts.map(s=>e.jsx(g,{to:`/blog/${s.slug}`,children:e.jsx(j,{className:"hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full",children:e.jsxs(N,{className:"p-6",children:[e.jsx(w,{className:"text-lg font-medium mb-2",children:s.title}),e.jsx(v,{className:"text-sm leading-relaxed",children:s.excerpt})]})})},s.slug))})]})]})]})};export{P as default};
