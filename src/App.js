import React, { useState } from 'react';
import Sidebar from "./pages/sidebar"
import Home from "./pages/home"
import About from "./pages/about"
import Upskill from "./pages/upskill"
import Ref_by_exp from "./pages/ref_by_experts"
import Prev_init from "./pages/prev_init"
import Partners from "./pages/partners"
import News from "./pages/news"
import Contact from "./pages/contact"
import Teaser from './pages/teaser';

function App() {

  const [activeTab, setActive] = useState("");

  return (

    <div id="wrapper">
      {/* <!-- Main --> */}
      {/* <Router>


        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path="/Shaastra_upskill" component={Upskill} />
          <Route path="/Ref_by_exp" component={Ref_by_exp} />
          <Route path="/Prev_init" component={Prev_init} />
          <Route path="/In_the_news" component={News} />
          <Route path="/Prev_partners" component={Partners} />
        </Switch>


      </Router> */}
      <div id="main" style={{ paddingBottom: 0, marginBottom: 0 }} >
        <Home update={setActive} />
        <About update={setActive} />
        <Upskill update={setActive} />
        <Teaser update={setActive} />
        <Ref_by_exp  />
        <Prev_init update={setActive} />
        <News update={setActive} />
        <Partners update={setActive} />
        <Contact />
        <Sidebar active={activeTab} update={setActive} />
      </div>

    </div>



  );
}

export default App;
