<script lang="ts">
  import { personalInfo } from "$lib/data/about";
  import TerminalHeader from "../UI/TerminalHeader.svelte";
</script>

<div class="code-window glass-card">
  <TerminalHeader title="about_me.json" dotSize="12px" />
  <div class="window-content">
    <pre><code>
<span class="bracket">{"{ "}</span>
  <span class="key">"nom"</span>: <span class="string"
          >"{personalInfo.nom}"</span
        >,
  <span class="key">"age"</span>: <span class="number">{personalInfo.age}</span
        >,
  <span class="key">"ville"</span>: <span class="string"
          >"{personalInfo.ville}"</span
        >,
  <span class="key">"experience"</span>: <span class="string"
          >"{personalInfo.experience}"</span
        >,
  <span class="key">"specialisation"</span>: <span class="string"
          >"{personalInfo.specialisation}"</span
        >,
  <span class="key">"recherche"</span>: <span class="string"
          >"{personalInfo.recherche}"</span
        >,
  <span class="key">"passions"</span>: [
{#each personalInfo.passions as passion, i}
          <span class="string">"{passion}"</span>{i <
          personalInfo.passions.length - 1
            ? ","
            : ""}{/each}
  ]
<span class="bracket">{" }"}</span>
    </code></pre>
  </div>
</div>

<style>
  .code-window {
    width: 100%;
    max-width: 700px;
    background: var(--bg-card);
    backdrop-filter: var(--glass-blur);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    font-family: "JetBrains Mono", "Fira Code", monospace;
    transition: var(--transition-smooth);
  }

  .window-content {
    padding: 1.5rem;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  pre {
    margin: 0;
  }

  .bracket {
    color: var(--text-primary);
    opacity: 0.8;
  }
  .key {
    color: var(--accent-purple);
  }
  .string {
    color: var(--accent-blue);
  }
  .number {
    color: var(--accent-cyan);
  }


</style>
