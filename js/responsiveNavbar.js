//Toggles navbar in small screens
function toggleNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//Minimizes a navbar once a navlink item is selected
function minimizeNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
    }
}

//Monitors page location and highlights active page
var header = document.getElementById("myTopnav");
var btns = header.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//Closes navbar on scroll if it is open
window.onscroll = function() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav responsive") {
        x.className = "topnav";
    }
};


//Minimizes navbar if the user clicks outside the navbar area.
window.addEventListener('click', function(e) {
    var x = document.getElementById("myTopnav");
    if (document.getElementById('myTopnav').contains(e.target) || document.getElementById('nav-link').contains(e.target)) {
        // Clicked in box
    } else {
        // Clicked outside the box
        if (x.className === "topnav responsive") {
            x.className = "topnav";
        }
    }

});

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myTopnav").style.paddingTop = "6px";
        document.getElementById("myTopnav").style.height = "8vh";
    } else {
        // document.getElementById("nav-link").style.padding = "14px 16px";
        document.getElementById("myTopnav").style.paddingTop = "12px";
        document.getElementById("myTopnav").style.height = "10vh";
    }
}