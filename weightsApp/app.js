var slider = document.getElementById("myRange");
var slider2 = document.getElementById("myRange2");
var output = document.getElementById("demo");
var output2 = document.getElementById("demo2");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  yw = this.value;
  slider2.oninput();
  clock();
};

output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
  xw = this.value;
  clock();

};


var yw;
var xw;

var pointsBlueX = [230, 320, 250, 300];
var pointsBlueY = [120, 190, 200, 310];

var pointsOrangeX = [130, 20, 150, 140];
var pointsOrangeY = [300, 150, 250, 150];

var canW = 400;
var canH = 400;
var ctx = document.getElementById('myCanvas').getContext('2d');

  //set score to something...
var lossOutput = document.getElementById('loss');
ctx.canvas.width = canW;
ctx.canvas.height = canH;
var handW = 10;

var clock = function () {

  var loss = 0;

  ctx.clearRect(0, 0, canW, canH);

//get rotation for line
  var rot = -Math.atan(yw/xw);
  ctx.save();
  ctx.translate(canW / 2, canH / 2);
  if(xw !== 0){
    ctx.rotate(rot - (Math.PI * 0.25));
  }
  else{
    ctx.rotate(Math.PI * 0.25);
  }
  ctx.translate(-canW / 2, -canH / 2);
  ctx.fillStyle = '#F6B972';
  ctx.rotate(Math.PI * 0.25);
  ctx.rect(0,0,800,800);
  ctx.fill();
  ctx.stroke();

   ctx.rotate(-Math.PI * 0.25);

  //now check orange circles
  for(i = 0; i < pointsOrangeX.length; i++){
    if(!ctx.isPointInPath(pointsOrangeX[i],pointsOrangeY[i])){
      loss--;

    }
  }

  ctx.rotate(Math.PI * 0.25);

  ctx.beginPath();

  ctx.fillStyle = '#62A7D3';
  // ctx.rotate(0.1);?
  ctx.rect(0,0,800,-800);
  ctx.fill();
  ctx.stroke();


  // ctx.rotate(-Math.PI * 0.25);
  ctx.rotate(-(rot - (Math.PI * 0.25)));

  //now check blue circles
  for(i = 0; i < pointsBlueX.length; i++){
    if(!ctx.isPointInPath(pointsBlueX[i],pointsBlueY[i])){
      loss--;
    }
  }



  ctx.restore();

  //now blue circles
  ctx.fillStyle = '#0187D3';
  for(i = 0; i < pointsBlueX.length; i++){
    ctx.beginPath();
    ctx.arc(pointsBlueX[i],pointsBlueY[i],10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
  }

  //now orange circles
  ctx.fillStyle = '#F69929';
  for(i = 0; i < pointsOrangeX.length; i++){
    ctx.beginPath();
    ctx.arc(pointsOrangeX[i],pointsOrangeY[i],10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
  }


  lossOutput.innerHTML = 'Loss: ' + loss.toString();
};

var init = function () {
  yw = 1;
  xw = 1;
  clock();
};

init();
