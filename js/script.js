$(document).ready(function() {
    const peliculas = [
      { titulo: "Oppenheimer", imagen: "assets/img/oppenheimer1.png" },
      { titulo: "Dune", imagen: "assets/img/Dune2.png" },
      { titulo: "Persepolis", imagen: "assets/img/persepolis.png" }
    ];
  
    // Cargar galería
    peliculas.forEach((p, i) => {
        $("#galeria").append(`
          <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <img src="${p.imagen}" class="card-img-top img-fluid pelicula-img" alt="${p.titulo}">
              <div class="card-body d-flex flex-column justify-content-between">
                <h5 class=" card text-center card-title">${p.titulo}</h5>
                <button class="btn btn-primary reservar-btn mt-3" data-index="${i}">Reservar</button>
              </div>
            </div>
          </div>
        `);
      });
      
  
    // Abrir modal con película seleccionada
    $(document).on("click", ".reservar-btn", function() {
      const index = $(this).data("index");
      $("#peliculaSeleccionada").val(peliculas[index].titulo);
      $("#formReserva")[0].reset();
      $("#resumenReserva").addClass("d-none");
      const modal = new bootstrap.Modal(document.getElementById("reservaModal"));
      modal.show();
    });
  
    // Confirmar reserva
    $("#formReserva").on("submit", function(e) {
      e.preventDefault();
      const titulo = $("#peliculaSeleccionada").val();
      const hora = $("#hora").val();
      const cantidad = $("#cantidad").val();
  
      const resumen = `
        <strong>Película:</strong> ${titulo}<br>
        <strong>Hora:</strong> ${hora}<br>
        <strong>Asientos:</strong> ${cantidad}<br>
        <strong>Pago:</strong> Simulado ✔
      `;
  
      $("#resumenReserva").html(resumen).removeClass("d-none");
    });
  });
  