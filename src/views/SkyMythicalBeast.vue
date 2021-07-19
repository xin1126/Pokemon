<template>
  <div class="flex justify-center items-center h-screen w-screen">
    <div class="view relative">
      <div class="mountain-wall flex items-end justify-center">
        <img class="" src="@/assets/images/proceed.jpg" alt="" />
      </div>
      <img :src="url" class="absolute left-96 bottom-50" ref="protagonist" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import getImg from '../compositionApi/getImg';

export default {
  setup() {
    const protagonist = ref(null);
    const {
      url, getSr, move, keyup,
    } = getImg();

    onMounted(() => {
      getSr();
      window.addEventListener('keydown', (e) => {
        move(e, protagonist);
      });
      window.addEventListener('keyup', keyup);
    });
    return {
      protagonist,
      url,
    };
  },
};
</script>
