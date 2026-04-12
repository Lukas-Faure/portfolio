<div class="stars-bg"></div>
<div class="nebula-bg"></div>

<style>
  .stars-bg {
    position: fixed;
    inset: 0;
    background-image: radial-gradient(
        1px 1px at 20px 30px,
        #fff,
        rgba(0, 0, 0, 0)
      ),
      radial-gradient(1px 1px at 40px 70px, #fff, rgba(0, 0, 0, 0)),
      radial-gradient(1.5px 1.5px at 90px 40px, #fff, rgba(0, 0, 0, 0));
    background-size: 200px 200px;
    opacity: 0.3;
    z-index: 0;
  }

  .nebula-bg {
    position: fixed;
    inset: 0;
    background: radial-gradient(
        circle at 10% 10%,
        rgba(93, 164, 246, 0.08) 0%,
        transparent 40%
      ),
      radial-gradient(
        circle at 90% 90%,
        rgba(139, 92, 246, 0.08) 0%,
        transparent 40%
      );
    filter: blur(80px);
    z-index: 0;
  }
</style>
