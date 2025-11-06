<script>
  let isMenuOpen = false;

  const links = [
    { href: '/#about', label: 'About' },
    { href: '/#dashboard', label: 'Hashboard' },
    { href: '/#faq', label: 'FAQ' }
  ];

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleNavClick = () => {
    isMenuOpen = false;
  };
</script>

<header class="site-header">
  <div class="container header__inner">
    <a class="brand" href="/" on:click={handleNavClick}>
      <span class="brand__name">Hash2Cash</span>
    </a>
    <button
      class="nav-toggle"
      type="button"
      aria-expanded={isMenuOpen}
      aria-controls="primary-navigation"
      on:click={toggleMenu}
    >
      <span class="sr-only">Toggle navigation</span>
      <span class:open={isMenuOpen} class="nav-toggle__bar" aria-hidden="true"></span>
    </button>

    <nav
      id="primary-navigation"
      class:open={isMenuOpen}
      aria-label="Primary navigation"
    >
      <ul>
        {#each links as link}
          <li>
            <a href={link.href} on:click={handleNavClick}>{link.label}</a>
          </li>
        {/each}
      </ul>
      <a class="btn secondary header__cta" href="/#generate" on:click={handleNavClick}>
        Start Mining
      </a>
    </nav>
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(246, 248, 253, 0.9);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(189, 206, 255, 0.5);
  }

  .header__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    gap: 1rem;
    position: relative;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #0a1f33;
  }

  .brand__mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 34px;
    background: linear-gradient(180deg, #5288ff, #73d0ff);
    color: #ffffff;
    border-radius: 8px;
    font-weight: 700;
    font-size: 1rem;
  }

  .brand__name{
    font-size:20px;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2.2rem;
  }

  nav ul {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    list-style: none;
  }

  nav a {
    font-weight: 500;
    color: rgba(10, 31, 51, 0.72);
  }

  nav a:hover {
    color: #1c4ed8;
  }

  .header__cta {
    padding-inline: 1.4rem;
  }

  .nav-toggle {
    display: none;
    position: relative;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(82, 136, 255, 0.12);
    border: 1px solid rgba(188, 206, 255, 0.6);
  }

  .nav-toggle__bar {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 2px;
    background: #1c4ed8;
    transform: translate(-50%, -50%);
    transition: transform 0.18s ease, background 0.18s ease;
  }

  .nav-toggle__bar::before,
  .nav-toggle__bar::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background: #1c4ed8;
    left: 0;
    transition: transform 0.18s ease, opacity 0.18s ease;
  }

  .nav-toggle__bar::before {
    top: -6px;
  }

  .nav-toggle__bar::after {
    top: 6px;
  }

  .nav-toggle__bar.open {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .nav-toggle__bar.open::before {
    transform: rotate(-90deg) translateX(-6px);
  }

  .nav-toggle__bar.open::after {
    transform: rotate(-90deg) translateX(6px);
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (max-width: 880px) {
    .nav-toggle {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    nav {
      position: absolute;
      top: calc(100% + 0.75rem);
      right: 0;
      left: 0;
      display: grid;
      gap: 1.4rem;
      padding: 1.5rem 1.4rem 2rem;
      background: rgba(246, 248, 253, 0.98);
      border-bottom: 1px solid rgba(189, 206, 255, 0.5);
      border-radius: 16px;
      box-shadow: 0 24px 44px -36px rgba(12, 46, 94, 0.55);
      translate: 0 -12px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease;
    }

    nav.open {
      opacity: 1;
      pointer-events: all;
      translate: 0 0;
    }

    nav ul {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .header__cta {
      justify-content: flex-start;
      width: fit-content;
    }
  }
</style>
