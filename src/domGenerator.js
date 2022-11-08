//Javascript for generating DOM 

import * as Content from './content.js';
import logoImg from './logo.png';

function generateInitial() {
    //Add the header
    const header = document.createElement('header');
    document.body.appendChild(header);

    //Add header text
    const text = document.createElement('h1');
    text.innerText = "A Random Restaurant";
    header.appendChild(text);

    //Add the logo
    const logo = document.createElement('img');
    logo.src = logoImg;
    text.appendChild(logo);

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
            //populate title cards
            if (j == 0) {
                article.classList.add('title');
                article.innerText = Content.menuContent[i].title;
            //populate menu item cards
            } else {
                article.classList.add('content');
                //iterate through menu items for each meal
                for (const item in Content.menuContent[i].menu){
                    const menuItem = document.createElement('article');
                    //title of menu item
                    const h3 = document.createElement('h3');
                    h3.innerText = Content.menuContent[i].menu[item].title;
                    menuItem.appendChild(h3);
                    //image of dish
                    const image = document.createElement("img");
                    image.src = Content.menuContent[i].menu[item].image;
                    menuItem.appendChild(image);
                    //description of dish
                    const p = document.createElement('p');
                    p.innerText = Content.menuContent[i].menu[item].description;
                    menuItem.appendChild(p);
                    //Create the card
                    article.appendChild(menuItem);
                }

            }
        }
    }
}

function generateContactUs() {
    const main = addMain("contactUs");
    for (let i = 0; i < Content.contacts.length; i++) {

        const article = document.createElement('article');

        const image = document.createElement('img');
        image.src = Content.contacts[i].image;
        article.appendChild(image);

        const div = document.createElement('div');
        article.appendChild(div);

        const name = document.createElement('h2');
        name.innerText = Content.contacts[i].name;
        div.appendChild(name);

        const position = document.createElement('h3');
        position.innerText = Content.contacts[i].position;
        div.appendChild(position);

        const ul = document.createElement('ul');
        div.appendChild(ul);
        
        const number = document.createElement('li');
        number.innerText = "# " + Content.contacts[i].number;
        ul.appendChild(number);

        const email = document.createElement('li');
        email.innerText = Content.contacts[i].email;
        ul.appendChild(email);

        main.appendChild(article);
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
    generateContactUs,
    clear
}