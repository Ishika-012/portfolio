import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <section className='ml-72 mr-72' id="page">
      
      <h1 className='text-center text-white text-5xl p-3 bg-violet-500 border-4 mt-20 border-dashed  font-bold'>Contact Me</h1>
    <div className='grid grid-flow-col auto-cols-max '  id="part">
      <div className='group'>
      <div className='box'>
      <div className=' mt-7 text-2xl font-bold text-violet-400 text-center'>Profiles</div> 
        <a href="" ><p className='text-white text-center'>Linked In</p></a>
        <a href="https://github.com/Ishika-012" ><p className='text-white text-center'>GitHub</p></a>
      </div>
      <div className='box'>
      <div className=' mt-7 text-2xl font-bold text-violet-400 text-center'>Email</div>
        <p className='text-white text-center'>aroraishika1203@gmail.com</p>
        </div>
        <div className='box '>
      <div className=' mt-7 text-2xl font-bold text-violet-400 text-center'>Phone Number</div>
        <p className='text-white text-center'>+91 7982148521</p>
      </div>
    </div>
      <ul className='p-2 text-2xl mt-5 text-violet-400 ml-48' id='nav4' >
        <Link to="/" ><i className="fa-solid fa-house mb-4" ></i></Link><br/>
        <Link to="/about" ><i class="fa-solid fa-user mb-4"></i></Link><br />
        <Link to="/project"><i className=" fa-solid fa-list-ul mb-4"></i></Link><br />
        <Link to="/contact"><i className="fa-solid fa-phone"></i></Link>
      </ul>
     </div> 
    </section>
  )
}

export default Contact