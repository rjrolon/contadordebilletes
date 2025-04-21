document.addEventListener('DOMContentLoaded', () => {
    const cantidadBilletesInputs = document.querySelectorAll('.cantidad-billetes');
    const totalConteoElement = document.getElementById('total-conteo');

    function calcularTotal() {
        let total = 0;
        cantidadBilletesInputs.forEach(input => {
            const cantidad = parseInt(input.value) || 0;
            const denominacion = parseInt(input.dataset.denominacion);
            total += cantidad * denominacion;
        });
        totalConteoElement.textContent = `$${total.toLocaleString('es-AR')}`;
    }

    cantidadBilletesInputs.forEach(input => {
        input.addEventListener('input', calcularTotal);
    });

    // Calcular el total inicial al cargar la página
    calcularTotal();
});
