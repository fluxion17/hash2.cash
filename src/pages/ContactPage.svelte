<script>
  import HeaderNav from '../lib/components/HeaderNav.svelte';
  import FooterSection from '../lib/components/FooterSection.svelte';

  let name = '';
  let email = '';
  let topic = 'support';
  let message = '';
  let submitted = false;

  const submitForm = (event) => {
    event.preventDefault();
    submitted = true;
  };
</script>

<HeaderNav />

<main class="page">
  <section>
    <div class="container pb-2">
      <h1>We’d love to hear from you.</h1>
      <p>
        Reach the Hash2Cash team for support, partnership opportunities, or feedback about the
        Sharenote protocol. Use the form below or join us in Discord for faster responses.
      </p>
    </div>
          
    <div class="container grid">
      <div class="card contact-card sp">
        <form class="contact-form" on:submit={submitForm}>
          <label>
            Name
            <input type="text" bind:value={name} placeholder="Jane Miner" required />
          </label>
          <label>
            Email
            <input type="email" bind:value={email} placeholder="you@email.com" required />
          </label>
          <label>
            Topic
            <div class="select-wrap">
              <select bind:value={topic}>
                <option value="support">Support</option>
                <option value="partnership">Partnership</option>
                <option value="media">Media</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
          </label>
          <label>
            Message
            <textarea
              bind:value={message}
              rows="5"
              placeholder="Let us know how we can help."
              required
            />
          </label>
          <button class="btn primary" type="submit">Send Message</button>
          {#if submitted}
            <p class="form-confirm">Thanks! We’ll reply within one business day.</p>
          {/if}
        </form>
      </div>

      <div class="card contact-info">
        <h2>Other ways to reach us</h2>
        <ul>
          <li>
            <strong>Discord:</strong>
            <a href="https://discord.gg/hash2cash" target="_blank" rel="noreferrer">hash2.cash miners</a>
          </li>
          <li>
            <strong>Telegram:</strong>
            <a href="https://t.me/hash2cash" target="_blank" rel="noreferrer">@hash2cash</a>
          </li>
          <li>
            <strong>Docs:</strong>
            <a href="https://docs.hash2.cash" target="_blank" rel="noreferrer">docs.hash2.cash</a>
          </li>
        </ul>
      </div>
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

  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .contact-form {
    display: grid;
    gap: 1rem;
  }

  label {
    display: grid;
    gap: 0.4rem;
    font-weight: 600;
    color: rgba(10, 31, 51, 0.8);
  }

  input,
  select,
  textarea {
    font-size: 1rem;
    padding: 0.75rem 1.05rem;
    border-radius: 12px;
    border: 1px solid rgba(188, 206, 255, 0.8);
    background: rgba(255, 255, 255, 0.95);
    color: #0a1f33;
  }

  textarea {
    resize: vertical;
  }

  input:focus,
  select:focus,
  textarea:focus {
    outline: 0;
    outline-offset: 2px;
  }

  .form-confirm {
    color: rgba(10, 31, 51, 0.65);
    font-size: 0.95rem;
  }

  .contact-info ul {
    display: grid;
    gap: 0.8rem;
    margin-top: 1rem;
    padding-left: 1rem;
  }

  .contact-info a {
    color: #1c4ed8;
    font-weight: 600;
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
</style>