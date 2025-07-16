<script setup lang="ts">
interface StackItem {
  id: number;
  src: string;
  alt: string;
}

// Create an array of stack objects in reverse order (from 30 to 1)
const stacks: StackItem[] = [];

// Generate the stack array in reverse order
for (let i = 30; i >= 1; i--) {
  stacks.push({
    id: i,
    src: `/src/assets/images/stacks/stack${i}.png`,
    alt: `Technology ${i}`
  });
}
</script>

<template>
  <section class="skills" id="skills">
    <div class="container">
      <h2 class="section-title">My Starting Pack</h2>
      <div class="skills-container">
        <div
          v-for="stack in stacks"
          :key="stack.id"
          class="skill-item"
        >
          <img :src="stack.src" :alt="stack.alt" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.skills {
  padding: 0 0 2rem 0;
  background-color: var(--background-color);
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.skills-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

.skill-item {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--white-color);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }

  img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
}

@media (max-width: 768px) {
  .skills-container {
    gap: 1rem;
  }

  .skill-item {
    width: 80px;
    height: 80px;
  }
}

@media (max-width: 480px) {
  .skill-item {
    width: 70px;
    height: 70px;
  }
}
</style>
