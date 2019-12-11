import React from 'react';
import ProjectTile from '../ProjectTile/ProjectTile'


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
        return <ProjectTile displayText={content.name} thumbnail={content.pictures[0]} key={i}/>
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
        <div className="contentCard elevated">
          <h1>{props.title}</h1>
          {props.children}
        </div>
      )
    }
    else{
      return null;
    }
    //return props.children ? props.children:null;
  }

  return(
    <div className={pickMainStyle()+" "+pickElevation()} style={{backgroundImage:`url(${backgroundImage()})`}}>

      <div style={showIconsDiv()}>
        <h2>{props.title}</h2>
        <div className="iconContent">
          
          {projectRender()}
        </div>
      </div>
      
      {propsChildren()}

    </div>
  )

}

export default ContentBanner;