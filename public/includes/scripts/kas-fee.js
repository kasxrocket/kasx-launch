// Define the API endpoint
const url = "https://api.kaspa.org/info/fee-estimate";

// Make the GET request
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Fee Estimate:", data);
    // Display the fee estimate in the web page
    document.getElementById("fee-estimate").innerText = JSON.stringify(data);
  })
  .catch(error => {
    console.error("Error fetching fee estimate:", error);
  });
