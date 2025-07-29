export function renderWallet() {
  document.getElementById('main').innerHTML = `
    <div class="wallet-card">
      <h1>🪙 AVODA Wallet</h1>
      <p>Wallet Balance: 0 AVD</p>
      <button onclick="alert('Connect wallet coming soon...')">Connect Wallet</button>
    </div>
  `;
}
