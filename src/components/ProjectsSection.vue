<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

// Projects data with image paths
const projects = [
  {
    id: 1,
    title: 'Design System',
    description: 'Built and developed a centralized design system using Storybook to maintain UI consistency and scalability across the Catalogue app. This initiative ensured a unified look and feel across platforms, streamlined development workflows, and served as the foundation for reusable components in future Vouch products.',
    image: '/src/assets/images/projects/design-system.png',
    tags: ['Vue.js', 'TypeScript', 'Tailwind', 'Sass', 'Storybook', 'Chromatic', 'Jest', 'Chai', 'Vue Demi'],
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 2,
    title: 'Forrest – Photobooth Booking App',
    description: 'Developed a user-friendly booking system for photobooth services, enabling customers to easily schedule and manage reservations. Focused on creating a seamless and intuitive experience to simplify the booking process and improve customer satisfaction.',
    image: '/src/assets/images/projects/forrest.png',
    tags: ['React', 'JavaScript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 3,
    title: 'Protra App - Glints Academy Bootcamp Project',
    description: 'Protra is another popular project management app offering the feature of project time tracking. This app gathers information on your team\'s work in the form of activity reports. That\'s a great way to analyze your team\'s performance and work progress.',
    image: '/src/assets/images/projects/protra.png',
    tags: ['React', 'JavaScript', 'SCSS', 'Node.js', 'Express', 'MongoDB'],
    demoLink: '#',
    sourceLink: '#'
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A clean and static portfolio website to showcase projects and skills. This website is built with React, JavaScript, SCSS, and it is hosted on Netlify. It features responsive design and smooth navigation to provide an engaging user experience across all devices.',
    image: '/src/assets/images/projects/portfolio.png',
    tags: ['React', 'JavaScript', 'SCSS', 'Netlify'],
    demoLink: '#',
    sourceLink: '#'
  }
];

// Track expanded state for each project description
const expandedDescriptions = ref<Record<number, boolean>>({});

// Function to toggle description expansion
const toggleDescription = (projectId: number) => {
  expandedDescriptions.value[projectId] = !expandedDescriptions.value[projectId];
};

const currentIndex = ref(0);
const carouselInterval = ref<number | null>(null);
const visibleItems = ref(1.5); // Default to show 1 full item and half of adjacent items

// Computed properties for styles
const carouselTransform = computed(() => {
  return `translateX(calc(-${currentIndex.value * (100 / visibleItems.value)}% + ${(100 - 100 / visibleItems.value) / 2}%))`;
});

const cardWidth = computed(() => {
  return `calc(100% / ${visibleItems.value})`;
});

// Function to update visible items based on screen width
const updateVisibleItems = () => {
  if (window.innerWidth <= 425) {
    visibleItems.value = 1; // Show exactly 1 item on small mobile screens
  } else {
    visibleItems.value = 1.5; // Default for larger screens
  }
};

// Carousel controls
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + projects.length) % projects.length;
};

const goToSlide = (index: number) => {
  currentIndex.value = index;
};

// Start the automatic carousel
const startCarousel = () => {
  stopCarousel();
  carouselInterval.value = window.setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

const stopCarousel = () => {
  if (carouselInterval.value !== null) {
    clearInterval(carouselInterval.value);
    carouselInterval.value = null;
  }
};

// Set up and clean up the carousel
onMounted(() => {
  updateVisibleItems(); // Set initial value based on screen size
  window.addEventListener('resize', updateVisibleItems);
  startCarousel();
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleItems);
  stopCarousel();
});
</script>

<template>
  <section class="projects" id="work">
    <div class="container-fluid">
      <h2 class="section-title">My Latest Work</h2>

      <div class="carousel-container">
        <div class="carousel">
          <div
            class="carousel-inner"
            :style="{ transform: carouselTransform }"
          >
            <div
              v-for="project in projects"
              :key="project.id"
              class="project-card"
              :class="{ 'active': projects.indexOf(project) === currentIndex }"
              :style="{ minWidth: cardWidth }"
            >
              <div class="project-image" :style="{ backgroundImage: `url(${project.image})` }"></div>
              <div class="project-content">
                <h3>{{ project.title }}</h3>
                <p :class="{ 'expanded': expandedDescriptions[project.id] }">{{ project.description }}</p>
                <button class="show-more-btn" @click.stop="toggleDescription(project.id)">
                  {{ expandedDescriptions[project.id] ? 'Show Less' : 'Show More' }}
                </button>
                <div class="project-tags">
                  <span v-for="(tag, index) in project.tags" :key="index">{{ tag }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control prev" @click="prevSlide" @mouseenter="stopCarousel" @mouseleave="startCarousel">
          &lsaquo;
        </button>
        <button class="carousel-control next" @click="nextSlide" @mouseenter="stopCarousel" @mouseleave="startCarousel">
          &rsaquo;
        </button>

        <div class="carousel-indicators">
          <button
            v-for="(_, index) in projects"
            :key="index"
            :class="['carousel-indicator', { active: currentIndex === index }]"
            @click="goToSlide(index)"
            @mouseenter="stopCarousel"
            @mouseleave="startCarousel"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.projects {
  padding: 6rem 0;
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.container-fluid {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.carousel-container {
  width: 100%;
  position: relative;
  padding: 0 50px;
}

.carousel {
  width: 100%;
  overflow: hidden;
  padding: 30px 0;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease;
}

.project-card {
  // min-width is now set dynamically via :style binding in the template
  padding: 0 15px;
  opacity: 0.7;
  transform: scale(0.9);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &.active {
    opacity: 1;
    transform: scale(1);
  }

  .project-image {
    height: 250px;
    background-color: var(--gray-color);
    background-size: cover;
    background-position: center;
    border-radius: 8px 8px 0 0;
  }

  .project-content {
    background-color: var(--white-color);
    padding: 1.5rem;
    border-radius: 0 0 8px 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 0.5rem;
      color: #555;
      max-height: 80px;
      overflow: hidden;
      transition: max-height 0.3s ease;

      &.expanded {
        max-height: 300px;
      }
    }

    .show-more-btn {
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

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    span {
      background-color: var(--background-color);
      color: var(--primary-color);
      padding: 0.25rem 0.75rem;
      border-radius: 20px;
      font-size: 0.875rem;
    }
  }

  .project-links {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--secondary-color);
      text-decoration: none;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.carousel-control {
  background: var(--primary-color);
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  &.prev {
    left: 10px;
  }

  &.next {
    right: 10px;
  }

  &:hover {
    background: var(--secondary-color);
  }
}

.carousel-indicators {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.carousel-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background: var(--primary-color);
  }

  &:hover {
    background: var(--secondary-color);
  }
}

@media (max-width: 768px) {
  .carousel-container {
    padding: 0 30px;
  }

  .project-card {
    min-width: 100%; /* On mobile, show one full project */
  }
}

@media (max-width: 425px) {
  .project-card {
    min-width: 100%; /* Ensure only one project is visible on smaller mobile devices */
  }

  .carousel-control {
    width: 35px;
    height: 35px;
    font-size: 1.25rem;
  }

  .carousel-container {
    padding: 0 20px;
  }
}
</style>
