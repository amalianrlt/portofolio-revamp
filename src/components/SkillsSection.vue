<script setup lang="ts">
// Import all stack images individually
import stack1 from '@/assets/images/stacks/stack1.png';
import stack2 from '@/assets/images/stacks/stack2.png';
import stack3 from '@/assets/images/stacks/stack3.png';
import stack4 from '@/assets/images/stacks/stack4.png';
import stack5 from '@/assets/images/stacks/stack5.png';
import stack6 from '@/assets/images/stacks/stack6.png';
import stack7 from '@/assets/images/stacks/stack7.png';
import stack8 from '@/assets/images/stacks/stack8.png';
import stack9 from '@/assets/images/stacks/stack9.png';
import stack10 from '@/assets/images/stacks/stack10.png';
import stack11 from '@/assets/images/stacks/stack11.png';
import stack12 from '@/assets/images/stacks/stack12.png';
import stack13 from '@/assets/images/stacks/stack13.png';
import stack14 from '@/assets/images/stacks/stack14.png';
import stack15 from '@/assets/images/stacks/stack15.png';
import stack16 from '@/assets/images/stacks/stack16.png';
import stack17 from '@/assets/images/stacks/stack17.png';
import stack18 from '@/assets/images/stacks/stack18.png';
import stack19 from '@/assets/images/stacks/stack19.png';
import stack20 from '@/assets/images/stacks/stack20.png';
import stack21 from '@/assets/images/stacks/stack21.png';
import stack22 from '@/assets/images/stacks/stack22.png';
import stack23 from '@/assets/images/stacks/stack23.png';
import stack24 from '@/assets/images/stacks/stack24.png';
import stack25 from '@/assets/images/stacks/stack25.png';
import stack26 from '@/assets/images/stacks/stack26.png';
import stack27 from '@/assets/images/stacks/stack27.png';
import stack28 from '@/assets/images/stacks/stack28.png';
import stack29 from '@/assets/images/stacks/stack29.png';
import stack30 from '@/assets/images/stacks/stack30.png';

interface StackItem {
  id: number;
  src: string;
  alt: string;
}

// Create a mapping of stack images
const stackImagesMap: { [key: number]: string } = {
  1: stack1,
  2: stack2,
  3: stack3,
  4: stack4,
  5: stack5,
  6: stack6,
  7: stack7,
  8: stack8,
  9: stack9,
  10: stack10,
  11: stack11,
  12: stack12,
  13: stack13,
  14: stack14,
  15: stack15,
  16: stack16,
  17: stack17,
  18: stack18,
  19: stack19,
  20: stack20,
  21: stack21,
  22: stack22,
  23: stack23,
  24: stack24,
  25: stack25,
  26: stack26,
  27: stack27,
  28: stack28,
  29: stack29,
  30: stack30
};

// Create an array of stack objects in reverse order (from 30 to 1)
const stacks: StackItem[] = [];

// Generate the stack array in reverse order
for (let i = 30; i >= 1; i--) {
  stacks.push({
    id: i,
    src: stackImagesMap[i],
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
