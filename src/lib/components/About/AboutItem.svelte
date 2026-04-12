<script lang="ts">
  import TerminalHeader from "../UI/TerminalHeader.svelte";
  import { TimelineItemType, TimelineItemSide } from "$lib/data/about";
  interface Props {
    title: string;
    subtitle: string;
    period: string;
    description: string;
    tags?: string[];
    side?: TimelineItemSide;
    type?: Exclude<TimelineItemType, TimelineItemType.HEADER>;
    visible?: boolean;
  }

  let {
    title,
    subtitle,
    period,
    description,
    tags = [],
    side = TimelineItemSide.LEFT,
    type = TimelineItemType.EXPERIENCE,
    visible = false,
  }: Props = $props();

  const FILE_NAMES = {
    [TimelineItemType.EXPERIENCE]: "experience.code",
    [TimelineItemType.EDUCATION]: "formation.edu",
  } as const;
  
  const fileName = $derived(FILE_NAMES[type]);
</script>

<div class="timeline-item {side}" class:visible>
  <div class="item-card glass-card">
    <TerminalHeader title="{fileName} — {period}" />
    <div class="card-body">
      <h4 class="item-title font-display heading-gradient">{title}</h4>
      <div class="item-subtitle">{subtitle}</div>
      <div class="item-period">{period}</div>
      <p class="item-description">{description}</p>
    </div>

    {#if tags.length > 0}
      <div class="item-tags">
        {#each tags as tag}
          <span class="tag">{tag}</span>
        {/each}
      </div>
    {/if}
  </div>
</div>

<style>
  .timeline-item {
    position: relative;
    width: 50%;
    margin-bottom: 4rem;
    transition: var(--transition-smooth);
    opacity: 0;
  }

  .timeline-item.left {
    padding-right: var(--timeline-padding);
    margin-right: auto;
    text-align: right;
    transform: translateX(calc(-1 * var(--timeline-offset)));
  }

  .timeline-item.right {
    padding-left: var(--timeline-padding);
    margin-left: auto;
    text-align: left;
    transform: translateX(var(--timeline-offset));
  }

  .timeline-item.visible {
    opacity: 1;
    transform: translateX(0);
  }

  .item-card {
    padding: 0;
    position: relative;
    backdrop-filter: var(--glass-blur);
    background: var(--bg-card);
    border: 1px solid var(--glass-border);
    overflow: hidden;
    border-radius: 1rem;
  }

  .card-body {
    padding: 2rem;
  }

  .item-period {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-family: "JetBrains Mono", monospace;
  }

  .item-title {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.8rem;
    line-height: 1.1;
  }

  .item-subtitle {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--accent-purple);
    margin-bottom: 0.2rem;
    display: block;
  }

  .item-description {
    color: var(--text-secondary);
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .item-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    padding: 0 2rem 2.5rem 2rem;
  }

  .tag {
    font-size: 0.8rem;
    padding: 0.4rem 1.1rem;
    background: var(--glass-border);
    border: 1px solid var(--glass-border);
    border-radius: 6px;
    color: var(--text-secondary);
    font-weight: 600;
  }

  @media (max-width: 868px) {
    .timeline-item {
      width: 100%;
      padding-left: 3rem !important;
      padding-right: 0 !important;
      text-align: left !important;
    }
  }
</style>
