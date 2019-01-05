function changeImage() {
  var image = document.getElementById('myImage');
  var bulb = document.getElementById('bulb-info');
  if (image.src.match("bulbon")) {
    image.src = "pic_bulboff.gif";
    bulb.innerHTML = '';
    bulb.innerHTML += 'ON';
  } else {
    image.src = "pic_bulbon.gif";
    bulb.innerHTML = '';    
    bulb.innerHTML += 'Off';
  }
}




function myFunction(va) {
  var fan = document.getElementById("fan-info");
  if (va == 0) {
    fan.innerHTML = '';
    fan.innerHTML += 'ON';
  } else if(va == 1){
    fan.innerHTML = '';
    fan.innerHTML += 'Off';
  }
}