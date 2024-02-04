import React from "react";
import "./Main.scss";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Footer from '../Footer/Footer';

export default function Main() {
  return (
    <div className="app-main">
      
      <About />
      <Experience />
      <Projects/>
      <Footer/>
    </div>
  );
}
