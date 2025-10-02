---
title: "Getting Claude Code Right: Best Practices from the Trenches"
date: "October 2025"
excerpt: "My personal playbook of tactics, macros, and workflows that make Claude Code a reliable teammate instead of a frustrating black box."
category: "AI & Engineering"
readTime: "7 min"
order: 4
---

# Getting Claude Code Right: Best Practices from the Trenches

When I first started using Claude Code, I made the same mistake most people do. I treated it like a vending machine: "Hey Claude, build me X." Sometimes it worked. Sometimes it spat out garbage. Mostly, it felt random.  

After a while, I realized that wasn’t Claude’s fault. It was mine. I was barking orders instead of giving it the same environment I’d give a real engineer: context, structure, rules, and guidance.  

Since then, I’ve spent months in the trenches with Claude Code. Testing, breaking, fixing, teaching, and refining. Along the way I’ve built a playbook of tactics that actually work. Not theory, not hype, just the practices I lean on every day to get consistent, high quality output.  

![Claude Code Welcome Screen](/liam-duncan-development/src/assets/images/claude-code-welcome.jpeg)

Here’s what I’ve learned.  

---

## 1. Keep a Sharp `CLAUDE.md`  

Think of this file as your onboarding document. It’s where you give Claude the context, the biases, and the “house style” for how you like to build. Unlike old documentation that gets stale and forgotten, this one has power. It is loaded every session and actively shapes what Claude generates.  

What I include:  
- Architecture rules  
- Stack and versions  
- Folder layout  
- Style preferences  
- Common scripts  
- Testing expectations  
- Warnings and gotchas  

I also link out to subfiles for deeper rules. For example, my root `CLAUDE.md` might point to `@docs/api-guidelines.md` or `@docs/testing.md`. That keeps things organized instead of dumping everything in one place.  

And here’s the critical part: it must stay current. Out of date docs are worse than useless. The CLAUDE.md needs to evolve as the project evolves. Every time Claude does something wrong, I don’t just fix it. I add a new rule so it learns for next time.  

---

## 2. Build Your Own Slash Commands  

Any time I catch myself repeating something, that’s a command waiting to be written. These live in `.claude/commands/` and are versioned with the repo.  

My daily set:  
- `/feature-plan <feature>` — Claude asks questions, proposes options, breaks it into tasks  
- `/scope-improvement <component>` — only suggests improvements inside the scope of what already exists  
- `/isolate-domain <module>` — defines domain boundaries, so Claude doesn’t mess with other features when I’m working in parallel  
- `/review` — challenges its own code, checks style, tests, and architecture  

The point is to stop babysitting Claude and start codifying the way you like to work.  

---

## 3. Use the Built In Commands

The defaults matter more than people think. Knowing these makes your workflow smoother:

- `/init` — Bootstraps a CLAUDE.md from your existing project, seeding memory automatically
- `/clear` — Clears the current session's conversational context. Use when switching tasks or domains
- `/compact` — Prune or summarize context to free tokens while preserving what matters. Tell Claude what to focus on (e.g. "Focus on authentication logic and schema decisions") so it keeps critical context
- `/review` — Ask Claude to audit a file or changes for style, quality, and logic
- `/model` — Switch Claude's internal model (e.g. Sonnet vs Opus) depending on whether you want speed or depth
- `/help` — Show the list of available slash commands and what they do (handy cheat sheet)

I use them constantly. They're small resets that keep Claude aligned.  

---

## 4. Planning Mode

This is the most underused feature, and it's a game changer.

Plan Mode stops Claude from touching your file system until you approve its proposal. You trigger it with `Shift + Tab` twice or by saying "Propose a plan first. Wait for me to review."

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

- **Use `/clear` when I switch features or domains.** It wipes the conversational memory so you start fresh. This prevents bleeding context from authentication work into payment logic, for example.

- **Use `/compact` when the conversation grows heavy.** Tell it what matters (e.g. "Focus on authentication logic and schema decisions") so it prunes fluff but keeps critical context.

- **Use subagents for docs, tests, or refactors** so the main thread stays lean. Let specialized agents handle orthogonal work without polluting your primary context.

- **Make frequent git commits before big prompts.** Claude sometimes "gets carried away," so commits let me roll back cleanly.

- **Avoid very long, sprawling sessions without refresh** — drift can creep in even with a massive context window.

This is the difference between sharp outputs and spaghetti.  

---

## 7. Always Review and Challenge  

Claude writes fast, but you’re still responsible for quality. I always:  

- Run lint, type checks, and tests  
- Use `/review` or my custom review macro to audit  
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
