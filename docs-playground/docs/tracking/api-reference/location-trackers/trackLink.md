# trackLink

Marks an interactive [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [LinkContext](/taxonomy/location-contexts/LinkContext.md).

```typescript
trackLink = (parameters: {
  id: string,
  text: string,
  href: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |          | type                                                                                   | default value
| :-:      | :--      | :--                                                                                    | :--           
| required | **id**   | string                                                                                 |
| required | **text** | string                                                                                 |
| required | **href** | string                                                                                 |
| optional | options  | [TrackLocationOptions](/tracking/api-reference/interfaces/TrackLocationOptions.md)     | `{ trackClicks: true }`
| optional | onError  | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/interfaces/TrackLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)

## Usage examples

```typescript jsx
<a {...trackLink({ id: 'lnk-id', text: "Go!", href: "/path" })} href="/path">Go!</a>
```

```typescript jsx
<LinkComponent {...trackLink({ id: 'lnk-id', text: "Go!", href: "/path" })}>Go!</LinkComponent>
```

<br />

:::tip Did you know ?
`trackLink` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/low-level/trackLocation.md).
:::

<br />


:::info See also
- [trackButton](/tracking/api-reference/location-trackers/trackButton.md)
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackLocation](/tracking/api-reference/low-level/trackLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
