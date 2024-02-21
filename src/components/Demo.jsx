import React, { useState } from 'react'
import {copy,linkIcon,loader,tick } from '../assets';

const Demo = () => {
  const [article,setArticle]=useState({
    url:"",
    summary:""
  });
  const handleSubmit=async(e)=>{
    alert("Submitted");
  }
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}

      <div className='flex flex-col w-full gap-2'>
          <form className="flex relative justify-center items-center"
          onSubmit={handleSubmit}>
            <img src={linkIcon} alt="LinkIcon" className='absolute my-2 left-0 ml-3 w-5' />
            <input 
            type="url" 
            pattern='Enter a URL' 
            value={article.url}
            onChange={(e)=>setArticle({
              article,url:e.target.value})} 
            required 
            className='url_input peer' />
            <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>▶</button>
          </form>
          {/* Brouse url history */}
      </div>
      {/* Display Results */}
    </section>
  )
}

export default Demo
