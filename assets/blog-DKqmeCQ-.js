import{h as i}from"./index-CKA67kQF.js";import{g as r,p as l,e as d}from"./markdown-BpDB2PCZ.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=i("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]),h=`---
title: "Devs Are Dead: My Rebirth as an AI Agent Manager"
date: "2025-09-08"
excerpt: "After a decade of sharpening my coding skills, I realized the developer role is being redefined. My journey into AI-first programming tools shows why the future belongs to AI Agent Managers."
category: "AI & Engineering"
readTime: "5 min"
---
Like many developers, my AI journey started with GitHub Copilot. Inside VS Code, it felt like autocomplete on steroids. Later, moving to Cursor gave me a smoother UI and better ways to pass context. But the tools had limits. Without carefully feeding them instruction files and file context, they struggled to truly understand the systems I was working on. Helpful, yes, but transformative? Not yet.

Then I took a step back. On summer vacation in the French Riviera, I had time to reflect: why was I hesitant? Why were so many of us biased against letting AI take the driver’s seat? It reminded me of the industrial robotics revolution, when workers stopped assembling every piece by hand and instead learned to manage the machines that did it faster, more efficiently, and at greater scale. New skills became essential: communication, management, organization, systems thinking. Old skills weren’t irrelevant, but their value shifted.

The same thing is happening in software engineering.

When I came back, I dove in. No boardrooms, no whiteboards. I'd walk and talk with ChatGPT, and a few kilometers later I had a PRD. Back at my desk, I'd work with AI to break the PRD into domains, generate architecture diagrams, and even draft wireframes. With tools like Lovable, I could spin up prototypes, click around, note my thoughts, and improve them on the fly.

Then came Claude Code, and that changed everything. I could turn markdown plans into scaffolding for entire systems, split projects into modular parts, and spin up multiple Git worktrees. It felt like managing a team of agents, each working in parallel. What once took a squad of engineers could now be orchestrated by one.

That's when it hit me: I wasn't just coding anymore. I was managing AI agents.

And the shift goes even further. Developers like me are becoming builders, product managers, and product owners, guiding AI through vision, structure, and decisions. Meanwhile, product managers are turning into developers, able to spin up prototypes and ship features themselves with AI support. Even people without a computer science degree like mine are now building sophisticated, technical applications that would have once required a specialized team.

The lines are blurring. What used to be siloed roles are converging into one: the ability to harness AI effectively.

And this shift isn’t trivial. Coding knowledge is becoming less valuable on its own. What’s rising in importance are the skills to communicate clearly, make decisions quickly, organize complexity, and explain ideas effectively. The role of the engineer is being redefined.

I've spent the last decade of my life sharpening coding skills, so I don't say this lightly. But the truth is: the world has changed. The developer, as we knew it, is gone. The future belongs to the AI Agent Manager.
`,c=`---
title: "Getting Claude Code Right: Best Practices from the Trenches"
date: "2025-10-06"
excerpt: "My personal playbook of tactics, macros, and workflows that make Claude Code a reliable teammate instead of a frustrating black box."
category: "AI & Engineering"
readTime: "7 min"
---

# Getting Claude Code Right: Best Practices from the Trenches

When I first started using Claude Code, I made the same mistake most people do. I treated it like a vending machine: "Hey Claude, build me X." Sometimes it worked. Sometimes it spat out garbage. Mostly, it felt random.  

After a while, I realized that wasn’t Claude’s fault. It was mine. I was barking orders instead of giving it the same environment I’d give a real engineer: context, structure, rules, and guidance.  

Since then, I’ve spent months in the trenches with Claude Code. Testing, breaking, fixing, teaching, and refining. Along the way I’ve built a playbook of tactics that actually work. Not theory, not hype, just the practices I lean on every day to get consistent, high quality output.  

![Claude Code Welcome Screen](/claude-code-welcome.jpeg)

Here’s what I’ve learned.  

---

## 1. Keep a Sharp \`CLAUDE.md\`  

Think of this file as your onboarding document. It’s where you give Claude the context, the biases, and the “house style” for how you like to build. Unlike old documentation that gets stale and forgotten, this one has power. It is loaded every session and actively shapes what Claude generates.  

What I include:  
- Architecture rules  
- Stack and versions  
- Folder layout  
- Style preferences  
- Common scripts  
- Testing expectations  
- Warnings and gotchas  

I also link out to subfiles for deeper rules. For example, my root \`CLAUDE.md\` might point to \`@docs/api-guidelines.md\` or \`@docs/testing.md\`. That keeps things organized instead of dumping everything in one place.  

And here’s the critical part: it must stay current. Out of date docs are worse than useless. The CLAUDE.md needs to evolve as the project evolves. Every time Claude does something wrong, I don’t just fix it. I add a new rule so it learns for next time.  

---

## 2. Build Your Own Slash Commands  

Any time I catch myself repeating something, that’s a command waiting to be written. These live in \`.claude/commands/\` and are versioned with the repo.  

My daily set:  
- \`/feature-plan <feature>\` — Claude asks questions, proposes options, breaks it into tasks  
- \`/scope-improvement <component>\` — only suggests improvements inside the scope of what already exists  
- \`/isolate-domain <module>\` — defines domain boundaries, so Claude doesn’t mess with other features when I’m working in parallel  
- \`/review\` — challenges its own code, checks style, tests, and architecture  

The point is to stop babysitting Claude and start codifying the way you like to work.  

---

## 3. Use the Built In Commands

The defaults matter more than people think. Knowing these makes your workflow smoother:

- \`/init\` — Bootstraps a CLAUDE.md from your existing project, seeding memory automatically
- \`/clear\` — Clears the current session's conversational context. Use when switching tasks or domains
- \`/compact\` — Prune or summarize context to free tokens while preserving what matters. Tell Claude what to focus on (e.g. "Focus on authentication logic and schema decisions") so it keeps critical context
- \`/review\` — Ask Claude to audit a file or changes for style, quality, and logic
- \`/model\` — Switch Claude's internal model (e.g. Sonnet vs Opus) depending on whether you want speed or depth
- \`/help\` — Show the list of available slash commands and what they do (handy cheat sheet)

I use them constantly. They're small resets that keep Claude aligned.  

---

## 4. Planning Mode

This is the most underused feature, and it's a game changer.

Plan Mode stops Claude from touching your file system until you approve its proposal. You trigger it with \`Shift + Tab\` twice or by saying "Propose a plan first. Wait for me to review."

What you get is a design: alternative approaches, tradeoffs, steps, and module breakdowns. You can inspect, critique, and adjust before anything changes. This catches architectural flaws early and aligns expectations before code gets written.

The plan isn't gospel. I treat it like a draft and challenge it the same way I would in code review: "Is that module too coupled? Did you miss edge cases? Is this the right abstraction?" Once refined, the plan becomes the prompt that guides execution.

For bigger picture architecture, I often plan in other tools, then dump the plan into Claude Code as context. It does well executing detailed plans, but less well inventing huge system designs from scratch.  

---

## 5. Prompt Like You Mean It  

Claude does what you tell it. If you’re vague, you’ll get vague results. Patterns I rely on:  

- Ask it to explain before coding so I can catch bad assumptions  
- Get multiple alternatives before choosing an approach  
- Define boundaries clearly: what to touch, what not to touch  
- Force plan mode to avoid rushed outputs  

The way you frame the prompt is everything.  

---

## 6. Manage Context Aggressively

Claude has a huge context window, but drift is real. My habits:

- **Use \`/clear\` when I switch features or domains.** It wipes the conversational memory so you start fresh. This prevents bleeding context from authentication work into payment logic, for example.

- **Use \`/compact\` when the conversation grows heavy.** Tell it what matters (e.g. "Focus on authentication logic and schema decisions") so it prunes fluff but keeps critical context.

- **Use subagents for docs, tests, or refactors** so the main thread stays lean. Let specialized agents handle orthogonal work without polluting your primary context.

- **Make frequent git commits before big prompts.** Claude sometimes "gets carried away," so commits let me roll back cleanly.

- **Avoid very long, sprawling sessions without refresh** — drift can creep in even with a massive context window.

This is the difference between sharp outputs and spaghetti.  

---

## 7. Always Review and Challenge  

Claude writes fast, but you’re still responsible for quality. I always:  

- Run lint, type checks, and tests  
- Use \`/review\` or my custom review macro to audit  
- Double check dependencies to avoid hallucinated packages  
- Question its design choices: “Can you refactor this to follow clean code practices? Can we decouple this better?”  

Claude listens. It takes feedback and responds with improvements. The more you challenge it, the better the code becomes.  

---

## 8. Bring Claude Into Your Environment  

Claude feels most useful when it’s part of my normal workflow:  
- The VS Code extension keeps it right in my editor  
- CLI mode lets me script prompts or pipe logs directly  
- Multiple sessions let me isolate features cleanly  

The less context switching I do, the more it feels like a teammate.  

---

## 9. Chain Your Work  

I never ask for a whole feature in one go. I break it into:  
1. Plan  
2. Code  
3. Test  
4. Review  

This pipeline gives me checkpoints and makes the output more reliable.  

---

## 10. Guard Permissions  

Claude can run commands and edit files. I almost always keep permission prompts on. It’s too easy to cause damage if you let it run unchecked.  

Think of it like onboarding a junior engineer. You wouldn’t give them production access on day one.  

---

## 11. Test First  

Asking Claude to generate tests before writing code forces it to think about edge cases. Then I let it implement so the tests pass. This produces sturdier results.  

---

## 12. Keep Learning Its Quirks  

Claude is great at scaffolding, boilerplate, and reviews. It struggles with edge cases, long sessions, and dependencies. The more I document those quirks and adapt, the smoother things go.  

It’s not static. It’s a tool you tune.  

---

## Closing  

Most developers stop at “Claude, build me X.” Then they complain when it doesn’t align with their expectations.  

The truth is you need to onboard Claude like you would a developer. Give it context, guidance, structure, and feedback. Keep its documentation alive. Challenge its work. Teach it your way of building.  

Do that, and Claude Code goes from a flashy demo to a reliable collaborator.  

That’s been my experience from the trenches.  

What’s in your playbook?  
`,u=`---
title: "How a Year Off Rewired My Perspective"
date: "2025-09-01"
excerpt: "After six years in tech, I stepped away for a year to travel across four continents. That break rewired how I think, reset my energy, and gave me fresh perspective on work and life."
category: "Career"
readTime: "3 min"
---
After six years of working as a software engineer and tech lead, I hit pause. Not because I was burned out. Not because I hated my work. I just wanted perspective. I’d always dreamed of traveling the world, and last year I finally took the leap. A year-long career break across four continents and more than 15 countries.

Here’s what I realized. Over years of work, you get wired a certain way. Routines, systems, and habits make you efficient, but they also make you rigid. Sometimes, to really grow, you have to cut those wires and allow yourself to be rewired.

Travel did that for me. It broke patterns I didn’t even know I was stuck in. I saw how differently people live and think, and learned you don’t need to understand everyone. You just need to listen.

Some moments hit harder than others. Standing beneath the Great Pyramids in Giza or wandering through Angkor Wat, I felt small. People have always achieved incredible things. We talk about technology moving faster than ever, but I’m sure they felt the same back then. It’s all perspective. The broader your horizons, the more you see how much is always in motion.

And when I came back, the timing could not have been crazier. Right in the middle of AI’s explosion. But instead of being overwhelmed, I felt clear. Like wiping a hard drive before a fresh install, I was ready to load new ideas without the clutter of old biases. Taking a break didn’t set me back. It rewired me to move forward faster.

If you have ever thought about stepping away, I can’t recommend it enough. The world keeps moving whether you are in the race or not. Sometimes the best way to catch up is to stop running.
`,g=`---
title: "When All My Friends Became Developers Too"
date: "2025-09-15"
excerpt: "AI has lowered the barrier to software, letting friends from completely different worlds build apps. But when they get lost in the sauce, that's where engineering experience still matters."
category: "AI & Engineering"
readTime: "4 min"
---
Over the past year, a wave of friends has reached out to me for help on their projects. Not friends from engineering school. Not people who spent years debugging APIs or designing systems. These are friends from business, design, and completely different worlds. And here’s the wild part: they’re building apps.  

Not just drag-and-drop Wix sites. Full systems with databases, API integrations, and features I used to think of as “real engineering.” They’re wiring things together, solving problems, and launching products with tools I never imagined they’d use.  

The reason is simple: AI lowered the barrier. What once took months of learning now takes a few weekends and the right prompts. AI doesn’t just autocomplete code. It explains errors, generates schemas, and connects pieces in a way that used to demand years of experience.  

But there’s a catch. Eventually, they hit a wall. The AI builds faster than their understanding can keep up. Suddenly, the app feels bigger than them. They get lost in the sauce. When something breaks or an early decision creates problems, they don’t know how to guide the AI toward a fix, because they don’t fully understand the architecture underneath.  

That’s where I step in. When a friend calls, it’s not just about solving a bug. It’s about giving them just enough context so they can reason through the problem and steer the AI toward a solution, without needing the full weight of engineering school in their heads. Striking that balance has been eye-opening.  

At first, I wasn’t sure how to feel. I’ve spent years building scalable systems and leading teams through messy technical challenges. Part of me wondered if my craft was being diluted. But the more I watch, the more I see this shift as exciting.  

Because it’s not about everyone becoming an engineer. It’s about more people being able to ship ideas. Some projects will outgrow no-code or AI-assisted beginnings, and that’s when experience still matters. But the fact that my friends can now move from idea to product without the old hurdles, that’s powerful.  

It’s made me rethink my role. Maybe being an engineer today isn’t only about writing optimized code. Maybe it’s also about being a guide, a partner, and sometimes a translator between people’s ideas and the systems that bring them to life. That feels like a future worth leaning into.  
`,m=(e,t)=>{const a=new Date(e.date);return new Date(t.date).getTime()-a.getTime()},p=Object.assign({"../content/blog/devs-are-dead-my-rebirth-as-an-ai-agent-manager.md":h,"../content/blog/getting-claude-code-right-best-practices-from-the-trenches.md":c,"../content/blog/how-a-year-off-rewired-my-perspective.md":u,"../content/blog/when-all-my-friends-became-developers-too.md":g}),s=Object.entries(p).map(([e,t])=>{const a=e.split("/").pop()||"",o=r(a),n=l(t,o);return n.readTime||(n.readTime=d(n.content)),n}).sort(m),b=()=>s,k=e=>s.find(t=>t.slug===e);export{f as C,k as a,b as g};
