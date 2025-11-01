const buttons = document.querySelectorAll('.card button');
const packInput = document.getElementById('packInput');
const form = document.getElementById('orderForm');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    packInput.value = btn.dataset.pack;
    form.scrollIntoView({ behavior: 'smooth' });
  });
});
