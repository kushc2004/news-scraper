import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Head from "next/head"; // Import Head from next/head
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GetStartupInsightsModal = ({ isOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [modalTitle, setModalTitle] = useState('Latest Startup News'); // Default title
  const [sortOrder, setSortOrder] = useState('latest');

  // Fetch the latest startup news when the modal opens
  useEffect(() => {
    if (isOpen) {
      fetchLatestStartupNews();
    }
  }, [isOpen]);

  // Filter news from the last year
  const filterNewsByLastYear = (newsList) => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return newsList.filter((article) => new Date(article.date) >= oneYearAgo);
  };

  const fetchLatestStartupNews = async () => {
    setLoading(true);
    setSearchInitiated(false); // This prevents "No results found" from showing initially
    setModalTitle('Latest Startup Insights'); // Set title for latest news

    try {
      const response = await axios.get('/api/fetch-news', {
        params: { q: `category startups` }
      });
      const filteredNews = filterNewsByLastYear(response.data);
      setNews(filteredNews);
      handleSortOrderChange('latest', filteredNews); // Set default sort to latest
    } catch (error) {
      console.error('Error fetching news:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    setSearchInitiated(true);
    setLoading(true);
    setModalTitle(`Insights for "${searchQuery}"`); // Update title based on search query

    try {
      const response = await axios.get('/api/fetch-news', {
        params: { q: `${searchQuery}` }
      });
      const filteredNews = filterNewsByLastYear(response.data);
      setNews(filteredNews);
      handleSortOrderChange(sortOrder, filteredNews); // Apply sorting to search results
    } catch (error) {
      console.error('Error fetching news:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSortOrderChange = (order, newsList = news) => {
    setSortOrder(order);
    const sortedNews = [...newsList].sort((a, b) => {
      if (order === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
    setDisplayedNews(sortedNews);
  };

  return (
    <>
  {/* Use Next.js Head component to manage the <head> content */}
  <Head>
  <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMareMFjc5p8s5CPR8G3q2m0IMzYKKzVvFoky62"
      crossOrigin="anonymous"
    />
  </Head>
  {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="bg-white rounded-lg shadow-2xl w-full max-w-4xl mx-auto h-4/5 md:h-3/4 overflow-hidden"
      >
        <div className="relative flex flex-col h-full">
          <div className="bg-blue-900 p-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              {modalTitle}
            </h2>
          </div>
          <div className="px-6 py-4 flex flex-col h-full">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Enter startup name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm pr-12 focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              {/* <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-3 rounded-lg hover:bg-yellow-600 focus:outline-none shadow-md"
              >
                <i className="fas fa-search"></i>
              </button> */}

                <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-black p-2 rounded-lg hover:bg-yellow-600 focus:outline-none shadow-md"
                >
                <img
                    src="/assets/images/search.png" // Ensure the path is correct; use `/public` folder path if inside `public`
                    alt="Search"
                    className="h-5 w-5" // Adjust size as needed
                />
                </button>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="font-semibold text-gray-700">Sort by:</label>
              <select
                value={sortOrder}
                onChange={(e) => handleSortOrderChange(e.target.value)}
                className="p-2 border text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
            <div className="flex-1 overflow-y-auto px-2 md:px-4 space-y-4 pb-16 pt-4 mb-6">
              {loading ? (
                <p className="text-center text-blue-900">Loading...</p>
              ) : displayedNews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {displayedNews.map((article, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white rounded-lg shadow-lg hover:shadow-2xl transform transition-transform duration-300 ease-in-out"
                    >
                      <a
                        href={article.link} // Assuming there's a link to the full article
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-900 font-semibold text-lg hover:underline"
                      >
                        {article.title}
                      </a>
                      <p className="text-gray-500 text-sm">{new Date(article.date).toLocaleDateString()}</p>
                      <ul className="mt-2 list-disc pl-4 text-gray-700 space-y-1">
                        <li>{article.summary[0]}</li>
                      </ul>
                      {article.summary.length > 1 && !showMore[index] && (
                        <button
                          onClick={() =>
                            setShowMore((prev) => ({
                              ...prev,
                              [index]: true,
                            }))
                          }
                          className="text-blue-700 hover:text-blue-900 text-sm mt-2"
                        >
                          Read More
                        </button>
                      )}
                      {showMore[index] && (
                        <div className="mt-2">
                          <ul className="list-disc pl-4 text-gray-700 space-y-1">
                            {article.summary.slice(1).map((point, idx) => (
                              <li key={idx}>{point}</li>
                            ))}
                          </ul>
                          <button
                            onClick={() =>
                              setShowMore((prev) => ({
                                ...prev,
                                [index]: false,
                              }))
                            }
                            className="text-blue-700 hover:text-blue-900 text-sm mt-2"
                          >
                            Show Less
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : searchInitiated ? (
                <p className="text-center text-red-600">Currently, there is no media presence of {searchQuery}</p>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )}
</>

  );
};

export default GetStartupInsightsModal;
