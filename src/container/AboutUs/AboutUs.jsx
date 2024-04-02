import React from 'react'
import './AboutUs.css';
import {images} from '../../constants'

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'>
        <img src={images.G} alt="letter g" />
      </div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content-about'>
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src={images.spoon} alt="spoon image" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos in velit facere quasi modi optio error nesciunt sunt, quo, rem vel ullam veritatis ipsam voluptatibus aspernatur eaque quibusdam aperiam!</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        <div className='app__aboutus-knife-img'>
          <img src={images.knife} alt="knife image" />
        </div>
        <div className='app__aboutus-content-history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt="spoon image" />
          <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, eos in velit facere quasi modi optio error nesciunt sunt, quo, rem vel ullam veritatis ipsam voluptatibus aspernatur eaque quibusdam aperiam!</p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
        </div>
    </div>
  )
}

export default AboutUs