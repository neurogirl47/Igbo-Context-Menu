let myform = document.getElementById("myform");
let menuobj = {
    'a' : ['a', 'A']
}

function getKey(event){
    var mykey = event.key;
    console.log('Your key was ' + mykey);
}

myform.addEventListener("keypress", getKey);
