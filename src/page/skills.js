import express from '../images/expressjs.png'


const SkillsPage = () => {
  return (
    <>
    
      <div className="container-md about-parent" id='techStack'>

          <h2 className="tech-text mb-5 fw-bold" data-aos="fade-right" data-aos-duration="1500">My Tech Stack</h2>

          <div className="tools" data-aos="fade-right" data-aos-duration="1200">

            <div className="htmls" >
              <p className="icon"><i class="fa-brands fa-html5"></i></p>
              <p className="tool-text">HTML</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-css3-alt"></i></p>
              <p className="tool-text">CSS</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-bootstrap"></i></p>
              <p className="tool-text">Boostrap</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-square-js"></i></p>
              <p className="tool-text">JavaScript</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-react"></i></p>
              <p className="tool-text">React</p>
            </div>

          </div>

          <hr/>

          <div className="tools"  data-aos="fade-left" data-aos-duration="1200">

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-node-js"></i></p>
              <p className="tool-text">Node.js</p>
            </div>

            <div className="htmls">
              <p className="icon"><img src={express}  alt='express.js' className='expressjs'/></p>
              <p className="tool-text">Express.js</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-php"></i></p>
              <p className="tool-text">PHP</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-brands fa-laravel"></i></p>
              <p className="tool-text">Laravel</p>
            </div>

            <div className="htmls">
              <p className="icon"><i class="fa-solid fa-database"></i></p>
              <p className="tool-text">Mysql</p>
            </div>
            
          </div>

         

      </div>
    </>
  )
}

export default SkillsPage