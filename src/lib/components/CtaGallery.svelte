<script>
  import Button from './Button.svelte';
  import { goto } from '$app/navigation';
</script>

<section class="section-cta-gallery">
  <div class="cta-gallery-backgroundimg-holder" role="img" aria-label="glass with juice and herbs">
    <div class="cta-gallery-box">
      <div class="cta-gallery-text-box">
        <h2 class="cta-gallery-caption">Our Beautiful Gallery</h2>
        <div class="cta-gallery-button">
          
          <Button bigger={true} on:click={() => goto('/gallery') } >View Our Gallery</Button>
    
        </div>
      </div>
    </div>
  </div>
</section>

<style>  
.section-cta-gallery {
  margin-bottom: 8rem;
}

.cta-gallery-backgroundimg-holder {
  background-image: linear-gradient(
  to right bottom,
  rgb(61, 87, 108, 0.6), 
  rgb(12, 44, 70, 0.6)
  ),
  url("/img/wedding.jpg");
  background-size: cover;
  background-position: center;
  height: 35rem;
  position: relative;
}  

.cta-gallery-text-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  }

.cta-gallery-caption {
  color: #fff;
  font-size: 4.2rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.5px;
  }

/**************************************************/
/* MOBILE NAVIGATION BELOW 752px (Smaller Tablets)*/
/**************************************************/
@media (max-width: 47em) {

  .cta-gallery-backgroundimg-holder {
    height: 30rem;
  }
  
  .cta-gallery-caption {
  font-size: 3.2rem;
  font-weight: 600;
  }
}

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .cta-gallery-caption {
  font-size: 2.4rem;
  font-weight: 600;
  }

}

</style>