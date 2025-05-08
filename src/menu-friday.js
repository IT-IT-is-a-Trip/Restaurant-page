export const generateFridayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const friday = document.createElement('div');
    friday.classList.add('friday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    friday.appendChild(cardTheme);
    const positionsTheme = document.createElement('div');
    positionsTheme.classList.add('positions-theme');
    cardTheme.appendChild(positionsTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionFriday`);
        positionsTheme.appendChild(position);
    };

    const fridayTag = document.createElement('div');
    fridayTag.classList.add('friday-tag');
    friday.classList.add('day-menu');
    fridayTag.textContent = 'friday';
    friday.appendChild(fridayTag);
    menu.appendChild(friday);
    const positions = document.querySelectorAll('.positionFriday');
    positions[0].textContent = 'breakfast: Cottage & Berries';
    positions[1].textContent = 'Soup: Smoked Fish';
    positions[2].textContent = 'Main: Reindeer Stew (or Beef)';
    positions[3].textContent = 'Salad: Cabbage & Apple';
    positions[4].textContent = 'Dessert: emolina & Cloudberry';
    positions[5].textContent = 'Drink: Black Coffee / Rosehip Tea';
}