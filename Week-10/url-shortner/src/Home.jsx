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
        <div>

            <UrlInput shortUrls={shortUrls} handleUrls={handleUrls} />
            <UrlOutputs shortUrls={shortUrls} />
        </div>
    )
}

export default Home