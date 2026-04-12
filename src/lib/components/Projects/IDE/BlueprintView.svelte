<script lang="ts">
  import type { Project } from "$lib/data/projects";
  import { fade, fly } from "svelte/transition";

  let { project }: { project: Project } = $props();
</script>

<div class="blueprint-view" in:fade>
  <header class="blueprint-header">
    <div class="code-line comment"># Manifeste du Projet</div>
    <div class="code-line"><span class="key">id</span>: <span class="string">{project.slug}</span></div>
    <div class="code-line"><span class="key">statut</span>: <span class="value success">READY</span></div>
    <div class="code-line"><span class="key">fonctionnalités</span>:</div>
  </header>

  <div class="features-list">
    {#each project.features || [] as feature, i}
      <div 
        class="feature-item" 
        in:fly={{ x: -10, delay: i * 30, duration: 200 }}
      >
        <span class="bullet">•</span>
        <span class="feature-text">{feature}</span>
      </div>
    {/each}
  </div>

  <footer class="blueprint-footer">
    <div class="code-line"><span class="key">auteur</span>: <span class="string">Lukas Faure</span></div>
  </footer>
</div>

<style>
  .blueprint-view {
    padding: 2.5rem;
    font-family: 'Fira Code', monospace;
    color: #c9d1d9;
    background: #0d1117;
  }

  .blueprint-header {
    margin-bottom: 2rem;
    border-bottom: 1px solid #30363d;
    padding-bottom: 1.5rem;
  }

  .code-line {
    font-size: 0.9rem;
    line-height: 1.6;
    display: flex;
    gap: 0.5rem;
  }

  .comment { color: #8b949e; font-style: italic; margin-bottom: 0.5rem; }
  .key { color: #79c0ff; font-weight: 500; }
  .string { color: #a5d6ff; }
  .value.success { color: #3fb950; font-size: 0.8rem; font-weight: 700; background: rgba(63, 185, 80, 0.1); padding: 0.1rem 0.6rem; border-radius: 4px; }

  .features-list {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin: 1.5rem 0;
  }

  .feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-left: 1rem;
  }

  .bullet {
    color: #58a6ff;
    font-size: 1.2rem;
  }

  .feature-text {
    font-family: 'Fira Code', monospace;
    font-size: 0.95rem;
    color: #f0f6fc;
  }

  .blueprint-footer {
    margin-top: 3rem;
    border-top: 1px solid #30363d;
    padding-top: 1.5rem;
    opacity: 0.7;
  }
</style>
