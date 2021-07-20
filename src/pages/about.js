import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import "./About.css"


const photos = [
  {
    name: "1",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen3.JPG"
  },
  {
    name: "2",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen2.NEF"
  },
  {
    name: "3",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen1.JPG"
  },
  {
    name: "4",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen4.JPG"
  },


]
class About extends Component {

  render() {
    const settings = {
      autoplay: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: true,
      className: "slides"

    }
    return (
      <div id="about" className="inner" style={{ backgroundColor: "white"}} onMouseEnter={() => this.props.update("about")}>


        <div className="about-container" >
          <div className="about-text" >
            <h1 style={{ textAlign: "center" }}>ABOUT SHAASTRA</h1>
            <p>
              Shaastra is the annual technical festival of Indian Institute of Technology
              Madras. The festival is traditionally held over four days and four nights during
              the first week of January. Being the first in the world to be ISO 9001:2015
              certified and completely student run with a footfall of over 50,000, Shaastra
              stands out from the rest in being the largest and one of the most unique tech
              festivals ever celebrated in India and the world. All of this is fuelled by our
              seamless passion: the “Spirit of Engineering”.
              We, at Shaastra, believe in Innovation. To truly achieve this goal, every year we have a brand-new department formed with the sole intention of breaking thresholds and moving forward. In light of that, this year, we, at Upskill, aspire to bring about a change in the way Computer Science education is perceived by the academic stakeholders.

            </p>
          </div>

          <div className="about-slider" >
            <Slider {...settings} >
              {photos.map((photo) => {
                return (
                  <div className="about-image" key={photo.name}>
                    <img  src={photo.url} loading="lazy" />
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

export default About;