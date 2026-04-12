<script lang="ts">
  import ProjectCard from "$lib/components/Projects/ProjectCard.svelte";
  import { ProjectService } from "$lib/services/projectService";

  const featuredProjects = ProjectService.getFeaturedProjects(3);
</script>

<section id="projects" class="container">
  <h2 class="section-title font-display">
    Mes <span class="heading-gradient">Projets</span>
  </h2>
  <div class="projects-grid">
    {#each featuredProjects as project}
      <ProjectCard {project} />
    {/each}
  </div>

  <div class="view-all-container">
    <a href="/projects" class="btn-secondary">
      <span>Voir tous les projets</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><line x1="5" y1="12" x2="19" y2="12"></line><polyline
          points="12 5 19 12 12 19"
        ></polyline></svg
      >
    </a>
  </div>
</section>

<style>
  .section-title {
    font-size: 3rem;
    margin-bottom: 3rem;
    padding: 0 2rem;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 2rem;
    max-width: 1400px;
    margin: 0 auto 4rem;
  }

  @media (max-width: 1100px) {
    .projects-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

  .view-all-container {
    display: flex;
    justify-content: center;
    padding-bottom: 8rem;
  }

  .btn-secondary {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3rem;
    color: var(--text-secondary);
    font-weight: 600;
    transition: var(--transition-smooth);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .btn-secondary:hover {
    background: rgba(93, 164, 246, 0.1);
    border-color: rgba(93, 164, 246, 0.3);
    color: var(--text-primary);
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(93, 164, 246, 0.15);
  }

  .btn-secondary svg {
    transition: transform 0.3s ease;
  }

  .btn-secondary:hover svg {
    transform: translateX(5px);
  }
</style>
