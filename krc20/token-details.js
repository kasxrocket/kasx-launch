document.addEventListener('DOMContentLoaded', function() {
    const tokenPercentageEl = document.getElementById('token-percentage-minted');

    // Function to fetch token data
    async function fetchTokenDetails() {
        try {
            // Fetch all tokens
            let response = await fetch('https://tn10api.kasplex.org/v1/krc20/tokenlist');
            let data = await response.json();

            // Find the KASX token (replace "KASX" with any other token ticker if needed)
            let token = data.result.find(t => t.tick.toLowerCase() === 'kasx');

            // Display token data if found
            if (token) {
                const minted = parseInt(token.minted, 10);
                const supply = parseInt(token.supply, 10);
                const percentageMinted = ((minted / supply) * 100).toFixed(2);

                tokenPercentageEl.textContent = `Minted: ${percentageMinted}%`;
            } else {
                tokenPercentageEl.textContent = 'Token Not Found';
            }

        } catch (error) {
            console.error('Error fetching token details:', error);
            tokenPercentageEl.textContent = 'Error loading percentage.';
        }
    }

    // Call the function to load the token details
    fetchTokenDetails();
});
