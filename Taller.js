// ejercicio 1
function calcularDescuento(precioOriginal, PrecioDescuento){
    if (porcentajeDEscuento < 0 || porcentajeDEscuento > 100){
        return "el porcentaje de descuento no es válido";
    }

    const descuento = (porcentajeDEscuento / 100) * precioOriginal;
    const precioFinal = precioOriginal - descuento;
    return precioFinal;
}
const precioOriginal = 100;
const porcentajeDEscuento = 20;
const precioDescuento = calcularDescuento(precioOriginal, porcentajeDEscuento);
console.log(precioDescuento);

//ejercicio 2
function clasificarEdad(edad){
    if (edad < 13) {
        return "es un niño";
        } else if (edad >= 13 && edad <= 17) {
            return "es un adolescente";
            } else{
                return "es un adulto";
        }
    }
const edad = 15;
const resultado = clasificarEdad(edad);
console.log(resultado);

// ejercicio 3
function esParOImpar(numero){
    if (numero % 2 === 0) {
        return "el numero es par";
        } else {
            return "el numero es impar";
        }
    }
    const numero = 10;
    const resultadoNumero = esParOImpar(numero);
    console.log(resultadoNumero);

// ejercicio 4
function calcularAreaTriangulo(base, altura){
    if (base <= 0 || altura <= 0) {
        return "los valores de base y altura deben ser positivos";
    }
    const area = (base * altura) / 2;
    return area;
}
const base = 5;
const altura = 7;
const areaTriangulo = calcularAreaTriangulo(base, altura);
console.log(areaTriangulo);

// ejercicio 5
function encontrarMayor(num1, num2, num3){
    if (num1 >= num2 && num1 >= num3) {
        return num1;
        } else if (num2 >= num1 && num2 >= num3) {
            return num2;
            } else {
                return num3;
            }
        }
        const num1 = 10;
        const num2 = 20;
        const num3 = 30;
        const mayor = encontrarMayor(num1, num2, num3);
        console.log(mayor);

// ejercicio 6
function convertirTemperatura(valor, unidad) {
    if (unidad === "°C") {
        const valorFahrenheit = (valor * 9/5) + 32;
        return `${valor}°C es igual a ${valorFahrenheit}°F`;
        } else if (unidad === "°F") {
            const valorCelsius = (valor - 32) * 5/9;
            return `${valor}°F es igual a ${valorCelsius}°C`;
            } else {
                return "la unidad de temperatura no es válida";
            }
        }
        const valor = 30;
        const unidad = "°C";
        const resultadoTemperatura = convertirTemperatura(valor, unidad);
        console.log(resultadoTemperatura);

// ejercicio 7
function calcularIMC (peso, altura) {
    if (peso <= 0 || altura <= 0) {
        return "los valores de peso y altura deben ser positivos";
    }
    const imc = (peso / (altura * altura));
    if (imc < 18.5) {
        return "peso bajo";
        } else if (imc >= 18.5 && imc < 25) {
            return "peso normal";
            } else if (imc >= 25 && imc < 30) {
                return "peso sobrepeso";
                } else {
                    return "obesidad";
                }
            }
            const peso = 70;
            const alto = 1.70;
            const resultadoIMC = calcularIMC(peso, alto)
            console.log(resultadoIMC)

// ejercicio 8

function ObtenerNombreDia(dia) {
    let nombreDia;
    switch (dia) {
        case 1:
            nombreDia = "Lunes";
            break;
            case 2:
                nombreDia = "Martes";
                break;
                case 3:
                    nombreDia = "Miércoles";
                    break;
                    case 4:
                        nombreDia = "Jueves";
                        break;
                        case 5:
                            nombreDia = "Viernes";
                            break;
                            case 6:
                                nombreDia = "Sábado";
                                break;
                                case 7:
                                    nombreDia = "Domingo";
                                    break;
                                    default:
                                        nombreDia = "No es un día de la semana";
    }
    return nombreDia;
}
const dia = 3;
const resultadoDia = ObtenerNombreDia(dia);
console.log(resultadoDia);

// ejercicio 9
function redondearNumero(numero){
    if (numero !== 'number' || isNaN(numero)) {
        return "No es un número";
    }
    return Math.round(numero);
}
const numeroDecimal = 3.7;
const resultadoRedondeo = redondearNumero(numeroDecimal);
console.log(resultadoRedondeo);

// ejercicio 10
function compararCadenas(cadena1, cadena2){
    if (typeof cadena1 !== 'string' || typeof cadena2 !== 'string') {
        return false;
    }
    return cadena1 === cadena2;
}
const cadena1 = "Hola";
const cadena2 = "Hola";
const resultadoComparacion = compararCadenas(cadena1, cadena2);
console.log(resultadoComparacion);
