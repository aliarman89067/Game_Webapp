import React,{ useState } from 'react'
import './Header.css'
import { game1, paper } from '../../assets'
import { arrowleft } from '../../assets'
import { arrowright } from '../../assets'
import { data } from '../../constant'
import Info from '../info/Info'

const Header = () => {
  const [number, setNumber] = useState(0)

  const increament = () => {
    setNumber(number + 1)
    if(number === data.length - 1){
      setNumber(0)
    }
    clearTimeout(setTime)
  }

  const setTime = setTimeout(()=> {
   increament()
 },5000)

  const decreament = () => {
    setNumber(number - 1)
    if(number === 0){
      setNumber(data.length - 1)
    }
    clearTimeout(setTime)
  }
  return (
    <div>
    <div className='app__header'>
      <div className='app__header-img'>
        <img src={data[number].imgUrl} alt="game1" />
      </div>
      <div className='app__header-info'>
        <div className='app__header-heading'>
          <h1>{data[number].title}</h1>
        </div>
        <div className='app__header-para'>
          <p>{data[number].para}</p>
        </div>
        <div className='app__header-icon'>
        <div className='app__header-icon_box'>
          <img src={arrowleft} alt="arrow" onClick={decreament} />
        </div>
        <div className='app__header-icon_box'>
          <img src={arrowright} alt="arrow" onClick={increament} />
        </div> 
        </div>
      </div>
    </div>
    <Info number={number} />
    </div>
  )
}

export default Header
