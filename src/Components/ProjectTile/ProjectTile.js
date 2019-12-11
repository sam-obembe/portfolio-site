import React from 'react';
import './ProjectTile.css'

const ProjectTile=(props)=>{
  const styling={backgroundImage:props.thumbnail}
  return(
    <div className="tileMain" style={styling}>
      <h3 className="tileTitle">{props.displayText}</h3>
    </div>
  )
}

export default ProjectTile;