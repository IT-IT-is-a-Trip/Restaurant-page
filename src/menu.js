import { clearContent } from "./clear";
import { buttons } from "./buttons";
import { generateTuesdayMenu } from "./menu-tuesday";
import { generateWednesdayMenu } from "./menu-wednesday";
import { generateThursdayMenu } from "./menu-thursday";
import { generateFridayMenu } from "./menu-friday";
import { generateSaturdayMenu } from "./menu-saturday";
import { todayTag } from "./menu-today";
export const addMenu = () => {
    const generateMenuPage = () => {
        const content = document.getElementById('content');
        const menu = document.createElement('div');
        menu.classList.add('menu-container');
        
        const monday = document.createElement('div');
        monday.classList.add('monday');
        monday.classList.add('day-menu');
        const cardTheme = document.createElement('div');
        const positionsTheme = document.createElement('div');
        positionsTheme.classList.add('positions-theme');
        cardTheme.classList.add('card-theme');
        monday.appendChild(cardTheme);
        cardTheme.appendChild(positionsTheme);

        for (let i = 0; i<6; i++) {
            const position = document.createElement('div');
            position.classList.add(`position`);
            positionsTheme.appendChild(position);
        };

        const mondayTag = document.createElement('div');
        mondayTag.classList.add('monday-tag');
        mondayTag.textContent = 'monday';
        monday.appendChild(mondayTag);
        clearContent();
        document.body.classList.add('toggle');
        menu.appendChild(monday);
        content.appendChild(menu);
        const positions = document.querySelectorAll('.position');
        positions[0].textContent = 'breakfast: Avocado & Egg Toast';
        positions[1].textContent = 'Soup: Cauliflower Cream';
        positions[2].textContent = 'Main: Baked Salmon & Mash';
        positions[3].textContent = 'Salad: Cucumber & Radish';
        positions[4].textContent = 'Dessert: Cinnamon Bun';
        positions[5].textContent = 'Drink: Filter Coffee / Sea Buckthorn Tea';
        generateTuesdayMenu();
        generateWednesdayMenu();
        generateThursdayMenu();
        generateFridayMenu();
        generateSaturdayMenu();

        //adding today tag:
        const days = document.querySelectorAll('.day-menu');
        const daysArray = ['sunday', ...Array.from(days)];
        const today = new Date();
        const dateNumber = today.getDay();
        const dayName = daysArray[dateNumber];
        // const dayName = daysArray[1];
        dayName.appendChild(todayTag());
    }
    buttons.menu.addEventListener('click', generateMenuPage);
}