<script setup lang="ts">
// Navbar component
const scrollToContact = () => {
  // Find the contact section element
  const contactSection = document.getElementById('contact');

  if (contactSection) {
    // Scroll to the contact section with smooth behavior
    contactSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
</script>

<template>
  <nav class="navbar">
    <div class="container navbar-container">
      <h1 class="navbar-logo">Amalia Nurlita</h1>

      <button class="navbar-button" @click="scrollToContact">Get in touch</button>

    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-button {
  background-color: #2C2C2C;
  color: var(--background-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  height: 46px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.2s ease;
  @media (max-width: 768px) {
    font-size: 12px;
    height: 36px;
  }
  @media (max-width: 425px) {
    font-size: 10px;
    height: 32px;
  }
  &:hover {
    background-color: #404040;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
}
.navbar {
  padding: 1.5rem 0;
  background-color: var(--background-color);
  z-index: 100;

  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    font-size: 1.5rem;
    font-weight: 800;
    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
    @media (max-width: 425px) {
      font-size: 1rem;
    }
  }

  &-links {
    display: flex;
    gap: 2rem;

    a {
      text-decoration: none;
      color: var(--primary-color);
      font-weight: 500;
      font-size: 1rem;
      transition: color 0.3s ease;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }
}
</style>
