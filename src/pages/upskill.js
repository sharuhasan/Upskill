import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import "./upskill.css"
const photos = [
  {
    name: "p1",
    url: "Pictures/Upskill/UpSkill bio replacement_828x601.jpg"
  },
  {
    name: "p2",
    url: "Pictures/Upskill/UpskillBioteacherReplacement_828x601.jpg"
  }
]
class Upskill extends Component {

  render() {
    const settings = {
      autoplay: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: true,
      className: "up-slides"

    }
    return (

      <div id="upskill" className="inner" style={{ backgroundColor: "black" }} onMouseEnter={() => this.props.update("upskill")}>

        <div className="up-container">
          <div  >
            <h1 >SHAASTRA UPSKILL</h1>
            <p className="up-text" >
              UpSkill aspires to bring about this change at the grassroot level of our education system by introducing Computational Thinking skills at an early age. To create a sustainable impact, our vision is to get the CS educators acquainted with efficient pedagogies and innovative methods of presenting the concepts of Computer Science to students. Since a teacher affects eternity, Shaastra’s new initiative UpSkill, is a small step towards a brighter future.
              UpSkill stems from the necessity of revolutionizing the current scenario of Computer Science Education in India. The way Computer Science is perceived varies from people associating it with parts of a computer to relating it to programming languages. But in reality it is as fundamental as day to day decision making.
            </p>
          </div>

          <div className="up-slider" >
            <Slider {...settings}>
              {photos.map((photo) => {
                return (
                  <div className="up-image" key={photo.name}>
                    <img src={photo.url} loading="lazy" />
                  </div>
                )
              })}
            </Slider>
          </div>

        </div>
      </div>

    );
  }
}

export default Upskill;