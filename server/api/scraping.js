const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeGymStats() {
  const url = 'https://wod.guru/blog/gym-membership-statistics/';

  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    const popularexercises = $('ol').eq(5).find('li').map((i, el) => {
      const text = $(el).text().trim();
      const match = text.match(/([a-zA-Z\s]+)\s\(([\d\.]+%)\)/);

      if (match) {
        return {
          exercise: match[1].trim(), 
          percentage: match[2]        
        };
      } else {
        return null;
      }
    }).get().filter(Boolean); 

    const exerciseStats = popularexercises.reduce((acc, { exercise, percentage }) => {
      acc[exercise.toLowerCase()] = percentage;
      return acc;
    }, {});

    const industrystats = $('ul').eq(19).find('li').map((i, el) => $(el).text().trim()).get();

    return {
      popularexercises: exerciseStats,
      industrystats
    };
  } catch (error) {
    console.error('Error scraping data:', error);
    return null;
  }
}

module.exports = scrapeGymStats;
