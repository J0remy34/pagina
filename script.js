function openPage(id) {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function goHome() {
    document.querySelectorAll(".page").forEach(p => p.style.display = "none");
    document.getElementById("home").style.display = "block";
}

/* comentarios */
function addComment(section) {
    let input = document.getElementById("input-" + section);
    let container = document.getElementById("comments-" + section);

    if (input.value.trim() === "") return;

    let div = document.createElement("div");
    div.className = "card";
    div.innerText = "💬 " + input.value;

    container.appendChild(div);

    input.value = "";
}