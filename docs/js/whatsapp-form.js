document.getElementById("formSolicitud").addEventListener("submit", function (e) {
    e.preventDefault(); // evita recarga

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").options[
        document.getElementById("servicio").selectedIndex
    ].text;
    const descripcion = document.getElementById("descripcion").value.trim();

    const mensaje = `Hola, deseo una cotización:

👤 *Nombre:* ${nombre}
📧 *Correo electrónico:* ${correo}
📞 *Teléfono:* ${telefono}
🛠️ *Servicio solicitado:* ${servicio}
📝 *Detalle del mensaje:*${descripcion}`;

    const numeroWhatsApp = "51954055539"; 

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});
document.querySelector(".btn-cancelar").addEventListener("click", function (e) {
    e.preventDefault();

    const confirmar = confirm("¿Estás seguro de que deseas cancelar el formulario?");
    if (confirmar) {
        document.getElementById("formSolicitud").reset();
    }
});
