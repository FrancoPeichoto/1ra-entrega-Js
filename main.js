// Calcular pagos en cuotas sobre un monto determinado

let usuario = prompt("Ingrese su nombre");

function bienvenido() {
    let identificar = true;
    let intentos = 0;
    do {
        if (usuario === null || usuario === "") {
            alert("Por favor, ingrese un nombre valido");
            break
        }
        if (usuario === "franco" && intentos < 3) {
            alert("Bienvenido " + usuario + "!");
            identificar = false;
        } else {
            alert("Incorrecto, intente de nuevo");
            intentos++
            if (intentos > 2) {
                alert("Superaste los intentos, intente de nuevo mas tarde!")
                break
            }
        }
    } while (identificar === true);
}

bienvenido()

function prestamo(usuario) {
    let monto = parseFloat(prompt(usuario + ", ingrese el monto total del prestamo:"));
    let cuotasIngresadas = "";
    
    if (monto > 0) {
        cuotasIngresadas = parseInt(prompt(usuario + " por favor, ingrese el numero de cuotas:"));
        if (cuotasIngresadas > 0){
            let montoPorCuota = monto / cuotasIngresadas
            let recargo = montoPorCuota * 1.3
            alert (usuario + ", el monto de cada cuota es de $" + recargo)
        } else {
            alert("Por favor, ingrese un número de cuotas válido.");
        }
    } else {
        alert("Por favor, ingrese un monto valido");
    }
}

prestamo(usuario);
