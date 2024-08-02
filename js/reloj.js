function actualizarReloj() {
    // Crear un nuevo objeto Date para obtener la fecha y hora actuales
    const ahora = new Date();

    // Obtener la fecha en formato legible
    const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    const fechaStr = ahora.toLocaleDateString('es-ES', opcionesFecha);
    document.getElementById('fecha').innerText = fechaStr;

    // Obtener la hora en formato AM/PM
    let horas = ahora.getHours();
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    const ampm = horas >= 12 ? 'PM' : 'AM';

    horas = horas % 12;
    horas = horas ? horas : 12; // El '0' debe convertirse en '12'

    const horaStr = `${horas}:${minutos}:${segundos} ${ampm}`;
    document.getElementById('reloj').innerText = horaStr;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Llamar a la función una vez para mostrar la hora inmediatamente
actualizarReloj();