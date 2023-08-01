var text =
  '{"sucursal":[ ' +
  '{"nomSucursal": "Sucursal Norte",   "nombreTitular" : "Alejandro", "rfcTitular" : "TCYYT675H",   "domicilio" : "Zona Norte",  "Colonia" : "Colonia Norte",   "Latitud" : "(19° 25′ 42″ N)", "ciudad" : "Leon",             "Estado" : "Guanajuato",       "codigoP" : "37150", "Telefono" : "4779867640",  "Longitud" : "900 kilómetros",  "estatus" : "Activo"},' +
  '{"nomSucursal": "Sucursal Sur",     "nombreTitular" : "Juan",      "rfcTitular" : "VHFJGYJJHHG", "domicilio" : "Zona Sur",    "Colonia" : "Colonia Sur",     "Latitud" : "19° 25′ 42″ S",   "ciudad" : "Tijuana",          "Estado" : "Baja California",  "codigoP" : "37000", "Telefono" : "4797654890",  "Longitud" : "900 kilómetros",  "estatus" : "Activo"},' +
  '{"nomSucursal": "Sucursal Este",    "nombreTitular" : "Jose",      "rfcTitular" : "JGFYTJYFDtY", "domicilio" : "Zona Este",   "Colonia" : "Colonia Este",    "Latitud" : "19° 25′ 42″ E",   "ciudad" : "Ciudad de México", "Estado" : "CDM",              "codigoP" : "37200", "Telefono" : "4778762107",  "Longitud" : "900 kilómetros",  "estatus" : "Activo"},' +
  '{"nomSucursal": "Sucursal Oeste",   "nombreTitular" : "Fernanda",  "rfcTitular" : "HUGUFYUFJJV", "domicilio" : "Zona Oeste",  "Colonia" : "Colonia Oeste",   "Latitud" : "19° 25′ 42″ O",   "ciudad" : "Guadalajara",      "Estado" : "Jalisco",          "codigoP" : "37400", "Telefono" : "4798762045",  "Longitud" : "900 kilómetros",  "estatus" : "Activo"},' +
  '{"nomSucursal": "Sucursal Central", "nombreTitular" : "Carlos",    "rfcTitular" : "GUYUFURUYRY", "domicilio" : "Zona Centro", "Colonia" : "Colonia Central", "Latitud" : "19° 25′ 42″ C",   "ciudad" : "Zapopan",          "Estado" : "Jalisco",          "codigoP" : "37530", "Telefono" : "4770983476",  "Longitud" : "900 kilómetros",  "estatus" : "Activo"}]}';

let indexSucursalSeleccionada;
let obj = [];

obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.sucursal.forEach(function (sucursal) {
        let registro =
        '<tr onclick="selectSucursal(' + obj.sucursal.indexOf(sucursal) + ');">' +
        '<td>' + obj.sucursal.indexOf(sucursal) + '</td>' +
        '<td>' + sucursal.nomSucursal + '</td>' +
        '<td>' + sucursal.nombreTitular + '</td>' +
        '<td>' + sucursal.rfcTitular + '</td>' +
        '<td>' + sucursal.domicilio + '</td>' +
        '<td>' + sucursal.Colonia + '</td>' +
        '<td>' + sucursal.Latitud + '</td>' +
        '<td>' + sucursal.ciudad + '</td>' +
        '<td>' + sucursal.Estado + '</td>' +
        '<td>' + sucursal.codigoP + '</td>' +
        '<td>' + sucursal.Telefono + '</td>' +
        '<td>' + sucursal.Longitud + '</td>' +
        '<td>' + sucursal.estatus + '</td></tr>';

        cuerpo += registro;

    });
    document.getElementById("tblsucursal").innerHTML = cuerpo;
}

function selectSucursal(index) {
    document.getElementById("txtnombreSucursal").value = obj.sucursal[index].nomSucursal;
    document.getElementById("txtnombreTitular").value = obj.sucursal[index].nombreTitular;
    document.getElementById("txtrfc").value = obj.sucursal[index].rfcTitular;
    document.getElementById("txtDomicilio").value = obj.sucursal[index].domicilio;
    document.getElementById("txtColonia").value = obj.sucursal[index].Colonia;
    document.getElementById("txtLatitud").value = obj.sucursal[index].Latitud;
    document.getElementById("txtCiudad").value = obj.sucursal[index].ciudad;
    document.getElementById("txtEstado").value = obj.sucursal[index].Estado;
    document.getElementById("txtCP").value = obj.sucursal[index].codigoP;
    document.getElementById("txtTelefono").value = obj.sucursal[index].Telefono;
    document.getElementById("txtLongitud").value = obj.sucursal[index].Longitud;
    
    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexSucursalSeleccionada = index;
}


