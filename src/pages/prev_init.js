import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import "./prev_init.css"

const step = [
  {
    name: "p1",
    url: "Pictures/Previous Initiatives/STeP/step1.PNG"
  },
  {
    name: "p2",
    url: "Pictures/Previous Initiatives/STeP/step2.PNG"
  },
  {
    name: "p3",
    url: "Pictures/Previous Initiatives/STeP/step3.PNG"
  },
  // {
  //   name: "p4",
  //   url: "Pictures/Previous Initiatives/STeP/step4.PNG"
  // },


]

const relaunch = [
  {
    name: "p1",
    url: "Pictures/Previous Initiatives/Relaunch/Relaunch Audience.jpg"
  },

  {
    name: "p1",
    url: "Pictures/Previous Initiatives/Relaunch/Relaunch_group.JPG"
  },
  {
    name: "p1",
    url: "Pictures/Previous Initiatives/Relaunch/Relaunch_Team.JPG"
  },

]

class Prev_init extends Component {

  render() {
    const settings = {
      autoplay: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: true,
      className: "init-slides",
      width: "500px"
    }
    return (
      // <div class="inner" style={{ backgroundColor: " white",color:"black" }}>
      //   <div className="head">
      //     <h1>Previous Initiatives</h1>
      //     <p>Shaastra being a celebration of technology and innovation, has always been keen on integrating technology with other domains in the society. Through our constant determination to create a tangible impact, we have been successful in being the flag bearers for many such initiatives over the years.</p>
      //   </div>
      //   <div id="step" className="container">
      //     <div className="text-container" >
      //       <h1>STEP</h1>
      //       <p>
      //         Serviceable technological advancements often necessitate a comprehensive understanding of legal, political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to initiate Moot Court Competitions with the object of creating a space for constructive dialogue and discussion. Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.

      //       </p>
      //     </div>
      //     <div className="media-container" >
      //       <Slider {...settings}>
      //         {step.map((photo) => {
      //           return (
      //             <div className="image-container">
      //               <img src={photo.url} style={{ maxWidth: "100%", margin: "0 auto" }} />
      //             </div>
      //           )
      //         })}
      //       </Slider>
      //     </div>
      //   </div>

      //   <div className="web">
      //     <div id="sim" className="container">

      //       <div className="media-container" >
      //         <img src="Pictures/Previous Initiatives/Simulate/Simulate poster.jpeg" /> {/*style={{ width: "100%", height: 900, paddingTop: 90, marginRight: 30 }} */}
      //       </div>
      //       <div className="text-container">
      //         <h1 id="simulate">SIMULATE</h1>
      //         <p>
      //           Serviceable technological advancements often necessitate a comprehensive understanding of legal,
      //           political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to
      //           initiate Moot Court Competitions with the object of creating a space for constructive dialogue and discussion.
      //           Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
      //           among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.

      //         </p>
      //       </div>

      //     </div>

      //   </div>


      //   <div className="mobile">
      //     <div id="sim" className="container">

      //       <div className="text-container">
      //         <h1 id="simulate">SIMULATE</h1>
      //         <p>
      //           Serviceable technological advancements often necessitate a comprehensive understanding of legal,
      //           political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to
      //           initiate <u>Moot Court</u> Competitions with the object of creating a space for constructive dialogue and discussion.
      //           Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
      //           among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.
      //         </p>
      //       </div>

      //       <div className="media-container" >
      //         <img src="Pictures/Previous Initiatives/Simulate/Simulate poster.jpeg" /> {/*style={{ width: "100%", height: 900, paddingTop: 90, marginRight: 30 }} */}
      //       </div>


      //     </div>

      //   </div>


      //   <div id="relaunch" className="container">
      //     <div className="text-container">
      //       <h1 >RELAUNCH</h1>
      //       <p>
      //         Shaastra Relaunch aimed at solving the enormous but surmountable problem of helping women professionals to get back to their career after a hiatus. With Relaunch, we aspired to be the spark that brings out the dormant skills of women who have taken a break from their professional career, dust themselves off and start afresh. Relaunch strived to help women catch up with what they've missed and link with a vast network of delegate companies to set themselves onto the track of their interest.

      //       </p>
      //     </div>
      //     <div className="media-container" >
      //       <Slider {...settings}>
      //         {relaunch.map((photo) => {
      //           return (
      //             <div className="image-container">
      //               <img src={photo.url} style={{ maxWidth: "100%" }} />
      //             </div>
      //           )
      //         })}
      //       </Slider>
      //     </div>
      //   </div>


      // </div>

      <div className="inner" style={{ backgroundColor: "white", color: "black" }} onTouchStart={() => this.props.update("step")} onMouseEnter={() => this.props.update("step")}>
        <div>
          <h1 className="prev-init-head">PREVIOUS INITIATIVES</h1>
          <p className="prev-init-desc"><i>"Shaastra being a celebration of technology and innovation, has always been keen on integrating technology with other domains in the society. Through our constant determination to create a tangible impact, we have been successful in being the flag bearers for many such initiatives over the years"</i></p>
        </div>
        <div id="step">
          <div className="container">
            <div className="text-container" style={{ color: "black" }} >
              <h1>STeP</h1>
              <p>
                The topic of Technology & Public-Policy added a whole new dimension to the quest of creating impact through Shaastra. This new vertical presented a unique opportunity to Shaastra for solving societal problems and creating a real impact by implementing viable solutions from the Policy-making Challenge. Since understanding technological disruption is critical for a new generation of policymakers, Shaastra took to taking up societal challenges and utilise the power of technology and public policy to provide solutions to the masses.
            </p>
            </div>
            <div className="media-container" >
              <Slider {...settings}>
                {step.map((photo) => {
                  return (
                    <div className="image-container" key={photo.name}>
                      <img src={photo.url} style={{ maxWidth: "100%", margin: "0 auto" }} loading="lazy" />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>

        <div className="container" id="relaunch" onTouchStart={() => this.props.update("relaunch")} onMouseEnter={() => this.props.update("relaunch")}>
          <div className="media-container rel2" >
            <Slider {...settings}>
              {relaunch.map((photo) => {
                return (
                  <div className="image-container rel1" key={photo.name}>
                    <img src={photo.url} style={{ maxWidth: "100%" }} loading="lazy" />
                  </div>
                )
              })}
            </Slider>
          </div>
          <div className="text-container" style={{ color: "black" }}>
            <h1>RELAUNCH</h1>
            <p>
              Shaastra Relaunch aimed at solving the enormous but surmountable problem of helping women professionals to get back to their career after a hiatus. With Relaunch, we aspired to be the spark that brings out the dormant skills of women who have taken a break from their professional career, dust themselves off and start afresh. Relaunch strived to help women catch up with what they've missed and link with a vast network of delegate companies to set themselves onto the track of their interest.
            </p>
          </div>
        </div>

        <div id="simulate" className="web" onTouchStart={() => this.props.update("simulate")} onMouseEnter={() => this.props.update("simulate")}>
          <div className="container">

            <div className="text-container" style={{ color: "black" }}>
              <h1 className="sim">SIMULATE</h1>
              <p>
                Serviceable technological advancements often necessitate a comprehensive understanding of legal,
                political and social landscapes. As strong believers in the above motif, we at IIT Madras Shaastra endeavoured to
                initiate Moot Court Competitions with the object of creating a space for constructive dialogue and discussion.
                Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
                among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.
              </p>
            </div>
            <div className="media-container" >
              <img src="Pictures/Previous Initiatives/Simulate/Simulate poster2.jpeg" loading="lazy" /> {/* style={{ width: "100%", height: 700}} */}
            </div>
          </div>
        </div>

        <div className="mobile">
          <div id="simulate" className="container" onTouchStart={() => this.props.update("simulate")} onMouseEnter={() => this.props.update("simulate")}>
            <div className="text-container" style={{ color: "black" }}>
              <h1 className="sim">SIMULATE</h1>
              <p>
                Serviceable technological advancements often necessitate a comprehensive understanding of legal,
                political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to
              initiate <u>Moot Court</u> Competitions with the object of creating a space for constructive dialogue and discussion.
              Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
              among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.
              </p>
            </div>
            <div className="media-container" >
              <img src="Pictures/Previous Initiatives/Simulate/Simulate poster2.jpeg" loading="lazy" /> {/*style={{ width: "100%", height: 900, paddingTop: 90, marginRight: 30 }} */}
            </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Prev_init;