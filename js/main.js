window.onload = () => {
  document.querySelector('.header__burger').addEventListener('click', () => {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  })

  let swiper = new Swiper(".swiper", {
    autoplay: {
      disableOnInteraction: false
    }
  });
}