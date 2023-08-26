<script setup lang="ts">
import { onMounted, ref } from 'vue'
const el = ref<HTMLElement>()
onMounted(() => {
  if (el.value) {
    el.value.querySelectorAll('.toggle-btn').forEach((toggle) => {
      toggle.addEventListener('click', () => {
        if (toggle.parentElement) {
          toggle.parentElement.toggleAttribute('data-open')
        }
      })
    })
  }
})
</script>

<template>
  <div ref="el" class="sticky m-2 hidden space-y-3 sm:block">
    <h3 class="text-xl font-bold uppercase text-pink-500">categories</h3>
    <div class="group" data-open>
      <button class="toggle-btn flex w-full items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 -rotate-90 text-pink-500 transition-all group-data-[open]:rotate-0"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
        <span class="font-bold uppercase">woman</span>
      </button>

      <ul
        class="ml-6 mt-2 hidden space-y-2 overflow-hidden transition-all duration-1000 group-data-[open]:block"
        aria-labelledby="dropdown-menu-button"
        role="menu"
      >
        <li class="capitalize">
          <a href="##">outerwear</a>
        </li>
        <li class="capitalize">
          <a href="##">bombers</a>
        </li>
        <li class="capitalize">
          <a href="##">blazers</a>
        </li>
        <li class="capitalize">
          <a href="##">dresses</a>
        </li>
      </ul>
    </div>
    <div class="group">
      <button class="toggle-btn flex w-full items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 -rotate-90 text-pink-500 transition-all group-data-[open]:rotate-0"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
        <span class="font-bold uppercase">man kids</span>
      </button>

      <ul
        class="ml-6 mt-2 hidden space-y-2 group-data-[open]:block"
        aria-labelledby="dropdown-menu-button"
        role="menu"
      >
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">world</a>
        </li>
      </ul>
    </div>
    <div class="group">
      <button class="toggle-btn flex w-full items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 -rotate-90 text-pink-500 transition-all group-data-[open]:rotate-0"
          viewBox="0 0 1024 1024"
        >
          <path
            fill="currentColor"
            d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
          ></path>
        </svg>
        <span class="font-bold uppercase">accessories</span>
      </button>

      <ul
        class="ml-6 mt-2 hidden space-y-2 group-data-[open]:block"
        aria-labelledby="dropdown-menu-button"
        role="menu"
      >
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">world</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">hello</a>
        </li>
        <li class="capitalize">
          <a href="##">world</a>
        </li>
      </ul>
    </div>

    <div class="text-center">
      <!-- bottom text -->
      <h3 class="mb-1 text-lg font-semibold uppercase text-pink-500">news latter</h3>
      <p class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam voluptates veniam?
        Eaque quibusdam accusantium doloremque tenetur soluta. Recusandae obcaecati voluptatibus
        magni, fuga itaque laudantium eum commodi ducimus nemo ullam?
      </p>
    </div>
  </div>
</template>
