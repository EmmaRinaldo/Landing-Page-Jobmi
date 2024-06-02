document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var form = event.target;
  var formData = new FormData(form);
  var email = formData.get('email');

  fetch(form.action, {
      method: form.method,
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
  })
  .then(response => response.json())
  .then(data => {
      var messageElement = document.getElementById('message');
      if (messageElement) {
          messageElement.innerText = data.message;
      }
  })
  .catch(error => {
      console.error('Erreur:', error);
      var messageElement = document.getElementById('message');
      if (messageElement) {
          messageElement.innerText = 'Une erreur est survenue. Veuillez réessayer.';
      }
  });
});
