import React,{ useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Archive.scss";

export default function Archive() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.sticky-header');
      const isHeaderAtTop = header.getBoundingClientRect().top === 0;
      setSticky(isHeaderAtTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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

      <table id="content" className={`App ${isSticky ? 'scrolled' : ''}`}>
        <thead className="sticky-header">
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
              <div>2023</div>
            </td>
            <td>
              <div className="mobile-hidden content-project-name">Emerson Collective</div>

              <div class="desk-hidden">
                <a
                  href="https://www.emersoncollective.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label=""
                >
                  <span>
                    <span className=" content-project-name">
                    Emerson Collective
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
              <div>Upstatement</div>
            </td>
            <td className="project-built-with">
              <ul className="flex flex-wrap">
                <li>
                  <div className="skill-tag">Next.js</div>
                </li>
                <li>
                  <div className="skill-tag">TypeScript</div>
                </li>
                <li>
                  <div className="skill-tag">SCSS</div>
                </li>
                <li>
                  <div className="skill-tag">Contentful</div>
                </li>
              </ul>
            </td>
            <td>
              <ul>
                <li>
                  <a
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label=""
                  >
                    <span>
                      <span>
                        emersoncollective.com
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
      </table>
    </div>
  );
}
