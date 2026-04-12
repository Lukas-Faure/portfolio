<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import ContactBackground from "$lib/components/Contact/ContactBackground.svelte";
  import ContactHeader from "$lib/components/Contact/ContactHeader.svelte";
  import ContactTerminal from "$lib/components/Contact/ContactTerminal.svelte";
  import ContactForm from "$lib/components/Contact/ContactForm.svelte";
  import ContactLogs from "$lib/components/Contact/ContactLogs.svelte";
  import { ContactStatus, type ContactFormData } from "$lib/types/contact";
  import { FORMSPREE_URL, SIMULATED_LOGS } from "$lib/constants/contact";

  let formData = $state<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  let status = $state(ContactStatus.IDLE);
  let logs = $state<string[]>([]);

  async function handleSubmit(e: SubmitEvent) {
    status = ContactStatus.SENDING;
    logs = [];

    for (const log of SIMULATED_LOGS) {
      logs = [...logs, log];
      await new Promise((r) => setTimeout(r, 300 + Math.random() * 300));
    }

    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Erreur réseau");

      status = ContactStatus.SUCCESS;
      formData.name = "";
      formData.email = "";
      formData.subject = "";
    } catch (e) {
      console.error("Formspree Error:", e);
      status = ContactStatus.ERROR;
    }
  }

  function handleReset() {
    status = ContactStatus.IDLE;
    formData.message = "";
  }
</script>

<svelte:head>
  <title>Lukas Faure | Contact</title>
</svelte:head>

<Navbar />

<div class="contact-page">
  <ContactBackground />

  <main class="container">
    <ContactHeader />

    <ContactTerminal>
      {#if status === ContactStatus.SENDING || status === ContactStatus.SUCCESS}
        <ContactLogs {logs} {status} onReset={handleReset} />
      {:else}
        <ContactForm
          bind:formData
          {status}
          onSubmit={handleSubmit}
        />
      {/if}
    </ContactTerminal>
  </main>
</div>

<style>
  .contact-page {
    min-height: 100vh;
    background: #000000;
    color: #c9d1d9;
    padding-top: 7rem;
    position: relative;
    overflow-x: hidden;
    padding-bottom: 5rem;
  }

  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }
</style>
