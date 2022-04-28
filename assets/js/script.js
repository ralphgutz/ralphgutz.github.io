// For mobile sidebar & toggle
function navbarCollapse() {
    let body = document.body;
    body.classList.toggle("mobile-nav-active");

    let btnIcon = document.querySelector("i");
    if (btnIcon.classList.contains("fa-bars")) {
        btnIcon.classList.remove('fa-bars');
        btnIcon.classList.add('fa-circle-xmark');
    }
    else {
        btnIcon.classList.remove('fa-circle-xmark');
        btnIcon.classList.add('fa-bars');
    }
}

// For menu/navbar toggle
let sidebarBtn = document.querySelectorAll(".nav-link")

sidebarBtn.forEach((li) => {
    li.addEventListener("click", (e) => {
        sidebarBtn.forEach((elem) => elem.classList.remove("active"));
        li.classList.add("active");

        let body = document.body
        if (body.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active")

            let btnIcon = document.querySelector("i");
            btnIcon.classList.remove('fa-circle-xmark');
            btnIcon.classList.add('fa-bars');
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll < 300) {
            $("#nav-main").addClass("active")
            $("#nav-about").removeClass("active")
            $("#nav-skills").removeClass("active")
            $("#nav-projects").removeClass("active")
            $("#nav-contact").removeClass("active")
        }
        else if ((scroll >= 300) && (scroll < 1200)) {
            $("#nav-about").addClass("active")
            $("#nav-main").removeClass("active")
            $("#nav-skills").removeClass("active")
            $("#nav-projects").removeClass("active")
            $("#nav-contact").removeClass("active")
        }
        else if ((scroll >= 1200) && (scroll < 2100)) {
            $("#nav-skills").addClass("active")
            $("#nav-main").removeClass("active")
            $("#nav-about").removeClass("active")
            $("#nav-projects").removeClass("active")
            $("#nav-contact").removeClass("active")
        }
        else if ((scroll >= 2100) && (scroll < 2800)) {
            $("#nav-projects").addClass("active")
            $("#nav-skills").removeClass("active")
            $("#nav-main").removeClass("active")
            $("#nav-about").removeClass("active")
            $("#nav-contact").removeClass("active")
        }
        else {
            $("#nav-contact").addClass("active")
            $("#nav-projects").removeClass("active")
            $("#nav-skills").removeClass("active")
            $("#nav-main").removeClass("active")
            $("#nav-about").removeClass("active")
        }
    })
})

topBtn = document.getElementById("gotoTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function gotoTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}