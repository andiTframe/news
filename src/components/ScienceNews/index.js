import React, {useEffect, useState} from 'react';
import Swiper from 'react-id-swiper';
import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import axios from "axios";
import { format } from "date-fns";

const ScienceNews = () => {
    const [swiper, setSwiper] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
          .get(
            `https://news.tframe.de/news/wp-json/wp/v2/news?categories=8&_embed`
          )
          .then((res) => {
            setPosts(res.data);
            console.log(res.data)
          })
          .catch((err) => {
            console.log(err, "error");
          });
      }, []);

    const goNext = () => {
        if (swiper !== null) {
            swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiper !== null) {
            swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 2,
        spaceBetween: 0,
        slidesPerColumn: 2,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            768: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            },
            300: {
                slidesPerView: 1,
                slidesPerColumn: 1,
            },
        }
    };
    return (
       <>
       {posts.length>0&& <div className="science_news border-radious5 mb30 shadow7 padding20">
            <h3 className="widget-title">Style</h3>
            <div className="science_carousel multipleRowCarousel nav_style4">
                <Swiper getSwiper={setSwiper} {...params}>
                    {posts.map((item, i) => (
                        <div key={i} className="single_post mb30 type18 rashed">
                            <div className="single_post_text">
                                <h4 style={{textTransform:'capitalize'}}><Link to={`/post/${item.id}`}>{item.title.rendered}</Link></h4>
                                <div className="space-10"/>
                            </div>
                            <div className="science_mid">
                                <div className="row">
                                    <div className="col-sm-4 align-self-center">
                                        <div className="border-radious3">
                                            <div className="img_wap">
                                                <Link to={`/post/${item.id}`}><img src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`} alt="thumb"/></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-8 align-self-center">
                                        <p style={{textTransform:'capitalize'}} className="post-p">{item.acf.newsdescription.slice(0, 100)}...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="book_mark">
                                <div className="bookmark_icon"><FontAwesome name="bookmark"/></div>
                                <h6>{item._embedded.author[0].name} <span>{format(new Date(item.date.split("T")[0]), "PP")}</span></h6>
                            </div>
                        </div>
                    ))}
                </Swiper>
                <div className="owl-nav">
                    <div  className="owl-prev" onClick={goPrev}><FontAwesome name="angle-left"/></div>
                    <div className="owl-next" onClick={goNext}><FontAwesome name="angle-right"/></div>
                </div>
            </div>
        </div>}
       </>
    );
};

export default ScienceNews;