var text = '{"producto":[ ' +
        '{"Nom" : "Aspirina",    "NomG" : "Ácido Acetilsalicílico", "Form" : "Tableta",  "Unid" : "100", "Pres" : "500mg/Caja", "Prin" : "Alivio del dolor y fiebre","Conc" : "500mg", "UnidE" : "100", "Prec" : "100", ' +
        //  objeto Prod
        ' "Prod" : {"Barra" : "AspirinaCodigo.png", "Foto" : "Aspirina.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Pisacaina",   "NomG" : "Lidocaina Anestésica",   "Form" : "Solución", "Unid" : "100", "Pres" : "100L/Frasco", "Prin" : "Anestésico local","Conc" : "50ml",  "UnidE" : "25",  "Prec" : "121", ' +
        ' "Prod" : {"Barra" : "PisacainaCodigo.png", "Foto" : "Pisacaina.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Ibuprofeno",  "NomG" : "Ibuprofeno", "Form" : "Cápsula",  "Unid" : "60",  "Pres" : "400mg/Cápsula",  "Prin" : "Alivio del dolor e inflamación", "Conc" : "400mg", "UnidE" : "50",  "Prec" : "125", ' +
        ' "Prod" : {"Barra" : "IbuprofenoCodigo.png", "Foto" : "Ibuprofeno.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Tautoss",     "NomG" : "Tautoss", "Form" : "Jarabe",   "Unid" : "80",  "Pres" : "250mL/Frasco", "Prin" : "tos irritativa o tos nerviosa",  "Conc" : "250mL", "UnidE" : "160", "Prec" : "135", ' +
        ' "Prod" : {"Barra" : "TautossCodigo.png", "Foto" : "Tautoss.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Amoxicilina", "NomG" : "Amoxicilina", "Form" : "Tableta",  "Unid" : "30",  "Pres" : "500mg/Caja", "Prin" : "Antibiótico para infecciones",   "Conc" : "500mg", "UnidE" : "40",  "Prec" : "154", ' +
        ' "Prod" : {"Barra" : "AmoxicilinaCodigo.png", "Foto" : "Amoxicilina.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Ketoconazol", "NomG" : "Ketolef", "Form" : "Crema", "Unid" : "20",  "Pres" : "100g/Tubo", "Prin" : "Infecciones", "Conc" : "100g",  "UnidE" : "10",  "Prec" : "95", ' +
        ' "Prod" : {"Barra" : "KetolefCodigo.png", "Foto" : "Ketolef.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Omeprazoi",   "NomG" : "Omeprazol", "Form" : "Cápsula",  "Unid" : "28",  "Pres" : "20mg/Cápsula", "Prin" : "Antiácido y antiulceroso", "Conc" : "20mg",  "UnidE" : "28",  "Prec" : "217", ' +
        ' "Prod" : {"Barra" : "OmeprazolCodigo.png", "Foto" : "Omeprazoi.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Viscoteina",  "NomG" : "Viscoteina", "Form" : "Solución", "Unid" : "78",  "Pres" : "150mL/Frasco", "Prin" : "secreciones bronquiales", "Conc" : "150mL", "UnidE" : "110", "Prec" : "112", ' +
        ' "Prod" : {"Barra" : "ViscoteinaCodigo.png", "Foto" : "Viscoteina.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Voltaren",    "NomG" : "Voltaren",  "Form" : "Crema",    "Unid" : "55",  "Pres" : "50g/Tubo", "Prin" : "Dolor y Inflamación", "Conc" : "50g",   "UnidE" : "85",  "Prec" : "131", ' +
        ' "Prod" : {"Barra" : "VoltarenCodigo.png",  "Foto" : "Voltaren.jpg", "estatus" : "Activo"}' +
        '},' +
        '{"Nom" : "Paracetamol", "NomG" : "Paracetamol", "Form" : "Tableta",  "Unid" : "60",  "Pres" : "500mg/Caja", "Prin" : "Alivio del dolor y fiebre", "Conc" : "500mg", "UnidE" : "50",  "Prec" : "75", ' +
        ' "Prod" : {"Barra" : "ParacetamolCodigo.png", "Foto" : "Paracetamol.jpg", "estatus" : "Activo"}' +
        '}' +
        ']}';

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
                '<td> <img src="./../../img/Producto/' + Productos.Prod.Barra + ' " width="100" > </td>' +
                '<td>' + Productos.Prin + '</td>' +
                '<td>' + Productos.Conc + '</td>' +
                '<td>' + Productos.UnidE + '</td>' +
                '<td>' + Productos.Prec + '</td>' +
                '<td> <img src= "./../../img/Producto/' + Productos.Prod.Foto + ' " width="100" > </td>' +
                '<td>' + Productos.Prod.estatus + '</td></tr>';
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
    let rutaB = './../../img/Producto/';
    document.getElementById("txtBarra").src = rutaB + obj.producto[index].Prod.Barra;
    document.getElementById("txtBarraRuta").src = "";
    document.getElementById("txtPrin").value = obj.producto[index].Prin;
    document.getElementById("txtConc").value = obj.producto[index].Conc;
    document.getElementById("txtUnidE").value = obj.producto[index].UnidE;
    document.getElementById("txtPrec").value = obj.producto[index].Prec;
    let ruta = './../../img/Producto/';
    document.getElementById("txtFoto").src = ruta + obj.producto[index].Prod.Foto;
    document.getElementById("txtFotoRuta").src = "";

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
    document.getElementById("txtBarra").src = "./../../img/Producto/fotovacia.png";
    document.getElementById("txtPrin").value = "";
    document.getElementById("txtConc").value = "";
    document.getElementById("txtUnidE").value = "";
    document.getElementById("txtPrec").value = "";
    document.getElementById("txtFoto").src = "./../../img/Producto/fotovacia.png";
    document.getElementById("btnModificar").classList.add("disabled");
    document.getElementById("btnEliminar").classList.add("disabled");
    document.getElementById("btnAgregar").classList.remove("disabled");
    indexProductoSeleccionado = 0;
}

