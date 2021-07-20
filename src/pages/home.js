import React, { Component } from "react";
import Bg from "../video/bg.mp4"
import "./Bg.css";

class Home extends Component {

  render() {
    return (
      <div id="home" className="inner" onMouseEnter={() => this.props.update("home")} style={{ position: "relative", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="home-container">
          <video autoPlay="autoplay" loop="loop" muted className="Video">
            <source src={Bg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          <div className="content">
            <div className="flexbox_itemHS" >
              <img
                src="Pictures/white-logo.png"
                alt="shaastra"
              />
            </div>
            <div className="flexbox_itemHU" >
              <img
                src="Pictures/upskill.png"
                alt="upskill"
              />
              <div className="flexbox_itemHT">
                Enhance computational thinking skills <br></br>Equip teachers for the future
                </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
// style={{marginLeft:60}}