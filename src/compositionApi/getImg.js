import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default () => {
  const url = ref('');
  const router = useRouter();
  const route = useRoute();
  let item = 'up1';

  const getSr = (name = 'up1') => {
    const path = `/src/assets/images/${name}.png`;
    const modules = import.meta.globEager('/src/assets/images/*.png');
    url.value = modules[path].default;
  };

  const updateImg = (direction) => {
    if (item !== `${direction}3`) {
      setTimeout(() => {
        item = `${direction}3`;
        getSr(item);
      }, 100);
    } else {
      setTimeout(() => {
        item = `${direction}2`;
        getSr(item);
      }, 100);
    }
    console.log(item);
  };

  const keyup = () => {
    setTimeout(() => {
      const target = item.substring(0, item.length - 1);
      getSr(`${target}1`);
    }, 150);
  };

  const move = (e, protagonist, status) => {
    let contact;
    let target;
    if (status.length === 1) {
      contact = status[0].contact;
      target = status[0].target;
    } else {
      contact = status[1].contact;
      target = status[1].target;
    }
    const keyCode = e.keyCode || e.which || e.charCode;
    const speed = e.ctrlKey && (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) ? 12 : 6;
    const dom = protagonist.value;
    if (!dom) return;
    const w = dom.offsetLeft;
    const proceed1 = w > 105 && w < 160;
    const proceed2 = w > 440 && w < 495;
    const proceed3 = w > 780 && w < 835;
    switch (e.keyCode) {
      case 37:
        updateImg('left');
        if (contact && target === 'left') return;
        dom.style.left = dom.offsetLeft < 0 ? dom.offsetLeft : `${dom.offsetLeft - speed}px`;
        break;
      case 38:
        updateImg('up');
        if (contact && target === 'up') return;
        dom.style.top = !(proceed1 || proceed2 || proceed3) && dom.offsetTop < 115 ? dom.offsetTop : `${dom.offsetTop - speed}px`;
        if (dom.offsetTop < 60) {
          if (route.path === '/') {
            if (proceed1) {
              router.push('/sea');
            } else if (proceed2) {
              router.push('/sky');
            } else if (proceed3) {
              router.push('/flame');
            }
          } else if (proceed2) {
            router.push('/');
          }
        }
        break;
      case 39:
        updateImg('right');
        if (contact && target === 'right') return;
        dom.style.left = dom.offsetLeft >= 920 ? dom.offsetLeft : `${dom.offsetLeft + speed}px`;
        break;
      case 40:
        updateImg('down');
        if (contact && target === 'down') return;
        dom.style.top = dom.offsetTop >= 410 ? dom.offsetTop : `${dom.offsetTop + speed}px`;
        break;
      default:
        break;
    }
  };
  return {
    url, getSr, move, keyup,
  };
};
