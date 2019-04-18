'use strict'

let myform = document.getElementById("myform");
let menulist = document.getElementById("menulist");
let menuobj = {
    'a' : ['a', 'á', 'à', 'ā', 'A', 'Á', 'À', 'Ā']
}

function isVowel(userKey){
    if(userKey){
        if(userKey.toLowerCase() === 'a'){
            console.log("You typed a");
            return true;
        }else{
            console.log("You typed something else");
            return false;
    }
}else{
    return false;
}
}

 function createmenu(event){
    var userKey = event.key;
    var arr = menuobj.a;
    var menulist = document.getElementById("menulist");
    var li = document.createElement("li");
    var textnode = "";
    if(isVowel(userKey)){
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
