import React from 'react'
import InsightTab from './InsightTab'
import Container from './Container'

export default function Insights() {
  const insight_dashboard= 'assest/dashboard/maturity-insights-dashboard.jpg'
  const insighttabicon1 ='assest/icon/bar-chart-fill.png'
  const insighttabicon2 ='assest/icon/code-s-slash-line.png'
  const insighttabicon3 ='assest/icon/caravan-fill.png'
  const insighttabicon4 ='assest/icon/support.png'
  return (
   
      <Container>
       <div className='full-w bp-pt100 bg-shap1'>
          <div className='container'>
            <div className='d-flex row' style={{justifyContent:'space-between'}}>
              <div className='maturity-insights-left col-lg-8' style={{marginLeft:'-9%'}}>
                <img src={insight_dashboard} alt="" />
              </div>
              <div className='maturity-insights-right col-lg-4'>
                <h3 className='bp-font-normal'>Maturity Insights</h3>
                <p>Our developers are actively contributing to cloud native open source projects.</p>
                <div className='maturity-insights-feature '>
                   <InsightTab name=" Dora Metrics " icon={insighttabicon1}/>
                   <InsightTab name=" Code Quality " icon={insighttabicon2}/>
                   <InsightTab name=" Delivery Quality Check " icon={insighttabicon3}/>
                   <InsightTab name="  Cost Saving Maturity " icon={insighttabicon4}/>
                
                </div>
              </div>
            </div>
          </div>

       </div>
       </Container>
   
  )
}
