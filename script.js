function toggleStart() {
    const menu = document.getElementById("startMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

function openWindow(name) {
    document.getElementById(name + "Window").style.display = "flex";
}

function closeWindow(name) {
    document.getElementById(name + "Window").style.display = "none";
}