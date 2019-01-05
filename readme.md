# PA Lottery Style Guide

This repo contains the styleguide and pattern library for palottery.com. We are
using KSS to generate the style guide when updates are made. For more on using
KSS, check out [KSS-node](https://github.com/kss-node/kss-node) on GitHub.

## Usage

Fork this repo and run `npm i` from your terminal. This will install all of
the dependencies for this project. Once you've got everything installed,
navigate to the `src` directory. The `homepage.md` file contains the copy for
the rendered styleguide's landing page. The `components` folder contains HTML
snippets of examples of each component. The `scss` folder contains our Sass
partials.

### Adding a new component

KSS generates documentation for each component by reading comments in `scss`
files. Start each `scss` file with a comment block like the following

```scss
// Breadcrumbs
//
// PA Lottery breadcrumb navigation appears on interior pages.
//
// Markup: ../components/breadcrumbs.html
//
// Style guide: Components.breadcrumbs
```

  - Line 1: the title of the component.
  - Line 3: brief description of what the component does.
  - Line 5: path to the HTML snippet showing proper usage of the component
  - Line 7: where the component will be shown in the styleguide. In this case
  under the heading `Components`.

```HTML
<nav class="breadcrumbs">
  <ul>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
    <li><a href="#">Link</a></li>
  </ul>
</nav>
```

The HTML files in the `components` directory should only include the markup for
that particular component. It should not be a fully fleshed out HTML file.

## Full Steps to build / run

### Initial Setup

From your terminal, run
```
npm i
```

### Generating the styleguide

From your terminal, run
```
npm run build-kss
```
  - This will build the initial KSS Styleguide for you. A full list of commands exist in the package.json. 

### Running the styleguide

From your terminal, run
```
gulp
```
  - This will open a project in the last browser window you had focused
  - If gulp is not recognized as a command, you may need to run 
  ```
  npm i -g gulp
  ```

## Notes

  - Live CSS changes should not require a refresh, however component and JS changes will
  - Changing the comments in the CSS for the KSS handler will not update until a component change, there are ways around this, however for the sake of quicker development of CSS I chose not to implement them as KSS needs to recompile for component changes.
    - If you need to update the KSS comments within the component, update the CSS, then the component, if you do not do it in this order you will need to make a component change (ie -add a space) to let gulp know it needs to recompile.
  - Webpack is budling the JS for this project to reduce the amount of changes necessary for the kss-assets, go to the bundle.js in src/js for instructions

## TODO

  - Make the styleguide styled / scale more realistic to the live site