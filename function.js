// Variables...
var displayRgb = document.querySelector(".displayRgb");
var newColor = document.querySelector("h3.new");
var new_color = document.querySelector('.new');
var win = false;
var colorWin = document.querySelector("header"); 
var colorWinN = document.querySelector("nav"); 

var cuadro1 = document.querySelectorAll(".col-lg-3")[0]; 
var cuadro2 = document.querySelectorAll(".col-lg-3")[1];
var cuadro3 = document.querySelectorAll(".col-lg-3")[2];
var cuadro4 = document.querySelectorAll(".col-lg-3")[3];
var cuadro5 = document.querySelectorAll(".col-lg-3")[4];
var cuadro6 = document.querySelectorAll(".col-lg-3")[5]; 

// Funciones...
function getRandomRGB() { //depeniente randomPallet 1 
  var slotR = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotG = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  var slotB = (Math.floor(Math.random() * (255 - 0 + 1)) + 0).toString();
  return `RGB(${slotR},${slotG},${slotB})`; 
}

function randomSelectColor() { //dependiente randomCaseColor
  return randomSelect = (Math.floor(Math.random() * (6 - 1 + 1)) +1);
}


new_color.addEventListener("click", function(){
  location.reload();
});


function win_reaction(color) {
  cuadro1.style.backgroundColor = color;
  cuadro1.style.backgroundColor = color;
  cuadro2.style.backgroundColor = color;
  cuadro3.style.backgroundColor = color;
  cuadro4.style.backgroundColor = color;
  cuadro5.style.backgroundColor = color;
  cuadro6.style.backgroundColor = color;
  displayRgb.textContent = '¡¡¡¡¡¡WIN!!!!!!';
  newColor.textContent = '¡Try Again!';
  colorWin.style.backgroundColor = color;
  colorWinN.style.backgroundColor = color;
}

function randomPallet() { 
  cuadro1.style.backgroundColor = getRandomRGB();
  cuadro1.style.backgroundColor = getRandomRGB();
  cuadro2.style.backgroundColor = getRandomRGB();
  cuadro3.style.backgroundColor = getRandomRGB();
  cuadro4.style.backgroundColor = getRandomRGB();
  cuadro5.style.backgroundColor = getRandomRGB();
  cuadro6.style.backgroundColor = getRandomRGB();

}

function randomCaseColor() {
  Case=0;
  Case=randomSelectColor();
  switch(Case) {
// ///////////////////////////////////// 1 //////////////////////////////
    case 1: 
    displayRgb.textContent = cuadro1.style.backgroundColor;
    // display
      cuadro1.addEventListener("click", function(){
        win_reaction(cuadro1.style.backgroundColor);
        win=true;                                   
      });
      break;
// ///////////////////////////////////// 2 //////////////////////////////
    case 2:      
      displayRgb.textContent = cuadro2.style.backgroundColor;
      // display
      cuadro2.addEventListener("click", function(){
        win_reaction(cuadro2.style.backgroundColor);
        win=true;
      });
      break;
// ///////////////////////////////////// 3 //////////////////////////////
    case 3:      
      displayRgb.textContent = cuadro3.style.backgroundColor;
      // display
      cuadro3.addEventListener("click", function(){
        win_reaction(cuadro3.style.backgroundColor);
        win=true;
      });
      break;
// ///////////////////////////////////// 4 //////////////////////////////
    case 4:  
      displayRgb.textContent = cuadro4.style.backgroundColor;
      cuadro4.addEventListener("click", function(){
        win_reaction(cuadro4.style.backgroundColor);
        win=true;
      });
      break;
///////////////////////////////////// 5 //////////////////////////////
    case 5:
      displayRgb.textContent = cuadro5.style.backgroundColor;
      cuadro5.addEventListener("click", function(){
        win_reaction(cuadro5.style.backgroundColor);
        win=true;
      });
      break;
///////////////////////////////////// 6 //////////////////////////////
    case 6:
      displayRgb.textContent = cuadro6.style.backgroundColor;
      cuadro6.addEventListener("click", function(){          
        win_reaction(cuadro6.style.backgroundColor);
        win=true;          
      });
      break;
    default:
      alert('asdf');
  }
  // Eliminar por descartacion.
  
  cuadro1.addEventListener("click", function(){
    if (win==false){cuadro1.style.backgroundColor = 'rgb(54,54,54)';}    
  });
  cuadro2.addEventListener("click", function(){
    if (win==false){cuadro2.style.backgroundColor = 'rgb(54,54,54)';}
  });
  cuadro3.addEventListener("click", function(){
    if (win==false){cuadro3.style.backgroundColor = 'rgb(54,54,54)';}
  });
  cuadro4.addEventListener("click", function(){
    if (win==false){cuadro4.style.backgroundColor = 'rgb(54,54,54)';}
  });
  cuadro5.addEventListener("click", function(){
    if (win==false){cuadro5.style.backgroundColor = 'rgb(54,54,54)';}
  });
  cuadro6.addEventListener("click", function(){
    if (win==false){cuadro6.style.backgroundColor = 'rgb(54,54,54)';}
  });
}

function run() {
  Case=0;
  win=false;
  randomPallet(); 
  randomCaseColor();    
  console.log(Case);
}
run()