---
sidebar_position: 4
title: Locations
slug: locations
---

## Well-defined hierarchical UI positions
Locations in Objectiv describe the exact position in an application's UI from where an Event was triggered. 
It is composed of a hierarchical stack of UI elements; the order defines the hierarchy.

An example Location Stack for an Event:
```json
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"hero"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
      "href":"/path"
    }
  ]
```

In this example, there is a link that lives in Section 'hero' within Section 'homepage'.

## Every Event is unique
Together with an `id`, a Location Stack makes every Event unique. For example, another Link with the same 
`id` on the homepage, but in a Section called 'footer', is still unique:

```json
  "location_stack":[
    {
      "_type":"WebDocumentContext",
      "id":"#document",
      "url":"https://example.com/path"
    },
    {
      "_type":"SectionContext",
      "id":"homepage"
    },
    {
      "_type":"SectionContext",
      "id":"footer"
    },
    {
      "_type":"LinkContext",
      "id":"link-id",
      "text":"Go!",
      "href":"/path"
    }
  ]
```

## A contextual layer over your application's UI
Having a Location Stack for Events is like having a contextual layer over your UI that serves multiple 
purposes:
* The collected data becomes **rich and descriptive**. You can pinpoint exactly what event happened, which 
  type it was, in which context it happened and from which location in the UI it was triggered.
* Your tracking instrumentation becomes **debuggable**. You'll be able to catch tracking instrumentation 
  errors early on because it is being validated as you’re developing it.
* The collected data **no longer requires significant cleaning and restructuring** before it can be used for 
  modeling because it was collected in a structured manner and validated at the first step of the pipeline.

## Applying Locations

### Tag any Element
Locations are usually applied automatically by 
[tagging](/tracking/api-reference/locationTaggers/overview.md) Elements in the UI. This binds the 
appropriate [LocationContext](/taxonomy/location-contexts/overview.md) to it, using 
[Tagging Attributes](/tracking/api-reference/definitions/TaggingAttribute.md). Events are then triggered 
automatically based on that [LocationContext](/taxonomy/location-contexts/overview.md) bound to the 
[Tagged Element](/tracking/core-concepts/tagging.md#tagged-elements).

### Tag Sections
You can tag logical sections in your application's UI (e.g. the hero element on a homepage) using 
[tagElement](tracking/api-reference/locationTaggers/tagElement.md). This binds a 
[SectionContext](taxonomy/location-contexts/SectionContext.md) to it.

This might seem without benefit, as no Events are triggered (by default) on tagged Sections. However, 
tagging Elements is definitely very useful, in two main ways:

1. When any Event triggers, a hierarchical Location Stack is generated for it, including all the Sections it 
  originated from. From the resulting data, Data Scientists can fully understand where every Event came from.
2. Every Event becomes unique (see next section about collisions).

An example of tagging Sections and Links in your UI:
```js
import { tagElement } from '@objectiv/tracker-browser';
import { tagLink } from '@objectiv/tracker-browser';

<Layout {...tagElement({ id: 'layout' })}>
  <header {...tagElement({ id: 'homepage-hero' })}>
    <div {...tagElement({ id: 'section1' })}>
      <a {...tagLink({ id: 'my-link', text: 'Link 1', href: '/link1' })} href="/link1">Link 1</a>
    </div>
    <div {...tagElement({ id: 'section2' })}>
      <a {...tagLink({ id: 'my-link', text: 'Link 2', href: '/link2' })} href="/link2">Link 2</a>
    </div>
  </header>
</Layout>
```

As you can see, there are two links with the same ID (`my-link`). However, as they are contained within 
different tagged Sections, they are still unique, and Data Scientists can follow the Location Stack to 
understand where in the UI each Event originated.

### Solving collisions
TODO

```js
function Contributor({name, gitHubUsername}) {
  const ghProfileLink = "https://github.com/" + gitHubUsername;
  const ghProfileTitle = "Check out @" + gitHubUsername + " on GitHub";
  return (
    <div 
      className={clsx("card", styles.contributorCard)}
      {...tagElement({id: gitHubUsername})}
    >
      <div {...tagElement({id: 'contributor-card'})}>
        <div className="card__header">
          <div 
            className={clsx("avatar", styles.contributorAvatar)}
            {...tagElement({id: 'avatar'})}
          >
            <Link 
              {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
              href={ghProfileLink} 
              title={ghProfileTitle}
            >
              <Avatar 
                githubHandle={gitHubUsername} 
                size='64'
                round={true} 
                name={name} 
                alt={name} 
                title={name} 
              />
            </Link>
          </div>
          <div className="avatar__intro">
            <div 
              className={clsx(styles.contributorAvatarSubtitle)}
              {...tagElement({id: 'avatar-subtitle'})}
            >
              <Link 
                {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
                href={ghProfileLink} 
                title={ghProfileTitle}
              >
                @{gitHubUsername}
              </Link>
            </div>
            <div className={clsx(styles.contributorName)}>
              {name}
            </div>
          </div>
        </div>
        <div 
          className={clsx("card__footer", styles.contributorFooter)}
          {...tagElement({id: 'card-footer'})}
        >
          <Link 
            {...tagLink({id: gitHubUsername, text: '@'+gitHubUsername, href: ghProfileLink})}
            href={ghProfileLink} 
            title={ghProfileTitle}
          >
            <img src={useBaseUrl('img/icons/icon-github.svg')} alt={ghProfileTitle} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Contributors() {
  return (
    <Layout>
      {contributors && contributors.length > 0 && (
        <div {...tagElement({id: 'contributors'})}>
          {contributors.map((props, idx) => (
            <Contributor key={idx} {...props} />
          ))}
        </div>
      )}
    </Layout>
  );
}
```

### Applying Locations manually
Sometimes it may be preferable, or necessary, to tag Locations manually; for these cases, a low-level 
[tagLocation](/tracking/api-reference/locationTaggers/tagLocation.md) API is available, which tags a Taggable 
Element to be tracked as any LocationContext.
