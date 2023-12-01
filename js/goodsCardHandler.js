export const goodsCardHandler = () => {
  const catalog = document.querySelector('.catalog');

  if (!catalog) return;

  const switchGoodsColor = ({target}) => {
    const value = target?.value || '';

    if (!value) return;

    const card = target.closest('.goods-card');
    const [checked] = card.getElementsByClassName('_checked');
    const [img] = card.getElementsByClassName('goods-card__img ' + value);
    
    if (!img || checked === img) return;
    
    checked.classList.remove('_checked');
    img.classList.add('_checked');
  };

  catalog.addEventListener('change', switchGoodsColor);
}