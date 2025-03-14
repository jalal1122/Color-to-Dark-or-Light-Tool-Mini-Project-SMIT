let outputColor = document.querySelector(".showInputColor");
let inputColor = document.getElementById("colorInput");
inputColor.addEventListener("keyup", function () {
  outputColor.style.backgroundColor = inputColor.value;
});

let alteredColor = document.querySelector(".showOutputColor");

let toogleBtn = document.querySelector(".toggle");

function fromHextoRGB(hex) {
  if (hex.length === 3) {
    hex = hex.split("").map(function (el) {
      return el + el;
    });
  }

  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  let arr = [r, g, b];
  return arr;
}

inputColor.value = "345678";

console.log(fromHextoRGB(inputColor.value));

function changeColor(arr) {
  if (arr[0] < 20) {
    arr[0] = 20;
  }
  if (arr[1] < 20) {
    arr[1] = 20;
  }
  if (arr[2] < 20) {
    arr[2] = 20;
  }
  r = arr[0] - 20;
  g = arr[1] - 20;
  b = arr[2] - 20;
  let color = `rgb(${r},${g},${b})`;
  alteredColor.style.backgroundColor = color;
  document.getElementById("colorOutput").value = fromRgbtoHex([r, g, b]);
}

function fromRgbtoHex(rgb) {
  let r = rgb[0].toString(16);
  let g = rgb[1].toString(16);
  let b = rgb[2].toString(16);
  return "#" + r + g + b;
}

toogleBtn.addEventListener("click", function () {
  changeColor(fromHextoRGB(inputColor.value));
});
