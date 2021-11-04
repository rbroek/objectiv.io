# TagLinkParameters

[tagLink](/tracking/api-reference/locationTaggers/tagLink.md) has two extra attributes, `text` and `href`, as mandatory parameters.

```typescript
type TagLinkParameters = LocationTaggerParameters & { 
  text: string; 
  href: string
};
```

## Parameters
|          |          | type   | default value
| :-:      | :--      | :--    | :--           
| required | **text** | string |
| required | **href** | string |

<br />

:::info see also
- [LocationTaggerParameters](/tracking/api-reference/definitions/LocationTaggerParameters.md)
:::
