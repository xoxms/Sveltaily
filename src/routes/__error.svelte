<script context="module" lang="ts">
  export function load({ error, status }: { error: Error; status: number }): {
    props: { message: string; status: number };
  } {
    return {
      props: {
        status,
        message: error.message,
      },
    };
  }
</script>

<script>
  import { goto } from '$app/navigation';

  export let status;
  export let message;
</script>

<div class="grid h-screen place-items-center dark:bg-black">
  <div class="flex flex-col gap-3">
    <img src="/Sveltaily.svg" width="400px" alt="logo" />
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-8xl dark:text-white text-black">{status}</h1>
      <p class="dark:text-white text-black">{message}</p>
    </div>
    <button
      class="bg-blue-500 text-white px-4 py-2 rounded-lg active:scale-90 duration-150"
      on:click={() => goto('/')}>Back to homepage</button
    >
  </div>
</div>
