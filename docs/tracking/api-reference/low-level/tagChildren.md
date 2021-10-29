# tagChildren

Tags a [Taggable Element](/tracking/core-concepts/elements.md#taggable-elements) as a root to track one or more of its children by specifying a set of **ChildrenTaggingQuery** objects.

```typescript
tagChildren = (parameters: ChildrenTaggingQuery[]) => TagLocationReturnValue
```

:::warning
`tagChildren` is a performance-sensitive API. Avoid using it whenever [Location Taggers](/tracking/api-reference/location-taggers/overview.md) could be used instead.
:::

### ChildrenTaggingQuery parameter
An object pairing a [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string to a set of [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md).

[Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer) executes `queryAll` via [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll). Matches are decorated with `trackAs` attributes.

```typescript
type ChildrenTaggingQuery = {
  queryAll: string,
  trackAs: TaggingAttributes,
}
```

|          |              | type
| :-:      | :--          | :--                                                                                       
| required | **queryAll** | [CSS Selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) string
| required | **trackAs**  | [TaggingAttributes](/tracking/api-reference/general/TaggingAttributes.md)

## Single query shorthand
Syntactic sugar API built on top of **tagChildren** which processes a single ChildrenTaggingQuery.

```typescript
tagChild = (parameters: ChildrenTaggingQuery) => TagLocationReturnValue
```

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md) with only the `tagChildren` attribute set.

## Usage example

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="react" label="React" default>

```typescript jsx
import { tagChildren } from '@objectiv/tracker-browser';
```

```typescript jsx
<div
  {...tagChildren([
    {
      queryAll: 'button[aria-label="Previous"]',
      trackAs: tagButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label="Next"]',
      trackAs: tagButton({ id: 'next', text: 'Next' })
    }
  ])}
>
  …
</div>
```

  </TabItem>
  <TabItem value="angular" label="Angular">

Taggers only work by installing the [Taggers Directive](/tracking/how-to-guides/angular/getting-started.md#optional---configure-taggers-directive).

```typescript jsx
<div
  [tagChildren]="[
    {
      queryAll: 'button[aria-label=&quot;Previous&quot;]',
      trackAs: tagButton({ id: 'prev', text: 'Previous' })
    },
    {
      queryAll: 'button[aria-label=&quot;Next&quot;]',
      trackAs: tagButton({ id: 'next', text: 'Next' })
    }
  ]"
>
  …
</div>
```

  </TabItem>
</Tabs>


<br />

:::info See also
- [Location Taggers](/tracking/api-reference/location-taggers/overview.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [Tagged Elements Observer](/tracking/core-concepts/trackers.md#tagged-elements-observer)
:::
