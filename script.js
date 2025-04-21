document.addEventListener('DOMContentLoaded', () => {
    const cantidadBilletesInputs = document.querySelectorAll('.cantidad-billetes');
    const totalConteoValorElement = document.getElementById('total-conteo-valor');
    const totalConteoCantidadElement = document.getElementById('total-conteo-cantidad');

    function calcularTotal() {
        let totalValor = 0;
        let totalCantidad = 0;
        cantidadBilletesInputs.forEach(input => {
            const cantidad = parseInt(input.value) || 0;
            const denominacion = parseInt(input.dataset.denominacion);
            totalValor += cantidad * denominacion;
            totalCantidad += cantidad;
        });
        totalConteoValorElement.textContent = `$${totalValor.toLocaleString('es-AR')}`;
        totalConteoCantidadElement.textContent = totalCantidad.toLocaleString('es-AR');
    }

    cantidadBilletesInputs.forEach(input => {
        input.addEventListener('input', calcularTotal);
    });

    // Calcular el total inicial al cargar la página
    calcularTotal();
});
