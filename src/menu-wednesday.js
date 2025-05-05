export const generateWednesdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const wednesday = document.createElement('div');
    wednesday.classList.add('wednesday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    wednesday.appendChild(cardTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionWednesday`);
        cardTheme.appendChild(position);
    };

    const wednesdayTag = document.createElement('div');
    wednesdayTag.classList.add('wednesday-tag');
    wednesdayTag.textContent = 'wednesday';
    wednesday.appendChild(wednesdayTag);
    menu.appendChild(wednesday);
    const positions = document.querySelectorAll('.positionWednesday');
    positions[0].textContent = 'breakfast: Avocado & Egg Toast';
    positions[1].textContent = 'Soup: Cauliflower Cream';
    positions[2].textContent = 'Main: Baked Salmon & Mash';
    positions[3].textContent = 'Salad: Cucumber & Radish';
    positions[4].textContent = 'Dessert: Cinnamon Bun';
    positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn Tea';
}