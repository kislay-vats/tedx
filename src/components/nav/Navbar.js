import { Link } from "react-router-dom";
import "./Navbar.css";
// import Dropdown from "./Dropdown";
import { useState } from "react";

import Button from "../Button";
import logoTedx from '../../images/tedx-2.jpg'
import logoTedx2 from '../../images/logotedx.png'
function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <div className="fixed-top">
        <nav
          className={navbar ? "navabar active fixed-top" : "navabar fixed-top"}
        >
          <Link to="/" className="navabar-logo" onClick={closeMobileMenu}>
        
           <img src={ navbar ? logoTedx : logoTedx2} style={{width:"170px",height:"auto",marginTop:"11px"}} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nava-menu active" : "nava-menu"}>
            <li className="nava-item buttoned button-left ">
              <a href="#attend" className="nava-links " onClick={closeMobileMenu}>
                Attend
              </a>
            </li>
            <li
              className="nava-item buttoned button-left"
              // onMouseEnter={onMouseEnter}
              // onMouseLeave={onMouseLeave}
            >
              <a
                href="#speakers"
                className="nava-links "
                onClick={closeMobileMenu}
              >
                Speakers
              </a>
              {/* {dropdown && <Dropdown />} */}
            </li>
            <li className="nava-item buttoned button-left ">
              <a
                href="#volunteers"
                className="nava-links "
                onClick={closeMobileMenu}
              >
                Volunteers
              </a>
            </li>
            <li className="nava-item buttoned button-left ">
              <a
                href="#partners"
                className="nava-links "
                onClick={closeMobileMenu}
              >
                Partners
              </a>
            </li>
            <li className="nava-item buttoned button-left ">
              <a
                href="#contactUs"
                className="nava-links "
                onClick={closeMobileMenu}
              >
                <Button />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
