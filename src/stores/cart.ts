import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type ProductWithAmount = Product & { amount?: number }

export const useCartStore = defineStore('cart', () => {
  const items = ref<ProductWithAmount[]>([])

  const amount = computed(() => {
    return items.value.reduce((sum, item) => sum + (item.amount ?? 0), 0)
  })

  function addItem(item: ProductWithAmount) {
    const duplicated = items.value.find((i) => i.id === item.id)
    if (duplicated) {
      duplicated.amount ||= 1
      duplicated.amount++
    } else {
      item.amount = 1
      items.value?.push(item)
    }
  }

  function removeItem(item: Product) {
    items.value = items.value.filter((i) => i.id !== item.id)
  }

  return {
    items,
    /** the amount of the items in the cart */
    amount,
    addItem,
    removeItem
  }
})
