import React from 'react'
import styke  from'./Casestudy.module.css'

export default function Casestdy() {
    const casestudydata = [
        {   id:'1',
            clientname: 'Trademo',
            casestudy_title: 'No more Global Configuration Drift: Achieved Multi-Cloud Standardization with Reliability &..',
            casestudy_short_dis: 'No more Global Configuration Drift: Achieved Multi-Cloud Standardization with Reliability &..',
            casestudy_img: 'assest/case-studies/tradmo-case-study-thum.png',
            casestudy_logo: 'assest/case-studies/trademo-logo.png'
        },
        {   id:'2',
            clientname: 'Lenskart',
            casestudy_title: '80% deployment time & cost reduction was achieved by Lenskart',
            casestudy_short_dis: 'Global supply chain intelligence platform achieved scalable operational excellence.',
            casestudy_img: 'assest/case-studies/lenskart-case-study-thum.png',
            casestudy_logo: 'assest/case-studies/lenskart-logo.png'
        },
        {   id:'3',
            clientname: 'ExtraMarks',
            casestudy_title: 'ExtraMarks got 10x faster to the market with their new product releases',
            casestudy_short_dis: 'A complete application & infrastructure modernization that resulted in Faster product release & impressive cost savings.',
            casestudy_img: 'assest/case-studies/extramark-case-study-thum.png',
            casestudy_logo: 'assest/case-studies/extramarks-logo.png'
        }
    ]
    // console.log(casestudydata)
    return (
        <>
            <div className='full-w bp-pt100'>
                <div className='container'>
                    <p className='bp-para text-uppercase txt-blue text-center bp-font-normal'>Case Studies</p>
                    <h3 className='bp-heading3 txt-black text-center bp-font-normal'>World’s top brands trust Opstree</h3>
                    <div className='case-study-inner bp-pt4'>
                        <ul>
                            {
                                casestudydata.map((cdata) => {
                                    return (
                                        <>
                                            <li key={cdata.id}>
                                                <div className='case-study-brif text-center bp-pt2'>
                                                    <h4 className='bp-font-bold bp-heading3'>{cdata.clientname}</h4>
                                                    <h5 className='bp-heading4 bp-font-normal txt-white '>{cdata.casestudy_title}</h5>
                                                    <p className='bp-small-para bp-pb2'>{cdata.casestudy_short_dis}</p>
                                                </div>
                                                <div className='client-thum-img'> <img src={cdata.casestudy_img} alt="" /> </div>
                                                <div className=  {styke['client-logo']}> <img src={cdata.casestudy_logo} alt="" /> </div>
                                            </li>
                                        </>
                                    )
                                })
                            }
                        </ul>

                            <div className='bp-pt4' style={{width:'200px', margin:'0 auto'}}>
                                <a href='#' className='bp-btn-secondry'> Veiw All Case Studies</a>
                            </div>
                      
                    </div>
                </div>
            </div>
        </>
    )
}
