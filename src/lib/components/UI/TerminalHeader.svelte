<script lang="ts">
  import type { Snippet } from "svelte";

  let { 
    title = "", 
    showDots = true, 
    hideDotsOnMobile = true,
    dotSize = "10px",
    children = null
  }: { 
    title?: string, 
    showDots?: boolean, 
    hideDotsOnMobile?: boolean,
    dotSize?: string,
    children?: Snippet | null
  } = $props();
</script>

<div class="terminal-header">
  {#if showDots}
    <div class="dots" class:hide-mobile={hideDotsOnMobile} style:--dot-size={dotSize}>
      <span class="dot red"></span>
      <span class="dot yellow"></span>
      <span class="dot green"></span>
    </div>
  {/if}

  {#if title}
    <div class="terminal-title">{title}</div>
  {/if}

  {#if children}
    {@render children()}
  {/if}
</div>

<style>
  .terminal-header {
    background: #161b22;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #30363d;
    min-height: 40px;
  }

  .dots {
    display: flex;
    gap: 0.5rem;
    margin-right: 1.5rem;
  }

  .dot {
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
  }

  .red { background: #ff5f56; }
  .yellow { background: #ffbd2e; }
  .green { background: #27c93f; }

  .terminal-title {
    font-family: "Fira Code", monospace;
    font-size: 0.75rem;
    color: #8b949e;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .hide-mobile {
      display: none;
    }
  }
</style>
