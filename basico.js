function fnGeo (){
    let datoVariable = " ";
    datoVariable = document.getElementById("txtDato").value;
    console.log("Ingresaste el dato: ", datoVariable);
}

function fnCalculaRider(){
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    let resutaldoSuma = parseInt(numero1) + parseInt(numero2);
    console.log("La suma de los datos: ",
    numero1, "+", numero2, "es: ", resutaldoSuma);

    console.log(`La suma de los datos: 
        ${numero1} + ${numero2} es: ${resutaldoSuma}`);
}

function fnMultiplica(){
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    let resutaldoMultiplica = parseInt(numero1) * parseInt(numero2);
    console.log("La multiplicación de los datos: ",
    numero1, "*", numero2, "es: ", resutaldoMultiplica);

    console.log(`La multiplicaciòn de los datos: 
        ${numero1} * ${numero2} es: ${resutaldoMultiplica}`);
}

function fnResta(){
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    let resutaldoResta = parseInt(numero1) - parseInt(numero2);
    console.log("La resta de los datos: ",
    numero1, "-", numero2, "es: ", resutaldoResta);

    console.log(`La resta de los datos: 
        ${numero1} - ${numero2} es: ${resutaldoResta}`);
}

function fnDivision(){
    let numero1 = 0;
    let numero2 = 0;
    numero1 = document.querySelector("#txtNum1").value;
    numero2 = document.querySelector(".txtNum2").value;

    let resutaldoDivision = parseInt(numero1) / parseInt(numero2);
    console.log("La división de los datos: ",
    numero1, "/", numero2, "es: ", resutaldoDivision);

    console.log(`La divisiòn de los datos: 
        ${numero1} / ${numero2} es: ${resutaldoDivision}`);
}