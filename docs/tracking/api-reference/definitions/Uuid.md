# Uuid

A custom [Struct](https://docs.superstructjs.org/) to parse and validate UUIDs via [uuid-random](https://www.npmjs.com/package/uuid-random)

```typescript
const Uuid = define<string>('Uuid', (value: any) => uuid.test(value));
```
