<script>
    async function fetchTopTokens() {
      try {
        // Fetch data from the /hot-mints endpoint with a 6-hour interval
        const response = await fetch('https://api.kaspiano.com/api/hot-mints?timeInterval=6h');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const tokens = await response.json();

        // Limit to top 10 tokens
        const topTokens = tokens.slice(0, 10);

        // Get container to display tokens
        const container = document.getElementById('token-container');

        // Populate tokens in a 2x5 grid
        topTokens.forEach(token => {
          // Create card element
          const tokenCard = document.createElement('div');
          tokenCard.classList.add('token-card');

          // Token name
          const tokenName = document.createElement('div');
          tokenName.classList.add('token-name');
          tokenName.textContent = token.ticker;
          tokenCard.appendChild(tokenName);

          // Buttons container
          const buttons = document.createElement('div');
          buttons.classList.add('buttons');

          // Mint button
          const mintButton = document.createElement('button');
          mintButton.classList.add('button', 'mint-button');
          mintButton.textContent = 'Mint';
          mintButton.onclick = () => window.open(`https://your-mint-url.com/${token.ticker}`, '_blank');
          buttons.appendChild(mintButton);

          // Trade Now button
          const tradeButton = document.createElement('button');
          tradeButton.classList.add('button', 'trade-button');
          tradeButton.textContent = 'Trade Now';
          tradeButton.onclick = () => window.open(`https://your-trade-url.com/${token.ticker}`, '_blank');
          buttons.appendChild(tradeButton);

          // Add buttons to card
          tokenCard.appendChild(buttons);

          // Add card to container
          container.appendChild(tokenCard);
        });
      } catch (error) {
        console.error("Failed to fetch tokens:", error);
        document.getElementById("token-container").textContent = "Failed to load tokens.";
      }
    }

    // Fetch tokens on page load
    fetchTopTokens();
  </script>