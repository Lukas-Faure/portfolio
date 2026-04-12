<script lang="ts">
  import type { Project } from "$lib/data/projects";

  let { project }: { project: Project } = $props();
</script>

<div class="content-wrapper code-view json">
  <div class="code-line comment">// manifest_fonctions.json</div>
  <div class="code-line"><span class="bracket">{`{`}</span></div>
  <div class="code-line indent"><span class="key">"id"</span>: <span class="string">"{project.slug}"</span>,</div>
  <div class="code-line indent"><span class="key">"version"</span>: <span class="string">"1.0.0"</span>,</div>
  <div class="code-line indent"><span class="key">"capabilities"</span>: <span class="bracket">[</span></div>
  {#each project.features || [] as feature, i}
    <div class="code-line indent-2">
      <span class="string">"{feature}"</span>{i < (project.features?.length || 0) - 1 ? ',' : ''}
    </div>
  {/each}
  <div class="code-line indent"><span class="bracket">]</span>,</div>
  <div class="code-line"><span class="bracket">{`}`}</span></div>
</div>

<style>
  .content-wrapper { padding: 2rem; font-family: 'Fira Code', monospace; font-size: 0.95rem; line-height: 1.6; }
  .code-line { display: flex; align-items: center; gap: 0.5rem; min-height: 1.5rem; }
  .indent { padding-left: 1.5rem; }
  .indent-2 { padding-left: 3rem; }
  .comment { color: #8b949e; font-style: italic; }
  .bracket { color: #8b949e; }
  .key { color: #79c0ff; }
  .string { color: #a5d6ff; }
</style>
