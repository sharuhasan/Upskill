import React, { Component } from 'react';
import "./partner.css"

class Partners extends Component {

  render() {
    return (
      // <div id="partners" class="inner" style={{ backgroundColor: "white", textAlign: "center" }}  >
      //   <h1>“Over the years, through our different initiatives we have been fortunate to collaborate with many front-runners in different industries.”</h1>

      //   <div className="flexbox_containerPA">
      //     <div className="flex_itemPA" ><a href="https://alexa.amazon.com/"><img src="Pictures/Partners/alexa.png" /></a> </div>
      //     <div className="flex_itemPA"><a href="https://www.drdo.gov.in/home"><img src="Pictures/Partners/DRDO.png" /></a> </div>
      //     <div className="flex_itemPA"><a href="https://www.larsentoubro.com/"><img src="Pictures/Partners/LT.png" /></a> </div>
      //   </div>
      // </div>

      <div className="inner" id="partners" style={{ backgroundColor: "white", textAlign: "center" }} onMouseEnter={() => this.props.update("partners")} >
        <div className="partners-head" ><h1 >PREVIOUS PARTNERS</h1></div>
        <div className="partners-desc" ><h1>Over the years, through our different initiatives we have been fortunate to collaborate with many front-runners in different industries</h1></div>
        {/* <div className="Partner_Container">
          <div className="flex_itemPA" ><a href="https://alexa.amazon.com/"><img src="Pictures/Partners/alexa.png" /></a> <p>Amazon Alexa</p> </div>
          <div className="flex_itemPA"><a href="https://www.drdo.gov.in/home"><img src="Pictures/Partners/DRDO.png" /></a><p>DRDO</p> </div>
          <div className="flex_itemPA"><a href="https://www.larsentoubro.com/"><img src="Pictures/Partners/LT.png" /></a><p>Larsen and Toubro</p></div>
        </div> */}
        <div className="Partner_Container">

            <div><a href="https://alexa.amazon.com/"><img src="Pictures/Partners/alexa.png" /></a><div>Alexa</div></div>
            <div><a href="https://www.shell.com/"><img src="Pictures/Partners/Shell.png" /></a><div>Shell</div></div>
           
            <div><a href="https://www.drdo.gov.in/home"><img src="Pictures/Partners/DRDO.png" /></a> <div>DRDO</div></div>
            <div><a href="https://cis-india.org/"><img src="Pictures/Partners/centre.png" /></a> <div>CIS</div></div>
            
           
            
            <div><a href="https://www.startv.com/about-us/sports/"><img src="Pictures/Partners/Star.png" /></a><div>Star Sports</div></div>
             <div><a href="https://www.globalcitizen.org/en/"><img src="Pictures/Partners/gc.png" /></a> <div>Global Citizen </div></div>
             <div><a href="https://acumen.org/"><img src="Pictures/Partners/acumen.png" /></a><div>Acumen</div></div>
            <div><a href="https://www.larsentoubro.com/"><img src="Pictures/Partners/LT.png" /></a> <div>Larsen & Toubro</div></div>
            <div><a href="http://accessibleindia.gov.in/content/innerpage/about-accessible-india-campaign.php"><img src="Pictures/Partners/access.png" /></a><div>Accessible India Campaign</div></div>

          
        </div>
      </div>
    );
  }
}

export default Partners;