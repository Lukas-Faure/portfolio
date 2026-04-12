<script lang="ts">
  import type { Project } from "$lib/data/projects";
  import TerminalHeader from "$lib/components/UI/TerminalHeader.svelte";

  let { project }: { project: Project } = $props();

  const slug = $derived(project.slug);
  const detailUrl = $derived(`/projects/${slug}`);
  const windowTitle = $derived(
    `~/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}.json`,
  );
</script>

<div class="project-card">
  <div class="window-card">
    <TerminalHeader title={windowTitle} hideDotsOnMobile={false} />
    <div class="window-body">
      <div class="image-area">
        <img src={project.coverImage} alt="" class="hero" />
        <div class="actions-overlay">
          <div class="btn-group">
            <a href={detailUrl} class="btn-primary">
              <div class="icon-play">
                <svg viewBox="0 0 24 24" fill="currentColor"
                  ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg
                >
              </div>
              <span>DÉTAILS</span>
            </a>
            {#if project.githubUrl}
              <a
                href={project.githubUrl}
                class="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="icon-git">
                  <svg viewBox="0 0 24 24" fill="currentColor"
                    ><path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    /></svg
                  >
                </div>
                <span>GITHUB</span>
              </a>
            {/if}
          </div>
        </div>
      </div>
      <div class="info-area">
        <h3>{project.title}</h3>
        <div class="meta">DATE: <span>{project.date}</span></div>
        <p class="description">{project.description}</p>
        <div class="tags">
          {#each project.tags as tag}
            <span class="tag">import <code>{`{ ${tag} }`}</code></span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  :root {
    --card-bg: #0d1117;
    --card-border: #30363d;
    --accent-blue: #5da4f6;
    --accent-green: #3fb950;
    --accent-violet: #8b5cf6;
    --text-main: #c9d1d9;
    --text-muted: #8b949e;
  }

  .project-card {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .btn-primary,
  .btn-secondary {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    background: rgba(22, 27, 34, 0.95);
    border: 1px solid rgba(240, 246, 252, 0.1);
    color: #fff;
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 30;
    min-width: 100px;
  }

  .btn-primary:hover {
    border-color: var(--accent-green);
    background: #21262d;
    transform: translateY(-2px) scale(1.05);
  }

  .btn-secondary:hover {
    border-color: var(--accent-blue);
    background: #21262d;
    transform: translateY(-2px) scale(1.05);
  }

  .btn-group {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }

  .icon-play,
  .icon-git {
    width: 40px;
    height: 40px;
    padding: 0.75rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }

  .icon-play {
    color: var(--accent-green);
    background: rgba(63, 185, 80, 0.1);
    border: 1px solid rgba(63, 185, 80, 0.2);
  }

  .icon-git {
    color: var(--accent-blue);
    background: rgba(93, 164, 246, 0.1);
    border: 1px solid rgba(93, 164, 246, 0.2);
  }

  .icon-play svg,
  .icon-git svg {
    width: 20px;
    height: 20px;
  }

  .window-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: all 0.3s;
  }

  .window-card:hover {
    border-color: var(--accent-violet);
    transform: translateY(-5px);
  }

  .image-area {
    position: relative;
    height: 200px;
    background: #000;
  }

  .hero {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  .info-area {
    padding: 1.5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .info-area h3 {
    color: var(--accent-blue);
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
  }
  .meta {
    font-family: monospace;
    font-size: 0.75rem;
    color: var(--text-muted);
    margin-bottom: 1rem;
  }
  .meta span {
    color: var(--accent-violet);
  }
  .description {
    font-size: 0.9rem;
    color: var(--text-main);
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
  }

  .tag {
    font-family: monospace;
    font-size: 0.7rem;
    background: #161b22;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
    color: var(--text-muted);
  }

  .tag code {
    color: var(--accent-blue);
  }

  .actions-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 20;
  }

  .project-card:hover .actions-overlay {
    opacity: 1;
  }
</style>
