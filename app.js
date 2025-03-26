document.getElementById("threeColumnView").addEventListener("click", function() {
    const grid = document.getElementById("imageGrid");
    const buttonThree = document.getElementById("threeColumnView");
    const buttonOne = document.getElementById("singleColumnView");

    grid.classList.remove("row-cols-1");
    grid.classList.add("row-cols-3");

    buttonThree.style.color = "blue";
    buttonOne.style.color = "grey";
});

  document.getElementById("singleColumnView").addEventListener("click", function() {
    const grid = document.getElementById("imageGrid");
    const buttonThree = document.getElementById("threeColumnView");
    const buttonOne = document.getElementById("singleColumnView");

    grid.classList.remove("row-cols-3");
    grid.classList.add("row-cols-1");

    buttonThree.style.color = "grey";
    buttonOne.style.color = "blue";
  });