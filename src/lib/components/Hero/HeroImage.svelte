<script lang="ts">
    import FloatingShape from "$lib/components/Hero/FloatingShape.svelte";
</script>

<div class="hero-right">
    <div class="image-portal">
        <div class="portal-glow"></div>
        <div class="image-wrapper glass-card">
            <img src="/images/photo-optimized.jpg" alt="Lukas Faure" />
        </div>

        <FloatingShape class="shape-1" content="★" color="var(--accent-cyan)" />
        <FloatingShape
            class="shape-3"
            content="●"
            color="var(--accent-purple)"
        />
        <FloatingShape class="shape-4" content="★" color="white" />
        <FloatingShape class="shape-5" content="■" color="var(--accent-cyan)" />
    </div>
</div>

<style>
    .hero-right {
        flex: 1;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .image-portal {
        position: relative;
        width: 100%;
        max-width: 400px;
        aspect-ratio: 1;
    }

    .portal-glow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 120%;
        height: 120%;
        background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.2) 0%,
            transparent 70%
        );
        filter: blur(40px);
        z-index: -1;
        animation: pulse 8s infinite alternate;
    }

    .image-wrapper {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        overflow: hidden;
        border: 3px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
        background: var(--bg-card);
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @keyframes pulse {
        from {
            transform: translate(-50%, -50%) scale(0.9);
            opacity: 0.5;
        }
        to {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
        }
    }

    @media (max-width: 1024px) {
        .hero-right {
            width: 100%;
            max-width: 320px;
        }
    }
</style>
