# tagLink

Tags an interactive [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [LinkContext](/taxonomy/location-contexts/LinkContext.md).

```typescript
tagLink = (parameters: {
  id: string,
  text: string,
  href: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TagLocationReturnValue
```

## Parameters
|          |          | type                                                                                   | default value
| :-:      | :--      | :--                                                                                    | :--           
| required | **id**   | string                                                                                 |
| required | **text** | string                                                                                 |
| required | **href** | string                                                                                 |
| optional | options  | [TagLocationOptions](/tracking/api-reference/general/TagLocationOptions.md)     | `{ trackClicks: true }`
| optional | onError  | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TagLocationReturnValue](/tracking/api-reference/general/TagLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)

## Usage examples

```typescript jsx
<a {...tagLink({ id: 'lnk-id', text: "Go!", href: "/path" })} href="/path">Go!</a>
```

```typescript jsx
<LinkComponent {...tagLink({ id: 'lnk-id', text: "Go!", href: "/path" })}>Go!</LinkComponent>
```

<br />

:::tip Did you know ?
`tagLink` is just syntactic sugar on top of [tagLocation](/tracking/api-reference/low-level/tagLocation.md).
:::

<br />


:::info See also
- [tagButton](/tracking/api-reference/location-taggers/tagButton.md)
- [tagExpandableElement](/tracking/api-reference/location-taggers/tagExpandableElement.md)
- [tagLocation](/tracking/api-reference/low-level/tagLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
