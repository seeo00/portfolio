import React from 'react';
import ProjectItem from './ProjectItem';
import type { ProjectGroup } from '@/data/projects';

interface ProjectListProps {
  title: string;
  projects: ProjectGroup['projects'];
}

const ProjectList = ({ title, projects }: ProjectListProps) => {
  return (
    <>
      <div className="w-full h-40 border-t border-black">
        <div className="container h-full py-5 flex items-end text-2xl xl:text-[1.6rem] 2xl:text-[1.6vw] font-medium">
          <h2>{title}</h2>
        </div>
      </div>
      <div>
        {projects.map((project, index) => (
          <ProjectItem key={index} sectionTitle={title} {...project} />
        ))}
      </div>
    </>
  );
};

export default ProjectList;
