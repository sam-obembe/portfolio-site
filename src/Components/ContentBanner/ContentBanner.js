import React from 'react';
import ProjectTile from '../ProjectTile/ProjectTile'
import {NavLink} from 'react-router-dom'
import ContentCard from '../ContentCard/ContentCard'

const ContentBanner=(props)=>{
  let pickMainStyle=()=>{
    switch(props.styleVariant){
      case "textContent":
        return "contentBanner-text";
        //break;
      default:
        return "contentBanner"
    }
  }

  let pickElevation=()=>{
    if(props.elevated===true){
      return "elevated"
    }
  }

  let projectRender=()=>{
    if(props.projects){
      return props.projects.map((content,i)=>{
        console.log(content)
        if(content.link!==undefined){
          return (
            <NavLink to={content.link}>  
              <ProjectTile displayText={content.name} thumbnail={content.pictures?content.pictures[0]:""} key={i}/>
            </NavLink>
            )
        }
        else{
          return <ProjectTile displayText={content.name} key={i}/>
        }

      })
    }
  }

  let showIconsDiv=()=>{
    let hiddenDiv = {display:"none"}
    if(!props.projects){
      return hiddenDiv
    }
  }

  let backgroundImage=()=>{
   
    if(props.backgroundImage && props.backgroundImage.length>0){
      console.log(props.backgroundImage)
      return props.backgroundImage
    }
    else{
      return "";
    }
  }

  let propsChildren=()=>{
    if(props.children){
      return(
        <ContentCard>
          <h1>{props.title}</h1>
          {props.children}
        </ContentCard>
      )
    }
    else{
      return null;
    }
  }

  return(
    <div className={pickMainStyle()+" "+pickElevation()} style={{backgroundImage:`url(${backgroundImage()})`}}>

      <div style={showIconsDiv()}>
        <h2 className="contentTitle">{props.title}</h2>
        <div className="iconContent">
          
          {projectRender()}
        </div>
      </div>
      
      {propsChildren()}

    </div>
  )

}

export default ContentBanner;