const descriptions = document.querySelectorAll('.description');
const showMoreButtons = document.querySelectorAll('.show-more');

for (let i = 0; i < showMoreButtons.length; i++) {
  showMoreButtons[i].addEventListener('click', () => {
    const description = descriptions[i];
    if (description.classList.contains('show-all')) {
      description.classList.remove('show-all');
      showMoreButtons[i].textContent = 'Show More';
    } else {
      description.classList.add('show-all');
      showMoreButtons[i].textContent = 'Show Less';
    }
  });
}
