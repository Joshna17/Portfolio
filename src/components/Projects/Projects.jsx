import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='Projects'  className= ' flex flex-col p-10 md:p-24 gap-10 md:gap-16  mx-0 md:mx-30 justify-center align-middle'> 
      <h1 className='text-2xl md:text-4xl  text-black font-bold'>Projects</h1>
      <div className='flex flex-wrap gap-6 md:gap-8 justify-center'>
        <ProjectCard title="Real Estate App" main="This is a app designed in Figma" demoLink="https://www.figma.com/proto/nrSzUKJs3J5vtZu6inZ98v/Khooj?page-id=2%3A2&node-id=2-4&node-type=frame&viewport=574%2C438%2C0.16&t=KbssWiAeu0DdHC5c-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A4&show-proto-sidebar=1" />
        <ProjectCard title="College Website" main="This is a website designed in Figma" demoLink="https://www.figma.com/proto/E4JIjnBTaGcSzsl9FnUmHx/Medhavi?
page-id=0%3A1&node-id=38-4&nodetype=frame&viewport=1361%2C2082%2C0.32&t=dwOVAuNtcEcV34J
R-1&scaling=min-zoom&content-scaling=fixed&starting-point-nodeid=38%3A" />
        <ProjectCard title="CRM Website" main="This is a website designed in Figma" demoLink ="https://www.figma.com/proto/oMO5gUT8h4tY4LdExQpwgP/Minorproject?page-id=0%3A1&node-id=1431-4103&nodetype=canvas&viewport=229%2C508%2C0.02&t=2LEz1dCumsdrQ70
U-1&scaling=min-zoom&content-scaling=fixed" />
      </div>
    </div>
  )
}

export default Projects
