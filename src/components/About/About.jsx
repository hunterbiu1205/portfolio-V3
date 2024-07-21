import React from "react";
import "./About.scss";

export default function About() {
  return (
    <div>
      {/* about */}
      <section id="about">
        <h3 className="mobile-sticky-header mobile-section-heading uppercase">
          About
        </h3>

        <p className="p-text">
          Back in 2018, I made the leap into studying Computer Science, diving
          headfirst into the fascinating world of coding and web development.
          Fast-forward to today, and I'm privileged to apply what I've learned,
          turning my passion into a fulfilling journey.
        </p>

        <p className="p-text">
          My main focus these days is building websites and solutions for our
          marketing and e-commerce teams at Bickford’s Group. I love creating
          software where design meets development - making things look good and
          work seamlessly. It's the sweet spot where beauty and functionality
          come together, and that's where I find my passion and joy.
        </p>

        <p className="p-text">
          When I'm not glued to the computer, you'll find me out and about,
          loving life in the great outdoors. Hiking, travelling, and doing all
          sorts of outdoor stuff help me see the world from a different angle.
          It's all about balance, you know?
        </p>
      </section>
    </div>
  );
}
