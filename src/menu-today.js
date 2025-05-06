export const todayTag = () => {
    const today = document.createElement('div');
    today.classList.add('today-tag');
    today.textContent = 'today';
    return today;
}