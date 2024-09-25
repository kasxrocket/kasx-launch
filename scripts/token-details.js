async function fetchTokenDetails() {
    try {
        let response = await fetch('https://api-v2-do.kas.fyi/v1/krc20/tokens/nacho'); // Adjust this if needed
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log('Token Data:', data);  // Ensure data is logged

        const minted = parseInt(data.minted, 10);
        const supply = parseInt(data.supply, 10);

        if (isNaN(minted) || isNaN(supply)) {
            console.error('Minted or Supply value is invalid or undefined.');
            document.getElementById('token-percentage-minted').textContent = 'Error calculating percentage';
            return;
        }

        const percentageMinted = ((minted / supply) * 100).toFixed(2);
        document.getElementById('token-percentage-minted').textContent = `Minted: ${percentageMinted}%`;

    } catch (error) {
        console.error('Error fetching token details:', error);
        document.getElementById('token-percentage-minted').textContent = 'Error loading percentage.';
    }
}

fetchTokenDetails();
