import React from "react";
import "./Experience.scss";
import Resume from "../../assets/Hunter-Dong-Resume.pdf";

export default function Experience() {
  const toBickfords = () => {
    window.open("https://www.bickfordsgroup.com/", "_blank");
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <section className="main-experiences" id="experience">
        <h3 className="mobile-sticky-header mobile-section-heading uppercase ">
          Experience
        </h3>

        {/* Bickford's group */}
        <div
          className="m-block"
          onClick={isMobile ? null : toBickfords}
          style={{
            cursor: isMobile ? "default" : "pointer",
          }}
        >
          <div>
            <h4 className="m-block-year">2022 - Present</h4>
          </div>

          <div>
            <a
              href="https://www.bickfordsgroup.com/"
              rel="noreferrer"
              target="_blank"
            >
              <h4 className="m-block-heading">
                Bickford's Group - Web developer{" "}
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
            </a>
            <p className="p-text2">
              Build, design, maintain and ship high-quality websites and
              solutions for a diverse array of projects. Played a crucial role
              in maintaining and enhancing group e-commerce websites, including
              Sippify, Wheel & Barrow, and Karma Living. Provide advice within
              the team through close collaboration, knowledge shares and
              spearheading the development. Actively contributed to design and
              content updates, ensuring both aesthetic and functional
              improvements. Conducted user testing and research to optimize
              website performance and enhance the overall user experience.
            </p>

            <ul className="flex flex-wrap">
              <li>
                <div className="skill-tag">React</div>
              </li>
              <li>
                <div className="skill-tag">SCSS</div>
              </li>
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
                <div className="skill-tag">Shopify</div>
              </li>
              <li>
                <div className="skill-tag">Liquid</div>
              </li>
              <li>
                <div className="skill-tag">RestAPI</div>
              </li>
            </ul>
          </div>
        </div>
        {/* </a> */}

        {/* coast guard */}
        <div className="m-block">
          <div>
            <h4 className="m-block-year">2012-2017</h4>
          </div>

          <div>
            <h4 className="m-block-heading">China Coast Guard - Corporal </h4>
            <p className="p-text2">
              I operated and managed the navigational steering of Coast Guard
              vessels ranging from 600 to 3000 tons. I was responsible for
              operating on-ship radios to facilitate communication with other
              seafaring vessels. Notably, I achieved a remarkable record by
              successfully executing more than 100 critical missions, including
              search and rescue operations, smuggler interception, and fisheries
              law enforcement tasks.{" "}
            </p>
          </div>
        </div>

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
              <h4 className="m-resume-heading">
                View Full Résumé{" "}
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
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
