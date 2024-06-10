<script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer>
  import '../global.css';
  import Footer from '../lib/components/Footer.svelte';
  import Header from '../lib/components/Header.svelte';
</script>


<div>
  <Header />
  <slot />
  <!-- Add whatsapp chat widget -->
  <div class="elfsight-app-58068322-163e-4765-bbf7-a46768681847" data-elfsight-app-lazy></div>
  <Footer />
</div>