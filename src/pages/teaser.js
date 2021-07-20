import React, { Component } from 'react';
import teaser from "../video/Teaser2.mp4";
import MM from "../video/Message - MM.mp4";
import ReactPlayer from "react-player/lazy";
import "./teaser.css";

class Teaser extends Component {

  render() {
    return (
      <div className="inner"  id="xp" onMouseEnter={() => this.props.update("xp")}>
        <h1 className="Teaser-Head" style={{ textAlign: "center",marginTop:"2em"}}>REFLECTION BY EXPERTS</h1>
        <div className="Teaser-container">
          
          <div className="Teaser-item Teaser-item-1">
            <h3 style={{ textAlign: "center", marginBottom: "1em" }}>Mr. Keshav Murugesh, CEO of WNS Global Services</h3>
            <div className="wrapper wrapper2  "><ReactPlayer  light="Pictures/Teaser/ksh.png" className="player" width="100%" height="100%" url={teaser} controls /></div>
          </div>
          <div className="Teaser-item Teaser-item-2">
            <h3 style={{ textAlign: "center", marginBottom: "1em" }}> Dr. Madhavan Mukund, Dean, CMI.</h3>
            <div className=" wrapper wrapper2  " ><ReactPlayer light="Pictures/Teaser/mm.png" className="player" width="100%" height="100%" url={MM} controls /></div>
          </div>
          <div className="Teaser-item Teaser-item-3" >
            <h3 > Panel Discussion : The Computational Thinking Angle</h3>
            <div className="wrapper wrapper3">
              <ReactPlayer className="player" light="" url=" https://www.youtube.com/watch?v=uyRifRll5lA&feature=youtu.be" width="100%" height="100%" controls />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Teaser;