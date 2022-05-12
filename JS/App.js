//SECCION DE INVENTARIO

class Pastel {
  constructor(nombre, precio, cantidad, caduco, descr) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.caduco = caduco;
    this.descr = descr;
  }
}

function ingresarProducto(nombre, precio, cantidad, caduco, descr) {
  nombre = nombreProd.value;
  precio = precioProd.value;
  cantidad = cantidadProd.value;
  caduco = expiraProd.value;
  descr = descProd.value;

  let pastel1 = new Pastel(
    nombre.trim(),
    parseFloat(precio),
    parseInt(cantidad),
    caduco.trim(),
    descr.trim()
  );

  //asigno el contenido de LS al array vacio para poder seguir agregando poductos
  localStorage.getItem("listadoDePasteles") != null
    ? (lista = JSON.parse(localStorage.getItem("listadoDePasteles")))
    : false;

  lista.push(pastel1);
  localStorage.setItem("listadoDePasteles", JSON.stringify(lista));
  console.info("Producto almacenado");

  correcto();
  vaciarCampos();
}

const vaciarCampos = () => {
  nombreProd.value = "";
  precioProd.value = "";
  cantidadProd.value = "";
  expiraProd.value = "";
  descProd.value = "";
  setTimeout(reload, 1500);
};

const reload = () => {
  location.reload();
};

const faltanCargarDatos = () => {
  return (
    nombre.value.trim() == "" ||
    !isNaN(nombre.value) ||
    isNaN(precio.value) ||
    isNaN(cantidad.value)
  );
};

const eliminarInventario = ()=>{
  localStorage.clear()
  console.log("se han eliminado todos los datos.")
}

// const cargoCurso = (array)=> {
//   nombreProd.value = array.nombre
//   precioProd.value = array.precio
//   cantidadProd.value = array.cantidad
//   expiraProd.valu = array.caduco
//   descProd.value = array.descr
// }


// const buscarCurso = ()=> {
//   busco = prompt("Ingrese el producto  a buscar:")
//   if (busco.trim() > "") {
//       resultado = lista.find(c => c.nombreProd.include(busco))
//       //debugger
//       if (resultado != undefined) {
//           cargoCurso(resultado) //si volvió algo de la búsqueda, lo muestro en pantalla
//       } else {
//           alert("No se encontraron resultados para la búsqueda.")
//       }
//   }
// }

