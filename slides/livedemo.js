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
    github: require("../assets/GitHub-120px-plus.png")
};

preloader([images.github]);


export const liveDemo = {
  notes: '',
  bgColor: 'secondary',
  slideContent: () =>
        <div>
          <Heading bold fit textColor="primary">Live Demo</Heading>
          <Text bold fit>React Redux Universal Hot Example</Text>
          <Image src={images.github.replace("/","")}></Image>
        </div>
}
