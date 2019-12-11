import React from 'react';
import {Switch,Route} from 'react-router-dom';
//import Banner from './Components/Header/Banner';
//import Projects from './Components/Projects/Projects';
import Landing from './Pages/Landing';
import Projects from './Pages/Projects';




export default(
  <Switch>
    
    <Route path = "/projects/:projectName" component ={Projects}/>
    <Route exact path = "/" component = {Landing} />
  </Switch>
)
