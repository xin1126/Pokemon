<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="view relative">
      <div class="mountain-wall flex items-end justify-center">
        <img class="" src="@/assets/images/proceed.jpg" alt="" />
      </div>
      <img :src="url" class="absolute left-96 bottom-50" ref="protagonist" />
    </div>
  </div>
  <div ref="mythicalBeast">test</div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import getImg from '../compositionApi/getImg';
import interactive from '../compositionApi/interactive';

export default {
  setup() {
    const protagonist = ref(null);
    const mythicalBeast = ref(null);
    let contact = [];

    const {
      url, getSr, move, keyup,
    } = getImg();

    watch(url, () => {
      contact.push(interactive(protagonist, mythicalBeast));
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
      mythicalBeast,
      url,
    };
  },
};
</script>
