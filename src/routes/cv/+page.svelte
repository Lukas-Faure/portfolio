<script lang="ts">
  import { base } from "$app/paths";
  import Navbar from "$lib/components/Navbar.svelte";
  import PdfViewer from "$lib/components/CV/PdfViewer.svelte";
  import Breadcrumb from "$lib/components/Common/Breadcrumb.svelte";
  
  const cvPath = `${base}/pdf/CV_Faure_Lukas.pdf`;
</script>

<svelte:head>
  <title>Lukas Faure | CV</title>
</svelte:head>

<Navbar />

<div class="cv-page">
  <div class="nebula-bg"></div>


  <main class="cv-container">
    <div class="header">
      <Breadcrumb current="mon_cv.pdf" />
      
      <div class="controls">
        <h1 class="title">Mon <span class="highlight">Curriculum Vitae</span></h1>
        <div class="btn-group-cv">
          <a href={cvPath} target="_blank" class="open-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            <span>Ouvrir PDF</span>
          </a>
          <a href={cvPath} download class="download-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>Télécharger</span>
          </a>
        </div>
      </div>
    </div>

    <PdfViewer {cvPath} />
  </main>
</div>

<style>
  .cv-page {
    min-height: 100vh;
    background: #000000;
    color: #c9d1d9;
    padding-top: 7rem;
    position: relative;
    overflow-x: hidden;
    padding-bottom: 5rem;
  }

  .nebula-bg {
    position: fixed;
    inset: 0;
    background: 
      radial-gradient(circle at 15% 15%, rgba(93, 164, 246, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 85% 85%, rgba(139, 92, 246, 0.08) 0%, transparent 40%);
    filter: blur(80px);
    z-index: 0;
  }



  .cv-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  .header {
    margin-bottom: 3rem;
  }

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin: 0;
    color: #f8fafc;
  }

  .highlight {
    color: #5da4f6;
    background: linear-gradient(to right, #5da4f6, #80bbff);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .btn-group-cv {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .open-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem 1.5rem;
    background: rgba(93, 164, 246, 0.1);
    border: 1px solid rgba(93, 164, 246, 0.3);
    border-radius: 8px;
    color: #5da4f6;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
  }

  .open-btn:hover {
    background: rgba(93, 164, 246, 0.2);
    border-color: #5da4f6;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(93, 164, 246, 0.2);
  }

  .download-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.8rem 1.5rem;
    background: rgba(63, 185, 80, 0.1);
    border: 1px solid rgba(63, 185, 80, 0.3);
    border-radius: 8px;
    color: #3fb950;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
  }

  .download-btn:hover {
    background: rgba(63, 185, 80, 0.2);
    border-color: #3fb950;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(63, 185, 80, 0.2);
  }

  @media (max-width: 768px) {
    .controls { flex-direction: column; align-items: flex-start; }
  }
</style>

