var crsr = document.querySelector("#cursor");
document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+10+ "px";
    crsr.style.top = dets.y +20+ "px";
 
  });
  var aall = document.querySelectorAll("a,svg,#hov,.nav-resp");
  aall.forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    crsr.style.scale = 3;
    crsr.style.border = "1px solid #fff";
    crsr.style.boxShadow = "0px 0px 40px #000";
    crsr.style.backgroundColor = "transparent";
  });
  elem.addEventListener("mouseleave", function () {
    crsr.style.scale = 1;
    crsr.style.boxShadow = "0px 0px 40px #fff";

    crsr.style.border = "0px solid #000";
    crsr.style.backgroundColor = "#000";
  });
});