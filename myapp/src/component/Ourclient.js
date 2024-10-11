import React from 'react'
import Slider from "react-slick";

export default function Ourclient() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true
  };

  const ourclient = [
    {
      id: '1',
      clientname: 'Accenture',
      clientlogo: 'assest/client-logo/accenture-dark-logo.png',
      feature: [{name:'manish', edu:'bca', adds:'delihi'}]
    },
    {
      id: '2',
      clientname: 'Letstransport',
      clientlogo: 'assest/client-logo/letstransport.png',
      feature: [{name:'deepak', edu:'BA', adds:'delihi'}]
    },
    {
      id: '3',
      clientname: 'Trademo',
      clientlogo: 'assest/client-logo/trademo-logo.png',
      feature: [{name:'Ashu', edu:'BA', adds:'Pune'}]
    },
    {
      id: '4',
      clientname: 'Wheebox',
      clientlogo: 'assest/client-logo/wheebox.png',
      feature: [{name:'sadeep', edu:'BEd', adds:'UP'}]
    },
    {
      id: '5',
      clientname: 'Letstransport',
      clientlogo: 'assest/client-logo/letstransport.png',
      feature: [{name:'Pradeep', edu:'10th', adds:'Mumbai'}]
    },
    {
      id: '6',
      clientname: 'Trademo',
      clientlogo: 'assest/client-logo/trademo-logo.png',
      feature: [{name:'Ankit', edu:'bca', adds:'Noida'}]
    },
  ]
  // console.log(ourclient)
  return (
    <>
      <div className='full-w bp-pt100 bp-client'>
        <div className='container'>
          <p className='bp-para text-uppercase txt-blue text-center bp-font-normal'>Our Partners</p>
          <h3 className='bp-heading3 txt-black text-center bp-font-normal'>World’s top brands trust Opstree</h3>
          <div id="photo-gallery-wrap" className='bp-pt5'>
            <Slider {...settings}>
              {
                ourclient.map((data) =>
                (
                  <div key={data.id}>
                    <div className='bp-client'>
                      <img src={data.clientlogo} alt={data.clientname} />
                      <ul>
                        {data.feature.map((dd, index) => (
                          <li key={index}>
                              <p>{dd.name}</p>
                              <p>{dd.adds}</p>
                              <p>{dd.edu}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )

                )
              }
            </Slider>
          </div>

        </div>
      </div>
    </>
  )
}
