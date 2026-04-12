<script lang="ts">
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero/Hero.svelte";
  import TechStack from "$lib/components/TechStack/TechStack.svelte";
  import AboutSection from "$lib/components/About/AboutSection.svelte";
  import ProjectsSection from "$lib/components/Projects/ProjectsSection.svelte";
</script>

<Navbar />

<main>
  <Hero />
  <TechStack />
  <AboutSection />
  <ProjectsSection />
</main>

<style>
  main {
    flex: 1;
  }
</style>
