export const formInputHandler = () => {
  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
    form.addEventListener('blur', ({target}) => {
      const input = target.closest('.input-item');

      if (input) return;

      input.classList[input.value ? 'add' : 'remove']('_filled');
    });
  });
}
