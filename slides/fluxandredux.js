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
  flux_overview: require("../assets/redux/flux-diagram1.png"),
  dev_tools: require("../assets/redux/devTools.gif"),
  dev_slider: require("../assets/redux/devToolsSlider.gif"),
  dev_chart_monitor: require("../assets/redux/devChartMonitor.gif"),
  dev_filterable_monitor: require("../assets/redux/devFilterableMonitor.gif"),
  dev_inspector: require("../assets/redux/devInspector.gif")
};

preloader([
  images.flux_overview,
  images.dev_tools,
  images.dev_slider,
  images.dev_chart_monitor,
  images.dev_filterable_monitor,
  images.dev_inspector
]);


export const reduxOverview = {
  notes: '',
  bgColor: 'secondary',
  slideContent: () =>
        <div>
          <Heading fit caps bold textColor="primary">Redux</Heading>
          <Heading fit caps bold>predictable state container</Heading>
        </div>
}

export const reduxCharacteristic = {
  notes: '',
  textColor: 'secondary',
  slideContent: () =>
        <div>
          <Heading fit bold>Redux basics:</Heading>
          <Markdown>
          {`
* Inspired by **Flux**, **CQRS**, and **Event Sourcing**
* Single source of truth
* State is read-only
* Changes are made with pure functions (reducers)
* Great DEV experiance - Hot Reloading with Time Travel
          `}
          </Markdown>

        </div>
}


export const reduxSample = {
  notes: '',
  bgColor:'code',
  slideContent: () =>
  <div>
    <CodePane
      textSize={17}
      lang="javascript"
      source={require("raw!../assets/redux/raw_redux.example")}
      margin="0px auto"
    />
  </div>
}

export const fluxDiagram = {
  notes: '',
  bgColor: '#4F4E50',
  slideContent: () =>
        <div>
          <Heading bold caps textSize={80}>Flux</Heading>
          <Image src={images.flux_overview.replace("/","")} height={500}></Image>
        </div>
}


export const ducks = {
  notes: '',
  slideContent: () =>
        <div>
          <Heading bold fit>Ducks (Redux Reducer Bundles)</Heading>
          <Markdown>
            {`
* **_MUST_** export default a function called reducer()
* **_MUST_** export its action creators as functions
* **_MUST_** have action types in the form

**npm-module-or-app/reducer/ACTION_TYPE**
* **_MAY_** export its action types as UPPER_SNAKE_CASE, if an external reducer needs to listen for them, or if it is a published reusable library
            `}
          </Markdown>
        </div>
}

export const ducksSample = {
  notes: '',
  bgColor:'code',
  slideContent: () =>
  <div>
    <CodePane
      textSize={18}
      lang="javascript"
      source={require("raw!../assets/redux/redux_ducks.example")}
      margin="20px auto"
    />
  </div>
}

export const whyAwsome = {
  notes: '',
  slideContent: () =>
        <div>
          <Heading fit bold>What more makes Redux</Heading>
          <Heading fit bold caps textColor="secondary">awsome?</Heading>
          <Heading fit bold caps textColor="black">Developer tools!</Heading>
        </div>
}

export const devTools = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.dev_tools.replace("/", "")} margin="0px auto 0px"/>
        </div>
}

export const devSlider = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.dev_slider.replace("/", "")} margin="0px auto 0px" height="550px"/>
        </div>
}

export const devFilterable = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.dev_filterable_monitor.replace("/", "")} margin="0px auto 0px"/>
        </div>
}

export const devChart = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.dev_chart_monitor.replace("/", "")} margin="0px auto 0px"/>
        </div>
}

export const devInspector = {
  notes: '',
  slideContent: () =>
        <div>
          <Image src={images.dev_inspector.replace("/", "")} margin="0px auto 0px"/>
        </div>
}

export const imaginePossibilities = {
  notes: '',
  slideContent: () =>
        <div>
          <Heading fit>Imagine possibilities!</Heading>
          <List style={{listStyleType: 'circle'}}>
            <Appear><ListItem><span style={markedTxt}>Initial</span> Server Side rendering</ListItem></Appear>
            <Appear><ListItem>Recovery from local storage</ListItem></Appear>
            <Appear><ListItem>Monitoring/logging</ListItem></Appear>
            <Appear><ListItem>Bug reporting, <span style={markedTxt}>debugging</span>, bug fixing</ListItem></Appear>
            <Appear><ListItem>... and more, <span style={markedTxt}>imagination is the limit</span> :).</ListItem></Appear>
          </List>
        </div>
}
