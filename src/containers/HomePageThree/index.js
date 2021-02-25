import React, {Fragment} from 'react';
import MainMenuThree from "../../components/MainMenuThree";
import HeroArea from "../../components/HeroArea";
import TrendingNewsThree from "../../components/TrendingNewsThree";
import TechCarousel from "../../components/TechCarousel";
import BusinessImageCarousel from "../../components/BusinessImageCarousel";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import {Link} from "react-router-dom";
import VIdeoNewsSection from "../../components/VIdeoNewsSection";
import InternationalNews from "../../components/InternationalNews";
import ScienceNews from "../../components/ScienceNews";
import SportsNewsTwo from "../../components/SportsNewsTwo";
import GalleryCarousel from "../../components/GalleryCarousel";
import WidgetTabThree from "../../components/WidgetTabThree";
import FollowUs from "../../components/FollowUs";
import WidgetOpinionNews from "../../components/WidgetOpinionNews";
import NewsLetter from "../../components/NewsLetter";
import CategoryFour from "../../components/CategoryFour";
import banner4 from '../../doc/img/bg/banner4.png';
import banner42 from '../../doc/img/bg/banner42.png';
import Footer from '../Footer';




const HomePageThree = () => {
    return (
        <Fragment>
            <div className="wrapper_welcome">
                <MainMenuThree className="home4menu"/>
                <HeroArea/>
                <div className="bg4">
                    <div className="space-60"/>
                    <div className="total3 mb30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xl-8">
                                    <TrendingNewsThree/>
                                    <TechCarousel/>
                                    <BusinessImageCarousel/>
                                </div>
                                <div className="col-md-6 col-xl-4 d-md-none d-xl-block">
                                    <WidgetFinanceTwo  title="Finance"/>
                                    <div className="banner2 mb30 border-radious5">
                                        <Link to="/">
                                            <img src={banner4} alt="banner4"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <VIdeoNewsSection/>
                    </div>
                    <div className="inernational4">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xl-8">
                                    <InternationalNews  className="mb30" />
                                    <div className="banner_area mb30 xs-mt60">
                                        <Link to="/">
                                            <img src={banner42} alt="banner42"/>
                                        </Link>
                                    </div>
                                    <ScienceNews/>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <SportsNewsTwo/>
                                        </div>
                                        <div className="col-md-6">
                                            <GalleryCarousel/>
                                            <WidgetTabThree/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-xl-4">
                                    <div className="row">
                                        <div className="col-lg-6 col-xl-12 col-md-6">
                                            <WidgetOpinionNews/>
                                        </div>
                                        <div className="col-md-6 col-xl-12">
                                            <NewsLetter titleClass="white" className="news_letter4 border-radious5"/>
                                            <CategoryFour/>
                                            <WidgetFinanceTwo title="Inernational"/>
                                            <div className="banner2 mb30 border-radious5  d-md-none d-xl-block">
                                                <Link to="/">
                                                    <img src={banner4} alt="banner4"/>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space-60"/>
                </div>
            </div>
            <Footer/>
        </Fragment>
    );
};

export default HomePageThree;