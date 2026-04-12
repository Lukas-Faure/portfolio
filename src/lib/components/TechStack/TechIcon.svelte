<script lang="ts">
    let { tech, isVisible, threshold = 0 } = $props();

    const ANIMATION_TOTAL_DURATION_MS = 2500;

    let delay = $derived(
        isVisible
            ? threshold * ANIMATION_TOTAL_DURATION_MS
            : (1 - threshold) * ANIMATION_TOTAL_DURATION_MS,
    );
</script>

<div class="icon-wrapper" class:visible={isVisible} style="--delay: {delay}ms;">
    <img
        src={tech.url}
        alt={tech.name}
        class:invert={tech.invert}
        loading="lazy"
    />

    <span class="tech-name">{tech.name}</span>
</div>

<style>
    .icon-wrapper {
        --icon-size: 2.8rem;
        --icon-size-mobile: 1.8rem;
        --hover-scale: 1.1;
        --pop-initial-scale: 0.5;
        --transition-duration: 0.4s;
        --tooltip-y-offset: -1rem;
        --hover-y-lift: -5px;

        position: relative;
        width: var(--icon-size);
        height: var(--icon-size);
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        border: none;
        padding: 0;

        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        transform: scale(var(--pop-initial-scale));
        transition:
            opacity var(--transition-duration) ease-out,
            transform var(--transition-duration)
                cubic-bezier(0.175, 0.885, 0.32, 1.275),
            visibility var(--transition-duration);

        transition-delay: var(--delay);
        will-change: opacity, transform;
    }

    .icon-wrapper.visible {
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
        transform: scale(1);
    }

    .icon-wrapper:hover {
        transform: translateY(var(--hover-y-lift)) scale(var(--hover-scale)) !important;
        transition-delay: 0ms !important;
        z-index: 10;
        cursor: pointer;
    }

    .tech-name {
        position: absolute;
        bottom: var(--tooltip-y-offset);
        left: 50%;
        transform: translateX(-50%) translateY(5px);
        font-size: 0.65rem;
        color: white;
        white-space: nowrap;
        opacity: 0;
        transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        pointer-events: none;
        font-weight: 500;
        text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .icon-wrapper:hover .tech-name {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    .invert {
        filter: invert(1) brightness(1.5);
    }

    @media (max-width: 768px) {
        .icon-wrapper {
            width: var(--icon-size-mobile);
            height: var(--icon-size-mobile);
        }
    }
</style>
