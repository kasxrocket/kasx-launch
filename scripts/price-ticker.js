document.addEventListener('DOMContentLoaded', function() {
    const tokenNameEl = document.getElementById('token-name');
    const tokenSymbolEl = document.getElementById('token-symbol');
    const tokenSupplyEl = document.getElementById('token-supply');
    const tokenMintedEl = document.getElementById('token-minted');
    const tokenPercentageEl = document.getElementById('token-percentage-minted');

    // Get the ticker symbol from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ticker = urlParams.get('ticker');

    // Function to fetch token data
    async function fetchTokenDetails(ticker) {
        try {
            // Fetch all tokens
            let response = await fetch('https://tn10api.kasplex.org/v1/krc20/tokenlist');
            let data = await response.json();

            // Find the token with the matching ticker
            let token = data.result.find(t => t.tick.toLowerCase() === ticker.toLowerCase());

            // Display token data if found
            if (token) {
                const minted = parseInt(token.minted, 10);
                const supply = parseInt(token.supply, 10);
                const percentageMinted = ((minted / supply) * 100).toFixed(2);

                tokenNameEl.textContent = `Token: ${token.tick}`;
                tokenSymbolEl.textContent = `Symbol: ${token.tick}`;
                tokenSupplyEl.textContent = `Supply: ${(supply / Math.pow(10, token.dec)).toLocaleString()}`;
                tokenMintedEl.textContent = `Minted: ${(minted / Math.pow(10, token.dec)).toLocaleString()}`;
                tokenPercentageEl.textContent = `Percentage Minted: ${percentageMinted}%`;
            } else {
                tokenNameEl.textContent = 'Token Not Found';
            }

        } catch (error) {
            console.error('Error fetching token details:', error);
            tokenNameEl.textContent = 'Error loading token details.';
        }
    }

    // Call the function to load the token details
    if (ticker) {
        fetchTokenDetails(ticker);
    } else {
        tokenNameEl.textContent = 'No ticker provided in the URL.';
    }
});
