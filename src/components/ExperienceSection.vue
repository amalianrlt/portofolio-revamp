<script setup lang="ts">
import { ref } from 'vue';

// Track expanded state for each description
const expandedDescriptions = ref<Record<number, boolean>>({});

// Function to toggle description expansion
const toggleDescription = (jobId: number) => {
  expandedDescriptions.value[jobId] = !expandedDescriptions.value[jobId];
};
</script>

<template>
  <section class="experience" id="experience">
    <div class="container">
      <h2 class="section-title">Experience</h2>
      <p class="section-description">
        Hi there! I'm a Frontend Developer with over 4+ years of experience crafting intuitive, high-performing web and mobile experiences. I love turning complex ideas into clean, scalable, and maintainable frontend architectures.
      </p>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-left">
            <h3 class="timeline-title">Vouch</h3>
            <p class="timeline-period">Jun 2021 - present</p>
          </div>

          <div class="timeline-center">
            <div class="timeline-marker">
              <div class="timeline-dot orange"></div>
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-right">
            <div class="timeline-details" data-company="Vouch" data-period="Jun 2021 - present">
              <h4>Frontend Developer</h4>
              <p class="mobile-period">Jun 2021 - present</p>
              <p class="job-description" :class="{ 'expanded': expandedDescriptions[1] }">
                Built a reusable UI component library and design system using Storybook, significantly improving development speed, UI consistency, and scalability. Developed and optimized responsive web and mobile applications (6 products) using JavaScript, TypeScript, Vue, and React, including PWAs. Wrote and maintained unit tests using Jest, Chai, Mocha.
              </p>
              <button class="show-more-btn" @click="toggleDescription(1)">
                {{ expandedDescriptions[1] ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-left">
            <h3 class="timeline-title">Binar Academy</h3>
            <p class="timeline-period">Jan 2022 - May 2023</p>
          </div>

          <div class="timeline-center">
            <div class="timeline-marker">
              <div class="timeline-dot blue"></div>
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-right">
            <div class="timeline-details" data-company="Binar Academy" data-period="Jan 2022 - May 2023">
              <h4>Technical Preparation (Part-time)</h4>
              <p class="mobile-period">Jan 2022 - May 2023</p>
              <p class="job-description" :class="{ 'expanded': expandedDescriptions[2] }">
                I helped alumni level up by creating hands-on learning materials, tutoring sessions, and hosting 1-on-1 mock interviews across tech fields like Frontend, Data Science, and Product Management. By reviewing 100+ mock tests and running 20+ Tech Corner events, we boosted job placement rates and built stronger industry connections together.
              </p>
              <button class="show-more-btn" @click="toggleDescription(2)">
                {{ expandedDescriptions[2] ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-left">
            <h3 class="timeline-title">Widya Skilloka</h3>
            <p class="timeline-period">Sep 2020 - Jun 2021</p>
          </div>

          <div class="timeline-center">
            <div class="timeline-marker">
              <div class="timeline-dot green"></div>
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-right">
            <div class="timeline-details" data-company="Widya Skilloka" data-period="Sep 2020 - Jun 2021">
              <h4>Mobile App and Frontend Developer</h4>
              <p class="mobile-period">Sep 2020 - Jun 2021</p>
              <p class="job-description" :class="{ 'expanded': expandedDescriptions[3] }">
                Worked closely with engineers and the Product Manager to build Skillana, an HR app that simplifies recruitment and candidate evaluation from start to finish. Built and maintained cross-platform mobile apps using React Native on both Android and iOS while constantly exploring new tools to improve development workflows.
              </p>
              <button class="show-more-btn" @click="toggleDescription(3)">
                {{ expandedDescriptions[3] ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>
        </div>

        <div class="timeline-item">
          <div class="timeline-left">
            <h3 class="timeline-title">Glints Academy</h3>
            <p class="timeline-period">Sep 2020 - Nov 2021</p>
          </div>

          <div class="timeline-center">
            <div class="timeline-marker">
              <div class="timeline-dot yellow"></div>
              <div class="timeline-circle"></div>
            </div>
            <div class="timeline-line"></div>
          </div>

          <div class="timeline-right">
            <div class="timeline-details" data-company="Glints Academy" data-period="Sep 2020 - Nov 2021">
              <h4>Industrial Trainer (Part Time)</h4>
              <p class="mobile-period">Sep 2020 - Nov 2021</p>
              <p class="job-description" :class="{ 'expanded': expandedDescriptions[4] }">
                Led as Project Owner by defining and executing five product visions with UI/UX teams, while supporting final project execution and streamlining development toward successful releases. As Head of Industrial Trainer, I collaborated cross-divisionally, mentored fellow trainers, and developed hands-on training materials for Glints Academy Bootcamp to sharpen real-world tech skills.
              </p>
              <button class="show-more-btn" @click="toggleDescription(4)">
                {{ expandedDescriptions[4] ? 'Show Less' : 'Show More' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.mobile-period {
  display: none;
}

.experience {
  padding: 6rem 0;
  @media (max-width: 425px) {
    padding: 2rem 0;
  }
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  font-weight: 800;
}

.section-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.25rem;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
}

.timeline {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0;

  &-item {
    display: flex;
    position: relative;
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &-left {
    width: 214px;
    padding-right: 20px;
  }

  &-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80px;
    position: relative;
  }

  &-right {
    width: 535px;
    padding-left: 20px;
  }

  &-marker {
    position: relative;
    width: 46px;
    height: 46px;
    z-index: 2;
  }

  &-dot {
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    top: 10px;
    left: 10px;
    z-index: 2;

    &.orange {
      background-color: #DD822F;
      border: 1px solid #DD822F;
    }

    &.blue {
      background-color: #6FC7E1;
      border: 1px solid #6FC7E1;
    }

    &.green {
      background-color: #4C8055;
      border: 1px solid #4C8055;
    }

    &.yellow {
      background-color: #EFD557;
      border: none;
    }
  }

  &-circle {
    position: absolute;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: 1px dashed #3374E0;
  }

  &-line {
    position: absolute;
    width: 1px;
    top: 46px; /* Start from bottom of the marker */
    bottom: -40px; /* Connect to the next marker's top */
    left: 50%; /* Center in the timeline-center div */
    transform: translateX(-50%); /* Perfect centering */
    border-left: 1px dashed #3374E0;
    z-index: 1;
  }

  // Last item shouldn't have an extending line
  &-item:last-child .timeline-line {
    display: none;
  }

  &-title {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 800;
    text-align: right;
  }

  &-period {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #666;
    text-align: right;
    font-family: 'Montserrat', sans-serif;
  }

  &-details {
    h4 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      font-family: 'Playfair Display', serif;
      font-weight: 800;
    }

    p.job-description {
      font-size: 1rem;
      line-height: 1.6;
      font-family: 'Montserrat', sans-serif;
      margin-bottom: 0.5rem;
    }

    .show-more-btn {
      display: none; // Hide on desktop and tablet
      background: none;
      border: none;
      color: var(--primary-color);
      font-weight: 500;
      cursor: pointer;
      padding: 0;
      margin-bottom: 1rem;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

// Add a mid-size responsive adjustment for tablets
@media (max-width: 992px) {
  .timeline {
    &-left {
      width: 180px;
    }

    &-right {
      width: calc(100% - 260px); // 180px left + 80px center
    }
  }
}

@media (max-width: 768px) {
  .timeline {
    &-left {
      width: 160px;
    }

    &-right {
      width: calc(100% - 240px); // 160px left + 80px center
    }
  }
}

// Mobile specific layout
@media (max-width: 425px) {
  .mobile-period {
    display: block; // Show only on mobile
  }

  .timeline {
    &-item {
      flex-direction: row;
      margin-bottom: 3rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-center {
      width: 60px;
      margin: 0;
      padding-right: 10px;
      align-items: center;
      position: relative;
    }

    &-left {
      display: none;
    }

    &-right {
      width: calc(100% - 60px);
      padding-left: 10px;
    }

    &-details {
      position: relative;

      &:before {
        content: attr(data-company);
        display: block;
        font-size: 1.3rem;
        margin-bottom: 0.5rem;
        font-family: 'Playfair Display', serif;
        font-weight: 800;
      }

      h4 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
      }

      .mobile-period {
        display: block;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        color: #666;
        font-family: 'Montserrat', sans-serif;
      }

      &:after {
        display: none;
      }

      p.job-description {
        max-height: 80px;
        overflow: hidden;
        transition: max-height 0.3s ease;

        &.expanded {
          max-height: 300px;
        }
      }

      .show-more-btn {
        display: block; // Show on mobile
      }
    }

    &-line {
      position: absolute;
      top: 46px;
      bottom: -46px;
      left: 44%;
      transform: translateX(-44%);
    }

    // Remove line from last item
    &-item:last-child .timeline-center .timeline-line {
      display: none;
    }
  }
}
</style>
