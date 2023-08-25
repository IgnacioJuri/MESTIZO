// Btn NavBar Animation

// Dom Calls

const spanBtn = document.querySelector(".span-btn");
const navLinkBtn = document.querySelectorAll(".nav-link-btn");

// add event 

spanBtn.addEventListener("click", () => {
    let i = 0;
    let id = setInterval(frame, 50);
  
    function frame() {
      if (i == navLinkBtn.length) {
        clearInterval(id);
      } else {
        navLinkBtn[i].classList.toggle("disabled");
        i++;
      };
    };
});

// Img Animation Complment 

// Dom Calls
const img1 = document.querySelectorAll(".img-1");
const img2 = document.querySelectorAll(".img-2");
const img3 = document.querySelectorAll(".img-3");
const img4 = document.querySelectorAll(".img-4");

// Add Event 

img2.forEach(function(element) {
  element.addEventListener("mouseover", () => {
      img1.forEach(function(img) {
          img.classList.add("hide");
          img.classList.remove("no-hide")
      });
  });

  element.addEventListener("mouseout", () => {
    img1.forEach(function(img) {
        img.classList.remove("hide");
        img.classList.add("no-hide")
    });
  });
});

img4.forEach(function(element) {
  element.addEventListener("mouseover", () => {
      img3.forEach(function(img) {
          img.classList.add("hide");
          img.classList.remove("no-hide")
      });
  });

  element.addEventListener("mouseout", () => {
    img3.forEach(function(img) {
        img.classList.remove("hide");
        img.classList.add("no-hide")
    });
  });
});

// Pagina Sabores 

// array de objetos y objetos. 

function producto (id,nombre,tipo,img,){
  this.id = id;
  this.nombre = nombre;
  this.tipo = tipo;
  this.img = img;
};

const productos = [
  new producto("1","HUMMUS CLÁSICO","hummus","../img/sabores/Productos-02.svg"),
  new producto("2","HUMMUS CON <br/> AJÍ PICANTE","hummus","../img/sabores/Productos-04.svg"),
  new producto("3","HUMMUS CON  <br/> AJO NEGRO","hummus","../img/sabores/Productos-01.svg"),
  new producto("4","HUMMUS CON  <br/> PISTACHO","hummus","../img/sabores/Productos-03.svg"),
  new producto("5","TAHINI","tahini","../img/sabores/Productos-05.svg"),
  new producto("6","GARBANZO  <br/> SIN PIEL","garbanzo","../img/sabores/Productos-06.svg")
];

// Llamados al Dom
const contenedorProductos = document.querySelector(".productos-sabores");
const filtroHummus = document.querySelector("#hummus");
const filtroTahini = document.querySelector("#tahini");
const filtroGarbanzo = document.querySelector("#garbanzo");

// function para cargar los productos

function cargarProductos(productosAll) {

  //limpiar contenedor para que se eliminen los productos cuando se usan filtros 
  contenedorProductos.innerHTML = '';

  productosAll.forEach(producto => {

    const divProductContainer = document.createElement("div");
    divProductContainer.innerHTML = `
    <div>
      <img class="zoom" src="${producto.img}">
      <h2>${producto.nombre}</h2>
    </div>
    `;

    contenedorProductos.append(divProductContainer);
  })
};

cargarProductos(productos);

// filtros para los sabores 

filtroHummus.addEventListener("click", () =>{

  const filtradoHummus = productos.filter(producto => producto.tipo === "hummus");

  cargarProductos(filtradoHummus);

  filtroHummus.classList.add("mainColor");
  filtroGarbanzo.classList.remove("mainColor");
  filtroTahini.classList.remove("mainColor");
});

filtroGarbanzo.addEventListener("click", () =>{

  const filtradoGarbanzo = productos.filter(producto => producto.tipo === "garbanzo");

  cargarProductos(filtradoGarbanzo);

  filtroHummus.classList.remove("mainColor");
  filtroGarbanzo.classList.add("mainColor");
  filtroTahini.classList.remove("mainColor");
});

filtroTahini.addEventListener("click", () =>{

  const filtradoTahini = productos.filter(producto => producto.tipo === "tahini");

  cargarProductos(filtradoTahini);

  filtroHummus.classList.remove("mainColor");
  filtroGarbanzo.classList.remove("mainColor");
  filtroTahini.classList.add("mainColor");
});

