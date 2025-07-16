<script setup lang="ts">
// Contact section component
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref(''); // Added new subject field
const message = ref('');

const handleSubmit = () => {
  // Gather form data
  const formData = {
    name: name.value,
    email: email.value,
    subject: subject.value, // Include subject in form data
    message: message.value
  };

  // Create email body with formatted message
  const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
  `;

  // Create mailto link with encoded parameters
  const mailtoLink = `mailto:work.amalianurlita@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

  // Open user's email client
  window.location.href = mailtoLink;

  // Reset form
  name.value = '';
  email.value = '';
  subject.value = ''; // Reset subject field
  message.value = '';
};
</script>

<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2 class="section-title">Let's Connect There!</h2>
      <p class="section-description">
        Whether you have a project in mind, a question to ask, or just want to say hi—I'm always open to meaningful conversations. Reach out and let's build something great together!
      </p>

      <div class="contact-form-container">
        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              id="name"
              v-model="name"
              class="form-input"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-input"
              placeholder="Your email"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject" class="form-label">Subject</label>
            <input
              type="text"
              id="subject"
              v-model="subject"
              class="form-input"
              placeholder="Message subject"
              required
            />
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Message</label>
            <textarea
              id="message"
              v-model="message"
              class="form-input form-textarea"
              placeholder="Your message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit" class="btn submit-btn">Submit</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact {
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom, #f8f8f8, #f4f4f4);

  &::before {
    content: '';
    position: absolute;
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: var(--gradient-green);
    filter: blur(200px);
    top: -200px;
    left: -200px;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: var(--gradient-purple);
    filter: blur(200px);
    bottom: -200px;
    right: -200px;
    z-index: 0;
  }
}

.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
}

.section-description {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1.25rem;
  position: relative;
  z-index: 1;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
}

.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-form {
  background-color: var(--white-color);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1.125rem;
  margin-top: 1rem;
}

.contact-social {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  position: relative;
  z-index: 1;

  &-link {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-color);
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>
