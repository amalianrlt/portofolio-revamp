<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineAsyncComponent } from 'vue';

// Define components using dynamic imports to workaround TypeScript errors
const Navbar = defineAsyncComponent(() => import('./components/Navbar.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('./components/ExperienceSection.vue'));
const SkillsSection = defineAsyncComponent(() => import('./components/SkillsSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('./components/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/ContactSection.vue'));
const FooterSection = defineAsyncComponent(() => import('./components/FooterSection.vue'));

// For blur effect at bottom
const showBlur = ref(true);
let lastScrollY = 0;
let scrollTimeout: any = null;
let lastScrollTime = Date.now();
let scrollFrameRequest: number | null = null;

// More reliable function to check if we should hide the blur
const shouldHideBlur = () => {
  const currentScrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Check if we're near the bottom of the page
  const isAtBottom = currentScrollY + windowHeight >= documentHeight - 500;

  // Get references to sections
  const contactSection = document.getElementById('contact');
  const footerSection = document.querySelector('footer');

  // Check if Contact or Footer sections are in view
  let isContactOrFooterVisible = false;

  if (contactSection) {
    const rect = contactSection.getBoundingClientRect();
    isContactOrFooterVisible = rect.top < windowHeight && rect.bottom > 0;
  }

  if (!isContactOrFooterVisible && footerSection) {
    const rect = footerSection.getBoundingClientRect();
    isContactOrFooterVisible = rect.top < windowHeight && rect.bottom > 0;
  }

  return isAtBottom || isContactOrFooterVisible;
};

// Handle scroll using requestAnimationFrame for smoother performance
const handleScroll = () => {
  // Cancel any existing animation frame to prevent duplicates
  if (scrollFrameRequest) {
    cancelAnimationFrame(scrollFrameRequest);
  }

  // Use requestAnimationFrame to handle the scroll event on the next paint
  scrollFrameRequest = requestAnimationFrame(() => {
    const currentScrollY = window.scrollY;
    const now = Date.now();

    // Check if we should hide the blur
    if (shouldHideBlur()) {
      showBlur.value = false;
    } else {
      // Normal scroll behavior
      if (currentScrollY > lastScrollY) {
        showBlur.value = false;
      } else {
        showBlur.value = true;
      }
    }

    // Clear any existing timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    // If no scroll for 300ms, re-evaluate blur state
    scrollTimeout = setTimeout(() => {
      // Force a final check when scrolling stops
      const finalCheck = shouldHideBlur();
      showBlur.value = finalCheck ? false : true;
    }, 300);

    // Track scroll data
    lastScrollY = currentScrollY;
    lastScrollTime = now;
  });
};

// Add additional handler for scroll end
const handleScrollEnd = () => {
  // Do one final check to ensure blur state is correct
  showBlur.value = shouldHideBlur() ? false : true;
};

// Add and remove scroll listeners
onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('scrollend', handleScrollEnd, { passive: true });
  // Initial check
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scrollend', handleScrollEnd);

  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  if (scrollFrameRequest) {
    cancelAnimationFrame(scrollFrameRequest);
  }
});
</script>

<template>
  <div class="app">
    <Navbar />
    <main>
      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <FooterSection />

    <!-- Bottom blur effect -->
    <div class="bottom-blur" :class="{ 'hide-blur': !showBlur }" v-if="showBlur"></div>
  </div>
</template>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

main {
  flex: 1;
}

.bottom-blur {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0) 100%);
  pointer-events: none;
  z-index: 10;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.hide-blur {
  opacity: 0;
}
</style>
