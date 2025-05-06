export const generateSaturdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const saturday = document.createElement('div');
    saturday.classList.add('saturday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    saturday.appendChild(cardTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionSaturday`);
        cardTheme.appendChild(position);
    };

    const saturdayTag = document.createElement('div');
    saturdayTag.classList.add('saturday-tag');
    saturday.classList.add('day-menu');
    saturdayTag.textContent = 'saturday';
    saturday.appendChild(saturdayTag);
    menu.appendChild(saturday);
    const positions = document.querySelectorAll('.positionSaturday');
    positions[0].textContent = 'breakfast: Avocado & Egg Toast';
    positions[1].textContent = 'Soup: Cauliflower Cream';
    positions[2].textContent = 'Main: Baked Salmon & Mash';
    positions[3].textContent = 'Salad: Cucumber & Radish';
    positions[4].textContent = 'Dessert: Cinnamon Bun';
    positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn saturday';
}