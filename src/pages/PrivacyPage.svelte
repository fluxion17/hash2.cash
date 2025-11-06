<script>
  import HeaderNav from '../lib/components/HeaderNav.svelte';
  import FooterSection from '../lib/components/FooterSection.svelte';
</script>

<HeaderNav />

<main class="page">
  <section>
    <div class="container card p7">
      <h1>Your data, protected by design.</h1>
      <p class="mb-2">
        Hash2Cash collects the minimum data needed to operate a transparent, reward-driven mining
        pool. This policy explains what we collect, how it is used, and how you can control it.
      </p>

      <h3>1. Data We Collect</h3>
      <ul class="mb-1 txt">
        <li>Wallet addresses and optional worker names you provide to the pool.</li>
        <li>
          Connection telemetry (hash rate, share totals, latency) required to calculate Sharenotes
          and rewards.
        </li>
        <li>Support information when you submit tickets or contact our team.</li>
      </ul>


      <h3>2. How We Use Data</h3>
      <p class="mb-1">
        Operational metrics are used to issue Sharenotes, calculate payouts, detect anomalies, and
        display live data in the dashboard. We do not sell miner information or share it with third
        parties outside of legal obligations.
      </p>


      <h3>3. Storage & Security</h3>
      <p class="mb-1">
        Sharenotes and ledger entries are stored immutably on the Hash2Cash network. Operational logs are
        retained in secure infrastructure with strict access controls, and automatically pruned when
        no longer required.
      </p>


      <h3>4. Contact</h3>
      <p>
        Email hi@hash2.cash for questions about this policy or to submit data requests. We aim to
        respond within five business days.
      </p>
    </div>
  </section>
</main>

<FooterSection />

<style>
  .page {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding-bottom: 4rem;
  }

  .hero {
    padding-top: 6rem;
  }

  .card ul {
    display: grid;
    gap: 0.75rem;
    margin-top: 1rem;
    padding-left: 1.2rem;
  }

  .card h2 {
    margin-bottom: 0.8rem;
  }

  .page-footer {
    padding: 2rem 0 4rem;
    text-align: center;
    color: rgba(10, 31, 51, 0.6);
  }

  .page-footer a {
    color: #1c4ed8;
    font-weight: 600;
  }

  .p7 {
    padding: 7rem;
  }

  @media (max-width: 640px) {
    .p7 {
      padding:1.4rem;
    }
  }
</style>
