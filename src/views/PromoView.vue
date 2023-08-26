<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import { useProductsStore } from '@/stores/products'
import ProductCard from '@/components/ProductCard.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
const products = useProductsStore()
</script>

<template>
  <div class="m-8 flex gap-3">
    <!-- sidebar -->
    <SideBar class="h-min w-3/12" />
    <main class="grow">
      <!-- main image slider -->
      <div class="relative h-96 overflow-hidden rounded-lg">
        <ImageCarousel
          class="absolute inset-0 h-full w-full object-cover"
          :images="[
            'https://gray-woio-prod.cdn.arcpublishing.com/resizer/E7iFc_6lmrODLjDULRse4Nivzys=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/N6CVLTM4UNEK3BBQGT7XTDWY2A.jpg',
            'https://plus.unsplash.com/premium_photo-1683121269108-1bd195cd18cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5Mjk2OTg3Mw&ixlib=rb-4.0.3&q=80&w=1080',
            'https://images.pexels.com/photos/5709656/pexels-photo-5709656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/6567607/pexels-photo-6567607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          ]"
        />
        <div class="relative h-full select-none bg-slate-500/50">
          <div
            class="ml-auto flex h-full w-1/2 flex-col items-center justify-center space-y-4 self-center text-white dark:text-slate-300"
          >
            <h1 class="font-[Cookie] text-7xl capitalize">new winter collection</h1>
            <p class="w-2/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt aliquam dolore
              nostrum aliquid minus
            </p>
            <button class="rounded-full bg-white px-6 py-2 font-bold uppercase text-pink-500">
              view collection
            </button>
          </div>
        </div>
      </div>
      <!-- products -->
      <div class="mt-4 grid grid-cols-3 gap-4">
        <ProductCard v-for="product in products.products" :key="product.id" :product="product" />
      </div>
    </main>
  </div>
</template>
