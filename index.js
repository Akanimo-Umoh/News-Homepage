document.getElementById("open").onclick = function() {
    document.getElementById("dropdown").style.right = "0%";
    // document.getElementById("dropdown").style.opacity = "1";
    const body = document.querySelector('body');
    const nav = document.querySelector('nav');
    const dropdown = document.querySelector('#dropdown');
    const logo = document.querySelector('.logo');
    
    for (let i = 0; i < body.children.length; i++) {
      if (body.children[i] !== nav && body.children[i] !== dropdown) {
        body.children[i].style.opacity = 0.5;
      }
    }
    
    nav.style.opacity = 1;
    logo.style.opacity = 0.5;
    dropdown.style.opacity = 1;
    dropdown.style.zIndex = 999;
}

document.getElementById("close").onclick = function() {
    document.getElementById("dropdown").style.right = "-100%";
    
    const body = document.querySelector('body');
    const logo = document.querySelector('.logo');

    for (let i = 0; i < body.children.length; i++) {
        body.children[i].style.opacity = 1;
    }      

    logo.style.opacity = 1;
}
