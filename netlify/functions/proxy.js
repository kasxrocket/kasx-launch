import axios from 'axios';

exports.handler = async (event) => {
  const endpoint = event.queryStringParameters.endpoint || '';
  const params = event.queryStringParameters || {};

  const BASE_URL = 'https://api.kaspiano.com/api';
  const url = `${BASE_URL}${endpoint ? `/${endpoint}` : ''}`;

  try {
    const response = await axios.get(url, { params });
    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};

