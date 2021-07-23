<template>
  <div class="flex justify-center items-center flex-col h-screen w-screen">
    <div class="view relative">
      <div class="mountain-wall flex items-end justify-center">
        <img class="" src="@/assets/images/proceed.jpg" alt="" />
      </div>
      <img :src="url" class="absolute bottom-0 left-2/4" ref="protagonist" />
      <div class="h-3/5 flex items-center justify-center">
        <img src="@/assets/images/inflammation.png" ref="mythicalBeast" />
      </div>
    </div>
    <div class="prompt bg-gray-500">
      <ul class="text-white flex justify-center py-2">
        <li class="pr-12">移動方式：←↑→↓(ctrl+箭頭增加跑速)</li>
        <li class="pr-12">互動/確認：Z</li>
        <li>離開/取消：X</li>
      </ul>
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
