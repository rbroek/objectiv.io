# Objectiv Documentation

## Editing docs

Edit or add the Markdown files under `/docs`. To update the sidebar menu, edit `/docs/sidebars.js`.

For using custom components such as lightboxes, or additional markdown features supported by plugins, 
see [`/src/docs/components-and-plugins.md`](/docs/components-and-plugins).

## Local Development

```console
yarn install
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

## Build

First ensure you set the right environment in the environment variables: either `dev` or `prod`.

* `dev`: tracker endpoint is set to `http://localhost:5000`.
* `prod`: `url` and `baseUrl` are set to the production environment, and the tracker endpoint is set to 
  `https://collector.objectiv.io`.

By default, the urls and tracker endpoint are set to `dev` values.

Then to build:

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

## Acknowledgements
This documentation site is built using [Docusaurus 2](https://v2.docusaurus.io/).
