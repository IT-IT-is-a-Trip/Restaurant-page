import { clearContent } from "./clear";
import { buttons } from "./buttons";
import instLogo from './instagram-logo.png';
import faceLogo from './facebook-logo.png';
import xLogo from './x-logo.png';
export const addContacts = () => {
    const generateContactsPage = () => {
        const content = document.getElementById('content');
        const contacts = document.createElement('div');
        contacts.classList.add('contacts-container');

        //socials card block:
        const socials = document.createElement('div');
        socials.classList.add('socials-container');
        const socialsTheme = document.createElement('div');
        const socialsTag = document.createElement('div');
        socialsTag.classList.add('socials-tag');
        socialsTag.textContent = 'socials';
        socialsTheme.classList.add('socials-theme');
        const socialsTextTheme = document.createElement('div');
        socialsTextTheme.classList.add('socials-text-theme');

        contacts.appendChild(socials);
        socials.appendChild(socialsTheme);
        socialsTheme.appendChild(socialsTag);
        socialsTheme.appendChild(socialsTextTheme);



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
        instagramLogo.src = instLogo;
        //appending inst:
        instagramContainer.appendChild(instagramTextContainer);
        instagramContainer.appendChild(instagramLogo);
        instagramTextContainer.appendChild(instagramText);
        instagramTextContainer.appendChild(instagramLink);

        socialsTextTheme.appendChild(instagramContainer);


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
        facebookLogo.src = faceLogo;
        //appending facebook:
        facebookContainer.appendChild(facebookTextContainer);
        facebookContainer.appendChild(facebookLogo);
        facebookTextContainer.appendChild(facebookText);
        facebookTextContainer.appendChild(facebookLink);

        socialsTextTheme.appendChild(facebookContainer);


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
        xTwitterLogo.src = xLogo;
        //appending inst:
        xTwitterContainer.appendChild(xTwitterTextContainer);
        xTwitterContainer.appendChild(xTwitterLogo);
        xTwitterTextContainer.appendChild(xTwitterText);
        xTwitterTextContainer.appendChild(xTwitterLink);

        socialsTextTheme.appendChild(xTwitterContainer);


        //location block:
        const locationCardContainer = document.createElement('div');
        locationCardContainer.classList.add('location-container');
        const locationTheme = document.createElement('div');
        locationTheme.classList.add('location-theme');
        const location1Text = document.createElement('div');
        location1Text.classList.add('location1');
        location1Text.textContent = 'Eldfjallgata 17, 510 Hólmavík, Iceland';
        const location2Text = document.createElement('div');
        location2Text.classList.add('location2');
        location2Text.textContent = 'Norðurtangi 3B, 510 Hólmavík, Iceland';
        const location3Text = document.createElement('div');
        location3Text.classList.add('location3');
        location3Text.textContent = 'Fjallabrekka 12, 510 Hólmavík, Iceland';

        //location-tag: 
        const locationTag = document.createElement('div');
        locationTag.classList.add('location-tag');
        locationTag.textContent = 'location';
        locationTheme.appendChild(locationTag);
        //appending locations:
        locationCardContainer.appendChild(locationTheme);
        locationTheme.appendChild(location1Text);
        locationTheme.appendChild(location2Text);
        locationTheme.appendChild(location3Text);

        contacts.appendChild(locationCardContainer);



        clearContent();
        document.body.classList.add('toggle');
        content.appendChild(contacts);
    }
    buttons.contacts.addEventListener('click', generateContactsPage)
}