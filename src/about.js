import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addAbout = () => {
    const generateAboutPage = () => {
        const content = document.getElementById('content');
        
        const about = document.createElement('div');
        about.textContent = 'Welcome to a cozy corner of Scandinavian simplicity — a café where the aroma of freshly brewed coffee meets the warmth of hygge. We craft our menu with love, inspired by northern nature and timeless traditions. Stop by for a soulful atmosphere, pastries made from old recipes, and a cup of something truly special.'
        clearContent();
        content.appendChild(about);
    }
    buttons.about.addEventListener('click', generateAboutPage);
}