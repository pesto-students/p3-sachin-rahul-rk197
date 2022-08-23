import React from 'react'

function UrlOutputs(props) {
  return (
    <div>
        <ul>
            {props.shortUrls.map((x,i)=>{
                return (<li key={`${x}-${i}`}>{x}</li>)
            })}
        </ul>
    </div>
  )
}

export default UrlOutputs