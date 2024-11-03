<script>
async function fetchKaspaGasFee() {
  try {
    const response = await fetch("https://kaspa.aspectron.org/transactions/fees/fee-rate-qos.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    
    // Assuming the API returns a JSON object like { "fee_rate": value }
    const feeRate = data.fee_rate; // Adjust based on the actual response structure

    // Display the fee rate on the page
    document.getElementById("fee-display").textContent = `Current Gas Fee Rate: ${feeRate}`;
  } catch (error) {
    document.getElementById("fee-display").textContent = "Failed to load fee data.";
    console.error("Error fetching Kaspa gas fee:", error);
  }
}

// Fetch the gas fee when the page loads
fetchKaspaGasFee();
</script>