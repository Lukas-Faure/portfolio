<script lang="ts">
  import HeroText from "./HeroText.svelte";
  import HeroImage from "./HeroImage.svelte";
</script>

<section class="hero">
  <div class="stars-overlay"></div>

  <div class="container hero-content">
    <HeroText />
    <HeroImage />
  </div>
</section>

<style>
  .hero {
    position: relative;
    padding: 12rem 2rem 8rem 2rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
    overflow: hidden;
    background: radial-gradient(
      circle at 50% -20%,
      rgba(139, 92, 246, 0.3) 0%,
      transparent 60%
    );
  }

  .stars-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
    background-image: radial-gradient(1px 1px at 10% 10%, #fff, transparent),
      radial-gradient(
        1.5px 1.5px at 20% 40%,
        rgba(255, 255, 255, 0.8),
        transparent
      ),
      radial-gradient(2px 2px at 30% 70%, #fff, transparent),
      radial-gradient(1px 1px at 40% 20%, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(2.5px 2.5px at 50% 80%, #fff, transparent),
      radial-gradient(1px 1px at 60% 30%, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(
        1.5px 1.5px at 70% 60%,
        rgba(6, 182, 212, 0.8),
        transparent
      ),
      radial-gradient(2px 2px at 80% 10%, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(1px 1px at 90% 50%, #fff, transparent),
      radial-gradient(
        1.5px 1.5px at 95% 90%,
        rgba(139, 92, 246, 0.9),
        transparent
      );
    background-size:
      150px 150px,
      250px 250px,
      350px 350px,
      100px 100px,
      450px 450px,
      200px 200px,
      300px 300px,
      400px 400px,
      180px 180px,
      280px 280px;
    animation: drift 150s linear infinite;
  }

  @keyframes drift {
    from {
      background-position:
        0 0,
        0 0,
        0 0,
        0 0,
        0 0,
        0 0,
        0 0,
        0 0,
        0 0,
        0 0;
    }
    to {
      background-position:
        -300px 300px,
        -500px 500px,
        -700px 700px,
        -200px 200px,
        -900px 900px,
        -400px 400px,
        -600px 600px,
        -800px 800px,
        -360px 360px,
        -560px 560px;
    }
  }

  .hero-content {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .hero-content {
      flex-direction: column;
      text-align: center;
      gap: 5rem;
    }
  }
</style>
