document.addEventListener("DOMContentLoaded", function (e) {
    

    /*********** VARIABLES ************/
    let reveal_content = new Reveal_content();
    let functionality = new Functionality();

    let portfolio = document.getElementById("portfolio");
    let portfolio_content = document.getElementById("portfolio_content");

    let music = document.getElementById("music");
    let music_content = document.getElementById("music_content");

    let cv = document.getElementById("cv");
    let cv_content = document.getElementById("cv_content");

    let about = document.getElementById("about");
    let about_content = document.getElementById("about_content");

    let info = document.getElementById("info");
    info.style.setProperty("display", "none");

    let back = document.getElementById("back");

    let nackademin = document.getElementById("nackademin");
    
    let content = document.getElementById("id_content");

    let contact = document.getElementById("contact");

    let theme = document.getElementById("theme");


    /*********** VARIABLES MOBILE VERSION ************/
    let about_mobile = document.getElementById("about_mobile");

    let portfolio_mobile = document.getElementById("portfolio_mobile");

    let music_mobile = document.getElementById("music_mobile");

    let cv_mobile = document.getElementById("cv_mobile");

    let content_title = document.getElementById("content_titles");

    let back_mobile = document.getElementById("back_mobile");
    back_mobile.style.setProperty("display", "none");


    /*********** EVENTLISTENERS ************/
    about.addEventListener("click", function (e) {
        reveal_content.open_accordion(about_content);
    });

    portfolio.addEventListener("click", function (e) {
        reveal_content.open_accordion(portfolio_content);
    });

    music.addEventListener("click", function (e) {
        reveal_content.open_accordion(music_content);
    });

    cv.addEventListener("click", function (e) {
        reveal_content.open_accordion(cv_content);
    });

    nackademin.addEventListener("click", function () {
        reveal_content.display_none(content, content_title, info, back_mobile);
    });

    back.addEventListener("click", function () {
        info.style.setProperty("display", "none");
        content.style.removeProperty("display", "none");
    });

    theme.addEventListener("click", function () {   
        functionality.theme();
    });

    contact.addEventListener("click", function () {
        copyToClipboard("kickihalmos@gmail.com");
    });


    /*********** EVENTLISTENERS MOBILE VERSION************/
    back_mobile.addEventListener("click", function () {
       reveal_content.display_none(info, back_mobile, content, content_title)
       about_content.classList.remove("open");
    });


    about_mobile.addEventListener("click", function () {
        reveal_content.open_accordion_mobile(about_content, portfolio_content, music_content, cv_content);
    });

    portfolio_mobile.addEventListener("click", function () {
        reveal_content.open_accordion_mobile(portfolio_content, about_content, music_content, cv_content);
    });

    music_mobile.addEventListener("click", function () {
        reveal_content.open_accordion_mobile(music_content, about_content, portfolio_content, cv_content);

    });

    cv_mobile.addEventListener("click", function () {
        reveal_content.open_accordion_mobile(cv_content, about_content, portfolio_content, music_content)

    });

    
   
  






   


    /*function timeOutRemoveClose() {
        setTimeout(function () {
            portfolio_content.classList.remove("close");
            music_content.classList.remove("close");
            cv_content.classList.remove("close");
            about_content.classList.remove("close");

        }, 0);
    }*/

   

  

});