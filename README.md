# DBsystem_Project_Covalry Site

- try with Docusaurus 2, `npx @docusaurus/init@next init covalry classic`
- Use `classic` template so that you can get started quickly and it contains features found in Docusaurus 1


## Running the local development server

- To preview your changes as you edit the files, you can run a local development server that will serve your website and it will reflect the latest changes.

```sh
cd covalry
yarn run start
```

## Referencing your static asset

- use hardcoded absolute paths, i.e. starting with a slash /, but remember to include the `baseUrl` if it is not `/`
- OR use the `useBaseUrl` utility function which appends the `baseUrl` to paths for you
- By default, none of the files in `static` folder will be post-processed or minified

***

# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
