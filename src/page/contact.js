import { useRef } from "react";
import emailjs, { send } from '@emailjs/browser';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('trustid1243', 'template_vwj5cwf', form.current, 'JdFg1FLSJ0fxKbtpj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      Swal.fire(
        'Thank you for reaching out to me!',
        'I will be responding to your email shortly. Please expect a detailed response in the near future!',
        'success'
      )

    
      

  }

  return (
    <>
    <div className="container-md contact-div">
      
      <div className="contact-container d-flex justify-content-lg-center" id="contactMe">

        <div className="contact-text col-lg-6" data-aos="fade-right" data-aos-duration="1500">
          <h1 className="fw-bold" >Just say hi.</h1>
            <h3 className="mt-5 pt-5 my-texts">I'm eager to embark on my journey as a Jr. Full Stack Web Developer / Jr. Software Developer / Jr. Software Engineer, ready to contribute my skills to real-world projects and expand my technological expertise. If you share my enthusiasm, I'd love to connect with you. Please don't hesitate to reach out; I'm always just an email away</h3>

            <div className="social-contacts d-flex mt-5">
              <div>
                <p>Mail me at</p>
                <p className="fw-bold">francesdonz23@gmail.com</p>
              </div>
              <div className="icon-container">
                  <p>Follow me</p>
                  <div className="contacts-icon">
                  <Link to='https://www.linkedin.com/in/frances-khem-andre-donaire-102646274/' className="icon-links"><p className="icon-link"><i class="fa-brands fa-linkedin"></i></p></Link>
                  <Link to='https://github.com/Donaire23' className="icon-links"><p className="icon-link"><i class="fa-brands fa-github"></i></p></Link>
                  <Link to='https://www.instagram.com/drecooool/?hl=en' className="icon-links"><p className="icon-link"><i class="fa-brands fa-instagram"></i></p></Link>
                  <Link to='https://web.facebook.com/francesdonz.donaire' className="icon-links"><p className="icon-link"><i class="fa-brands fa-square-facebook"></i></p></Link>
                  <Link to='' className="icon-links"><p className="icon-link"><i class="fa-brands fa-twitter"></i></p></Link>
            
                  </div>
              </div>
            </div>


        </div>

       <div className="contact-inputs col-lg-6" data-aos="fade-left" data-aos-duration="1500">

          <div className="type-contact">

            <form className="type-contact" ref={form} onSubmit={sendEmail}>

              <input placeholder="Your Name" className="name pt-4"   name='user_name' required />
              <input placeholder="Your Email Address" className="mb-4 pt-4" name='user_email' required/>
              <textarea id="textArea" className="message-area col-lg-4 col-md-12 col-sm-12" name='message' placeholder="Your message" required/>

              <button className="submit-btn mt-4 pt-2 pb-2" id="submitBtn">Submit</button>
            </form>
              
          </div>
         

       </div>
          
      
      </div>

    </div>
    </>
  )

}

export default ContactPage