import './styles.css';
import * as Generator from './domGenerator.js';

//Initialize on home screen
Generator.generateInitial();
Generator.generateHome();

//Event Listeners
const [homeButton, menuButton, contactButton] = document.querySelectorAll('button');
//Home tab
homeButton.addEventListener('click', ()=>{
    Generator.clear();
    Generator.generateHome();
});
//Menu tab
menuButton.addEventListener('click', ()=>{
    Generator.clear();
    Generator.generateMenu();
});
//Contact tab
contactButton.addEventListener('click', ()=>{
    Generator.clear();
});
