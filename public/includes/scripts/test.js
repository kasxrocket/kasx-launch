const BASE_URL = '/.netlify/functions/proxy';

// Function to display results on the page
function displayResult(endpoint, result) {
  const outputDiv = document.getElementById('output');
  const formattedResult = `Endpoint: ${endpoint}\nResult: ${JSON.stringify(result, null, 2)}\n\n`;
  outputDiv.textContent += formattedResult;
}

// Function to test an API endpoint via the Netlify Function
async function testApi(endpoint, params = {}) {
  const url = new URL(`${window.location.origin}${BASE_URL}`);
  url.searchParams.append('endpoint', endpoint);
  Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

  try {
    console.log(`Testing: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error ${response.status}: ${response.statusText}\nDetails: ${errorText}`);
      displayResult(endpoint, { error: `Error ${response.status}: ${response.statusText}`, details: errorText });
      return;
    }

    const data = await response.json();
    console.log(`Success: ${endpoint}`, data);
    displayResult(endpoint, data);
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error);
    displayResult(endpoint, { error: `Failed to fetch ${endpoint}`, details: error.toString() });
  }
}

// Test each endpoint with minimal parameters
async function runTests() {
  // Test /trade-stats
  await testApi('trade-stats', { timeFrame: '1d' });

  // Test /floor-price
  await testApi('floor-price');

  // Test /sold-orders
  await testApi('sold-orders');

  // Test /hot-mints
  await testApi('hot-mints', { timeInterval: '6h' });

  // Test /open-orders
  await testApi('open-orders');
}

// Run tests on page load
runTests();
