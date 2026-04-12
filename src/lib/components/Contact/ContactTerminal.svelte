<script lang="ts">
  import TerminalHeader from "../UI/TerminalHeader.svelte";
  let { children } = $props();
</script>

<div class="terminal-wrapper">
  <TerminalHeader dotSize="12px">
    <div class="tabs">
      <div class="tab active">contact.sh</div>
    </div>
  </TerminalHeader>

  <div class="terminal-body">
    {@render children()}
  </div>
</div>

<style>
  .terminal-wrapper {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
  }

  .tabs {
    display: flex;
  }
  .tab {
    padding: 0.75rem 1.5rem;
    font-family: monospace;
    font-size: 0.85rem;
    color: #8b949e;
    background: #0d1117;
    border-left: 1px solid #30363d;
    border-right: 1px solid #30363d;
  }

  .terminal-body {
    padding: 2rem;
    font-family: "Fira Code", monospace;
    min-height: 400px;
  }

  @media (max-width: 768px) {
    .terminal-body {
      padding: 1rem;
    }
  }
</style>
