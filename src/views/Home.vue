<template>
  <div class="flex justify-center items-center flex-col h-screen w-screen">
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
      <div
        v-show="text"
        class="absolute bottom-0 bg-green-500 w-full px-2 py-1 rounded-2xl"
      >
        <div class="bg-green-600 rounded-2xl w-full px-2 py-1">
          <div class="bg-white rounded-2xl pl-4 py-2 text-3xl text-lattice">
            歡迎來到神獸捕捉體驗館<br />
            可在此處捕捉到<span class="text-blue-600">蓋歐卡</span>、
            <span class="text-red-600">固拉多</span>、<span
              class="text-green-700"
              >列空座</span
            >
            ，祝你捕捉順利!
          </div>
        </div>
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
    const billboard = ref(null);
    const text = ref(false);
    let contact = [];

    const {
      url, getSr, move, keyup,
    } = getImg();

    watch(url, () => {
      contact.push(interactive(protagonist, billboard));
      contact = contact[contact.length - 1].target === undefined ? [contact[contact.length - 1]] : contact;
      const { contact: trigger } = interactive(protagonist, billboard);
      text.value = trigger;
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
      text,
    };
  },
};
</script>

<style lang="scss">
.protagonist {
  left: 470px;
}

.prompt {
  width: 1000px;
}
</style>
