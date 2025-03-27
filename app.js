document.getElementById("threeColumnView").addEventListener("click", function() {
  const grid = document.getElementById("imageGrid");
  const buttonThree = document.getElementById("threeColumnView");
  const buttonOne = document.getElementById("singleColumnView");

  grid.classList.remove("row-cols-1");
  grid.classList.add("row-cols-3");

  //obtenemos las img
  const imagesArray = Array.from(grid.getElementsByTagName("img"));

  //obtenemos hijos grid
  const templateArray = Array.from(grid.getElementsByTagName("div"));

  //referencia del template
  const template = document.getElementById("imageTemplate");

  //eliminamos fotos 1x1
  templateArray.forEach(div => div.remove());

    //Crear los posts
    imagesArray.forEach((img) => {
      //Clonar template
      const clone = template.content.cloneNode(true);
  
      //SETEAR PARAMETROS
      //img
      const postImg = clone.querySelector("img");
      postImg.src = img.src;
      //guardar todos los parametros en el data
      postImg.dataset.title = img.dataset.title;
      postImg.dataset.date = img.dataset.date;
      postImg.dataset.like = img.dataset.like;
      postImg.dataset.description = img.dataset.description;
  
      // Agregar el clon al contenedor de posts
      grid.appendChild(clone);
    });

  buttonThree.style.color = "blue";
  buttonOne.style.color = "grey";
});

document.getElementById("singleColumnView").addEventListener("click", function() {
  const grid = document.getElementById("imageGrid");
  const buttonThree = document.getElementById("threeColumnView");
  const buttonOne = document.getElementById("singleColumnView");

  grid.classList.remove("row-cols-3");
  grid.classList.add("row-cols-1");

  //obtenemos las img
  const imagesArray = Array.from(grid.getElementsByTagName("img"));

 //obtenemos hijos grid
 const templateArray = Array.from(grid.getElementsByTagName("div"));

  //referencia del template
  const template = document.getElementById("postTemplate");

  //eliminamos fotos 3x3
  templateArray.forEach(div => div.remove());

  //Crear los posts
  imagesArray.forEach((img) => {
    //Clonar template
    const clone = template.content.cloneNode(true);

    //SETEAR PARAMETROS
    //titulo
    const postTitle = clone.querySelector("h2");
    postTitle.textContent = `${img.dataset.title}`;
    //fecha
    const postDate = clone.querySelector(".date");
    postDate.textContent = `${img.dataset.date}`;

    //img
    const postImg = clone.querySelector("img");
    postImg.src = img.src;
    //guardar todos los parametros en el data
    postImg.dataset.title = img.dataset.title;
    postImg.dataset.date = img.dataset.date;
    postImg.dataset.like = img.dataset.like;
    postImg.dataset.description = img.dataset.description;
    
    //likes
    const postLikes = clone.querySelector(".likes");
    postLikes.textContent = `${img.dataset.like}`;
    //description
    const postDescription = clone.querySelector(".decription");
    postDescription.textContent = `${img.dataset.description}`;

    // Agregar el clon al contenedor de posts
    grid.appendChild(clone);
  });

  buttonThree.style.color = "grey";
  buttonOne.style.color = "blue";
});

  