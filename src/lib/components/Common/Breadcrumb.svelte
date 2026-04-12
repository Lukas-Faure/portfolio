<script lang="ts">
  interface BreadcrumbItem {
    label: string;
    href: string;
  }

  interface Props {
    items?: BreadcrumbItem[];
    current: string;
  }

  let { items = [], current }: Props = $props();
</script>

<div class="breadcrumb">
  <a href="/" class="crumb">accueil</a>
  <span class="sep">/</span>
  
  {#each items as item}
    <a href={item.href} class="crumb">{item.label}</a>
    <span class="sep">/</span>
  {/each}
  
  <span class="current">{current}</span>
</div>

<style>
  .breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-family: 'Fira Code', monospace;
    font-size: 0.8rem;
    color: #8b949e;
  }

  .crumb {
    color: #5da4f6;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: all 0.2s;
  }

  .crumb:hover {
    color: #79c0ff;
    text-shadow: 0 0 10px rgba(93, 164, 246, 0.4);
  }

  .sep {
    color: #8b949e;
    opacity: 0.5;
  }

  .current {
    color: #f8fafc;
    font-weight: 500;
  }
</style>
