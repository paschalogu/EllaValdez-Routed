<script>
  import Logo from './Logo.svelte';
  import Tabs from './Tabs.svelte';
  import { goto } from '$app/navigation';
  import { afterNavigate } from '$app/navigation';


  let items = ['Home', 'About', 'Our Services', 'Gallery', 'Contact', 'Terms'];
  let footer = true;
  let activeItem = '';  

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
    activeItem = routeToItem[path] || 'Home';
  });

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
        case 'Terms':
        goto('/terms');
        break;
      default:
        goto('/');
    }
  }

</script>

<footer class="footer">
  <div class="container grid grid--3-cols">

    <div class="logo-col">  
      <div class="footer-logo">
        <Logo on:goToHome />
      </div>
      <ul class="social-links">
        <!-- <li><a class="social-link" href="#" target="_blank"><ion-icon class="social-icon" name="logo-instagram"></ion-icon></a></li> -->
        <li><ion-icon class="social-link social-icon" name="logo-instagram"></ion-icon></li>
        <li><ion-icon class="social-link social-icon" name="logo-facebook"></ion-icon></li>
        <li><ion-icon class="social-link social-icon" name="logo-twitter"></ion-icon></li>
      </ul>
    </div>

    <div class="address-col">
      <p class="footer-heading">Contact us</p>
      <address class="contacts">
        <!-- <p class="address">63 Lorem St., 2nd Floor, Ipso Lorem.</p> -->
        <p>
          <a class="social-link" href="tel:07019977535">
            <ion-icon name="call-outline"></ion-icon> +234 701 997 7535
          </a><br/>
          <a class="social-link" href="tel:08141612476">
            <ion-icon name="logo-whatsapp"></ion-icon> +234 814 161 2476
          </a><br/>
          <a class="social-link" href="mailto:info@ellavaldezltd.com">
            <ion-icon name="mail-outline"></ion-icon> info@ellavaldezltd.com
          </a>
        </p>
      </address> 
    </div>

    <nav class="nav-col">
      <p class="footer-heading">Company</p>
      <Tabs {items} {activeItem} {footer} on:tabChange={tabChange}/>
    </nav>
  </div>

  <div class="copyright-section">
    <p class="copyright">
      Copyright &copy; Ella Valdez Ltd. All Rights Reserved. <br/>
      Built with ❤️ by <a href="https://paschalogu.com" target="_blank">Paschal Ogu</a>.
    </p>
  </div>
</footer>

<style>
  .footer {
    position: relative;
    background-color: #e7eaed;
    padding: 6.4rem 0;
    border-top: 1px solid #eee;
  } 

  /* .grid--footer {
    grid-template-columns: 2fr 1fr 1fr;
  } */

  .logo-col {
    display: flex;
    flex-direction: column;
  }

  .footer-logo {
    margin-bottom: 2.4rem;
  }

  .social-links {
    list-style: none;
    display: flex;
    gap: 2.4rem;
  }

  .social-link:link, 
  .social-link:visited {
    text-decoration: none;
    font-size: 1.6rem;
    color: #767676;  
    transition: all 0.3s;
  }

  .social-link:hover, 
  .social-link:active {
    color: darkblue;
  }

  .social-icon {
    width:2.4rem;
    height: 2.4rem;
  }

  .copyright {
    font-size: 1.4rem;
    line-height: 1.6;
    color: #767676;
    margin-top: auto;
  }

  .footer-heading {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 3.2rem;
  }

  .contacts {
    font-style: normal;
    font-size: 1.6rem;
    line-height: 1.6;

  }

  /* .address {
    margin-bottom: 1.8rem;
  } */

/*******************************************/
/* MOBILE NAVIGATION BELOW 944px (Tablets)*/
/******************************************/
@media (max-width: 59em) {
  .grid--3-cols {
    grid-template-columns: repeat(3, 1fr);
  }
}

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .grid--3-cols {
    grid-template-columns: 1fr;   
  }

  .grid {
    row-gap: 4.8rem;
  }

  .footer-heading {   
    margin-bottom: 1.8rem;
  }
}
/* Style the copyright section */
.copyright-section {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center; /* Center the text horizontally */
  background-color: #f8f8f8; /* Optional: Add background color */
  /* z-index: 9999; Ensure it's above other content */
  padding: 0, 0; /* Add padding for better visibility */
}

/* Style the copyright text */
.copyright {
  font-size: 14px;
  color: #555;
  margin: 0; /* Remove default margins */
}


</style>