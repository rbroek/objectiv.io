# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Editing pages

The root folder can be found under `/src/pages`. Edit or add Markdown or React (.js) files. 

Since Docusaurus 
uses MDX as the parsing engine, it can also render React components inside a Markdown document. See all 
[Markdown features](https://docusaurus.io/docs/markdown-features) in the Docusaurus documentation.

For using custom components such as lightboxes, see `/src/pages/styles.js`.

## Editing docs

Edit or add the Markdown files under `/docs`.

To update the sidebar menu, edit `/docs/sidebars.js`.

For using custom components such as lightboxes, see `/src/pages/styles.js`.

## Editing the blog

Edit or add the Markdown files under `/blog`. Prepend the filename with a date, in the YYYY-MM-DD format.

Add front matter between `---` lines to control properties such as the title of the blog post, and the auther.
See all [Header options](https://docusaurus.io/docs/blog#header-options) in the Docusaurus documentation.

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live 
without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents 
hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to 
the `gh-pages` branch.