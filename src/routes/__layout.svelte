<script lang="ts">
  import { darkTheme } from '$lib/store';
  import Kofi from '$lib/components/Kofi.svelte';
  import SocialButtons from '$lib/components/SocialButtons.svelte';
  import Head from '$lib/components/Head.svelte';
  import '../tailwind.css';
  import '../index.css';
</script>

<div class={$darkTheme ? 'dark' : ''}>
  <Head />
  <button class="absolute left-2 top-2 text-lg" on:click={() => ($darkTheme = !$darkTheme)}>
    {$darkTheme ? '🌙' : '🌞'}
  </button>
  <slot />
  <Kofi name={'tinvv'} />
  <SocialButtons />
</div>
