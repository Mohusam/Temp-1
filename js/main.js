let linkMenu = document.getElementById("link-menu");
let toggle = document.getElementById("toggle");
console.log(toggle);
let links = document.getElementById("links");
linkMenu.addEventListener("click", () => {
  if (links.style.display === "none") {
    links.style.display = "block";
    toggle.style.cssText = "transform : rotate(-90deg)";
  } else {
    links.style.display = "none";
    toggle.style.cssText = "transform : rotate(0deg)";
  }
});
