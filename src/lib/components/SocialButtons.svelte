<script>
  import { Facebook, Twitter } from 'svelte-share-buttons-component';
  const url = 'https://sveltaily.thevvx.org/';
  const title = 'Template for building Svelte Kit web application with Tailwind CSS faster!';
</script>

<div class="absolute bottom-0 right-0 p-3 flex flex-row gap-2">
  <Facebook quote="{title}" {url} />
  <Twitter text="{title}" {url} hashtags="svelte" via="tin_sci" />
</div>
