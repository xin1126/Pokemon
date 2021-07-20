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
    const { src } = protagonist.value;
    const updatedSrc = src.slice(0, src.length - 5);
    const index = Array.from(updatedSrc).reverse().indexOf('/');
    target = updatedSrc.substr(updatedSrc.length - index, index);
  }

  return { contact, target };
};
