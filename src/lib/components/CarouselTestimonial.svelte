<script> 
  export let testimonials;

  let curSlide = 0;
  const maxSlide = testimonials.length;

  const goToSlide = function (slide) {
    testimonials.forEach(
      (testimonial, i) => {
        testimonial[i].style.transform = `translateX(${100 * (i - slide)}%)`
        console.log(testimonial[i].style.transform = `translateX(${100 * (i - slide)}%)`)      
    })    
  }
  
  const prevSlide = () => {
    if (curSlide === 0){
      curSlide = maxSlide - 1;
    } else {
    curSlide--;
    }
    goToSlide(curSlide);    
  };

  const nextSlide = () => {
    if (curSlide === maxSlide -1){
      curSlide = 0;
    } else {
      curSlide++;
    }    
    goToSlide(curSlide);    
  };

  const handleKeyDown = function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  }  

  const activeDot = (e) => {
    document.querySelectorAll('.dot').forEach(button => {
      button.classList.remove('dot--fill');
    });    
    e.target.classList.add('dot--fill');    
  } 
</script>

<svelte:document on:keydown={handleKeyDown} /> 

  <div class="slider carousel-testimonials">
    {#each testimonials as testimonial, i (testimonial.id)}
      <div class="testimonial-box" id={testimonial.id} bind:this={testimonial[i]} style="transform:translateX(calc(100% * {i} + 2.4rem * {i}))">
        <!-- <img class="testimonial-img" src={testimonial.src} alt={testimonial.alt} /> -->
        <blockquote class="testimonial">
          <p class="testimonial-text">{testimonial.quote}</p>
          <p class="testimonial-author">{testimonial.author}</p>
          <p class="testimonial-job">{testimonial.job}</p>
        </blockquote>
      </div> 
    {/each}
      
          <button class="btn btn--left" on:click={prevSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          </button>
          <button class="btn btn--right" on:click={nextSlide}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>      
          </button>
          <div class="dots">
            {#each testimonials as dot, i}
              <button class="dot" class:dot--fill={curSlide == i} id={i} on:click={() => goToSlide(i)} on:click={activeDot} 
                >&nbsp;</button>
              
              <!-- <button class="dot" dot.id={i} bind:this={testimonials[i]} on:click={dotClick}>&nbsp;</button> -->
              
            {/each}        
            <!-- <button class="dot">&nbsp;</button>
            <button class="dot">&nbsp;</button>
            <button class="dot">&nbsp;</button>
            <button class="dot">&nbsp;</button> -->
          </div>
  </div>

<style>  
  .carousel-testimonials {  
    max-width: 80rem;
    height: 45.6rem;
    margin: 0 auto;  
    position: relative;
    overflow: hidden;
  }

  .testimonial-box {
    width: 80rem;
    height: 24rem;
    margin: 6.4rem auto 4.8rem auto;
    background-color: #0C2D48;
    padding: 3.2rem 4.8rem 3.2rem 8rem;
    border-radius: 9px;
    position: absolute;    

    display: flex;
    align-items: center;
    gap: 8rem;
    transition: transform 1s;
  }

  /* .testimonial-img {
    height: 20rem;
    border-radius: 9px;
    transform: scale(1.5);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25)
  } */

  .testimonial-text {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 3.2rem;
    color: #e7eaed;
  }

  .testimonial-author {
    font-size: 1.4rem;
    margin-bottom: 0.4rem;
    color: #ced5da;
  }

  .testimonial-job {
    font-size: 1.2rem;
    color: #ced5da;
  }

  /* CONTROLS */
  .btn {
    background-color: #ced5da;
    border: none;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2) ;
    cursor: pointer;  
    
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn--left {
    left: 2%;
    top: 50%;
    /* transform: translate(-50%, -4.2rem); */
    transform: translate(-50%, -170%);

  }
  .btn--right {
    right: 2%;
    top: 50%;
    /* transform: translate(-50%, -4.2rem); */
    transform: translate(50%, -170%);
  }

  .btn-icon {
    height: 2.4rem;
    width: 2.4rem;
    stroke: #0C2D48;
  }

  .dots {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -8rem);
    /* transform: translate(-50%, 3.2rem); */

    display: flex;
    gap: 1.2rem;
  }

  .dot {
    height: 12px;
    width: 12px;
    background-color: #fff;
    border: 2px solid #0C2D48;
    border-radius: 50%;
    cursor: pointer;
  }

  .dot--fill {
    background-color: #0C2D48;
  }


/**************************************************/
/* MOBILE NAVIGATION BELOW 752px (Smaller Tablets)*/
/**************************************************/
@media (max-width: 47em) {
  .carousel-testimonials {  
    max-width: 60rem; 
    height: 45.6rem;
  } 

  .testimonial-img {
    /* height: 20rem; */
    transform: scale(1);
  }
  
  .testimonial-box {
    width: 60rem;
    height: 24rem;
    gap: 4.8rem;
    padding: 2.4rem 4.8rem 3.2rem 4.8rem;
  } 

  .btn--left {
    left: 4%;
    
  }

  .btn--right {
    right: 4%;
  }

  .dots {
  transform: translate(-50%, -650%);
  }
} 

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .carousel-testimonials { 
    max-width: 40rem;  
    padding-bottom: 4.8rem;
  }

  .testimonial-box {
    flex-direction: column;
    gap: 2rem;
    width: 40rem;
    padding: 2.4rem 4rem;
    margin: 3.2rem auto 0 auto;
  }

  .testimonial-img {
    height: 15rem;
  }

  .testimonial-text {  
    line-height: 1.5;  
    margin-bottom: 2rem;
  }
  
  .btn--left {
    left: 4%;
    transform: translate(-50%, -300%);
  }
  .btn--right {
    right: 4%;
    transform: translate(50%, -300%);
  }
  
  .dots {
    transform: translate(-50%, -800%);
  }
}

</style>