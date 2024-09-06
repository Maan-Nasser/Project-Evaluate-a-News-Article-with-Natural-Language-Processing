# NLP Article Analysis Web Tool

This is a web tool that allows users to analyze the sentiment and other attributes of articles from any URL using the MeaningCloud API. The tool processes the URL and provides a summary of the sentiment, entities, and concepts extracted from the content.

## Features

- Analyze article sentiment (Positive, Negative, Neutral)
- Extract entities and concepts from the article
- Display analysis results in an easy-to-understand format
- URL validation before sending the request

## Technologies Used

- **Node.js**: Backend server for handling requests
- **Express**: Web framework for Node.js
- **MeaningCloud API**: Sentiment analysis and text processing
- **SCSS**: Styling with preprocessed CSS
- **Webpack**: Module bundler
- **Babel**: Transpiling modern JavaScript
- **Axios**: HTTP client for making API requests
- **HTML/CSS/JavaScript**: Frontend structure and behavior

## Setup and Installation


1. **Install dependencies**:
    Make sure you have Node.js installed, then run:
    ```bash
    npm install
    ```

2. **Start the development server**:
    Run the following command to start the server on `localhost:8080`:
    ```bash
    npm run build-dev
    ```

3. **Build for production**:
    To build the project for production, use:
    ```bash
    npm run build-prod
    ```

## Usage

1. **Start the server**:
    Ensure the server is running by executing:
    ```bash
    npm start
    ```

2. **Open the tool**:
    Open your browser and go to `http://localhost:8080`. You should see the web interface.

3. **Analyze an article**:
    - Enter the URL of the article you want to analyze in the input field.
    - Click the "Submit" button.
    - The tool will display the sentiment analysis results, including polarity, subjectivity, confidence, and more.


