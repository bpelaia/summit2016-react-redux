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
  city: require("../assets/city.jpg")
};

preloader(images);


export const questions = {
  notes: '',
  bgImage: images.city.replace("/", ""),
  bgDarken: 0.75,
  slideContent: () =>
        <div>
          <Heading bold fit textColor="primary">
            <span style={{color:'grey'}}>Q</span>
            &
            <span style={{color:'#2E97C4'}}>A</span>
          </Heading>
        </div>
}

export const thanks = {
  notes: '',
  slideContent: () =>
        <div>
          <Heading bold fit>Thank you for your attention!</Heading>
        </div>
}
