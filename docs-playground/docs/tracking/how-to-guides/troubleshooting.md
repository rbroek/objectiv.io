---
sidebar_position: 3
---

# Troubleshooting 
When dealing with regular HTML, [Location Trackers](/todo) should just work flawlessly. Unfortunately [JSX](/todo) and [React Components](/todo) may carry some challenges at times.

The most common issues will be:
- Incorrect [Locations](/todo)
- [Events](/todo) no triggering

The most probable causes are:
- The necessary [HTML Attributes](/todo) not being forwarded
- Components using [React Portals](/todo) internally

## Problem: Incorrect Locations
If [Events](/todo) are triggering correctly but [Locations](/todo) are missing [Sections](/todo), the most likely cause is [React Portals](/todo).

[Event Trackers](/todo) can reconstruct [Locations](/todo) by traversing the DOM from the target [Element](/todo) upwards. Unfortunately we cannot 
follow, nor detect (yet), portaled subtrees. 

:::info Auto detect portals?
We are working on static analysis tools to make the detection of these cases possible.   
Nonetheless it's still highly recommended covering all complex trackers with test cases. That's the most effective way of detecting anomalies and adding a cheap safe-guard for future regressions. 
:::

### Example of Component using Portals
The `Menu` component renders its contents in a [React Portal](/todo). 

```typescript jsx
<Card>
  <Menu>
    <MenuItem>Item A</MenuItem>
    <MenuItem>Item B</MenuItem>
    <MenuItem>Item C</MenuItem>
  </Menu> 
</Card>
```
:::tip
It's easier to track siblings via [trackChildren](/todo) but, to keep this example simpler, we are going for the verbose syntax here.
:::

Unknowingly we may attempt to track it by adding our [Location Trackers](/todo) as follows:

```typescript jsx
<Card {...trackElement({ id: 'card' })}>
  <Menu {...trackOverlay({ id: 'menu' })}>
    <MenuItem {...trackButton({ id: 'menu-item-a', text: 'Item A' })}>Item A</MenuItem>
    <MenuItem {...trackButton({ id: 'menu-item-b', text: 'Item B' })}>Item B</MenuItem>
    <MenuItem {...trackButton({ id: 'menu-item-c', text: 'Item C' })}>Item C</MenuItem>
  </Menu> 
</Card>
```

Suppose we click on `Item B`. Our expected [Location](/todo) should look something like:
```typescript jsx
app-root > ... > card > menu > menu-item-b
```

But because `Menu` renders in a [React Portal](/todo) so, most probably, we get something like this instead:
```typescript jsx
app-root > menu > menu-item-b
```

The [Location](/todo) ends abruptly at the `Menu` and jumps to the application root.


### Make Locations work with Portals

The solution is to specify the parent [Location Tracker](/todo) of a portaled [Tracked Element](/todo) manually. This tells the [Event Tracker](/todo) to ignore the DOM and, when processing the `Menu` [Location](/todo), to simply continue with and from its parent [Location Tracker](/todo): `cardTracker`.

```typescript jsx
const cardTracker = trackElement({ id: 'card' });
…
<Card {...cardTracker}>
  <Menu {...trackOverlay({ id: 'menu', options: { parentTracker: cardTracker } })}>
    <MenuItem {...trackButton({ id: 'menu-item-a', text: 'Item A' })}>Item A</MenuItem>
    <MenuItem {...trackButton({ id: 'menu-item-b', text: 'Item B' })}>Item B</MenuItem>
    <MenuItem {...trackButton({ id: 'menu-item-c', text: 'Item C' })}>Item C</MenuItem>
  </Menu>
</Card>
```


## Problem: Events not triggering 
[placeholder: check DOM for Tracking Attributes]

### Props forwarding
[placeholder: basic concepts around Trackable Element props forwarding]

### Ref forwarding
[placeholder: basic concepts around accessing the underlying dom of Components]

## Manual orchestration
[placeholder: introduction on manual event handling]

### Events carrying Target info  
[placeholder: event.target]

### Tracking via state
[placeholder: trackChildren]

### Tracking from a parent Element
[placeholder: trackChildren]

:::info Why not just wrapping components?
Many of the issues above may be solved by just wrapping the problematic components in some extra HTML element.

While that works, sometimes it's not an option. Adding DOM Elements may affect CSS, other query selectors or even performance. We prefer to approach each of these issues with the idea of not changing
the Application to fit the tracking requirements.

That said, if adding an extra `<div>` around a Component is not a problem, that's probably a good option as well.
:::
