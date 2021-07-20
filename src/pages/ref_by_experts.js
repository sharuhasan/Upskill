import React, { Component } from 'react';
import "./experts.css"

class Ref_by_exp extends Component {

  render() {

    return (
      <div  className="inner" style={{ backgroundColor: "black" }}>
        <div className="xp-container" style={{ color: "rgb(4, 220, 208)", textAlign: "center" }}>
          <div className="infographic">
            <div className="img"><img src="Pictures/experts/empower.png" /></div>
            <div className="text">
              <h1 >EMPOWER</h1>
              <p>
                UpSkill empowers both teachers and students to improve their grasp on the subject of Computer Science to equip oneself to be future ready. It is a professional development opportunity for teachers and a platform for students to develop computational thinking skills and improve them.
              </p>
            </div>
          </div>
          <div className="infographic">
            <div className="img"><img src="Pictures/experts/code.png" /></div>
            <div className="text">
              <h1>CODE{"<>"}</h1>
              <p>
                Coding is an essential investment for the future of any child in this digital age. A basic parameter of literacy in the digital age, UpSkill will enable all participating teachers to be able to pass on these skills to their students helping them stand out of the crowd.
              </p>
            </div>
          </div>
          <div className="infographic">
            <div className="img"><img src="Pictures/experts/showcase.png" /></div>
            <div className="text">
              <h1>SHOWCASE</h1>
              <p>
                UpSkill provides you a platform to gauge your expertise and your students’ preparedness in being future ready and to evaluate where they stand with respect to their contemporaries. We help the students challenge themselves and help them grow as we go.
              </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Ref_by_exp;
//style={{ marginTop: 20, color: "rgb(4, 220, 208)", fontSize: 60, marginBottom: 20 }}