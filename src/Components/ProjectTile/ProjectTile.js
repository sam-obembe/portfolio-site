import React from 'react';


const ProjectTile=(props)=>{
  const styling={backgroundImage:props.thumbnail}
  return(
    <div className="tileMain" style={styling}>
      <h3 className="tileTitle">{props.displayText}</h3>
    </div>
  )
}

export default ProjectTile;