function obtenerNombreFotoBarra(txtBarraRuta) {
    let nombreBarra;
    nombreBarra = document.getElementById("txtBarraRuta").value;
    nombreBarra = nombreBarra.substring(nombreBarra.lastIndexOf("\\") + 1);
    return nombreBarra;
}

function obtenerNombreFotoProducto(txtFotoRuta) {
    let nombreFoto;
    nombreFoto = document.getElementById("txtFotoRuta").value;
    nombreFoto = nombreFoto.substring(nombreFoto.lastIndexOf("\\") + 1);
    return nombreFoto;
}

function despliegaFotoBarra() {
    let nombreBarra = obtenerNombreFotoBarra();
    let ruta = './../../img/Producto/';
    document.getElementById("txtBarra").src = ruta + nombreBarra;
    document.getElementById("txtBarra").content = nombreBarra;
}

function despliegaFotoProducto() {
    let nombreFoto = obtenerNombreFotoProducto();
    let ruta = './../../img/Producto/';
    document.getElementById("txtFoto").src = ruta + nombreFoto;
}

function agregarProducto() {
    let     Nom, NomG, Form, Unid, Pres, barraNueva, Prin, Conc, UnidE, Prec, fotoNueva;
    Nom = document.getElementById("txtNom").value;
    NomG = document.getElementById("txtNomG").value;
    Form = document.getElementById("txtForm").value;
    Unid = document.getElementById("txtUnid").value;
    Pres = document.getElementById("txtPres").value;
    barraNueva = obtenerNombreFotoBarra();
    Prin = document.getElementById("txtPrin").value;
    Conc = document.getElementById("txtConc").value;
    UnidE = document.getElementById("txtUnidE").value;
    Prec = document.getElementById("txtPrec").value;
    fotoNueva = obtenerNombreFotoProducto();
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


    let  newProducto = {};
    newProducto.Nom = Nom;
    newProducto.NomG = NomG;
    newProducto.Form = Form;
    newProducto.Unid = Unid;
    newProducto.Pres = Pres;
    newProducto.Prin = Prin;
    newProducto.Conc = Conc;
    newProducto.UnidE = UnidE;
    newProducto.Prec = Prec;

    newProducto.Prod = {};
    newProducto.Prod.Barra = barraNueva;
    newProducto.Prod.Foto = fotoNueva;
    newProducto.Prod.estatus = "Activo";

    obj.producto.push(newProducto);

    let jsonData = JSON.stringify(obj.producto);
    console.log(jsonData);
    console.log(typeof (jsonData));

    limpiar();
    actualizaTabla();

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
            obj.producto[indexProductoSeleccionado].Prod.estatus = 'Inactivo';
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
    let      Nom, NomG, Form, Unid, Pres, barraNueva, Prin, Conc, UnidE, Prec, fotoNueva;
    Nom = document.getElementById("txtNom").value;
    NomG = document.getElementById("txtNomG").value;
    Form = document.getElementById("txtForm").value;
    Unid = document.getElementById("txtUnid").value;
    Pres = document.getElementById("txtPres").value;
    barraNueva = obtenerNombreFotoBarra();
    Prin = document.getElementById("txtPrin").value;
    Conc = document.getElementById("txtConc").value;
    UnidE = document.getElementById("txtUnidE").value;
    Prec = document.getElementById("txtPrec").value;
    fotoNueva = obtenerNombreFotoProducto();
    // Validar que los campos no esten vacios
    if (!Nom || !NomG || !Form || !Unid || !Pres || !Prin || !Conc || !UnidE || !Prec) {

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
    newProducto.Prin = Prin;
    newProducto.Conc = Conc;
    newProducto.UnidE = UnidE;
    newProducto.Prec = Prec;

    newProducto.Prod = {};
    newProducto.Prod.estatus = "Activo";


    // Verificar si se ha seleccionado una nueva barra
    let nuevabarra = obtenerNombreFotoBarra();
    if (nuevabarra !== "") {
        newProducto.Prod.Barra = nuevabarra; // Actualizar la foto con la nueva barra
    } else {
        newProducto.Prod.Barra = obj.producto[indexProductoSeleccionado].Prod.Barra; // Mantener la barra original
    }
    newProducto.Prod.estatus = "Activo";

    // Verificar si se ha seleccionado una nueva foto
    let nuevafoto = obtenerNombreFotoProducto();
    if (nuevafoto !== "") {
        newProducto.Prod.Foto = nuevafoto; // Actualizar la foto con la nueva foto
    } else {
        newProducto.Prod.Foto = obj.producto[indexProductoSeleccionado].Prod.Foto; // Mantener la foto original
    }
    newProducto.Prod.estatus = "Activo";


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
                '<td> <img src="./../../img/Producto/' + producto.Prod.Barra + ' " width="100" > </td>' +
                '<td>' + producto.Prin + '</td>' +
                '<td>' + producto.Conc + '</td>' +
                '<td>' + producto.UnidE + '</td>' +
                '<td>' + producto.Prec + '</td>' +
                '<td> <img src="./../../img/Producto/' + producto.Prod.Foto + ' " width="100" > </td>' +
                '<td>' + producto.Prod.estatus + '</td></tr>';
        cuerpo += registro;
    });
    document.getElementById("tblProducto").innerHTML = cuerpo;
}

