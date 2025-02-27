// Primer contador
let number = document.getElementById("number1");
let counter = 0;
let interval1 = setInterval(() => {
    if (counter == 80) {
        clearInterval(interval1);
    } else {
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30);

// Segundo contador
let number2 = document.getElementById("number2");
let counter2 = 0;
let interval2 = setInterval(() => {
    if (counter2 == 50) {
        clearInterval(interval2);
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "%";  // Corregido: number2 en lugar de number
    }
}, 50);

// Tercer contador
let number3 = document.getElementById("number3");
let counter3 = 0;
let interval3 = setInterval(() => {
    if (counter3 == 40) {
        clearInterval(interval3);
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 50);

// cuarto contador
let number4 = document.getElementById("number4");
let counter4 = 0;
let interval4 = setInterval(() => {
    if (counter4 == 80) {
        clearInterval(interval4);
    } else {
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 50);

// quito contador
let number5 = document.getElementById("number5");
let counter5 = 0;
let interval5 = setInterval(() => {
    if (counter5 == 55) {
        clearInterval(interval5);
    } else {
        counter5 += 1;
        number5.innerHTML = counter5 + "%";
    }
}, 50);

// sexto contador
let number6 = document.getElementById("number6");
let counter6 = 0;
let interval6 = setInterval(() => {
    if (counter6 == 50) {
        clearInterval(interval6);
    } else {
        counter6 += 1;
        number6.innerHTML = counter6 + "%";
    }
}, 50);

// septimo contador
let number7 = document.getElementById("number7");
let counter7 = 0;
let interval7 = setInterval(() => {
    if (counter7 == 50) {
        clearInterval(interval7);
    } else {
        counter7 += 1;
        number7.innerHTML = counter7 + "%";
    }
}, 50);

// octavo contador
let number8 = document.getElementById("number8");
let counter8 = 0;
let interval8 = setInterval(() => {
    if (counter8 == 70) {
        clearInterval(interval8);
    } else {
        counter8 += 1;
        number8.innerHTML = counter8 + "%";
    }
}, 50);

// noveno contador
let number9 = document.getElementById("number9");
let counter9 = 0;
let interval9 = setInterval(() => {
    if (counter9 == 50) {
        clearInterval(interval9);
    } else {
        counter9 += 1;
        number9.innerHTML = counter9 + "%";
    }
}, 50);

// noveno contador
let number10 = document.getElementById("number10");
let counter10 = 0;
let interval10 = setInterval(() => {
    if (counter10 == 70) {
        clearInterval(interval10);
    } else {
        counter10 += 1;
        number10.innerHTML = counter10 + "%";
    }
}, 50);


AOS.init();