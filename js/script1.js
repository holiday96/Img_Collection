var images = [
  "./img/HuaYangVol.251/min.jpg",
  "./img/HuaYangVol.251/min (2).jpg",
  "./img/HuaYangVol.251/min (3).jpg",
  "./img/HuaYangVol.251/min (4).jpg",
  "./img/HuaYangVol.251/min (5).jpg",
  "./img/HuaYangVol.251/min (6).jpg",
  "./img/HuaYangVol.251/min (7).jpg",
  "./img/HuaYangVol.251/min (8).jpg",
  "./img/HuaYangVol.251/min (9).jpg",
  "./img/HuaYangVol.251/min (10).jpg",
  "./img/HuaYangVol.251/min (11).jpg",
  "./img/HuaYangVol.251/min (12).jpg",
  "./img/HuaYangVol.251/min (13).jpg",
  "./img/HuaYangVol.251/min (14).jpg",
  "./img/HuaYangVol.251/min (15).jpg",
  "./img/HuaYangVol.251/min (16).jpg",
  "./img/HuaYangVol.251/min (17).jpg",
  "./img/HuaYangVol.251/min (18).jpg",
  "./img/HuaYangVol.251/min (19).jpg",
  "./img/HuaYangVol.251/min (20).jpg",
];
var imageIndex = 0;

var prev = document.getElementById("prev");
var next = document.getElementById("next");
var img = document.getElementById("img");
var picIndex = document.getElementById("picIndex");

function updatePicIndex() {
  picIndex.innerHTML = "Ảnh " + (imageIndex + 1) + "/" + images.length;
}

updatePicIndex();

prev.addEventListener("click", function () {
  imageIndex = (imageIndex + images.length - 1) % images.length;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});

next.addEventListener("click", function () {
  imageIndex = (imageIndex + 1) % images.length;
  img.setAttribute("src", images[imageIndex]);
  updatePicIndex();
});
