'use strict';


var canvasDiv = document.createElement('div');
canvasDiv.style.border = '2px solid black';
canvasDiv.style.width = '500px';
canvasDiv.style.height = '500px';
canvasDiv.style.margin = '50px';
canvasDiv.className = ('container');
document.body.appendChild(canvasDiv);



for (var i = 0; i < 100; i++) {
  var innerDiv = document.createElement('div');
  innerDiv.style.background = 'white';
  innerDiv.style.width = '48px';
  innerDiv.style.height = '48px';
  innerDiv.style.border = '1px solid black';
  innerDiv.style.float  = 'right';
  innerDiv.style.boxSizing = 'borderBox';
  canvasDiv.appendChild(innerDiv);
}

document.querySelector('.container').addEventListener('click', function (event) {
  event.target.style.backgroundColor = 'red';
}
);

var palDivContain = document.createElement('div')
palDivContain.style.width = '500px';
palDivContain.style.height = '100px';
palDivContain.style.border = '1px solid black';
palDivContain.style.boxSizing = 'borderBox';
palDivContain.style.margin = '50px';
document.body.appendChild(palDivContain);


/*for (var j = 0 j < 7; j++) {
var paletteDiv = document.createElement('div')
paletteDiv.style.background = 'green';
paletteDiv.style.width = '10px';
paletteDiv.style.height = '30px';
paletteDiv.style.border = '1px solid black';
paletteDiv.style.float = 'right';
paletteDiv.style.boxSizing = 'borderBox';
palDivContain.appendChild(paletteDiv);
}*/
