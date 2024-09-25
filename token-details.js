async function fetchTokenDetails() {
    try {
        let response = await fetch('https://tn10api.kasplex.org/v1/krc20/tokenlist');
        let data = await response.json();

        // Log the full response to see its structure
        console.log(data);

        let token = data.result.find(t => t.tick.toLowerCase() === 'kasx');
        console.log(token); // Log the token details

        if (token) {
            const minted = parseInt(token.minted, 10);
            const supply = parseInt(token.supply, 10);
            const percentageMinted = ((minted / supply) * 100).toFixed(2);

            document.getElementById('token-percentage-minted').textContent = `Minted: ${percentageMinted}%`;
        } else {
            document.getElementById('token-percentage-minted').textContent = 'Token Not Found';
        }

    } catch (error) {
        console.error('Error fetching token details:', error);
        document.getElementById('token-percentage-minted').textContent = 'Error loading percentage.';
    }
}
