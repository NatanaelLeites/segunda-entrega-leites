/* Objetos */
let bolsaDeBoxeo = {
    precio: 1590,
    nombre: "Bolsa de Boxeo",
    color: "Azul",
    stock: 6,
    descripcion: "Bolsa muy resistente. Se puede llenar con arena, retazos de tela, o espuma de varias densidades"
}

let bicicletaDeSpinning = {
    precio: 2455,
    nombre: "Bicicleta de spinning",
    color: "Negro",
    stock: 3,
    descripcion: "Bicicleta fija para ejercicios, con regulador de instensidad"
}

let infladorMulti = {
    precio: 330,
    nombre: "Inflador Multi",
    color: "Plateado",
    stock: 16,
    descripcion: "Mini-inflador para bicicleta adosable, con accesorio para inflar pelotas"
}

let cintaParaEstiramiento = {
    precio: 450,
    nombre: "Cinta para estiramiento",
    color: "Azul",
    stock: 21,
    descripcion: "Banda elastica de alta resistencia, durable, absorcion de humedad y sudor"
}

let handGrip = {
    precio: 144,
    nombre: "Hand grip",
    color: "Negro",
    stock: 8,
    descripcion: "Articulo de estimulacion manual en forma de V. Ideal para casos de esguinces de muñeca, tendones cortos o recuperacion de musculos de la mano"
}
/* =============================== */
let resultadoStock = 0
let resultadoPrecio = 0
let totalpremios = 0
let mensualidad = 2100
let descuento = 200

//Primera parte
alert("Gracias por elegir FightFit" + "\n" + "Dejanos tu opinión y gana un descuento de $200 en tu proximo mes")


let nombre = prompt("Ingrese Nombre")
alert("Hola " + nombre.trim() + " " + "bienvenid@" + "\n" + "Responde una breve encuesta para ayudarnos a mejorar")

alert("Valora de 1 a 5 los siguientes puntos" + "\n" +
    "Horarios" + "\n" +
    "Actividades" + "\n" +
    "Desempeño del Profesor")

//Segunda parte
let horarios = Number(prompt("Valora nuestros Horarios"))
if (horarios === 1 || horarios === 2 || horarios === 3 || horarios === 4 || horarios === 5){
    alert("Valoracion ingresada, siguiente =>")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Tercera parte
let actividades = Number(prompt("Valora nuestras Actividades"))
if (actividades === 1 || actividades === 2 || actividades === 3 || actividades === 4 || actividades === 5){
    alert("Valoracion ingresada, siguiente =>")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Cuarta parte
let profesor = Number(prompt("Valora nuestro Profesor"))
if (profesor === 1 || profesor === 2 || profesor === 3 || profesor === 4 || profesor === 5){
    alert("Valoracion ingresada")
} else {
    alert("Valor no permitido"+"\n"+ "Rintenta")
}

//Final
alert("Valoramos mucho tu opinion para seguir dando el mejor servicio"+"\n"+"Te agradecemos con un descuento para tu proximo mes ademas participaras por los sorteos de navidad")
alert(nombre+" "+"Tu proxima mensualidad sera de "+ (mensualidad - descuento))

alert("Hola "+ nombre.trim() + " bienvenid@ a FightFit Shop")

alert("Estos son los productos que te puedes ganar en esta navidad")

let productos = [
    {bolsaDeBoxeo},
    {bicicletaDeSpinning},
    {infladorMulti},
    {cintaParaEstiramiento},
    {handGrip}
]

function totalStock(stock1, stock2, stock3, stock4, stock5) {
    resultadoStock = stock1 + stock2 + stock3 + stock4 + stock5
}

totalStock ((bolsaDeBoxeo)["stock"], (bicicletaDeSpinning)["stock"], (infladorMulti)["stock"], (cintaParaEstiramiento)["stock"], (handGrip)["stock"])
alert(resultadoStock + " premios esperan por ti!")



function totalPrecio(precio1,precio2,precio3,precio4,precio5) {
    resultadoPrecio = precio1+precio2+precio3+precio4+precio5
}

totalPrecio ((bolsaDeBoxeo)["precio"], (bicicletaDeSpinning)["precio"], (infladorMulti)["precio"], (cintaParaEstiramiento)["precio"], (handGrip)["precio"])

alert("Son $"+resultadoPrecio*resultadoStock + " en premios!")

