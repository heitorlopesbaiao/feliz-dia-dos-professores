function mostrarSenha() {

    let campo = document.getElementById("codigo");
    let botao = document.getElementById("btnMostrar");

    if (campo.type === "password") {
        campo.type = "text";
        botao.innerHTML = "🙈 Ocultar código";
    } else {
        campo.type = "password";
        botao.innerHTML = "👁 Mostrar código";
    }

}

function entrar() {

    let codigo = document.getElementById("codigo").value.toUpperCase().trim();

    if (codigo === "S8K2") {
        window.location.href = "paginas/S8K2.html";
    }
    else if (codigo === "R4G7") {
        window.location.href = "paginas/R4G7.html"; // História
    }
    else if (codigo === "C9L3") {
        window.location.href = "paginas/C9L3.html";
    }
    else if (codigo === "J6P8") {
        window.location.href = "paginas/J6P8.html";
    }
    else if (codigo === "Y5M2") {
        window.location.href = "paginas/Y5M2.html";
    }
    else if (codigo === "U8E4") {
        window.location.href = "paginas/U8E4.html";
    }
    else if (codigo === "F7S1") {
        window.location.href = "paginas/F7S1.html";
    }
    else if (codigo === "P3T9") {
        window.location.href = "paginas/P3T9.html";
    }
    else if (codigo === "K2I6") {
        window.location.href = "paginas/K2I6.html";
    }
    else if (codigo === "A4N5") {
        window.location.href = "paginas/A4N5.html";
    }
    else {
        alert("Código inválido.");
    }

}