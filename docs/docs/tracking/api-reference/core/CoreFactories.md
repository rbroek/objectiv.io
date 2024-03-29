# Core Factories

Automatically generated factories based on the [Taxonomy](//taxonomy/introduction.md) schema. 

:::caution
These are core-level APIs needed only when diving into low-level tracking via [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md) or [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).   
:::

## Location Context Factories
These factories produce [LocationContext](/taxonomy/reference/location-contexts/overview.md) instances ready to be handed over to [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).

### Location Context Factory list

```typescript
makeActionContext = (props: { 
  id: string, 
  text: string 
}) => ActionContext
```

```typescript
makeApplicationContext = (props: { 
  id: string 
}) => ApplicationContext
```

```typescript
makeButtonContext = (props: { 
  id: string, 
  text: string 
}) => ButtonContext
```

```typescript
makeExpandableSectionContext = (props: { 
  id: string 
}) => ExpandableSectionContext
```

```typescript
makeInputContext = (props: { 
  id: string 
}) => InputContext
```

```typescript
makeItemContext = (props: { 
  id: string 
}) => ItemContext
```

```typescript
makeLinkContext = (props: { 
  id: string, 
  text: string, 
  href: string 
}) => LinkContext
```

```typescript
makeMediaPlayerContext = (props: { 
  id: string 
}) => MediaPlayerContext
```

```typescript
makeNavigationContext = (props: { 
  id: string 
}) => NavigationContext
```

```typescript
makeOverlayContext = (props: { 
  id: string 
}) => OverlayContext
```

```typescript
makeSectionContext = (props: { 
  id: string 
}) => SectionContext
```

```typescript
makeWebDocumentContext = (props: { 
  id: string, 
  url: string 
}) => WebDocumentContext
```

## Event Factories
These factories produce [Event](/taxonomy/reference/events/overview.md) instances ready to be handed over to [trackEvent](/tracking/api-reference/eventTrackers/trackEvent.md).

### Common parameters
All Event factories share some common, optional, parameters: 

|          |                 | type                                                                              | default value
| :-:      | :--             | :--                                                                               | :--           
| optional | location_stack  | [AbstractLocationContext](/taxonomy/reference/abstract-contexts/AbstractLocationContext.md) | `[]` 
| optional | global_contexts | [AbstractGlobalContext](/taxonomy/reference/abstract-contexts/AbstractGlobalContext.md)     | `[]`

### Event Factory list

```typescript
makeApplicationLoadedEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => ApplicationLoadedEvent
```

```typescript
makeClickEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => ClickEvent
```

```typescript
makeDocumentLoadedEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => DocumentLoadedEvent
```

```typescript
makeInputChangeEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => InputChangeEvent
```

```typescript
makeInteractiveEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => InteractiveEvent
```

```typescript
makeNonInteractiveEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => NonInteractiveEvent
```

```typescript
makeSectionHiddenEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => SectionHiddenEvent
```

```typescript
makeSectionVisibleEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => SectionVisibleEvent
```

```typescript
makeURLChangeEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => URLChangeEvent
```

```typescript
makeVideoEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VideoEvent
```

```typescript
makeVideoLoadEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VideoLoadEvent
```

```typescript
makeVideoPauseEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VideoPauseEvent
```

```typescript
makeVideoStartEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VideoStartEvent
```

```typescript
makeVideoStopEvent = (props?: {
  location_stack?: AbstractLocationContext[],
  global_contexts?: AbstractGlobalContext[]
}) => VideoStopEvent
```
