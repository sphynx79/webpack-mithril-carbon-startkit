# Webpack & Mithril Starter Project

A boilerplate Mithril application using ES7, Babel, Webpack 3, [CarbonDesignSystem](http://carbondesignsystem.com/) , Webpack dev server hot reload and, eslint, [Jarvis](https://github.com/zouhir/jarvis) for monitor webpack

To get started, clone the project and install the dependencies:

```shell
cd webpack-mithril-startkit
yarn install
```

Start up Webpack in dev mode:
```shell
yarn start
	# Webpack dev server will run and open the app on the browser with HRM,
```

Start up Webpack in watch mode:
```shell
yarn watch
	# Webpack watch mode refresh dist file when source change
```

Compile the app for production:
```shell
yarn build
	# Compiles the app for production and all compiled files lies on dist dir.
    # To deploy an the application simply transfer the dist to a web server's public directory.
```
## Directory Structure:

```shell
.
|-- dist_______________________________________# Compiled files
|   |-- css
|   |   |-- **/*.css
|   |-- js
|   |   |-- **/*.js
|   |-- index.html
|-- src
|   |-- components_____________________________# Folder Components
|   |   |-- test
|   |       |-- test.js
|   |       |-- test.scss
|   |-- icons__________________________________# Icon scss format
|   |   |-- _checkmark.scss
|   |   |-- icon.scss
|   |-- images_________________________________# Images
|   |   |-- favicon.png
|   |-- init
|   |   |-- index.js___________________________# Main js file
|   |   |-- index.scss_________________________# Global style
|   |   |-- routes.js__________________________# Mitrhil route
|   |   |-- theme.scss_________________________# CarbonDesignSystem theme
|   |-- model
|   |   |-- app.js_____________________________# Application state
|   |-- pack
|   |   |-- application.js_____________________# Application entry point
|   |-- index.html
|-- CHANGELOG.md
|-- README.md
|-- VERSION
|-- package.json
|-- postcss.config.js_________________________# PostCss config
|-- webpack.common.js_________________________# WebPack share config
|-- webpack.dev.js____________________________# WebPack dev mode config
|-- webpack.prod.js___________________________# WebPack build config
|-- webpack.watch.js__________________________# WebPack watch mode config
|-- yarn.lock

```



