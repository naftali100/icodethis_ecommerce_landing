<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

const [emblaNode, api] = emblaCarouselVue({ loop: true, align: 'center' }, [
  Autoplay({
    delay: 3000
  })
  // WheelGesturesPlugin()
])

defineProps<{
  images: string[]
}>()

function scrollPrev(e: Event) {
  e.stopPropagation()
  console.log('prev')

  if (api.value) {
    api.value.scrollPrev()
  }
}
function scrollNext() {
  console.log('next')

  if (api.value) {
    api.value.scrollNext()
  }
}
</script>

<template>
  <div ref="emblaNode" class="embla rounded-md">
    <div class="embla__container relative flex h-full">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="embla__slide relative overflow-hidden"
      >
        <img :src="image" alt="" class="absolute inset-0 h-full w-full object-cover" />
      </div>
    </div>
    <!--Carousel controls - prev item-->
    <button
      class="absolute inset-y-0 left-0 z-50 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-pink-300 hover:no-underline hover:opacity-90 hover:outline-none focus:text-pink-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button"
      @click="scrollPrev($event)"
    >
      <span class="inline-block h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Previous</span
      >
    </button>
    <!--Carousel controls - next item-->
    <button
      class="absolute inset-y-0 right-0 z-50 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-pink-300 hover:no-underline hover:opacity-90 hover:outline-none focus:text-pink-500 focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
      type="button"
      @click.stop="scrollNext"
    >
      <span class="inline-block h-8 w-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </span>
      <span
        class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Next</span
      >
    </button>
  </div>
</template>

<style scoped>
.embla {
  overflow: hidden;
}
.embla__slide {
  flex: 0 0 100%;
  min-width: 0;
}
</style>
