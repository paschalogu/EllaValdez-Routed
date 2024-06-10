<script>
  import Button from "./Button.svelte";
  import { goto } from "$app/navigation";
</script>

<section class="section-cta">
  <div class="cta-backgroundimg-holder" role="img" aria-label="glass with juice and herbs">
    <div class="cta-box">
      <div class="cta-text-box">
        <h2 class="cta-caption">Create your Wonderful Moment Now!</h2>
        <div class="cta-button">
          <Button type="primary" bigger={true} on:ctaToContact={() => goto('/contact')}>Send Request</Button>
        </div>
      </div>
    </div>
  </div>
</section>

<style>  
  .cta-backgroundimg-holder {
    background-image: linear-gradient(
    to right bottom,
    rgb(61, 87, 108, 0.6), 
    rgb(12, 44, 70, 0.6)
    ),
    url("/img/image6.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    height: 35rem;
  }

  .cta-box {
    min-width: 70rem;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
  }

  .cta-text-box {
    display: grid;
    grid-template-columns: 4fr 1.5fr;
    align-items: center;
    gap: 9.6rem;

  }

  .cta-caption {
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
  .cta-backgroundimg-holder {
    height: 30rem;
  }
  
  .cta-box {
    min-width: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    }

  .cta-text-box {
    grid-template-columns: 1fr;
    gap: 3.2rem;
    justify-content: center;
  }  

  .cta-button {
    justify-self: center;
  }

  .cta-caption {
  font-size: 3.2rem;
  font-weight: 600;
  justify-self: center;
  }
}

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .cta-box {
    max-width: 50rem;
  }

  .cta-caption {
  font-size: 2.4rem;
  font-weight: 600;
  }
}
</style>