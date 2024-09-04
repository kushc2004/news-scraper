import axios from 'axios';
import cheerio from 'cheerio';

// The URL of the page to scrape
const mainPageUrl = 'https://startupnews.fyi/the-latest/';

// Function to fetch the latest news from the main page
const fetchLatestNews = async () => {
  try {
    const { data } = await axios.get(mainPageUrl);
    const $ = cheerio.load(data);
    const articles = [];
    const dateCount = {};

    $('.td_module_wrap').each((index, element) => {
      if (articles.length >= 20) return false; // Limit to 20 articles

      const title = $(element).find('.entry-title a').text().trim();
      const date = $(element).find('.entry-date').text().trim();
      const articleUrl = $(element).find('.entry-title a').attr('href');

      if (title && date && articleUrl) {
        dateCount[date] = (dateCount[date] || 0) + 1;
        if (dateCount[date] <= 3) { // Limit to 3 articles per date
          articles.push({ title, date, articleUrl });
        }
      }
    });

    return articles;
  } catch (error) {
    console.error('Error fetching main page:', error.message);
    return [];
  }
};

// Function to fetch the fifth paragraph from an article
const fetchArticleSummary = async (articleUrl) => {
  try {
    const { data } = await axios.get(articleUrl);
    const $ = cheerio.load(data);
    const fifthParagraph = $('p').eq(4).text().trim(); // Get the fifth paragraph
    return fifthParagraph || 'No summary available';
  } catch (error) {
    console.error('Error fetching article page:', error.message);
    return 'No summary available';
  }
};

// Main API handler
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    // Fetch the latest news articles
    const articles = await fetchLatestNews();

    // Fetch the summaries for each article
    for (const article of articles) {
      const summary = await fetchArticleSummary(article.articleUrl);
      article.summary = summary;
    }

    // Return the articles with summaries
    res.status(200).json({ message: 'Latest news fetched successfully!', articles });
  } catch (error) {
    console.error('Error in handler:', error.message);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
