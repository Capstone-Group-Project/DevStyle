// import { xml2json } from 'xml-js';
// const { xml2json } = require('xml-js');

import '/style.css'


fetch(`https://justcors.com/tl_0df7880/http://www.colourlovers.com/api/palettes/top`)
  .then(response => response.text())
  .then(data => {
    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "application/xml");
    console.log(xml);
  })
  .catch(console.error);
  // let xml2 = xml;
  // let parser2 = new DOMParser();

  let xmlDoc = parser.parseFromString(xml,"text/xml");
  const root = xmlDoc.documentElement;
  console.log(root)
  // Print the root element to the DOM
  document.body.innerHTML = root.outerHTML;



//-----
//   document.getElementById("demo").innerHTML =
// xmlDoc.getElementsByTagName("colors")[0].childNodes[1].nodeValue;
//   const json = xml2json(xml, { spaces: 2, compact: true });
//   console.log(json)

// const getColorPalette = (cb) =>{
// fetch(`https://justcors.com/tl_7f86e40/http://www.colourlovers.com/api/palettes/top/format=json`)
//   .then((response) => {
  
//     return response.json();
//   })
//   .then((responseJson) => {
//     //injectInfo(responseJson);
//     cb(responseJson)
//     console.log(responseJson);
//   })
// }
// async function getColorPalette() {
//   const URL = `https://justcors.com/tl_7f86e40/http://www.colourlovers.com/api/palettes/top/`;
//   const resp = await fetch(`${URL}`);
//   const responseJson = await resp.json();
//   console.log(responseJson);

         
// }

// getColorPalette();
