<script lang="ts">
  import { darkTheme } from '$lib/store';
  import '../tailwind.css';
  import '../index.css';
</script>

<div class={$darkTheme ? 'dark' : ''}>
  <button class="absolute left-2 top-2 text-lg" on:click={() => ($darkTheme = !$darkTheme)}>
    {$darkTheme ? '🌙' : '🌞'}
  </button>
  <slot />
</div>
