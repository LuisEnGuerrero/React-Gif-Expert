import React from 'react'

export const GifGridItems = ({ title, url }) => {
  return (
    <div className='card animate__animated animate__backInDown'>
        <img src={ url } alt={ title }/>
        <h5>{ title }</h5>
    </div>
  )
}
