<script setup lang="ts">
// Hero section component
</script>

<template>
  <section class="hero" id="home">
    <div class="container hero-container">
      <div class="hero-content-title">
        <h1 class="hero-subtitle">Hello, i'm</h1>
        <h1 class="hero-title">Amalia</h1>
        <img src="@/assets/images/curved-line.svg" alt="Curved Icon" class="hero-curved-icon" />
      </div>

      <div class="hero-content-social">
        <div class="hero-social">
          <a href="https://linkedin.com" target="_blank" class="hero-social-icon">
            <img src="@/assets/images/linkedin-icon.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com" target="_blank" class="hero-social-icon">
            <img src="@/assets/images/github-icon.svg" alt="GitHub" />
          </a>
          <a href="https://instagram.com" target="_blank" class="hero-social-icon">
            <img src="@/assets/images/instagram-icon.svg" alt="Instagram" />
          </a>
        </div>
        <div class="hero-stats">
          <h3>4+ Years<br />Frontend Developer</h3>
        </div>
      </div>

      <div class="hero-stats-mobile">
        <h3>4+ Years<br />Frontend Developer</h3>
      </div>

      <div class="hero-text-container">
        <p class="hero-code">
          <span class="hero-code-input">Onput: </span>
          <span class="hero-code-output">Scalable, Beautiful Interfaces</span>
        </p>
        <p class="hero-code">
          <span class="hero-code-input">Input: </span>
          <span class="hero-code-output">Complex Ideas</span>
        </p>
        <p class="hero-code">
          <span class="hero-code-comment">// Powered by code, empathy, and design thinking</span>
        </p>
      </div>
      <div class="hero-image-container">
        <img src="@/assets/images/half-circle.svg" alt="Background shape" class="half-circle-bg" />
        <img src="@/assets/images/profile-image.png" alt="Amalia Nurlita" class="hero-image" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-top: 50px;
    @media (max-width: 768px) { // Changed from 992px to 768px to keep tablet layout same as desktop
      flex-direction: column-reverse;
      text-align: center;
    }
  }

  &-content {
    max-width: 600px;
    position: relative;
    z-index: 1;
    &-title {
      position: absolute;
      z-index: 4;
      left: 50px;
      display: flex;
      flex-direction: row;
      gap: .5rem;
      top: 0px;
      line-height: 1;
    }
  }

  &-curved-icon {
    position: absolute;
    z-index: 4;
    left: 0;
    top: 92px;
  }

  &-subtitle {
    font-size: 96px;
    margin-bottom: 1rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
  }

  &-title {
    font-size: 96px;
    color: var(--tertiary-color);
    margin-bottom: 1.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
  }

  &-text-container {
    margin-bottom: 2rem;
    position: absolute;
    z-index: 10;
    right: 50px;
    top: 160px;
  }

  &-code {
    font-family: 'Monaco', monospace;
    font-size: 13px;
    font-weight: 800;
    &-comment {
      color: var(--secondary-color);
    }

    &-input {
      color: var(--tertiary-color);
    }

    &-output {
      color: var(--primary-color);
    }
  }
  &-content-social {
    position: absolute;
    left: 50px;
    top: 175px;
  }
  &-stats {
    color: var(--secondary-color);
    margin: 2rem 0;
    h3 {
      font-size: 1.5rem;
    }
  }

  &-social {
    display: flex;
    gap: 12px;
    &-icon {
      width: 46px;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (max-width: 768px) {
        width: 24px;
        height: 24px;
      }
      img {
        @media (max-width: 768px) {
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  &-image-container {
    position: relative;
    height: 469px;
    margin-top: 20px;
    .half-circle-bg {
      position: absolute;
      z-index: 1;
      width: 500px;
      height: 356px;
      bottom: 0;
      left: 0;
    }
  }

  &-image {
    width: 500px;
    height: auto;
    position: relative;
    z-index: 2;
  }

  &-stats-mobile {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    &-title {
      font-size: 3.5rem;
    }

    &-subtitle {
      font-size: 3.5rem;
    }

    &-image {
      width: 300px;
    }

    &-container {
      align-items: flex-end;
    }

    &-image-container {
      height: 283px;
      .half-circle-bg {
        width: 300px;
        height: 218px;
      }
    }

    &-social {
      justify-content: start;
      top: 100px;
      left: 0;
    }
    &-content-social {
      bottom: 0px;
    }

    &-text-container {
      z-index: 10;
      right: 35%;
      top: 100px;
      p {
        font-size: 10px;
      }
    }

    &-stats {
      margin: 1rem 0;
      h3 {
        font-size: 18px;
      }
    }

    &-stats-mobile {
      display: none;
    }

    &-content-title,
    &-content-social,
    &-text-container {
      margin: 1rem auto;
      text-align: left
    }

    &-curved-icon {
      transform: scale(0.65);
      transform-origin: left;
      top: 50px;
    }
  }
}

// Add a mobile-specific breakpoint for smaller adjustments
@media (max-width: 425px) {
  .hero {
    &-title {
      font-size: 2.5rem;
    }

    &-subtitle {
      font-size: 2.5rem;
    }

    &-container {
      align-items: center;
      margin-top: 2rem;
      margin-bottom: 1rem;
    }

    &-image-container {
      margin-top: 45px;
    }

    &-content-title,
    &-content-social,
    &-text-container {
      margin: 0rem auto;
      text-align: left;
    }

    &-content-social, &-text-container {
      position: static;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
    }

    &-content-social {
      margin-top: 2rem;
    }

    &-stats {
      display: none;
    }

    &-stats-mobile {
      display: flex;
      position: absolute;
      top: 24%;
      right: 25px;
      z-index: 10;
      color: var(--secondary-color);
      h3 {
        font-size: 15px;
        text-align: left;
      }
    }

    &-curved-icon {
      transform: scale(0.45);
      transform-origin: left;
      top: 33px;
    }
  }
}

@media (max-width: 375px) {
  .hero {
    &-content-title {
      transform: scale(0.9);
      transform-origin: left;
    }
    &-stats-mobile {
      h3 {
        font-size: 13px;
      }
    }
  }
}
@media (max-width: 320px) {
  .hero {
    &-content-title {
      transform: scale(0.8);
      transform-origin: left;
      left: 10%;
      width: 100%;
    }
    &-stats-mobile {
      top: 29%;
      right: 8px;
      h3 {
        font-size: 12px;
      }
    }
  }
}
</style>
