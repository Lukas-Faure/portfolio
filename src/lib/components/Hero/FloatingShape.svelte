<script lang="ts">
    interface Props {
        class?: string;
        content?: string;
        color?: string;
    }
    let {
        class: className = "",
        content = "",
        color = "white",
    }: Props = $props();
</script>

<div class="floating-shape {className}" style="color: {color};">
    {content}
</div>

<style>
    .floating-shape {
        position: absolute;
        text-shadow:
            0 0 10px rgba(255, 255, 255, 0.8),
            0 0 20px var(--accent-purple);
        pointer-events: none;
        z-index: 20;
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
    }

    :global(.shape-1) {
        top: 20%;
        right: 10%;
        font-size: 1.6rem;
        animation: pulse-blink 3s infinite ease-in-out;
    }
    :global(.shape-3) {
        bottom: 25%;
        right: 15%;
        font-size: 3.6rem;
        animation: rotate-return 6s infinite ease-in-out;
    }
    :global(.shape-4) {
        bottom: 15%;
        left: 20%;
        font-size: 2.4rem;
        animation: bob 4s infinite ease-in-out;
    }
    :global(.shape-5) {
        top: 35%;
        left: 5%;
        font-size: 2rem;
        animation: pulse-blink 4s infinite ease-in-out;
        animation-delay: 1s;
    }

    @keyframes pulse-blink {
        0%,
        100% {
            transform: scale(0.8);
            opacity: 0.3;
        }
        50% {
            transform: scale(1.2);
            opacity: 1;
            filter: blur(1px);
        }
    }

    @keyframes bob {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-25px);
        }
    }

    @keyframes rotate-return {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(45deg);
        }
    }
</style>
