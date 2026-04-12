<script lang="ts">
  import { fade, fly } from "svelte/transition";
  import { ContactStatus } from "$lib/types/contact";

  interface Props {
    logs: string[];
    status: ContactStatus;
    onReset: () => void;
  }

  let { logs = [], status, onReset }: Props = $props();
</script>

<div class="hacker-logs" in:fade>
  {#each logs as log}
    <div class="log-line" in:fly={{ y: 5, duration: 200 }}>
      <span class="prompt">>></span>
      {log}
    </div>
  {/each}

  {#if status === ContactStatus.SUCCESS}
    <div class="final-success" in:fade={{ delay: 500 }}>
      <div class="success-banner">MAIL ENVOYÉ</div>
      <p>Votre message a bien été transmis.</p>
      <button class="reset-btn" onclick={onReset}>
        Envoyer un nouveau message
      </button>
    </div>
  {/if}
</div>

<style>
  .hacker-logs {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }

  .log-line {
    color: #3fb950;
    font-size: 0.9rem;
    display: flex;
    gap: 0.75rem;
  }

  .prompt {
    color: #8b5cf6;
    font-weight: bold;
    user-select: none;
  }

  .final-success {
    margin-top: 3rem;
    text-align: center;
    border: 1px solid rgba(63, 185, 80, 0.3);
    background: rgba(63, 185, 80, 0.05);
    padding: 2.5rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
  }

  .final-success::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #3fb950, transparent);
    animation: scanline 2s linear infinite;
  }

  @keyframes scanline {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }

  .success-banner {
    color: #3fb950;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
    text-shadow: 0 0 15px rgba(63, 185, 80, 0.4);
  }

  .final-success p {
    color: #c9d1d9;
    margin-bottom: 2rem;
  }

  .reset-btn {
    background: transparent;
    color: #c9d1d9;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    cursor: pointer;
    font-family: inherit;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(93, 164, 246, 0.3);
  }

  .reset-btn:hover {
    background: rgba(93, 164, 246, 0.1);
    border-color: #5da4f6;
    color: #f8fafc;
    box-shadow: 0 0 20px rgba(93, 164, 246, 0.2);
    transform: translateY(-2px);
  }
</style>
