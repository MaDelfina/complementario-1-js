const nombre = prompt("Ingresa tu nombre");
const edad = parseInt(prompt("Ingrese tu edad"));

if((nombre == "Delfina" || nombre == "delfina") && edad >= 18) {
    let saludo = alert("Hola " + nombre + "usted puede ingresar")
} else {
    console.log("No tiene permitido ingresar")
}