'use strict'
let textdiv = document.getElementById("textdiv");
textdiv.contentEditable = true;
let myform = document.getElementById("myform");
let menuoption = document.getElementsByClassName("menu-option");
let menus = document.getElementById("igbo-char-menu");
let menulist = document.getElementById("menulist");
let keyArr = ['a', 'e', 'i', 'o', 'u', 'm', 'n'];
let menuVisible = false;

let menuobj = {
    'a' : ['a', 'á', 'à', 'ā', 'A', 'Á', 'À', 'Ā'],
    'e' : ['e', 'é', 'è', 'ē', 'E', 'É', 'È', 'Ē'],
    'i' : ['i', 'í', 'ì', 'ī', 'ị́', 'ị̀', 'I', 'Í', 'Ì', 'Ī', 'Ị́', 'Ị̀'],
    'o' : ['o', 'ó', 'ò', 'ō', 'ọ́', 'ọ̀', 'O', 'Ó', 'Ò', 'Ō', 'Ọ́', 'Ọ̀'],
    'u' : ['u', 'ú', 'ù', 'ū', 'ụ́', 'ụ̀', 'U', 'Ú', 'Ù', 'Ū', 'Ụ́', 'Ụ̀'],
    'm' : ['m', 'ḿ', 'm̀', 'M', 'Ḿ', 'M̀'],
    'n' : ['n', 'ń', 'ǹ', 'N', 'Ń', 'Ǹ']
}

function isVowel(event){
    var mykey = event.data;
    var menuselected = mykey.toLowerCase() + "menu";
    for(let i = 0; i<keyArr.length; i++) {
        if(mykey.toLowerCase() === keyArr[i]){
            console.log("preparing to show menu");
            toggleMenu(menuselected, "show");
        }
    }
 }

 function insertchar(event){
    var text = event.target.innerText;
    var parentmenu = (event.target.parentElement).parentElement.id;
    var parentkey = parentmenu.slice(0,1);
    console.log(parentkey + " is a " + typeof parentkey);
    textdiv.value = textdiv.value.substr(0, textdiv.value.length-1);
    textdiv.value += text;
    if(menuVisible){
        toggleMenu(parentmenu, "hide");
        menuVisible = false;
    }
}

 function toggleMenu(currentmenu, command){
    var chosenmenu = document.getElementById(currentmenu);
     if(command === "show"){
         console.log("creating menu");
         chosenmenu.style.display = "flex";
         chosenmenu.style.flexDirection = "row";
         chosenmenu.style.flexWrap = "wrap";
         chosenmenu.style.justifyContent = "center";
         menuVisible = true;
    }else if(command === "hide") {
        console.log("hiding menu");
        chosenmenu.style.display = "none";
    }
 }

 // Change to an "input" event and change the textdiv to a textarea
 //make the textarea larger

    myform.addEventListener("input", isVowel);
    
    menus.addEventListener("click", insertchar);
    