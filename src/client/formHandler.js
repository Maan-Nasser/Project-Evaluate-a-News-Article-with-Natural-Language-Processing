
import { getAnalysis } from './api';
function handleSubmit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the URL entered by the user
  const url = document.getElementById('url').value;

  // Validate the URL input
  if (!url) {
    alert('URL field cannot be blank');
    return;
  }

  // Call the getAnalysis function and handle the response
  getAnalysis(url)
    .then((data) => {
      // Display the analysis results in the 'results' element
      document.getElementById('results').innerHTML = `
        <p>Polarity: ${data.score_tag}</p>
        <p>Subjectivity: ${data.subjectivity}</p>
        <p>Text: ${data.sentence_list[0].text}</p>
      `;
    })
    .catch((error) => {
      // Log any errors that occur
      console.error('Error:', error);
    });
}

export { handleSubmit };