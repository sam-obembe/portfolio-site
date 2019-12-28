import React from 'react';

const ContentCard=(props)=>{
  return(
    <div className="contentCard Elevated">
       {props.children}
    </div>
  )
}

export default ContentCard;