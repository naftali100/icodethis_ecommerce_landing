<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <div class="mx-auto mt-8 w-1/2 space-y-4">
    <div
      v-for="product in cart.items"
      :key="product.id"
      class="flex items-center gap-4 rounded border p-2 dark:border-slate-600"
    >
      <img
        :src="product.imageUrl"
        class="h-20 w-20 rounded bg-white object-contain p-2 dark:bg-slate-800"
        alt=""
      />
      <div>
        <h3 class="text-lg">{{ product.name }}</h3>
        <h4 class="text-sm text-slate-500">${{ product.price }}</h4>
        <span class="text-xs text-slate-500">amount: {{ product.amount }}</span>
      </div>
      <button class="ml-auto text-lg text-pink-500" @click="cart.removeItem(product)">
        remove
      </button>
    </div>
    <div class="text-center">
      <button
        class="rounded-full bg-white px-20 py-2 text-pink-500 transition hover:-translate-y-1 hover:shadow dark:bg-slate-800"
      >
        checkout
      </button>
    </div>
  </div>
</template>
