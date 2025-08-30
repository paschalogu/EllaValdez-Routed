<script>
  import Button from "./Button.svelte";


const monumentalMoments = [
		{src: '/img/gallery/corporate1.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 1},
    {src: '/img/gallery/corporate3.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 2},
    {src: '/img/gallery/corporate4.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 3},
    {src: '/img/gallery/corporate2.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 4},
    {src: '/img/gallery/corporate.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 5},
    {src: '/img/gallery/corporate5.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 6},    
	];
</script>

<div class="moments-container">
  <div class="monumental-moments-container grid grid--2-cols">
    <div class="moments-img-box">
      {#each monumentalMoments as moment}
      <figure class="moments-item">
        <img src={moment.src} class="moments-image" alt={moment.alt}/>
        <!-- <figcaption>{moment.figCaption}</figcaption> -->
      </figure>
      {/each}      
    </div>

    <div class="moments-text-box">
      <h3 class="moments-heading heading-tertiary">Corporate Gifts</h3>
      <p class="moments-description"> We provide a diverse collection of corporate gifts and souvenirs, each uniquely customized to complement your occasion, be it corporate, private, or social events.</p>
      <div class="moments-btn">
        <Button type="primary" inverse={true} on:click>Get In Touch</Button>
      </div>
    </div>      
  </div>
</div>


<style>
  /* .moments-container {} */

  .monumental-moments-container {
    align-items: center;
  }

  .moments-img-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem;
    padding: 1.6rem;
  }

  /*.moments-item {} */
    
  .moments-image {
    display: block;
    width: 100%;
  }

  .moments-text-box {
    margin: 4.8rem 4.8rem 8rem auto;
  }

  .moments-heading {
    text-align: center;
  }

  .moments-description {
    font-size: 2rem;
    line-height: 1.8;
    margin-bottom: 3.2rem;
  }

  .moments-btn {
    text-align: center;
  }

/**************************************************/
/* MOBILE NAVIGATION BELOW 752px (Smaller Tablets)*/
/**************************************************/
@media (max-width: 47em) {
  .monumental-moments-container {
    gap: 3.2rem;
  }

  .moments-img-box {
    padding: 3.2rem 3.2rem 0 3.2rem;
  }

  .moments-text-box {
    margin: 0 4.8rem 9.6rem 4.8rem;   
  }

}

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .moments-img-box {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>