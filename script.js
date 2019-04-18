'use strict'

let myform = document.getElementById("myform");
let menulist = document.getElementById("menulist");
let menuobj = {
    'a' : ['a', 'á', 'à', 'ā', 'A', 'Á', 'À', 'Ā']
}

function isVowel(userKey){
    if(userKey.toLowerCase() === 'a'){
        console.log("You typed a");
        return true;
    }else{
        console.log("You typed something else");
        return false;
    }
}

 function createmenu(event){
    var userKey = event.key;
    if(isVowel(userKey)){
        console.log("here is your menu " + menuobj.a);
    }else{
        console.log("Not menu-worthy!");
    }

}


myform.addEventListener("keypress", createmenu);
