const form = document.getElementById('contact-form');
const successAlert = document.getElementById('alert');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  let isValid = true;
  const firstName = document.getElementById('first-name').value.trim();
  const lastName = document.getElementById('last-name').value.trim();
  const email = document.getElementById('email').value.trim();
  const queryType = document.querySelector('input[name="query-type"]:checked');
  const message = document.getElementById('message').value.trim();
  const consent = document.getElementById('consent').checked;

  // Clear previous alerts
  document.querySelectorAll('.form-alert').forEach(alert => {
    alert.style.display = 'none';
  });

  // First Name Validation
  if (firstName === '') {
    isValid = false;
    showAlert('#first-name + .form-alert', 'This field is required.');
    document.getElementById('first-name').style.border = '1px solid red';
  } else {
    document.getElementById('first-name').style.border = '1px solid grey';
  }

  // Last Name Validation
  if (lastName === '') {
    isValid = false;
    showAlert('#last-name + .form-alert', 'This field is required.');
    document.getElementById('last-name').style.border = '1px solid red';
  } else {
    document.getElementById('last-name').style.border = '1px solid grey';
  }

  // Email Validation
  if (!isValidEmail(email)) {
    isValid = false;
    showAlert('#email + .form-alert', 'Please enter a valid email address. This field is required.');
    document.getElementById('email').style.border = '1px solid red';
  } else {
    document.getElementById('email').style.border = '1px solid grey';
  }

  // Query Type Validation
  if (!queryType) {
    isValid = false;
    showAlert('.col .form-alert', 'Please select a query type.');
    document.querySelectorAll('.form-check-input[type="radio"]').forEach(input => {
      input.style.border = '1px solid red';
    });
  } else {
    document.querySelectorAll('.form-check-input[type="radio"]').forEach(input => {
      input.style.border = '1px solid grey';
    });
  }

  // Message Validation
  if (message === '') {
    isValid = false;
    showAlert('#message + .form-alert', 'This field is required.');
    document.getElementById('message').style.border = '1px solid red';
  } else {
    document.getElementById('message').style.border = '1px solid grey';
  }

  // Consent Validation
  if (!consent) {
    isValid = false;
    showAlert('.form-check .form-alert', 'To submit this form, please consent to being contacted.');
    document.getElementById('consent').style.border = '1px solid red';
  } else {
    document.getElementById('consent').style.border = '1px solid grey';
  }

  // Form is valid
  if (isValid) {
    successAlert.classList.remove('hidden');
    successAlert.classList.add('active');
    form.reset();
    setTimeout(() => {
      successAlert.classList.remove('active');
      successAlert.classList.add('hidden');
    }, 5000); // Hide the alert after 5 seconds
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }
  }
);

// Email validation function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Show alert function
function showAlert(selector, message) {
  const alertElement = document.querySelector(selector);
  if (alertElement) {
    alertElement.textContent = message;
    alertElement.style.display = 'block';
  }
}
