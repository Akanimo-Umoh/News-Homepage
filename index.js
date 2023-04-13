document.getElementById("open").onclick = function() {
    document.getElementById("dropdown").style.right = "0%";
    window.body.style.background = rgba(0, 0, 0, 0.4);
}

document.getElementById("close").onclick = function() {
    document.getElementById("dropdown").style.right = "-100%";
}
