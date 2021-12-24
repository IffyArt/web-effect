const asideTrigger = document.querySelector('.aside-trigger');
const aside = document.querySelector('.aside');

asideTrigger.addEventListener('click', function () {
  asideTrigger.classList.toggle('active');
  aside.classList.toggle('active');
});
