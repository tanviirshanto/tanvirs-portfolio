"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Manage Inventory",
    description: "Using Next JS, Recharts, Next Auth, MongoDB, Tailwind",
    image: "/images/projects/manageinventory.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tanviirshanto/manageinventory.git",
    previewUrl: "https://manageinventory-three.vercel.app/",
  },
  {
    id: 2,
    title: "Food Ordering Application",
    description: "Using Next JS, Redux, MongoDB, Tailwind",
    image: "/images/projects/foodclub.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/tanviirshanto/foodcourt.git",
    previewUrl: "https://foodcourt-two.vercel.app/",
  },

  {
    id: 3,
    title: "IP Address Tracker",
    description: "Using Next JS, Leaflet, Ip2Location",
    image: "/images/projects/iptracker.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tanviirshanto/ip-tracker.git",
    previewUrl: "https://ip-tracker-rq95.vercel.app/",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Using Next JS, MongoDB, Tailwind",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/tanviirshanto/portfolio.git",
    previewUrl: "https://portfolio-orcin-ten-66.vercel.app/",
  },


];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="mt-24">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
