---
sidebar_position: 2
title: AbstractContext
---

import Mermaid from '@theme/Mermaid';

## AbstractContext
AbstractContext defines the bare minimum properties for every Context. All Contexts inherit from it.

### Properties
|           | type        | description
| :--       | :--         | :--           
| **id**    | string      | A unique string identifier to be combined with the Context Type (`_type`) for Context instance uniqueness.
| **_type** | string      | A string literal used during serialization. Should always match the Context interface name.
