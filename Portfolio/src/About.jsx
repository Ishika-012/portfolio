import React from 'react'
import CV from './assets/cv.pdf'
import { Link } from 'react-router-dom'

function About() {
  return (
     <section className='ml-72 mr-72 flex' id="page">
      <div>
       <h1 className='text-center text-white text-5xl p-3 bg-violet-500 border-4  border-dashed  font-bold mt-10'>ABOUT</h1>
       <p className='text-white mt-10  text-justify text-xl'>I’m currently a BCA student at Vivekananda Institute of Professional Studies with a strong passion for web development. Skilled in HTML, CSS, JavaScript, React.js, and MySQL, I enjoy turning ideas into user-centered digital experiences. Alongside my studies, I’ve built real-life projects that reflect my dedication to creating impactful and functional web applications.
       Let’s connect and create!
      </p>
       <h2 className='text-violet-400  w-fit font-semibold text-4xl mt-5 p-2 underline'>Skills</h2>
       <ul className='text-white mt-3 list-disc'>
        <li className='text-lg'>
          <div className='text-2xl mb-2'>Technical Skills</div>
            <span className='mr-3'>C++</span>
            <span className='mr-3'>Java</span>
            <span className='mr-3'>HTML</span>
            <span className='mr-3'>CSS</span>
            <span className='mr-3'>Tailwind CSS</span>
            <span className='mr-3'>MYSQL</span>
            <span className='mr-3'>JavaScript</span>
            <span className='mr-3'>React js</span>
        </li><br />
        <li className='text-lg'>
        <div className='text-2xl mb-2'>Soft Skills</div>
            <span className='mr-3'>Problem Solving</span>
            <span className='mr-3'>Flexibility</span>
            <span className='mr-3'>Time Management</span>
            <span className='mr-3'>Communication Skill</span>
        </li>
       </ul>
      <h3 className=' mt-7 text-3xl font-bold text-violet-400 underline'>My Resume</h3>
      <a href={CV} download><button className='text-violet-400 bg-white mt-8 mb-8 p-2 text-lg rounded-xl'> Download CV <span className='p-3 rounded-full bg-violet-400 text-white border relative left-3'><i class="fa-solid fa-download "></i></span></button></a>
      </div>
    
      <ul className='p-2 text-2xl mt-48  text-violet-400 translate-x-60 '>
        <Link to="/" ><i className="fa-solid fa-house mb-4" ></i></Link><br/>
        <Link to="/about" ><i class="fa-solid fa-user mb-4"></i></Link><br />
        <Link to="/project"><i className=" fa-solid fa-list-ul mb-4"></i></Link>
        <Link to="/contact"><i className="fa-solid fa-phone"></i></Link>
      </ul>

     </section>
  )
}

export default About