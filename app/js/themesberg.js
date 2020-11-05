document.addEventListener("DOMContentLoaded", function (e) {
    let portfolio = document.getElementById("portfolio");
    let portfolio_accordion = document.getElementById("portfolio_accordion");
    portfolio_accordion.style.setProperty("display", "none");

    let music = document.getElementById("music");
    let music_accordion = document.getElementById("music_accordion");
    music_accordion.style.setProperty("display", "none");

    let cv = document.getElementById("cv");
    let cv_accordion = document.getElementById("cv_accordion");
    cv_accordion.style.setProperty("display", "none");
    portfolio.addEventListener("click", function (e) {

        portfolio.classList.toggle("animation");
        if (portfolio.classList.contains("animation")) {
            portfolio_accordion.classList.add("open");
            portfolio_accordion.style.removeProperty("display", "none");
            portfolio_accordion.classList.remove("close");

        } else {
            portfolio_accordion.classList.add("close");
            portfolio_accordion.classList.remove("open");
            portfolio_accordion.style.setProperty("display", "none")
        }


    });

    music.addEventListener("click", function (e) {
        console.log(music);

        music.classList.toggle("animation");
        if (music.classList.contains("animation")) {
            music_accordion.classList.add("open");
            music_accordion.style.removeProperty("display", "none");
            music_accordion.classList.remove("close");

        } else {
            music_accordion.classList.add("close");
            music_accordion.classList.remove("open");
            music_accordion.style.setProperty("display", "none")
        }


    });

    cv.addEventListener("click", function (e) {

        cv.classList.toggle("animation");
        if (cv.classList.contains("animation")) {
            cv_accordion.classList.add("open");
            cv_accordion.style.removeProperty("display", "none");
            cv_accordion.classList.remove("close");

        } else {
            cv_accordion.classList.add("close");
            cv_accordion.classList.remove("open");
            cv_accordion.style.setProperty("display", "none")
        }


    });





});