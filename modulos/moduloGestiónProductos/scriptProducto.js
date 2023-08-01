var text = '{"producto":[ ' +
  '{"Nom" : "Aspirina",    "NomG" : "Ácido Acetilsalicílico", "Form" : "Tableta", "Unid" : "100", "Pres" : "500mg/tab",     "Barra" : "AspirinaCodigo.png",    "Prin" : "Alivio del dolor y fiebre",      "Conc" : "500mg", "UnidE" : "100", "Prec" : "100", "Foto" : "Aspirina.jpg", "estatus" : "Activo"},'+
  '{"Nom" : "Ibuprofeno",  "NomG" : "Ibuprofeno",             "Form" : "Cápsula", "Unid" : "60",  "Pres" : "400mg/cápsula", "Barra" : "IbuprofenoCodigo.png",  "Prin" : "Alivio del dolor e inflamación", "Conc" : "400mg", "UnidE" : "50",  "Prec" : "125", "Foto" : "Ibuprofeno.jpg", "estatus" : "Activo"},'+
  '{"Nom" : "Amoxicilina", "NomG" : "Amoxicilina",            "Form" : "Tableta", "Unid" : "30",  "Pres" : "500mg/tab",     "Barra" : "AmoxicilinaCodigo.png", "Prin" : "Antibiótico para infecciones",   "Conc" : "500mg", "UnidE" : "30",  "Prec" : "154", "Foto" : "Amoxicilina.jpg", "estatus" : "Activo"},'+
  '{"Nom" : "Omeprazoi",   "NomG" : "Omeprazol",              "Form" : "Cápsula", "Unid" : "28",  "Pres" : "20mg/cápsula",  "Barra" : "OmeprazolCodigo.png",   "Prin" : "Antiácido y antiulceroso",       "Conc" : "20mg",  "UnidE" : "28",  "Prec" : "217", "Foto" : "Omeprazoi.jpg", "estatus" : "Activo"},'+
  '{"Nom" : "Paracetamol", "NomG" : "Paracetamol",            "Form" : "Tableta", "Unid" : "60",  "Pres" : "500mg/tab",     "Barra" : "ParacetamolCodigo.png", "Prin" : "Alivio del dolor y fiebre",      "Conc" : "500mg", "UnidE" : "50",  "Prec" : "75",  "Foto" : "Paracetamol.jpg", "estatus" : "Activo"} ] }';


let indexProductoSeleccionado; 
let obj = []; 

obj = JSON.parse(text);
console.log(obj);
actualizaTabla();

function actualizaTabla() {
    let cuerpo = "";
    obj.producto.forEach(function (Productos) {
        let registro =
                '<tr onclick="selectProducto(' + obj.producto.indexOf(Productos) + ');">' +
                '<td>' + obj.producto.indexOf(Productos) + '</td>' +
                '<td>' + Productos.Nom + '</td>' +
                '<td>' + Productos.NomG + '</td>' +
                '<td>' + Productos.Form + '</td>' +
                '<td>' + Productos.Unid + '</td>' +
                '<td>' + Productos.Pres + '</td>' +
                '<td> <img src="Imagenes/' + Productos.Barra + ' " width="100" > </td>' +
                '<td>' + Productos.Prin + '</td>' +
                '<td>' + Productos.Conc + '</td>' +
                '<td>' + Productos.UnidE + '</td>' +
                '<td>' + Productos.Prec + '</td>' +
                '<td> <img src="Imagenes/' + Productos.Foto + ' " width="100" > </td>' +
                '<td>' + Productos.estatus + '</td></tr>';

        cuerpo += registro;
    });
    document.getElementById("tblProducto").innerHTML = cuerpo;
}

// selección del producto de acuerdo al índice del arreglo
function selectProducto(index) {
    document.getElementById("txtNom").value = obj.producto[index].Nom;
    document.getElementById("txtNomG").value = obj.producto[index].NomG;
    document.getElementById("txtForm").value = obj.producto[index].Form;
    document.getElementById("txtUnid").value = obj.producto[index].Unid;
    document.getElementById("txtPres").value = obj.producto[index].Pres;
    
    let rutaB ='img/';
    document.getElementById("txtBarraRuta").src = rutaB + obj.producto[index].Barra;
    
    document.getElementById("txtPrin").value = obj.producto[index].Prin;
    document.getElementById("txtConc").value = obj.producto[index].Conc;
    document.getElementById("txtUnidE").value = obj.producto[index].UnidE;
    document.getElementById("txtPrec").value = obj.producto[index].Prec;
    
    let ruta ='img/';
    document.getElementById("txtFotoRuta").src = ruta + obj.producto[index].Foto;


    document.getElementById("btnModificar").classList.remove("disabled");
    document.getElementById("btnEliminar").classList.remove("disabled");
    document.getElementById("btnAgregar").classList.add("disabled");
    indexProductoSeleccionado = index;

}

