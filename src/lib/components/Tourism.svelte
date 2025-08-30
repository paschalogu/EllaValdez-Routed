<script>
  import Button from "./Button.svelte";
  import { goto } from '$app/navigation';

  const tourismImages = [
    { id: 1, src: '/img/gallery/brazil.jpeg', location: 'Santa Teresa, Brazil', alt: 'Santa Teresa, Rio De Janeiro, Brazil' },
    { id: 2, src: '/img/gallery/kenya.jpeg', location: 'Kenya, Africa', alt: 'Kenya, Africa' },
    { id: 3, src: '/img/gallery/panama.jpeg', location: 'Panama, Central America', alt: 'Panama, Central America' },
    { id: 4, src: '/img/gallery/sydney.jpeg', location: 'Sydney, Australia', alt: 'Sydney, Australia' },
    { id: 5, src: '/img/gallery/hongkong.jpg', location: 'Hong Kong, Asia', alt: 'Hong Kong, Asia' },
    { id: 6, src: '/img/gallery/mendoza.jpg', location: 'Mendoza, South America', alt: 'Mendoza, South America' }
  ];
</script>

<div class="tourism-container">
  <div class="tourism-content container grid grid--2-cols">
    <div class="tourism-images">
      {#each tourismImages as img}
        <figure class="tourism-image-item">
          <img src={img.src} alt={img.alt} class="tourism-image" />
          <figcaption class="tourism-overlay">{img.location}</figcaption>
        </figure>
      {/each}
    </div>

    <div class="tourism-text-box">
      <h3 class="tourism-heading heading-tertiary">Tourism</h3>
      <p class="tourism-description">
        Discover curated travel experiences tailored to your interests. From weekend getaways and destination events to group tours and bespoke itineraries, we handle planning, bookings, logistics, and on-ground coordination so you can explore with ease.
      </p>
      <ul class="tourism-features">
        <li class="tourism-feature"><ion-icon class="tourism-icon" name="chevron-forward-outline"></ion-icon><span>Destination research and itinerary design</span></li>
        <li class="tourism-feature"><ion-icon class="tourism-icon" name="chevron-forward-outline"></ion-icon><span>Hotel, transport, and activity bookings</span></li>
        <li class="tourism-feature"><ion-icon class="tourism-icon" name="chevron-forward-outline"></ion-icon><span>Group tours and destination event support</span></li>
        <li class="tourism-feature"><ion-icon class="tourism-icon" name="chevron-forward-outline"></ion-icon><span>On-site coordination and concierge services</span></li>
      </ul>
      <div class="tourism-btn">
        <Button type="primary" inverse={true} on:click={() => goto('/contact')}>Plan Your Next Trip</Button>
      </div>
    </div>
  </div>
</div>

<style>
  .tourism-container {
    margin: 4.8rem auto 8rem auto;
  }

  .tourism-content {
    align-items: center;
  }

  .tourism-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    padding: 1.6rem;
  }

  .tourism-image-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }

  .tourism-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .tourism-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.6rem 0.8rem;
    font-size: 1.2rem;
    color: #fff;
    background: linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0));
  }

  .tourism-text-box {
    margin: 4.8rem 4.8rem 8rem auto;
  }

  .tourism-heading {
    text-align: center;
  }

  .tourism-description {
    font-size: 2rem;
    line-height: 1.8;
    margin-bottom: 2.4rem;
  }

  .tourism-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin: 0 0 2.4rem 0;
    padding: 0;
  }

  .tourism-feature {
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }

  .tourism-icon {
    height: 2.2rem;
    width: 2.2rem;
    color: #0C2D48;
  }

  .tourism-btn {
    text-align: center;
  }

  /**************************************************/
  /* MOBILE NAVIGATION BELOW 752px (Smaller Tablets)*/
  /**************************************************/
  @media (max-width: 47em) {
    .tourism-content {
      gap: 3.2rem;
    }

    .tourism-images {
      padding: 3.2rem 3.2rem 0 3.2rem;
    }

    .tourism-text-box {
      margin: 0 4.8rem 9.6rem 4.8rem;
    }
  }

  /**************************************************/
  /* MOBILE NAVIGATION BELOW 544px (Phones)*/
  /**************************************************/
  @media (max-width: 34em) {
    .tourism-images {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
