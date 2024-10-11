import React from 'react'

export default function WhyBuildpiper() {
    const whydata = [
        {   id:'1',
            title: 'Reduction in Time & Cost',
            x: '10x',
            why_icon: 'assest/icon/10x-icon.png',
            why_dis: 'Launch Features Faster with Day Zero Robust Delivery Platform'
        },
        {   id:'2',
            title: 'Increase in Efficiency & Release Velocity',
            x: '8x',
            why_icon: 'assest/icon/8x-icon.png',
            why_dis: 'Reliable Deployments with 360 degree observability'
        },
        {  id:'3',
            title: 'Increase in Team Productivity',
            x: '4x',
            why_icon: 'assest/icon/10x-icon.png',
            why_dis: 'Auto- Resolved Dependencies with focus on Best Quality Code & UX'
        }
    ]
    // console.log(whydata)
    return (
        <>
            <div className='full-w bp-pt100'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-lg-4'>
                            <h3 className='bp-font-normal'>"When it comes to Microservices Delivery"</h3>
                            <h4 className='secondry-font txt-blue bp-heading2 txt-blue bp-pt1 '>Its Alway Buildpiper</h4>
                        </div>
                        <div className='col-lg-8'>
                            <div className='why-inner-sec'>

                                <ul>
                                    {
                                        whydata.map((whyval, index) => {
                                            return (
                                                <li key={index}>
                                                    <div>
                                                        <h5 className='bp-heading2 bp-font-bold txt-yellow'>{whyval.x} <span><img src={whyval.why_icon} alt="" /></span> </h5>
                                                        <h6 className='bp-heading4 bp-font-normal txt-black'>{whyval.title}</h6>
                                                        <p className='bp-small-para'>{whyval.why_dis}</p>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
