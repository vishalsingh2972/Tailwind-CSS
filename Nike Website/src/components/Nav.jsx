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
            alt="Hamara Nike Logo"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
              href={item.href}
              className="font-montserrat leading-normal text-lg text-red-500"
              >
                {item.label}
              </a>
            </li>
          ))}

{/* Direct way via links
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about-us">About Us</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact-us">Contact Us</a>
          </li>       */}
        </ul>

        <div className="hidden max-lg:block">
          <img 
            src={hamburger}
            alt="3 dash wala Logo"
            width={25}
            height={25}
          />  
        </div>  
      </nav>
    </header>
  )
}

export default Nav