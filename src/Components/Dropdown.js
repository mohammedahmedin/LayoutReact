import React from 'react'
import { Link } from 'react-router-dom';

const Dropdown = () => {
    return (
        
        <div className='grid grid-rows-4 text-center items-center bg-red-500'>
        <Link className="p-4" to="/">
      Home
      </Link>
      <Link className="p-4" to="/Menu">
      Menu
      </Link>
      <Link className="p-4" to="/About">
      About
      </Link>
      <Link className="p-4" to="/Contact">
      Contact
    </Link> 
      </div>
      

    );
};

export default Dropdown
