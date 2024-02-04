import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="app-footer">
      <p className="p-text2">
        Loosely designed in{" "}
        <span>
          <a href="https://www.figma.com/" rel="noreferrer" target="_blank">
            Figma
          </a>{" "}
        </span>
        and coded in{" "}
        <span>
          <a href="https://code.visualstudio.com/" rel="noreferrer" target="_blank">
            Visual Studio Code
          </a>
        </span>
        . Built with{" "}
        <span>
          <a href="https://react.dev/" rel="noreferrer" target="_blank">
            React
          </a>
        </span>{" "}
        and{" "}
        <span>
          <a href="https://sass-lang.com/" rel="noreferrer" target="_blank">
            SCSS
          </a>
        </span>
        , deployed with{" "}
        <span>
          <a href="https://pages.github.com/" rel="noreferrer" target="_blank">
            GitHub Pages
          </a>
        </span>
        .
      </p>
    </div>
  );
}
