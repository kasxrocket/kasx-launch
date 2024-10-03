// Function to fetch balance for a given wallet
async function checkBalance(event) {
    event.preventDefault();
    const walletAddress = document.getElementById('wallet-address').value;
    const resultContainer = document.getElementById('balance-result');

    // Mock API response (replace with real API call)
    resultContainer.innerHTML = "Checking balance for: " + walletAddress;
    
    // Simulate API response after 1 second
    setTimeout(() => {
        const mockBalance = "10,000 KAS"; // Mock balance
        resultContainer.innerHTML = `Balance: ${mockBalance}`;
    }, 1000);
}

// Function to mint tokens
async function mintTokens(event) {
    event.preventDefault();
    const tokenName = document.getElementById('mint-token').value;
    const mintAmount = document.getElementById('mint-amount').value;
    const resultContainer = document.getElementById('mint-result');

    resultContainer.innerHTML = `Minting ${mintAmount} ${tokenName}...`;

    // Simulate mint API response after 1 second
    setTimeout(() => {
        resultContainer.innerHTML = `Successfully minted ${mintAmount} ${tokenName}!`;
    }, 1000);
}

// Function to deploy a new token
async function deployToken(event) {
    event.preventDefault();
    const tokenName = document.getElementById('deploy-name').value;
    const maxSupply = document.getElementById('max-supply').value;
    const resultContainer = document.getElementById('deploy-result');

    resultContainer.innerHTML = `Deploying ${tokenName} with max supply ${maxSupply}...`;

    // Simulate deploy API response after 1 second
    setTimeout(() => {
        resultContainer.innerHTML = `Token ${tokenName} successfully deployed!`;
    }, 1000);
}

// Function to transfer tokens
async function transferTokens(event) {
    event.preventDefault();
    const tokenName = document.getElementById('transfer-token').value;
    const recipient = document.getElementById('transfer-to').value;
    const amount = document.getElementById('transfer-amount').value;
    const resultContainer = document.getElementById('transfer-result');

    resultContainer.innerHTML = `Transferring ${amount} ${tokenName} to ${recipient}...`;

    // Simulate transfer API response after 1 second
    setTimeout(() => {
        resultContainer.innerHTML = `${amount} ${tokenName} successfully transferred to ${recipient}!`;
    }, 1000);
}

// Function to send KAS
async function sendKAS(event) {
    event.preventDefault();
    const recipient = document.getElementById('kas-to').value;
    const amount = document.getElementById('kas-amount').value;
    const resultContainer = document.getElementById('send-result');

    resultContainer.innerHTML = `Sending ${amount} KAS to ${recipient}...`;

    // Simulate send API response after 1 second
    setTimeout(() => {
        resultContainer.innerHTML = `${amount} KAS successfully sent to ${recipient}!`;
    }, 1000);
}

// Function to get trending tokens
async function getTrendingTokens(event) {
    event.preventDefault();
    const resultContainer = document.getElementById('trending-tokens-result');

    resultContainer.innerHTML = "Fetching trending tokens...";

    // Simulate trending tokens API response after 1 second
    setTimeout(() => {
        const mockTrendingTokens = ['NACHO', 'PEPE', 'GHOAD']; // Mock trending tokens
        resultContainer.innerHTML = `Trending Tokens: ${mockTrendingTokens.join(', ')}`;
    }, 1000);
}

// Function to get referral link
async function getReferralLink(event) {
    event.preventDefault();
    const resultContainer = document.getElementById('referral-result');

    resultContainer.innerHTML = "Fetching your referral link...";

    // Simulate referral link API response after 1 second
    setTimeout(() => {
        const mockReferralLink = 'https://kasx.io/referral?user=12345'; // Mock referral link
        resultContainer.innerHTML = `Your referral link: <a href="${mockReferralLink}" target="_blank">${mockReferralLink}</a>`;
    }, 1000);
}

// Event listeners for form submissions
document.getElementById('balance-form').addEventListener('submit', checkBalance);
document.getElementById('mint-form').addEventListener('submit', mintTokens);
document.getElementById('deploy-form').addEventListener('submit', deployToken);
document.getElementById('transfer-form').addEventListener('submit', transferTokens);
document.getElementById('send-form').addEventListener('submit', sendKAS);
document.getElementById('trending-tokens-btn').addEventListener('click', getTrendingTokens);
document.getElementById('referral-btn').addEventListener('click', getReferralLink);
