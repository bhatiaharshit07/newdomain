# Content System

This site treats content as a Git-backed product surface. Add long-form content as MDX files under one of these folders:

- `content/insights`
- `content/architectures`
- `content/playbooks`
- `content/research`
- `content/projects`
- `content/talks`
- `content/snippets`

Every published file should use this front matter shape:

```md
---
title:
slug:
description:
published:
updated:
author: Harshit Bhatia
category: Enterprise AI
tags:
  - Agentic AI
featured: false
cover:
readingTime:
difficulty: Intermediate
series:
seoTitle:
seoDescription:
canonical:
---
```

Use only these primary categories until the library grows:

- Enterprise AI
- Agentic AI
- Computer Vision
- Architecture
- Leadership

Available MDX components:

```mdx
<Callout title="Core idea">Important context.</Callout>

<Warning>Risk or operational warning.</Warning>

<Architecture title="Reference design">Architecture notes.</Architecture>

<Mermaid
  chart={`graph LR
A --> B`}
/>

<CodeBlock>code sample</CodeBlock>
```

Architecture articles should keep this rhythm:

1. Problem
2. Constraints
3. Solution
4. Diagram
5. Components
6. APIs
7. Data Flow
8. Scaling
9. Security
10. Cost
11. Future Improvements
