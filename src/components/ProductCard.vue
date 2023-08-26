<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const props = defineProps<{
  product: Product
}>()

const cart = useCartStore()
</script>
<template>
  <div class="group relative overflow-hidden rounded-lg bg-white p-4 dark:bg-slate-800">
    <div class="relative h-64">
      <img
        :src="product.imageUrl"
        alt=""
        class="absolute inset-0 h-full w-full object-contain object-center"
      />
    </div>
    <div
      class="invisible absolute top-0 ml-[-1rem] h-0 max-h-0 w-full items-center justify-center bg-slate-500/80 px-4 text-lg text-white opacity-0 transition-all duration-1000 group-hover:visible group-hover:h-full group-hover:max-h-full group-hover:py-8 group-hover:opacity-100 dark:bg-slate-700/80"
    >
      <span>
        {{ product.description }}
      </span>
    </div>

    <div class="relative w-full">
      <div class="text-center transition duration-1000 group-hover:opacity-0">
        <span class="text-lg font-bold">
          {{ product.price }}
        </span>
        <p>{{ product.name }}</p>
      </div>
    </div>
    <button
      class="absolute bottom-0 ml-[-1rem] flex max-h-0 w-full items-center justify-center overflow-hidden bg-pink-500 text-lg font-bold text-white transition-all duration-1000 group-hover:max-h-16"
      @click="cart.addItem(product)"
    >
      <span class="py-20">add to cart</span>
    </button>
  </div>
</template>
