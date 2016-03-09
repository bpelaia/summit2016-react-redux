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
import Interactive from "../assets/whyreact/react-counter.js";

import preloader from "../src/utils/preloader";

const images = {
  react_logo: require("../assets/whyreact/react-logo.png"),
  react_named_logo: require("../assets/whyreact/ReactLogo.png"),
  angular_logo: require("../assets/whyreact/angular-logo.png"),
  ember_logo: require("../assets/whyreact/ember-logo.png"),
  aurelia_logo: require("../assets/whyreact/aurelia-logo.png"),
  sencha_logo: require("../assets/whyreact/sencha-logo.png"),
  backbone_logo: require("../assets/whyreact/backbone.png")
};

preloader([
  images.react_logo,
  images.react_named_logo,
  images.angular_logo,
  images.ember_logo,
  images.aurelia_logo,
  images.sencha_logo,
  images.backbone_logo
]);


export const whyReact = {
  notes: '',
  bgColor: 'secondary',
  slideContent: () =>
        <div>
          <Text textColor="primary" bold fit>Why React?</Text>
          <Image src={images.react_logo.replace("/", "")} height="400px"></Image>
        </div>
}

export const reactCompetitors = {
  notes: '',
  slideContent: () =>
        <div>
          {
            //<Text bold fit margin="0px 0px 0px 40px">Popular JavaScript libraries and frameworks</Text>
          }
          <Layout>
            <Fill>
              <Image src={images.angular_logo.replace("/", "")} margin="0px auto 0px"/>
            </Fill>
            <Fill>
              <Image src={images.aurelia_logo.replace("/", "")} margin="0px auto 0px"/>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.react_named_logo.replace("/", "")} margin="0px auto 0px" height="200px"/>
            </Fill>
            <Fill>
              <Image src={images.ember_logo.replace("/", "")} margin="0px auto 0px"/>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Image src={images.sencha_logo.replace("/", "")} margin="0px auto 0px" height="150px"/>
            </Fill>
            <Fill>
              <Image src={images.backbone_logo.replace("/", "")} margin="0px auto 0px" height="120px"/>
            </Fill>
          </Layout>
        </div>
}

export const uponGianats = {
  notes: '',
  bgColor: 'secondary',
  slideContent: () =>
        <div>
          <BlockQuote>
            <Quote>If I have seen further <br/>than others, <br/>it is by standing upon the shoulders of giants</Quote>
            <Cite bold textColor="black" textSize="50">Sir Isaac Newton</Cite>
          </BlockQuote>
        </div>
}

export const reactPros = {
  notes: '',
  textColor: 'black',
  slideContent: () =>
        <div>
            <Text bold fit textColor="tertiary">What cought my attention:</Text>
              <List style={{listStyleType: 'circle'}}>
                <ListItem><span style={markedTxt}>Performace </span>- Virtual DOM</ListItem>
                <ListItem>Unopinionated</ListItem>
                <ListItem>JSX</ListItem>
                <ListItem>Rich ecosystem</ListItem>
                <ListItem>Small components usually do one thing <span style={markedTxt}>very well</span></ListItem>
              </List>
        </div>
}

export const reactCons = {
  notes: '',
  textColor: 'black',
  slideContent: () =>
        <div>
          <Text bold fit textColor="tertiary">What others dislike:</Text>
          <List style={{listStyleType: 'circle'}}>
            <ListItem>Rich ecosystem - <span style={markedTxt}>steep learning curve</span>, lots of alternatives</ListItem>
            <ListItem>Does not support any browser below IE8, and <span style={markedTxt}>never will</span></ListItem>
            <ListItem><span style={markedTxt}>Not</span> a framework, <span style={markedTxt}>only V</span> from MVC</ListItem>
            <ListItem><span style={markedTxt}>Big filesize</span> when compared to provided API/functionalities</ListItem>
          </List>
          <Appear>
            <Heading fit textColor="secondary">There will never be a perfect framework!</Heading>
          </Appear>
        </div>
}

export const reactSample = {
  notes: '',
  bgColor:'code',
  slideContent: () =>
        <div>
          <CodePane
            lang="jsx"
            source={require("raw!../assets/whyreact/react-counter.example")}
            margin="20px auto"
          />
        </div>
}

export const reactSampleLive = {
  notes: '',
  bgColor:'tertiary',
  slideContent: () =>
          <Interactive/>
}
