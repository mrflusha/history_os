/*
mrflusha
*/

//Надо онбординг вминяемый





//Код приложения в душе не ебу как без базы данных это сделать на js всё писать сколько памяти уйдёт. 


const operatingSystemMenuButtons = document.getElementsByClassName("operatingSystemClass")
const operatingSystemMenuSecondary = document.getElementsByClassName("operatingSystemMenuSecondary")
const osBasedSystem = ["unixBased", "LinuxBased", "", "dos_based"]


//похуй кнопки подключаем на прямую
const unix = document.getElementById("unix");
const linux = document.getElementById("Linux");//linix
const dos = document.getElementById("dosMenu");
const arch = document.getElementById("Arch");
const debian = document.getElementById("debian");
const russianClosedSource = document.getElementById("russianClosedSource");









/*Работает похуй*/


for(let i = 0; i <= 3; i++){
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

	for(let i = 0; i <= 3; i++){
		operatingSystemMenuButtons[i].style.display = 'none'
	}


	//убираем неактивные пока элементы
	document.getElementById("fedora").style.display = "none";
	document.getElementById("russianClosedSource").style.display = "none";





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

displayContext = () => {
	bsd.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "BSD"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[3]}</div>`)

	}
	unix.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "UNIX"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[0]}</div>`)

	}	
	linux.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "Linux"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[1]}</div>`)

	}	
	debian.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "debian"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[4]}</div>`)

	}	
	arch.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "Arch"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[5]}</div>`)

	}	
	dos.onclick = () => {
		document.getElementById("menu").style.display = "none";
		document.getElementById("window_about").style.display = "flex";
		document.getElementById("infoTitle").innerText = "dos"
		document.getElementById("blockOfText").insertAdjacentHTML("afterend", `<div id = "bodyText">${osHistoryLinks[2]}</div>`)

	}

	document.getElementById("backToMenuButton").onclick = () => {
		document.getElementById("menu").style.display = "flex";
		document.getElementById("window_about").style.display = "none";
		document.getElementById("bodyText").remove()	
	}
}


displayContext()