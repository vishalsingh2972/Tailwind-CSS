import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants/index.js';

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img 
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
              </a>
            </li> 
          ))}
          
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        {/* <div>hamburger logo</div> */}     
      </nav>
    </header>
  )
}

export default Nav