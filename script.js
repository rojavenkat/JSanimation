const button = document.getElementById("button");
const anime = document.getElementById("animate");

const move = () => {
  var pos = 0;

  const init = () => {
    if (pos > 350) {
      anime.style.backgroundColor = "red";
    }
    if (pos > 500) {
      anime.style.backgroundColor = "purple";
    }
    if (pos == 750) {
      clearInterval(id);
    } else {
      pos++;
      anime.style.top = pos + "px";
      anime.style.left = pos + "px";
    }
  };
  var id = setInterval(init, 20);
};
button.addEventListener("click", () => {
  setTimeout(move, 0);
});
