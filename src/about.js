import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addAbout = () => {
    const generateAboutPage = () => {
        const content = document.getElementById('content');
        const contentTheme = document.createElement('div');
        contentTheme.classList.add('content-theme');
        
        const aboutContainer = document.createElement('div');
        aboutContainer.classList.add('aboutContainer');
        const aboutTheme = document.createElement('div');
        aboutTheme.classList.add('aboutTheme');
        const aboutTag = document.createElement('div');
        aboutTag.textContent = 'about us';
        aboutTag.classList.add('about-tag');
        

        const aboutText = document.createElement('div');
        aboutText.classList.add('aboutText');
        aboutText.textContent = 'Welcome to a cozy corner of Scandinavian simplicity — a café where the aroma of freshly brewed coffee meets the warmth of hygge. We craft our menu with love, inspired by northern nature and timeless traditions. Stop by for a soulful atmosphere, pastries made from old recipes, and a cup of something truly special.'

        aboutContainer.appendChild(aboutTheme);
        aboutTheme.appendChild(aboutTag);
        aboutTheme.appendChild(aboutText);
        
        clearContent();
        document.body.classList.add('toggle');
        content.appendChild(contentTheme);
        contentTheme.appendChild(aboutContainer);
    }
    buttons.about.addEventListener('click', generateAboutPage);
}