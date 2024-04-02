import React from 'react'
import {images} from '../../constants'
const SubHeading = ({title}) => {
  return (
    <div styles={{marginBottom: '1rem'}}>
      <p className='p__cormorant'>{title}</p>
      <img src={images.spoon} alt="spoon__img" />
    </div>
  )
}

export default SubHeading