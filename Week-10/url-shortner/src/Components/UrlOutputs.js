import React from 'react'

function UrlOutputs(props) {
  return (
    <div className='output'>
      <ul>
        {props.shortUrls.map((x, i) => {
          return (<li key={`${x}-${i}`}>
            <div className='long-url'>
              <div className=''>{x.longUrl}</div>

            </div>
            <div className='short-url'>
              <div className=''>{x.shortenUrl}</div>

            </div>

          </li>)
        })}
      </ul>
    </div>
  )
}

export default UrlOutputs