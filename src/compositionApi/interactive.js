export default (protagonist, billboard) => {
  let contact = false;
  let target;

  const pLeft = protagonist.value.offsetLeft;
  const pTop = protagonist.value.offsetTop;
  const bLeft = billboard.value.offsetLeft;
  const bTop = billboard.value.offsetTop;

  const w = Math.min(pLeft + protagonist.value.offsetWidth, bLeft + billboard.value.offsetWidth) - Math.max(pLeft, bLeft);
  const h = Math.min(pTop + protagonist.value.offsetHeight, bTop + billboard.value.offsetHeight) - Math.max(pTop, bTop);

  contact = w >= 0 && h >= 0;

  if (contact) {
    const arr = ['1', '2', '3'];
    const { src } = protagonist.value;
    const imgSrc = Array.from(src).reverse();
    imgSrc.splice(imgSrc.indexOf('/'));
    const updatedSrc = imgSrc.reverse().join('');
    let index;
    arr.forEach((item) => {
      const num = updatedSrc.indexOf(item);
      if (num > 0) {
        index = num;
      }
    });
    const newSrc = Array.from(updatedSrc);
    newSrc.splice(index);
    target = newSrc.join('');
  }

  return { contact, target };
};
