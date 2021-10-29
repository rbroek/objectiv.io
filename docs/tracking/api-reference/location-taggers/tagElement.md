# tagElement

Tags [Taggable Element](/tracking/core-concepts/tagging.md#taggable-elements) to be tracked as [SectionContext](/taxonomy/location-contexts/SectionContext.md).

```typescript
tagElement = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)         | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/event-trackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/event-trackers/trackSectionHidden.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagElement } from '@objectiv/tracker-browser';
```

```typescript jsx
<Layout {...tagElement({ id: 'layout' })}>
  <div {...tagElement({ id: 'section' })}>
    …
  </div>
</Layout>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<section [tagElement]="{ id: 'layout' }">
  <div [tagElement]="{ id: 'section' }">
    …
  </div>
</section>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagElement` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagNavigation](/tracking/api-reference/location-taggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/location-taggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/api-reference/location-taggers/tagMediaPlayer.md)
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
:::
