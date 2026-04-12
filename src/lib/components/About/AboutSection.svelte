<script lang="ts">
  import { onMount } from "svelte";
  import {
    bio,
    experiences,
    education,
    TimelineItemType,
    TimelineItemSide,
  } from "$lib/data/about";
  import AboutItem from "./AboutItem.svelte";
  import CodeCard from "./CodeCard.svelte";
  import AboutAxis from "./AboutAxis.svelte";
  import { techRows } from "../TechStack/techData";
  import type { TimelineItem } from "$lib/data/about";

  const meteorLogos = techRows.flat().map((t) => t.url);

  const getTimelineItems = (): TimelineItem[] => [
    { type: TimelineItemType.HEADER, label: "Expériences Pro" },
    ...experiences.map((e) => ({
      ...e,
      type: TimelineItemType.EXPERIENCE as const,
    })),
    { type: TimelineItemType.HEADER, label: "Formations" },
    ...education.map((e) => ({
      ...e,
      type: TimelineItemType.EDUCATION as const,
    })),
  ];

  const allItems = getTimelineItems();

  let timelineWrapper: HTMLElement;
  let itemsContainer: HTMLElement;
  let maxScrollProgress = $state(0);
  let itemThresholds = $state<number[]>([]);
  let unlockedItems = $state<boolean[]>(allItems.map(() => false));

  $effect(() => {
    itemThresholds.forEach((t, i) => {
      if (maxScrollProgress >= t && t > 0) {
        unlockedItems[i] = true;
      }
    });
  });

  const updateThresholds = () => {
    if (!itemsContainer || !timelineWrapper) return;
    const containerRect = timelineWrapper.getBoundingClientRect();
    const children = Array.from(itemsContainer.children);

    itemThresholds = children.map((child) => {
      const childRect = child.getBoundingClientRect();
      const relativeCenter =
        childRect.top + childRect.height / 2 - containerRect.top;
      return (relativeCenter / containerRect.height) * 100;
    });
  };

  const handleScroll = () => {
    if (!timelineWrapper) return;
    const rect = timelineWrapper.getBoundingClientRect();
    const current = -rect.top + window.innerHeight / 2;
    const progress = Math.min(Math.max((current / rect.height) * 100, 0), 100);

    // On bride la progression un peu après le dernier item pour un meilleur rendu
    const lastThreshold = itemThresholds[itemThresholds.length - 1] || 100;
    const currentCapped = Math.min(progress, lastThreshold + 5);

    if (currentCapped > maxScrollProgress) {
      maxScrollProgress = currentCapped;
    }
  };

  onMount(() => {
    setTimeout(updateThresholds, 100);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateThresholds);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateThresholds);
    };
  });
</script>

<section id="about" class="about-section">
  <div class="container">
    <div class="about-header">
      <div class="bio-column">
        <h2 class="section-title font-display">
          À <span class="heading-gradient">propos</span>
        </h2>
        <p class="bio-text">{bio}</p>
      </div>
      <div class="code-column">
        <CodeCard />
      </div>
    </div>

    <div class="timeline-wrapper" bind:this={timelineWrapper}>
      <AboutAxis
        {maxScrollProgress}
        {itemThresholds}
        {unlockedItems}
        {allItems}
        {meteorLogos}
      />

      <div class="items-container" bind:this={itemsContainer}>
        {#each allItems as item, i}
          {#if item.type === TimelineItemType.HEADER}
            <div class="category-header" class:visible={unlockedItems[i]}>
              <h3 class="font-display">{(item as any).label}</h3>
            </div>
          {:else}
            {@const exp =
              item.type === TimelineItemType.EXPERIENCE ? item : null}
            {@const edu =
              item.type === TimelineItemType.EDUCATION ? item : null}
            <AboutItem
              title={exp ? exp.title : edu ? edu.degree : ""}
              subtitle={exp ? exp.company : edu ? edu.institution : ""}
              period={exp ? exp.period : edu ? edu.period : ""}
              description={exp ? exp.description : edu ? edu.description : ""}
              tags={exp ? exp.tags : edu ? edu.tags : []}
              type={item.type}
              visible={unlockedItems[i]}
              side={i % 2 === 0 ? TimelineItemSide.LEFT : TimelineItemSide.RIGHT}
            />
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    padding: var(--section-padding);
    background: var(--bg-dark);
    position: relative;
    overflow: hidden;
  }

  .about-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    margin-bottom: 10rem;
  }

  .section-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    margin-bottom: 2rem;
    font-weight: 800;
  }

  .bio-text {
    font-size: 1.2rem;
    line-height: 1.8;
    color: var(--text-secondary);
    max-width: 600px;
  }

  .timeline-wrapper {
    position: relative;
    padding: 4rem 0;
  }

  .category-header {
    width: 100%;
    text-align: center;
    margin: 6rem 0 4rem;
    opacity: 0;
    transform: translateY(20px);
    transition: var(--transition-smooth);
    position: relative;
    z-index: 2;
  }

  .category-header.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .category-header h3 {
    font-size: 2.2rem;
    color: white;
    text-transform: uppercase;
    letter-spacing: 6px;
    background: var(--bg-dark);
    display: inline-block;
    padding: 0.5rem 2rem;
    margin-bottom: 0;
  }

  .items-container {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1024px) {
    .about-header {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .bio-text {
      margin: 0 auto;
    }

    .code-column {
      display: flex;
      justify-content: center;
    }
  }
</style>
