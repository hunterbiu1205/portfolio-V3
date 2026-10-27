import React from "react";

export default function SkillTags({ tags }) {
  return (
    <ul className="flex flex-wrap" aria-label="Technologies used">
      {tags.map((tag) => (
        <li key={tag}>
          <span className="skill-tag">{tag}</span>
        </li>
      ))}
    </ul>
  );
}
