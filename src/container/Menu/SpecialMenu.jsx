import React from 'react'
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './Menu.css'

const SpecialMenu = () => {
  return (
    <div className='app__menu flex__center' id='#menu'>
      <div className='app__menu-title'>
        <SubHeading title='Menu That Fits Your Palatte' />
        <h1 className='headtext__cormorant'>Today's Special</h1>
      </div>
      <div className='app__menu-content '>
        <div className='app__menu-content-wines'>
          <p className='app__menu-wines-p'>Wines & Beers</p>
          <div className='app__menu-content-info'>
            {
              data.wines.map((wine, index) => (
                <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
              ))}
          </div>
        </div>
        <div className='app__menu-content-img'>
          <img src={images.menu} alt="cocktail menu img" />
        </div>
        <div className='app__menu-content-cocktails '>
          <p className='app__menu-cocktails-p'>Cocktails</p>
          <div className='app__menu-content-info'>
            {
              data.cocktails.map((cocktail, index) => (
                <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
          </div>
        </div>

      </div>
      <div>
        <button type='button' className='custom__button' style={{marginBottom: '2rem'}}>Learn More</button>
      </div>
    </div>
  )
}

export default SpecialMenu