<script lang="ts">
  import {
    IDE_FILES,
    type IDEController,
  } from "$lib/controllers/ideController.svelte";

  let { controller }: { controller: IDEController } = $props();
</script>

<aside class="ide-sidebar">
  <div class="sidebar-header">EXPLORATEUR</div>
  <nav class="sidebar-nav">
    <div class="nav-group">
      <div class="group-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg
        >
        INFOS_PROJET
      </div>
      {#each IDE_FILES as file}
        <button
          class="nav-item {controller.activeFile === file.id ? 'active' : ''}"
          onclick={() => controller.openFile(file.id)}
        >
          <div class="file-icon" style="color: {file.color}">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              ><path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
              ></path><polyline points="14 2 14 8 20 8"></polyline><line
                x1="16"
                y1="13"
                x2="8"
                y2="13"
              ></line><line x1="16" y1="17" x2="8" y2="17"></line></svg
            >
          </div>
          {file.label}
        </button>
      {/each}
    </div>
  </nav>
</aside>

<style>
  .ide-sidebar {
    width: 260px;
    background: #0d1117;
    border-right: 1px solid #30363d;
    flex-shrink: 0;
    position: sticky;
    top: 120px;
    height: fit-content;
    max-height: calc(100vh - 140px);
    overflow-y: auto;
  }

  .sidebar-header {
    padding: 0.75rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: #8b949e;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #30363d;
  }

  .sidebar-nav {
    padding: 0.5rem 0;
  }
  .group-title {
    padding: 0.5rem 1rem;
    font-size: 0.65rem;
    font-weight: 700;
    color: #8b949e;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.4rem 1.25rem;
    background: transparent;
    border: none;
    color: #8b949e;
    font-family: monospace;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }

  .nav-item:hover {
    background: #161b22;
    color: #c9d1d9;
  }
  .nav-item.active {
    background: #21262d;
    color: #fff;
  }

  .file-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .ide-sidebar {
      display: none;
    }
  }
</style>
