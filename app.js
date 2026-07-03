// REGISTRO
function register() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    localStorage.setItem("user", u);
    localStorage.setItem("pass", p);

    alert("Usuario registrado correctamente ✅");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u === localStorage.getItem("user") &&
        p === localStorage.getItem("pass")) {

        localStorage.setItem("session", "true");
        window.location.href = "dashboard.html";

    } else {
        alert("Datos incorrectos ❌");
    }
}

// PROTEGER DASHBOARD
function checkAuth() {
    if (localStorage.getItem("session") !== "true") {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("session");
    window.location.href = "login.html";
}