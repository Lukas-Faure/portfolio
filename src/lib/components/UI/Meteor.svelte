<script lang="ts">
  import { base } from "$app/paths";
  interface Props {
    mode?: "auto" | "manual";
    progress?: number;
    isActive?: boolean;
    logos?: (string | { url: string; invert?: boolean })[];
    color?: string;
    size?: number;
    trailLength?: number;
    particleCount?: number;
  }

  let {
    mode = "manual",
    progress = 0,
    isActive = false,
    logos = [],
    color = "#bd00ff",
    size = 40,
    trailLength = 400,
    particleCount = 15,
  }: Props = $props();

  let play = $state(false);
  let hasPlayedOnce = $state(false);

  $effect(() => {
    if (mode === "auto" && isActive && !hasPlayedOnce) {
      triggerMeteor();
      hasPlayedOnce = true;
    }
  });

  function triggerMeteor() {
    if (play) return;
    play = true;
    setTimeout(() => (play = false), 2500);
  }

  const manualTop = $derived(`${progress}%`);
</script>

{#if mode === "manual" || play}
  <div
    class="meteor-container"
    class:manual={mode === "manual"}
    class:auto={mode === "auto"}
    class:play
    style="--meteor-color: {color}; --meteor-size: {size}px; --top-pos: {manualTop}; --trail-height: {trailLength}px"
  >
    <div class="meteor">
      <div class="head"></div>
      <div class="trail"></div>

      {#if logos.length > 0}
        <div class="particles-container">
          {#each Array(particleCount) as _, i}
            {@const item = logos[Math.floor(Math.random() * logos.length)]}
            {@const logoUrl = typeof item === "string" ? item : item.url}
            {@const isInverted = typeof item === "string" ? false : item.invert}
            <div
              class="logo-particle"
              style="--delay: {i * 0.1}s; --x-offset: {Math.random() * 80 -
                40}px"
            >
              <img
                src={logoUrl.startsWith("/") ? `${base}${logoUrl}` : logoUrl}
                alt=""
                class:invert={isInverted}
              />
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

<style>
  .meteor-container {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 100%;
    pointer-events: none;
    z-index: 10;
    overflow: visible;
  }

  .meteor-container.manual {
    top: 0;
  }

  .meteor {
    position: absolute;
    width: var(--meteor-size);
    height: var(--trail-height, 400px);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }

  .manual .meteor {
    top: var(--top-pos);
    transform: translateX(-50%) translateY(calc(-100% + var(--meteor-size) / 2));
    height: var(--trail-height, 150px);
  }

  .auto.play .meteor {
    animation: slide-down 1.5s cubic-bezier(0.2, 0, 0.2, 1) forwards;
  }

  .head {
    width: var(--meteor-size);
    height: var(--meteor-size);
    background: #fff;
    box-shadow:
      0 0 20px 5px var(--meteor-color),
      0 0 40px var(--meteor-color);
    border-radius: 2px;
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .trail {
    width: calc(var(--meteor-size) * 0.35);
    height: 100%;
    background: linear-gradient(
      to top,
      var(--meteor-color),
      rgba(189, 0, 255, 0.1),
      transparent
    );
    filter: blur(3px);
  }

  .particles-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .logo-particle {
    position: absolute;
    width: 20px;
    height: 20px;
    opacity: 0;
    left: calc(50% + var(--x-offset));
    animation: logo-rise 1.5s var(--delay) infinite;
  }

  .logo-particle img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: grayscale(1) brightness(2) drop-shadow(0 0 5px var(--meteor-color));
    opacity: 0.6;
  }

  .invert {
    filter: invert(1) grayscale(1) brightness(2)
      drop-shadow(0 0 5px var(--meteor-color)) !important;
  }

  @keyframes slide-down {
    0% {
      top: -500px;
      opacity: 0;
      transform: translateX(-50%) scale(0.6);
    }
    15% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
    100% {
      top: 100%;
      opacity: 0;
      transform: translateX(-50%) scale(0.8);
    }
  }

  @keyframes logo-rise {
    0% {
      opacity: 0;
      bottom: 0%;
      transform: scale(1) rotate(0deg);
    }
    20% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
      bottom: 80%;
      transform: scale(0.3) rotate(180deg);
    }
  }
</style>
