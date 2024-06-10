<script>
  import emailjs from '@emailjs/browser';
  import Button from "$lib/components/Button.svelte";

  const successPopup = () => {
    document.querySelector('.popup-message').style.display = 'block';
    
    setTimeout(() => {document.querySelector('.popup-message').style.display = 'none';
    }, 3000);
  }

  const errorPopup = () => {
    document.querySelector('.success').style.display = 'block';

    setTimeout(() => {document.querySelector('.error').style.display = 'none';
    }, 3000);
  }

  function sendEmail(e) {
    emailjs.sendForm('service_62v4o99', 'template_v4xiwym', e.target, 'ZVEFfqRykdXODmBP6')
      .then((result) => {
          console.log('SUCCESS!', result.text);
          successPopup();
          e.target.reset();
      }, (error) => {
          console.log('FAILED...', error.text);
          errorPopup();
      });
  }

</script>

<section class="section-form">
  <div class="container">
    <div class="form-box">
      <div class="form-text-box">
        <h2 class="heading-tertiary">Let's create a wonderful experience!</h2>

        <p class="form-text">Get in touch with us to bring your visions to life!</p>

        <form class="contact-form" on:submit|preventDefault={sendEmail}>
          <div>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="user_name"/>
          </div>
          <div>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="user_phone" required/>
          </div>
          <div>
            <label for="email">Email</label>
            <input type="email" id="email" name="user_email" required/>
          </div>


          <label for="checkbox">Which of our services do you need?</label>
          <div class="checkbox-pack">
            <div class="checkbox-field">
              <label for="corporate">Corporate Event</label>
              <input type="checkbox" class="checkbox" value="Corporate Event" id="corporate" name="user_value1" />
            </div>

            <div class="checkbox-field">
              <label for="commercial">Social Event</label>
              <input type="checkbox" class="checkbox" value="Social Event" id="commercial" name="user_value2" />
            </div>

            <div class="checkbox-field">
              <label for="wedding">Wedding Planning</label>
              <input type="checkbox" class="checkbox" value="Wedding Planning" id="wedding" name="user_value3" />
            </div>

            <div class="checkbox-field">
              <label for="mml">Corporate Gifts</label>
              <input type="checkbox" class="checkbox" value=" Corporate Gift" id="gifts" name="user_value4" />
            </div>

            <div class="checkbox-field">
              <label for="cleaning">Cleaning Services</label>
              <input type="checkbox" class="checkbox" value="Cleaning Services" id="cleaning" name="user_value5" />
            </div>
          </div>

          <!-- <div>
          <label for="select-event">Which of our services do you need?</label>
          <select id="select-event">
            <option value="">Please select your event/services</option>
            <option value="Corporate Event">Corporate Event</option>
            <option value="Commercial Event">Commercial Event</option>
            <option value="Wedding">Wedding</option>
            <option value="Cleaning Services">Cleaning Services</option>
          </select>
        </div> -->

          <div>
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <div>
            <Button bigger={true}>Send</Button>
            <!-- <input type="submit" value="Book Now"/> -->
          </div>
        </form>

        <!-- <div class="popup"> -->
        <span class="popup-message success">Message sent!</span>
        <span class="popup-message error">Message failed!</span>
        <!-- </div> -->
        
      </div>

      <div class="form-img-box" role="img" aria-label="classy-event"></div>
    </div>
  </div>
  
</section>

<style>
/* .section-form {
   padding: 2.4rem 0; 
} */

.form-box {
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  border-radius: 11px;
  background-image: linear-gradient(to right bottom, #3d576d, #0C2D48);
  overflow: hidden;

/* temp */
  /* height: 50rem; */
}

.form-text-box{
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  color: #fff;

  position: relative;
}

.form-text {
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 4.8rem;
}

.form-img-box {
  background-image: linear-gradient(
    to right bottom,
   rgb(61, 87, 108, 0.4), 
   rgb(12, 44, 70, 0.4)
   ),
   url("/img/image6.jpg");
  background-size: cover;
  background-position: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 2.4rem;
}

.contact-form label {
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
}

.contact-form input, 
.contact-form textarea {
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  border: none;
  background-color: #e7eaed;
  border-radius: 9px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}


.checkbox-field {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1.2rem;
}

.checkbox-pack {
  display: flex;
  flex-direction: column;
  justify-items: center;
  gap: 0.8rem;
}

.checkbox-field .checkbox {
  width: 2rem;
  height: 2rem;
}

.contact-form *:focus {
  outline: none;
  box-shadow: 0 0 0 0.8rem rgba(18, 175, 237, 0.5);
}

.popup-message {
  display: none;
  font-size: 2rem;
  font-weight: 500;
  color: #fff;
  padding: 0.8rem 1.2rem;
  border-radius: 9px;  
  position: absolute;
  bottom: 6.4rem;
  right: 6.4rem;  
  transition: all 2s;
}

.success {
  background-color: green;  
}

.error {
  background-color: red;
}


/*******************************************/
/* MOBILE NAVIGATION BELOW 944px (Tablets)*/
/******************************************/
@media (max-width: 59em) {
  .form-box {
  grid-template-columns: 3fr 2fr;
  }

  .form-text-box{
  padding: 3.2rem 4.8rem 4.8rem 4.8rem;
  }
}

/**************************************************/
/* MOBILE NAVIGATION BELOW 544px (Phones)*/
/**************************************************/
@media (max-width: 34em) {
  .form-box {
  grid-template-columns: 1fr;
  }
}
</style>