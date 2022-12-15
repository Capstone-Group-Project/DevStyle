import '/style.css'
// let fontdetails = localStorage.getItem("value");
// console.log(fontdetails)

// let apiKey = `AIzaSyAKsZNo47SxzAmtqUE-CFJu9oPFVKvrG-A`;
// async function getFont(apiKey) {
//   console.log(apiKey);
//   const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;
//   const resp = await fetch(`${URL}`);
//   const responseJson = await resp.json();
//   console.log(responseJson);
  
//   const data = responseJson.items;
//   for (let i = 0; i < 50; i++) {
//      //create div for each card 
//      let div = document.getElementById("list");
//      let columndiv = document.createElement("li");
//      columndiv.id = "popularResults";
//      columndiv = document.createElement("a");
//      columndiv.href = "/fontdetails.html"
//      columndiv.textContent = `${responseJson.items[i].family}`;
    
//          let head  = document.getElementById('head');
//          let link  = document.createElement('link');
//          link.rel  = 'stylesheet';
//          link.href = `https://fonts.googleapis.com/css?family=${responseJson.items[i].family}`;
//          let replaced = link.href.replace(/ /g, '+');

//          head.appendChild(link);
    
     
// let header = document.getElementById('fontname');
// header.textContent =  `${responseJson.items[i].family}`
//   }
// }

// getFont(apiKey);


// const fontTemplate = document.createElement("template");
// fontTemplate.innerHTML = `
// <style>
//     .comment{
//         text-align: center;
//         background-color: white;
//         border: 1px solid #bacdd8;
      
//         padding: 4px;
      
//         border-radius: 12px;
//         height: 15vh;
//   width: 15rem;
//     }
    
// </style>
// <div>
//     <div class="comment">
//    <h1>${responseJson.items[i].family}</h1>
//    <form id="fontstyle">
//   <select name="weights" id="weights">
//     <option value="thin100">Thin 100</option>
//     <option value="light300">Light 300</option>
//     <option value="regular400">Regular 400</option>
//     <option value="medium500">Medium 500</option>
//     <option value="bold700">Bold 700</option>
//     <option value="black900">Black 900</option>
//   </select>
//   </form>
//     </div>
// </div>
// `;
// // if statement to change the DOM dependent on dropdown selection 
// //the text will be lorem ipsum 
// class Font extends HTMLElement {
//   constructor() {
//     super();
//   }

//   connectedCallback() {
//     const shadowRoot = this.attachShadow({ mode: "open" });
//     shadowRoot.appendChild(fontTemplate.content);
//   }

// }


// customElements.define("font-component", Font);
