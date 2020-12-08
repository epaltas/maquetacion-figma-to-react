import React from "react";
import Benefits from "./Benefits/Benefits";
import Footer from './Footer/Footer';
import MenuBurguer from "./MenuBurguer/MenuBurguer";
import Services from "./Services/Services"
import Technology from "./Technology/Technology";

const App = () => {
  return (
    <div className="container">
      <div className="header-logo"></div>
      <div>
        <MenuBurguer></MenuBurguer>
      </div>
      <div className="h1-our-services">
        <h1>Our</h1>
        <h1 className="span-services">services</h1>
      </div>
      <div className="p-paragraph">
        <p><strong>Solutions aligned</strong> to your business strategy. We offer a wide range of services for companies <strong>looking for success</strong> in their projects.</p>
      </div>
      <div className="ilustration-header-figure"></div>
      <Services></Services>
      <Technology></Technology>
      <Benefits></Benefits>
      <footer className="footer-distribuited">
        <Footer></Footer>
      </footer>
    </div >
  );
};

export default App;
