export const generateTuesdayMenu = () => {
    const menu = document.querySelector('.menu-container');

    const tuesday = document.createElement('div');
    tuesday.classList.add('tuesday');
    const cardTheme = document.createElement('div')
    cardTheme.classList.add('card-theme');
    tuesday.appendChild(cardTheme);
    const positionsTheme = document.createElement('div');
    positionsTheme.classList.add('positions-theme');
    cardTheme.appendChild(positionsTheme);

    for (let i = 0; i < 6; i++) {
        const position = document.createElement('div');
        position.classList.add(`positionTuesday`);
        positionsTheme.appendChild(position);
    };

    const tuesdayTag = document.createElement('div');
    tuesdayTag.classList.add('tuesday-tag');
    tuesday.classList.add('day-menu');
    tuesdayTag.textContent = 'tuesday';
    tuesday.appendChild(tuesdayTag);
    menu.appendChild(tuesday);
    const positions = document.querySelectorAll('.positionTuesday');
    positions[0].textContent = 'breakfast: Rye & Chanterelles';
    positions[1].textContent = 'Soup: Sorrel & Egg';
    positions[2].textContent = 'Main: Pork & Lingonberry';
    positions[3].textContent = 'Salad: Beet & Goat Cheese';
    positions[4].textContent = 'Dessert: Cranberry Mousse';
    positions[5].textContent = 'Drink: Latte / Hot Cider';
}