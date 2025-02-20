import React from 'react'
import {logo} from '../assets';
import '../App.css';
const Hero = () => {
  return (
    
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-4'>
        <h1 className='w-28 font-satoshi text-2xl font-extrabold text-violet-700 object-contain'> SumAI </h1>

        <button 
        type='button'
        onClick={()=>window.open('https://github.com/raghunath704/SumAI')}
        className='black_btn'
         >Github</button>
      </nav>

      <h1 className='head_text'>
        Summerize Article with <br className='max-md:hidden'/>
        <span className='orange_gradient'>
          OpenAI GPT-4
        </span>
      </h1>
      <h2 className='desc'>This is a article summerizer backed by OpenAi GPT-4</h2>
    </header>
  )
}

export default Hero
