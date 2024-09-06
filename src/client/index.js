import '../scss/main.scss'; 

// Add an event listener to the submit button to handle the click event
document.getElementById('submit').addEventListener('click', function() {
  const url = document.getElementById('url').value; // Get the URL from the input field
  
  // Validate the URL and proceed with the fetch request if valid
  if (isValidURL(url)) {
      fetchResults(url);
  } else {
      showError('Please enter a valid URL');
  }
});

function fetchResults(url) {
  fetch('/api/analyze', {
      method: 'POST', // Specify the request method as POST
      body: JSON.stringify({ url: url }), // Convert the URL to a JSON string
      headers: {
          'Content-Type': 'application/json' // Set the content type header
      }
  })
  .then(res => res.json()) // Parse the response as JSON
  .then(data => {
      updateUI(data); // Update the UI with the fetched data
  })
  .catch(error => {
      showError('An error occurred while processing the request'); // Handle any errors
  });
}

function updateUI(data) {
  // Display the data in a preformatted text block (JSON format)
  document.getElementById('results').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function showError(message) {
  document.getElementById('error').innerText = message; // Display the error message
}

function isValidURL(string) {
  try {
      new URL(string); // Attempt to create a new URL object
      return true; // If successful, the string is a valid URL
  } catch (_) {
      return false; // If an error is thrown, the string is not a valid URL
  }
}