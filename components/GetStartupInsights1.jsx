import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Head from "next/head"; // Import Head from next/head
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fetchLatestInsightsData } from "@/components/latest-insights" ; // Adjust the import path

const GetStartupInsightsModal1 = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState({});
  const [searchInitiated, setSearchInitiated] = useState(false);
  const [modalTitle, setModalTitle] = useState('Latest Startup News'); // Default title
  const [sortOrder, setSortOrder] = useState('latest');
  const [categories, setCategories] = useState([]); // Store unique categories
  const [selectedCategory, setSelectedCategory] = useState(''); // Selected category

  const subCategoryMap = {
    edtech: 'EdTech',
    fintech: 'FinTech',
    agritech: 'AgriTech',
    artificialintelligence: 'AI',
    general: 'General',
    healthtech: 'HealthTech',
    tech: 'Tech',
    logistech: 'LogisTech',
  };

  // Fetch the latest startup news when the modal opens
  useEffect(() => {
    if (isOpen) {
      fetchLatestStartupNews();
    }
  }, [isOpen]);

  const fetchLatestStartupNews = async () => {
    setLoading(true);
    setSearchInitiated(false); // This prevents "No results found" from showing initially
    setModalTitle('Latest Startup Insights'); // Set title for latest news

    try {
      const insightsData = await fetchLatestInsightsData(); // Fetch data using your backend function
      const filteredNews = filterNewsByLastYear(insightsData); // Filter news from the last year
      const uniqueCategories = [...new Set(filteredNews.map(article => article.subcategory))]; // Get unique categories
      setCategories(uniqueCategories);
      setNews(filteredNews);
      handleSortOrderChange('latest', filteredNews); // Set default sort to latest
    } catch (error) {
      console.error('Error fetching news:', error.message);
    } finally {
      setLoading(false);
    }
  };

  // Filter news from the last year
  const filterNewsByLastYear = (newsList) => {
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    return newsList.filter((article) => new Date(article.date) >= oneYearAgo);
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

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setSelectedCategory(selectedCategory);
    const filteredNews = news.filter(article => article.subcategory === selectedCategory); // Use subcategory
    handleSortOrderChange(sortOrder, filteredNews); // Filter news by selected category
  };

  // Helper function to split summaries by full stops
  const splitSummaryIntoPoints = (summary) => {
    if (searchQuery === '') {
      return summary
        .split('. ')
        .map(point => point.trim())
        .filter(point => point.length > 0 && !point.toLowerCase().includes('source link'));
    } else {
      return summary;
    }
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOMareMFjc5p8s5CPR8G3q2m0IMzYKKzVvFoky62"
          crossOrigin="anonymous"
        />
      </Head>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm p-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="backdrop-filter backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl w-full max-w-4xl mx-auto h-4/5 md:h-3/4 overflow-hidden"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.08)" }} // Adjusted for better transparency
          >
            <div className="relative flex flex-col h-full">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 p-2 bg-gray-200 rounded-lg shadow z-10 hover:bg-gray-300"
              >
                &times;
              </button>
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 p-6 rounded-t-3xl shadow-md">
                <h2 className="text-3xl font-extrabold text-white">
                  {modalTitle}
                </h2>
              </div>
              <div className="px-8 py-6 flex flex-col h-full space-y-6" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}> {/* Slight transparency to match the background */}
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search for startup insights..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="w-full p-4 bg-white/80 text-gray-900 border border-gray-300 rounded-full shadow-lg pr-14 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition-transform duration-300 ease-in-out"
                  />
                  <button
                    onClick={handleSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 ease-in-out shadow-xl"
                  >
                    <img
                      src="/assets/images/search.png"
                      alt="Search"
                      className="h-5 w-5"
                    />
                  </button>
                </div>
                <div className={!searchQuery ? `grid grid-cols-2 gap-4 mb-4 ml-4 mr-4` : `flex justify-end ml-4 mr-4`}>
                  {!searchQuery && (
                    <div className="flex items-center">
                      <label className="mr-2 font-semibold text-white text-lg">Category:</label>
                      <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="p-2 bg-white/70 text-gray-900 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                      >
                        <option value="">All</option>
                        {categories.map((category, index) => (
                          <option key={index} value={category}>
                            {subCategoryMap[category]}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="flex items-center justify-end">
                    <label className="font-semibold text-white text-lg">Sort by:</label>
                    <select
                      value={sortOrder}
                      onChange={(e) => handleSortOrderChange(e.target.value)}
                      className="p-2 bg-white/70 text-gray-900 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                    >
                      <option value="latest">Latest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto px-4 space-y-6 pb-8">
                  {loading ? (
                    <p className="text-center text-white font-bold text-lg animate-pulse">Loading...</p>
                  ) : displayedNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {displayedNews.map((article, index) => {
                        const summaryPoints = splitSummaryIntoPoints(article.summary);
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-6 bg-white/80 bg-opacity-80 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transform transition-all duration-300 ease-in-out"
                          >
                            <a
                              href={article.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-800 font-semibold text-lg hover:underline hover:text-blue-600"
                            >
                              {article.title}
                            </a>
                            <p className="text-gray-600 text-sm mt-2">{new Date(article.date).toLocaleDateString()}</p>
                            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-2">
                              <li>{summaryPoints[0]}</li>
                            </ul>
                            {summaryPoints.length > 1 && !showMore[index] && (
                              <button
                                onClick={() =>
                                  setShowMore((prev) => ({
                                    ...prev,
                                    [index]: true,
                                  }))
                                }
                                className="text-blue-600 hover:text-blue-800 text-sm mt-4 font-medium"
                              >
                                Read More
                              </button>
                            )}
                            {showMore[index] && (
                              <div className="mt-4">
                                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                  {summaryPoints.slice(1).map((point, idx) => (
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
                                  className="text-blue-600 hover:text-blue-800 text-sm mt-4 font-medium"
                                >
                                  Show Less
                                </button>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : searchInitiated ? (
                    <p className="text-center text-red-500 font-semibold">Currently, there is no media presence of {searchQuery}</p>
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

export default GetStartupInsightsModal1;
