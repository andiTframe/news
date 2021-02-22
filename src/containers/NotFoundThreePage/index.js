import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import BannerSection from "../../components/BannerSection";
import MainMenuThree from "../../components/MainMenuThree";

import erroImg from '../../doc/img/notFound.jpg'
import Footer from '../Footer';

const NotFoundThreePage = () => {
    return (
        <Fragment>
           <div className='theme-4'>
           <MainMenuThree/>
            <div style={{paddingTop:70}} className="inner_table">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="space-50"/>
                            <div className="area404 text-center">
                                <img src={erroImg} alt="404"/>
                            </div>
                            <div className="space-30"/>
                            <div className="back4040 text-center col-lg-6 m-auto">
                                <h3>Page not found</h3>
                                <div className="space-10"/>
                                <p>Sorry the page you were looking for cannot be found. Try searching for the best match
                                    or browse the links below:</p>
                                <div className="space-20"/>
                                <div className="button_group"><Link to="/" className="cbtn4">GO TO HOME</Link>
                                    <Link to="/contact" className="cbtn3">contact us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-50"/>
            </div>

            <div className="space-30"/>
           </div>
            <BannerSection/>
            <Footer/>
        </Fragment>
    )
};

export default NotFoundThreePage;