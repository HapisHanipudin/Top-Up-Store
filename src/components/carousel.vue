<template>
  <div class="relative max-w-screen-md mx-auto min-h-[27.5rem] carousel flex justify-center items-center">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="duration-500 ease-in-out absolute h-72 inset-y-auto inset-x-auto aspect-video transform perspective-1000"
      :class="{
        '-translate-x-[110%] rotate-y-45': item.slide === slides.before,
        'opacity-1': item.slide === slides.active,
        'translate-x-[110%]': item.slide === slides.after,
        'opacity-0': item.slide === slides.inactive[0] || index === slides.inactive[1],
      }"
    >
      <img
        :src="item.image"
        :alt="item.caption"
        class="w-full h-full object-cover"
        :class="{
          '': item.slide == slides.before,
          '': item.slide == slides.active,
          ' ': item.slide == slides.after,
          '': item.slide == slides.inactive[0] || index == slides.inactive[1],
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const slides = ref({ before: 0, active: 1, after: 2, inactive: [3, 4] });

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
