import fetch from 'node-fetch';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 8080;

// Middleware setup
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(express.static('dist')); // Serve static files from the 'dist' directory


 // Summarizes the analysis data returned by the MeaningCloud API.
function summarizeAnalysis(data) {
  const summary = {
    overall_sentiment: data.score_tag === 'P' ? 'Positive' : 'Negative',
    confidence: data.confidence + '%',
    irony: data.irony || 'None',
    agreement: data.agreement || 'Not available',
    sentences: data.sentence_list.map(sentence => ({
      text: sentence.text,
      sentiment: sentence.score_tag === 'P' ? 'Positive' : (sentence.score_tag === 'N' ? 'Negative' : 'Neutral'),
      confidence: sentence.confidence + '%'
    })),
    entities: data.sentence_list.flatMap(sentence => sentence.sentimented_entity_list.map(entity => ({
      form: entity.form,
      sentiment: entity.score_tag === 'P' ? 'Positive' : 'None'
    }))),
    concepts: data.sentence_list.flatMap(sentence => sentence.sentimented_concept_list.map(concept => ({
      form: concept.form,
      sentiment: concept.score_tag === 'P' ? 'Positive' : 'Neutral'
    })))
  };
  
  return summary;
}

// API endpoint to analyze the given URL
app.post('/api/analyze', async (req, res) => {
    const url = req.body.url; // Extract the URL from the request body
    
    const api_key = '47e1e5b56c295b3f5826821b37c5e53a';
    const api_url = `https://api.meaningcloud.com/sentiment-2.1?key=${api_key}&url=${url}&lang=en`;

    try {
        // Fetch analysis data from MeaningCloud API
        const response = await fetch(api_url);
        const data = await response.json();
        
        // Summarize the analysis data
        const summarizedData = summarizeAnalysis(data);
        res.json(summarizedData); // Send summarized data as a JSON response
    } catch (error) {
        console.error('Error fetching data from MeaningCloud:', error);
        res.status(500).json({ error: 'Error analyzing the article' }); // Handle errors
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
