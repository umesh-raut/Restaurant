import React from 'react'
import './MenuItem.css'

const Menuitem = ({title, price, tags}) => {
  return (
    <div className='app__menuitem'>
      <div className='app__menuitem-head'>
        <div className='app__menuitem-name'>
          <p className='p__cormorant' style={{color:'#DCCA87'}}>{title}</p>
        </div>
        <div className='app__menuitem-line'/>
        <div className='app__menuitem-price'>
          <p className='p__cormorant'>{price}</p>
        </div>
      </div>
      <div className='app__menuitem-tags'>
        <p className='p__opensans' style={{color: '#545454'}} >{tags}</p>
      </div>
    </div>
  )
}

export default Menuitem