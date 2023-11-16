import React from 'react'
import './index.css'


const index = ({img,name}) => {
  return (
      
      <div className="card_content">
      <div className="card_img">
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className='card_title'>{name}</h2>
      </div>
      
      
    </div>
  )
}

export default index
