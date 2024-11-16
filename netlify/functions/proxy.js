const fetch = require('node-fetch');

exports.handler = async (event) => {
  // Extract endpoint and parameters from the query string
  const endpoint = event.queryStringParameters.endpoint || '';
  const params = event.queryStringParameters || {};

  // Construct the Kaspiano API URL
  const BASE_URL = 'https://api.kaspiano.com/api';
  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${endpoint ? `/${endpoint}` : ''}?${queryString}`;

  try {
    // Make the API request
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    // Handle any errors
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};