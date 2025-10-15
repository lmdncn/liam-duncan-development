import{f as h,u as x,j as s,g as u,L as y,c as p,S as b}from"./index-D-SL4cAc.js";import{a as w,C as v}from"./blog-XmcscfBw.js";import{M as j,b as N}from"./markdown-components-Dul9xrMJ.js";import"./markdown-B-zspkDX.js";const $=e=>{const{title:t,category:a,date:r,author:c="Liam Duncan"}=e,i=85,f=(t.length>i?`${t.substring(0,i)}...`:t).split(" "),n=[];let o="";f.forEach(l=>{const m=o?`${o} ${l}`:l;m.length>45&&o?(n.push(o),o=l):o=m}),o&&n.push(o);const d=`
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
      ${n.map((l,m)=>`<text x="80" y="${220+m*65}" font-family="system-ui, -apple-system, sans-serif" 
               font-size="54" font-weight="700" fill="#ffffff">${l}</text>`).join("")}
      
      <!-- Date -->
      <text x="80" y="${n.length>2?450:390}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="24" font-weight="400" fill="#9ca3af">${r}</text>
      
      <!-- Author -->
      <text x="80" y="${n.length>2?500:440}" font-family="system-ui, -apple-system, sans-serif" 
            font-size="20" font-weight="500" fill="#d1d5db">by ${c}</text>
      
      <!-- Blog indicator -->
      <text x="80" y="580" font-family="system-ui, -apple-system, sans-serif" 
            font-size="18" font-weight="400" fill="#6b7280">lmdncn.github.io/liam-duncan-development</text>
            
      <!-- Decorative element -->
      <circle cx="1050" cy="150" r="60" fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" stroke-width="2"/>
      <circle cx="1050" cy="150" r="35" fill="rgba(59, 130, 246, 0.2)"/>
      <circle cx="1050" cy="150" r="15" fill="#3b82f6"/>
    </svg>
  `.trim();return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(d)}`},k=e=>e.image?e.image.startsWith("http")?e.image:`/images/blog/${e.image}`:$(e),B=e=>{const t=C(e.date);return{title:e.title,description:e.excerpt,image:k(e),url:`/blog/${e.slug}`,type:"article",article:{author:e.author||h.siteName,publishedTime:t,section:e.category,tag:e.tags||[e.category]}}},C=e=>{let t;if(e.includes(","))t=new Date(e);else{const[a,r]=e.split(" "),i=["January","February","March","April","May","June","July","August","September","October","November","December"].indexOf(a);i===-1?(console.warn(`Invalid month name: ${a}`),t=new Date):t=new Date(parseInt(r),i,1)}return t.toISOString()},S=()=>{const{slug:e}=x(),t=e?w(e):void 0,a=t?B(t):null;if(!e||!t)return s.jsx("div",{className:"min-h-screen bg-background flex items-center justify-center",children:s.jsxs("div",{className:"text-center",children:[s.jsx("h1",{className:"text-6xl font-light text-muted-foreground mb-4",children:"404"}),s.jsx("h2",{className:"text-2xl font-normal text-foreground mb-2",children:"Not Found"}),s.jsx("p",{className:"text-lg text-muted-foreground mb-8",children:"The article you are looking for doesn't exist"}),s.jsx(u,{variant:"ghost",asChild:!0,className:"text-primary hover:bg-primary/10 transition-colors",children:s.jsx(y,{to:"/blog",children:"Return to Blog"})})]})});const r=s.jsxs("div",{className:"flex items-center gap-4 text-sm opacity-90",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(p,{className:"h-4 w-4"}),t.date]}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(v,{className:"h-4 w-4"}),t.readTime]})]}),c=i=>t.images?i.replace(/\{\{images\.\w+\}\}/g,g=>{const f=g.replace(/\{\{images\.|\}\}/g,"");return t.images?.[f]||g}):i;return s.jsx(j,{title:t.title,backButton:{to:"/blog",label:"Back to Blog"},badge:{text:t.category},meta:r,footer:{backTo:"/blog",backLabel:"More Articles"},content:t.content,contentProcessor:c,markdownComponents:N,relatedItems:t.relatedPosts,relatedConfig:t.relatedPosts?{title:"Related Articles",columns:2,basePath:"/blog",showIcons:!1,fullWidthSection:!1}:void 0,children:a&&s.jsx(b,{title:a.title,description:a.description,image:a.image,url:a.url,type:a.type,article:a.article})})};export{S as default};
