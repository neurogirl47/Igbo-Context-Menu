'use strict'

let myform = document.getElementById("myform");
let menulist = document.getElementById("menulist");
let menuobj = {
    'a' : ['a', 'á', 'à', 'ā', 'A', 'Á', 'À', 'Ā'],
    'e' : ['e', 'é', 'è', 'ē', 'E', 'É', 'È', 'Ē'],
    'i' : ['i', 'í', 'ì', 'ī', 'ị́', 'ị̀', 'I', 'Í', 'Ì', 'Ī', 'Ị́', 'Ị̀'],
    'o' : ['o', 'ó', 'ò', 'ō', 'ọ́', 'ọ̀', 'O', 'Ó', 'Ò', 'Ō', 'Ọ́', 'Ọ̀'],
    'u' : ['u', 'ú', 'ù', 'ū', 'ụ́', 'ụ̀', 'U', 'Ú', 'Ù', 'Ū', 'Ụ́', 'Ụ̀'],
    'm' : ['m', 'ḿ', 'm̀', 'M', 'Ḿ', 'M̀'],
    'n' : ['n', 'ń', 'ǹ', 'N', 'Ń', 'Ǹ']
}
let keyArr = ['a', 'e', 'i', 'o', 'u', 'm', 'n'];

function isVowel(userKey){
    if(userKey){
            for(var menukeys in menuobj){
                if(menukeys === userKey.toLowerCase()){
                    console.log("You typed " + userKey.toLowerCase());
                    return true;
                }
            }
        }else{
            console.log("You typed something else");
            return false;
        }
 }


 function createmenu(event){
    var userKey = event.key;
    if(isVowel(userKey)){
        var arr = menuobj[userKey.toLowerCase()];
    var menulist = document.getElementById("menulist");
    var li = document.createElement("li");
    var textnode = "";
        for(var i=0; i<arr.length; i++){
            textnode = document.createTextNode(arr[i]);
            li.appendChild(textnode);
            menulist.appendChild(li);
            li = document.createElement("li");
        }
    }else if(isVowel(false)){
        console.log("Not menu-worthy! You typed " + userKey);
     }
    li = "";
}


myform.addEventListener("keypress", createmenu);
