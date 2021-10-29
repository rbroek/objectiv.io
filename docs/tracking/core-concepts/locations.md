---
sidebar_position: 4
title: Locations
slug: locations
---

Locations in Objectiv describe the exact position in an application's UI from where an Event was triggered. 
It is composed of a hierarchical stack of UI elements; the order defines the hierarchy.

Example Location Stack for an Event:
```json
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"hero"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
      "href":"/path"
    }
  ]
```

In this example, there is a link that lives in Section 'hero' within Section 'homepage'.

Together with an `id`, a Location Stack makes every Event unique. For example, another Link with the same 
`id` on the homepage, but in a Section called 'footer', is still unique:

```json
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"footer"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
      "href":"/path"
    }
  ]
```

## Applying Locations

When [tagging](/tracking/api-reference/location-taggers/overview.md) Elements in the UI, this binds the 
appropriate [LocationContext](/taxonomy/location-contexts/overview.md) to it, using 
[Tagging Attributes](/tracking/api-reference/general/TaggingAttributes.md). Events are then triggered 
automatically based on that [LocationContext](/taxonomy/location-contexts/overview.md) bound to the 
[Tagged Element](/tracking/core-concepts/elements.md#tagged-elements).


Sometimes it may be preferable, or necessary, to tag Locations manually; for these cases, a low-level 
[tagLocation](/tracking/api-reference/low-level/tagLocation.md) API is available, which tags a Taggable 
Element to be tracked as any LocationContext.
