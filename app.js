import { renderWallet } from './components/wallet.js';
import { renderDex } from './components/dex.js';
import { renderFutures } from './components/futures.js';

window.addEventListener('DOMContentLoaded', () => {
  renderWallet(); // default load
});

window.loadWallet = () => renderWallet();
window.loadDex = () => renderDex();
window.loadFutures = () => renderFutures();