function limpiar() {
    document.getElementById("txtnombreSucursal").value = "";
    document.getElementById("txtnombreTitular").value = "";
    document.getElementById("txtrfc").value = "";
    document.getElementById("txtDomicilio").value = "";
    document.getElementById("txtColonia").value = "";
    document.getElementById("txtLatitud").value = "";
    document.getElementById("txtCiudad").value = "";
    document.getElementById("txtEstado").value = "";
    document.getElementById("txtCP").value = "";
    document.getElementById("txtTelefono").value = "";
    document.getElementById("txtLongitud").value = "";

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexSucursalSeleccionada = 0;
}

function agregarSucursal() {
    let nomSucursal, nomTitular, rfc, domicilio, colonia, latitud, ciudad,  estado, cp, telefono, longitud;
    
    nomSucursal = document.getElementById("txtnombreSucursal").value;
    nomTitular = document.getElementById("txtnombreTitular").value;
    rfc = document.getElementById("txtrfc").value;
    domicilio = document.getElementById("txtDomicilio").value;
    colonia = document.getElementById("txtColonia").value;
    latitud = document.getElementById("txtLatitud").value;
    ciudad = document.getElementById("txtCiudad").value;
    estado = document.getElementById("txtEstado").value;
    cp = document.getElementById("txtCP").value;
    telefono = document.getElementById("txtTelefono").value;
    longitud = document.getElementById("txtLongitud").value;
    
    let newsucursal = {};
    newsucursal.nomSucursal = nomSucursal;
    newsucursal.nombreTitular = nomTitular;
    newsucursal.rfcTitular = rfc;
    newsucursal.domicilio = domicilio;
    newsucursal.Colonia = colonia;
    newsucursal.Latitud = latitud;
    newsucursal.ciudad =  ciudad;
    newsucursal.Estado = estado;
    newsucursal.codigoP =  cp;
    newsucursal.Telefono =  telefono;
    newsucursal.Longitud  =  longitud;
    newsucursal.estatus = "Activo";
    obj.sucursal.push(newsucursal);
    
    let jsonData = JSON.stringify(obj.sucursal);
    console.log(jsonData);
    console.log(typeof (jsonData));

    limpiar();
    actualizaTabla();
    
    // Validar que los campos obligatorios no estén vacíos
    if (!nomSucursal || !nomTitular || !rfc || !domicilio || !colonia || !latitud || !ciudad || !estado || !cp || !telefono || !longitud) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
        return false;
    }
    
    // validaciones para la letras

    function camposL(cadena) {
        const lettersPattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return cadena.match(lettersPattern);
    }


    // Validar campos que deben contener solo letras
    if (!camposL(nomSucursal) || !camposL(nomTitular) || !camposL(domicilio) || !camposL(colonia) || !camposL(ciudad) || !camposL(estado)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos de Nombre Sucursal, Nombre Titular, Domicilio, Colonia, Ciudad y Estado deben contener solo letras.',
        });
        return;
    }
    
    // Validar que el campo de teléfono solo contenga números
    const phonePattern = /^\d+$/;
    if (!telefono.match(phonePattern)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El número de teléfono debe contener solo 10 números.',
        });
        return false;
    }    
    
        // Validar que el campo de Codifo Postal solo contenga números
    const phonePattern1 = /^\d+$/;
    if (!cp.match(phonePattern1)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Solo el Codigo postal debe contener solo 5 números.',
        });
        return false;
    }  
    
     // Mostrar la alerta de éxito personalizada
     Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
        },
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
    }).fire({
        icon: 'success',
        title: '¡Sucursal agregada!',
        text: 'la sucursal ha sido agregado con éxito.',
    });
    

}

function eliminarSucursal() {

      Swal.fire({
        customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary',
        },
        icon: 'warning',
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar la sucursal selecionada?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para eliminar la sucursal
            obj.sucursal[indexSucursalSeleccionada].estatus = 'Inactivo';
        },
        allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
        if (result.isConfirmed) {
            limpiar();
            actualizaTabla();
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-success',
                },
                icon: 'success',
                title: '¡sucursal eliminada!',
                text: 'la sucursal ha sido eliminada con éxito.',
                confirmButtonText: 'Aceptar',
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No es necesario mostrar una alerta si el usuario cancela la operación.
        }
    });

}

function modificarSucursal() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-warning',
            cancelButton: 'btn btn-secondary',
        },
        icon: 'question',
        title: '¿Estás seguro?',
        text: '¿Quieres modificar la sucursal seleccionada?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, modificar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para modificar el empleado
            modificarRegistro();
        },
        allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
        if (result.isConfirmed) {
            actualizaTabla();
            limpiar();
            Swal.fire({
                customClass: {
                    confirmButton: 'btn btn-success',
                },
                icon: 'success',
                title: '¡Sucursal modificada!',
                text: 'la sucursal ha sido modificada con éxito.',
                confirmButtonText: 'Aceptar',
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No es necesario mostrar una alerta si el usuario cancela la operación.
        }
    });
}

