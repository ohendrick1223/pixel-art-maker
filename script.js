'use strict';

var canvasDiv = document.createElement('div');
canvasDiv.style.border = '2px solid black';
canvasDiv.style.width = '528px';
canvasDiv.style.height = '528px';
canvasDiv.style.margin = '50px';
canvasDiv.className = ('container');
document.body.appendChild(canvasDiv);

for (var i = 0; i < 1936; i++) {
  var innerDiv = document.createElement('div');
  innerDiv.style.background = 'white';
  innerDiv.style.width = '10px';
  innerDiv.style.height = '10px';
  innerDiv.style.border = '1px solid black';
  innerDiv.style.float  = 'right';
  innerDiv.style.boxSizing = 'borderBox';
  canvasDiv.appendChild(innerDiv);
}
//delare some globals to referenced in functions at bottom
var color = '';
var container = document.querySelector('.container');


var palDivContain = document.createElement('div')
palDivContain.style.width = '480px';
palDivContain.style.height = '160px';
//palDivContain.style.border = '1px solid black';
palDivContain.style.boxSizing = 'borderBox';
palDivContain.style.marginBottom = '20px';
palDivContain.style.marginLeft = '70px';
palDivContain.style.marginRight = '50px';
palDivContain.className = 'palBox';
document.body.appendChild(palDivContain);


for (var j = 0; j < 75; j++) {
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

document.getElementById('0').style.background = '#FF355E';
document.getElementById('1').style.background = '#FD5B78';
document.getElementById('2').style.background = '#FF6037';
document.getElementById('3').style.background = '#FF9966';
document.getElementById('4').style.background = '#FF9933';
document.getElementById('5').style.background = '#FFCC33';
document.getElementById('6').style.background = '#FFFF66';
document.getElementById('7').style.background = '#CCFF00';
document.getElementById('8').style.background = '#66FF66';
document.getElementById('9').style.background = '#AAF0D1';
document.getElementById('10').style.background = '#50BFE6';
document.getElementById('11').style.background = '#FF6EFF';
document.getElementById('12').style.background = '#EE34D2';
document.getElementById('13').style.background = '#FF00CC';
document.getElementById('14').style.background = '#FF00CC';

document.getElementById('15').style.background = '#C46210';
document.getElementById('16').style.background = '#2E5894';
document.getElementById('17').style.background = '#9C2542';
document.getElementById('18').style.background = '#BF4F51';
document.getElementById('19').style.background = '#A57164';
document.getElementById('20').style.background = '#58427C';
document.getElementById('21').style.background = '#4A646C';
document.getElementById('22').style.background = '#85754E';
document.getElementById('23').style.background = '#319177';
document.getElementById('24').style.background = '#0A7E8C';
document.getElementById('25').style.background = '#9C7C38';
document.getElementById('26').style.background = '#8D4E85';
document.getElementById('27').style.background = '#8FD400';
document.getElementById('28').style.background = '#D98695';
document.getElementById('29').style.background = '#757575';

document.getElementById('30').style.background = '#C8C8CD';
document.getElementById('31').style.background = '#8B8680';
document.getElementById('32').style.background = '#736A62';
document.getElementById('33').style.background = '#000000';
document.getElementById('34').style.background = '#C88A65';
document.getElementById('35').style.background = '#DA8A67';
document.getElementById('36').style.background = '#C9C0BB';
document.getElementById('37').style.background = '#E6BE8A';
document.getElementById('38').style.background = '#92926E';
document.getElementById('39').style.background = '#D9D6CF';
document.getElementById('40').style.background = '#E6BC5C';
document.getElementById('41').style.background = '#837050';
document.getElementById('42').style.background = '#665233';
document.getElementById('43').style.background = '#EED9C4';
document.getElementById('44').style.background = '#FDD5B1';

document.getElementById('45').style.background = '#805533';
document.getElementById('46').style.background = '#FFCBA4';
document.getElementById('47').style.background = '#EDC9AF';
document.getElementById('48').style.background = '#D99A6C';
document.getElementById('49').style.background = '#664228';
document.getElementById('50').style.background = '#D27D46';
document.getElementById('51').style.background = '#DEA681';
document.getElementById('52').style.background = '#926F5B';
document.getElementById('53').style.background = '#87421F';
document.getElementById('54').style.background = '#9E5B40';
document.getElementById('55').style.background = '#AF593E';
document.getElementById('56').style.background = '#E97451';
document.getElementById('57').style.background = '#F7A38E';
document.getElementById('58').style.background = '#FEBAAD';
document.getElementById('59').style.background = '#CA3435';

document.getElementById('60').style.background = '#B56917';
document.getElementById('61').style.background = '#832A0D';
document.getElementById('62').style.background = '#2D5DA1';
document.getElementById('63').style.background = '#AA4069';
document.getElementById('64').style.background = '#BD559C';
document.getElementById('65').style.background = '#B07080';
document.getElementById('66').style.background = '#ABAD48';
document.getElementById('67').style.background = '#353839';
document.getElementById('68').style.background = '#3AA8C1';
document.getElementById('69').style.background = '#469496';
document.getElementById('70').style.background = '#436CB9';
document.getElementById('71').style.background = '#D05340';
document.getElementById('72').style.background = '#469A84';
document.getElementById('73').style.background = '#14A989';
document.getElementById('74').style.background = 'white';

//saves the color mouse clicks in palette box to be applied later
document.querySelector('.palBox').addEventListener('click', function(event) {
color = event.target.style.backgroundColor;
currentColor.style.background = color;
} );

var currentColor = document.createElement('div');
currentColor.style.width = '40px';
currentColor.style.height = '40px';
currentColor.style.border = '2px solid black';
currentColor.style.borderRadius = '100%';
//currentColor.style.float = 'right';
currentColor.id = 'colorPicker';
currentColor.style.marginLeft = '285px';
//currentColor.style.marginRight = '325px';
currentColor.style.boxSizing = 'borderBox';
document.body.appendChild(currentColor);

//FUNCTIONALITY!!!!!!
var click = function(event) {
  event.target.style.backgroundColor = color;
  container.addEventListener('mouseover', drag);
};
var drag = function(event) {
  event.target.style.backgroundColor = color;
};

var removeDrag = function(event) {
  container.removeEventListener('mouseover', drag);
};

container.addEventListener('mousedown', click);
container.addEventListener('mouseup', removeDrag);
