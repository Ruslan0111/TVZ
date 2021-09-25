window.onload = function() {
  let acc = document.querySelectorAll('.more__accordion-button');

  acc.forEach(item => {
    item.addEventListener('click', function() {
      item.classList.toggle('active');

      let panel = item.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    })
  });
};