import React from 'react';
import FontAwesome from "../uiStyle/FontAwesome";
import {Link} from "react-router-dom";
import { menus } from '../MainMenuThree';



const CategoryFour = () => {
    return (
        <div className="category4 mb30 border-radious5 shadow7 white_bg padding20">
            <h3 className="widget-title">Categories</h3>
            <ul>
                {menus.slice(0,9).map((item, i) => (
                    <li key={i}><Link to={item.link}>{item.linkText}<FontAwesome name="play"/></Link></li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryFour;