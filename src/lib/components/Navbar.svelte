<script lang="ts">
  import { base } from "$app/paths";
  let isScrolled = $state(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      isScrolled = window.scrollY > 20;
    });
  }
</script>

<nav class:scrolled={isScrolled}>
  <div class="container nav-content">
    <a href="{base}/" class="logo">
      <span class="heading-gradient">LF</span>
    </a>

    <div class="links">
      <a href="{base}/">Accueil</a>
      <a href="{base}/cv">CV</a>
      <a href="{base}/projects">Projets</a>
      <a href="{base}/contact" class="btn-primary">Contact</a>
    </div>
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    padding: 1.5rem 0;
    transition: var(--transition-smooth);
    border-bottom: 1px solid transparent;
  }

  nav.scrolled {
    padding: 1rem 0;
    background: rgba(5, 7, 10, 0.8);
    backdrop-filter: var(--glass-blur);
    border-bottom: 1px solid var(--glass-border);
  }

  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
  }

  .logo {
    font-family: "Outfit", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  .links {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .links a {
    font-weight: 500;
    color: var(--text-secondary);
    font-size: 0.9rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .links a:hover {
    color: var(--text-primary);
  }

  .btn-primary {
    background: var(--blue);
    padding: 0.6rem 1.5rem;
    border-radius: 2rem;
    color: white !important;
    font-weight: 600 !important;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(139, 92, 246, 0.4);
  }
</style>
