//Javascript for generating DOM 

import * as Content from './content.js';

function generateInitial() {
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

}

function generateHome() {
    //Add the main
    const main = addMain("home");
    
    for (let i = 0; i < 3; i++) {
        const article = document.createElement('article');
        main.appendChild(article);
        if (i == 0) {
            const h2 = document.createElement('h2');
            article.appendChild(h2);
            h2.innerText = "A Random Restaurant";
            
            const p = document.createElement('p');
            article.appendChild(p);
        } else {
            for (let j = 0; j < 2; j++) {
                const p = document.createElement('p');
                article.appendChild(p);
            }
        }
    }

    //Add text to articles-----

    const articles = main.querySelectorAll('article');

    articles.forEach((article, index)=>{
        //Restaurant description
        if (index == 0) {
            article.querySelector('p').innerText = Content.restaurantDescription;
        //Testimonials
        } else {
            article.querySelectorAll('p')[0].innerText = '"' + Content.testamonials[index-1].review + '"';
            article.querySelectorAll('p')[1].innerText = "- " + Content.testamonials[index-1].author;
        }
    });

    //-------------------------   
}

function generateMenu() {
    const main = addMain("menu");
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 2; j++) {
            const article = document.createElement('article');
            main.appendChild(article);
        }
    }
}

function clear() {
    const main = document.querySelector('main');
    if (main) {
        document.body.removeChild(main);
    }
}

function addMain(className) {
    const main = document.createElement('main');
    main.classList.add(className);
    document.body.appendChild(main);
    return main;
}

export {
    generateInitial,
    generateHome,
    generateMenu,
    clear
}