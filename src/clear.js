export const clearContent = () => {
    const clearAll = () => {
        const content = document.getElementById('content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        } 
    }
    document.body.classList.remove('toggle');
    clearAll();
    // const buttons = document.querySelectorAll('.header-button');
    // buttons.forEach((e) => {
    //     e.addEventListener('click', clearAll);
    // })
    // button.addEventListener('click', clearAll);
}