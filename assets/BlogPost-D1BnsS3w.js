import{f as u,u as h,j as e,g as p,L as x,c as b,S as y,C as j,d as N,b as w,e as v}from"./index-Ao54gWXh.js";import{a as $,C as k}from"./blog-BnAgjmZA.js";import{A as C,M as B}from"./article-layout-DdpX5WlI.js";import"./markdown-Bl-hfGLp.js";const D=r=>{const{title:a,category:o,date:l,author:d="Liam Duncan"}=r,t=85,g=(a.length>t?`${a.substring(0,t)}...`:a).split(" "),i=[];let n="";g.forEach(c=>{const m=n?`${n} ${c}`:c;m.length>45&&n?(i.push(n),n=c):n=m}),n&&i.push(n);const f=`
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
      <rect x="80" y="120" rx="20" ry="20" width="${o.length*12+32}" height="40" 
            fill="rgba(59, 130, 246, 0.2)" stroke="rgba(59, 130, 246, 0.5)" stroke-width="1"/>
      <text x="96" y="143" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="600" fill="#60a5fa">${o}</text>
      
      <!-- Title -->
      ${i.map((c,m)=>`<text x="80" y="${220+m*65}" font-family="system-ui, -apple-system, sans-serif" 
               font-size="54" font-weight="700" fill="#ffffff">${c}</text>`).join("")}
      
      <!-- Date -->
      <text x="80" y="${i.length>2?450:390}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="24" font-weight="400" fill="#9ca3af">${l}</text>
      
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
  `.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(f)}`},G=r=>r.image?r.image.startsWith("http")?r.image:`/images/blog/${r.image}`:D(r),S=r=>{const a=T(r.date);return{title:r.title,description:r.excerpt,image:G(r),url:`/blog/${r.slug}`,type:"article",article:{author:r.author||u.siteName,publishedTime:a,section:r.category,tag:r.tags||[r.category]}}},T=r=>{let a;if(r.includes(","))a=new Date(r);else{const[o,l]=r.split(" "),t=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(o);t===-1?(console.warn(`Invalid month name: ${o}`),a=new Date):a=new Date(parseInt(l),t,1)}return a.toISOString()},P=()=>{const{slug:r}=h(),a=r?$(r):void 0,o=a?S(a):null;if(!r||!a)return e.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("h1",{className:"text-6xl font-light text-muted-foreground mb-4",children:"404"}),e.jsx("h2",{className:"text-2xl font-normal text-foreground mb-2",children:"Not Found"}),e.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"The article you are looking for doesn't exist"}),e.jsx(p,{variant:"ghost",asChild:!0,className:"text-primary hover:bg-primary/10 transition-colors",children:e.jsx(x,{to:"/blog",children:"Return to Blog"})})]})});const l=e.jsxs("div",{className:"flex items-center gap-4 text-sm opacity-90",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"h-4 w-4"}),a.date]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"h-4 w-4"}),a.readTime]})]}),d=a.images?a.content.replace(/\{\{images\.\w+\}\}/g,t=>{const s=t.replace(/\{\{images\.|\}\}/g,"");return a.images?.[s]||t}):a.content;return e.jsxs(e.Fragment,{children:[o&&e.jsx(y,{title:o.title,description:o.description,image:o.image,url:o.url,type:o.type,article:o.article}),e.jsxs(C,{title:a.title,backButton:{to:"/blog",label:"Back to Blog"},badge:{text:a.category},meta:l,footer:{backTo:"/blog",backLabel:"More Articles"},children:[e.jsx(B,{components:{h1:({node:t,...s})=>e.jsx("h1",{className:"text-4xl font-bold mt-12 mb-8 text-foreground leading-tight first:mt-0 border-b border-border/20 pb-4",...s}),h2:({node:t,...s})=>e.jsx("h2",{className:"text-3xl font-bold mt-12 mb-6 text-foreground leading-tight",...s}),h3:({node:t,...s})=>e.jsx("h3",{className:"text-2xl font-semibold mt-10 mb-5 text-foreground leading-tight",...s}),p:({node:t,...s})=>e.jsx("p",{className:"mb-6 text-foreground leading-relaxed text-lg font-light",...s}),ul:({node:t,...s})=>e.jsx("ul",{className:"mb-8 space-y-3 list-none",...s}),ol:({node:t,...s})=>e.jsx("ol",{className:"mb-8 ml-6 space-y-3 list-decimal",...s}),li:({node:t,...s})=>e.jsx("li",{className:"text-foreground leading-relaxed text-lg font-light relative pl-6 before:content-['—'] before:absolute before:left-0 before:text-primary before:font-normal",...s}),strong:({node:t,...s})=>e.jsx("strong",{className:"font-bold text-foreground",...s}),code:({node:t,...s})=>e.jsx("code",{className:"bg-secondary/60 text-secondary-foreground px-2 py-1 rounded text-base font-mono",...s}),pre:({node:t,...s})=>e.jsx("pre",{className:"bg-secondary/30 p-6 rounded-lg overflow-x-auto mb-8 text-sm border-l-4 border-primary/30",...s}),blockquote:({node:t,...s})=>e.jsx("blockquote",{className:"border-l-4 border-primary/30 pl-8 py-4 italic text-foreground/80 my-8 text-xl font-light",...s}),img:({src:t,alt:s})=>{const g=t?.startsWith("/")&&!t.startsWith("/liam-duncan-development/")?`/liam-duncan-development/${t.substring(1)}`:t;return e.jsxs("figure",{className:"my-8",children:[e.jsx("img",{src:g,alt:s||"",className:"w-full max-w-3xl mx-auto rounded-lg shadow-lg"}),s&&e.jsx("figcaption",{className:"text-center text-sm text-muted-foreground mt-4",children:s})]})},a:({href:t,children:s})=>t?.startsWith("/")?e.jsx(x,{to:t,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",children:s}):e.jsx("a",{href:t,className:"text-primary hover:text-primary/80 transition-colors underline decoration-1 underline-offset-2",target:"_blank",rel:"noopener noreferrer",children:s})},children:d}),a.relatedPosts&&a.relatedPosts.length>0&&e.jsxs("section",{className:"mt-16 pt-8 border-t border-border/20",children:[e.jsx("h3",{className:"text-2xl font-semibold text-foreground mb-6",children:"Related Articles"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:a.relatedPosts.map(t=>e.jsx(x,{to:`/blog/${t.slug}`,children:e.jsx(j,{className:"hover:shadow-md transition-shadow bg-background/50 border-border/50 h-full",children:e.jsxs(N,{className:"p-6",children:[e.jsx(w,{className:"text-lg font-medium mb-2",children:t.title}),e.jsx(v,{className:"text-sm leading-relaxed",children:t.excerpt})]})})},t.slug))})]})]})]})};export{P as default};
