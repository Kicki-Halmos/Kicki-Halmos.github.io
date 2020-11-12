class Functionality{

    //function changing theme
    theme(){
        let body = document.getElementById("body");
        if(body.classList.contains("light")){
            body.classList.remove("light");
            body.classList.add("dark");
        }
        else{
            body.classList.remove("dark");
            body.classList.add("light");
        }
    }

    //function copy text to clipboard
    copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        dummy.value = text;
        document.body.appendChild(dummy);
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }
    
}