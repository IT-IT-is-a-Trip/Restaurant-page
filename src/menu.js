import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addMenu = () => {
    const generateMenuPage = () => {
        const content = document.getElementById('content');
        const menu = document.createElement('div');
        menu.classList.add('menu-container');
        
        const monday = document.createElement('div')
        monday.classList.add('monday');
        const cardTheme = document.createElement('div')
        cardTheme.classList.add('card-theme');
        monday.appendChild(cardTheme);
        for (let i = 0; i<6; i++) {
            const position = document.createElement('div');
            position.classList.add(`position`);
            cardTheme.appendChild(position);
        }
        menu.textContent = 'Main: Baked Salmon & Mash';
        clearContent();
        menu.appendChild(monday);
        content.appendChild(menu);
        const positions = document.querySelectorAll('.position');
        positions[0].textContent = 'breakfast: Avocado & Egg Toast';
        positions[1].textContent = 'Soup: Cauliflower Cream';
        positions[2].textContent = 'Main: Baked Salmon & Mash';
        positions[3].textContent = 'Salad: Cucumber & Radish';
        positions[4].textContent = 'Dessert: Cinnamon Bun';
        positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn Tea';
    }
    buttons.menu.addEventListener('click', generateMenuPage);
}
