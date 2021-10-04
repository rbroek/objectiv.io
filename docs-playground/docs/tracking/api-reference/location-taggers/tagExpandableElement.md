# tagExpandableElement

Tags [Taggable Element](/tracking/core-concepts/elements.md#taggable-elements) to be tracked as [ExpandableElementContext](/taxonomy/location-contexts/ExpandanbleElementContext.md).

```typescript
tagExpandableElement = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)         | `{ trackClicks: true, trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
<div {...tagExpandableElement({ id: 'faq-item-id' })}>
  …
</div>
```

```typescript jsx
<Accordion {...tagExpandableElement({ id: 'accordion-id' })}>
  …
</Accordion>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/getting-started-angular.md#optional---configure-taggers-directive).

```typescript jsx
<div [tagExpandableElement]="{ id: 'faq-item-id' }">
  …
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
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
