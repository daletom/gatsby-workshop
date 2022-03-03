import * as React from "react"
import { Link } from "gatsby"
import VideoPlayerJS from './../components/player';
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div id="outer">
      <div id="outro">
      <div id="hometext">
        <h1 id="homeheader">Building Video Galleries with Gatsby</h1>
        <p id="homeparagraph">At one time or another, we have all seen the "building an image gallery with Gatsby tutorial." Well, it's time to up your game and build a video gallery tutorial!! In this workshop, you will learn how to create video gallery pages with Gatsby using all three of these modern video solutions — Strap in for an amazing workshop!</p>
      </div>
      <ul role="list" id="homelist">
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/HLSadvantages.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/gotopening.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/HLSadvantages.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/HLSadvantages.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/gotopening.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
        <li>
            <div id="outerlist">
              <div id="outerimglist">
              <VideoPlayerJS
            name={"https://tom.imgix.video/HLSadvantages.mp4?fm=hls"}
            id="innervideo"
        >
        </VideoPlayerJS>
              </div>
            </div>
        </li>
      </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
