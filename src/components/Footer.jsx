import React from 'react';

const Footer = ({ totalResults }) => {
    return (
        <div className="footer flex justify-between text-gray-600 mt-10 text-sm">
            <p className='text-lg text-black'>  {totalResults} Results</p>
        </div>
    );
};

export default Footer;