function limpiar() {
    document.getElementById("txtNom").value = "";
    document.getElementById("txtNomG").value = "";
    document.getElementById("txtForm").value = "";
    document.getElementById("txtUnid").value = "";
    document.getElementById("txtPres").value = "";
    
    document.getElementById("txtPrin").value = "";
    document.getElementById("txtConc").value = "";
    document.getElementById("txtUnidE").value = "";
    document.getElementById("txtPrec").value = "";
  

    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    
    indexProductoSeleccionado = 0;
}

function obtenerNombreFoto(){
    let nombreFoto;
    nombreFoto= document.getElementById("txtFotoRuta").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\")+1);   
    return nombreFoto;
}

function obtenerNombreBarra(){
    let nombreBarra;
    nombreBarra = document.getElementById("txtBarraRuta").value;
    nombreBarra = nombreBarra.substring(nombreBarra.lastIndexOf("\\")+1);   
    return nombreBarra;
}



function agregarProducto() {
    let     Nom,NomG,Form,Unid,Pres,barraNueva,Prin,Conc,UnidE,Prec,fotoNueva;

    Nom = document.getElementById("txtNom").value;
    NomG = document.getElementById("txtNomG").value;
    Form = document.getElementById("txtForm").value;
    Unid = document.getElementById("txtUnid").value;
    Pres = document.getElementById("txtPres").value;
    barraNueva = obtenerNombreBarra();
    Prin = document.getElementById("txtPrin").value;
    Conc = document.getElementById("txtConc").value;
    UnidE = document.getElementById("txtUnidE").value;
    Prec = document.getElementById("txtPrec").value;
    fotoNueva = obtenerNombreFoto();

    let  newProducto = {};
    newProducto.Nom = Nom;
    newProducto.NomG = NomG;
    newProducto.Form = Form;
    newProducto.Unid = Unid;
    newProducto.Pres = Pres;
    newProducto.Barra = barraNueva;
    newProducto.Prin = Prin;
    newProducto.Conc = Conc;
    newProducto.UnidE = UnidE;
    newProducto.Prec = Prec;
    newProducto.Foto = fotoNueva; 
    newProducto.estatus = "Activo";
    
    obj.producto.push(newProducto);


    let jsonData = JSON.stringify(obj.producto);

    console.log(jsonData);
    console.log(typeof (jsonData));

    limpiar();
    actualizaTabla();
    
    // Validar que los campos no esten vacios
    if (!Nom || !NomG || !Form || !Unid || !Pres || !barraNueva || !Prin || !Conc || !UnidE || !Prec || !fotoNueva) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
        return false;
    }
    
     // validaciones para letras
    function camposL(cadena) {
        const lettersPattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return cadena.match(lettersPattern);
    }

    // Validar campos que deben contener solo letras
    if (!camposL(Nom) || !camposL(NomG) || !camposL(Form) || !camposL(Prin)) {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos de nombre, nombre Generico, Forma Famaceutica y Principal indicaciones solo letras.',
        });
        return;
    }

    // Validar que el campo que solo contenga números
    const postalCodePattern = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!Unid.match(postalCodePattern)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El código postal debe contener solo números.',
        });
        return false;
    }
    
    // Validar que el campo que solo contenga números
    const postalCodePattern2 = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!UnidE.match(postalCodePattern2)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El código postal debe contener solo números.',
        });
        return false;
    }
    
    // Validar que el campo que solo contenga números
    const postalCodePattern3 = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!Prec.match(postalCodePattern3)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El código postal debe contener solo números.',
        });
        return false;
    }
    // end validacion 
    
    
     // Mostrar la alerta de éxito personalizada
    Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
        },
        showConfirmButton: true,
        confirmButtonText: 'Aceptar',
    }).fire({
        icon: 'success',
        title: '¡Producto agregado!',
        text: 'El Producto ha sido agregado con éxito.',
    });
}

    
//funcion para eliminar con sweet alert
function eliminarProducto() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-danger',
            cancelButton: 'btn btn-secondary',
        },
        icon: 'warning',
        title: '¿Estás seguro?',
        text: '¿Quieres eliminar el Producto seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, eliminar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para eliminar el Prodicto
            obj.producto[indexProductoSeleccionado].estatus = 'Inactivo';
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
                title: '¡Producto eliminado!',
                text: 'El Producto ha sido eliminado con éxito.',
                confirmButtonText: 'Aceptar',
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No es necesario mostrar una alerta si el usuario cancela la operación.
        }
    });
}


