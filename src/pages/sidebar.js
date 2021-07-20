import React, { Component } from 'react';
import "./sidebar.css"

const close = () => {
  document.querySelector("#sidebar").className = "inactive";
}
class Sidebar extends Component {

  render() {
    return (
      <div>
        {/* <!-- Sidebar --> */}
        <div id="sidebar" className="inactive">
          <div className="inner" >
            {/* <!-- Menu --> */}
            <nav id="menu">
              {/* <header className="major" style={{ textAlign: "center" }}>
                <h2 style={{ fontSize: 30, fontFamily: "Roboto Slab", marginBottom: 40, paddingBottom: 1 }}>&nbsp;&nbsp;&nbsp;&nbsp;MENU</h2>
              </header> */}
              <ul>
                <li><a href="#home" className={(this.props.active == "home") && "active"}>HOME</a></li>
                <li><a href="#about" className={(this.props.active == "about") && "active"}>ABOUT</a></li>
                <li><a href="#upskill" className={(this.props.active == "upskill") && "active"}>SHAASTRA UPSKILL</a></li>
                <li><a href="#xp" className={(this.props.active == "xp") && "active"}>REFLECTION BY EXPERTS</a></li>
                <li>
                  <span className={"opener "}>PREVIOUS SHAASTRA INITIATIVES</span>
                  <ul>

                    <li><a href="#step" className={(this.props.active == "step") && "active"} style={{textTransform:"none"}}>STeP</a></li>
                    <li><a href="#relaunch" className={(this.props.active == "relaunch") && "active"}>Relaunch</a></li>
                    <li><a href="#simulate" className={(this.props.active == "simulate") && "active"}>Simulate</a></li>
                  </ul>
                </li>
                <li><a href="#news" className={(this.props.active == "news") && "active"}>IN THE NEWS</a></li>
                <li><a href="#partners" className={(this.props.active == "partners") && "active"}>PREVIOUS PARTNERS</a></li>

              </ul>
            </nav>



          </div>
          <script>
            document.querySelectorAll("menu a").addEventListener('click', {close});
          </script>
        </div>

        {/* <!-- Scripts --> */}
      </div>
    );
  }
}

export default Sidebar;