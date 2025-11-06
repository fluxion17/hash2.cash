<section class="smt" id="getting-started">

  <div class="container mb-2">
    <div class="card getting-started">
      <h2>Getting Started</h2>
      <ol>
        <li>Download a compatible miner — see our <a href="/guide/1" class="link">guide for ASICs and GPUs</a>.</li>
        <li>Create or use an existing <a href="https://docs.flokicoin.org/wallets/twallet/v1/" class="link" target="_blank">FLC wallet</a>.</li>
        <li>Connect to <code>stratum+tcp://hash2.cash:3333</code></li>
        <li>Enter your wallet address and worker name <code>address.workerName</code></li>
        <li>In password field, enter <code>Sharenote</code> to print — see <a href="/guide/1" class="link">sharenote print planner</a>.</li>
        <li>Start mining and watch your Sharenotes generate live.</li>
        <li>Set <code>DOGE</code>, <code>PEPE</code> and <code>BELLS</code> payout addresses</li>
      </ol>
      
    </div>
  </div>
</section>

<style>
  .getting-started {
    display: grid;
    gap: 1.4rem;
  }
  .link{
    color: #1c4ed8;
    border-bottom: 1px solid #96cbff;
  }

  ol {
    display: grid;
    gap: 0.65rem;
    padding-left: 1.2rem;
  }

  code {
    background: rgba(82, 136, 255, 0.14);
    padding: 0.1rem 0.4rem;
    border-radius: 6px;
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
    font-size: 0.95rem;
    color: #1c4ed8;
  }
</style>