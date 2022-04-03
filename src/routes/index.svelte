<script lang="ts">
  import Modal from '$lib/components/Modal.svelte';
  import { modal } from '$lib/store';
  import { goto } from '$app/navigation';

  let clicked = 0;
</script>

<div class="grid h-screen place-items-center dark:bg-black">
  <div class="flex flex-col items-center justify-center gap-12">
    <img src="/Sveltaily.svg" alt="Sveltaily" width="300vw" />
    <div class="flex flex-col items-center justify-center">
      <h1 class="md:text-7xl dark:text-white text-black text-3xl page-title">
        Welcome to
        <span class="text-orange-600">Svel</span><span class="text-blue-500">taily</span>
      </h1>
      <p class="text-xl dark:text-white text-black">
        Amount of clicks: <span class="text-orange-600">{clicked}</span>
      </p>
    </div>
    <div class="flex flex-row gap-2">
      <button
        class="bg-blue-300 border-2 border-blue-500 text-blue-700 px-4 py-2 rounded-lg active:scale-90 duration-200"
        on:click={() => clicked++}
      >
        Click Me!
      </button>
      <button
        class="border-2 border-blue-500 dark:border-white text-blue-700 dark:text-white px-4 py-2 rounded-lg active:scale-90 duration-200"
        on:click={() => ($modal = true)}
      >
        Open Modal
      </button>
      <button
        class="bg-blue-300 border-2 border-blue-500 text-blue-700 px-4 py-2 rounded-lg active:scale-90 duration-200"
        on:click={() => goto('/NeverGonnaGiveYouUp')}
      >
        Random Page
      </button>
    </div>
  </div>
</div>

{#if $modal}
  <Modal closeModal={() => ($modal = false)} />
{/if}
