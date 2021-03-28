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
  let r = pixels.data[0];
  let g = pixels.data[1];
  let b = pixels.data[2];
  const brightConst = 1.7;
  for(let i=0; i<pixels.data.length; i+=4){
    
    r *= brightConst;
    g *= brightConst;
    b *= brightConst;
  }
  ctx2.putImageData(pixels, 0, 0);
}

// Another way
// img2.onload = function(){
//   ctx2.drawImage(img2, 0, 0);
//   let pixels = ctx2.getImageData(0,0, img2.width, img2.height);
//   let t = 3;
//   for(let i=0; i<pixels.data.length; i++){
//     if(i == t){
//       t = i + 4;
//       continue;
//     }
//     pixels.data[i] = pixels.data[i] * 1.7;
//   }
//   ctx2.putImageData(pixels, 0, 0);
// }
