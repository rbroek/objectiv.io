import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  logLevel: 4,
  securityLevel: 'loose', //enable click functionality
	startOnLoad: true,
  arrowMarkerAbsolute: false,
  fontFamily: 'Roboto Mono, Bungee, sans-serif',
  deterministicIds: false,
  deterministicIDSeed: 'ivartest',
  flowchart: {
    curve:'cardinal',
    htmlLabels: true,
  },
  theme: 'base', 
  themeCSS: `
    .node rect { 
      fill: #abe9feff;
      stroke: rgb(0, 100, 150);
    }
    .label {
      font-size: 14px;
    }
    .properties {
      font-size: 0.8em;
    }
`,
});

const Mermaid = ({ chart, caption, diagramType}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className={"diagram-"+diagramType}><div className="mermaid">{chart}</div><p class="diagram-caption">{caption}</p></div>;
};

var exampleCallback = function() {
  alert('A callback was triggered');
}

export default Mermaid;