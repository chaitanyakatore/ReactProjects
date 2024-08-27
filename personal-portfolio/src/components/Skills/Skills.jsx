import React from "react";

const skillsCategories = [
  {
    title: "Technical Skills",
    skills: [
      { name: "Core Java", details: ["DSA", "OOP", "Problem-Solving"] },
      { name: "Front-End", details: ["HTML/CSS", "JavaScript", "Reactjs"] },
      { name: "Back-End", details: ["Django", "NodeJs", "ExpressJs"] },
      { name: "Database", details: ["MySQL", "MongoDB"] },
      { name: "Data Science", details: ["Python", "Machine Learning"] },
    ],
  },
  {
    title: "Development Tools & Platforms",
    skills: [
      {
        name: "Tools",
        details: [
          "Docker",
          "Git/Github",
          "Kubernetes",
          "Cloud Computing",
          "Google Cloud Platform",
        ],
      },
    ],
  },
];

const SkillCategory = ({ title, skills }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 sd:grid-cols-1 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-100 rounded-lg p-4 shadow">
          <h4 className="font-semibold">{skill.name}</h4>
          {skill.details.length > 0 && (
            <ul className="list-disc list-inside">
              {skill.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section className="py-12 px-4">
    <hr className="border-black font-bold" />
    <div className="flex justify-between m-4 font-serif">
      <div className="ml-4 font-bold text-xl">Work</div>{" "}
      <div className="mr-4 ">Internship / ideation / innovation</div>{" "}
    </div>
    <hr className="border-black font-bold mb-8" />
    <div className="max-w-4xl mx-auto">
      {skillsCategories.map((category, index) => (
        <SkillCategory key={index} {...category} />
      ))}
    </div>
  </section>
);

export default Skills;
