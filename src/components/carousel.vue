<template>
  <div class="carousel">
    <div v-for="(item, index) in items" :key="index" :class="slideClasses(index)">
      <img :src="item.image" :alt="item.caption" class="w-full h-full object-cover" />
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-white text-lg font-semibold">{{ item.caption }}</div>
      </div>
    </div>
    <button @click="prevSlide" class="prev-btn">Previous</button>
    <button @click="nextSlide" class="next-btn">Next</button>
  </div>
</template>

<script setup>
const items = [
  {
    image: "https://placekitten.com/800/400",
    caption: "Slide 1",
  },
  {
    image: "https://placekitten.com/801/400",
    caption: "Slide 2",
  },
  {
    image: "https://placekitten.com/802/400",
    caption: "Slide 3",
  },
];

let currentSlide = 0;

const slideClasses = (index) => {
  return {
    "opacity-100": index === currentSlide,
    "opacity-0": index !== currentSlide,
    "transition-opacity": true,
  };
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % items.length;
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + items.length) % items.length;
};
</script>

<style scoped>
.carousel {
  position: relative;
  max-width: 800px; /* Adjust as needed */
  margin: auto;
  overflow: hidden;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
