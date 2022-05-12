const retornoCardError = ()=> {
    let HTMLCardError = `<div> 
                            <br><br> 
                            <br><br> 
                            <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                            <br><br> 
                         </div>`
       return HTMLCardError
 }

 const mostrarCard = (contenido)=> {
    const {imagen, nombre, descripcion} = contenido
       let HTMLCard = ""
             HTMLCard += `<div class="col-md-3" style="margin-top:2rem">
                            <div class="col">
                            <div class="card">
                                <img src=${imagen} class="img-fluid">
                                <div class="card-body">
                                <h5 class="card-title">${nombre}</h5>
                                <p class="card-text">${descripcion}</p>
                                </div>
                            </div>
                            </div>
                        </div>`
       return HTMLCard
 }