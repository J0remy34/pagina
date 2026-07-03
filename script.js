function openPage(id) {

    let pages = document.querySelectorAll(".page");

    pages.forEach(p => p.style.display = "none");

    document.getElementById(id).style.display = "block";
}

function goHome() {

    let pages = document.querySelectorAll(".page");

    pages.forEach(p => p.style.display = "none");

    document.getElementById("home").style.display = "block";
}