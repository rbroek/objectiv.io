import React, { useEffect } from "react";
import mermaid from "mermaid";
import useBaseUrl from '@docusaurus/useBaseUrl';

mermaid.initialize({
  logLevel: 4,
  securityLevel: 'loose', //enable click functionality
	startOnLoad: true,
  arrowMarkerAbsolute: false,
  flowchart: {
    diagramPadding: 20,
    htmlLabels: true,
    curve:'cardinal',
    useMaxWidth: true,
  },
  theme: 'base', 
  themeCSS: `
    .node rect { 
      fill: #abe9feff;
      stroke: rgb(0, 100, 150);
    }
    a:hover {
      cursor: pointer;
    }
    .label {
      font-size: 14px;
    }
    .edgeTerminals {
      font-size: 16px;
    }
    .properties, .requires_context {
      font-size: 0.8em;
      display: block;
    }
    .requires_context .properties {
      border-top: 1px solid #000;
      margin-top: 3px;
      padding-top: 3px;
      font-size: 1em;
    }
`,
});

const Mermaid = ({ chart, caption, baseColor, links}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);

  let clicks = '';
  if(links && links.length > 0) {
    for (const link of links) {
      // todo: use baseUrl
      const name = link.name ? link.name : '';
      const linkTo = link.to ? useBaseUrl(link.to) : '#';
      const tooltip = link.tooltip ? link.tooltip : 'See details';
      const target = link.target ? link.target : '_self';
      clicks = clicks + '\n click '+name+' "'+linkTo+'" "'+tooltip+'" '+target+'';
    }
  }
  const chartClicks = chart + clicks;

	return (
    <div className={"diagram-"+baseColor}>
      <div className="mermaid">{chartClicks}</div>
      <p className="diagram-caption">{caption}</p>
    </div>
  );
};

export default Mermaid;