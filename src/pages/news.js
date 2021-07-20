import React, { Component } from 'react';
import "./news.css"
import Carousel,{ consts } from 'react-elastic-carousel';


// import GliderComponent from 'react-glider-carousel';
// import AwesomeSlider from 'react-awesome-slider';
// import AwesomeSliderStyles from "./news.css";

const Breakpoints=[
  {width:1,itemsToShow:1,transitionMs:5000},
  {width:440,itemsToShow:2},
  {width:670,itemsToShow:3},
]



class News extends Component {

  render() {
    
    return (
      <div id="news" className="inner" onMouseEnter={() => this.props.update("news")}>
        <div className="news-head"> <h1 >IN THE NEWS</h1></div>
        <div className="news-desc"> <h1 >"Our initiatives which are meant to spark innovation and establish a vision for change in various fields have warranted multiple news articles and press coverage due to their relevance in society and value to the general public"</h1></div>
        <div className="news-web" >
           <Carousel  breakPoints={Breakpoints} enableAutoPlay={false} autoPlaySpeed={4000}  transitionMs={2000} itemPosition={consts.CENTER}  itemPadding={[30,30]}className="news-carousel" disableArrowsOnEnd={false}>
            <div ><img src="Pictures/In the New/Annotation_2020-07-21_121359.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121451_831x812.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121557_831x812.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121729_831x812.png"/></div>
            <div><img src="Pictures/In the New/ShaastraNews1.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews2_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews3_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews4_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews5_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews6_831x812.jpeg" style={{filter:"brightness(3)"}}/></div>
            
          </Carousel>
        </div>  
        <div className="news-mobile" >
           <Carousel breakPoints={Breakpoints} enableAutoPlay={false} autoPlaySpeed={4000} transitionMs={900} itemPosition={consts.CENTER}  itemPadding={[30,30]}className="news-carousel" disableArrowsOnEnd={false}>
            <div ><img src="Pictures/In the New/Annotation_2020-07-21_121359.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121451_831x812.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121557_831x812.png"/></div>
            <div><img src="Pictures/In the New/Annotation_2020-07-21_121729_831x812.png"/></div>
            <div><img src="Pictures/In the New/ShaastraNews1.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews2_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews3_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews4_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews5_831x812.jpeg"/></div>
            <div><img src="Pictures/In the New/ShaastraNews6_831x812.jpeg"/></div>
            
          </Carousel>
        </div>  
    </div>
    )
  }
}

export default News;
 
        
        