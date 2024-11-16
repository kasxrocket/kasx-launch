import fetch from 'node-fetch';

exports.handler = async (event) => {
  const endpoint = event.queryStringParameters.endpoint || '';
  const params = event.queryStringParameters || {};

  const BASE_URL = 'https://api.kaspiano.com/api';
  const queryString = new URLSearchParams(params).toString();
  const url = `${BASE_URL}${endpoint ? `/${endpoint}` : ''}?${queryString}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
