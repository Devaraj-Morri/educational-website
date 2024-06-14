import React from 'react'
import './Campus.css'
import gallery_img1 from "../../assets/gallery-1.png"
import gallery_img2 from "../../assets/gallery-2.png"
import gallery_img3 from "../../assets/gallery-3.png"
import gallery_img4 from "../../assets/gallery-4.png"
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_img1} alt="" />
            <img src={gallery_img2} alt="" />
            <img src={gallery_img3} alt="" />
            <img src={gallery_img4} alt="" />
        </div>
        <button className='btn campus-btn'>see more here <img src={white_arrow} alt="" className='dark-icon'/></button>

    </div>
  )
}

export default Campus