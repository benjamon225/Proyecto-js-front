//variables del form

const btnIngresar = document.querySelector("#ingresar")
const btnLimpiar = document.querySelector("#limpiar")
const btnBuscar = document.querySelector("#buscar")
const clientesDom = document.querySelector('#clientes')
const cargar = document.querySelector('#cargar')


const nombreProd = document.querySelector('#nombre')
const precioProd = document.querySelector('#precio')
const cantidadProd = document.querySelector('#cantidad')
const expiraProd = document.querySelector('#expira')
const descProd = document.querySelector('#desc')

const listadoPastel = document.querySelector("#listado")

let lista = []
let CardContenido = ""

const URL = `${window.location.origin}/js/clientes.json`



btnBuscar.addEventListener("click", ()=> buscarCurso())


