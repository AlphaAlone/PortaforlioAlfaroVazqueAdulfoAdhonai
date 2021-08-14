$(document).ready(function() {
    $("#boton").click(function(e) {
        e.preventDefault();
        console.log("Entra");
        var divNuevo = document.createElement("div");
        var body = document.getElementById("body");
        divNuevo.setAttribute("id", "MainNadhesivas");
        divNuevo.setAttribute("class", "ui-widget-content");
        divNuevo.setAttribute("style", "display: block;");

        var cabecera = document.createElement("div");
        cabecera.setAttribute("id", "Cabecera");
        divNuevo.appendChild(cabecera);

        var boton2 = document.createElement("div");
        boton2.setAttribute("id", "boton2");
        cabecera.appendChild(boton2);

        var TextA = document.createElement("div");
        TextA.setAttribute("id", "TextA");
        divNuevo.appendChild(TextA);

        var TextArea = document.createElement("textarea");
        TextArea.setAttribute("id", "TextArea");
        TextA.appendChild(TextArea);

        body.appendChild(divNuevo);

        $(divNuevo).draggable();

        $(boton2).click(function() {
            $(divNuevo).css("display", "none");
        });
    });
});