<script lang="ts">
  import { ProjectService } from "$lib/services/projectService";
  import ProjectCard from "$lib/components/Projects/ProjectCard.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Breadcrumb from "$lib/components/Common/Breadcrumb.svelte";
  import TerminalHeader from "$lib/components/UI/TerminalHeader.svelte";

  const projects = ProjectService.getAllProjects();
</script>

<svelte:head>
  <title>Projets</title>
</svelte:head>

<Navbar />

<div class="explorer-page">
  <div class="nebula-bg"></div>

  <div class="container main-content">
    <header class="projects-hero">
      <div class="hero-container">
        <Breadcrumb current="projets" />

        <div class="title-main">
          <h1 class="archive-title">
            Mes <span class="highlight">Projets</span>
          </h1>
        </div>

        <div class="terminal-window">
          <TerminalHeader title="~" hideDotsOnMobile={false} />
          <div class="terminal-body-mini">
            <div class="command-line">
              <span class="prompt">guest@portfolio:</span>
              <span class="path">projects</span>
              <span class="command">$ portfolio status --all</span>
            </div>
            <div class="command-output">
              <span class="status-badge online">● SYSTEM_ONLINE</span>
              <span class="stat-text"
                >INDEXING: {projects.length} PROJECTS FOUND</span
              >
              <span class="stat-text">| CLOUD_SYNC: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="projects-grid">
      {#each projects as project}
        <div class="grid-item">
          <ProjectCard {project} />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .explorer-page {
    min-height: 100vh;
    background: #000000;
    color: #c9d1d9;
    padding-top: 6rem;
    position: relative;
    overflow-x: hidden;
  }

  .nebula-bg {
    position: fixed;
    inset: 0;
    background: radial-gradient(
        circle at 20% 30%,
        rgba(93, 164, 246, 0.05) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 80% 70%,
        rgba(139, 92, 246, 0.05) 0%,
        transparent 40%
      );
    filter: blur(60px);
    z-index: 0;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }

  .projects-hero {
    margin-bottom: 6rem;
    padding: 0;
    position: relative;
    z-index: 10;
  }

  .title-main {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .archive-title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(3rem, 8vw, 4.5rem);
    font-weight: 900;
    margin: 0;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .terminal-window {
    margin-top: 3rem;
    background: rgba(13, 17, 23, 0.7);
    border: 1px solid rgba(48, 54, 61, 0.6);
    border-radius: 0.8rem;
    overflow: hidden;
    width: 100%;
    max-width: 850px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
  }

  .terminal-body-mini {
    padding: 1.2rem 1.5rem;
    font-family: "Fira Code", monospace;
    font-size: 0.85rem;
  }

  .command-line {
    display: flex;
    gap: 0.8rem;
    align-items: center;
    margin-bottom: 0.6rem;
  }

  .prompt {
    color: #8b5cf6;
    font-weight: bold;
  }
  .path {
    color: #5da4f6;
  }
  .command {
    color: #f8fafc;
  }

  .command-output {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: #8b949e;
    font-size: 0.8rem;
    flex-wrap: wrap;
  }

  .status-badge {
    font-weight: bold;
    letter-spacing: 0.05em;
  }

  .stat-text {
    opacity: 0.7;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 1rem;
  }

  .online {
    color: #3fb950 !important;
    text-shadow: 0 0 10px rgba(63, 185, 80, 0.4);
  }

  .highlight {
    color: var(--accent-blue);
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 2.5rem;
  }

  .grid-item {
    height: 100%;
  }

  @media (max-width: 768px) {
    .archive-title {
      font-size: 2rem;
    }
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
