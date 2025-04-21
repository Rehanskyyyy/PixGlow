import React from 'react';

const Footer = () => {
  return (
    <div className='flex justify-center items-center w-full text-gray-700 font-semibold fixed bottom-0 left-0 h-12 bg-white z-50 px-4 text-center text-sm sm:text-base'>
      <span>
        &copy; {new Date().getFullYear()} All rights reserved | Created by{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/rehan-mohammad-6717a4345/'
        >
          Rehan
        </a>
      </span>
    </div>
  );
};

export default Footer;
