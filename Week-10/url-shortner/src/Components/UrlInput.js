import React, { useState } from 'react'

function UrlInput(props) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) =>{
    console.log(e);
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then((response)=>{
      // if(response.status === 200){
        response.json().then((res)=>{
          console.log(res);
          setUrl('')
          props.handleUrls(res.result.short_link) ;
        })
      // }
    })
  }

  return (
    <div>
      <input value={url} onChange={(e) => { setUrl(e.target.value) }} />
      <button onClick={(e)=>{handleSubmit(e)}}> submit </button>
    </div>
  )
}

export default UrlInput