<script>
  import { onMount } from 'svelte';

  onMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

</script>

<section class="section-about">
  <div class="about-container">
      <div class="about-text-box">
          <h1 class="heading-primary">About Us</h1>
          <p class="about-description">Our capabilities of event planning and cleaning service lie beyond the spectrum of extraordinary. We would like to believe that what makes us so great is our originality and our determination to ensure that not only are we pleased with our work but also you as our client.</p>          
      </div>

      <div class="about-img-box">
        <img src="/img/gallery/ellavaldezmeta.jpeg" class="about-img" alt="about image"/>
      </div>
  </div>

  <div class="ceo-container">
    <!-- <div class="about-ceo-container container"> -->
      <!-- <div class="ceo-img-box">
        <img src="/img/female image.jpg" class="ceo-image" alt="about event"/>
      </div> -->

      <div class="ceo-text-box container">
        <h3 class="heading-tertiary">A Zeal for Professionalism</h3>
        <p class="ceo-description">Ella Valdez Limited is a multi-functional service company    incorporated in 2020. The company’s passion and commitment, combined with the experience of our dedicated team, can create a memorable experience for both individuals and companies.
          We are a team that is passionate in creating monumental moment of your events, and we work tirelessly to make sure of it. We take pride in delivering either large or small event services to our clients, and we believe that each individual service come to its own uniqueness and we endeavor to provide unparalleled services with an outstanding customer service. We also believe that a successful event is directly linked to the client and guest experience as well, therefore, we work collaboratively to ensure the service
          we provide is cohesive and even the smallest of detail can have a huge impact to the service rendered.</p>
      </div>      
    <!-- </div> -->
  </div>

  <div class="mission-container">
    <div class="container grid grid--3-cols">
      <div class="vision-text-box">
        <h3 class="heading-tertiary">Our Vision</h3>
        <p class="vision-description">To be a market leading service provider company in the events management sector. </p>
      </div> 

      <div class="mission-text-box">
        <h3 class="heading-tertiary">Our Mission</h3>
        <p class="mission-description">Provide a quality valued services to the customers.
          Building a unique brand with integrity, elegance and professionalism.
          Making event as memorable and monumental.</p>
      </div>  
      
      <div class="mission-text-box">
        <h3 class="heading-tertiary">Our Identity</h3>
        <p class="mission-description">To deliver our services and to make it happen all at the customer’s request. Team talk and teamwork with much delight.</p>
      </div> 
      
    </div>

  </div>
</section>

<style>
  .section-about  {
    margin-bottom: 9.6rem;
  }

  .about-container {
    margin: 0 auto 8rem auto;
    position: relative;
  }
  
  .about-text-box {    
    max-width: 70%;
    max-height: 70%;
    margin: 0 auto;
    /* background: rgba(19, 174, 236, 0.8); */
    background: rgba(207, 213, 217, 0.8);
    color: #0C2D48;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    padding: 4.8rem 1.4rem 0 2.4rem;    
  }
  
  .about-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem ;
  }

  .about-img {
    width: 100%;
    max-height: 60vh;
    object-fit: cover;
  }

  .ceo-container {
    margin-bottom: 8rem;
  }

  .about-ceo-container {
    display: grid;
    grid-template-columns: 1.5fr 3fr;
    align-items: center;
    gap: 6.4rem;
  }
  
  .ceo-image {
    width: 100%;
  }

  .heading-tertiary {
    text-align: center;
  }

  .ceo-description, 
  .mission-description, 
  .vision-description {
    font-size: 2rem;
    line-height: 1.8;
  }

/**************************************************/
/* MOBILE NAVIGATION BELOW 752px (Smaller Tablets)*/
/**************************************************/
@media (max-width: 47em) {
  .about-ceo-container {    
    grid-template-columns: 1fr;
    gap: 3.2rem;
    justify-content: center;
  }

  .ceo-img-box {
    justify-self: center;
  }

  .ceo-image {
    height: 40rem;
  }
}
  
/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {

  .about-text-box {    
    padding-top: 3.2rem;
    padding-bottom: 1.2rem;
  }
  .about-description {
    display: none;
    

  }
}

  
</style>