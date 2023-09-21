import { Link } from "react-router-dom"

const SocialMedia = () => {
  return (
    <>
      <div className="social-media container-md">
          <div className="icons">

            <Link to='https://www.linkedin.com/in/frances-khem-andre-donaire-102646274/' className="icon-links"><p className="icon-link"><i class="fa-brands fa-linkedin"></i></p></Link>
            <Link to='https://github.com/Donaire23' className="icon-links"><p className="icon-link"><i class="fa-brands fa-github"></i></p></Link>
            <Link to='https://www.instagram.com/drecooool/?hl=en' className="icon-links"><p className="icon-link"><i class="fa-brands fa-instagram"></i></p></Link>
            <Link to='https://web.facebook.com/francesdonz.donaire' className="icon-links"><p className="icon-link"><i class="fa-brands fa-square-facebook"></i></p></Link>
            <Link to='' className="icon-links"><p className="icon-link"><i class="fa-brands fa-twitter"></i></p></Link>
            
            
            
            
          
          </div>
       
          <div className="my-email">
            <p>francesdonz23@gmail.com</p>
          </div>
          
        </div>
    </>
  )
}

export default SocialMedia