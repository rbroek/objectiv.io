# tagExpandableElement

Tags [Taggable Element](/tracking/core-concepts/tagging.md#taggable-elements) to be tracked as [ExpandableSectionContext](/taxonomy/location-contexts/ExpandableSectionContext.md).

```typescript
tagExpandableElement = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/globals/TagLocationOptions.md)         | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/globals/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/globals/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
- [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagExpandableElement } from '@objectiv/tracker-browser';
```

```typescript jsx
<div {...tagExpandableElement({ id: 'faq-item-id' })}>
  ...
</div>
```

```typescript jsx
<Accordion {...tagExpandableElement({ id: 'accordion-id' })}>
  ...
</Accordion>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div [tagExpandableElement]="{ id: 'faq-item-id' }">
  ...
</div>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagExpandableElement` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagButton](tagButton)
- [tagLink](tagLink)
- [tagElement](tagNavigation)
- [tagNavigation](tagNavigation)
- [tagOverlay](tagOverlay)
- [tagMediaPlayer](tagMediaPlayer)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [trackClick](/tracking/api-reference/eventTrackers/trackClick.md)
:::
