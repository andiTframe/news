import React from 'react';
import {Link} from "react-router-dom";
import imgLong from '../../assets/812x100.jpg'

const BannerSectionThree = () => {
    return (
        <div className="padding5050 theme3_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 m-auto">
                        <div className="banner1 border-radious5">
                            <Link to="/"><img src={imgLong} alt="banner"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSectionThree;