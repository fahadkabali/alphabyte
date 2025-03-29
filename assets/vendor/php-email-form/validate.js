(function () {
  "use strict";

  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show loading state
      const loading = contactForm.querySelector('.loading');
      const errorMessage = contactForm.querySelector('.error-message');
      const sentMessage = contactForm.querySelector('.sent-message');
      
      loading.classList.add('d-block');
      errorMessage.classList.remove('d-block');
      sentMessage.classList.remove('d-block');

      // Simulate network request with a timeout
      setTimeout(() => {
        // Hide loading
        loading.classList.remove('d-block');
        
        // Randomly decide if we should show success or error (90% success rate)
        if (Math.random() > 0.1) {
          // Show success message
          sentMessage.classList.add('d-block');
          // Reset form
          contactForm.reset();
        } else {
          // Show error message (for testing)
          errorMessage.textContent = 'Error occurred. Please try again.';
          errorMessage.classList.add('d-block');
        }
      }, 1500); 
    });
  }

})();