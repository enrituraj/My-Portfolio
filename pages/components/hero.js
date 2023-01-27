import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero-row">
        <div className="text-content">
          <h6>Hi, my name is</h6>     
          <h1>Ritu Raj</h1>  
          <h4>I'm a <span>Web Developer</span></h4> 
          <p> My Portfolio, which showcases a selection of my work 
          and accomplishments.The portfolio includes examples of my projects,
          skills, and experiences. I am proud of the work that I have included
          in this portfolio, and I am confident that it demonstrates my passion,
          dedication, and expertise in my field. </p>
          <div class="btn-group">
            <a href="" className='btn'>Hire Me</a>
          </div>
        </div>
        <div className="img-content">
          <img src="https://images.unsplash.com/photo-1636390785299-b4df455163dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt=""/>
        </div>
      </div>
    </>
  )
}

export default Hero