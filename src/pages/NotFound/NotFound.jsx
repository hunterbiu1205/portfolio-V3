import React from "react";
import { Link } from "react-router-dom";
import "../Archive/Archive.scss";
import { ArrowRightIcon } from "../../components/Icons/Icons";

export default function NotFound() {
  return (
    <main className="app max-w-screen-xl mx-auto app-archive" id="main">
      <div className="archive-header">
        <Link to="/" className="archive-back">
          <ArrowRightIcon className="left-arrow" />
          Hunter Dong
        </Link>

        <h1>Page not found</h1>
      </div>

      <p className="p-text">
        Sorry, the page you are looking for doesn't exist. Head back to the{" "}
        <Link to="/">home page</Link>.
      </p>
    </main>
  );
}
