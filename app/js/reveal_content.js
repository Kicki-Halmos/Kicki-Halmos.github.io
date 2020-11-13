class Reveal_content{

    //function collapse-accordion
    open_accordion(title){
        title.classList.toggle("open");
    }

    // function collapse-accortion mobile version
    open_accordion_mobile(title, content_1, content_2, content_3){
        title.classList.toggle("open");
        content_1.classList.remove("open");
        content_2.classList.remove("open");
        content_3.classList.remove("open");
    }

    // function for hide and reveal info about education
    display_none(set_1, set_2, remove_1, remove_2, remove_3){
        set_1.style.setProperty("display", "none");
        set_2.style.setProperty("display", "none");

        remove_1.style.removeProperty("display", "none");
        remove_2.style.removeProperty("display", "none");
        remove_3.style.removeProperty("display", "none");
        
    }

    display(set_1, set_2, set_3, set_4, set_5, remove_1, remove_2){

        set_1.style.setProperty("display", "none");
        set_2.style.setProperty("display", "none");
        set_3.style.setProperty("display", "none");
        set_4.style.setProperty("display", "none");
        set_5.style.setProperty("display", "none");

        remove_1.style.removeProperty("display", "none");
        remove_2.style.removeProperty("display", "none");
        
    }

}