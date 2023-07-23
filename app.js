const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const loveCalculator = require('love-calculator');
const emailValidator = require('email-validator');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors()); // Enable CORS for all routes

// Endpoint for scraping tech news
app.get('/tech-news', async (req, res) => {
  try {
    const url = 'https://www.bbc.com/news/technology'; // Replace with the URL of your preferred tech news website
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Process the HTML and extract the tech news information
    // Make sure to use the correct selector to target the news articles
    const techNews = [];
    $('.news-article').each((index, element) => {
      const title = $(element).find('h2').text();
      const link = $(element).find('a').attr('href');
      techNews.push({ title, link });
    });

    res.json(techNews);
  } catch (error) {
    console.error('Error fetching tech news:', error.message);
    res.status(500).json({ error: 'Failed to fetch tech news' });
  }
});

// Endpoint for love calculator
app.get('/love-calculator', (req, res) => {
  const { firstName, secondName } = req.query;

  if (!firstName || !secondName) {
    return res.status(400).json({ error: 'Please provide both first and second names' });
  }

  const result = loveCalculator.calculateLove(firstName, secondName);
  res.json(result);
});

// Endpoint for URL shortening and email validation
app.get('/shorten-url-and-validate-email', async (req, res) => {
  try {
    const { url, email } = req.query;

    if (!url || !email) {
      return res.status(400).json({ error: 'Please provide both URL and email' });
    }

    // Validate the email
    const isEmailValid = emailValidator.validate(email);

    // Shorten the URL using Bitly API
    const accessToken = 'YOUR_BITLY_ACCESS_TOKEN'; // Replace with your Bitly access token
    const bitlyApiUrl = `https://api-ssl.bitly.com/v4/shorten`;

    const response = await axios.post(bitlyApiUrl, {
      long_url: url,
    }, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    const shortenedUrl = response.data.id;

    res.json({ shortenedUrl, isEmailValid });
  } catch (error) {
    console.error('Error processing URL or email:', error.message);
    res.status(500).json({ error: 'Failed to process URL or email' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
