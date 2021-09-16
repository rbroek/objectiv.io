# trackInput

Marks an [Element](/tracking/core-concepts/elements.md#elements) to be tracked as [InputContext](/taxonomy/location-contexts/InputContext.md).

```typescript
trackInput = (parameters: {
  id: string,
  options?: TrackOptions,
  onError?: TrackerOnErrorCallback
}) => TrackLocationReturnValue
```

## Parameters
|          |         | type                                                                                   | default value
| :-:      | :--     | :--                                                                                    | :--           
| required | **id**  | string                                                                                 |
| optional | options | [TrackLocationOptions](/tracking/api-reference/general/TrackLocationOptions.md)     | `{ trackBlurs: true }`
| optional | onError | [TrackerOnErrorCallback](/tracking/api-reference/general/TrackerOnErrorCallback.md) | `console.error`

## Returns
[TrackLocationReturnValue](/tracking/api-reference/general/TrackLocationReturnValue.md)

## Events
Unless customized via the `options` parameter, automatically triggers:

- [trackInputChange](/tracking/api-reference/event-trackers/trackInputChange.md)

## Usage example

```typescript jsx
<input {...trackInput({ id: 'search' })} />
```

```typescript jsx
<Search {...trackInput({ id: 'search' })} />
```

<br />

:::tip Did you know ?
`trackInput` is just syntactic sugar on top of [trackLocation](/tracking/api-reference/low-level/trackLocation.md).
:::

<br />


:::info See also
- [trackElement](/tracking/api-reference/location-trackers/trackElement.md)
- [trackButton](/tracking/api-reference/location-trackers/trackButton.md)
- [trackLocation](/tracking/api-reference/low-level/trackLocation.md)
:::
