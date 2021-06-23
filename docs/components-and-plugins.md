---
title: Components and Plugins
slug: /components-and-plugins
---

import File from '@site/src/components/file';
import Lightbox from '@site/src/components/lightbox';
import Mermaid from '@theme/Mermaid';

## Components
Since Docusaurus uses MDX as the parsing engine, it can also render React components inside a Markdown 
document. Use the components below directly in Markdown files.

### Lightbox
Show Images full screen, with a simple fade-in or zoom effect.

**Parameters:**
* `src`: Path to the image.
* `title`: Optional alt tag for the image.
* `caption`: Optional caption to show below the thumbnail.
* `size`: Size of the thumbnail. Possible values: 'l', 'm', 's', 'xs'. Default is 'l'.
* `type`: Either 'lightbox' (default fade-in effect) or 'zoom' (zoom in effect).

<Lightbox src="/img/docs/ROD-homepage.png" title="ROD" caption="Figure: Rick On Demand" size="l" 
  type="zoom" />

**How To**

<pre>{`import Lightbox from '/src/components/lightbox';

<Lightbox src="/img/docs/ROD-homepage.png" title="ROD" caption="Figure: Rick On Demand" size="l" 
  type="zoom" />
`}</pre>

### YouTubeVideo
Show a YouTube video that's scaled to full-width and height in 16:9 ratio.

**Parameters:**
* `src`: Path to the YouTube video.

<YouTubeVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />

**How To**

<pre>{`import YouTubeVideo from '/src/components/youtube-video';

<YouTubeVideo src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
`}</pre>


### Diagrams (Mermaid)
Component to generate diagrams from Markdown syntax.

**Parameters**
* `chart`: The chart definition in Markdown.
* `caption`: Optional caption to show below the chart.
* `baseColor`: Basic color to use for the components in the chart. Possible values: 'basic' (which is white), 
  'blue', 'pink', 'yellow'.

Full reference: [Mermaid Diagram Syntax](https://mermaid-js.github.io/mermaid/#/n00b-syntaxReference).

<Mermaid chart={`
	graph TD
    Rick --- Rolled;
`} caption="Figure: ROD Diagram" baseColor="basic" />

**How To**
<pre>{`import Mermaid from '@theme/Mermaid';

<Mermaid chart={\`
  graph TD
    Tracking --- Taxonomy;
\`} caption="Figure: Diagram" baseColor="basic" />
`}</pre>

### File
Format a file and its contents.

<File name="~/.dbt/profiles.yml">
    <pre>
        password: hunter2
    </pre>
</File>

**Parameters**
* `name`: Filename to show above the file contents.

**How To**
<pre>{`import File from '@site/src/components/file';

<File name="~/.dbt/profiles.yml">
    <pre>
        password: hunter2
    </pre>
</File>
`}</pre>


## Markdown Plugins
The following plugins are baked into the Markdown compilation context, so simply add them inline in Markdown 
files to use them.

### Footnotes
Here is a footnote[^1]

[^1]: Here is the footnote.

**How To**

<pre>{`Here is a footnote,[^1]

[^1]: Here is the footnote.
`}</pre>

**Detailed reference**

GitHub: [remark-footnotes](https://github.com/remarkjs/remark-footnotes).

### Collapsibles
<details><summary>Open collapsible example</summary>
Tada!
</details>

<br />

**How To**

<pre>{`<details><summary>Open collapsible example</summary>
Tada!
</details>
`}</pre>

**Detailed reference**

GitHub: [remark-collapse](https://github.com/Rokt33r/remark-collapse).

### GitHub Links

Some references:
*   Commit: f8083175fe890cbf14f41d0a06e7aa35d4989587
*   Commit (repo): remarkjs/remark@e1aa9f6c02de18b9459b7d269712bcb50183ce89
*   Mention: @borft

Some links:
*   Commit comment: <https://github.com/remarkjs/remark/commit/ac63bc3abacf14cf08ca5e2d8f1f8e88a7b9015c#commitcomment-16372693>
*   Issue or PR comment: <https://github.com/remarkjs/remark-github/issues/3#issue-151160339>
*   Mention: <https://github.com/ben-eb>

**How To**

<pre>{`Some references:
*   Commit: f8083175fe890cbf14f41d0a06e7aa35d4989587
*   Commit (repo): remarkjs/remark@e1aa9f6c02de18b9459b7d269712bcb50183ce89
*   Mention: @borft

Some links:
*   Commit comment: <https://github.com/remarkjs/remark/commit/ac63bc3abacf14cf08ca5e2d8f1f8e88a7b9015c#commitcomment-16372693>
*   Issue or PR comment: <https://github.com/remarkjs/remark-github/issues/3#issue-151160339>
*   Mention: <https://github.com/ben-eb>
`}</pre>

**Detailed reference**

GitHub: [remark-github](https://github.com/remarkjs/remark-github)

### Remark-License
Replaces the content under a 'license' heading with the one configured in `docusaurus.config.js`.

**How To**

<pre>{`### License
`}</pre>

**Detailed reference**

GitHub: [remark-license](https://github.com/remarkjs/remark-license)

**Example:**
### License
Show it
