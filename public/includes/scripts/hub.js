// Base URL for Kaspiano API
const baseUrl = 'https://api.kaspiano.com/api';


// Helper function to fetch and handle API data
async function fetchData(endpoint, params = '') {
    try {
      const response = await fetch(`${baseUrl}${endpoint}${params}`);
      if (!response.ok) {
        console.error(`Error ${response.status}: ${response.statusText}`);
        return null;
      }
      return await response.json();
    } catch (error) {
      console.error(`Network error for ${endpoint}:`, error);
      return null;
    }
  }

// 1. Get Trade Statistics
async function loadTradeStats() {
  const data = await fetchData('/trade-stats', '?timeFrame=1d');
  const display = document.getElementById('trade-stats-data');
  if (data) {
    display.innerHTML = `
      <p>Total Trades: ${data.totalTradesKaspiano}</p>
      <p>Total Volume (KAS): ${data.totalVolumeKasKaspiano}</p>
      <p>Total Volume (USD): ${data.totalVolumeUsdKaspiano}</p>
      <h3>Token Stats:</h3>
      <ul>
        ${data.tokens.map(token => `
          <li>${token.ticker}: ${token.totalTrades} trades, ${token.totalVolumeKAS} KAS, ${token.totalVolumeUsd} USD</li>
        `).join('')}
      </ul>
    `;
  } else {
    display.textContent = 'Failed to load trade statistics.';
  }
}

// 2. Get Floor Price
async function loadFloorPrice() {
    const data = await fetchData('/floor-price');
    const display = document.getElementById('floor-price-data');
    if (data) {
      display.innerHTML = `
        <ul>
          ${data.map(item => `
            <li>${item.ticker}: ${item.floor_price} USD</li>
          `).join('')}
        </ul>
      `;
    } else {
      display.textContent = 'Failed to load floor prices.';
    }
  }
  
  // Initialize loading of floor price data
  loadFloorPrice();
  

// 3. Get Fulfilled Orders (Last Minute)
async function loadSoldOrders() {
  const data = await fetchData('/sold-orders');
  const display = document.getElementById('sold-orders-data');
  if (data && data.orders.length) {
    display.innerHTML = `
      <ul>
        ${data.orders.map(order => `
          <li>${order.ticker}: ${order.quantity} at ${order.pricePerToken} USD each (Total: ${order.totalPrice} USD)</li>
        `).join('')}
      </ul>
    `;
  } else {
    display.textContent = 'No fulfilled orders found in the last minute.';
  }
}

// 4. Get Hot Mints (Top 5 Fastest Mints)
async function loadHotMints() {
  const data = await fetchData('/hot-mints', '?timeInterval=6h');
  const display = document.getElementById('hot-mints-data');
  if (data) {
    display.innerHTML = `
      <ul>
        ${data.map(mint => `
          <li>${mint.ticker}: ${mint.changeTotalMints} new mints, ${mint.totalMintPercentage * 100}% increase, ${mint.totalHolders} holders</li>
        `).join('')}
      </ul>
    `;
  } else {
    display.textContent = 'Failed to load hot mints.';
  }
}

// 5. Get Open Orders for Sale
async function loadOpenOrders() {
  const data = await fetchData('/open-orders');
  const display = document.getElementById('open-orders-data');
  if (data && data.tickers) {
    display.innerHTML = `
      <ul>
        ${data.tickers.map(ticker => `<li>${ticker}</li>`).join('')}
      </ul>
    `;
  } else {
    display.textContent = 'Failed to load open orders.';
  }
}

// Initialize the page by loading all sections
loadTradeStats();
loadFloorPrice();
loadSoldOrders();
loadHotMints();
loadOpenOrders();
