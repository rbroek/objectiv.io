import React, { useEffect } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  theme: 'default',
  logLevel: 4,
  securityLevel: 'loose', //enable click functionality
	startOnLoad: true,
  arrowMarkerAbsolute: false,
  fontFamily: 'Roboto Mono, Bungee, sans-serif',
  deterministicIds: false,
  deterministicIDSeed: 'ivartest',
  flowchart: {
    curve:'cardinal',
    fontSize: 12,
    sectionFontSize: 12,
    boxMargin: 30,
    boxTextMargin: 30,
    htmlLabels: true,
    useMaxWidth: true,
  },
});

const Mermaid = ({ chart, caption}) => {
	useEffect(() => {
		mermaid.contentLoaded();
	}, []);
	return <div><div className="mermaid">{chart}</div><p class="diagram-caption">{caption}</p></div>;
};

var exampleCallback = function() {
  alert('A callback was triggered');
}

export default Mermaid;