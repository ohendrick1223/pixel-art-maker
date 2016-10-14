'use strict';


var canvasDiv = document.createElement('div');
canvasDiv.style.border = '2px solid black';
canvasDiv.style.width = '500px';
canvasDiv.style.height = '500px';
canvasDiv.className = ('container');
document.body.appendChild(canvasDiv);



for (var i =0; i < 100; i++) {
  var innerDiv = document.createElement('div');
  innerDiv.style.background = 'white';
  innerDiv.style.width = '48px';
  innerDiv.style.height = '48px';
  innerDiv.style.border = '1px solid black'
  innerDiv.style.float  = 'right'
  innerDiv.style.boxSizing = 'borderBox'
  canvasDiv.appendChild(innerDiv);
}

//document.querySelector('.container').addEventListener('click',  )
