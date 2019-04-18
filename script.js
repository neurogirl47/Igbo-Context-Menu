'use strict'

let myform = document.getElementById("myform");
let menuobj = {
    'a' : ['a', 'A']
}

function getKey(event){
    var mykey = event.key;
    console.log('Your key was ' + mykey);
    isVowel(mykey);
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

myform.addEventListener("keypress", getKey);
