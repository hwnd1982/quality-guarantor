export const formInputHandler = () => {
  const forms = document.querySelectorAll('.form');

  forms.forEach(form => {
    form.addEventListener('change', ({target}) => {
      const input = target.closest('.form__input-item');
      
      if (!input) return;

      input.classList[input.value ? 'add' : 'remove']('_filled');
    });
  });
}
