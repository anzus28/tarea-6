function Function1() {
    if (new Date().getHours() > 18) {
        document.getElementById("demo1").innerHTML = "En este momento es de noche";
    } else {
        document.getElementById("demo1").innerHTML = "En este momento es de dia";
    }

}


function Function2() {
    try {
        throw new Error('¡Ups!')
    } catch (e) {
        console.error(e.name + ': ' + e.message);
        document.getElementById("demo2").innerHTML = e.name + ': ' + e.message;
    }

}
function Function3() {
    let day;

    switch (new Date().getDay()) {
        case 0:

            day = "Domingo";
            break;
        case 1:

            day = "Lunes";
            break;
        case 2:

            day = "Martes";
            break;
        case 3:

            day = "Miercoles";
            break;
        case 4:

            day = "Jueves";
            break;
        case 5:

            day = "Viernes";
            break;
        case 6:

            day = "Sabado";
    }
    let today = new Date().toLocaleDateString()



    document.getElementById("demo3").innerHTML = "Hoy es " + day + ", Dia " + today + "";
}
function Function4() {
    var textos = "";
    for (let i = 0; i < 5; i++) {
        textos += "El numero es: " + i + "<br>";
    }
    document.getElementById("demo4").innerHTML = "Resultado final:" + "<br>" + textos;
}
function Function5() {

    const emoji = ["(-.-)", "(*-*)", "(^_^)", "(0-0)"];
    let i = 0;
    let text = "";

    for (; emoji[i];) {
        text += "<br>" + emoji[i];
        i++;
    }
    document.getElementById("demo5").innerHTML = "Resultado final:" + text;
    const collection = document.getElementsByTagName("p");

}

function Function6() {

    const color = ["Azul", "Blanco", "Rojo", "Negro"];
    let i = 0;
    let text = "";

    while (color[i]) {
        text += "<br>" + color[i];
        i++;
    }


    const collection = document.getElementsByClassName("demo6");
    collection[0].innerHTML = "Resultado final:" + text;
}


function Function7() {

    let result = '';
    let i = 0;

    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);



    document.getElementById("demo7").innerHTML = "Resultado final:" + result;
}

function Function8() {
    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo8").innerHTML = "Hay espacios en blanco";
    }

    else {
        let result = parseInt(document.getElementById("n1").value) + parseInt(document.getElementById("n2").value);



        document.getElementById("demo8").innerHTML = "Resultado final:" + result;
    }
}

function Function9() {
    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo9").innerHTML = "Hay espacios en blanco";
    }

    else {
        let result = parseInt(document.getElementById("n1").value) - parseInt(document.getElementById("n2").value);



        document.getElementById("demo9").innerHTML = "Resultado final:" + result;
    }
}

function Function10() {

    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo10").innerHTML = "Hay espacios en blanco";
    }

    else if (parseInt(document.getElementById("n1").value) != 0) {
        let result = parseInt(document.getElementById("n1").value) / parseInt(document.getElementById("n2").value);
        document.getElementById("demo10").innerHTML = "Resultado final:" + result;
    } else {
        document.getElementById("demo10").innerHTML = "No se puede dividir entre cero";
    }

}

function Function11() {
    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo11").innerHTML = "Hay espacios en blanco";
    }

    else {
        let result = parseInt(document.getElementById("n1").value) * parseInt(document.getElementById("n2").value);



        document.getElementById("demo11").innerHTML = "Resultado final:" + result;
    }
}

function Function12() {
    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo12").innerHTML = "Hay espacios en blanco";
    }

    else {
        let result1 = Math.sqrt(parseInt(document.getElementById("n1").value));
        let result2 = Math.sqrt(parseInt(document.getElementById("n2").value));

        /* Math.cos(x)*/
        document.getElementById("demo12").innerHTML = "Raiz del numero 1:   " + result1 + "<br> Raiz del numero 2:    " + result2;
    }
}

function Function13() {
    if (document.getElementById("n1") == "" || document.getElementById("n2") == "") {
        document.getElementById("demo13").innerHTML = "Hay espacios en blanco";
    }

    else {
        let result1 = Math.cos(parseInt(document.getElementById("n1").value));
        let result2 = Math.cos(parseInt(document.getElement("n2").value));

        /* Math.cos(x)*/
        document.getElementById("demo13").innerHTML = "coseno del numero 1:   " + result1 + "<br> coseno del numero 2:    " + result2;
    }
}

function Functions() {
    var x = document.querySelectorAll("p.intro");
    document.getElementById("demo").innerHTML =
        'El primer parrafo (indice 0) con="intro": ' + x[0].innerHTML;
}


function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("demo14").innerHTML = text;
}
function Function15() {
    // create a TypedArray with a size in bytes
    const typedArray1 = new Int8Array(8);
    typedArray1[0] = 32;

    const typedArray2 = new Int8Array(typedArray1);
    typedArray2[1] = 42;

    let result1 = typedArray1;


    let result2 = typedArray2;



    /* Math.cos(x)*/
    document.getElementById("demo15").innerHTML = "arreglo numero 1:   [" + result1 + "]<br>  arreglo numero 2:    [" + result2 + " ] ";
}

function Function16() {
    const titulo = "La Guía Definitiva.";
    const autor = "David Flanagan";
    document.getElementById("demo16").innerHTML =
        "JavaScript. " + titulo + " Un libro escrito por " + autor + ".";
}