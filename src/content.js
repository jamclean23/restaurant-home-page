//Text content for populating webpage

import eggsBenedictImg from './eggs-benedict.jpg';
import frittataImg from './frittata.jpeg';
import gnocchiImg from './gnocchi.jpeg';
import chickenImg from './chicken.jpeg';
import manhattanImg from './manhattan.jpeg';
import muleImg from './mule.jpeg';
import pieImg from './pie.jpeg';
import piperadeImg from './piperade.jpeg';
import boulevardierImg from './boulevardier.jpeg';
import logo from './logo.png';

let restaurantDescription = "Come to this restaurant to enjoy the best in farm-to-table cuisine and atmosphere. With a wide selection of delectable dishes and a creative twist on traditional French cooking, this is the place for any occasion. From weddings to graduations, from proposals to anniversaries, this restaurant is perfect for any life event. Treat yourself in the near future! The dining room is both relaxed and intimate, so you can feel comfortable enjoying your meal.";
let testamonials = [
    {
        review: "This restaurant is amazing. Always clean, the staff is always smiling and the food is second to none. The menu has a large selection, with lots of creative and fine dining options. It specializes in fusion cuisine which I love because of it's creativity and different flavors.",
        author: "Augustine Barnhart",
    },
    {
        review: "I absolutely love this restaurant. I have never had anything so delicious before in my life and I will be back again and again. The food is made of all locally sourced ingredients, the staff are friendly and the atmosphere is one that makes you want to linger. A truly delightful experience!",
        author: "Kasandra Lumpkin",
    }
];
let menuContent = [
    {
        title: "Brunch",
        menu: {
            eggsBenedict: {
                title: "Eggs Benedict",
                description: "Eggs Benedict is one of the most iconic breakfast dishes in the world. A dish so simple yet so elegant and tasty. We've taken the classic dish and whipped it up into an amazing meal. Our Hollandaise sauce is made with top quality butter and served with a side of ham and toasted English muffins. Trust us, you'll love this meal!",
                image: eggsBenedictImg,
            },
            frittata: {
                title: "Asparagus Frittata",
                description: "Our frittata is the perfect breakfast or brunch dish! Served hot and fresh from the cast iron, this fluffy and layered frittata is packed full of asparagus and aged cheddar for a flavor you will love.",
                image: frittataImg,
            },
            piperade: {
                title: "Pancetta & pepper piperade",
                description: "Ancetta & Pepper Piperade takes eggs to a whole new level. Cracked into a rich and smoky tomato and pancetta sauce, this traditional Basque-inspired dish is perfect for brunch or a midweek meal. This is a fantastic twist on a classic breakfast favorite.",
                image: piperadeImg,
            }
        }
    },
    {
        title: "Dinner",
        menu: {
            raisedPie: {
                title: "Ham and Cider Raised Pie",
                description: "This pie is full of flavor, and perfect for a hearty meal. The flaky crust is filled with shredded cider ham, mushrooms, and sausage, and served with a side of slaw.",
                image: pieImg,
            },
            mustardChicken: {
                title: "Mustard Stuffed Chicken",
                description: "This dish is a roasted chicken breast that is stuffed with a delicious mixture of mustard, cheddar cheese, and mozzarella cheese. The chicken is then wrapped in bacon to give it an extra layer of flavor and juiciness.",
                image: chickenImg,
            },
            gnocchi: {
                title: "Gnocchi Bowl",
                description: "This pot of creamy gnocchi is just the dish to cozy up to. Crispy bacon, wilted spinach and Creme de Saint Agur cheese lend their delicious flavors to this Italian favorite, while a bechamel sauce pulls it all together.",
                image: gnocchiImg,
            },
        },
    },
    {
        title: "Cocktail Menu",
        menu: {
            manhattan: {
                title: "Manhattan",
                description: "A Manhattan is a classic cocktail that is perfect for any occasion. The whiskey, sweet vermouth, and bitters combine to create a delicious and smooth drink that everyone will love.",
                image: manhattanImg,
            },
            moscowMule: {
                title: "Moscow Mule",
                description: "The Moscow mule is a popular cocktail made with vodka, ginger beer, and lime juice. This cocktail is served in a copper mug, which takes on the cold temperature of the liquid.",
                image: muleImg,
            },
            boulevardier: {
                title: "Boulevardier",
                description: "The Boulevardier cocktail is an alcoholic drink composed of whiskey, sweet vermouth, and Campari. It's a smooth and easy drinking cocktail that will please any whiskey lover. its perfect for those long summer evenings when you want something a bit more indulgent",
                image: boulevardierImg,
            }
        },
    },
]

let contacts = [
    {
        name: "Irving Snider",
        position: "Chef",
        number: "(111)111-1111",
        email: "snideri@notreal.com",
        image: logo,
    },
    {
        name: "Norma Park",
        position: "Manager",
        number: "(222)222-2222",
        email: "parkn@notreal.com",
        image: logo,
    },
    {
        name: "Marjorie May",
        position: "Dishwasher",
        number: "(333)333-3333",
        email: "maym@notreal.com",
        image: logo,
    },
]

export {
    restaurantDescription,
    testamonials,
    menuContent,
    contacts
}