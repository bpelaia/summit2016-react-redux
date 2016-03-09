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
import { markedTxt } from "./utils/customCss.js";

import preloader from "../src/utils/preloader";

const images = {
  page_divided: require("../assets/composition/page_divided.jpg"),
  microservices: require("../assets/composition/microservices.png"),
  gateaway_pattern: require("../assets/composition/gateaway_pattern.jpg"),
  composition_pattern: require("../assets/composition/composition_pattern.jpg"),
  //proxy_composition: require("../assets/composition/proxy_composition.png"),
  //direct_composition: require("../assets/composition/direct_composition.png")
};

preloader([
  images.page_divided,
  images.microservices,
  images.gateaway_pattern,
  images.composition_pattern,
  //images.proxy_composition,
  //images.direct_composition
]);

export const microVsUi = {
    notes: '',
    bgColor: 'secondary',
    slideContent: () =>
          <div>
            <Heading size={1} caps textColor="primary" fit>
                Microservices
            </Heading>
            <Heading bold caps textColor="black">
                vs.
            </Heading>
            <Heading bold caps textColor="#45E6FF" fit>
                User interface
            </Heading>
          </div>
}

export const dividedPage = {
    notes: '',
    slideContent: () =>
          <div>
            <Image src={images.page_divided.replace("/", "")} margin="0px auto 0px"/>
          </div>
}

export const microservicesGraph = {
    notes: '',
    transition: ["zoom", "slide"],
    slideContent: () =>
          <div>
            <Image src={images.microservices.replace("/", "")} margin="0px auto 0px" height="600"/>
          </div>
}

export const uiPatternsForWeb = {
  notes: '',
  textColor: 'black',
  slideContent: () =>
        <div>
          <Heading bold fit caps>Some possible patterns:</Heading>
          <List>
            <ListItem>API Gateaway (Ajax on top of a monolith)</ListItem>
            <ListItem>UI composition:
              <List padding="0px 0px 0px 40px">
                <ListItem><span style={markedTxt}>iFrames</span> (back in town)</ListItem>
                <ListItem><span style={markedTxt}>Server Side Includes</span> (nginx)</ListItem>
                <ListItem><span style={markedTxt}>Edge Side Includes</span> (Varnish)</ListItem>
                <ListItem><span style={markedTxt}>Composition proxy</span> (Compoxure)</ListItem>
                <ListItem><span style={markedTxt}>Direct composition</span> (dustjs, "Front End" server)</ListItem>
              </List>
            </ListItem>
          </List>
        </div>
}

export const gateawayPattern = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.gateaway_pattern.replace("/", "")} margin="0px auto 0px"  height="700px"/>
        </div>
}


export const uiComposition = {
  notes: '',
  transition: ["spin"],
  slideContent: () =>
        <div>
          <Image src={images.composition_pattern.replace("/", "")} margin="0px auto 0px"  height="700px"/>
        </div>
}

// export const direktComposition = {
//   notes: '',
//   slideContent: () =>
//         <div>
//           <Text>Direct composition</Text>
//           <Image src={images.direct_composition.replace("/", "")} margin="40px auto 0px" height="500px"/>
//         </div>
// }
//
// export const proxyComposition = {
//   notes: '',
//   slideContent: () =>
//         <div>
//           <Text>Proxy composition</Text>
//           <Image src={images.proxy_composition.replace("/", "")} margin="40px auto 0px"  height="500px"/>
//         </div>
// }
