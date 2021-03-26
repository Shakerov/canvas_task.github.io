let canvas = document.querySelector("#canvas");
let canvas2 = document.querySelector("#canvas2");
let ctx = canvas.getContext("2d");
let ctx2 = canvas2.getContext("2d");
let img = new Image();
img.src="cat_face_eyes_gray_striped_green-794646.jpeg";
img.onload = function(){
  ctx.drawImage(img, 0, 0);
};

let img2 = new Image();
img2.src="cat_face_eyes_gray_striped_green-794646.jpeg";
img2.onload = function(){
  ctx2.drawImage(img2, 0, 0);
  let pixels = ctx2.getImageData(0,0, img2.width, img2.height);
  console.log(pixels.data.length);
  ctx2.filter = 'brightness(150)';
}
