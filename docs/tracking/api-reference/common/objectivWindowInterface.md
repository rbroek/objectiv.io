# objectivWindowInterface

If [Window](/todo) exists, it extends it with a new `objectiv` namespace.  
The namespace holds an instance of [TrackerRepository](/TODO).

```typescript
declare global {
  interface Window {
    objectiv: {
      trackers: TrackerRepository<BrowserTracker>;
    };
  }
}
```  
