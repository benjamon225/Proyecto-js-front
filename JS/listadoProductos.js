let Lista = ""
const tablaListado = document.querySelector("#listado")

localStorage.getItem("listadoDePasteles") != undefined ? lista = JSON.parse(localStorage.getItem("listadoDePasteles")) : false

const cargoArrayDePasteles = ()=> {
    //debugger
    //Recupero lo almacenado en LS
   
        //lo cargo en la tabla
        for (pastel of lista) {
            Lista += `<tr>
                          <td>${pastel.nombre}</th>
                          <td>${pastel.precio}</th>
                          <td>${pastel.cantidad}</th>
                          <td>${pastel.caduco}</th>
                          <td>${pastel.descr}</th>
                      </tr>`
        }
        tablaListado.innerHTML = Lista    
    }



cargoArrayDePasteles() 
