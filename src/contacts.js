import { clearContent } from "./clear";
import { buttons } from "./buttons";
export const addContacts = () => {
    const generateContactsPage = () => {
        const content = document.getElementById('content');
        const contacts = document.createElement('div');
        contacts.classList.add('contats-container');

        //socials card block:
        const socials = document.createElement('div');
        socials.classList.add('socials-container');
        const socialsTheme = document.createElement('div');
        socialsTheme.classList.add('socials-theme');

        contacts.appendChild(socials);
        socials.appendChild(socialsTheme);


        //inst block:
        const instagramContainer = document.createElement('div');
        instagramContainer.classList.add('instagram-container');
        const instagramTextContainer = document.createElement('div');
        instagramTextContainer.classList.add('instagram-text-container');
        const instagramText = document.createElement('div');
        instagramText.classList.add('instagram-text');
        instagramText.textContent = 'INSTAGRAM:';
        const instagramLink = document.createElement('div');
        instagramLink.classList.add('instagram-link');
        instagramLink.textContent = '@VALHALLA_555';
        const instagramLogo = document.createElement('img');
        instagramLogo.classList.add('instagram-logo');
        instagramLogo.src = '';
        //appending inst:
        instagramContainer.appendChild(instagramTextContainer);
        instagramContainer.appendChild(instagramLogo);
        instagramTextContainer.appendChild(instagramText);
        instagramTextContainer.appendChild(instagramLink);

        socialsTheme.appendChild(instagramContainer);


        //facebook block:
        const facebookContainer = document.createElement('div');
        facebookContainer.classList.add('facebook-container');
        const facebookTextContainer = document.createElement('div');
        facebookTextContainer.classList.add('facebook-text-container');
        const facebookText = document.createElement('div');
        facebookText.classList.add('facebook-text');
        facebookText.textContent = 'Facebook:';
        const facebookLink = document.createElement('div');
        facebookLink.classList.add('facebook-link');
        facebookLink.textContent = '@VALHALLA_555';
        const facebookLogo = document.createElement('img');
        facebookLogo.classList.add('facebook-logo');
        facebookLogo.src = '';
        //appending facebook:
        facebookContainer.appendChild(facebookTextContainer);
        facebookContainer.appendChild(facebookLogo);
        facebookTextContainer.appendChild(facebookText);
        facebookTextContainer.appendChild(facebookLink);

        socialsTheme.appendChild(facebookContainer);


        //X block:
        const xTwitterContainer = document.createElement('div');
        xTwitterContainer.classList.add('x-container');
        const xTwitterTextContainer = document.createElement('div');
        xTwitterTextContainer.classList.add('x-text-container');
        const xTwitterText = document.createElement('div');
        xTwitterText.classList.add('x-text');
        xTwitterText.textContent = 'X:';
        const xTwitterLink = document.createElement('div');
        xTwitterLink.classList.add('x-link');
        xTwitterLink.textContent = '@VALHALLA_555';
        const xTwitterLogo = document.createElement('img');
        xTwitterLogo.classList.add('x-logo');
        xTwitterLogo.src = '';
        //appending inst:
        xTwitterContainer.appendChild(xTwitterTextContainer);
        xTwitterContainer.appendChild(xTwitterLogo);
        xTwitterTextContainer.appendChild(xTwitterText);
        xTwitterTextContainer.appendChild(xTwitterLink);

        socialsTheme.appendChild(xTwitterContainer);


        //location block:
        const locationCardContainer = document.createElement('div');
        locationCardContainer.classList.add('location-container');
        const locationTheme = document.createElement('div');
        locationTheme.classList.add('location-theme');
        const locationsTextContainer = document.createElement('div');
        locationsTextContainer.classList.add('locations-text-container');
        const location1Text = document.createElement('div');
        location1Text.classList.add('location1');
        location1Text.textContent = 'Eldfjallgata 17, 510 Hólmavík, Iceland';
        const location2Text = document.createElement('div');
        location2Text.classList.add('location2');
        location2Text.textContent = 'Norðurtangi 3B, 510 Hólmavík, Iceland';
        const location3Text = document.createElement('div');
        location3Text.classList.add('location3');
        location3Text.textContent = 'Fjallabrekka 12, 510 Hólmavík, Iceland';

        //appending locations:
        locationCardContainer.appendChild(locationTheme);
        locationTheme.appendChild(locationsTextContainer);
        locationsTextContainer.appendChild(location1Text);
        locationsTextContainer.appendChild(location2Text);
        locationsTextContainer.appendChild(location3Text);

        contacts.appendChild(locationCardContainer);



        clearContent();
        content.appendChild(contacts);
    }
    buttons.contacts.addEventListener('click', generateContactsPage)
}