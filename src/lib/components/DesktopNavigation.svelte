<script>
  import Tabs from './Tabs.svelte';
  import Button from './Button.svelte';
  import { goto } from '$app/navigation';
  import { afterNavigate } from '$app/navigation';


  //Navigation tabs
  let items = ['Home', 'About', 'Our Services', 'Gallery', 'Contact'];
  let activeItem = 'Home';

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
  
  const tabChange = (e) => {
    activeItem = e.detail;  
    // if (!items.includes(e.detail)) {activeItem = ''}
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
  }
  
  const clearActiveItem = () => {
    activeItem = '';
  }

  const handleBookNowClick = () => {
    clearActiveItem();
    goto('/contact');
  }
  </script>
  
  <nav class="main-nav">
      <Tabs {items} {activeItem} on:tabChange={tabChange} /> 
      <div class="main-nav-btn">
        <Button bigger={true} on:goTo on:click={handleBookNowClick}>Book Now</Button>
      </div>    
  </nav>
  
  <style>
    .main-nav {
      display: flex;
      align-items: center;
      gap: 3.2rem;
    }
    
  
  /*******************************************/
  /* MOBILE NAVIGATION BELOW 944px (Tablets)*/
  /******************************************/
  @media (max-width: 59em) {
    .main-nav {
      display: none;
    }
  }  
  
  </style>