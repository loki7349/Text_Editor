let optionsButtons = document.querySelectorAll(".option-button");
let advanceOptionButtons = document.querySelectorAll(".adv-option-button");

let fontName = document.getElementById("fontName");
let fontSizeRef = document.getElementById("fontSize");
let writingArea = document.getElementById("text-input")
let linkButton = document.getElementById("createLink");
let alignButtons = document.querySelectorAll(".align");
let spacingButton = document.querySelectorAll(".spacing");
let formatButtons = document.querySelectorAll(".format");
let scriptButtons = document.querySelectorAll(".script");

let fontList = [
    "Arial", 
    "Verdana", 
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "cursive",
];

const initializer = () =>{
    highlighter(alignButtons, true);
    highlighter(spacingButton, true);
    highlighter(formatButtons, false);
    highlighter(scriptButtons, true);
}

const highlighter = (className, needsRemoval) => {
    className.forEach((button) => {
        button.addEventListener("click",()=> {
            if(needsRemoval){
                let alreadyActive = false;
                if(button.classList.contains("active")){
                    alreadyActive = true;
                }
    
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add("active");
                }
            }
            else{
                button.classList.toggle("active");
            }
        });
    });
};

const highlighterRemover = (className) => {
    className.forEach((button) =>{
        button.classList.remove("active");
    })
}

window.onload = initializer();