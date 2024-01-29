import React from 'react'
import "./About.scss";

export default function About() {
  return (
    <div>
      {/* about */}
      <section id="about">
        <h3 className="uppercase mobile-section-heading">About</h3>

        <p className="p-text">
          I'm currently a dedicated web developer who is passionate about
          continuous learning and growth, with a particular focus on front-end
          development and UI/UX. In today's fast-paced tech landscape, I thrive
          on staying up-to-date with emerging technologies while nurturing my
          enduring love for development.{" "}
        </p>

        <p className="p-text">
          My main focus these days is building websites and projects for our
          marketing team at Bickford's Group. When I’m not at the computer, I
          find immense joy in exploring the great outdoors. Hiking, travelling,
          and engaging in various outdoor activities allow me to connect with
          the world, offering a refreshing perspective that complements my
          enthusiasm for development.{" "}
        </p>
      </section>
    </div>
  );
}
