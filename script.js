const ageGate = document.querySelector('#ageGate');
const enterSite = document.querySelector('#enterSite');

if (localStorage.getItem('ageConfirmed') === 'true') {
  ageGate.classList.add('hidden');
}

enterSite.addEventListener('click', () => {
  localStorage.setItem('ageConfirmed', 'true');
  ageGate.classList.add('hidden');
});
