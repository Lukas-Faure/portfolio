<script lang="ts">
  import { ContactStatus, type ContactFormData } from "$lib/types/contact";
  import TerminalLine from "./TerminalLine.svelte";

  interface Props {
    formData: ContactFormData;
    status: ContactStatus;
    onSubmit: (e: SubmitEvent) => void;
  }

  let { formData = $bindable(), status, onSubmit }: Props = $props();

  let ln = $state(1);
  let col = $state(1);

  function updateCursor(e: any, lineOffset: number) {
    const target = e.target;
    const start = target.selectionStart || 0;
    const textBefore = target.value.substring(0, start);

    if (target.tagName === "TEXTAREA") {
      const lines = textBefore.split("\n");
      ln = lineOffset + lines.length - 1;
      col = lines[lines.length - 1].length + 1;
    } else {
      ln = lineOffset;
      col = start + 1;
    }
  }

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    onSubmit(e);
  }
</script>

<form onsubmit={handleSubmit} class="form-grid">
  <div class="line">
    <span class="line-num">01</span>
    <span class="comment">/**</span>
  </div>
  <div class="line">
    <span class="line-num">02</span>
    <span class="comment"> * Formulaire de contact</span>
  </div>
  <div class="line">
    <span class="line-num">03</span>
    <span class="comment">
      * Remplissez les paramètres ci-dessous (dans les zones pointillées)</span
    >
  </div>
  <div class="line">
    <span class="line-num">04</span>
    <span class="comment"> */</span>
  </div>

  <TerminalLine
    lineNum="05"
    varName="votre_nom"
    bind:bindValue={formData.name}
    placeholder="Tapez votre nom..."
    onUpdateCursor={updateCursor}
  />
  <TerminalLine
    lineNum="06"
    varName="votre_email"
    bind:bindValue={formData.email}
    placeholder="vous@exemple.com"
    type="email"
    onUpdateCursor={updateCursor}
  />
  <TerminalLine
    lineNum="07"
    varName="sujet_message"
    bind:bindValue={formData.subject}
    placeholder="Objet de votre demande..."
    onUpdateCursor={updateCursor}
  />
  <TerminalLine
    lineNum="08"
    varName="contenu_message"
    bind:bindValue={formData.message}
    placeholder="Tapez votre message ici..."
    isTextArea={true}
    onUpdateCursor={updateCursor}
  />

  <div class="terminal-footer">
    <div class="status-bar">
      <span class="branch"> main</span>
      <span class="cursor-pos">Ln {ln}, Col {col}</span>
    </div>

    <button
      type="submit"
      class="submit-btn"
      disabled={status === ContactStatus.SENDING}
    >
      envoyer()
    </button>
  </div>
</form>

<style>
  .status-bar {
    font-size: 0.8rem;
    color: #8b949e;
    display: flex;
    gap: 1.5rem;
  }

  .comment {
    color: #8b949e;
    font-style: italic;
  }

  .line {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    border-radius: 4px;
  }

  .line-num {
    color: #484f58;
    user-select: none;
    min-width: 20px;
    font-size: 0.8rem;
  }

  .terminal-footer {
    margin-top: 2rem;
    border-top: 1px solid #30363d;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .status-bar {
    font-size: 0.8rem;
    color: #8b949e;
    display: flex;
    gap: 1.5rem;
  }

  .submit-btn {
    background: var(--blue);
    color: white;
    border: none;
    padding: 0.7rem 1.8rem;
    border-radius: 6px;
    font-weight: 600;
    font-family: monospace;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--blue-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(35, 134, 54, 0.3);
    border-color: rgba(255, 255, 255, 0.2);
  }

  .submit-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .submit-btn:disabled {
    opacity: 0.5;
    cursor: wait;
  }

  @media (max-width: 768px) {
    .status-bar {
      display: none;
    }
  }
</style>
