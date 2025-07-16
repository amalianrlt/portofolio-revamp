<script setup lang="ts">
// Footer component
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer-bottom">
      <p>&copy; {{ currentYear }} Amalia Nurlita. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: #2C2C2C;
  color: #fff;
  padding: 2rem 0 2rem;

  &-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }

  &-logo {
    h2 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    p {
      color: #ccc;
    }
  }

  &-links {
    display: flex;
    gap: 4rem;

    &-group {
      h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }

  &-bottom {
    text-align: center;

    p {
      color: #ccc;
      font-size: 0.875rem;
    }
  }
}

@media (max-width: 768px) {
  .footer {
    &-content {
      flex-direction: column;
      gap: 2rem;
    }

    &-links {
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>
