import React from "react";
import "./Projects.scss";
import { Link } from "react-router-dom";
import { featuredProjects } from "../../constant/projects";
import { ArrowUpRightIcon, ArrowRightIcon } from "../Icons/Icons";
import SkillTags from "../SkillTags/SkillTags";

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mobile-sticky-header mobile-section-heading uppercase"
      >
        Projects
      </h2>

      {featuredProjects.map((project) => (
        <article className="m-block m-block-clickable" key={project.title}>
          <div>
            <img
              className="m-project-img"
              src={project.image}
              alt={project.imageAlt}
              width={project.imageSize[0]}
              height={project.imageSize[1]}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <h3 className="m-block-heading">
              <a
                className="m-block-link"
                href={project.url}
                rel="noreferrer"
                target="_blank"
              >
                {project.title}
                <ArrowUpRightIcon />
              </a>
            </h3>
            <p className="p-text2">{project.description}</p>
            <SkillTags tags={project.tags} />
          </div>
        </article>
      ))}

      <div className="m-project-archive">
        <div className="m-block-year"></div>
        <div>
          <Link to="/archive">
            <span className="m-project-archive-heading">
              View Full Project Archive
              <ArrowRightIcon />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
