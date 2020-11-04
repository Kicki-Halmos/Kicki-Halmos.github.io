document.addEventListener("DOMContentLoaded", function(e){
    let portfolio = document.getElementById("portfolio");
    let portfolio_accordion = document.getElementById("portfolio_accordion");
    let grid = document.getElementById("grid");

    portfolio.addEventListener("click", function(e){
        console.log(portfolio_accordion);
        console.log(portfolio);
      
            portfolio.classList.toggle("animation");
            if(portfolio.classList.contains("animation")){
            portfolio_accordion.classList.add("open");
            portfolio_accordion.style.removeProperty("display", "none");
            portfolio_accordion.classList.remove("close");
           
            }

            else{
                portfolio_accordion.classList.add("close");
                portfolio_accordion.classList.remove("open");
                portfolio_accordion.style.setProperty("display", "none")
            }
      
       
    });

    let music = document.getElementById("music");

    music.addEventListener("click", function(e){
        if (music.classList.contains("animation")){
            music.classList.remove("animation");
           
        }
        else{
            music.classList.add("animation");
        }
       
    });

    let cv = document.getElementById("cv");

    cv.addEventListener("click", function(e){
        if (cv.classList.contains("animation")){
            cv.classList.remove("animation");
           
        }
        else{
            cv.classList.add("animation");
        }
       
    });

});