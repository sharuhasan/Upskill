import React, { Component } from 'react';
import "./contact.css"

class Contact extends Component {

  render() {
    return (

      <div className="inner" className="Contact-container" id="Contact"   >
        <h2>CONTACT US</h2>
        <div className="contact-item contact-item1" >
          <p className="email_box"><a href="mailto:upskill@shaastra.org">upskill@shaastra.org</a></p>
        </div>
        <div className=" contact-item contact-item2" >

          <p >Adithya Narayanan</p>
          <div className="icon solid fa-phone" style={{transform:"rotate(90deg)"}} />
          <p>+91 8547754853</p>

        </div>

        <div className="contact-item contact-item2"  >

          <p>Shubhang Kandoi </p>
          <div className="icon solid fa-phone" style={{transform:"rotate(90deg)"}}/>
          <p>+91 9491405096</p>
        </div>

        <ul className="icons contact-item3" style={{ textAlign: "center" }}>
          <li><a href="https://twitter.com/shaastraiitm" target="blank" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="https://www.facebook.com/Shaastra/" target="blank" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          {/* <li><a href="#" className="icon brands fa-snapchat-ghost"><span className="label">Snapchat</span></a></li> */}
          <li><a href="https://www.instagram.com/shaastra_iitm/" target="blank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>

      </div>



    );
  }
}

export default Contact;