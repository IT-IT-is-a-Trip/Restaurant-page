import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addContacts = () => {
    const generateContactsPage = () => {
        const content = document.getElementById('content');
        const contacts = document.createElement('div');
        contacts.textContent = 'Eldfjallgata 17, 510 Hólmavík, Iceland';
        clearContent();
        content.appendChild(contacts);
    }
    buttons.contacts.addEventListener('click', generateContactsPage)
    }