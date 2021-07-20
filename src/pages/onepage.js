import React, { Component } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Teaser from "../video/Teaser.mp4"
import MM from "../video/Message - MM.mp4"
import Slider from "react-slick"
import ReactPlayer from "react-player"
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from "./news.css";
import Bg from "../video/bg.mp4"
import "./Bg.css";
import "./About.css"
import "./upskill.css"
import "./prev_init.css"
import "./experts.css"
import "./news.css"

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


const photosAbout = [
  {
    name: "p1",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen3.JPG"
  },
  {
    name: "p2",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen2.NEF"
  },
  {
    name: "p3",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen1.JPG"
  },
  {
    name: "p4",
    url: "Pictures/Shaastra Gen Pics/ShaastraGen4.JPG"
  },
]

const photosUpskill = [
    {
      name: "p1",
      url: "Pictures/UpSkill bio replacement.jpg"
    },
    {
      name: "p2",
      url: "Pictures/UpskillBioteacherReplacement.jpg"
    }
  ]
class EVOLVE extends Component {
    
    
    render() {   
        const settingsAbout = {
            autoplay: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: true,
            className: "slides"
    
        }
        const settingsUpskill = {
            autoplay: true,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: true,
            slidesToScroll: true,
            className: "up-slides"
      
          }
          const settingsInit = {
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
            <div id="wrapper">
                <div id="main" style={{backgroundColor:"white"}}>
                {/* <div class="inner" style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>

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
                                     */}
            
  
  
{/* ABOUT */}
                    <div class="inner" id="About" style={{ backgroundColor: "white" }}>
                        <div className="about-container" >
                        <div className="about-slider" style={{ marginTop: 70 }} >
                            <Slider {...settingsAbout} >
                            {photosAbout.map((photo) => {
                                return (
                                <div className="about-image">
                                    <img src={photo.url} />
                                </div>
                                )
                            })}
                            </Slider>
                        </div>
                        <div className="about-text" >
                            Shaastra is the annual technical festival of Indian Institute of Technology
                            Madras. The festival is traditionally held over four days and four nights during
                            the first week of January. Being the first in the world to be ISO 9001:2015
                            certified and completely student run with a footfall of over 50,000, Shaastra
                            stands out from the rest in being the largest and one of the most unique tech
                            festivals ever celebrated in India and the world. All of this is fuelled by our
                            seamless passion: the “Spirit of Engineering”.
                            We, at Shaastra, believe in Innovation. To truly achieve this goal, every year we have a brand-new department formed with the sole intention of breaking thresholds and moving forward. In light of that, this year, we, at Upskill, aspire to bring about a change in the way Computer Science education is perceived by the academic stakeholders.
                
                
                            </div>
                        <div className="teaser-container" >
                            <div><ReactPlayer  url={Teaser}  width="30vw" height="auto" controls/></div>
                            <div><ReactPlayer  url={MM}  width="30vw" height="auto" controls/></div>
                        </div>
                        <div >
                            <h3> Panel Discussion: The Computational Thinking Angle</h3>
                            <ReactPlayer  url=" https://www.youtube.com/watch?v=uyRifRll5lA&feature=youtu.be"  controls/>
                        </div>
                       
                        </div>
                    </div>
                    

{/* SIDEBAR */}

                    <div id="sidebar">
                        <div className="inner" >
                            {/* <!-- Menu --> */}
                            <nav id="menu">
                            <header className="major" style={{ textAlign: "center" }}>
                                <h2 style={{ fontSize: 30, fontFamily: "Roboto Slab", marginBottom: 40, paddingBottom: 1 }}>&nbsp;&nbsp;&nbsp;&nbsp;MENU</h2>
                            </header>
                            <ul>
                                <li><a href="#Home"  >HOME</a></li>
                                <li><a href="#About" >ABOUT</a></li>
                                <li><a href="#Shaastra_upskill"  >SHAASTRA UPSKILL</a></li>
                                <li><a href="#Ref_by_exp" >REFLECTION BY EXPERTS</a></li>
                                <li>
                                <span className="opener"><a href="#Step"  >PREVIOUS SHAASTRA INITIATIVES</a></span>
                                <ul>

                                    <li><a href="#Step"  >STeP</a></li>
                                    <li><a href="#Simulate" >Simulate</a></li>
                                    <li><a href="#Relaunch" >Relaunch</a></li>
                                </ul>
                                </li>
                                <li><a href="#In_the_news" >IN THE NEWS</a></li>
                                <li><a href="#Prev_partners">PREVIOUS PARTNERS</a></li>
                                <li><a href="#Contact" >CONTACT</a></li>
                            </ul>
                            </nav>
                        </div>
                    </div>
    

{/*UPSKILL*/}
                    <div class="inner" id="Shaastra_upskill" style={{ backgroundColor: "black" }}>
                        <div className="up-container">
                        <div className="up-text" >
                            <h1>Shaastra Upskill</h1>
                            <p>
                            UpSkill stems from the necessity of revolutionizing the current scenario of Computer Science Education in India. The way Computer Science is perceived varies from people associating it with parts of a computer to relating it to programming languages. But in reality it is as fundamental as day to day decision making. 

<br></br><br></br>UpSkill aspires to bring about this change at the grassroot level of our education system by introducing Computational Thinking skills at an early age. To create a sustainable impact, our vision is to get the CS educators acquainted with efficient pedagogies and innovative methods of presenting the concepts of Computer Science to students.Since a teacher affects eternity, Shaastra’s new initiative UpSkill, is a small step towards a brighter future.

                            </p>
                        </div>
                        <div className="up-slider" >
                            <Slider {...settingsUpskill}>
                            {photosUpskill.map((photo) => {
                                return (
                                <div>
                                    <img src={photo.url} />
                                </div>
                                )
                            })}
                            </Slider>
                        </div>
                        </div>

                    

 
{/*REF_EXPERTS */}
                        <div  id="Ref_by_exp" style={{ backgroundColor: "black" }}>
                            <div className="xp-container" style={{ color: "rgb(4, 220, 208)", textAlign: "center" }}>
                            <div className="infographic">
                                <div className="img"><img src="Pictures/experts/empower.png" /></div>
                                <div className="text">
                                <h1 >EMPOWER</h1>
                                    UpSkill empowers both teachers and students to improve their grasp on the subject of Computer Science to equip oneself to be future ready. It is a professional development opportunity for teachers and a platform for students to develop computational thinking skills and improve them.
                                </div>
                            </div>
                            <div className="infographic">
                                <div className="img"><img src="Pictures/experts/code.png" /></div>
                                <div className="text">
                                <h1>CODE{"<>"}</h1>
                                    Coding is an essential investment for the future of any child in this digital age.A basic parameter of literacy in the digital age, UpSkill will enable all participating teachers to be able to pass on these skills to their students helping them stand out of the crowd.
                                </div>
                            </div>
                            <div className="infographic">
                                <div className="img"><img src="Pictures/experts/showcase.png" /></div>
                                <div className="text">
                                <h1>SHOWCASE</h1>
                                    UpSkill provides you a platform to gauge your expertise and your students’ preparedness in being future ready and to evaluate where they stand with respect to their contemporaries.We help the students challenge themselves and help them grow as we go.
                                </div>
                            </div>
                           
                            </div>
                        </div>
                    </div>
                    
 


{/* PREV INIT */}

                    <div class="inner" id="Step" style={{ backgroundColor: "white" ,color:"black" }}>
                        <div className="container">
                            <div className="text-container" style={{color:"black"}} >
                                <h1 style={{ marginBottom: 0, paddingBottom: 0, color: "rgb(168, 19, 158)" }}>STEP</h1>
                                The topic of Technology &Public-Policy added a whole new dimension to the quest of creating impact through Shaastra. The new vertical presented a unique opportunity to Shaastra to create real impact and solve societal problems, implementing some of the solutions of a Policymaking Challenge. Since understanding technological disruption is critical for a new generation of policymakers, Shaastra took to taking up societal challenges and utilise the power of technology and public policy to provide solutions to the masses.


                                        </div>
                            <div className="media-container" >
                                <Slider {...settingsInit}>
                                {step.map((photo) => {
                                    return (
                                    <div className="image-container">
                                        <img src={photo.url} style={{ maxWidth: "100%", margin: "0 auto" }} />
                                    </div>
                                    )
                                })}
                                </Slider>
                            </div>
                        </div>

                        <div id="Simulate" className="web">
                            <div  className="container">
                                <div className="media-container" >
                                <img src="Pictures/Previous Initiatives/Simulate/Simulate poster.jpeg" /> {/*style={{ width: "100%", height: 900, paddingTop: 90, marginRight: 30 }} */}
                                </div>
                                <div className="text-container" style={{color:"black"}}>
                                <h1 style={{ marginBottom: 0, paddingBottom: 0, marginRight: 0, paddingRight: 0, color: "rgb(168, 19, 158)" }} id="simulate">SIMULATE</h1>
                                            Serviceable technological advancements often necessitate a comprehensive understanding of legal,
                                            political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to
                                            initiate Moot Court Competitions with the object of creating a space for constructive dialogue and discussion.
                                            Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
                                            among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.
                                        </div>
                            </div>
                        </div>

                        <div className="mobile">
                            <div id="Simulate" className="container">
                                <div className="text-container" style={{color:"black"}}>
                                <h1 style={{ marginBottom: 0, paddingBottom: 0, marginRight: 0, paddingRight: 0, color: "rgb(168, 19, 158)" }} id="simulate">SIMULATE</h1>
                                Serviceable technological advancements often necessitate a comprehensive understanding of legal,
                                political and social landscapes. As strong believers in the above motif, we at IIT Madras endeavoured to
                                initiate <u>Moot Court</u> Competitions with the object of creating a space for constructive dialogue and discussion.
                                Our aim was to elicit intellectual deliberations so as to foster a culture of critical but sensitised thinking
                                among some of the brightest minds of our country and thereby create a more inclusive fest by catering to a wider audience.
                            </div>
                                <div className="media-container" >
                                <img src="Pictures/Previous Initiatives/Simulate/Simulate poster.jpeg" /> {/*style={{ width: "100%", height: 900, paddingTop: 90, marginRight: 30 }} */}
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="container">
                            <div id="Relaunch" className="text-container" style={{color:"black"}}>
                                <h1 style={{ marginBottom: 0, paddingBottom: 0, color: "rgb(168, 19, 158)", fontSize: 60 }}>RELAUNCH</h1>
                                        Shaastra Relaunch aimed at solving the enormous but surmountable problem of helping women professionals to get back to their career after a hiatus. With Relaunch, we aspired to be the spark that brings out the dormant skills of women who have taken a break from their professional career, dust themselves off and start afresh. Relaunch strived to help women catch up with what they've missed and link with a vast network of delegate companies to set themselves onto the track of their interest.
                            </div>
                            <div className="media-container" >
                                <Slider {...settingsInit}>
                                {relaunch.map((photo) => {
                                    return (
                                    <div className="image-container">
                                        <img src={photo.url} style={{ maxWidth: "100%" }} />
                                    </div>
                                    )
                                })}
                                </Slider>
                            </div>
                        </div>
                    </div>
                    
                    

                   
{/* NEWS */}
                    <div id="In_the_news">
                        <AwesomeSlider cssModule={AwesomeSliderStyles}>
                            <div data-src="Pictures/In the News/Annotation 2020-07-21 121359.png"  />
                            <div data-src="Pictures/In the News/Annotation 2020-07-21 121451.png" />
                            <div data-src="Pictures/In the News/Annotation 2020-07-21 121557.png" />
                            <div data-src="Pictures/In the News/Annotation 2020-07-21 121729.png" />
                            <div data-src="Pictures/In the News/ShaastraNews1.jpeg" />
                            <div data-src="Pictures/In the News/ShaastraNews2.jpeg" />
                            <div data-src="Pictures/In the News/ShaastraNews3.jpeg" />
                            <div data-src="Pictures/In the News/ShaastraNews4.jpeg" />
                            <div data-src="Pictures/In the News/ShaastraNews5.jpeg" />
                            <div data-src="Pictures/In the News/ShaastraNews6.jpeg" />
                        </AwesomeSlider>
                    </div>
                   

  
{/* PARTNERS   */}
                    <div class="inner" id="Prev_partners" style={{ backgroundColor: "white", textAlign: "center" ,marginTop:"5%"}}  >
                        <div style={{color:"black",fontSize:40,justifyContent:"center"}}>Over the years, through our different initiatives we have been fortunate to collaborate with many front-runners in different industries</div>
                        <div className="flexbox_containerPA">
                            <div className="flex_itemPA" ><a href="https://alexa.amazon.com/"><img src="Pictures/Partners/alexa.png" /></a> </div>
                            <div className="flex_itemPA"><a href="https://www.drdo.gov.in/home"><img src="Pictures/Partners/DRDO.png" /></a> </div>
                            <div className="flex_itemPA"><a href="https://www.larsentoubro.com/"><img src="Pictures/Partners/LT.png" /></a> </div>
                        </div>
                    </div>

{/* CONTACT */}
                    <div class="inner" className="Contact-container"id="Contact"   >
                        <h2 style={{textAlign:"center",color:"black"}}>CONTACT US</h2>
                        <div className="flexbox_containerSIDE" >
                            <div  className="email_box"> upskill@shaastra.org</div>
                        </div>
                        <div className="flexbox_containerSIDE" >

                                <div>Adithya Narayanan</div>
                                <div className="icon solid fa-phone" style={{ color: "blue" }} />
                                <div>+91 8547754853</div>

                        </div>
                            
                        <div className="flexbox_containerSIDE" style={{ }} >

                                <div>Shubhang Kandoi</div>
                                <div className="icon solid fa-phone" style={{ color: "blue" }} />
                                <div>+91 9491405096</div>
                        </div>
                       
                        <ul className="icons" style={{textAlign:"center"}}>
										<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
										<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
										<li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
										<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
										<li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
									</ul>

                    </div>
                    
                </div>
            </div>

    

         );
    }
}
 
export default EVOLVE;