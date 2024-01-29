import React from 'react'
import images from '../../constant/images'
import "./Main.scss";

import bickfords from '../../assets/projects-bickfords.png'

export default function Main() {
    return (
      <div className="app-main">
        {/* about */}
        <section id="about">
          <h3 className="uppercase mobile-section-heading">About</h3>

          <p className="p-text">
            I'm currently a dedicated web developer who is passionate about
            continuous learning and growth, with a particular focus on front-end
            development and UI/UX. In today's fast-paced tech landscape, I
            thrive on staying up-to-date with emerging technologies while
            nurturing my enduring love for development.{" "}
          </p>

          <p className="p-text">
            My main focus these days is building websites and projects for our
            marketing team at Bickford's Group. When I’m not at the computer, I
            find immense joy in exploring the great outdoors. Hiking,
            travelling, and engaging in various outdoor activities allow me to
            connect with the world, offering a refreshing perspective that
            complements my enthusiasm for development.{" "}
          </p>
        </section>

        {/* experience */}
        <section className="main-experiences" id="experience">
          <h3 className="uppercase mobile-section-heading">Experience</h3>

          {/* Bickford's group */}
          <div className="m-block">
            <div>
              <h4 className="m-block-year">2022 - Present</h4>
            </div>

            <div>
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
              <p className="p-text2">
                As a web developer, I specialized in creating responsive website
                solutions, transforming stakeholder briefs and artwork into
                aesthetically pleasing and highly functional websites.
                Additionally, I played a crucial role in maintaining and
                enhancing various group e-commerce websites, including Sippify,
                Wheel & Barrow, and Karma Living. Furthermore, I actively
                contributed to design and content updates, ensuring both
                aesthetic and functional improvements. I conducted user testing
                and research to optimize website performance and enhance the
                overall user experience.
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
                successfully executing more than 100 critical missions,
                including search and rescue operations, smuggler interception,
                and fisheries law enforcement tasks.{" "}
              </p>
            </div>
          </div>

          {/* resume */}
          <div className="m-resume">
            <div className="m-block-year"></div>
            <div>
              <a href="https://www.bickfordsgroup.com/" target="blank_">
                <h4 className="m-block-heading">
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

        {/* projects */}
        <section id="projects">

          <h3 className="uppercase mobile-section-heading">Projects</h3>

           <div className="m-block">
            <div>
              <img className="m-project-img" src={images.bickfords}></img>
            </div>

            <div>
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
              <p className="p-text2">
                As a web developer, I specialized in creating responsive website
                solutions, transforming stakeholder briefs and artwork into
                aesthetically pleasing and highly functional websites.
               
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
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
}
