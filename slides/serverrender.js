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
};

//preloader([images.dna, images.groningen]);


export const serverSideRendering = {
  notes: '',
  slideContent: () =>
        <div>
          <Heading bold fit>Server Side Rendering</Heading>
          <List style={{listStyleType: 'circle'}}>
            <ListItem>webpack-isomorphic-tools</ListItem>
            <ListItem>Initial Redux state calculated on server, then client takes over</ListItem>
          </List>
        </div>
}
