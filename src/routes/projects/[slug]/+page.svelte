<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/state";
  import { ProjectService } from "$lib/services/projectService";
  import { IDEController } from "$lib/controllers/ideController.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Breadcrumb from "$lib/components/Common/Breadcrumb.svelte";

  import FileExplorer from "$lib/components/Projects/IDE/FileExplorer.svelte";
  import EditorTabs from "$lib/components/Projects/IDE/EditorTabs.svelte";
  import EditorView from "$lib/components/Projects/IDE/EditorView.svelte";
  import TerminalHeader from "$lib/components/UI/TerminalHeader.svelte";

  const slug = $derived(page.params.slug ?? "");
  const project = $derived(ProjectService.getProjectBySlug(slug));

  const ide = $derived(project ? new IDEController(project) : null);
</script>

<svelte:head>
  <title>{project?.title || "Projet"} | Détail</title>
</svelte:head>

<Navbar />

<div class="project-detail-page">
  <div class="nebula-bg"></div>

  {#if project && ide}
    <div class="top-nav-wrapper">
      <div class="nav-stack">
        <Breadcrumb
          items={[{ label: "projets", href: `${base}/projects` }]}
          current={project.slug}
        />
        <a href="{base}/projects" class="back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            ><line x1="19" y1="12" x2="5" y2="12"></line><polyline
              points="12 19 5 12 12 5"
            ></polyline></svg
          >
          <span>retour</span>
        </a>
      </div>
    </div>

    <main class="ide-container">
      <div class="ide-layout-wrapper">
        <TerminalHeader
          title="ide://{project.slug}"
          hideDotsOnMobile={false}
          dotSize="12px"
        />
        <div class="ide-content">
          <FileExplorer controller={ide} />
          <section class="editor-host">
            <EditorTabs controller={ide} />
            <EditorView controller={ide} />
          </section>
        </div>
      </div>
    </main>
  {:else}
    <div class="not-found">
      <h1>404: PROJET_NON_TROUVÉ</h1>
      <a href="{base}/projects">retour</a>
    </div>
  {/if}
</div>

<style>
  .project-detail-page {
    min-height: 100vh;
    background: #000000;
    color: #c9d1d9;
    padding-top: 6rem;
    position: relative;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
  }
  .top-nav-wrapper {
    max-width: 1400px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 20;
    flex-shrink: 0;
  }
  .nav-stack {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #8b949e;
    text-decoration: none;
    font-family: monospace;
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    border: 1px solid #30363d;
    border-radius: 6px;
    background: #0d1117;
    transition: all 0.2s;
    width: fit-content;
  }
  .back-btn:hover {
    color: #5da4f6;
    border-color: #5da4f6;
    background: rgba(93, 164, 246, 0.05);
  }

  .nebula-bg {
    position: fixed;
    inset: 0;
    background: radial-gradient(
        circle at 10% 20%,
        rgba(88, 166, 255, 0.05) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 90% 80%,
        rgba(139, 92, 246, 0.05) 0%,
        transparent 40%
      );
    filter: blur(60px);
    z-index: 0;
  }

  .ide-container {
    max-width: 1400px;
    width: calc(100% - 2rem);
    margin: 0.5rem auto 1rem;
    background: rgba(13, 17, 23, 0.95);
    backdrop-filter: blur(12px);
    border: 1px solid #30363d;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  .ide-layout-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .ide-content {
    display: flex;
    width: 100%;
  }

  .editor-host {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 1rem;
  }
  .not-found a {
    color: #5da4f6;
    text-decoration: none;
    font-family: monospace;
  }
</style>
