<script>
  import Tabs from "$lib/components//Tabs.svelte";
  import Cleaning from "$lib/components/Cleaning.svelte";
  import Events from "$lib/components/Events.svelte";
  import MonumentalMoments from "$lib/components/MonumentalMoments.svelte";
  import Tourism from "$lib/components/Tourism.svelte";
  import Cta from "../../lib/components/Cta.svelte";
  import { onMount } from 'svelte';
    
  onMount(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  
  /* let items = ['Events', 'Corporate Gifts', 'Cleaning Services', 'Tourism']; */ 
  let items = ['Events', 'Corporate Gifts', 'Tourism']; 
  let activeItem = 'Events';
  let services = true;
  
  const tabChange = (e) => {
    activeItem = e.detail;  
  }
  </script>
  
  <section class="section-services">
    <div class="services-container">
        <div class="services-text-box">
            <h1 class="heading-primary">Our Services</h1>
            <p class="services-description">Transform your dreams into unforgettable realities with our services. From corporate events, social gatherings to cleaning services, our dedicated team will craft your vision into an effortless and memorable event, partnering with top vendors to ensure that every detail exceeds your expectations.</p>          
        </div>
  
        <div class="services-img-box">
          <img src="/img/gallery/savvy.jpeg" class="services-img" alt="Savvy event services team"/>
        </div>
    </div>
    <div class="services-tabs">
      <Tabs {items} {activeItem} {services} on:tabChange={tabChange}/>
      
      {#if activeItem === 'Events'}
        <Events on:click />		
        {:else if activeItem === 'Corporate Gifts'}
        <MonumentalMoments on:click/>
        {:else if activeItem === 'Cleaning Services'}
        <Cleaning on:click />
        {:else if activeItem === 'Tourism'}
        <Tourism on:click />
      {/if}
  
    </div>

    <Cta />

  </section>
  
  <style>
    .services-container {
      margin: 0 auto;
      position: relative;
    }
    
    .services-text-box {    
      max-width: 70%;
      max-height: 70%;
      margin: 0 auto;
      /* background: rgb(179, 179, 220, 0.8); */
      background: rgba(207, 213, 217, 0.8);
      color:  #0C2D48;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      padding: 4.8rem 1.4rem 0 2.4rem;    
    }
    
    .services-description {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 4.8rem ;
    }
  
    .services-img {
      width: 100%;
      max-height: 60vh;
      object-fit: cover;
    }
  
    .services-tabs {
      margin: 0 auto;
      margin-top: 4.8rem;
    }
  
  /**************************************************/
  /* MOBILE NAVIGATION BELOW 544px (Phones)*/
  /**************************************************/
  @media (max-width: 34em) {
  
    .services-text-box {    
      padding-top: 3.2rem;
      padding-bottom: 2rem;
    }
    .heading-primary {
      font-size: 3.2rem;
      margin-bottom: 2rem;
    }
  
    .services-description {
      display: none;
    }
  }
    
      
  </style>