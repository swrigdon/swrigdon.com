<script>
  import Intro from './sections/Intro.svelte';
  import Footer from './sections/Footer.svelte';
  import TopBar from './sections/TopBar.svelte';
  import Content from './sections/content/Content.svelte';

  console.log("Ah you're a cheeky one huh? There's nothing interesting here, I promise. You can move on :)");
</script>

<svelte:head>
  <title>Stephen Rigdon</title>
  <noscript>Sorry pal, you'll need JavaScript enabled around here. I promise I'm not going to track you or sell your data ;)</noscript>
</svelte:head>

<main>
  <TopBar/>
  <Intro/>
  <Content/>
  <Footer/>
</main>
