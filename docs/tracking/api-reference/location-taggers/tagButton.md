# tagButton

Tags a [Taggable Element](/tracking/core-concepts/tagging.md#taggable-elements) to be tracked as [ButtonContext](/taxonomy/location-contexts/ButtonContext.md).  

```typescript
tagButton = (parameters: {
  id: string,
  text: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                | default value
| :-:      | :--      | :--                                                                                 | :--           
| required | **id**   | string                                                                              |
| required | **text** | string                                                                              |
| optional | options  | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)         | `{ trackClicks: true }`
| optional | onError  | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Events

Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagButton } from '@objectiv/tracker-browser';
```

```typescript jsx
<button {...tagButton({ id: 'button-id', text: 'Click Me!' })}>Click Me!</button>
```

```typescript jsx
<Submit {...tagButton({ id: 'submit', text: 'Do It!' })}>Do It!</Submit>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<button [tagButton]="{ id: 'button-id', text: 'Click Me!' }">Click Me!</button>
```

  </TabItem>
</Tabs>

<br />

:::tip Did you know ?
`tagButton` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />

:::info See also
- [tagLink](/tracking/api-reference/location-taggers/tagLink.md)
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
