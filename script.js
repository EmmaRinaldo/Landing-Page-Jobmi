
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;

  fetch('https://api.sendinblue.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': 'api_key'  // Remplacez YOUR_API_KEY par votre clé API Brevo
    },
    body: JSON.stringify({
      email: email,
      listIds: [2],  // Remplacez YOUR_LIST_ID par l'ID de votre liste de contacts Brevo
      updateEnabled: true
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.code === 'success') {
      document.getElementById('message').innerText = 'Inscription réussie!';
    } else {
      document.getElementById('message').innerText = 'Erreur: ' + data.message;
    }
  })
  .catch(error => {
    console.error('Erreur:', error);
    document.getElementById('message').innerText = 'Une erreur est survenue. Veuillez réessayer.';
  });
});

