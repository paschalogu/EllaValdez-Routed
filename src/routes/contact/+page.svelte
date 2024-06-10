<script>
  import Form from "$lib/components/Form.svelte";
  import { onMount } from 'svelte';
  
  onMount(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    });
  </script>
  
  <section class="section-contact">
    <div class="contact-container">
        <div class="contact-text-box">
            <h1 class="heading-primary">Contact Us</h1>
            <p class="contact-description">Fill out the form below. A member of our dedicated team will reach out to you promptly.</p>          
        </div>
  
        <div class="contact-img-box">
          <img src="/img/image7.jpg" class="contact-img" alt="gallery image"/>
        </div>
    </div>
    
    <Form />
  </section>
  
  <style>
    .section-contact  {
      margin-bottom: 9.6rem;
    }
  
    .contact-container {
      margin: 0 auto 8rem;
      position: relative;
    }
    
    .contact-text-box {    
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
    
    .contact-description {
      font-size: 2rem;
      line-height: 1.6;
      margin-bottom: 4.8rem ;
    }
  
    .contact-img {
      width: 100%;
      max-height: 60vh;
      object-fit: cover;
    }
  
   /**************************************************/
  /* MOBILE NAVIGATION BELOW 544px (Phones)*/
  /**************************************************/
  @media (max-width: 34em) {
    .contact-text-box {    
      padding-top: 3.2rem;
      padding-bottom: 1.6rem;
    }
  
    .contact-description {
      display: none;
    }
  }
    
    </style>