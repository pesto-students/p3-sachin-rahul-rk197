import React, { useState } from 'react'
import UrlInput from './Components/UrlInput';
import UrlOutputs from './Components/UrlOutputs';

function Home() {
    const [shortUrls, setShortUrls] = useState([])
    const handleUrls = (url) => {
        let newUrls = [...shortUrls];
        newUrls.push(url);
        setShortUrls(newUrls);
    }
    return (
        <div className='home'>
            <h1>More than just shorter links</h1>

            <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
            <UrlInput shortUrls={shortUrls} handleUrls={handleUrls} />
            <UrlOutputs shortUrls={shortUrls} />
        </div>
    )
}

export default Home