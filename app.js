// app.js

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');
  
  button.addEventListener('click', () => {
    alert('You are now entering the KasX Token Swap interface!');
    window.location.href = 'swap.html';  // swap page
	function swapTokens() {
  const amount = document.getElementById('token-amount').value;
  const fromToken = document.getElementById('from-token').value;
  const toToken = document.getElementById('to-token').value;
  
  alert(`Swapping ${amount} from ${fromToken} to ${toToken}`);
}

  });
});
