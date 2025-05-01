import { clearContent } from "./clear";
import { buttons } from "./buttons";
import valhallaImg from './valhallaImage.jpg'
export const addContent = () => {
    const generateHomePage = () => {
        const content = document.getElementById('content');
        
        const image = document.createElement('img');
        image.src = valhallaImg;
        image.classList.add('valhalla')
        clearContent();
        // content.appendChild(image);
    }
    buttons.home.addEventListener('click', generateHomePage)
}
