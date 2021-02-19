import React, {Fragment, useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import SidebarMenu from "../SidebarMenu";
import SearchModal from "../SearchModal";

export const menus = [
    {
        linkText: 'Trending',
        link: '/category/trending'
    },
    {
        linkText: 'World',
        link: '/category/world'
    },
    {
        linkText: 'Politics',
        link: '/category/politics'
    },
    {
        linkText: 'Business',
        link: '/category/business'
    },
    {
        linkText: 'Tech',
        link: '/category/tech'
    },
    {
        linkText: 'Health',
        link: '/category/health'
    },
    {
        linkText: 'Sports',
        link: '/category/sports'
    },
    {
        linkText: 'Style',
        link: '/category/style'
    },
    {
        linkText: 'Magazine',
        link: '/category/magazine'
    },
    {
        linkText: 'Food',
        link: '/category/food'
    },
    {
        linkText: 'Contact',
        link: '/contact'
    },
];

const MainMenuThree = ({className}) => {
    const [searchShow, setSearchShow] = useState(false);
    const [sideShow, setSideShow] = useState(false);
    const history =useHistory();
    return (
        <Fragment>
            <div className={`menu4 ${className ? className : ''}`}>
                    <div className="main-menu">
                        <div className="main-nav clearfix is-ts-sticky">
                            <div className="row justify-content-between">
                                <nav className="navbar navbar-expand-lg col-lg-12 align-self-center">
                                    <div className="site-nav-inner">
                                        <button className="navbar-toggler" onClick={() => setSideShow(true)}>
                                            <FontAwesome name="bars"/>
                                        </button>
                                        <div id="navbarSupportedContent"
                                             className="collapse navbar-collapse navbar-responsive-collapse">
                                                 <div onClick={()=>history.push('/')} className='headerLogoA'>
                                                     <p>News Protal</p>
                                                 </div>
                                            <ul className="nav navbar-nav" id="scroll">
                                                {menus.length > 0 ? menus.map((item, i) => (
                                                    <li key={i}
                                                        className={`
                                                ${item.child ? 'dropdown' : ''}
                                                nav-item`}>
                                                        {item.child ? <NavLink onClick={e => e.preventDefault()} to="/"
                                                                               className="menu-dropdown"
                                                                               data-toggle="dropdown">{item.linkText}
                                                                <FontAwesome
                                                                    name={item.icon}/></NavLink>
                                                            : <NavLink to={item.link} className="menu-dropdown"
                                                                       data-toggle="dropdown">{item.linkText}
                                                                <FontAwesome
                                                                    name={item.icon}/></NavLink>}

                                                        {item.child ?
                                                            <ul className="dropdown-menu" role="menu">
                                                                {item.submenu.map((sub_item, i) => (
                                                                    <li key={i}
                                                                        className={`${sub_item.child ? 'dropdown-submenu' : null}
                                                        `}>
                                                                        {sub_item.child ?
                                                                            <NavLink onClick={e => e.preventDefault()}
                                                                                     to="/">{sub_item.linkText}</NavLink>
                                                                            : <NavLink
                                                                                to={sub_item.link}>{sub_item.linkText}</NavLink>}
                                                                        {sub_item.third_menu ?
                                                                            <ul className="dropdown-menu">
                                                                                {sub_item.third_menu.map((third_item, i) => (
                                                                                    <li key={i}><NavLink
                                                                                        to={third_item.link}>{third_item.linkText}</NavLink>
                                                                                    </li>
                                                                                ))}
                                                                            </ul> : null}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                            : null
                                                        }
                                                    </li>
                                                )) : null}
                                            </ul>
                                        </div>
                                        <SidebarMenu className="themeDark" sideShow={sideShow} setSideShow={setSideShow}
                                                     menus={menus}/>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
            </div>
            {searchShow ?
                <SearchModal setSearchShow={setSearchShow} searchShow={searchShow}/>
                : null
            }
        </Fragment>
    );
};

export default MainMenuThree;