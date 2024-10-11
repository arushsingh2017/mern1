import React from 'react'
import PlayBtn from './PlayBtn'

export default function BannerHero() {
    return (
        <>
            <div className='hero-slider full-w'>
                <div className='container'>
                    <div className='hero_wrap_inner text-center'>
                        <h1 className='bp-heading1 bp-font-extra-bold'>1Delivering software just got faster.</h1>
                        <p className='bp-pt2'>Unifying and enhancing the most trusted DevsecOps solutions into a single, powerful delivery platform.</p>
                    </div>
                    <PlayBtn/>
                </div>               
            </div>
        </>
    )
}
