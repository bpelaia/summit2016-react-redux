import React from "react";
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text,
  S
} from "../src";

// Additional tags
import ShortList from "./components/short-list.js";

import preloader from "../src/utils/preloader";

const images = {
    what_is_webpack: require("../assets/static/what-is-webpack.png"),
};

preloader([
  images.what_is_webpack
]);


export const whatWithAssets = {
  notes: '',
  bgColor: 'secondary',
  slideContent: () =>
        <div>
          <Heading textColor="primary" bold fit>But wait!</Heading>
          <Heading bold fit>What with assets?</Heading>
        </div>
}


export const inlineStyles = {
  notes: '',
  bgColor:'code',
  slideContent: () =>
        <div>
          <CodePane
            lang="jsx"
            textSize="21"
            source={require("raw!../assets/static/inline_styles.example")}
            margin="20px auto"
          />
        </div>
}

export const webpackLoaders = {
  notes: '<ul>'
    + '<li>Split the dependency tree into chunks loaded on demand</li>'
    + '<li>Keep initial loading time low</li>'
    + '<li>Every static asset should be able to be a module</li>'
    + '<li>Ability to integrate 3rd-party libraries as modules</li>'
    + '<li>Ability to customize nearly every part of the module bundler</li>'
    + '<li>Suited for big projects</li>'
  + '</ul>',
  slideContent: () =>
        <div>
          <Image src={images.what_is_webpack.replace("/","")} height={500}></Image>
        </div>
}

export const modularExamples = {
  notes: '<ul>'
  + '<li>Loaders can be chained. They are applied in a pipeline to the resource. The final loader is expected to return JavaScript, the others can return arbitrary format (which is passed to the next loader)</li>'
  + '<li>Loaders can be synchronous and asynchronous.</li>'
  + '<li>Loaders run in node.js and can do everything that’s possible there.</li>'
  + '<li>Loaders accept query parameters. This can be used to pass configuration to the loader.</li>'
  + '<li>Loaders can be bound to extension / RegExps in the configuration.</li>'
  + '<li>Loaders can be published / installed through <code>npm</code>.</li>'
  + '<li>Normal modules can export a loader in addition to the normal <code>main</code> via <code>package.json</code> <code>loader</code>.</li>'
  + '<li>Loaders can access the configuration.</li>'
  + '<li>Plugins can give loaders more features.</li>'
  + '<li>Loaders can emit additional arbitrary files.</li>'
  + '<li><a href="loaders.html">etc.</a></li>'
+ '</ul>',
  bgColor:'code',
  slideContent: () =>
        <div>
          <CodePane
            lang="jsx"
            textSize="16"
            source={require("raw!../assets/static/loaders-require.example")}
            margin="20px auto"
          />
        </div>
}
