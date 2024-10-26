import React from 'react'
import { Link } from 'react-router-dom'
import profie from './assets/avater.jpg' 

function Home() {
  return (
    <section className=' grid grid-flow-col auto-cols-max  h-screen' id="page">
      <div className=' w-fit mt-36 ml-10  p-5 bg-black h-fit'> <img src={profie} className='img' /></div>
      <div className='mt-48 ml-32  p-2 h-fit' id="intro">
        <h1 className='text-violet-300 text-5xl mb-4' >I'm Ishika Arora</h1>
        <h1 className='text-white text-5xl mb-4'>Web Developer</h1>
        <p className='text-white text-xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic quas optio adipisci exercitationem ab rem, dignissimos voluptatem non. Blanditiis temporibus voluptate explicabo excepturi dolores veniam sapiente consequatur totam officiis sequi?</p>
       <Link to="/about"><span id="btn" className='text-white p-1.5 pl-5 border rounded-s-xl border-white rounded-e-xl w-min'>More about me <button className=' mt-2 text-4xl translate-y-1.5 translate-x-3 text-violet-300'><i className="fa-solid fa-circle-right"></i></button></span> </Link>
      </div>
      <ul className='p-2 text-2xl mt-48  text-violet-400 ' id="nav1">
        <Link to="/" ><i className="fa-solid fa-house mb-4" ></i></Link><br/>
        <Link to="/about" ><i class="fa-solid fa-user mb-4"></i></Link><br />
        <Link to="/project"><i className=" fa-solid fa-list-ul mb-4"></i></Link><br />
        <Link to="/contact"><i className="fa-solid fa-phone"></i></Link>
      </ul>
      </section> 
  )
}

export default Home