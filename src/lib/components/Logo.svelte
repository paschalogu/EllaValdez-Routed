<script>
  import { goto } from '$app/navigation';
  // import { createEventDispatcher } from "svelte";
  // const dispatch = createEventDispatcher();
  
  const handleLogoClick = (e) => {
    goto('/');
    // const logo = e.target;
    // dispatch('goToHome', logo);
  }
  </script>
  
  <div>
    <img class="logo" src="/img/clientlogos/client6.png" alt="Company logo" on:click={handleLogoClick} />
  </div>
  
  <style>
    .logo {
      height: 6.4rem;
      cursor: pointer;
    }
  
  </style>