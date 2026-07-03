function login() {
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    if (u && p) {
        localStorage.setItem("user", u);
        window.location.href = "desktop.html";
    } else {
        alert("Ingrese datos");
    }
}

function openApp(name) {
    alert("Abriendo " + name + "...");
}

function logout() {
    localStorage.clear();
    window.location.href = "index.html";
}