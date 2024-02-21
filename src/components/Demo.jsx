import React, { useState, useEffect } from "react";
import { copy, linkIcon, loader, tick } from "../assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  //show if we have any error, or no error and 
  //getSummary is func that we will get the summery
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  //function to 
  const handleSubmit=async(e)=>{
    //to stop app to load everytime
    e.preventDefault();
    //fetching the summery
    const { data } = await getSummary({ articleUrl: article.url });

    if(data?.summary){
      const newArticle = { ...article, summary: data.summary};
      setArticle(newArticle);
      console.log(newArticle);
    }
  }
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* Search */}

      <div className='flex flex-col w-full gap-2'>
          <form className="flex relative justify-center items-center"
          onSubmit={handleSubmit}>
            <img 
            src={linkIcon} 
            alt="LinkIcon" 
            className='absolute my-2 left-0 ml-3 w-5' />

            <input 
            type="url" 
            placeholder='Paste the article link'
            
            value={article.url}
            onChange={(e)=>setArticle({
              article,url:e.target.value})} 
            required 
            className='url_input peer' 
            />

            <button type='submit' className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'>▶</button>
          </form>
          {/* Brouse url history */}
      </div>
      {/* Display Results */}
    </section>
  )
}

export default Demo
