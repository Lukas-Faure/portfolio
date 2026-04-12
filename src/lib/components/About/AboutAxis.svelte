<script lang="ts">
  import Meteor from "../UI/Meteor.svelte";
  import { TimelineItemType, type TimelineItem } from "$lib/data/about";

  interface Props {
    maxScrollProgress: number;
    itemThresholds: number[];
    unlockedItems: boolean[];
    allItems: TimelineItem[];
    meteorLogos: string[];
  }

  let { maxScrollProgress, itemThresholds, unlockedItems, allItems, meteorLogos }: Props = $props();
</script>

<div class="axis-line">
  <div class="progress-fill" style="height: {maxScrollProgress}%"></div>
  
  {#each allItems as item, i}
    {@const threshold = itemThresholds[i] || 0}
    {#if item.type !== TimelineItemType.HEADER}
      <div 
        class="axis-logo-container" 
        class:visible={unlockedItems[i]}
        style="top: {threshold}%"
      >
        {#if 'logo' in item && item.logo}
          <img 
            src={item.logo} 
            alt={item.type === TimelineItemType.EXPERIENCE ? (item as any).company : (item.type === TimelineItemType.EDUCATION ? (item as any).institution : 'Logo')} 
            class="axis-logo" 
          />
        {:else}
          <div class="axis-dot"></div>
        {/if}
      </div>
    {/if}
  {/each}

  <Meteor 
    mode="manual" 
    progress={maxScrollProgress} 
    logos={meteorLogos}
    size={24}
    trailLength={250}
    particleCount={20}
  />
</div>

<style>
  .axis-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: transparent;
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 4px;
    overflow: visible;
  }

  .axis-logo-container {
    position: absolute;
    left: 50%;
    width: 50px;
    height: 50px;
    background: var(--text-primary);
    border: 2px solid var(--accent-purple);
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transform: translate(-50%, -50%) scale(0);
    transition: var(--transition-smooth);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
    pointer-events: none;
  }

  .axis-logo-container.visible {
    transform: translate(-50%, -50%) scale(1);
  }

  .axis-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .axis-dot {
    width: 12px;
    height: 12px;
    background: var(--accent-purple);
    border-radius: 50%;
  }

  .progress-fill {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--accent-purple);
    opacity: 0.4;
    border-radius: 4px;
    box-shadow: 0 0 15px var(--accent-purple);
    transition: height 0.1s ease-out;
  }

  @media (max-width: 868px) {
    .axis-line {
      left: 2rem;
    }
  }
</style>
