# tagInput

Tags [Taggable Element](/tracking/core-concepts/elements.md#taggable-elements) to be tracked as [InputContext](/taxonomy/location-contexts/InputContext.md).

```typescript
tagInput = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |         | type                                                                                | default value
| :-:      | :--     | :--                                                                                 | :--           
| required | **id**  | string                                                                              |
| optional | options | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)         | `{ trackBlurs: true }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md)

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagInput } from '@objectiv/tracker-browser';
```

```typescript jsx
<input {...tagInput({ id: 'search' })} />
```

```typescript jsx
<Search {...tagInput({ id: 'search' })} />
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<input [tagInput]="{ id: 'search' }" />
```

  </TabItem>
</Tabs>



<br />

:::tip Did you know ?
`tagInput` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagElement](/tracking/api-reference/location-taggers/tagElement.md)
- [tagButton](/tracking/api-reference/location-taggers/tagButton.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
:::
