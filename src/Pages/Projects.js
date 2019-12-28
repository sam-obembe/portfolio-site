import React from 'react';
import projects from '../projectList';
import ContentBanner from '../Components/ContentBanner/ContentBanner';
import {NavLink} from 'react-router-dom'
const Projects=(props)=>{
  let projectName = props.match.params.projectName? props.match.params.projectName:""
  let details = projects.find((project)=>project.name===projectName);
  return(
    <div className="landing">
      
      <ContentBanner variant="Text" title={details.name} writeup={details.about} styleVariant="textContent" elevated={false}>
      <NavLink to="/"><h3>Back</h3></NavLink>
        <p>{details.about}</p>

      </ContentBanner>
      <ContentBanner variant="Icons" title="Tech" projects={details.tech} styleVariant="" elevated={true} content=""/>
    </div>
  )
}

export default Projects;

/*
name,
about,
tech [],
pictures []
link
*/