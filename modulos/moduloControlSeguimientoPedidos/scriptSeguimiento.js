// Datos simulados para el ejemplo
const datosSucursal = [
    {sucursal: "Sucursal Centro Max", empleado: "María López", producto: "Paracetamol", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 500},
    {sucursal: "Sucursal Plaza Mayor", empleado: "Pedro Ramírez", producto: "Ketorolaco", fecha: "2023-07-28", hora: "12:30", cantidad: 3, precio: 200},
    {sucursal: "Sucursal Centro", empleado: "Juan Gómez", producto: "Metformina", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 567}
];
const datosEmpleado = [
    {sucursal: "Sucursal Centro Max", empleado: "María López", producto: "Paracetamol", fecha: "2023-05-27", hora: "10:00", cantidad: 8, precio: 300},
    {sucursal: "Sucursal Plaza Mayor", empleado: "Pedro Ramírez", producto: "Metformina", fecha: "2023-02-28", hora: "12:30", cantidad: 2, precio: 100},
    {sucursal: "Sucursal Centro", empleado: "Juan Gómez", producto: "Ketorolaco", fecha: "2023-06-27", hora: "10:00", cantidad: 7, precio: 766}
];

// Función para llenar la tabla con los datos según la opción seleccionada
function llenarTabla(data) {
    const tablaDatos = $("#tabla-datos");
    tablaDatos.empty();

    for (const dato of data) {
        const row = $("<tr>");
        row.append(`<td>${dato.sucursal}</td>`);
        row.append(`<td>${dato.empleado}</td>`);
        row.append(`<td>${dato.producto}</td>`);
        row.append(`<td>${dato.fecha}</td>`);
        row.append(`<td>${dato.hora}</td>`);
        row.append(`<td>${dato.cantidad}</td>`);
        row.append(`<td>${dato.precio}</td>`);
        tablaDatos.append(row);
    }
}

// Evento al hacer clic en el botón Sucursal
$("#btnSucursal").on("click", function () {
    llenarTabla(datosSucursal);
});

// Evento al hacer clic en el botón Empleado
$("#btnEmpleado").on("click", function () {
    llenarTabla(datosEmpleado);
});


