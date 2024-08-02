function actualizarReloj() {
  const ahora = new Date();

  const opcionesFecha = { year: "numeric", month: "long", day: "numeric" };
  const fechaStr = ahora.toLocaleDateString("es-ES", opcionesFecha);
  document.getElementById("fecha").innerText = fechaStr;

  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, "0");
  const segundos = ahora.getSeconds().toString().padStart(2, "0");
  const ampm = horas >= 12 ? "PM" : "AM";

  horas = horas % 12;
  horas = horas ? horas : 12;

  const horaStr = `${horas}:${minutos}:${segundos} ${ampm}`;
  document.getElementById("reloj").innerText = horaStr;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
