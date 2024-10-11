import React, { useState } from 'react'
export default function HappyClient() {
    const [toggle, setToggle] = useState(2)

    function updateToggle(id) {
        setToggle(id)
    }
    const toptab = { color: 'red', listStyleType: 'none', display: 'flex', }
    const listdata = { padding: '10px', fontWeight: '600', color: '#000' }
    return (
        <>
            <div className='full-w testimonial bp-pt100'>
                <div className='container'>
                    <p className='bp-para text-uppercase txt-blue text-center bp-font-normal'>Testimonials</p>
                    <h3 className='bp-heading3 txt-black text-center bp-font-normal'>What they say about Us</h3>



                    {/* tab content start */}
                    <div className='tab-content'>
                        <div className={toggle === 1 ? "show-content activedata" : "content"}>
                            {/* <h3> name is : {props.age}</h3> */}
                            <p>tabdata 1</p>
                        </div>

                        <div className={toggle === 2 ? "show-content activedata" : "content"}>
                            <h3>Welcome tab2 </h3>
                            {/* <p>{props.name}</p> */}
                        </div>

                        <div className={toggle === 3 ? "show-content activedata" : "content"}>
                            <h3>Welcome tab3 </h3>
                        </div>
                        <div className={toggle === 4 ? "show-content activedata" : "content"}>
                            <h3>Welcome tab4 </h3>
                        </div>
                        <div className={toggle === 5 ? "show-content activedata" : "content"}>
                            <h3>Welcome tab5 </h3>
                        </div>
                    </div>
                    {/* end  */}

                    {/* tab button start */}
                    <ul className='tab bg-gray1' style={toptab}>
                        <li style={listdata} className={toggle === 1 ? 'active-tab' : 'tab'} onClick={() => updateToggle(1)} >Benefits For You</li>
                        <li style={listdata} className={toggle === 2 ? 'active-tab' : 'tab'} onClick={() => updateToggle(2)}> Check Your Eligibility </li>
                        <li style={listdata} className={toggle === 3 ? 'active-tab' : 'tab'} onClick={() => updateToggle(3)}> Interest Rates</li>
                        <li style={listdata} className={toggle === 4 ? 'active-tab' : 'tab'} onClick={() => updateToggle(4)} >Fee and Charges</li>
                        <li style={listdata} className={toggle === 5 ? 'active-tab' : 'tab'} onClick={() => updateToggle(5)}> Got an Query </li>

                    </ul>
                    {/* end */}





                </div>
            </div>
        </>
    )
}
