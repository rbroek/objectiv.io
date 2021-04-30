import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  logLevel: 4,
  securityLevel: 'loose', //enable click functionality
	startOnLoad: true,
  arrowMarkerAbsolute: false,
  fontFamily: 'Roboto Mono, Bungee, sans-serif',
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
    .label {
      font-size: 14px;
    }
    .properties {
      font-size: 0.8em;
    }
`,
});

const Mermaid = ({ chart, caption, baseColor}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div className={"diagram-"+baseColor}><div className="mermaid">{chart}</div><p class="diagram-caption">{caption}</p></div>;
};

var exampleCallback = function() {
  alert('A callback was triggered');
}

export default Mermaid;