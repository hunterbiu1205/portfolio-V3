import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="app-footer">
      <p className="p-text2">
        Loosely designed in{" "}
        <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
          Figma
        </a>{" "}
        and coded in{" "}
        <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
          Visual Studio Code
        </a>
        . Built with{" "}
        <a href="https://react.dev/" rel="noreferrer" target="_blank">
          React
        </a>{" "}
        and{" "}
        <a href="https://sass-lang.com/" rel="noreferrer" target="_blank">
          SCSS
        </a>
        , deployed with{" "}
        <a href="https://pages.github.com/" rel="noreferrer" target="_blank">
          GitHub Pages
        </a>
        .
      </p>
    </footer>
  );
}
