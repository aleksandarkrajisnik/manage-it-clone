import React from 'react';
import style from './header.module.scss';
import { Link,NavLink } from 'react-router-dom';
import Logo from '../../assets/logoBlack.png'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {

    const [showDropdown, setShowDropdown] = useState(false);
    const [MobileDropdown, setMobileDropdown] = useState(false);
    const [childMobileDropdown, setChildMobileDropdown] = useState(false);
    return ( 
        <nav>
<div className={style.header}>
            
           
            
            <Link className={style.header__logo} to={'/'}>
                <img src={Logo} alt="" />
            </Link>

            <div className={style.header__links}>
                    <NavLink  to={'/'}>NASLOVNA</NavLink>
                <div className={style.header__dropdownHolder}>
                    <NavLink 
                    onMouseEnter={() => setShowDropdown(true)} 
                    onMouseLeave={() => setShowDropdown(false)} 
                    to={'/usluge'}>USLUGE <FontAwesomeIcon icon={faChevronDown}/></NavLink>

                   
                        <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}   className={style.header__dropdownMenu}>
                        <NavLink to={'/grafickidizajn'}>Grafički dizajn</NavLink>
                        <NavLink to={'/webdizajn'}>Web dizajn</NavLink>
                        <NavLink to={'/digitalnimarketing'}>Digitalni marketing</NavLink>
                        </div>
                     
                
                </div>
                    <NavLink to={'/kontakt'}>KONTAKT</NavLink>
            </div>

            <div className={style.header__social}>
                <Link to={'/kontakt'} className={style.bookingButton}>ZAKAŽITE TERMIN</Link>
                <div className={style.instagram}>
                   <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                </div>
                <div className={style.facebook}>
                    <a href="https://www.instagram.com"><FontAwesomeIcon icon={faFacebook}/></a>
                </div>
            </div>

            <div className={style.dropdownHolder2}>
                {!MobileDropdown && <FontAwesomeIcon onClick={() => {setMobileDropdown(!MobileDropdown); console.log(MobileDropdown)}} icon={faBars}/>}
                {MobileDropdown && <FontAwesomeIcon onClick={() => {setMobileDropdown(!MobileDropdown); console.log(MobileDropdown)}} icon={faX}/>}
                {MobileDropdown && (<div className={style.dropdown2}>
                    <NavLink to={'/'}>NASLOVNA</NavLink>

                    <a 
                    className={style.childToggler} 
                    onClick={() => setChildMobileDropdown(!childMobileDropdown)}>
                        USLUGE 
                    {!childMobileDropdown && <FontAwesomeIcon icon={faChevronDown}/>}
                    {childMobileDropdown && <FontAwesomeIcon icon={faChevronUp}/>}
                    </a>

                        {childMobileDropdown && (
                        <div className={style.dropdownChild}>
                            <NavLink to={'/grafickidizajn'}>Grafički dizajn</NavLink>
                            <NavLink to={'/webdizajn'}>Web dizajn</NavLink>
                            <NavLink to={'/digitalnimarketing'}>Digitalni marketing</NavLink>
                        </div>)}
                    <NavLink to={'/kontakt'}>KONTAKT</NavLink>
                </div>)}

            </div>

            
        </div>
        </nav>
        
     );
}

export default Header;