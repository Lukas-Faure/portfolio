<script lang="ts">
    import { onMount } from "svelte";
    import { techRows } from "./techData";
    import TechIcon from "./TechIcon.svelte";
    import MeteorFlash from "./MeteorFlash.svelte";

    const REVEAL_DELAY_MS = 400;
    const OBSERVER_THRESHOLD = 0.4;
    const OBSERVER_ROOT_MARGIN = "0px 0px -100px 0px";

    let sectionRef: HTMLElement;
    let sectionVisible = $state(false);
    let iconsVisible = $state(false);

    /**
     * Logique de calcul du seuil
     * Calcule un seuil normalisé (0..1) pour chaque icône en fonction de
     * son angle par rapport à la pointe inférieure centrale du triangle.
     */
    function calculateRadialThreadhold(rowIndex: number, colIndex: number) {
        const rowCount = techRows.length;
        const rowWidth = techRows[rowIndex].length;

        // Coordonnées relatives au centre de la base du triangle
        const verticalDist = rowCount - 1 - rowIndex;
        const horizontalPivot = colIndex - (rowWidth - 1) / 2;

        const rawAngle =
            verticalDist === 0 ? 0 : Math.atan2(horizontalPivot, verticalDist);

        // Convertit l'angle en une valeur normalisée (0..1)
        const MIN_ANGLE = Math.atan2(-0.5, 1);
        const MAX_ANGLE = Math.atan2(0.5, 1);

        const normalized = (rawAngle - MIN_ANGLE) / (MAX_ANGLE - MIN_ANGLE);
        return Math.min(Math.max(normalized, 0), 1);
    }

    const iconToOrderMap = new Map();
    const sortedTechs = techRows
        .flatMap((row, r) =>
            row.map((_, c) => ({ r, c, t: calculateRadialThreadhold(r, c) })),
        )
        .sort((a, b) => a.t - b.t);

    sortedTechs.forEach((item, i) => {
        const uniqueThreshold = i / (sortedTechs.length - 1);
        iconToOrderMap.set(`${item.r}-${item.c}`, uniqueThreshold);
    });

    onMount(() => {
        /**
         * L'observateur se désactive immédiatement après la première révélation
         */
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionVisible = true;
                    setTimeout(() => {
                        iconsVisible = true;
                    }, REVEAL_DELAY_MS);
                    if (sectionRef) observer.unobserve(sectionRef);
                }
            },
            {
                threshold: OBSERVER_THRESHOLD,
                rootMargin: OBSERVER_ROOT_MARGIN,
            },
        );

        if (sectionRef) observer.observe(sectionRef);
    });
</script>

<section class="tech-stack-section" bind:this={sectionRef}>
    <MeteorFlash isActive={sectionVisible} />

    <div class="tech-stack-container">
        {#each techRows as row, rowIndex}
            <div class="tech-row">
                {#each row as tech, colIndex}
                    {@const threshold = iconToOrderMap.get(
                        `${rowIndex}-${colIndex}`,
                    )}
                    <TechIcon {tech} isVisible={iconsVisible} {threshold} />
                {/each}
            </div>
        {/each}
    </div>
</section>

<style>
    .tech-stack-section {
        --section-spacing-y: 1rem;
        --section-spacing-bottom: 2rem;
        --section-z-index: 100;

        width: 100%;
        padding: var(--section-spacing-y) 2rem;
        display: flex;
        justify-content: center;
        position: relative;
        z-index: var(--section-z-index);
        margin-bottom: var(--section-spacing-bottom);
    }

    .tech-stack-container {
        --container-max-width: 1000px;
        --base-gap: 1.2rem;
        --mobile-gap: 1.5rem;

        width: 100%;
        max-width: var(--container-max-width);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--base-gap);
    }

    .tech-row {
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        gap: var(--base-gap);
    }

    @media (max-width: 768px) {
        .tech-stack-container,
        .tech-row {
            gap: var(--mobile-gap);
        }
    }
</style>
