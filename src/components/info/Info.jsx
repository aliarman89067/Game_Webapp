import React from 'react'
import './Info.css'
import { data } from '../../constant'
const Info = ({number}) => {
  return (
    <div className='app__info'>
      <div className='app__info-content'>
        <h1>{data[number].title}</h1>
        <p>{data[number].para}</p>
      </div>
      <div className='app__info-btns'>
        <button>TRAILER</button>
        <button>DOWNLOAD</button>
      </div>
    </div>
  )
}

export default Info
