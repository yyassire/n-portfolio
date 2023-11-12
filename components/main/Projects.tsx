import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {projects.map((project,i)=>{
          return<ProjectCard
          key={i}
          index={i}
          src={project.image}
          title={project.name}
          description={project.description}
          tags={project.tags}
          githubLink={project.source_code_link}
          live={project.live_link}
        />
        })}
     

      </div>
    </div>
  );
};

export default Projects;
