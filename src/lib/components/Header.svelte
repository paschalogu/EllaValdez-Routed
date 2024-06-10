<script>
  import Logo from "./Logo.svelte";
  import DesktopNavigation from "./DesktopNavigation.svelte";
  import MobileNavView from "./MobileNavView.svelte";
  import { showMobileNav, toggleMobileNav } from "$lib/mobileNavStore";

  $: showMobileNavValue = $showMobileNav;

  let showMobileNavValue = false;

  const toggleMobilNavView = () => {
	// showMobileNav = !showMobileNav;
  toggleMobileNav();
}
  
</script>


<header class="header">
  <Logo />
  <div class="header-nav">
    <DesktopNavigation />
    <button class="btn-mobile-nav" on:click={toggleMobilNavView}>
      <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
    </button>
  </div>
  {#if showMobileNavValue}
    <MobileNavView {showMobileNavValue} />
  {/if}

</header>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #0C2D48;
    /* It will be sticky */
    height: 8rem;
    padding: 0 4.8rem;
  }

  .header-nav {
    display: flex;
    align-items: center;
    gap: 4.8rem;
  }

  .btn-mobile-nav{
    border: none;
    background-color: #0C2D48;
    cursor: pointer;

    display: none;
  }

  .icon-mobile-nav{
    height: 3.2rem;
    width: 3.2rem;
    color: #fff;
}

/* .sticky {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 8rem;
  padding-top: 0;
  padding-bottom: 0;
  background-color: rgba(12, 44, 70, 0.7);
  z-index: 10;  
  box-shadow: 0 1.2rem 3.2rem rgba(0, 0, 0, 0.03);
} */

/*******************************************/
/* MOBILE NAVIGATION BELOW 944px (Tablets)*/
/******************************************/
@media (max-width: 59em) {
  .btn-mobile-nav {
    display: block;
  }
}

/***********************************/
/* Below 1200px (Landscape tablets)*/
/***********************************/
@media (max-width: 75em) {  
  .header {
    padding: 0 2.4rem;
  }  

  .header-nav {
    gap: 3.2rem;
  }

}


</style>