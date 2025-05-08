export const generateSaturdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const saturday = document.createElement('div');
    saturday.classList.add('saturday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    saturday.appendChild(cardTheme);
    const positionsTheme = document.createElement('div');
    positionsTheme.classList.add('positions-theme');
    cardTheme.appendChild(positionsTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionSaturday`);
        positionsTheme.appendChild(position);
    };

    const saturdayTag = document.createElement('div');
    saturdayTag.classList.add('saturday-tag');
    saturday.classList.add('day-menu');
    saturdayTag.textContent = 'saturday';
    saturday.appendChild(saturdayTag);
    menu.appendChild(saturday);
    const positions = document.querySelectorAll('.positionSaturday');
    positions[0].textContent = 'breakfast: Croissant & Jam';
    positions[1].textContent = 'Soup: Pea & Thyme';
    positions[2].textContent = 'Main: Trout & Potatoes';
    positions[3].textContent = 'Salad: Arugula & Yogurt';
    positions[4].textContent = 'Dessert: Vanilla Pudding';
    positions[5].textContent = 'Drink: Raf Coffee / Iced Rosemary Tea';
}