<script>
  import Button from "$lib/components/Button.svelte";
  import { onMount } from 'svelte';

  onMount(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });

  const gallery = [
		{src: '/img/gallery/dinning.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 1},
    {src: '/img/gallery/couple.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 2},
    {src: '/img/gallery/weddings.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 3},
    {src: '/img/gallery/notes.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 4},
    {src: '/img/gallery/outdoor.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 5},
    {src: '/img/gallery/wedding.jpg', alt: 'captured moments', figCaption: 'Our Event', id: 6},
    {src: '/img/gallery/room.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 4},
    {src: '/img/gallery/dinnings.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 5},
    {src: '/img/gallery/social.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 6},
    {src: '/img/gallery/bar.jpeg', alt: 'captured moments', figCaption: 'Our Event', id: 4},
	];

</script>

<section class="section-gallery">
  <div class="gallery-container">
      <div class="gallery-text-box">
          <h1 class="heading-primary">Gallery</h1>
          <p class="gallery-description">Pictures tell stories and every moment is a masterpiece. From striking event landscape to beautiful portraits, our collection is a celebration of event and tells its story.</p>          
      </div>

      <div class="gallery-img-box">
        <img src="/img/gallery/weddings.jpeg" class="gallery-img" alt="gallery image"/>
      </div>
  </div>


  <div class="moments-gallery container">
    <div class="moments-gallery-text-box">
      <h3 class="heading-tertiary"></h3>
      <p class="moments-gallery-description">Our mission is to inspire our clients to embrace the joy of celebrating their joyful moments, whether it&#39;s a minor triumph or a major life event. Let us be part in honoring the journey of your life, one celebration at a time!</p>
    </div> 
    
    <div class="moments-gallery-box">
      {#each gallery as picture}
      <figure class="moments-gallery-item">
        <img src={picture.src} class="moments-gallery-image" alt={picture.alt}/>
        <!-- <figcaption>{moment.figCaption}</figcaption> -->
      </figure>
      {/each}      
    </div>

    <!-- <div class="gallery-btn">
      <a href="#">
        <Button type="primary" bigger={true} >Veiw Our Gallery</Button>
      </a>
    </div> -->

  </div>
</section>

<style>
  .section-gallery  {
    margin-bottom: 9.6rem;
  }

  .gallery-container {
    margin: 0 auto;
    position: relative;
  }
  
  .gallery-text-box {    
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
  
  .gallery-description {
    font-size: 2rem;
    line-height: 1.6;
    margin-bottom: 4.8rem ;
  }

  .gallery-img {
    width: 100%;
    max-height: 60vh;
    object-fit: cover;        
  }

  .moments-gallery-text-box {
    padding: 4.8rem 0;
  }

  .heading-tertiary {
    text-align: center;
  }
  
  .moments-gallery-description {
    font-size: 2rem;
    line-height: 1.8;
  }

  .moments-gallery-box {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 4.8rem;

  }

  .moments-gallery-item {
    overflow: hidden;
  }

  .moments-gallery-image {
    display: block;
    width: 100%;
    transition: all 0.4s;
  }

  .moments-gallery-image:hover {
    transform: scale(1.1);
  }

  .gallery-btn {
    text-align: center;
  }

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .gallery-text-box {    
    padding-top: 3.2rem;
    padding-bottom: 1.6rem;
  }

  .gallery-description {
    display: none;
  }

  .moments-gallery-box {
    grid-template-columns: repeat(2, 1fr);
  }

 
}

  </style>