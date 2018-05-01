![SSR CSS Modules](https://github.com/mattvagni/server-side-css-modules/blob/master/SSR_CSS_Modules.png)

**_Example code a Medium Post about how to use css modules on the server as well as in the client: [Server Side Rendering with CSS Modules](https://medium.com/@mattvagni/server-side-rendering-with-css-modules-6b02f1238eb1)_**

> _This is now a very old article. Please be aware that a lot of the projects and dependencies mentioned in this article have changed. Still, if you are looking to understand the principle behind CSS modules, this article may help you. I wouldn’t however follow the specific instructions to set-up a project._

## Usage

**NPM**:

```bash
# Install dependencies
npm install

# Build the client code (to ./build/client/)
npm run build:client

# Build the server code (to ./build/server/)
npm run build:server

# Watch the for changes and rebuild client code as needed:
npm run watch:client

# Watch the for changes and rebuild server code as needed:
npm run watch:server
```

**Yarn**:

```bash
# Install dependencies
yarn install

# Build the client code (to ./build/client/)
yarn build:client

# Build the server code (to ./build/server/)
yarn build:server

# Watch the for changes and rebuild client code as needed:
yarn watch:client

# Watch the for changes and rebuild server code as needed:
yarn watch:server
```
