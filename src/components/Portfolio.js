import { useState } from 'react';
import Toolbar from './toolbar/Toolbar';
import ProjectList from './projectList/ProjectList';
import projects from './Projects.json'

function Portfolio(){

  const [selected,setSelected] = useState("All");
  
  const projectList = selected === "All" ? projects : projects.filter(project=>project.category===selected)

  return(
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => { setSelected(filter) }}
      />
      <ProjectList
        elements={projectList}
      />
    </>
  );
}

export default Portfolio;
