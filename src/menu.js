import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addMenu = () => {
    const generateMenuPage = () => {
        const content = document.getElementById('content');
        const menu = document.createElement('div');
        menu.textContent = 'Main: Baked Salmon & Mash';
        
        clearContent();
        content.appendChild(menu);
    }
    buttons.menu.addEventListener('click', generateMenuPage);
}
