import fkad from '../images/fkad.jpg'

const AboutPage = () => {

  return (
    <>
      <div className="container-md  about-page" id='aboutMe'> 
        <h2 className='mb-5 fw-bold' data-aos="fade-right" data-aos-duration="1500">About me  </h2>
        <div className='about-container'>

          <div className='my-image' data-aos="fade-right" data-aos-duration="900">
            <img src={fkad}/>
          </div>

          <div className='about-me' data-aos="fade-left" data-aos-duration="900">
            <h2 className='fw-bold mb-5'>Hello 👋🏿</h2>
            <div className='descrip'>

              <h5 className='about-text'>
              I'm an enthusiastic Junior Full Stack Developer, fueled by a fervent passion for technology and a knack for creative problem-solving. With a degree from Cebu Technological University and training from Kodego's full stack program, I'm primed for success.

              </h5>

              <h5 className='about-text'>
              I excel in crafting captivating user interfaces using HTML, CSS, JavaScript, and React, while my server-side skills encompass Node.js, Express, PHP, and Laravel for seamless solutions.
              </h5>

             <h5 className='about-text'>
             But I crave more. I'm diving into diverse languages and frameworks - from Python to Java, Ruby on Rails to Django, C, C++, C#, Angular, Vue - ensuring I'm at the vanguard of industry trends.
             </h5>

             <h5 className='about-text'>
             With strong communication and time management skills, I thrive as both a developer and a collaborative team player. In this ever-evolving tech landscape, I'm not a bystander; I'm an engaged creator, a relentless learner, and an eager innovator.
             </h5>

             <h5 className='about-text'>
             This isn't just a career; it's my boundless journey.
             </h5>

            <button className='view-btn  pt-2 pb-2 pe-4 ps-4 mt-2' onClick={() => {

                  window.open('https://assets.kodego.ph/public/isa/2300qL21pGeNLaHHWvF3XwYsWMrlmd2dovfOqbfV.pdf', '_blank');
                    }}>

                  View Certificate 

                  <span className='ms-2'>
                    <i class="fa-regular fa-eye"></i>
                  </span>

            </button>
            </div>
           
          </div>

        </div>

    
      </div>

 
     
    </>
  )


}

export default AboutPage