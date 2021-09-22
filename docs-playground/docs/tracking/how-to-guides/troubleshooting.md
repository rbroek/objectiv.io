---
sidebar_position: 3
---

# Troubleshooting 
When dealing with regular HTML [Location Trackers](/todo) should just work flawlessly. Unfortunately [JSX](/todo) and [React Components](/todo) may carry some challenges at times.

The most common issues will be:
- Incorrect [Locations](/todo) due to [React Portals](/todo)
- [Events](/todo) no triggering due to missing [Tracking Attributes](/todo)

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

But because `Menu` renders in a [React Portal](/todo) we get something like this instead:
```typescript jsx
app-root > menu > menu-item-b
```

The [Location](/todo) ends abruptly at the `Menu` and jumps to the application root.


### Make Locations work across Portals

The solution is to specify the parent [Location Tracker](/todo) of a portaled [Tracked Element](/todo) manually. 

This tells the [Event Tracker](/todo) to ignore the DOM and, when processing the `Menu` [Location](/todo), to simply continue with and from its parent [Location Tracker](/todo): `cardTracker`.

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
Usually this happens because the TrackingAttributes did not end up being applied to the target Element. This happens
almost exclusively when dealing with Components. 

### Check if TrackingAttributes are set
To verify if that's the issue we can simply inspect the DOM with the Browser's Developer Tools. 

If the target Element we are trying to track does not have at least `data-objectiv-element-id` set, most probably the Location Tracker failed decorating it.

As an example a Tracked Element, in this case a button, should look at least like the following:
```
<button data-objectiv-element-id="…" data-objectiv-context="…" …>…</button>
```

The values of the attributes are not really important. What matters is their presence. 

We can now attempt to fix the issue in two ways:
1. Verify props forwarding
2. Manually orchestrating events
   1. Via event handlers
   2. Via state
   3. Via a parent Element

### Props forwarding - own Components
Consider the following component:

```typescript jsx
const Button = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
)

// Used somewhere like so
<Button onClick={doSomething}>Do It!</Button>
```

If we would try to track it:
```typescript jsx
<Button {...trackButton({ id: 'button-do-it', text: 'Yes!' })} onClick={doSomething}>Yes!</Button>
```

It would not work, because extra props are not being forwarded to the `<button>` tag. Let's fix that:
```typescript jsx
const Button = ({ children, onClick, ...otherProps }) => (
  <button onClick={onClick} {...otherProps}>{children}</button>
)
```

Tracking will now work as expected, since our extra TrackingAttributes will be forwarded correctly to the `<button>` 

### Props forwarding - 3rd party libraries
Third party components, especially UI libraries, usually allow specifying custom attributes. 
It's worth verifying by checking the documentation.

Let's look at an example with InputBase from Material UI. This is a search input box.
```typescript jsx
<InputBase
  id={'search'}
  placeholder="Search…"
/>
```

If InputBase would forwards props we could simply:
```typescript jsx
<InputBase
  {...trackInput({ id: 'search' })}
  id={'search'}
  placeholder="Search…"
/>
```

Unfortunately that does not work and our trackInput attributes will just get discarded. Luckily InputBase 
provides us with a specific property called `inputProps` that is directly forwarded to the `<input>` tag.

Now we can fix the issue by simply using it to apply our TrackingAttributes:

```typescript jsx
<InputBase
  id={'search'}
  placeholder="Search…"
  inputProps={trackInput({ id: 'search' })}
/>
```

:::tip
Sometimes properties for passing extra attributes are already used and we can't assign directly to them as done above.    
Simply spread the Tracking Attributes and merge them up with the existing props:

```typescript jsx
<InputBase
  id={'search'}
  placeholder="Search…"
  inputProps={{ 
    'aria-label': 'search', 
    ...trackInput({ id: 'search' }) 
  }}
/>
```
:::

## Manual orchestration
When forwarding properties is not possible, for whatever reason, there are still workarounds to be able to track both
Elements and attach the correct Events to uncooperative components.

Everything that Location Trackers try to automate, together with the Tracked Elements Observer, can be done manually.

Let's look at some examples with solutions.

### Track Events via 3rd party handlers  
Let's look at a hypothetical component that does not allow forwarding props to its internal JSX.

We want to track a list of FAQ Items and we use this 3rd party component for that. It's an expandable element that 
on Click will show its children to the user with an animation. 

```typescript jsx
<FAQItem title={'How do I track 3rd party components?'}>
  Some explanatory text to be displayed on click
</FAQItem>
```

Objectiv Taxonomy has a Context specifically meant for tracking expandable elements, let's use that:
```typescript jsx
<FAQItem
  {...trackExpandableElement({ id: 'faq-track-3rd-party-components' })}
  title={'How do I track 3rd party components?'}
>
  Some explanatory text to be displayed on click
</FAQItem>
```

Unfortunately after some testing we discover that `FAQItem` has its own internal event handling and doesn't allow clicks to bubble out for us to track.

Again, checking the documentation is our friend here. Turns out there are event handlers we can hook onto:
```typescript jsx
 <FAQItem
  {...trackExpandableElement({ id: 'faq-track-3rd-party-components' })}
  onClick={(event) => {
    trackClick({ element: event.target })
  }}  
  title={'How do I track 3rd party components?'}
>
  Some explanatory text to be displayed on click
</FAQItem>
```

### Tracking Visibility via state
Visibility events can be difficult to detect due to the nature of DOM and the countless possibilities there are when it
comes to hiding and showing content.

By default we track when components mount or unmount from the DOM but it's not efficient to check for actual visibility. 

Consider this menu:
```typescript jsx
<Menu
  {...trackOverlay({ id: 'menu' })}
  open={isMenuOpen}
>
  <MenuItem>Profile</MenuItem>
  <MenuItem>My account</MenuItem>
</Menu>
```

If during testing we detect that we cannot automatically detect when the menu is visible or hidden, most probably it's being orchestrated via CSS.

Luckily the menu it's driven by the state variable `isMenuOpen`. We can use that to track its state. To do so we switch visibility tracking from automatic to manual and we tell the tracker what to monitor.

```typescript jsx
<Menu
  {...trackOverlay({
     id: 'menu',
     options: { trackVisibility: { mode: 'manual', isVisible: isMenuOpen } }
  })}
  open={isMenuOpen}
>
  <MenuItem>Profile</MenuItem>
  <MenuItem>My account</MenuItem>
</Menu>
```

The `isMenuOpen` variable is now driving both the menu visibility and the tracker visibility events for it.

### Tracking Visibility via 3rd party handlers
Sometimes we can also leverage 3rd party event callbacks, like so:

```typescript jsx
<Accordion
  {...trackExpandableElement({ id: 'fix' })}
  onChange={(event, expanded) => {
    trackVisibility({ element: event.target, isVisible: expanded })
  }}
>
```

In the example above the Accordion API has a onChange event handler triggered whenever the Accordion changes state.   
We can directly hook that information into our event tracking.

### Tracking from a parent Element
[placeholder: trackChildren]

:::info Why not just wrapping components?
Many of the issues above may be solved by just wrapping the problematic components in some extra HTML element.

While that works, sometimes it's not an option. Adding DOM Elements may affect CSS, other query selectors or even performance. 
Other times, especially with 3rd party components, events may not be bubbling up to our wrappers.

We prefer to approach each of these issues with the idea of not changing the Application to fit the tracking requirements.

That said, if adding an extra `<div>` around a hard-to-track Component works, that's probably a good option as well.
:::
