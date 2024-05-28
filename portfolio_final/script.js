window.addEventListener('scroll', function() {
    let navbar = document.getElementById('navbar');
    let scrollPosition = window.scrollY;
    let windowHeight = window.innerHeight;
    let documentHeight = document.body.clientHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
        navbar.classList.remove('fixed-bottom');
    } else {
        navbar.classList.add('fixed-bottom');
    }

    if (scrollPosition === 0) {
        navbar.classList.remove('fixed-top');
    } else {
        navbar.classList.add('fixed-top');
    }
});
document.addEventListener('mousemove', function(e) {
    var light = document.getElementById('light');
    light.style.left = e.pageX - 25 + 'px';  // Adjusted for reduced size
    light.style.top = e.pageY - 25 + 'px';  // Adjusted for reduced size
    light.style.display = 'block';
});
window.onload = function() {
    var projets = document.getElementsByClassName('projetParaButton');

    for (var i = 0; i < projets.length; i++) {
        var img = projets[i].getElementsByClassName('background-image')[0];
        projets[i].style.background = "url('" + img.src + "') no-repeat center center fixed";
    }
}

document.querySelector('.burger-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.add('show');
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.navbar').classList.remove('show');
});
