<script lang="ts">
  import type { Project } from "$lib/data/projects";

  let { project }: { project: Project } = $props();
</script>

<div class="content-wrapper markdown-view">
  <header class="detail-header">
    <h1 class="project-title"><span class="hash">#</span> {project.title}</h1>
    <div class="project-links">
      {#if project.projectUrl}
        <a
          href={project.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="link-btn run"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
          >
          VOIR LE PROJET
        </a>
      {/if}
    </div>
  </header>
  <img src={project.coverImage} alt={project.title} class="hero-image" />

  <div class="section">
    <h2 class="section-title"><span class="token">##</span> Présentation</h2>
    <div class="desc-content">
      {#if project.longDescription}
        {#each project.longDescription as block}
          <div class="desc-block">
            <h3 class="block-title">### {block.title}</h3>
            <p>{block.content}</p>
          </div>
        {/each}
      {:else}
        <p>{project.description}</p>
      {/if}
    </div>
  </div>

  <div class="section">
    <h2 class="section-title"><span class="token">##</span> Métadonnées</h2>
    <div class="metadata-quote">
      <blockquote>
        <p><strong>Statut :</strong> Actif / Terminé</p>
        <p><strong>Date de sortie :</strong> {project.date}</p>
        <p>
          <strong>Catégorie :</strong>
          {project.category || "Coding"}
        </p>
      </blockquote>
    </div>
  </div>
</div>

<style>
  .content-wrapper {
    padding: 2rem;
    max-width: 900px;
    margin: 0 auto;
  }
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
  .project-title {
    font-family: "Outfit", sans-serif;
    font-size: 2.5rem;
    font-weight: 800;
    color: #5da4f6;
  }
  .hash {
    color: #8b949e;
    opacity: 0.5;
  }

  .link-btn.run {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    background: #238636;
    color: white;
    border-radius: 6px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  .link-btn.run:hover {
    background: #2ea043;
  }

  .hero-image {
    width: 100%;
    max-width: 600px;
    max-height: 300px;
    object-fit: cover;
    display: block;
    margin: 0 auto 3rem;
    border-radius: 12px;
    border: 1px solid #30363d;
  }
  .section {
    margin-bottom: 3rem;
  }
  .section-title {
    font-family: monospace;
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1.5rem;
    display: flex;
    gap: 0.5rem;
  }
  .token {
    color: #8b949e;
    opacity: 0.5;
  }
  .desc-block {
    margin-bottom: 1.5rem;
  }
  .block-title {
    font-family: monospace;
    font-size: 1.1rem;
    color: #5da4f6;
    margin-bottom: 0.5rem;
  }
  .desc-content p {
    line-height: 1.8;
    color: #c9d1d9;
  }
  .metadata-quote blockquote {
    border-left: 4px solid #30363d;
    padding-left: 1.5rem;
    margin: 0;
    color: #8b949e;
  }
  .metadata-quote p {
    margin: 0.5rem 0;
  }
  .metadata-quote strong {
    color: #c9d1d9;
  }
</style>
