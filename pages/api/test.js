import axios from 'axios';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  const url = 'https://startupnews.fyi/the-latest/';

  try {
    // Fetch the HTML from the URL
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Connection': 'keep-alive',
        'DNT': '1', // Do Not Track request header
        'Referer': 'https://www.google.com/', // Optional: Referrer header
      },
      timeout: 10000, // 10 seconds timeout for the request
    });

    // Check for common blocking status codes
    if ([403, 429, 503].includes(response.status)) {
      return res.status(response.status).json({ message: `Request blocked: ${response.status} - ${response.statusText}` });
    }

    // Load the HTML using cheerio
    const $ = cheerio.load(response.data);
    const articles = [];
    const dateCount = {};

    console.log('Scraping the main page for articles...');

    $('.td_module_wrap').each((index, element) => {
      if (articles.length >= 20) return false;

      const title = $(element).find('.entry-title a').text().trim();
      const date = $(element).find('.entry-date').text().trim();
      const articleUrl = $(element).find('.entry-title a').attr('href');

      if (title && date && articleUrl) {
        dateCount[date] = (dateCount[date] || 0) + 1;
        if (dateCount[date] <= 3) {
          articles.push({ title, date, articleUrl });
        }
      }
    });

    console.log(`Total articles fetched: ${articles.length}`);

    // Respond with the articles in JSON format
    return res.status(200).json({ articles });
  } catch (error) {
    console.error('Error fetching main page:', error.message);

    // Return error details as JSON
    return res.status(500).json({
      message: 'Error fetching main page',
      error: error.message,
    });
  }
}
