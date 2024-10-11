import React from 'react'


export default function BuildpiperFeature() {
    const buildpiper_feature = [
        {  id:'1',
            feature_heading: 'Canary/Blue-Green Deployment',
            feature_short_dis: 'Rolling out so many updates is essential. What we think is essential, should never become a customer churn factor. Try our deployments',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Canary/Blue-Green Deployment Dashboard',
            feature_topic:["one", "Two", "three"]
        },
        {   id:'2',
            feature_heading: 'Multi Hybrid Cloud Deployments',
            feature_short_dis: 'More the number of clouds to work with, greater the flexibility - Right ? We ensure its flexible and not a hassle!',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Multi Hybrid Cloud Deployments',
            feature_topic:["Five", "Sex"]
        },
        {   id:'3',
            feature_heading: 'Dynamic Environments',
            feature_short_dis: 'When you are not using the infrastructure(or you dont plan to), lets switch it off automatically for a while. Because a penny saved is a penny earned!',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Dynamic Environments',
            feature_topic:["Seven", "Eight", "Nine"]
        },
        {   id:'4',
            feature_heading: 'Spot Instances',
            feature_short_dis: 'If reducing your cloud cost comes with a catch, we handle it right with absolute automation. Leverage Spot Instances to save upto 40% of compute costs.',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Spot Instances',
            feature_topic:["Ten", "Eleven", "12"]
        },

        {   id:'5',
            feature_heading: 'Jira Integration',
            feature_short_dis: 'If its about tracking issues, then Jira is always the first choice and what better than keeping a track of all your changes. ',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Jira Integration',
            feature_topic:["Apple", "Mengo", "Banana"]
        },

        {   id:'6',
            feature_heading: 'Step Catalog',
            feature_short_dis: 'Who doesnt like a plug-in-play model?. Try our step catalog. ',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Step Catalog',
            feature_topic:["one", "Two", "three"]
        },

        {   id:'7',
            feature_heading: 'Seamless Rollbacks',
            feature_short_dis: 'N-1,2, 3 and so on..Rollbacks and Recovery is not an afterthought. ',
            feature_img: 'assest/dashboard/bluegreen-screen.png',
            feature_alt: 'Seamless Rollbacks',
            feature_topic:["1", "2", "3"]
        }
    ]
   
    return (

        <>
            <div className='full-w bp-pt100 bp-step '>
                <div className='container'>
                    <p className='bp-para text-uppercase txt-blue text-center bp-font-normal'>Features1234</p>
                    <h3 className='bp-heading3 txt-black text-center bp-font-normal'>Empowering your teams with powerful features</h3>
                    <ul>
                        {
                            buildpiper_feature.map((datalist) => {
                                return (
                                    <>
                                        <li key={datalist.id}>
                                            <div className='feature-left'>
                                                <h3 className='bp-font-normal'>{datalist.feature_heading}</h3>
                                                <p className='bp-font-normal-light bp-mt2 txt-gray'>{datalist.feature_short_dis}</p>
                                                    <ul className='f_list'>
                                                        {
                                                            datalist.feature_topic.map((innerdata)=>{
                                                                return(
                                                                    <li key={innerdata}>{innerdata}</li>
                                                                )
                                                            })  
                                                        }
                                                    </ul>
                                            </div>
                                            <div className='feature-right'>
                                                <img src={datalist.feature_img} alt={datalist.feature_alt} />
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}
