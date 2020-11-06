document.addEventListener("DOMContentLoaded", function (e) {
    let portfolio = document.getElementById("portfolio");
    let portfolio_content = document.getElementById("portfolio_content");
    //portfolio_content.style.setProperty("display", "none");

    let music = document.getElementById("music");
    let music_content = document.getElementById("music_content");
    //music_content.style.setProperty("display", "none");

    let cv = document.getElementById("cv");
    let cv_content = document.getElementById("cv_content");
    //cv_content.style.setProperty("display", "none");
    portfolio.addEventListener("click", function (e) {
        console.log(portfolio);
        console.log(portfolio_content)
        portfolio.classList.toggle("animation");
        if (portfolio.classList.contains("animation")) {
            portfolio_content.classList.add("open");
            //portfolio_content.style.removeProperty("display", "none");
            portfolio_content.classList.remove("close");

        } else {
            portfolio_content.classList.add("close");
            portfolio_content.classList.remove("open");
            timeOutRemoveClose();

            //portfolio_content.style.setProperty("display", "none")
        }


    });

    music.addEventListener("click", function (e) {
        console.log(music);

        music.classList.toggle("animation");
        if (music.classList.contains("animation")) {
            music_content.classList.add("open");
            //music_content.style.removeProperty("display", "none");
            music_content.classList.remove("close");

        } else {
            music_content.classList.add("close");
            music_content.classList.remove("open");
            //music_content.style.setProperty("display", "none")
            timeOutRemoveClose();
        }


    });

    cv.addEventListener("click", function (e) {

        cv.classList.toggle("animation");
        if (cv.classList.contains("animation")) {
            cv_content.classList.add("open");
            //cv_content.style.removeProperty("display", "none");
            cv_content.classList.remove("close");

        } else {
            cv_content.classList.add("close");
            cv_content.classList.remove("open");
            //cv_content.style.setProperty("display", "none")
            timeOutRemoveClose();
        }


    });

    function timeOutRemoveClose(){
        setTimeout(function() {
            portfolio_content.classList.remove("close");
            music_content.classList.remove("close");
            cv_content.classList.remove("close");
        }, 1000);
    }



});