import React from 'react'
import {images} from '../../constants'
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home' >
      <div className='app__wrapper-info'>
        <SubHeading title='Chase the new flovor'/>
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{margin:'2rem 0'}}>Savor the spirit of Nepal at The Unique Cusine, your gateway to an unforgettable gastronomic journey.</p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className='app__wrapper-img'>
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header