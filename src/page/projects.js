import brew from '../images/Deja-brew.png'
import health from '../images/health.png'
import library from '../images/online-library.png'
import bookStore from '../images/online-book-store.png'
import paws from '../images/ci-paws.png'
import todoList from '../images/todo-list.png'
import rockPaperScissor from '../images/rock-paper-scissor.png'
import royalTote from '../images/Royal Tote.png'
import lifeEtc from "../images/life-etc-for-portfolio.png"

const Projects = () => {


  return (
    <>
    <div className="container-md  projects-parent" id='proj'>

      <h2 className='mb-5 fw-bold ' data-aos="fade-right" data-aos-duration="1500">My Projects</h2>
      

      <div className="project-containers row d-flex justify-content-around">

        

        <div className='deja-brew col-lg-5' data-aos="fade-left" data-aos-duration="1200">

            <img src={bookStore} className='deja col-lg-8 col-md-12'/>

            <span className='deja-text'>An online book library is a web application that allows customers to buy books online. Customers can search for a book by title or author using a web browser, add it to their shopping cart, and then purchase it using a debit or credit card transaction.</span>

            <div className='deja-tech'>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>

            <div className='deja-btn pb-5'>
              <a href='https://donaire23.github.io/Online-Library-Boostrap/'><button>Live Site</button></a>
              <a href='https://github.com/Donaire23/Online-Library-Boostrap'><button>Github Repository</button></a>
            </div>

        </div>

        <div className='deja-brew col-lg-5' data-aos="fade-right" data-aos-duration="1200">

            <img src={paws} className='deja col-lg-8 col-md-12 col-sm-12'/>

            <span className='deja-text'>This website is a helping hand for everyone who wants to adopt a homeless dog and cats to give them a loving, caring and a proper shelter.</span>

            <div className='deja-tech'>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
            </div>

            <div className='deja-btn pb-4'>
              <a href='https://donaire23.github.io/CI-PAWS/'><button>Live Site</button></a>
              <a href='https://github.com/Donaire23/CI-PAWS'><button>Github Repository</button></a>
            </div>

        </div>

      

        <div className='deja-brew col-lg-5' data-aos="fade-left" data-aos-duration="1200">

            <img src={todoList} className='deja col-lg-8 col-md-12 col-sm-12'/>

            <span className='deja-text'>A to-do list is a simple organizational tool used to keep track of tasks and activities that need to be completed. It's a way to jot down and manage tasks in a structured manner, helping individuals or teams prioritize and remember what needs to be done.</span>

            <div className='deja-tech'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className='deja-btn pb-5'>
              <a href='https://donaire23.github.io/Todo-list/'><button>Live Site</button></a>
              <a href='https://github.com/Donaire23/Todo-list'><button>Github Repository</button></a>
            </div>

        </div>

        <div className='deja-brew col-lg-5' data-aos="fade-right" data-aos-duration="1200">

            <img src={rockPaperScissor} className='deja col-lg-8 col-md-12 col-sm-12'/>

            <span className='deja-text'>The Rock-Paper-Scissors game against an Artificial Intelligence AI opponent. Prepare to engage in a battle of wits and quick decision-making as you face off against our AI-powered adversary.</span>

            <div className='deja-tech'>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className='deja-btn pb-5'>
              <a href='https://donaire23.github.io/Rock-paper-scissor-game/'><button>Live Site</button></a>
              <a href='https://github.com/Donaire23/Rock-paper-scissor-game'><button>Github Repository</button></a>
            </div>

        </div>

        
        <div className='deja-brew col-lg-5' data-aos="fade-left" data-aos-duration="1200">

          <img src={brew} className='deja col-lg-8 col-md-12 col-sm-12'/>

          <span className='deja-text'>This project is a coffee shop website that is an essential tool for any coffee shop that wants to attract and retain customers in today's digital age. With our coffee shop website, customers have the convenience of browsing the menu, placing orders, and finding information about our business online.</span>

          <div className='deja-tech'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
          </div>

          <div className='deja-btn pb-5'>
            <a href='https://donaire23.github.io/deja-brew/'><button>Live Site</button></a>
            <a href='https://github.com/Donaire23/deja-brew'><button>Github Repository</button></a>
          </div>
          
        </div>
        
        <div className='deja-brew col-lg-5' data-aos="fade-right" data-aos-duration="1200">

          <img src={health} className='deja col-lg-8 col-md-12 col-sm-12'/>

          <span className='deja-text'>your premier destination for convenient and reliable medical consultation from the comfort of your own home, You can now book an appointment and know when is the perfect schedule that is fit for you.</span>

          <div className='deja-tech'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>ReactJS</span>
            
          </div>
          <div className='deja-tech'>
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>Mysql</span>
          </div>

          <div className='deja-btn pb-5'>
            <a href='#'><button onClick={() => {
              window.alert("Not Deployed and run only on localhost")
            }}>Live Site</button></a>
            <a href='https://github.com/Donaire23/online-medical-consultation/tree/main/Health%2B%2B(Final)'><button>Github Repository</button></a>
          </div>
          
        </div>

        
        <div className='deja-brew col-lg-5' data-aos="fade-left" data-aos-duration="1200">

          <img src={royalTote} className='deja col-lg-8 col-md-12 col-sm-12'/>

          <span className='deja-text'>This project is an online store specializing in stylish and practical tote bags, aiming to provide customers with fashionable and functional accessories while offering personalized customer service and attention to detail.</span>

          <div className='deja-tech'>
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>ReactJS</span>
            
          </div>
          <div className='deja-tech'>
            <span>NodeJS</span>
            <span>ExpressJS</span>
            <span>Mysql</span>
          </div>

          <div className='deja-btn pb-5'>
            <a href='#'><button onClick={() => {
              window.alert("Not Deployed and run only on localhost")
            }}>Live Site</button></a>
            <a href='https://github.com/Donaire23/royal-tote-bags'><button>Github Repository</button></a>
          </div>

         </div>

         <div className='deja-brew col-lg-5' data-aos="fade-right" data-aos-duration="1200">

            <img src={lifeEtc} className='deja col-lg-8 col-md-12 col-sm-12'/>

            <span className='deja-text'>This project is an online store that curates a selection of products celebrating simplicity, artistry, and elegance, offering customers a unique and immersive shopping experience focused on aesthetics and inspiration.</span>

            <div className='deja-tech'>
              <span>HTML</span>
              <span>CSS</span>
              <span>Bootstrap</span>
              <span>ReactJS</span>
              
            </div>
            <div className='deja-tech'>
              <span>NodeJS</span>
              <span>ExpressJS</span>
              <span>Mysql</span>
            </div>

            <div className='deja-btn pb-5'>
              <a href='#'><button onClick={() => {
                window.alert("Not Deployed and run only on localhost")
              }}>Live Site</button></a>
              <a href='https://github.com/Donaire23/life.etc'><button>Github Repository</button></a>
            </div>

          </div>


      </div>

     



    </div>
    </>
  )
}

export default Projects