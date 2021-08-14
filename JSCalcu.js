$(function() {
    $("#MainCalcu").draggable();
});

$(function() {
    $("#calc").click(function() {
        $("#MainCalcu").css("display", "block");
    });
})

$(function() {
    $("#calculadora-ico").click(function() {
        $("#MainCalcu").css("display", "block");
    });
})

$(function() {
    $("#rojo").click(function() {
        $("#MainCalcu").css("display", "none");
    });
})

function updateClock() {
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    var shortDays = [
        'Sun', //Sunday starts at 0
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    var longDays = [
        'Sunday', //Sunday starts at 0
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    d = new Date(); //This returns Wed Apr 02 2014 17:28:55 GMT+0800 (Malay Peninsula Standard Time)
    m = d.getMonth();
    month = (months[m]);
    date = d.getDate();
    year = d.getFullYear();
    x = d.getDay(); //This returns a number, starting with 0 for Sunday

    var day = (shortDays[x]);
    var longDay = (longDays[x]);

    // Pad the minutes and seconds with leading zeros, if required
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

    // Choose either "AM" or "PM" as appropriate
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // Convert the hours component to 12-hour format if needed
    currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;

    // Convert an hours component of "0" to "12"
    currentHours = (currentHours === 0) ? 12 : currentHours;

    // Compose the string for display
    var currentTimeString = day + " " + currentHours + ":" + currentMinutes + " " + timeOfDay;
    var longTimeString = longDay + ", " + month + " " + date + ", " + year;
    $("#clock").html(currentTimeString);
    $("#date").html(longTimeString);

}

$(document).ready(function() {
    updateClock();
    setInterval('updateClock()', 1000);
});

$(document).ready(function() {

    var minutes = ('0' + new Date().getMinutes()).slice(-2);
    var hours = ('0' + new Date().getHours()).slice(-2);
    var time = hours + ':' + minutes;

    $(".time").html(time);

    //Almacena las entradas del usuario en una variable
    var inputs = [""];

    //Cadena para almacenar la cadena de entrada actual
    var totalString;

    //Los operadores arreglan para la validación sin: "."
    var operators1 = ["+", "-", "/", "*"];

    //Los operadores arreglan con el "." para validación
    var operators2 = ["."];

    //Con esta variable podemos verificar que cada entrada sea un número
    var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    function getValue(input) {
        if (operators2.includes(inputs[inputs.length - 1] === true && input === '.')) {
            console.log("Duplicat '.'");
            //Validación para que no comience con un operador
        } else if (inputs.length === 1 && operators1.includes(input) === false) {
            inputs.push(input);
            //Si el último carácter no era un operador, agregue operador a la matriz
        } else if (operators1.includes(inputs[inputs.length - 1]) === false) {
            inputs.push(input);
        } else if (nums.includes(Number(input))) {
            inputs.push(input);
        }
        update();
    }

    function update() {
        totalString = inputs.join("");
        $("#steps").html(totalString);
    }

    function getTotal() {
        totalString = inputs.join("");
        $("#steps").html(eval(totalString));
    }

    $("button").on("click", function() {
        if (this.id === "deleteAll") {
            inputs = [""];
            update();
            document.getElementById("steps").innerHTML = "0";
        } else if (this.id === "backOne") {
            inputs.pop();
            if (inputs.length == 1 || inputs.length == 0) {
                document.getElementById("steps").innerHTML = "0";
            } else {
                update();
            }
        } else if (this.id === "total") {
            getTotal();
        } else {
            if (inputs.length && inputs[inputs.length - 1].indexOf("+", "-", "/", "*") === -1) {
                getValue(this.id);
            } else {
                getValue(this.id);
            }
        }
    })
});