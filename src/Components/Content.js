import React from 'react'
import ImageOne from '../Images/Hawk.jpg';
import ImageTwo from '../Images/Pyramid.jpg';

const Content = () => {
    return (
        <div>  
            <div className="flex flex-col justify-center items-center
            bg-white h-screen font-mono py-50">
           <img src= {ImageOne} alt="Hawk" className="h-full rounded mb-20 shadow"/>
           </div>

           <div className="flex flex-col justify-center items-center">
           <h2 className="text-2xl mb-2">Booking</h2>
           <img src= {ImageTwo} alt="Pyramid" className="h-full rounded mb-20 shadow"/>
          

           
           </div>
           
          
       </div>
    )
}

export default Content
