let outputColor = document.querySelector(".showInputColor");
let inputColor = document.getElementById("colorInput");
inputColor.addEventListener("keyup", function () {
  outputColor.style.backgroundColor = inputColor.value;
});

let alteredColor = document.querySelector(".showOutputColor");

let toogleBtn = document.querySelector(".toggle");

function fromHextoRGB(hex) {
  if(hex === "") {
    return [255, 255, 255];
  }
  if (hex.length === 4) {
    hex = "#" + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  let arr = [r, g, b];
  return arr;
}

function changeColor(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] < 128) {
      arr[i] += 30;
    } else if (arr[i] < 255 && arr[i] > 128) {
      arr[i] -= 30;
    }
  }
  r = arr[0];
  g = arr[1];
  b = arr[2];
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
