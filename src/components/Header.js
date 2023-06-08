import React from 'react';
// images
import Logo from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img src={Logo} alt=''></img>
        </a>
        {/* button */}
        <Link to='work' activeClass ='active' smooth={true} spy={true}><button className='btn btn-sm'>Work with me</button></Link>
      </div>
    </div>
  </header>;
};

export default Header;
