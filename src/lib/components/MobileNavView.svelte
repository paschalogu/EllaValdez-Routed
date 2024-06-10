<script>
  import Tabs from "./Tabs.svelte";
  import Button from "./Button.svelte";
  import { goto } from '$app/navigation';
  import { afterNavigate } from '$app/navigation';
  import { showMobileNav, toggleMobileNav } from "$lib/mobileNavStore";

  $: showMobileNavValue = $showMobileNav;


  // export let showMobileNav = false;
    
  let items = ['Home', 'About', 'Our Services', 'Gallery', 'Contact'];
  let activeItem = 'Home';
  let column = true;

  // Map routes to tab items
  const routeToItem = {
    '/': 'Home',
    '/about': 'About',
    '/services': 'Our Services',
    '/gallery': 'Gallery',
    '/contact': 'Contact'
  };

  // Update activeItem based on current route after navigation
  afterNavigate(() => {
    const path = window.location.pathname;
    activeItem = routeToItem[path] || '';
  });

const toggleMobilNavView = () => {
	// showMobileNav = !showMobileNav;
  toggleMobileNav();
}  

const tabChange = (e) => {
	activeItem = e.detail;
  switch (activeItem) {
      case 'Home':
        goto('/');
        break;
      case 'About':
        goto('/about');
        break;
      case 'Our Services':
        goto('/services');
        break;
      case 'Gallery':
        goto('/gallery');
        break;
      case 'Contact':
        goto('/contact');
        break;
      default:
        goto('/');
    }  
    toggleMobilNavView();
}

const clearActiveItem = () => {
  activeItem = '';
}

const handleBookNowClick = () => {
    clearActiveItem();
    goto('/contact');
    toggleMobilNavView();
  }

</script>

{#if showMobileNavValue}
  <nav class="mobile-nav">  
    <div class="mobile-btn">
      <button class="btn-mobile-nav" on:click={toggleMobilNavView}>
        <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
      </button>   
    </div>   

    <div class="mobile-nav-links">
      <Tabs {items} {activeItem} {column} on:tabChange={tabChange} />
      <div class="main-nav-btn">
        <Button bigger={true} on:goTo on:click={handleBookNowClick}>Book Now</Button>
      </div>
    </div>
  </nav>
{/if}


<style>
  .mobile-nav {
    background-color: rgba(12, 44, 70, 0.7);
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    /* To center the mobile-nav links */
    display: flex;
    flex-direction: column;
    justify-content: center;
    
  }

  .mobile-btn {
    /* display: flex;
    justify-content: right; */
    position: absolute;
    top: 0;
    right: 0;
  }

  .btn-mobile-nav {
    margin: 2.4rem;
    border: none;
    background-color: rgba(12, 44, 70, 0.7);
    cursor: pointer;
    
  }

  .icon-mobile-nav {
    height: 3.2rem;
    width: 3.2rem;
    color: #fff;
}

  .mobile-nav-links {   
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4.8rem;
  }
  
</style>