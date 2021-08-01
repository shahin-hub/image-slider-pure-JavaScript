let photos = ["images/bg.jpg","images/bg1.jpg","images/bg2.jpg","images/bg3.jpg","images/bg4.jpg","images/bg5.jpg","images/bg6.jpg",];
let heroImg = document.getElementById("heroImg");
let demo = document.getElementById("demo");
let count = 0;

function right(){

  count++;

  if(count >= photos.length){
    count = 0;
    heroImg.src = photos[count];
  }else{
    heroImg.src = photos[count];
  }

}


function left(){

  count--;
  if(count <= 0){
    count = photos.length - 1;
    heroImg.src = photos[count];
  }else{
    heroImg.src = photos[count];
  }
}


