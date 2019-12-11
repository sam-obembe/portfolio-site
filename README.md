# Portfolio Site

## Pages
* Langing Page - `src/Pages/Landing.js`
* Project Page - `src/Pages/Projects.js`

## Reusable Components
### **Title Banner Component** - TitleBanner.js
* Props:


### **Content Banner Component** - ContentBanner.js
* Location - `src/Components/ContentBanner`
* Props
  * variant (string) : Two options are "Text" and "Icons"
  * title (string) : The title of the component
  * content (array) : Will be used for the "Icons" variant 
  * writeup (string) : Will be used for the "Text" variant
  * styleVariant(string): Will be used to determine the style 
    * "textContent"
  * elevated: Determines whether the banner should have shadow css to appear elevated

### **Project Tile Component** - ProjectTile.js
* Location - `src/Components/ProjectTile`
* Props
  * displayText
  * thumbnail

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

