export const generateTuesdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const tuesday = document.createElement('div');
    tuesday.classList.add('tuesday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    tuesday.appendChild(cardTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionTuesday`);
        cardTheme.appendChild(position);
    };

    const tuesdayTag = document.createElement('div');
    tuesdayTag.classList.add('tuesday-tag');
    tuesdayTag.textContent = 'tuesday';
    tuesday.appendChild(tuesdayTag);
    menu.appendChild(tuesday);
    const positions = document.querySelectorAll('.positionTuesday');
    positions[0].textContent = 'breakfast: Avocado & Egg Toast';
    positions[1].textContent = 'Soup: Cauliflower Cream';
    positions[2].textContent = 'Main: Baked Salmon & Mash';
    positions[3].textContent = 'Salad: Cucumber & Radish';
    positions[4].textContent = 'Dessert: Cinnamon Bun';
    positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn Tea';
}