// Step 1: Detect if Kasware is installed
if (typeof kas !== "undefined" && kas.isInstalled()) {
    console.log("Kasware Wallet is detected.");
} else {
    console.log("Kasware Wallet is not installed.");
}

// Step 2: Connect Wallet
async function connectWallet() {
    try {
        await kas.connect();
        console.log("Wallet connected successfully.");
    } catch (error) {
        console.error("Error connecting wallet:", error);
    }
}

// Step 3: Retrieve Accounts and Balances
async function getAccountInfo() {
    try {
        const accounts = await kas.getAccounts();
        console.log("Accounts:", accounts);
        const balance = await kas.getBalance(accounts[0]);
        console.log("Balance for account", accounts[0], ":", balance);
    } catch (error) {
        console.error("Error retrieving accounts or balance:", error);
    }
}

// Step 4: Send a Transaction
async function sendTransaction() {
    try {
        const transactionDetails = {
            to: "receiver_address_here",
            value: "amount_here",
            gasLimit: "gas_limit_here",
        };
        const txHash = await kas.sendTransaction(transactionDetails);
        console.log("Transaction successful with hash:", txHash);
    } catch (error) {
        console.error("Error sending transaction:", error);
    }
}

// Example usage
connectWallet(); // Call this function to initiate connection
