<section class="smt" id="faq">
  <div class="container">
    <div class="card2 faq">
      <h2 class="center">FAQs</h2>
      <div class="faq__list">
        <details>
          <summary>How does merged mining work?</summary>
          <p>
            By connecting to Hash2Cash stratum endpoint, the pool handles merged
            difficulty targets for FLC, DOGE, PEPE and BELLS simultaneously, letting you maximize your earnings.
          </p>
        </details>
        <details>
          <summary>How do Sharenotes affect my payout?</summary>
          <p>
            Sharenotes act as immutable proof of work. Under PPLNS, the total value of your
            Sharenotes within the payout window determines your reward with zero guesswork.
          </p>
        </details>
        <details>
          <summary>Can I track my miners individually?</summary>
          <p>
            Yes. Append worker names to your address (e.g. <code>FLC1abc.worker1</code>) and review
            their independent hash rate and Sharenote history in the dashboard.
          </p>
        </details>
        <details>
          <summary>When do payouts happen?</summary>
          <p>
            Payouts trigger automatically once your balance meets the threshold and the PPLNS window
            closes with confirmed blocks recorded on-chain.
          </p>
        </details>
        <details>
          <summary>Is there a minimum payout?</summary>
          <p>
            The default threshold is 5 FLC, adjustable per miner in your dashboard preferences.
          </p>
        </details>
        <details>
          <summary>About FLC</summary>
          <p>
            Flokicoin (FLC) is the native asset powering the Sharenote settlement layer and
            Hash2Cash on-chain governance. Mining FLC secures the ledger and feeds
            real-time transparency into every pool reward.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

<style>
  .faq {
    display: grid;
    gap: 1.3rem;
  }

  .faq__list {
    display: grid;
    gap: 0.8rem;
  }
</style>