document.addEventListener('DOMContentLoaded', function() {
    const tokenContainer = document.getElementById('tokens');

    // Function to fetch token data
    async function fetchKRC20Tokens() {
        try {
            // Fetch the data from the API
            let response = await fetch('https://tn10api.kasplex.org/v1/krc20/tokenlist');

            // Ensure the response is OK (status code 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Parse the JSON data
            let data = await response.json();

            // Clear the token container
            tokenContainer.innerHTML = '';

            // Check if data.result exists and has tokens
            if (data.result && data.result.length > 0) {
                const ul = document.createElement('ul');  // Create a list element

                data.result.forEach(token => {
                    // Create a list item for each token
                    let li = document.createElement('li');
                    
                    // Add link to each token symbol (customize the URL)
                    li.innerHTML = `
                        <a href="tokens.html?ticker=${token.tick.toLowerCase()}" target="_blank">
                            ${token.tick || 'Unnamed Token'} - Supply: ${parseInt(token.minted, 10) / Math.pow(10, token.dec) || 'N/A'}
                        </a>
                    `;
                    ul.appendChild(li);
                });

                tokenContainer.appendChild(ul);  // Append the list to the container
            } else {
                tokenContainer.innerHTML = '<p>No tokens found.</p>';
            }

        } catch (error) {
            console.error('Error fetching token data:', error);
            tokenContainer.innerHTML = '<p>Error loading tokens. Please try again later.</p>';
        }
    }

    // Call the function to fetch tokens
    fetchKRC20Tokens();
});
