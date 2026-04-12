<script lang="ts">
  import TerminalHeader from "$lib/components/UI/TerminalHeader.svelte";
  interface Props {
    cvPath: string;
    height?: string;
    mobileHeight?: string;
  }

  let { cvPath, height = "1200px", mobileHeight = "800px" }: Props = $props();
</script>

<div class="viewer-wrapper">
  <TerminalHeader
    title="Preview: CV_Faure_Lukas.pdf"
    dotSize="12px"
    hideDotsOnMobile={false}
  />
  <div
    class="pdf-viewer"
    style:--viewer-height={height}
    style:--mobile-height={mobileHeight}
  >
    <iframe
      src="{cvPath}#toolbar=0"
      title="CV Lukas Faure"
      width="100%"
      height="100%"
      frameborder="0"
    ></iframe>
  </div>
</div>

<style>
  .viewer-wrapper {
    background: #0d1117;
    border: 1px solid #30363d;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .pdf-viewer {
    height: var(--viewer-height);
    background: #0d1117;
  }

  @media (max-width: 768px) {
    .pdf-viewer {
      height: var(--mobile-height);
    }
  }
</style>
