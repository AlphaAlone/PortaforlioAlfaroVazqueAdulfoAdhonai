$(function() {
    $("#MainCalcu").draggable();
});

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