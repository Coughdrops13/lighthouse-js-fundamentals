const length = 0;
const width = 0;
const base = 0;
const height = 0;
const radius = 0;

let calculateRectangleArea = function (length, width){
  let recArea = length * width;
  if (length < 0 || width < 0) {
    recArea = undefined;
  }
  return recArea;
}
let calculateTriangleArea = function (base, height){
  let triArea = ((base * height) / 2);
  if (base < 0 || height < 0) {
    triArea = undefined;
  }
  return triArea;
}
let calculateCircleArea = function (radius){
  let circArea = (Math.PI * Math.pow(radius, 2));
  if ( radius < 0) {
    circArea = undefined;
  }
  return circArea;
}

