<template>
  <div class="relative max-w-screen-md mx-auto overflow-hidden">
    <div v-for="(item, index) in images" :key="index" :class="slideClasses(index)">
      <img :src="item.image" :alt="item.caption" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-white text-lg font-semibold">{{ item.caption }}</div>
      </div>
    </div>
    <button @click="prevSlide" class="left-4 absolute top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white cursor-pointer">Previous</button>
    <button @click="nextSlide" class="right-4 absolute top-1/2 transform -translate-y-1/2 p-4 bg-gray-800 text-white cursor-pointer">Next</button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const slides = ref({ before: 5, active: 1, after: 2 });

const goToSlide = (index) => {
  slides.value = {
    before: index - 1 == -1 ? 4 : index - 1 == 5 ? 0 : index - 1,
    active: index,
  };
};

const slidesMovement = () => {
  slides.value.before--;
};

const images = ref([
  {
    image: "https://ditusi.co.id/assets/uploads/sliders/1701357471_4703f96155f94d833861.jpg",
    caption: "Bundle Hemat",
    slide: 0,
  },
  {
    image: "https://ditusi.co.id/assets/uploads/sliders/1701357370_59c906e5b409208ab937.jpg",
    caption: "Ditusi Marathon",
    slide: 1,
  },
  {
    image: "https://ditusi.co.id/assets/uploads/sliders/1703656782_2d1d33af714510932bbb.jpg",
    caption: "Ruan Mei Uoooogh!!",
    slide: 2,
  },
  {
    image: "https://ditusi.co.id/assets/uploads/sliders/1704366575_5960bbdcebe0b61d86f2.jpg",
    caption: "Request Top Up ",
    slide: 3,
  },
  {
    image: "https://ditusi.co.id/assets/uploads/sliders/1701426751_157ef906a5843a67c7ca.jpg",
    caption: "Black Clover M",
    slide: 4,
  },
]);
</script>