//funcion para modificar Producto con sweet alert
function modificaProducto() {
    Swal.fire({
        customClass: {
            confirmButton: 'btn btn-warning',
            cancelButton: 'btn btn-secondary',
        },
        icon: 'question',
        title: '¿Estás seguro?',
        text: '¿Quieres modificar el Producto seleccionado?',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Sí, modificar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            // Código para modificar el Producto 
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
                title: '¡Producto modificado!',
                text: 'El Producto ha sido modificado con éxito.',
                confirmButtonText: 'Aceptar',
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // No es necesario mostrar una alerta si el usuario cancela la operación.
        }
    });
}  
  
  function modificarRegistro() {
    let      Nom,NomG,Form,Unid,Pres,barraNueva,Prin,Conc,UnidE,Prec,fotoNueva;

    Nom = document.getElementById("txtNom").value;
    NomG = document.getElementById("txtNomG").value;
    Form = document.getElementById("txtForm").value;
    Unid = document.getElementById("txtUnid").value;
    Pres = document.getElementById("txtPres").value;
    barraNueva = obtenerNombreBarra();
    Prin = document.getElementById("txtPrin").value;
    Conc = document.getElementById("txtConc").value;
    UnidE = document.getElementById("txtUnidE").value;
    Prec = document.getElementById("txtPrec").value;
    fotoNueva = obtenerNombreFoto();
    
    // Validar que los campos no esten vacios
    if (!Nom || !NomG || !Form || !Unid || !Pres || !barraNueva || !Prin || !Conc || !UnidE || !Prec || !fotoNueva) {

        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
        return false;
    }
    
     // validaciones para numeros

    function camposL(cadena) {
        const lettersPattern = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
        return cadena.match(lettersPattern);
    }

    // Validar campos que deben contener solo letras
    if (!camposL(Nom) || !camposL(NomG) || !camposL(Form) || !camposL(Prin)) {
        // Mostrar mensaje de error
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Los campos de nombre, nombre Generico, Forma Famaceutica y Principal indicaciones solo letras.',
        });
        return;
    }

    // Validar que el campo que solo contenga números
    const postalCodePattern = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!Unid.match(postalCodePattern)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Unidad de medida debe contener solo números.',
        });
        return false;
    }
    
    // Validar que el campo que solo contenga números
    const postalCodePattern2 = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!UnidE.match(postalCodePattern2)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El Unidad en envase debe contener solo números.',
        });
        return false;
    }
    
    // Validar que el campo que solo contenga números
    const postalCodePattern3 = /^\d+$/; // Expresión regular que acepta solo dígitos
    if (!Prec.match(postalCodePattern3)) {
        // Mostrar mensaje de error con 
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El precio debe contener solo números.',
        });
        return false;
    }
    // end validacion 

    let newProducto = {};
    newProducto.Nom = Nom;
    newProducto.NomG = NomG;
    newProducto.Form = Form;
    newProducto.Unid = Unid;
    newProducto.Pres = Pres;
    newProducto.Barra = barraNueva;
    newProducto.Prin = Prin;
    newProducto.Conc = Conc;
    newProducto.UnidE = UnidE;
    newProducto.Prec = Prec;
    newProducto.Foto = fotoNueva;
    newProducto.estatus = "Activo";
    
    obj.producto[indexProductoSeleccionado] = newProducto;
    
}

function buscarProducto(event) {
    event.preventDefault(); // Evitar el envío del formulario
    let buscarValor = document.getElementById("buscarInput").value.toLowerCase(); // Obtener el valor de búsqueda y convertirlo a minúsculas
    if (buscarValor.trim() === "") {
        // Si no hay valor de búsqueda, se muestra la tabla completa
        actualizaTabla();
        return;
    }

    let resultados = obj.producto.filter((producto) => {
        // Filtrar el arreglo para obtener las coincidencias
        for (let key in producto) {
            if (producto[key].toString().toLowerCase().includes(buscarValor)) {
                // Comprobar si el valor de algún campo del cliente contiene la búsqueda
                return true;
            }
        }
        return false;
    });

    if (resultados.length === 0) {
        // Si no hay resultados, mostrar mensaje de no encontrado
        alert("Producto no encontrado.");
        return;
    }

    // Actualizar la tabla con los resultados de la búsqueda
    let cuerpo = "";
    resultados.forEach(function (producto) {
      let registro =
                '<tr onclick="selectProducto(' + obj.producto.indexOf(producto) + ');">' +
                '<td>' + obj.producto.indexOf(producto) + '</td>' +
                '<td>' + producto.Nom + '</td>' +
                '<td>' + producto.NomG + '</td>' +
                '<td>' + producto.Form + '</td>' +
                '<td>' + producto.Unid + '</td>' +
                '<td>' + producto.Pres + '</td>' +
                '<td> <img src="Imagenes/' + producto.Barra + ' " width="100" > </td>' +
                '<td>' + producto.Prin + '</td>' +
                '<td>' + producto.Conc + '</td>' +
                '<td>' + producto.UnidE + '</td>' +
                '<td>' + producto.Prec + '</td>' +
                '<td> <img src="Imagenes/' + producto.Foto + ' " width="100" > </td>' +
                '<td>' + producto.estatus + '</td></tr>';

        cuerpo += registro;
    });
    document.getElementById("tblProducto").innerHTML = cuerpo; 
    
}

