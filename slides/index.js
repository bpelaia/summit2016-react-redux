import React from "react";
import { Deck, Spectacle } from "../src";

import slidify from "./utils/slidify.js";

// Require CSS
require("normalize.css");
require("../src/themes/default/index.css");
require("../themes/prism-solarizedlight.css");
require("../themes/prism.js");
require("../themes/prism-jsx.min.js");
require("../themes/prism-javascript.min.js");

// Import theme
import createTheme from "../src/themes/default";

const theme = createTheme({
  primary: "white",
  secondary: "#00488D",
  tertiary: "#2E97C4",
  quartenary: "#0098CC",
  code: "#FDF6E3"
});

// Presentation contents
import * as Introduction from "./introduction";
import * as UiComposition from "./composition";
import * as whyReact from "./whyreact";
import * as fluxAndRedux from "./fluxandredux";
import * as modularCss from "./modularcss";
import * as serverSideRendering from "./serverrender";
import * as liveDemo from "./livedemo";
import * as conclusion from "./conclusion";


export default class Presentation extends React.Component {
  render() {
    return (
        <Spectacle theme={theme}>
            <Deck transition={["slide"]} transitionDuration={450}>
                {/*
                Introduction
                */}
                {slidify(Introduction.KickOffSlide)}
                {slidify(Introduction.AboutMe)}
                {slidify(Introduction.Agenda)}
                {/*
                Api gateaway vs UI composition
                */}
                {slidify(UiComposition.microVsUi)}
                {slidify(UiComposition.dividedPage)}
                {slidify(UiComposition.microservicesGraph)}
                {slidify(UiComposition.uiPatternsForWeb)}
                {slidify(UiComposition.gateawayPattern)}
                {slidify(UiComposition.uiComposition)}
                {/*
                  Why Ract?
                  */}
                {slidify(whyReact.whyReact)}
                {slidify(whyReact.reactCompetitors)}
                {slidify(whyReact.uponGianats)}
                {slidify(whyReact.reactPros)}
                {slidify(whyReact.reactCons)}
                {slidify(whyReact.reactSample)}
                {slidify(whyReact.reactSampleLive)}
                {/*
                  Flux, Redux and ducks
                  */}
                {slidify(fluxAndRedux.reduxOverview)}
                {slidify(fluxAndRedux.fluxDiagram)}
                {slidify(fluxAndRedux.reduxCharacteristic)}
                {slidify(fluxAndRedux.reduxSample)}
                {slidify(fluxAndRedux.ducks)}
                {slidify(fluxAndRedux.ducksSample)}
                {slidify(fluxAndRedux.whyAwsome)}
                {slidify(fluxAndRedux.devTools)}
                {slidify(fluxAndRedux.devSlider)}
                {slidify(fluxAndRedux.devFilterable)}
                {slidify(fluxAndRedux.devChart)}
                {slidify(fluxAndRedux.devInspector)}
                {slidify(fluxAndRedux.imaginePossibilities)}
                {/*
                  Modules CSS
                  */}
                {slidify(modularCss.whatWithAssets)}
                {slidify(modularCss.inlineStyles)}
                {slidify(modularCss.webpackLoaders)}
                {slidify(modularCss.modularExamples)}


                {/*
                 Live Demo
                  */}
                {slidify(liveDemo.liveDemo)}

                {/*
                 Live Demo
                  */}
                {slidify(conclusion.questions)}
                {slidify(conclusion.thanks)}

            </Deck>
        </Spectacle>
    );
  }
}
