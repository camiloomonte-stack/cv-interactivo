$(document).ready(function () {

  // EVENTO 1: Modo oscuro
  $("#modoOscuro").click(function () {
    $("body").toggleClass("dark-mode");
  });

  // EVENTO 2: Scroll suave
  $("a.nav-link").click(function (e) {
    e.preventDefault();
    const target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top
    }, 600);
  });

  // EVENTO 3: Validación de email en tiempo real
  $("#email").on("input", function () {
    const email = $(this).val();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
      $("#msgEmail").text("Email válido").css("color", "green");
    } else {
      $("#msgEmail").text("Email inválido").css("color", "red");
    }
  });

  // Evento extra: cambiar color habilidades
  $("#cambiarColor").click(function () {
    $("#habilidades").toggleClass("bg-warning p-3 rounded");
  });

});
