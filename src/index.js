import './styles.css';

//Add the header
const header = document.createElement('header');
header.innerText = "A Random Restaurant";
document.body.appendChild(header);

//Add the navBar and attach buttons
const navBar = document.createElement('nav');
document.body.appendChild(navBar);
for (let i = 0; i < 3; i++) {
    const tab = document.createElement('button');
    navBar.appendChild(tab);

}
//Add text to the tab buttons
const tabButtons = navBar.querySelectorAll('button');
tabButtons[0].innerText = "Home";
tabButtons[1].innerText = "Menu";
tabButtons[2].innerText = "Contact Us";

//Add the main
const main = document.createElement('main');
document.body.appendChild(main);
