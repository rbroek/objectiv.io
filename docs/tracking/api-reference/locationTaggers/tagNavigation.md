# tagNavigation

Tags [Taggable Element](/tracking/core-concepts/tagging.md#taggable-elements) to be tracked as [NavigationContext](/taxonomy/location-contexts/NavigationContext.md).

```typescript
tagNavigation = (parameters: {
  id: string,
  options?: TagLocationOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/globals/TagLocationOptions.md)         | `{ trackVisibility: { mode: 'auto' } }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/globals/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/globals/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackSectionVisible](/tracking/api-reference/eventTrackers/trackSectionVisible.md)
- [trackSectionHidden](/tracking/api-reference/eventTrackers/trackSectionHidden.md)

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagNavigation } from '@objectiv/tracker-browser';
```

```typescript jsx
<nav {...tagNavigation({ id: 'navigation-id' })}>
  ...
</nav>
```

```typescript jsx
<TopNav {...tagNavigation({ id: 'navigation-id' })}>
  ...
</TopNav>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<nav [tagNavigation]="{ id: 'navigation-id' }">
  ...
</nav>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagNavigation` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/locationTaggers/tagNavigation.md)
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)
- [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md)
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
:::
