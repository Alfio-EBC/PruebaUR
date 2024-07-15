//document.getElementById("Datos").addEventListener('click', cargarJSON);

/*
function cargarJSON() {
    fetch('personas.json')
        .then(function (res) {
          //  console.log(res)
            return res.json();
        })
        .then(function (respuesta) {
            let html = '';
            respuesta.forEach(function (libro) {
               html += `<li class="col-xs col-sm-4 col-md-4 col-lg-4 "><li>${libro.titulo + ">" + libro.autor} </li> <li> ${libro.genero}</li> <li> ${libro.anio_publicacion}</li></li>`;
            });
            document.getElementById("resultadoJSON").innerHTML = `<ul class="row m-0">${[html]}</ul>`;
        });
}
cargarJSON()
*/
//LLAMADO
function cargarJSON() {
  fetch("/js/personas.json")
      .then(function (res) {
          return res.json();
      })
      .then(function (respuesta) {
          let lineaSeleccionada = respuesta[2];
          let html = `<li><i class="far fa-bookmark"></i> ${lineaSeleccionada.titulo} | <i class="far fa-user"></i> ${lineaSeleccionada.autor} | <i class="far fa-calendar-alt"></i> ${lineaSeleccionada.anio_publicacion} | <i class="fas fa-book"></i> ${lineaSeleccionada.genero}</li>`;
          document.getElementById("resultadoJSON").innerHTML = `<ul class="text-center contenedor m-0 py-5 list-unstyled">${html}</ul>`;
      });
}
cargarJSON();

//FORMULARIO
document.getElementById("miFormulario").addEventListener("submit", function (event) {
  const form = event.target;
  if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
  } else {
      // Formulario válido, mostrar mensaje con prompt
      event.preventDefault();
      const confirmation = confirm("Esta seguro de enviar formulaio?");
      if (confirmation) {
          alert("¡Formulario enviado!");
          form.reset(); // Opcional: reiniciar el formulario después de enviarlo
      }
  }
  form.classList.add("was-validated");
});
//Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-164618828-1');
//FILTRO

  // Función para mostrar los detalles del libro seleccionado
  function mostrarDetalles() {
    const selectLibros = document.getElementById('selectLibros');
    const detalleLibroDiv = document.getElementById('detalleLibro');
    const libroSeleccionado = selectLibros.value;

    // Limpiar el contenido anterior
    detalleLibroDiv.innerHTML = '';

    // Mostrar los detalles del libro seleccionado
    if (libroSeleccionado === '1') {
      const libro = {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        anio_publicacion: 1967,
        genero: "Realismo mágico"
      };
      mostrarLibro(libro, detalleLibroDiv);
    } else if (libroSeleccionado === '2') {
      const libro = {
        titulo: "El señor de los anillos",
        autor: "J.R.R. Tolkien",
        anio_publicacion: 1954,
        genero: "Fantasía"
      };
      mostrarLibro(libro, detalleLibroDiv);
    } else if (libroSeleccionado === '3') {
      const libro = {
        titulo: "1984",
        autor: "George Orwell",
        anio_publicacion: 1949,
        genero: "Ciencia ficción distópica"
      };
      mostrarLibro(libro, detalleLibroDiv);
    }
  }

  // Función para mostrar los detalles de un libro en el HTML
  function mostrarLibro(libro, detalleLibroDiv) {
    const libroHTML = `
      <div class="libro">
        <h2>${libro.titulo}</h2>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Año de publicación:</strong> ${libro.anio_publicacion}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
      </div>
    `;
    detalleLibroDiv.innerHTML = libroHTML;
  }