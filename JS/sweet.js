// const { default: Swal } = require("sweetalert2")

function confirmar() {
  Swal.fire({
    title: "Estas seguro ?",
    text: "Confirmar registro del producto!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No!",
  }).then((result) => {
    if (result.isConfirmed) {
      faltanCargarDatos()
        ? Swal.fire({
            position: "center",
            icon: "info",
            title: "Recuerda ingresar los datos de manera correcta",
            showConfirmButton: false,
            timer: 1500,
          })
        : ingresarProducto();
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Producto no registrado",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
}

btnIngresar.addEventListener("click", confirmar);

function correcto() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Producto registrado",
    showConfirmButton: false,
    timer: 1500,
  });
}

const faltaNombre = () => {
  Swal.fire({
    position: "center",
    icon: "warning",
    title: "Falta Ingresar el nombre",
    showConfirmButton: false,
    timer: 1500,
  });
};

const eliminar = () => {
  Swal.fire({
    title: "Estas seguro ?",
    text: "Limpiar inventarios de productos!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No!",
  }).then((result) => {
    if (result.isConfirmed) {
      eliminarInventario();
      setTimeout(reload, 1500);
    } else {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "El inventario se mantiene",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};

btnLimpiar.addEventListener('click', eliminar)