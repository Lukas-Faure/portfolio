<script lang="ts">
  import "../app.css";
  import { afterNavigate } from '$app/navigation';

  let { children } = $props();

  afterNavigate(() => {
    window.scrollTo(0, 0);
  });
</script>

<div class="app-container">
  {@render children()}
</div>

<style>
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
