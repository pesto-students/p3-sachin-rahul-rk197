import React, { useState } from 'react'

function UrlInput(props) {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response) => {
        setLoading(false)
        response.json().then((res) => {
          props.handleUrls({ longUrl: url, shortenUrl: res.result.short_link });
          setUrl('')
        })
      })  
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='input-container'>
      <input value={url} onChange={(e) => { setUrl(e.target.value) }} placeholder="Share a Link Here" />
      <button className={` ${loading ? 'btn-cst-loading' : ''}`} onClick={(e) => { handleSubmit(e) }}> Shorten Url </button>
    </div>
  )
}

export default UrlInput