const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const apiKey = process.env.API_KEY;
    const baseUrl = 'https://api.nownodes.io/';
    const { fromToken, toToken, amount } = JSON.parse(event.body);  // Parse the request body

    try {
        // Example API call to Kaspa's node API (adjust endpoint and logic as necessary)
        const response = await fetch(`${baseUrl}kaspa/sendTransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({
                fromToken: fromToken,
                toToken: toToken,
                amount: amount
            })
        });

        const data = await response.json();

        // Return the transaction result
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Swap successful', data })
        };

    } catch (error) {
        console.error('Error performing token swap:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error performing token swap', error: error.toString() })
        };
    }
};
