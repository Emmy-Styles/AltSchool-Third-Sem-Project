<template>
    <section className="contact">
        <div className="contact-heading">
          <h2>Contact Us</h2>
        </div>

        <div className="ccontainer">
          <div className="row">
            <div className="column">
              <div className="contact-widget">

                <div className="contact-widget-item">
                  <div className="icon">
                    <!-- <i icon="fa-regular fa-location-dot" class="fab fa-location-dot"></i> -->
                    <fa icon="fa-solid fa-location-dot" class="fab fa-location-dot"></fa>
                  </div>
                  <div className="text">
                    <h5>Address</h5>
                    <p>Plot 234 Ajose Adeogun, VI, Lagos Nigeria</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <fa icon="fa-solid fa-phone" class="fab fa-phone"></fa>
                    <!-- <i className="fa-solid fa-phone"></i> -->
                  </div>
                  <div className="text">
                    <h5>Contact Us</h5>
                    <p>+2348130279740</p>
                  </div>
                </div>

                <div className="contact-widget-item">
                  <div className="icon">
                    <fa icon="fa-regular fa-envelope" class="fab fa-envelope"></fa>
                    <!-- <i className="fa-regular fa-envelope"></i> -->
                  </div>
                  <div className="text">
                    <h5>Mail</h5>
                    <p>uleluemmanuel@gmail.com</p>
                  </div>
                </div>


              </div>
            </div>

                <div className="column">
                    <div className="contact-form">
                        <form action="#" className="form-class">
                            <input type="text" placeholder="Name" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="Comment"></textarea>
                            <button type="submit" className="site-btn"> Send Message </button>
                        </form>
                    </div>
                </div>
          </div>

          <div className="row">
            <div className="map-column">
                <div className="contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.940149176879!2d3.4131896161496793!3d6.42807669848975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe5!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1676200705349!5m2!1sen!2sng" 
                    width="600" 
                    height="450" 
                    style={{border:0}}  
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
          </div>


        </div>

      </section>
</template>

<script>
import { Fa } from '@fortawesome/vue-fontawesome';
     export default {
    name: 'ContactPage',
    components: { Fa }
  };
</script>

<style scoped>
@import url('https://use.fontawesome.com/releases/v5.13.0/css/all.css');
    .contact {
    padding-top: 4rem;
    padding-bottom: 2rem;
}

.contact-heading {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    padding-right: 2rem;
}

.contact-heading h2 {
    color: lightseagreen;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    position: relative;
    font-family: "Bai Jamjuree", sans-serif;
}

.contact-heading h2::before {
    position: absolute;
    top: 50%;
    right: -80px;
    content: '';
    width: 70px;
    height: 2px;
    background: lightseagreen;
}
.contact-heading h2::after {
    position: absolute;
    top: 50%;
    left: -80px;
    content: '';
    width: 70px;
    height: 2px;
    background: lightseagreen;
}

.ccontainer {
    max-width: 1170px;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.column {
    flex: 0 0 auto;
    width: 50%;
}

.contact-widget {
    margin-bottom: 40px;
    padding-right: 10px;
}

.contact-widget-item {
    overflow: hidden;
    margin-bottom: 40px;
}

.icon {
    height: 60px;
    width: 60px;
    background: lightseagreen;
    border-radius: 50%;
    line-height: 60px;
    text-align: center;
    margin-right: 30px;
    float: left;
}

.icon .fab {
    font-size: 24px;
    color: #fff;
    position: relative;
    top: 3px;
}

.text {
    overflow: hidden;
}

.text h5 {
    color: #333;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 6px;
}

.text p {
    font-size: 16px;
    font-family: "Bai Jamjuree", sans-serif;
    color: #333;
    font-weight: 400;
    line-height: 28px;
    margin: 0 0 15px 0;
}

.contact-form {
    text-align: center;
    margin-bottom: 40px;
}

form {
    display: block;
    margin-top: 0em;
}

.column input {
    height: 46px;
    width: 100%;
    padding-left: 20px;
    font-size: 15px;
    color: #333;
    border: 1px solid #e1e1e1;
    margin-bottom: 20px;
    border-radius: 4px;
    /* transition: all, .3s; */
}

.column input:focus {
    outline: none;
    border: 2px solid lightseagreen;
}

form textarea {
    height: 110px;
    width: 100%;
    padding-left: 20px;
    padding-top: 12px;
    font-size: 15px;
    color: #111;
    border: 1px solid #e1e1e1;
    resize: none;
    margin-bottom: 9px;
    border-radius: 4px;
    /* transition: all, .3s; */
}

form textarea:focus {
    outline: none;
    border: 2px solid lightseagreen;
}

form button {
    width: 100%;
    cursor: pointer;
}

.site-btn {
    border: none;
    display: inline-block;
    background: rgba(255, 215, 35, 0.3);
    color: #111;
    font-size: 14px;
    /* font-family: "Rubik", sans-serif; */
    font-family: "Bai Jamjuree", sans-serif;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    border-radius: 50px;
    padding: 12px 40px 10px;
}

.map-column {
    flex: 0 0 auto;
    width: 100%;
}

.contact-map iframe {
    width: 100%;
}


@media screen and (max-width:1200px) {
    .ccontainer {
        max-width: 960px;
    }
}

@media screen and (max-width:990px) {
    .ccontainer {
        max-width: 720px;
    }
}

@media screen and (max-width:768px) {
    .ccontainer {
        max-width: 540px;
    }
    .column {
        width: 100%;
    }
}

@media (max-width:500px) {
    .contact-heading {
        padding-right: 0;
    }
    .contact-heading h2 {
        font-size: 22px;
    }
    .contact-heading h2::before {
        right: -60px;
        width: 50px;
    }
    .contact-heading h2::after {
        left: -60px;
        width: 50px;
    }
}
</style>