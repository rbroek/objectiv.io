# trackButton

Marks an interactive [Element](/tracking/api-reference/advanced/elements.md#elements) to be tracked as [ButtonContext](/taxonomy/location-contexts/ButtonContext.md).  

```typescript
trackButton = (parameters: {
  id: string,
  text: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |          | type                                                                                   | default value
| :-:      | :--      | :--                                                                                    | :--           
| required | **id**   | string                                                                                 |
| required | **text** | string                                                                                 |
| optional | options  | [TrackLocationOptions](/tracking/api-reference/interfaces/TrackLocationOptions.md)     | `{ trackClicks: true }`
| optional | onError  | [TrackerOnErrorCallback](/tracking/api-reference/interfaces/TrackerOnErrorCallback.md) | `console.error`

## Events

Unless customized via the `options` parameter, automatically triggers:

- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)

## Returns
[TrackLocationReturnValue](/tracking/api-reference/interfaces/TrackLocationReturnValue.md)

## Usage example

```typescript jsx
<button {...trackButton({ id: 'button-id', text: "Click Me!" })}>Click Me!</button>
```

```typescript jsx
<Submit {...trackButton({ id: 'submit', text: "Do It!" })}>Do It!</Submit>
```

<br />

:::tip Did you know ?
`trackButton` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/advanced/trackLocation.md).
:::

<br />

:::info See also
- [trackLink](/tracking/api-reference/location-trackers/trackLink.md)
- [trackExpandableElement](/tracking/api-reference/location-trackers/trackExpandableElement.md)
- [trackLocation](/tracking/api-reference/advanced/trackLocation.md)
- [trackClick](/tracking/api-reference/event-trackers/trackClick.md)
:::
