import React from 'react'
import "./Projects.scss"
import images from "../../constant/images";

import Resume from "../../assets/Hunter-Dong-Resume.pdf"


export default function Projects() {
  return (
    <div>
      <section id="projects">
        <h3 className="uppercase mobile-section-heading">Projects</h3>

        {/* Bickford's Australia */}
        <a href="https://www.bickfords.net/" rel="noreferrer" target="_blank">
          <div className="m-block">
            <div>
              <img
                className="m-project-img"
                src={images.bickfords}
                alt="none"
              ></img>
            </div>

            <div>
              <h4 className="m-block-heading">
                Bickford's Australia
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="up-right-arrow"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h4>
              <p className="p-text2">
                Bickford’s website underwent a successful redesign and
                development, aligning seamlessly with the requirements and brief
                provided by the marketing team. The results garnered positive
                reviews internally and externally.
              </p>

              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">PHP</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
              </ul>
            </div>
          </div>
        </a>

        {/* Wheel&Barrow Cart Page Refresh */}
        <a
          href="https://wheelandbarrow.com.au/cart"
          rel="noreferrer"
          target="_blank"
        >
          <div className="m-block">
            <div>
              <img
                className="m-project-img"
                src={images.WheelBarrow}
                alt="none"
              ></img>
            </div>

            <div>
              <h4 className="m-block-heading">
                Wheel&Barrow Cart Page Refresh
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="up-right-arrow"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h4>
              <p className="p-text2">
                Revamping the "Wheel & Barrow Cart Page," Redesigned, developed,
                and published a more organized and aesthetically pleasing
                layout—a success in enhancing the checkout user experience.
              </p>

              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Liquid</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">jQuery</div>
                </li>
              </ul>
            </div>
          </div>
        </a>

        {/* Yerbi */}
        <a href="https://yerbi.com.au/" rel="noreferrer" target="_blank">
          <div className="m-block">
            <div>
              <img
                className="m-project-img"
                src={images.yerbi}
                alt="none"
              ></img>
            </div>

            <div>
              <h4 className="m-block-heading">
                yerbi.com.au
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="up-right-arrow"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h4>
              <p className="p-text2">
                A visually stunning single-page website for the new product
                'Yerbi,' based on the compelling mock-up designed by the UI
                designer. The website showcases the product's excellence with an
                appealing and user-friendly interface.
              </p>

              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Wordpress</div>
                </li>
                <li>
                  <div className="skill-tag">PHP</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
              </ul>
            </div>
          </div>
        </a>

        {/* Modern Restaurant */}
        <a
          href="https://hunterbiu1205.github.io/Modern-UI-UX-Restaurant/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="m-block">
            <div>
              <img
                className="m-project-img"
                src={images.restaurant}
                alt="none"
              ></img>
            </div>

            <div>
              <h4 className="m-block-heading">
                Modern UI/UX Restaurant
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="up-right-arrow"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h4>
              <p className="p-text2">
                A Fully Responsive Restaurant Website with Modern UI and UX in
                ReactJS
              </p>

              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">React</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">UI/UX</div>
                </li>
                <li>
                  <div className="skill-tag">Git</div>
                </li>
              </ul>
            </div>
          </div>
        </a>

        {/* resume */}
        <div className="m-resume">
          <div className="m-block-year"></div>
          <div>
            <a
              href={Resume}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <h4 className="m-block-heading">
                View Full Project Archive
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="right-arrow"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </h4>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
