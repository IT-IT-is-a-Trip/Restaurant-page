export const generateWednesdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const wednesday = document.createElement('div');
    wednesday.classList.add('wednesday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    wednesday.appendChild(cardTheme);
    const positionsTheme = document.createElement('div');
    positionsTheme.classList.add('positions-theme');
    cardTheme.appendChild(positionsTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionWednesday`);
        positionsTheme.appendChild(position);
    };

    const wednesdayTag = document.createElement('div');
    wednesdayTag.classList.add('wednesday-tag');
    wednesday.classList.add('day-menu');
    wednesdayTag.textContent = 'wednesday';
    wednesday.appendChild(wednesdayTag);
    menu.appendChild(wednesday);
    const positions = document.querySelectorAll('.positionWednesday');
    positions[0].textContent = 'breakfast: Egg & Herring';
    positions[1].textContent = 'Soup: Creamy Fish';
    positions[2].textContent = 'Main: Cod Balls & Potatoes';
    positions[3].textContent = 'Salad: Kale & Apple';
    positions[4].textContent = 'Dessert: Sea Salt Brownie';
    positions[5].textContent = 'Drink: Espresso / Black Tea';
}