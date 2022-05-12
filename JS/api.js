const llegaContenido = (URL)=>{
 //debugger
    fetch(URL)
    .then((response)=> response.json())
    //.then((data)=> console.table(data))
    .then((data)=>{
        const infomostrar = data
        infomostrar.forEach(contenido => {
            CardContenido +=  mostrarCard(contenido)
            clientesDom.innerHTML = CardContenido
        });
    })
    .catch((error) =>  clientesDom.innerHTML = retornoCardError() )
    .finally( () => cargar.innerHTML = "")

}
