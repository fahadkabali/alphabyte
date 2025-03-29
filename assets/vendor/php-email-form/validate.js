(function () {
  "use strict";

  let forms = document.querySelectorAll('[data-netlify="true"]');

  forms.forEach(function(form) {
    form.addEventListener('submit', function(event) {
      let thisForm = this;
      
      // Show loading state
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      // Let Netlify handle the submission
      // We'll just show the success message after a short delay
      setTimeout(function() {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset();
      }, 3000);
    });
  });

})();