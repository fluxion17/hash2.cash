<script>
  import HeaderNav from '../lib/components/HeaderNav.svelte';
  import FooterSection from '../lib/components/FooterSection.svelte';
</script>

<HeaderNav />

<main class="page">
  <section>
    <div class="container card p7">
      <h1>Terms & Conditions</h1>
      <p class="mb-2">
        These terms explain how you can use Hash2Cash, how rewards are calculated, and what
        you can expect from our service. Please review them carefully before connecting miners.
      </p>
        
      <h3>1. Acceptance of Terms</h3>
      <p class="mb-1">
        By connecting any miner or account to Hash2Cash, you agree to these Terms & Conditions, our
        Privacy Policy, and any policies referenced within. If you do not agree, please disconnect
        your miners and discontinue use immediately.
      </p>

      <h3>2. Pool Participation</h3>
      <ul class="mb-1 txt">
        <li>Hash2Cash currently supports merged Scrypt mining for FLC, DOGE, PEP, and BELLS.</li>
        <li>
          You are responsible for configuring miners correctly, inaccurate settings may reduce your
          payouts.
        </li>
        <li>
          We reserve the right to pause or remove miners that impact network health or violate
          policies.
        </li>
      </ul>


      <h3>3. Payouts & Sharenotes</h3>
      <p class="mb-1">
        Rewards are calculated using PPLNS with Sharenotes as the verifiable proof of contribution.
        Each valid share generates a Sharenote which is used to determine your position in the reward
        window. Minimum payout thresholds and timing are published in the dashboard and may change
        based on network conditions.
      </p>


      <h3>4. Fair Use & Security</h3>
      <p class="mb-1">
        We implement monitoring to protect the pool from abuse. Attempts to spoof shares, exploit the
        system, or attack infrastructure may result in immediate suspension. Report vulnerabilities
        to our support team for rapid handling.
      </p>


      <h3>5. Updates</h3>
      <p>
        Policies evolve as the network grows. We will announce important updates via dashboard
        banners, email, or community channels. Continued use of the pool after an update indicates
        acceptance of the new terms.
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
