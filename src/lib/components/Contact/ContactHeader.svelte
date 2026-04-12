<script lang="ts">
  import Breadcrumb from "$lib/components/Common/Breadcrumb.svelte";
  import { CONTACT_EMAIL } from "$lib/constants/contact";

  let copied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    copied = true;
    setTimeout(() => (copied = false), 2000);
  }
</script>

<div class="header">
  <Breadcrumb current="contact" />
  <h1 class="title">Me <span class="highlight">Contacter</span></h1>
  <p class="subtitle">
    Vous pouvez me contacter directement à
    <span class="email-wrapper">
      <a href="mailto:{CONTACT_EMAIL}" class="email-link">{CONTACT_EMAIL}</a>
      <button class="copy-btn" onclick={copyEmail} title="Copier l'email">
        {#if copied}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#3fb950"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><polyline points="20 6 9 17 4 12"></polyline></svg
          >
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><rect x="9" y="9" width="13" height="13" rx="2" ry="2"
            ></rect><path
              d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
            ></path></svg
          >
        {/if}
      </button>
    </span>
    ou via le formulaire de contact ci-dessous.
  </p>
</div>

<style>
  .header {
    margin-bottom: 3rem;
  }

  .title {
    font-family: "Outfit", sans-serif;
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 800;
    margin: 1.5rem 0 0.5rem;
    color: #f8fafc;
  }

  .highlight {
    color: #5da4f6;
  }

  .subtitle {
    color: #8b949e;
    font-size: 1.1rem;
    line-height: 1.6;
  }

  .email-wrapper {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: rgba(93, 164, 246, 0.1);
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    border: 1px solid rgba(93, 164, 246, 0.2);
  }

  .email-link {
    color: #5da4f6;
    font-weight: 600;
    text-decoration: none;
    transition: color 0.2s;
  }

  .email-link:hover {
    color: #8b5cf6;
    text-decoration: underline;
  }

  .copy-btn {
    background: transparent;
    border: none;
    color: #8b949e;
    cursor: pointer;
    padding: 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s;
    border-radius: 4px;
  }

  .copy-btn:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f8fafc;
  }
</style>
