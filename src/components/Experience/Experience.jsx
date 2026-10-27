import React from "react";
import "./Experience.scss";
import Resume from "../../assets/Hunter-Dong-Resume.pdf";
import { ArrowUpRightIcon } from "../Icons/Icons";
import SkillTags from "../SkillTags/SkillTags";

export default function Experience() {
  return (
    <section
      className="main-experiences"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <h2
        id="experience-heading"
        className="mobile-sticky-header mobile-section-heading uppercase"
      >
        Experience
      </h2>

      {/* Bickford's Group */}
      <article className="m-block m-block-clickable">
        <div>
          <p className="m-block-year">2022 - Present</p>
        </div>

        <div>
          <h3 className="m-block-heading">
            <a
              className="m-block-link"
              href="https://www.bickfordsgroup.com/"
              rel="noreferrer"
              target="_blank"
            >
              Bickford's Group - Web Developer <ArrowUpRightIcon />
            </a>
          </h3>
          <p className="p-text2">
            Build, design, maintain and ship high-quality websites and
            solutions for a diverse array of projects. Played a crucial role in
            maintaining and enhancing group e-commerce websites, including
            Sippify, Wheel & Barrow, and Karma Living. Provide advice within the
            team through close collaboration, knowledge shares and spearheading
            the development. Actively contributed to design and content
            updates, ensuring both aesthetic and functional improvements.
            Conducted user testing and research to optimize website performance
            and enhance the overall user experience.
          </p>

          <SkillTags
            tags={[
              "React",
              "SCSS",
              "WordPress",
              "PHP",
              "JavaScript",
              "Shopify",
              "Liquid",
              "REST API",
            ]}
          />
        </div>
      </article>

      {/* China Coast Guard */}
      <article className="m-block">
        <div>
          <p className="m-block-year">2012 - 2017</p>
        </div>

        <div>
          <h3 className="m-block-heading">China Coast Guard - Corporal</h3>
          <p className="p-text2">
            I operated and managed the navigational steering of Coast Guard
            vessels ranging from 600 to 3000 tons. I was responsible for
            operating on-ship radios to facilitate communication with other
            seafaring vessels. Notably, I achieved a remarkable record by
            successfully executing more than 100 critical missions, including
            search and rescue operations, smuggler interception, and fisheries
            law enforcement tasks.
          </p>
        </div>
      </article>

      {/* Résumé */}
      <div className="m-resume">
        <div className="m-block-year"></div>
        <div>
          <a href={Resume} target="_blank" rel="noreferrer">
            <span className="m-resume-heading">
              View Full Résumé <ArrowUpRightIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
