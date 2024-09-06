async function getAnalysis(url) {
  try {
    // Send a POST request to the API endpoint with the URL
    const response = await axios.post('http://localhost:8080/api/analyze', { url });
    
    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log any errors that occur during the request
    console.error('Error fetching analysis:', error);
  }
}