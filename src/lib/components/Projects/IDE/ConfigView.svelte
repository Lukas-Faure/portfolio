<script lang="ts">
  import type { Project } from "$lib/data/projects";

  let { project }: { project: Project } = $props();
</script>

<div class="content-wrapper code-view config">
  <div class="code-line comment"># ==========================================</div>
  <div class="code-line comment"># CONFIGURATION {project.title.toUpperCase()}</div>
  <div class="code-line comment"># ==========================================</div>
  <div class="code-line"></div>
  <div class="code-line"><span class="property">ENV</span> <span class="operator">=</span> <span class="value">"PRODUCTION"</span></div>
  <div class="code-line"><span class="property">DEBUG</span> <span class="operator">=</span> <span class="value">"FAUX"</span></div>
  <div class="code-line"></div>
  <div class="code-line comment"># Core technologies</div>
  {#each project.techDetails || [] as detail}
    <div class="code-line">
      <span class="property">{detail.name.toUpperCase().replace(/\s+/g, '_')}</span>
      <span class="operator">=</span>
      <span class="value">"{detail.value}"</span>
    </div>
  {/each}
  <div class="code-line"></div>
  <div class="code-line comment"># System hooks</div>
  <div class="code-line">
    <span class="property">RENDER_MODE</span> <span class="operator">=</span> <span class="value">"GPU_ACCELERATED"</span>
  </div>
</div>

<style>
  .content-wrapper { padding: 2rem; font-family: 'Fira Code', monospace; font-size: 0.95rem; line-height: 1.6; }
  .code-line { display: flex; align-items: center; gap: 0.5rem; min-height: 1.5rem; }
  .comment { color: #8b949e; font-style: italic; }
  .property { color: #ff7b72; }
  .operator { color: #c9d1d9; }
  .value { color: #a5d6ff; }
</style>
