---
title: "Onboarding Has Changed: How AI Tools Cut Ramp-Up Time in Half"
date: "2025-11-13"
excerpt: "Two weeks into my new role at Badge.dev, I'm shipping features instead of drowning in docs. AI tools have completely transformed how engineers ramp up on new codebases."
category: "AI & Engineering"
readTime: "7 min"
---

Two weeks ago I joined [Badge.dev](https://www.badge.dev/), a company building mobile wallet infrastructure for Apple, Google, and Samsung Wallets. New codebase. New domain. New team. The traditional playbook says I should be spending these first weeks lost in documentation, booking long sessions with senior engineers, and feeling like I'm constantly interrupting people with basic questions.

Instead, I've already built multiple endpoints, shipped bug fixes, and contributed meaningfully to the product. Not because I'm some 10x engineer, but because the tools for ramping up on a new codebase have completely transformed.

## The old way was brutal for everyone

I spent three years at Moves, a fintech startup where I led the team building the banking platform. I onboarded plenty of engineers during that time, and I remember exactly how it went.

New hire shows up. We'd point them at our Notion docs, most of which were written 18 months ago and hadn't aged well. They'd read for a few days, absorbing maybe 30% of it, overwhelmed by context they couldn't yet place. Then came the calendar invites: sessions with me and other senior engineers walking through the architecture, explaining how data flows through the system, why we made certain decisions, where the bodies are buried.

These sessions were exhausting for everyone. The new hire was drinking from a firehose, trying to take notes fast enough while also appearing competent. The senior engineers were context-switching out of deep work to explain things they'd explained three times before to previous hires. And despite all that investment, it still took weeks before the new person could contribute anything meaningful.

The research backs this up. Most engineers take 3-6 months to reach full productivity at a new company. Spotify famously tracked "time to 10th pull request" as their onboarding metric, and before they built internal tooling to address it, that number had stretched past 60 days.

## What's different now

My setup at [Badge.dev](https://www.badge.dev/): Claude Code with Opus 4.5, Cursor with Composer, brief meetings, a light question here and there, and some light guidance docs. That's it. But the way these tools let me interact with an unfamiliar codebase is genuinely different from anything I've experienced before.

When I hit a part of the code I don't understand, I don't grep around for 20 minutes trying to build context. I ask:

```text
Walk me through how a pass gets created and distributed
to a user's wallet. Start from the API endpoint and trace
through to the wallet provider integration.
```

And I get an actual explanation that traces the data flow, names the relevant files, and explains the design decisions along the way. Not a generic answer, an answer about this codebase.

When I need to understand how entities relate to each other, I ask for a diagram:

```text
Generate a Mermaid diagram showing the relationships between
Organization, Pass Template, Pass, and User entities. Include
the key fields that link them.
```

What used to require booking time with someone who built the system now takes 30 seconds. And unlike a human explanation that I might half-remember a week later, I can regenerate it whenever I need a refresher.

## The questions I'm not asking my teammates

This is the part that matters most to me: the questions I'm not interrupting people with.

Every "hey, quick question" message to a senior engineer has a cost. They have to context-switch out of whatever they're working on, load up the mental model of the thing you're asking about, explain it, then try to get back into flow. Research suggests developers lose 20-30 minutes of productive time per interruption. Multiply that by the dozens of questions a new hire has in their first weeks, and you're talking about a serious tax on the team.

With AI tools, I can ask the dumb questions privately:

- "What's the difference between these two similarly-named services?"
- "Why does this function take these specific parameters?"
- "What's the expected format for this API response?"
- "Where is authentication handled for this endpoint?"

These are legitimate questions that I need answered to do my work. But they're also questions that don't require a human to answer. The codebase contains the information. I just need a way to query it conversationally rather than through grep and file-hopping.

## Practical patterns that have worked

A few specific workflows that have accelerated my ramp-up:

**Architecture sessions with myself.** When I'm about to work on a new area of the code, I start by asking Claude to explain the high-level architecture. Then I ask follow-up questions until I have a mental model. It's like having a patient senior engineer who never gets annoyed when I ask them to explain something a different way.

**PR context loading.** When I'm reviewing a pull request and don't understand why certain changes were made, I can link the diff and ask for context. "What problem is this solving? What are the tradeoffs of this approach?" This is especially valuable early on when I don't have the historical context that long-tenured team members have.

**Understanding coding conventions.** Every codebase has patterns and conventions that aren't written down anywhere. By asking Claude to analyze existing code, I can pick up on these patterns much faster than I would through osmosis. "How do we typically handle errors in this service?" "What's the pattern for adding a new API endpoint?"

**Entity relationship mapping.** Asking for Mermaid diagrams of database schemas and entity relationships gives me a visual reference I can keep open while working. Way faster than mentally constructing these relationships by reading through model definitions.

## This compounds over time

Recent research from DX found that engineers who use AI tools daily reach their 10th pull request in 49 days, compared to 91 days for those who don't. That's not a small difference. That's cutting onboarding time nearly in half.

But the real value isn't just speed to first contributions. It's the compound effect of building context faster. Every piece of understanding I gain in week one makes week two more productive. The faster I build an accurate mental model of the system, the better my contributions become, the more I can take on, the more context I build.

There's also a quality dimension here. When I can instantly verify my understanding of how something works, I make fewer wrong assumptions. Fewer wrong assumptions means fewer bugs, fewer misguided refactors, less time spent going down dead ends.

## What this doesn't replace

I want to be clear about what AI tools don't do.

They don't replace the relationship-building that happens during onboarding. I still need to meet my teammates, understand how decisions get made, learn who knows what. The human side of joining a team is just as important as the technical side.

They don't replace the judgment that comes from experience. Claude can tell me how something works, but it can't tell me whether the current approach is good or if there's tech debt I should be aware of. That still requires conversations with people who've been working in the codebase.

They don't eliminate the need for code review. If anything, they make good code review more important, because I'm moving faster and need experienced eyes catching things I might miss as a newcomer.

And they require verification. AI tools are confident even when they're wrong. I've learned to trust but verify, especially for anything security-related or architecturally significant.

## The shift is real

Two weeks in, I'm contributing meaningful code to [Badge.dev](https://www.badge.dev/)'s platform. Not toy changes, not documentation updates, but actual features and fixes that ship to customers.

A year ago, I'd still be in the "reading docs and booking meetings" phase. The tooling has changed that fundamentally.

If you're onboarding somewhere new, my suggestion: set up Claude Code or Cursor on day one. Start asking questions about the codebase immediately. Generate diagrams to build your mental model. Use the AI as an always-available resource for the dozens of small questions you'd otherwise be interrupting people with.

The goal isn't to replace human interaction. It's to make your human interactions count for more. Ask your teammates the hard questions, the judgment calls, the "why did we decide this" questions. Let AI handle the "how does this work" questions.

New hires can hit the ground not just running, but sprinting. And your teammates will thank you for not pinging them every 20 minutes with quick questions.
