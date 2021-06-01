import React from 'react'
import ImageOne from '../Images/Hawk.jpg';
import ImageTwo from '../Images/Pyramid.jpg';

const Content = () => {
    return (
        <>
            <div className='center-content'>
                <div className='menu-card'>
                    <img src={ImageOne} alt="Hawk" className="h-full rounded mb-20 shadow" />
                    <p className="bg-blue-400 mb-2 rounded-full ">Your target is our Vision</p>
                </div>
            </div>
            <div className='center-content'>
                <div className='menu-card'>
                    <h2 className="text-2xl mb-4 ">Select Below</h2><span>$40 per Hour</span>
                    <img src={ImageTwo} alt="Pyramid" className="h-full rounded mb-20 shadow" />
                </div>


            </div>


        </>
    )
}

export default Content
