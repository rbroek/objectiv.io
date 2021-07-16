---
title: Contributing
slug: /the-project/contributing
sidebar_label: Contributing
sidebar_position: 4
---

import Mermaid from '@theme/Mermaid';
import TOCInline from '@theme/TOCInline';


First off, thank you for considering to contribute to Objectiv! Please feel welcome - we need volunteer developers like yourself to help this project be a success. We’re here to help you find things to work on that you're excited about.

**Where to start?**

There are many ways to contribute, from improving [the documentation](https://objectiv.io/docs/), helping people on our [Discourse forums](https://discourse.objectiv.io/), or submitting [bug reports & feature requests](https://github.com/objectiv/objectiv-analytics/issues), to writing code for the Objectiv [Taxonomy](https://github.com/objectiv/objectiv-analytics/tree/main/tracker/core/schema), [trackers](https://github.com/objectiv/objectiv-analytics/tree/main/tracker) and [tracker plugins](https://github.com/objectiv/objectiv-analytics/tree/main/tracker/plugins), or the [backend](https://github.com/objectiv/objectiv-analytics/tree/main/backend). See our [public roadmap](https://github.com/objectiv/objectiv-analytics/projects/2) for areas we plan to work on next.

To jump straight to what you’re looking for, see Objectiv’s contribution map below:

<Mermaid chart={`
	graph LR
    SecurityIssue["Security Issue"] ----> SecurityPolicy["See Security Policy"];
    Question --> Docs["See Documentation"] ---> Discourse["Discourse Forums"]
		Bug ---> CheckIssues["Check GitHub Issues"];
    CheckIssues --> Comment["Comment/+1"];
    CheckIssues --> GitHubIssue["Create GitHub Issue"];
    FeatureRequest["Feature Request"] --> CheckRoadmap["Check Public Roadmap"];
    CheckRoadmap --> CheckIssues;
    Contribution ----> PR["Create a Pull Request"];
    LabelUpdate["GitHub Label update"] ----> PR["Create a Pull Request"];
    StayUpToDate["Receive Updates"] ----> DiscourseUpdates["See Discourse 'Updates' Forum"];
    click SecurityPolicy "https://github.com/objectiv/objectiv-analytics/blob/main/SECURITY.md" "See Security Policy" _blank;
    click Docs "https://objectiv.io/docs" "See Objectiv Documentation" _blank;
    click Discourse "https://discourse.objectiv.io/" "See Objectiv Discourse Forums" _blank;
    click CheckIssues "https://github.com/objectiv/objectiv-analytics/issues" "Go to GitHub Issues" _blank;
    click GitHubIssue "https://github.com/objectiv/objectiv-analytics/issues" "Go to GitHub Issues" _blank;
    click CheckRoadmap "https://github.com/objectiv/objectiv-analytics/projects/2" "Go to Public Roadmap" _blank;
    click PR "https://github.com/objectiv/objectiv-analytics/pulls" "Go to GitHub Pull Requests" _blank;
    click DiscourseUpdates "https://discourse.objectiv.io/" "See Objectiv Discourse Forums" _blank;
`} caption="Figure: How To Contribute" baseColor="basic" />

The following is a set of guidelines for contributing that help communicate respect for each other’s time & contributions. These are mostly guidelines, not rules; simply use your best judgment, and feel free to propose changes to this document in a pull request. 

**Table Of Contents**

<TOCInline
  toc={
    [toc[1]]
  }
/>;

# Code of Conduct {#code-of-conduct}

This project and everyone participating in it is governed by the [Objectiv Code of Conduct](https://github.com/objectiv/objectiv-analytics/blob/main/CODE_OF_CONDUCT.md). By participating in any form, you are expected to uphold this code. Please report unacceptable behavior to [abuse@objectiv.io](mailto:abuse@objectiv.io).


# I Found A Security Issue {#i-found-a-security-issue}

We take security issues very seriously. Please do not open up a GitHub issue if the bug is a security vulnerability, and instead to refer to our security policy.
