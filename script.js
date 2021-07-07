window.addEventListener('DOMContentLoaded', ()=>{
function textSize() {
  let container = document.getElementById("container");
  let font = document.getElementById("font");
  let fontsize = parseInt(container.style.fontSize) + 1 + "px";
  container.style.fontSize = fontsize;

  console.log(fontsize);
  font.textContent = `Font Size :  ${fontsize}`;

  if (fontsize == "100px") {
    clearInterval(time);
  }
}

let time = setInterval(textSize, 1000);
});