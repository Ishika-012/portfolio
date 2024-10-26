import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rapify from './assets/RAPIFY.jpg'
import game from './assets/tic-tac-toe.png'
import { Link } from 'react-router-dom'


function Project() {
  return (
     <section className='ml-72 mr-72' id="page">
       <h1 className='text-center text-white text-5xl p-3 bg-violet-500 border-4 mt-20 border-dashed  font-bold'>My Projects</h1>
      <div className='flex justify-center gap-5' id="project">
       <Card style={{ width: '18rem' }} className='mt-10 mb-10'>
      <Card.Img variant="top" src={rapify} />
      <Card.Body>
        <Card.Title>E-commerce Website</Card.Title>
        <Card.Text>
          <ul>
            <li>An E-commerce website and a fast delivering app is made using HTML CSS and JavaScript.
            </li>
            <li>It has various categories for products with a user-friendly interface You can order lots of products at a time
            using cart functionality</li>
          </ul>
        </Card.Text>
        <a href="https://github.com/Ishika-012/E-commerce-Site"><Button variant="primary" className='mt-2 ml-20'>Visit</Button></a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }} className='mt-10 mb-10'>
      <Card.Img variant="top" src={game} className='w-32 ml-16'/>
      <Card.Body>
        <Card.Title>Tic-Tac-Toe</Card.Title>
        <Card.Text>
          <ul>
            <li> Designed and coded a Tic Tac Toe game application, focusing on player interaction and game flow.
            </li>
            <li>Developed using HTML CSS and JavaScript to create an intuitive user interface and ensure accurate
            game outcomes .</li>
          </ul>
        </Card.Text>
        <a href="https://github.com/Ishika-012/Tic-Tac-Toe"><Button variant="primary" className='mt-4 ml-20'>Visit</Button></a>
      </Card.Body>
    </Card>
    <ul className='p-2 text-2xl w-2 relative right-0 left-60 top-8 text-violet-400 ' id="nav3">
        <Link to="/" ><i className="fa-solid fa-house mb-4" ></i></Link><br/>
        <Link to="/about" ><i class="fa-solid fa-user mb-4"></i></Link><br />
        <Link to="/project"><i className=" fa-solid fa-list-ul mb-4"></i></Link>
        <Link to="/contact"><i className="fa-solid fa-phone"></i></Link>
      </ul>
    </div>
  </section>
  )
}

export default Project
