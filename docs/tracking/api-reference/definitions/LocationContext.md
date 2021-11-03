# LocationContext

[Structs](https://docs.superstructjs.org/) and Unions for each [LocationContext](/taxonomy/location-contexts/overview.md) in the [Taxonomy](/taxonomy/overview.md).

:::tip Struct > TS
TypeScript types can be inferred from Structs using the `Infer` helper. For example
```typescript
type AbstractContext = Infer<typeof AbstractContext>;
```
:::

## Context Structs

### AbstractContext
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

### ExpandableSectionContext struct
`AbstractSectionContext` < `AbstractLocationContext` < `Abstract Context`

```typescript
const ExpandableSectionContext = assign(
  AbstractSectionContext,
  object({
    _type: literal('ExpandableSectionContext'),
  })
);
```  

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
