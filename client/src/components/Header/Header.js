import React, { useState } from 'react';
import { MenuLogOff } from './MenuLogOff';
import { MenuLogOn } from './MenuLogOn';
import './Header.css';

const Header = (props) => {
    const [ hamburguer, setHamburguer ] = useState(false);
    const handleClick = () => {
        setHamburguer(!hamburguer);
    }
    return (
        <header>
            <nav className='Nav-header'>
                <h1 className='logo-header'><a href='/'>Short Grind<i className='fa fa-gamepad'></i></a></h1>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={hamburguer ? 'fa fa-times' : 'fa fa-bars'}></i>
                </div>
                <ul className={hamburguer ? 'nav-menu active' : 'nav-menu'}>
                    {
                        props.loggedIn ? (
                            MenuLogOn.map((item, index) => {
                                return (<li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>);
                            })
                        ) : (
                            MenuLogOff.map((item, index) => {
                                return (<li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>);
                            })
                        )
                    }
                </ul>
                {
                    props.loggedIn
                    ? <a className='btn btn-primary btn-medium' href='/logout'>Log out</a>
                    : <a className='btn btn-primary btn-medium' href='/sign-up'>Sign Up</a>
                }
            </nav>
        </header>
    );
}

export default Header;