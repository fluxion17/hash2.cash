<script>
  const words = ["hello", "hola", "bonjour"];
  let currentWordIndex = 0;
  let displayedText = "";
  let isDeleting = false;
  let speed = 120; // typing speed (ms)

  function type() {
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
      displayedText = currentWord.substring(0, displayedText.length - 1);
    } else {
      displayedText = currentWord.substring(0, displayedText.length + 1);
    }

    if (!isDeleting && displayedText === currentWord) {
      // pause before deleting
      setTimeout(() => (isDeleting = true), 800);
    } else if (isDeleting && displayedText === "") {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  // start typing when component mounts
  onMount(type);
</script>

<span class="typing">{displayedText}</span>

<style>
  .typing {
    font-family: monospace;
    border-right: 2px solid;
    padding-right: 4px;
    animation: blink 0.7s infinite;
  }

  @keyframes blink {
    0% { border-color: transparent; }
    50% { border-color: black; }
  }
</style>
