<script lang="ts">
  import { type IDEController, IDEFileName } from "$lib/controllers/ideController.svelte";
  import MarkdownView from "$lib/components/Projects/IDE/MarkdownView.svelte";
  import BlueprintView from "$lib/components/Projects/IDE/BlueprintView.svelte";
  import ConfigView from "$lib/components/Projects/IDE/ConfigView.svelte";

  let { controller }: { controller: IDEController } = $props();
  const project = $derived(controller.project);
</script>

<section class="ide-editor">
  {#if project}
    <div class="editor-content">
      {#if controller.activeFile === IDEFileName.PRESENTATION}
        <MarkdownView {project} />
      {:else if controller.activeFile === IDEFileName.FEATURES}
        <BlueprintView {project} />
      {:else if controller.activeFile === IDEFileName.CONFIG}
        <ConfigView {project} />
      {:else if controller.openFiles.length === 0}
        <div class="empty-editor-secret">
          <div class="secret-content">
            <div class="icon-sad">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8b949e"
                stroke-width="1.5"
                ><circle cx="12" cy="12" r="10"></circle><line
                  x1="8"
                  y1="15"
                  x2="16"
                  y2="15"
                ></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line
                  x1="15"
                  y1="9"
                  x2="15.01"
                  y2="9"
                ></line></svg
              >
            </div>
            <h3>Aucun fichier ouvert</h3>
            <p>
              Vous avez fermé tous les dossiers... Il vous reste une dernière
              action :
            </p>
            <a href="/contact" class="contact-btn-big">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                ><path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z"
                ></path><polyline points="22,6 12,13 2,6"></polyline></svg
              >
              <span>CONTACTER MOI</span>
            </a>
          </div>
        </div>
      {:else}
        <div class="empty-editor">
          <p>Sélectionnez un fichier dans l'explorateur pour l'afficher.</p>
        </div>
      {/if}
    </div>
  {/if}
</section>

<style>
  .ide-editor {
    display: flex;
    flex-direction: column;
    background: #0d1117;
  }
  .editor-content {
    position: relative;
  }

  .empty-editor-secret {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 2rem;
    background: radial-gradient(
      circle at center,
      rgba(88, 166, 255, 0.03) 0%,
      transparent 70%
    );
  }
  .secret-content h3 {
    font-size: 1.5rem;
    color: #fff;
    margin: 1.5rem 0 0.5rem;
  }
  .secret-content p {
    color: #8b949e;
    margin-bottom: 2rem;
  }
  .contact-btn-big {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: #5da4f6;
    color: #fff;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 700;
    transition: all 0.3s;
  }
  .contact-btn-big:hover {
    background: #4a93e5;
    transform: scale(1.05);
  }

  .empty-editor {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #8b949e;
  }
</style>
