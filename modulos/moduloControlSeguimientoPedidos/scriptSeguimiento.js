// Datos simulados para el ejemplo
const datosSucursal = [
  { sucursal: "Sucursal Nortee",  empleado: "Carlos",    producto: "Producto X", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 },
  { sucursal: "Sucursal Sur",     empleado: "Juan",      producto: "Producto Y", fecha: "2023-07-28", hora: "12:30", cantidad: 3, precio: 25 },
  { sucursal: "Sucursal Este",    empleado: "Alejandro", producto: "Producto X", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 },
  { sucursal: "Sucursal Oeste",   empleado: "Emanuel",   producto: "Producto P", fecha: "2023-07-28", hora: "12:30", cantidad: 3, precio: 25 },
  { sucursal: "Sucursal Central", empleado: "Diana",     producto: "Producto W", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 }
];

const datosEmpleado = [
  { sucursal: "Sucursal Nortee",  empleado: "Empleado A", producto: "Producto A", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 },
  { sucursal: "Sucursal Sur",     empleado: "Empleado B", producto: "Producto Z", fecha: "2023-07-28", hora: "12:30", cantidad: 3, precio: 25 },
  { sucursal: "Sucursal Este",    empleado: "Empleado A", producto: "Producto J", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 },
  { sucursal: "Sucursal Oeste",   empleado: "Empleado B", producto: "Producto M", fecha: "2023-07-28", hora: "12:30", cantidad: 3, precio: 25 },
  { sucursal: "Sucursal Central", empleado: "Empleado A", producto: "Producto L", fecha: "2023-07-27", hora: "10:00", cantidad: 5, precio: 50 }
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
$("#btnSucursal").on("click", function() {
  llenarTabla(datosSucursal);
});

// Evento al hacer clic en el botón Empleado
$("#btnEmpleado").on("click", function() {
  llenarTabla(datosEmpleado);
});

 
