import '/style.css'

let apiKey = import.meta.env.VITE_APIKEY;
async function getFont(apiKey) {
  console.log(apiKey);
  const URL = `https://www.googleapis.com/webfonts/v1/webfonts?key=${apiKey}&sort=popularity`;
  const resp = await fetch(`${URL}`);
  const responseJson = await resp.json();
  console.log(responseJson);
  
  const data = responseJson.items;
  for (let i = 0; i < 50; i++) {
     //create div for each card 
     let div = document.getElementById("list");
     let columndiv = document.createElement("li");
    
     columndiv = document.createElement("a");
     columndiv.style.marginLeft = '60px';
     columndiv.href = "/html/fontdetails.html"
     columndiv.textContent = `${responseJson.items[i].family}`;
     columndiv.id = `popularResults-${i}`;
     columndiv.onclick = `openFont(this, ${i}) `;
    //  columndiv.onclick = openFont;
    //  columndiv.onclick = "openFont(i)";

     
    //  changeMe();

     //if you click on the link it sends you to that specific text page 
    
         let head  = document.getElementById('head');
         let link  = document.createElement('link');
         link.rel  = 'stylesheet';
         link.href = `https://fonts.googleapis.com/css?family=${responseJson.items[i].family}`;
         let replaced = link.href.replace(/ /g, '+');

      //  let hint =  columndiv.onclick =  function(){console.log(document.getElementById("popularResults").style)};
      //    console.log(hint);
         head.appendChild(link);
    
     columndiv.style.fontFamily = `${responseJson.items[i].family}`;
     columndiv.style.fontSize = '80px';
     columndiv.style.textDecoration = 'none';
     columndiv.style.color = '#000000';

    
    
// columndiv.onclick= "/fontdetails.html"
    //  let fontLink = document.createElement("a");
    //  fontLink.href = "/fontdetails.html";

    div.appendChild(columndiv);
     //columndiv.style.objectFit = "scale-down";
 // card.appendChild(moviePoster);

 //getting the name of the font for the font details pagw 
//  let fontHeader = document.getElementById("fontname");
  //  fontHeader.textContent = `${responseJson.items[i].family}`
// let header = document.getElementById('header');
// header.textContent =  `${responseJson.items[i].family}`

//if you clik on the link, it redirects you 
document.getElementById('popularResults')
  }
  
}
function openFont(e, working){
  //       let hint = document.getElementById("popularResults").value;
  // console.log(hint)
  console.log(`My new font is ${working}`)
  
  localStorage.setItem("fontSelected", working );
  // columndiv.href = "/html/fontdetails.html";
  // alert('working');
  
       }
getFont(apiKey);

export default './main.js'