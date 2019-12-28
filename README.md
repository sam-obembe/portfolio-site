# Portfolio Site

## Pages
* Landing Page - `src/Pages/Landing.js`
* Project Page - `src/Pages/Projects.js`

***

## Reusable Components

### **Content Banner Component** - ContentBanner.js
* Location - `src/Components/ContentBanner`
#### Props
  * **variant (string)** : Two options are "Text" and "Icons"
  * **title (string)** : The title of the component
  * **projects (array)** : Will be used for the "Icons" variant 
  * **writeup (string)**: Will be used for the "Text" variant
  * **styleVariant(string)**: Will be used to determine the style 
    * "textContent"
  * **elevated**: Determines whether the banner should have shadow css to appear elevated

#### Methods
* `pickMainStyle()`<br>
Returns a className based on the property passed in the styleVariant prop *(props.styleVariant)*.
  
* `pickElevation()` <br>
  Returns a className (elevated) if the elavted prop *(props.elevated)* is `true`. This will give the banner a raised appearance. 

* `projectRender()`<br>
Renders a list of project tile components `<ProjectTile>`, using the data from array passed through the projects prop *(props.projects)*. <br>
If an item in the array does not contain a `link` property, a project tile is rendered without a NavLink. 

* `showIconsDiv()`<br>
This hides the `<div>` that wraps the rendered list of projects. If the projects prop *(props.projects)* is not present, it returns a style definition of `{display:"none"}` which is applied as an inline style to the element. 

* `backgroundImage()`<br>
This sets a background image style for a div if the background image prop *(props.backgroundImage)* is present. 

* `propsChildren()`
Written content like descriptions are to be passed in as *children* to the ContentBanner component. These can then be accessed through `props.children`. <br>
If there is content in `props.children`, the `<ContentCard>` component is rendered ant the props.children is passed through to it and it displays the text in the content banner. 


### **Project Tile Component** - ProjectTile.js
* Location - `src/Components/ProjectTile`
* Props
  * displayText (String) : The text displayed on the tile. 
  * thumbnail (String) : If present, will be applied as a background image for the tile. 

### **Content Card Component** - ContentCard.js
* Location - `src/Components/ContentCard`
* Accepts only props.children. 

***


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

