<script>
	import Hero from "$lib/components/Hero.svelte";
  import WhoWeAre from "$lib/components/WhoWeAre.svelte";
  import Testimonial from "$lib/components/Testimonial.svelte";
  import CtaGallery from "$lib/components/CtaGallery.svelte";
  import Cta from "$lib/components/Cta.svelte";
  import { onMount } from 'svelte';

  onMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
</script>

<div>
  <Hero on:click />
  <WhoWeAre />
  <CtaGallery />
  <Testimonial />
  <Cta />

</div>

<style>

</style>
