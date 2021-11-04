# LocationContext

[Structs](https://docs.superstructjs.org/) and Unions for each [LocationContext](/taxonomy/location-contexts/overview.md) in the [Taxonomy](/taxonomy/overview.md).

:::tip Struct > TS
TypeScript Definitions for Structs are usually already exported, if not they can be inferred using the `Infer` helper. For example:
```typescript
type AbstractContext = Infer<typeof AbstractContext>;
```
:::

## Abstract Context Structs

### AbstractContext
All Contexts inherit from AbstractContext.  
```typescript
const AbstractContext = object({
  id: string(),
  _type: string(),
});
```

### AbstractLocationContext 
`AbstractLocationContext` < `Abstract Context` 

```typescript
const AbstractLocationContext = assign(
  AbstractContext,
  object({
    __location_context: literal(true),
  })
);
```

### AbstractSectionContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const AbstractSectionContext = assign(
  AbstractLocationContext,
  object({
    __section_context: literal(true),
  })
);
```  

### AbstractItemContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const AbstractItemContext = assign(
  AbstractLocationContext,
  object({
    __item_context: literal(true),
  })
);
```  

### AbstractActionContext
`AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`
```typescript
const AbstractActionContext = assign(
  AbstractItemContext,
  object({
    __action_context: literal(true),
    text: string(),
  })
);
```  

## Context Structs

:::info
Not all Section Contexts have a corresponding [Location Tagger](/tracking/api-reference/locationTaggers/overview.md) shorthand.
Creating a new Location Tagger is as simple as writing a small wrapper around the low-level [tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md).

If a Location Tagger proves itself useful enough it may add it to the standard set of [Location Taggers](/tracking/api-reference/locationTaggers/overview.md).
:::

### SectionContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const SectionContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('SectionContext'),
  })
);
```
#### Tagger
- [tagElement](/tracking/api-reference/locationTaggers/tagElement.md)

### WebDocumentContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const WebDocumentContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('WebDocumentContext'),
    url: string(),
  })
);
```  

### ScreenContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ScreenContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('ScreenContext'),
    screen: string(),
  })
);
```  

### ExpandableSectionContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ExpandableSectionContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('ExpandableSectionContext'),
  })
);
```  

#### Tagger
- [tagExpandableElement](/tracking/api-reference/locationTaggers/tagExpandableElement.md)

### MediaPlayerContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const MediaPlayerContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('MediaPlayerContext'),
  })
);
```  

#### Tagger
- [tagMediaPlayer](/tracking/api-reference/locationTaggers/tagMediaPlayer.md)

### NavigationContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const NavigationContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('NavigationContext'),
  })
);
```  
#### Tagger
- [tagNavigation](/tracking/api-reference/locationTaggers/tagNavigation.md)


### OverlayContext
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const OverlayContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('OverlayContext'),
  })
);
```  

#### Tagger
- [tagOverlay](/tracking/api-reference/locationTaggers/tagOverlay.md)

### ItemContext
`AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ItemContext = assign(
  AbstractItemContext,
  object({
    _type: literal('ItemContext'),
  })
);
```  

### InputContext
`AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const InputContext = assign(
  AbstractItemContext,
  object({
    _type: literal('InputContext'),
  })
);
```  

#### Tagger
- [tagInput](/tracking/api-reference/locationTaggers/tagInput.md)

### ActionContext
`AbstractActionContext` < `AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ActionContext = assign(
  AbstractActionContext,
  object({
    _type: literal('ActionContext'),
  })
);
```  

### ButtonContext
`AbstractActionContext` < `AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ButtonContext = assign(
  AbstractActionContext,
  object({
    _type: literal('ButtonContext'),
  })
);
```  

#### Tagger
- [tagButton](/tracking/api-reference/locationTaggers/tagButton.md)

### LinkContext
`AbstractActionContext` < `AbstractItemContext` < `AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const LinkContext = assign(
  AbstractActionContext,
  object({
    _type: literal('LinkContext'),
    href: string(),
  })
);
```  

#### Tagger
- [tagLink](/tracking/api-reference/locationTaggers/tagLink.md)

## Unions
Unions are useful to match multiple Contexts sharing the same abstract or concern.

### AnyLocationContext
Struct union to match any LocationContext

```typescript
const AnyLocationContext = union([
  SectionContext,
  WebDocumentContext,
  ScreenContext,
  ExpandableSectionContext,
  MediaPlayerContext,
  NavigationContext,
  OverlayContext,
  ItemContext,
  InputContext,
  ActionContext,
  ButtonContext,
  LinkContext,
]);
```

### AnySectionContext
Struct union to match any SectionContext

```typescript
const AnySectionContext = union([
  SectionContext,
  WebDocumentContext,
  ScreenContext,
  ExpandableSectionContext,
  MediaPlayerContext,
  NavigationContext,
  OverlayContext,
]);
```

### AnyItemContext
Struct union to match any ItemContext

```typescript
const AnyItemContext = union([
  ItemContext, 
  InputContext, 
  ActionContext, 
  ButtonContext, 
  LinkContext
]);
```

### AnyActionContext
Struct union to match any ActionContext

```typescript
const AnyActionContext = union([
  ActionContext, 
  ButtonContext, 
  LinkContext
]);
```

### AnyClickableContext
Struct union to match any Clickable Context

```typescript
const AnyClickableContext = union([
  AnyActionContext, 
  ExpandableSectionContext
]);
```
