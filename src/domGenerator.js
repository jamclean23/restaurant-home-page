//Javascript for generating DOM 

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

function generateHome () {
    //Add the main
    const main = document.createElement('main');
    document.body.appendChild(main);
    main.classList.add('home');
    for (let i = 0; i < 3; i++) {
        const article = document.createElement('article');
        main.appendChild(article);
    }

    //Generate articles and add text
    const articles = main.querySelectorAll('article');
    articles[0].innerText = "Here's a desription of the restaurant";
    articles[1].innerText = "This is a testamonial. Wow! So good!";
    articles[2].innerText = "And here's a second opinion. Loved it!"

    
}

export {
    generateInitial,
    generateHome
}