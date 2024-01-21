/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
function QuoteGiphy() {
    const quoteURL = import.meta.env.VITE_QUOTE_API_ROOT;
    const api_key = import.meta.env.VITE_GIPHY_API_KEY
    const apiRoot = import.meta.env.VITE_GIPHY_API_ROOT;

    const [quote, setQuote] = useState("")
    const [keyword, setKeyword] = useState("");
    const [author, setAuthor] =useState("")
    const [giphy, setGiphy] = useState("");

    useEffect(() => {
        fetch(quoteURL)
        .then(response => response.json())
        .then(data => {
            setQuote(data[0].content);
            setKeyword(data[0].tags[0])
            setAuthor(data[0].author)
        }) 
        .catch(error => console.error('Error fetching data:', error)); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    useEffect(() => {
        if (keyword) {
            fetch(`${apiRoot}search?api_key=${api_key}&q=${keyword}`)
            .then(response => response.json())
            .then(data => {
                if (data.data && data.data.length > 0) {
                const randomIndex = Math.floor(Math.random() * data.data.length);
                setGiphy(data.data[randomIndex].images.fixed_height.url);
            } else {
                setGiphy('');  
            }
            }) 
            .catch(error => console.error('Error fetching data:', error));  
        }
       
    },[keyword]);
    

  return (
    <div className='w-[80%] h-full m-auto flex flex-col md:flex-row bg-transparent overflow-hidden'>
        <div className='md:w-1/2 flex flex-col justify-center items-center md:items-start gap-20'>
            <h2 className='text-2xl font-bold text-green-500'>QUOTE OF THE DAY</h2>
            <p className='italic text-2xl text-orange-500 font-light'>"{quote}"</p>
            <h3 className='text-white self-end italic font-normal'>- {author}</h3>
            <p>{quoteURL}</p>
        </div>
        <div className=' md:w-1/2 h-ful flex p-10 justify-center items-center'>
            <img src={giphy} alt="giphy" className='w-full h-full object-cover'/>
        </div>
    </div>
  )
}

export default QuoteGiphy