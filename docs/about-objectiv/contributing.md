---
title: Contributing
slug: /the-project/contributing
sidebar_label: Contributing
sidebar_position: 4
---

import Mermaid from '@theme/Mermaid';


<Mermaid chart={`
	graph LR
		Bug ---> CheckIssues["Check Issues"];
    CheckIssues --> Comment["Comment/+1"];
    CheckIssues --> Issues;
    FeatureRequest["Feature Request"] --> CheckRoadmap["Check Roadmap"];
    CheckRoadmap --> CheckIssues;
    Contribution ----> PR;
    LabelUpdate["Label update"] ----> PR;
    Question --> Docs;
    Docs ---> DiscourseTroubleshooting["Discourse Troubleshooting"]
    GetUpdates["Get Updates"] ----> DiscourseUpdates["Discourse Updates"];
    GetUpdates ----> OfficeHours["Office Hours"];
    Question ----> OfficeHours["Office Hours"];
    Docs;
    SecurityIssue["Security Issue"] ----> Email;
`} caption="Figure: Contributing" baseColor="basic" />