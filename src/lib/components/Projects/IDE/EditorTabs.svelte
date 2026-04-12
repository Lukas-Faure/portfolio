<script lang="ts">
  import {
    IDE_FILES,
    type IDEController,
    IDEFileName
  } from "$lib/controllers/ideController.svelte";

  let { controller }: { controller: IDEController } = $props();

  function handleClose(id: IDEFileName, e: MouseEvent) {
    e.stopPropagation();
    controller.closeFile(id);
  }
</script>

<div class="editor-tabs">
  {#each controller.openFiles as fileId}
    {@const file = IDE_FILES.find((f) => f.id === fileId)}
    <div
      class="tab {controller.activeFile === fileId ? 'active' : ''}"
      onclick={() => controller.setActiveFile(fileId)}
      role="button"
      tabindex="0"
      onkeydown={(e) => e.key === "Enter" && controller.setActiveFile(fileId)}
    >
      <span class="file-icon" style="color: {file?.color}">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          ><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
          ></path><polyline points="14 2 14 8 20 8"></polyline></svg
        >
      </span>
      <span>{fileId}</span>
      <button
        class="close-tab"
        onclick={(e) => handleClose(fileId, e)}
        aria-label="Close tab">×</button
      >
    </div>
  {/each}
</div>

<style>
  .editor-tabs {
    display: flex;
    background: #0d1117;
    border-bottom: 1px solid #30363d;
    overflow-x: auto;
    height: 40px;
    z-index: 5;
  }

  .editor-tabs::-webkit-scrollbar {
    height: 2px;
  }
  .editor-tabs::-webkit-scrollbar-thumb {
    background: #30363d;
  }

  .tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    height: 100%;
    background: transparent;
    border: none;
    border-right: 1px solid #30363d;
    color: #8b949e;
    font-size: 0.8rem;
    font-family: monospace;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    white-space: nowrap;
  }

  .tab:hover {
    background: #161b22;
    color: #c9d1d9;
  }
  .tab.active {
    background: #1e2227;
    color: #fff;
  }
  .tab.active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #5da4f6;
  }

  .file-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-tab {
    background: transparent;
    border: none;
    color: #8b949e;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    border-radius: 4px;
    transition: all 0.2s;
    margin-left: 4px;
  }

  .close-tab:hover {
    background: #30363d;
    color: #f85149;
  }
</style>
