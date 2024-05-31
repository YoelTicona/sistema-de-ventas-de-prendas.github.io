// Función para abrir el modal con contenido según la opción seleccionada
function abrirModal(opcion) {
    var contenidoModal = '';
    switch (opcion) {
        case 'VENTAS':
            // Mostrar formulario de selección de tipo de informe para ventas
            contenidoModal = `
                <h2>Selecciona el tipo de informe para Ventas:</h2>
                <select id="tipo-informe">
                    <option value="dia">Día</option>
                    <option value="semana">Semana</option>
                    <option value="mes">Mes</option>
                    <option value="anio">Año</option>
                </select>
                <button onclick="sacarInforme('VENTAS')">Generar Informe</button>
            `;
            break;
        case 'INVENTARIO':
            // Mostrar lista de productos en inventario
            contenidoModal = '<h2>Lista de Productos en Inventario</h2>';
            
            break;
        case 'BUSCAR':
            contenidoModal = `
                <h2>Estado Financiero</h2>
                <p style="color: black;">Generar reporte en PDF del estado financiero.</p>
                <button onclick="generarPDF()">Generar PDF</button>
                <button onclick="cerrarModal()">cancelar</button>
            `;
            break;
        case 'ATRÁS':
            contenidoModal = 'Aquí va el contenido de ATRÁS';
            break;
        default:
            contenidoModal = 'Contenido no definido';
    }
    // Mostrar el contenido en el modal
    document.getElementById('contenido-modal').innerHTML = contenidoModal;
    // Mostrar el modal
    document.getElementById('modal').style.display = 'block';
}

// Función para sacar el informe según la opción seleccionada
function sacarInforme(opcion) {
    var tipoInforme = document.getElementById('tipo-informe').value;
    alert('Se ha seleccionado el informe de ' + tipoInforme + ' para ' + opcion);
    // Cerrar el modal después de seleccionar la opción
    cerrarModal();
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}




// Función para sacar el informe según la opción seleccionada
function sacarInforme(opcion) {
    var tipoInforme = document.getElementById('tipo-informe').value;
    // Generar la tabla según el tipo de informe seleccionado
    var tablaVentas = generarTablaVentas(tipoInforme);
    // Agregar la tabla al contenido de la página
    document.getElementById('contenido-informe').innerHTML = tablaVentas;
    // Cerrar el modal después de seleccionar la opción
    cerrarModal();
}

// Función para generar la tabla de ventas según el tipo de informe seleccionado

function generarTablaVentas(tipoInforme) {
    // Supongamos que tienes datos de ventas
    var datosVentas = obtenerDatosVentas(tipoInforme); // Esta función debería obtener los datos según el tipo de informe seleccionado
    // Generar la tabla HTML
    var tabla = '<h2>Tabla de Ventas</h2><table><thead><tr><th>Fecha</th><th>ID Producto</th><th>Tipo</th><th>Precio (Bs)</th></tr></thead><tbody>';
    datosVentas.forEach(function(venta) {
        tabla += '<tr><td>' + venta.fecha + '</td><td>' + venta.idProducto + '</td><td>' + venta.tipo + '</td><td>' + venta.precioBs + '</td></tr>';
    });
    tabla += '</tbody></table>';
    return tabla;
}

// Función para obtener los datos de ventas según el tipo de informe seleccionado
function obtenerDatosVentas(tipoInforme) {
    // Supongamos que aquí tienes los datos de ventas
    // En este ejemplo, retornamos datos de ventas ficticios
    switch (tipoInforme) {
        case 'dia':
            return [
                { fecha: '2024-04-21', idProducto: '001', tipo: 'Camiseta', precioBs: 200 },
                { fecha: '2024-04-21', idProducto: '002', tipo: 'Pantalón', precioBs: 300 },
                { fecha: '2024-04-21', idProducto: '003', tipo: 'Zapatos', precioBs: 500 }
            ];
        case 'semana':
            return [
                { fecha: '2024-04-15', idProducto: '001', tipo: 'Camiseta', precioBs: 1000 },
                { fecha: '2024-04-15', idProducto: '002', tipo: 'Pantalón', precioBs: 1500 },
                { fecha: '2024-04-16', idProducto: '003', tipo: 'Zapatos', precioBs: 2500 }
            ];
        case 'mes':
            return [
                { fecha: '2024-04-01', idProducto: '001', tipo: 'Camiseta', precioBs: 4000 },
                { fecha: '2024-04-01', idProducto: '002', tipo: 'Pantalón', precioBs: 6000 },
                { fecha: '2024-04-01', idProducto: '003', tipo: 'Zapatos', precioBs: 10000 }
            ];
        case 'anio':
            return [
                { fecha: '2024-01-01', idProducto: '001', tipo: 'Camiseta', precioBs: 20000 },
                { fecha: '2024-01-01', idProducto: '002', tipo: 'Pantalón', precioBs: 30000 },
                { fecha: '2024-01-01', idProducto: '003', tipo: 'Zapatos', precioBs: 50000 }
            ];
        default:
            return [];
    }
}




// Mostrar el contenido en el modal
document.getElementById('contenido-modal').innerHTML = contenidoModal;
// Mostrar el modal
document.getElementById('modal').style.display = 'block';





// Función para dibujar el gráfico de ventas
function dibujarGraficoVentas() {
    // Datos de ejemplo para el gráfico (reemplaza con tus propios datos)
    var datosVentas = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
            label: 'Ventas',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56, 55] // Datos de ventas por mes
        }]
    };

    // Configuración del gráfico
    var opcionesVentas = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    // Obtener el contexto del canvas para dibujar el gráfico
    var ctx = document.getElementById('grafico-ventas').getContext('2d');
    // Crear el gráfico de barras
    new Chart(ctx, {
        type: 'bar',
        data: datosVentas,
        options: opcionesVentas
    });
}







  /*generar el PDF*/
function generarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    // Título
    doc.text("Balance General", 20, 20);
  
    // ACTIVO
    doc.text("ACTIVO", 20, 30);
    doc.text("Efectivo en caja", 30, 40);
    doc.text("Documentos por cobrar", 30, 50);
    doc.text("Terrenos", 30, 60);
    doc.text("Total activo", 30, 70);
    doc.text("250.000", 150, 70);
  
    // PASIVO
    doc.text("PASIVO", 20, 80);
    doc.text("Cuentas por pagar", 30, 90);
    doc.text("40.000", 150, 90);
    doc.text("Hipoteca a pagar", 30, 100);
    doc.text("50.000", 150, 100);
    doc.text("Total pasivo", 30, 110);
    doc.text("90.000", 150, 110);
  
    // CAPITAL
    doc.text("CAPITAL", 20, 120);
    doc.text("Esther Gómez, propietaria", 30, 130);
    doc.text("Total pasivo y capital", 30, 140);
    doc.text("250.000", 150, 140);
  
    // Guardar el documento
    doc.save('balance_general.pdf');
  
    // Opcional: cerrar modal después de generar el PDF
    cerrarModal();
  }
