import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Archive.scss";
import { archiveProjects } from "../../constant/projects";
import { ArrowRightIcon, ArrowUpRightIcon, GitHubIcon } from "../../components/Icons/Icons";
import SkillTags from "../../components/SkillTags/SkillTags";

const ProjectLink = ({ link, children }) => (
  <a href={link.url} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default function Archive() {
  useEffect(() => {
    document.title = "All Projects | Hunter Dong";
    return () => {
      document.title = "Hunter Dong | Web Developer & UI/UX";
    };
  }, []);

  return (
    <main className="app max-w-screen-xl mx-auto app-archive" id="main">
      <div className="archive-header">
        <Link to="/" className="archive-back">
          <ArrowRightIcon className="left-arrow" />
          Hunter Dong
        </Link>

        <h1>All Projects</h1>
      </div>

      <table id="content">
        <thead className="sticky-header">
          <tr>
            <th scope="col">Year</th>
            <th scope="col">Project</th>
            <th scope="col">Made at</th>
            <th scope="col" className="project-built-width">
              Built with
            </th>
            <th scope="col">Link</th>
          </tr>
        </thead>

        <tbody>
          {archiveProjects.map((project) => (
            <tr key={project.title}>
              <td>{project.year}</td>
              <td>
                <span className="mobile-hidden content-project-name">
                  {project.title}
                </span>

                {/* On mobile the Link column is hidden, so the name becomes the link. */}
                <span className="desk-hidden">
                  <ProjectLink link={project.link}>
                    <span className="content-project-name">
                      {project.title}
                      <ArrowUpRightIcon />
                    </span>
                  </ProjectLink>
                </span>
              </td>
              <td>{project.madeAt}</td>
              <td className="project-built-with">
                <SkillTags tags={project.tags} />
              </td>
              <td className="project-link">
                <ProjectLink link={project.link}>
                  <span>
                    {project.link.label}
                    {project.link.github ? (
                      <GitHubIcon className="archive-project-icon" />
                    ) : (
                      <ArrowUpRightIcon />
                    )}
                  </span>
                </ProjectLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
