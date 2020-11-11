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

    let about = document.getElementById("about");
    let about_content = document.getElementById("about_content");

    about.addEventListener("click", function (e) {
        console.log("hej");
        about.classList.toggle("animation");
        if (about.classList.contains("animation")) {
            about_content.classList.add("open");
            //cv_content.style.removeProperty("display", "none");
            about_content.classList.remove("close");
           

        } else {
            about_content.classList.add("close");
            about_content.classList.remove("open");
            //cv_content.style.setProperty("display", "none")
            timeOutRemoveClose();
        }


    });
    portfolio.addEventListener("click", function (e) {
        
        portfolio.classList.toggle("animation");
        if (portfolio.classList.contains("animation")) {
            portfolio_content.classList.add("open");
           
           

            //portfolio_content.style.removeProperty("display", "none");
            //portfolio_content.classList.remove("close");
           
            

        } else {
            portfolio_content.classList.add("close");
            portfolio_content.classList.remove("open");
           
            timeOutRemoveClose();

            //portfolio_content.style.setProperty("display", "none")
        }
        


    });

    music.addEventListener("click", function (e) {
        //console.log(music);
   

            
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

   
   

    let portfolio_mobile = document.getElementById("portfolio_mobile");
    let music_mobile = document.getElementById("music_mobile");
    let cv_mobile = document.getElementById("cv_mobile");
    

    portfolio_mobile.addEventListener("click", function(){
        
        
        portfolio_mobile.classList.toggle("animation");
        if (portfolio_mobile.classList.contains("animation")) {
            portfolio_content.classList.add("open");
            portfolio_content.style.removeProperty("display", "none");
            cv_content.style.setProperty("display", "none");
            music_content.style.setProperty("display", "none");
            music_mobile.classList.remove("animation");
            cv_mobile.classList.remove("animation");
           
            

        } else {
            portfolio_content.classList.add("close");
            portfolio_content.classList.remove("open");
            timeOutRemoveClose();

            //portfolio_content.style.setProperty("display", "none")
        }

    });

    music_mobile.addEventListener("click", function(){
        console.log(music_mobile);
        music_mobile.classList.toggle("animation");
        if (music_mobile.classList.contains("animation")) {
            music_content.classList.add("open");
            music_content.style.removeProperty("display", "none");
            cv_content.style.setProperty("display", "none");
            portfolio_content.style.setProperty("display", "none");
            cv_mobile.classList.remove("animation");
            portfolio_mobile.classList.remove("animation");
           
            

        } else {
            music_content.classList.add("close");
            music_content.classList.remove("open");
            timeOutRemoveClose();
        }
    });

    cv_mobile.addEventListener("click", function(){
        
        cv_mobile.classList.toggle("animation");
        if (cv_mobile.classList.contains("animation")) {
            cv_content.classList.add("open");
            cv_content.style.removeProperty("display", "none");
            music_content.style.setProperty("display", "none");
            portfolio_content.style.setProperty("display", "none");
            music_mobile.classList.remove("animation");
            portfolio_mobile.classList.remove("animation");
           
            

        } else {
            cv_content.classList.add("close");
            cv_content.classList.remove("open");
            timeOutRemoveClose();
        }
    });

    let theme = document.getElementById("theme");
    let body = document.getElementById("body");
  
   
  

    theme.addEventListener("click", function(){
        theme.classList.toggle("light");
        if(theme.classList.contains("light")){
            body.classList.remove("dark");
            body.classList.add("light");
        }
        else{
            body.classList.remove("light");
            body.classList.add("dark");
        }
      
    });

    let info = document.getElementById("info");
    info.style.setProperty("display", "none");
    let nackademin = document.getElementById("nackademin");
    let content = document.getElementById("id_content");  
    let sidebar = document.getElementById("sidebar");
    
    nackademin.addEventListener("click", function(){
    console.log("hej");
     content.style.setProperty("display", "none");
     sidebar.style.setProperty("display", "none");
     info.style.removeProperty("display", "none");
        
    });

    let back = document.getElementById("back");
    
    back.addEventListener("click", function(){
        info.style.setProperty("display", "none");
        sidebar.style.removeProperty("display", "none");
        content.style.removeProperty("display", "none");
    });

    function timeOutRemoveClose(){
        setTimeout(function() {
            portfolio_content.classList.remove("close");
            music_content.classList.remove("close");
            cv_content.classList.remove("close");
            about_content.classList.remove("close");
           
        }, 1000);
    }

    let contact = document.getElementById("contact");
    
    contact.addEventListener("click", function(){
        copyToClipboard("kickihalmos@gmail.com");
    });

    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        dummy.value = text;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    

});