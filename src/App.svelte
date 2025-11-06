<script>
  import HeaderNav from './lib/components/HeaderNav.svelte';
  import HeroSection from './lib/components/HeroSection.svelte';
  import AboutSection from './lib/components/AboutSection.svelte';
  import SharenotesSection from './lib/components/SharenotesSection.svelte';
  import DashboardSection from './lib/components/DashboardSection.svelte';
  import GenerateSettingsSection from './lib/components/GenerateSettingsSection.svelte';
  import GettingStartedSection from './lib/components/GettingStartedSection.svelte';
  import FAQSection from './lib/components/FAQSection.svelte';
  import CommunitySection from './lib/components/CommunitySection.svelte';
  import FooterSection from './lib/components/FooterSection.svelte';
</script>

<HeaderNav />

<main class="smt" id="top">
  <HeroSection />
  <AboutSection />
  <DashboardSection />
  <GenerateSettingsSection />
  <FAQSection />
  <CommunitySection />
  <FooterSection />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>