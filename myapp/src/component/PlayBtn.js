import React from 'react'

export default function PlayBtn() {
    const play_icon ="assest/icon/play.png"
    const paly_icon_hover= "assest/icon/bar-chart-fill.png"
  return (
    <>
        <div className='btn-wrap-section bp-pt2'>
            <div className='book-demo'>
                <a className='bp-btn-secondry'>Book a demo</a>
            </div>
            <div className='play-wrap' style={{marginLeft:'20px'}}>
                <div className='play-btn'> <img src={play_icon} alt="" /> </div>
                <div className='play-btn-hover'> <img src={paly_icon_hover} alt="" /></div>
                <span className='try-txt'>Try Buildpiper </span>
            </div>
        </div>
    </>
  )
}
