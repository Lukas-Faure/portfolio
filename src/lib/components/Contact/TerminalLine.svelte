<script lang="ts">
  interface Props {
    lineNum: string;
    varName: string;
    bindValue: string;
    placeholder: string;
    type?: string;
    isTextArea?: boolean;
    onUpdateCursor: (e: any, lineOffset: number) => void;
  }

  let {
    lineNum,
    varName,
    bindValue = $bindable(),
    placeholder,
    type = "text",
    isTextArea = false,
    onUpdateCursor,
  }: Props = $props();

  const lineNumberInt = $derived(parseInt(lineNum));
</script>

{#snippet prefix()}
  <span class="line-num">{lineNum}</span>
  <span class="keyword">const</span>
  <span class="variable">{varName}</span>
  <span class="operator">=</span>
{/snippet}

{#if !isTextArea}
  <div
    class="line"
    onkeyup={(e) => onUpdateCursor(e, lineNumberInt)}
    onclick={(e) => onUpdateCursor(e, lineNumberInt)}
    role="presentation"
  >
    {@render prefix()}
    <div class="input-wrapper">
      <span class="string">"</span>
      <input {type} bind:value={bindValue} {placeholder} required />
      <span class="string">"</span>
    </div>
  </div>
{:else}
  <div class="line textarea-line">
    {@render prefix()}
    <span class="string">`</span>
  </div>

  <div class="line textarea-wrapper">
    <span class="line-num"
      >{(lineNumberInt + 1).toString().padStart(2, "0")}</span
    >
    <textarea
      bind:value={bindValue}
      {placeholder}
      required
      onkeyup={(e) => onUpdateCursor(e, lineNumberInt + 1)}
      onclick={(e) => onUpdateCursor(e, lineNumberInt + 1)}
    ></textarea>
  </div>

  <div class="line">
    <span class="line-num"
      >{(lineNumberInt + 2).toString().padStart(2, "0")}</span
    >
    <span class="string">`</span><span class="operator">;</span>
  </div>
{/if}

<style>
  .line {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.25rem 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
    border-radius: 4px;
    transition: background 0.2s ease;
  }

  .line:hover {
    background: rgba(255, 255, 255, 0.03);
  }

  .line-num {
    color: #484f58;
    user-select: none;
    min-width: 20px;
    font-size: 0.8rem;
  }

  .keyword {
    color: #ff7b72;
  }
  .variable {
    color: #79c0ff;
  }
  .operator {
    color: #c9d1d9;
  }
  .string {
    color: #a5d6ff;
  }

  .input-wrapper {
    display: inline-flex;
    align-items: center;
    width: 65%;
    background: rgba(48, 54, 61, 0.4);
    border-radius: 4px;
    padding: 0 0.5rem;
    border: 1px dashed #484f58;
    transition: all 0.2s;
  }

  .input-wrapper:focus-within {
    border-color: #5da4f6;
    background: rgba(93, 164, 246, 0.1);
  }

  input,
  textarea {
    background: transparent;
    border: none;
    color: #a5d6ff;
    width: 100%;
    padding: 0.25rem;
    font-family: "Fira Code", monospace;
    font-size: inherit;
    outline: none;
    transition: all 0.2s;
  }

  textarea {
    background: rgba(48, 54, 61, 0.4);
    border: 1px dashed #484f58;
    border-radius: 4px;
    padding: 0.5rem;
    resize: none;
    height: 100%;
  }

  textarea:focus {
    font-style: italic;
  }

  .textarea-line {
    margin-top: 1.5rem;
    align-items: flex-start;
  }

  .textarea-wrapper {
    height: 180px;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    .line {
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .line-num {
      display: none;
    }
    .input-wrapper {
      min-width: 100%;
      margin-top: 0.2rem;
    }
  }
</style>
