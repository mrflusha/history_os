/*
mrflusha
*/

//Надо онбординг вминяемый





//Код приложения в душе не ебу как без базы данных это сделать на js всё писать сколько памяти уйдёт. 


const operatingSystemMenuButtons = document.getElementsByClassName("operatingSystemClass")
const operatingSystemMenuSecondary = document.getElementsByClassName("operatingSystemMenuSecondary")
const osBasedSystem = ["unixBased", "linux_based", "dos_based"]






/*Работает похуй*/


for(let i = 0; i <= 2; i++){
	operatingSystemMenuButtons[i].onclick = () => {
		let secondMenuShowed = false;
		animateButtons(i)
		SecondaryMenuLogic(i)
	}
}



//тут хуй знает надо что то ещё


/*
hideMenuButtons = () => {
	operatingSystemMenuButtons[j].style.display = "none";


	/*
	operatingSystemMenuButtons.forEach((menuButton) => menuButton.onclick = () {
		operatingSystemMenuButtons.forEach((menuButton) => menuButton.style.display = "none");
	};

}
	*/
animateButtons = (numberOfButton) => {
			operatingSystemMenuButtons[numberOfButton].style.background = "#FFF";
			operatingSystemMenuButtons[numberOfButton].style.color = "#000";
			operatingSystemMenuButtons[numberOfButton].style.border = "1px solid #000";
			setTimeout(() => {				
					operatingSystemMenuButtons[numberOfButton].style.background = "#000"
					operatingSystemMenuButtons[numberOfButton].style.color = "#FFF";
					operatingSystemMenuButtons[numberOfButton].style.border = "none";	
			}, 200)
		}




SecondaryMenuLogic = (numberOfButton) => {

	console.log(numberOfButton)
	console.log(operatingSystemMenuSecondary[numberOfButton])
	operatingSystemMenuSecondary[numberOfButton].style.display = "flex";
	systemChoose = document.getElementsByClassName(osBasedSystem[numberOfButton])

	for(let i = 0; i <= systemChoose.length - 1; i++){
		systemChoose[i].style.display = "flex";
	}

	for(let i = 0; i <= 2; i++){
		operatingSystemMenuButtons[i].style.display = 'none'
	}

	//backbuttonlogic
	systemChoose[systemChoose.length - 1].insertAdjacentHTML("afterend", `<div id = "backbutton">Назад</div>`)
	backButtonClick();

}



backButtonClick = () => {
	document.getElementById("backbutton").onclick = () => {
		displayButtons(operatingSystemMenuButtons,operatingSystemMenuSecondary)
	}
}



displayButtons = (menuFirstButtons, menuSecondButtons) => {
	for(let j = 0; j < menuFirstButtons.length; j++){
		menuFirstButtons[j].style.display = "flex";
	}
	for(let j = 0; j < menuSecondButtons.length; j++){
		menuSecondButtons[j].style.display = "none";
	}
	document.getElementById("backbutton").remove()
}
