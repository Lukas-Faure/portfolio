<script lang="ts">
    import { techRows } from "$lib/components/TechStack/techData";
    import Meteor from "$lib/components/UI/Meteor.svelte";

    let { isActive = false } = $props();

    const techLogos = techRows.flat().map((t) => ({
        url: t.url,
        invert: t.invert,
    }));
</script>

<div class="meteor-flash-wrapper">
    <Meteor
        mode="auto"
        {isActive}
        logos={techLogos}
        trailLength={600}
        particleCount={25}
    />
</div>

<style>
    .meteor-flash-wrapper {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100%;
        pointer-events: none;
        z-index: 5;
    }
</style>
