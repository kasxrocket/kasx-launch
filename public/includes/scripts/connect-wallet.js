<!-- Wallet Connect Popup and Logic -->
<script>
    // Open the wallet popup
    function openWalletPopup() {
        document.getElementById('walletPopup').style.display = 'block';
    }

    // Close the wallet popup
    function closeWalletPopup() {
        document.getElementById('walletPopup').style.display = 'none';
    }

    // Connect to Kasware Wallet (placeholder function)
    function connectKaswareWallet() {
        // Example function - Replace with actual Kasware wallet connect logic
        alert('Connecting to Kasware Wallet...');
        closeWalletPopup();  // Close the popup after selecting wallet
        // Add actual Kasware API integration here.
    }
</script>