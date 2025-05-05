export const generateThursdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const thursday = document.createElement('div');
    thursday.classList.add('thursday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    thursday.appendChild(cardTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionThursday`);
        cardTheme.appendChild(position);
    };

    const thursdayTag = document.createElement('div');
    thursdayTag.classList.add('thursday-tag');
    thursdayTag.textContent = 'thursday';
    thursday.appendChild(thursdayTag);
    menu.appendChild(thursday);
    const positions = document.querySelectorAll('.positionThursday');
    positions[0].textContent = 'breakfast: Avocado & Egg Toast';
    positions[1].textContent = 'Soup: Cauliflower Cream';
    positions[2].textContent = 'Main: Baked Salmon & Mash';
    positions[3].textContent = 'Salad: Cucumber & Radish';
    positions[4].textContent = 'Dessert: Cinnamon Bun';
    positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn thursday';
}