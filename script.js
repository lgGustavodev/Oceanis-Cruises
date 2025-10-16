const btnScrollTop = document.getElementById("btnScrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnScrollTop.style.display = "block";
  } else {
    btnScrollTop.style.display = "none";
  }
});

// Ao clicar, volta suavemente ao topo
btnScrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
