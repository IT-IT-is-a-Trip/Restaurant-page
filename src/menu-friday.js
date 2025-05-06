export const generateFridayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const friday = document.createElement('div');
    friday.classList.add('friday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    friday.appendChild(cardTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionFriday`);
        cardTheme.appendChild(position);
    };

    const fridayTag = document.createElement('div');
    fridayTag.classList.add('friday-tag');
    friday.classList.add('day-menu');
    fridayTag.textContent = 'friday';
    friday.appendChild(fridayTag);
    menu.appendChild(friday);
    const positions = document.querySelectorAll('.positionFriday');
    positions[0].textContent = 'breakfast: Avocado & Egg Toast';
    positions[1].textContent = 'Soup: Cauliflower Cream';
    positions[2].textContent = 'Main: Baked Salmon & Mash';
    positions[3].textContent = 'Salad: Cucumber & Radish';
    positions[4].textContent = 'Dessert: Cinnamon Bun';
    positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn Tea';
}