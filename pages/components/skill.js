import React from 'react'
import Image from 'next/image'
import html from './img/html-5.png'
const Skill = () => {
  return (
    <>
      <section class="section">
        <div class="skill-row">
          <div class="skill-card">
            <Image src={html} alt='hh' height={100} width={100}/>
              <h4>Html</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill