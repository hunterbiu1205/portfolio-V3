import React from "react";
import { Link } from "react-router-dom";
import "./Archive.scss";

export default function Archive() {


  return (
    <div className="app max-w-screen-xl mx-auto app-archive">
      <div className="archive-header">
        <Link to="/">
          <h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="left-arrow"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Hunter Dong
          </h4>

          <h1>All Projects</h1>
        </Link>
      </div>

      <table id="content">
        <thead className="sticky-header ">
          <tr>
            <th>Year</th>
            <th>Project</th>
            <th>Made at</th>
            <th className="project-built-width">Built with</th>
            <th>Link</th>
          </tr>
        </thead>

        {/* project1 */}
        <tbody>
          <tr>
            <td>
              <div>2024</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Portfolio Website V3
              </div>

              <div class="desk-hidden">
                <a
                  href="https://www.hunterdong.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Portfolio Website V3
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Personal Project</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">React</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Figma</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.hunterdong.com"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        hunterdong.com
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project2 */}
        <tbody>
          <tr>
            <td>
              <div>2024</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Bickford's Australia
              </div>

              <div class="desk-hidden">
                <a
                  href="https://www.bickfords.net/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">Droow</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.bickfords.net/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        bickfords.net
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project3 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Weather App
              </div>

              <div class="desk-hidden">
                <a
                  href="https://github.com/hunterbiu1205/Weather-app"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Weather App
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Personal Project</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
                <li>
                  <div className="skill-tag">Rest API</div>
                </li>
                <li>
                  <div className="skill-tag">OpenWeatherMap</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://github.com/hunterbiu1205/Weather-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        GitHub
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="archive-project-icon"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project4 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Pacific Drifter
              </div>

              <div class="desk-hidden">
                <a
                  href="https://pacificdrifter.com.au/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Pacific Drifter
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div> Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">WooCommerce</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://pacificdrifter.com.au/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        pacificdrifter.com.au
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project5 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Portfolio Webiste V2
              </div>

              <div class="desk-hidden">
                <a
                  href="https://github.com/hunterbiu1205/portfolio-V2"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Portfolio Webiste V2
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div> Personal Project</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">React</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">TypewriterJS</div>
                </li>
                <li>
                  <div className="skill-tag">EmailJS</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://github.com/hunterbiu1205/portfolio-V2"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        GitHub
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="archive-project-icon"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project6 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Beenleigh Rum
              </div>

              <div class="desk-hidden">
                <a
                  href="https://www.beenleighrum.com.au/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Beenleigh Rum
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">WooCommerce</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.beenleighrum.com.au/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        beenleighrum.com.au
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project7 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                W&B Cart Page Refresh
              </div>

              <div class="desk-hidden">
                <a
                  href="https://wheelandbarrow.com.au/cart"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      W&B Cart Page Refresh
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Wheel&Barrow</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Shopify Liquid</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">Figma</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://wheelandbarrow.com.au/cart/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        wheelandbarrow.com.au/cart
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project8 */}
        <tbody>
          <tr>
            <td>
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Yerbi</div>

              <div class="desk-hidden">
                <a
                  href="https://yerbi.com.au/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Yerbi
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div> Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://yerbi.com.au/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project9*/}
        <tbody>
          <tr>
            <td>
              <div>2022</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Bickford’s Group
              </div>

              <div class="desk-hidden">
                <a
                  href="https://www.bickfordsgroup.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Bickford’s Group
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Bickford’s Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">PHP</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.bickfordsgroup.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        bickfordsgroup.com
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project1 */}
        <tbody>
          <tr>
            <td>
              <div>2022</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Vok Beverage
              </div>

              <div class="desk-hidden">
                <a
                  href="https://vok.com.au/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Vok Beverage
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">PHP</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://vok.com.au/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        vok.com.au
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project1 */}
        <tbody>
          <tr>
            <td>
              <div>2022</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Five Square Mile
              </div>

              <div class="desk-hidden">
                <a
                  href="https://5squaremiledistillery.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Five Square Mile
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Bickford's Group</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">WordPress</div>
                </li>
                <li>
                  <div className="skill-tag">HTML & CSS</div>
                </li>
                <li>
                  <div className="skill-tag">JavaScript</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://5squaremiledistillery.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        5squaremiledistillery.com
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
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project1 */}
        <tbody>
          <tr>
            <td>
              <div>2022</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Portfolio V1
              </div>

              <div class="desk-hidden">
                <a
                  href="https://github.com/hunterbiu1205/portfolio"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      Portfolio V1
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div>Personal Project</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">React</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Sanity</div>
                </li>
                <li>
                  <div className="skill-tag">Rest API</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://github.com/hunterbiu1205/portfolio"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        GitHub
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="archive-project-icon"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>

        {/* project1 */}
        <tbody>
          <tr>
            <td>
              <div>2022</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">
                Modern UI/UX Restaurant
              </div>

              <div class="desk-hidden">
                <a
                  href="https://hunterbiu1205.github.io/Modern-UI-UX-Restaurant/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                      ModernUI/UX Restaurant
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
                    </span>
                  </span>
                </a>
              </div>
            </td>
            <td>
              <div> Personal Project</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">React</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://hunterbiu1205.github.io/Modern-UI-UX-Restaurant/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        GitHub
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          class="archive-project-icon"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
