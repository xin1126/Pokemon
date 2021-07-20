<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="view relative">
      <div class="mountain-wall flex items-end justify-around">
        <img
          v-for="item in 3"
          :key="item"
          src="@/assets/images/proceed.jpg"
          alt="proceed"
        />
      </div>
      <img :src="url" class="protagonist absolute bottom-0" ref="protagonist" />
      <div class="h-3/5 flex items-center justify-center">
        <img src="@/assets/images/billboard.png" ref="billboard" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import getImg from '../compositionApi/getImg';
import interactive from '../compositionApi/interactive';

export default {
  setup() {
    const protagonist = ref(null);
    const billboard = ref(null);
    let contact = [];

    const {
      url, getSr, move, keyup,
    } = getImg();

    watch(url, () => {
      contact.push(interactive(protagonist, billboard));
      contact = contact[contact.length - 1].target === undefined ? [contact[contact.length - 1]] : contact;
    });

    onMounted(() => {
      getSr();
      window.addEventListener('keydown', (e) => {
        move(e, protagonist, contact);
      });
      window.addEventListener('keyup', keyup);
    });

    return {
      protagonist,
      billboard,
      url,
    };
  },
};
</script>

<style lang="scss">
.protagonist {
  left: 470px;
}
</style>
