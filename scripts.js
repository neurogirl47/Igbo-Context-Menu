//our target, where the events occur
const message = document.getElementById("message");
const menuDiv = document.createElement('div');
menuDiv.setAttribute('class', 'menu-div')
//constructor class for calling a letter key and its menu
class Letter{
	constructor(value, menu){
		this.value = value;
		this.menu = [];
	}

	getMenu(){
		return this.menu;
	}

}

//all of the menus in an object
const menus = {
	"a" : ["á","à","ā"],
	"A" : ["Á", "À", "Ā"]
}

let getKey = function(myKey){
	switch(myKey.key){
		case "a":
		return "a";
		break;
		case "A":
		return "A";
		break;
		default:
		return null;

	}
}

class Menu{
	constructor(userLetter, itemsArr){
		this.userLetter = userLetter;
		this.itemsArr = [];
	}

 getMenuItems = function(itemsArr){
			let mi = "";
			for(let i=0; i<itemsArr.length; i++){
				mi = mi + "<li>" + itemsArr[i] + "</li>";
		}
			return mi;
		}

	setMenuDiv = function(menuItems, myDiv) {
		myDiv.innerHTML = "<ul style = 'text-decoration: none, display: block'>"+ menuItems + "</ul>";
		
	}
}
/*--------------------------------------*/

//running the program
let text = "";
let iArr = [];
let userKey = message.addEventListener("keydown", getKey);
if(userKey!==null){
	let letter = new Letter(userKey, menus.userKey);
	let menu = new Menu(letter.value, letter.menu);
	iArr = menu.itemsArr;
	menu.setMenuDiv(menu.getMenuItems(iArr), menuDiv);
	menuDiv.addEventListener("click", function(item){
		text = item.innerHTML;
		message.value+= text;

	});

}

