// Vercel Serverless Function to fetch cards from Google Sheet

const SHEET_ID = '1JlakFwxXBtBA8RvIn_y7nHCbz3A39sJqadSTIB2akMU';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`;

// In-memory cache with timestamp
let cachedData = null;
let cacheTime = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function parseCSV(csv) {
  // Split CSV into lines
  const lines = csv.trim().split('\n');

  // First line is headers
  const headers = lines[0].split(',').map(h => h.trim());

  // Parse each data row
  const cards = lines.slice(1).map(line => {
    const values = line.split(',').map(v => v.trim());
    const card = {};

    headers.forEach((header, index) => {
      card[header] = values[index] || '';
    });

    return card;
  }).filter(card => card.id); // Filter out empty rows

  return cards;
}

async function fetchCards() {
  // Check if cache is still valid
  if (cachedData && cacheTime && Date.now() - cacheTime < CACHE_DURATION) {
    console.log('Returning cached data');
    return cachedData;
  }

  try {
    console.log('Fetching fresh data from Google Sheet...');
    const response = await fetch(SHEET_URL);

    if (!response.ok) {
      throw new Error(`Google Sheets request failed: ${response.status}`);
    }

    const csv = await response.text();
    const cards = parseCSV(csv);

    // Update cache
    cachedData = cards;
    cacheTime = Date.now();

    console.log(`Successfully fetched ${cards.length} cards`);
    return cards;
  } catch (error) {
    console.error('Error fetching from Google Sheet:', error);

    // Return cached data if available, even if expired
    if (cachedData) {
      console.log('Returning stale cache due to error');
      return cachedData;
    }

    throw error;
  }
}

export default async function handler(req, res) {
  // Enable CORS so your frontend can access this
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const cards = await fetchCards();

    // Return with cache headers
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24 hours
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch cards', 
      message: error.message 
    });
  }
}
