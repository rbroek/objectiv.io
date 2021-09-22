---
sidebar_position: 2
---

# Tracking Locations

Now that the [Tracker is up and running](/tracking/how-to-guides/getting-started.md) we can start thinking about marking some [TrackableElements](/tracking/core-concepts/elements.md#trackable-elements) as [LocationContexts](/taxonomy/location-contexts/overview.md) using [Location Trackers](/tracking/api-reference/location-trackers/overview.md).  

## Tracking Interactive Elements
A good rule of thumb is to start by identifying all interactive Elements in the Application. 

### Buttons
Anything that the user can interact with, but does not cause a URL change, is considered a Button. 

```typescript jsx
// a button tag 
<button {...trackButton({ id: 'button-1', text: "Click Me!" })}>Click Me!</button>

// a Button component 
<Button {...trackButton({ id: 'button-2', text: "Do It!" })}>Do It!</Button>

// a clickable image
<img {...trackButton({ id: 'button-3', text: "OK!" })} src="/img/ok.png" alt="OK!" />
```

:::info WIP
Currently it's necessary to specify `text` manually. We are working on improvements to make this easier.
:::


### Links
Links are interactive elements that cause, directly or indirectly, a change in the current URL.

```typescript jsx
// a link tag 
<a {...trackLink({ id: 'link-1', text: "Go!", href:"/somewhere" })} href="/somewhere">Go!</a>

// a Link component 
<Link {...trackLink({ id: 'link-2', text: "Back To Cart", href:"/cart" })} to="/cart">Back</Link>
```

:::info WIP
Currently it's necessary to specify `text` and `href` manually. We are working on improvements to make this easier.
:::


### Expandable Elements
Elements that cause other Elements, usually their children, to be expanded and displayed to the user. Such as Accordions and collapsible Menus. 

```typescript jsx
// an Accordion-like component 
<FAQItem {...trackExpandableElement({ id: 'how-to-1' })} description="How to track Accordions?">
  Some content here that will be displayed on click
</FAQItem>

// a collapsible Menu 
<Menu {...trackExpandableElement({ id: 'main-menu' })}>
  <MenuItem>Menu A</MenuItem>
  …
  <MenuItem>Menu Z</MenuItem>
</Menu>
```



## Tracking Locations
To make modeling easier it's important to ensure all Tracked interactive Elements are uniquely identifiable.   

That said, assigning a unique identifier to each Element is not always possible and most often impractical. Think of reusable components for example. 

### Uniqueness among siblings
Let's define some logical Sections instead. Objectiv Taxonomy comes with a number of them and can be easily extended if needed.

[placeholder: prepare a complex example with conflicting components solved by wrapping them in a few Section Contexts]

[placeholder: quick overview of most useful Location Trackers, directing user to the API Reference for full list]

### Tracking multiple siblings at once
[placeholder]
