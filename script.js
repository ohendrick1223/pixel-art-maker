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
var color = ''
document.querySelector('.container').addEventListener('click', function (event) {

  event.target.style.backgroundColor = color;
}
);

var palDivContain = document.createElement('div')
palDivContain.style.width = '480px';
palDivContain.style.height = '160px';
//palDivContain.style.border = '1px solid black';
palDivContain.style.boxSizing = 'borderBox';
palDivContain.style.margin = '50px';
palDivContain.className = 'palBox';
document.body.appendChild(palDivContain);


//for (var j = 0; j < 75; j++) {
for (var j = 0; j < 3; j++) {
var paletteDiv = document.createElement('div');
paletteDiv.style.background = 'white';
paletteDiv.style.width = '30px';
paletteDiv.style.height = '30px';
paletteDiv.style.border = '1px solid black';
paletteDiv.style.borderRadius = '100%';
paletteDiv.style.float = 'right';
paletteDiv.style.boxSizing = 'borderBox';
paletteDiv.id = (j);
palDivContain.appendChild(paletteDiv);
}

document.getElementById('0').style.background = 'green';
document.getElementById('1').style.background = 'yellow';
document.getElementById('2').style.background = 'pink';

document.querySelector('.palBox').addEventListener('click', function(event) {
color = event.target.style.backgroundColor
}
)
