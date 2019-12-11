import React from 'react'
import ContentBanner from '../Components/ContentBanner/ContentBanner'
import projects from '../projectList'
import backgroundImg from '../images/MyScreen-copy.jpg';

const Landing =()=>{
  return(
    <div className="landing">
        <ContentBanner variant="Text" title="About me" writeup="" styleVariant="textContent" elevated={false} backgroundImage={backgroundImg}>
          
          <p> Wagwan</p>
    
        </ContentBanner>

        
        <ContentBanner variant="Icons" title="Projects" projects={projects} styleVariant="" elevated={true} content=""/>
    </div>
  )
}

export default Landing