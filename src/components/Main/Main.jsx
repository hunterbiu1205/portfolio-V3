import React from "react";
import "./Main.scss";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <main className="app-main" id="main">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
