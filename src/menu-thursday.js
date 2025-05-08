export const generateThursdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const thursday = document.createElement('div');
    thursday.classList.add('thursday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    thursday.appendChild(cardTheme);
    const positionsTheme = document.createElement('div');
    positionsTheme.classList.add('positions-theme');
    cardTheme.appendChild(positionsTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionThursday`);
        positionsTheme.appendChild(position);
    };

    const thursdayTag = document.createElement('div');
    thursdayTag.classList.add('thursday-tag');
    thursday.classList.add('day-menu');
    thursdayTag.textContent = 'thursday';
    thursday.appendChild(thursdayTag);
    menu.appendChild(thursday);
    const positions = document.querySelectorAll('.positionThursday');
    positions[0].textContent = 'breakfast: Ghee Eggs & Toast';
    positions[1].textContent = 'Soup: Pumpkin & Ginger';
    positions[2].textContent = 'Main: Chicken & Celeriac';
    positions[3].textContent = 'Salad: Carrot & Orange';
    positions[4].textContent = 'Dessert: Apple Pie';
    positions[5].textContent = 'Drink: Cappuccino / Mint Tea';
}