function modificarRegistro() {
    let nomSucursal, nomTitular, rfc, domicilio, colonia, latitud, ciudad, estado, cp, telefono, longitud;
     
     nomSucursal = document.getElementById("txtnombreSucursal").value;
     nomTitular = document.getElementById("txtnombreTitular").value;
     rfc = document.getElementById("txtrfc").value;
     domicilio = document.getElementById("txtDomicilio").value;
     colonia = document.getElementById("txtColonia").value;
     latitud = document.getElementById("txtLatitud").value;
     ciudad = document.getElementById("txtCiudad").value;
     estado = document.getElementById("txtEstado").value;
     cp = document.getElementById("txtCP").value;
     telefono = document.getElementById("txtTelefono").value;
     longitud = document.getElementById("txtLongitud").value;
    
        // Validar que los campos obligatorios no estén vacíos
    if (!nomSucursal || !nomTitular || !rfc || !domicilio || !colonia || !latitud || !ciudad|| !estado || !cp || !telefono || !longitud) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
        return false;
    }
    
    // validaciones para la letras
    function camposL(cadena) {
        const lettersPattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return cadena.match(lettersPattern);
    }
    // Validar campos que deben contener solo letras
    if (!camposL(nomSucursal) || !camposL(nomTitular) || !camposL(domicilio) || !camposL(colonia) || !camposL(ciudad) || !camposL(estado)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos de Nombre Sucursal, Nombre Titular, Domicilio, Colonia, Ciudad y Estado deben contener solo letras.',
        });
        return;
    }
    
    // Validar que el campo de teléfono solo contenga números
    const phonePattern = /^\d+$/;
    if (!telefono.match(phonePattern)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El número de teléfono debe contener solo 10 números.',
        });
        return false;
    }    
    
        // Validar que el campo de Codifo Postal solo contenga números
    const phonePattern1 = /^\d+$/;
    if (!cp.match(phonePattern1)) {
        // Mostrar mensaje de error con SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Solo el Codigo postal debe contener solo 5 números.',
        });
        return false;
    } 
    
    let newSucursal = {
        "nomSucursal": nomSucursal,
        "nombreTitular":  nomTitular,
        "rfcTitular": rfc,
        "domicilio": domicilio,
        "Colonia": colonia,
        "Latitud":  latitud,
        "ciudad": ciudad,
        "Estado":  estado,
        "codigoP":  cp,
        "Telefono": telefono,
        "Longitud": longitud,
        "estatus": "Activo"
    };
    obj.sucursal[indexSucursalSeleccionada] = newSucursal;

}

function buscarSucursal(event) {
    event.preventDefault(); // Evitar el envío del formulario
    let buscarValor = document.getElementById("buscarInput").value.toLowerCase(); // Obtener el valor de búsqueda y convertirlo a minúsculas
    if (buscarValor.trim() === "") {
        // Si no hay valor de búsqueda, se muestra la tabla completa
        actualizaTabla();
        return;
    }

    let resultados = obj.sucursal.filter((sucursal) => {
        // Filtrar el arreglo para obtener las coincidencias
        for (let key in sucursal) {
            if (sucursal [key].toString().toLowerCase().includes(buscarValor)) {
                // Comprobar si el valor de algún campo de la sucursal contiene la búsqueda
                return true;
            }
        }
        return false;
    });

    if (resultados.length === 0) {
        // Si no hay resultados, mostrar mensaje de no encontrado
        alert("sucursal no encontrada.");
        return;
    }

    // Actualizar la tabla con los resultados de la búsqueda
    let cuerpo = "";
    resultados.forEach(function (sucursal) {
        let registro =
        '<tr onclick="selectSucursal(' + obj.sucursal.indexOf(sucursal) + ');">' +
        '<td>' + obj.sucursal.indexOf(sucursal) + '</td>' +
        '<td>' + sucursal.nomSucursal + '</td>' +
        '<td>' + sucursal.nombreTitular + '</td>' +
        '<td>' + sucursal.rfcTitular + '</td>' +
        '<td>' + sucursal.domicilio + '</td>' +
        '<td>' + sucursal.Colonia + '</td>' +
        '<td>' + sucursal.Latitud + '</td>' +
        '<td>' + sucursal.ciudad + '</td>' +
        '<td>' + sucursal.Estado + '</td>' +
        '<td>' + sucursal.codigoP + '</td>' +
        '<td>' + sucursal.Telefono + '</td>' +
        '<td>' + sucursal.Longitud + '</td>' +
        '<td>' + sucursal.estatus + '</td></tr>';

        cuerpo += registro;
    });

    document.getElementById("tblsucursal").innerHTML = cuerpo;
}


