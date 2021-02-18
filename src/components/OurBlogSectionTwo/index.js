import React, { useEffect } from 'react';

import {Link} from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { useState } from 'react';
import {  format } from 'date-fns'
import axios from "axios";

const OurBlogSectionTwo = () => {
    const [latestPosts, setLatestPosts] = useState([])

    useEffect(() => {
          axios
            .get(
              `http://localhost:8888/news/wp-json/wp/v2/news?page=1&per_page=3&_embed`
            )
            .then((res) => {             
                setLatestPosts(res.data);
            })
            .catch((err) => {
              console.log(err, "errrprprr");
            });
      }, []);

      const getCategories = (id)=>{
        let category;

        if (id === 2) category = "world";
        if (id === 3) category = "politics";
        if (id === 4) category = "business";
        if (id === 5) category = "tech";
        if (id === 6) category = "health";
        if (id === 7) category = "sports";
        if (id === 8) category = "style";
        if (id === 9) category = "magazine";
        if (id === 10) category = "food";
        return category;
      }


    return (
        <div className="theme3_bg section-padding layout3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="heading">
                            <h2 className="widget-title">Our Latest Blog</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {latestPosts.map((item, i) => (
                        <div key={i} className="col-md-6 col-lg-4">
                            <div className="single_post post_type3 mb30 post_type15 border-radious5">
                                <div className="post_img border-radious5">
                                    <div className="img_wrap">
                                        <img src={item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]} alt="thumb"/>
                                    </div>
                                    <span className="tranding border_tranding"><FontAwesome name="bolt"/></span>
                                </div>
                                <div style={{textTransform:'capitalize'}}  className="single_post_text padding20 white_bg">
                                    <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                                    <div className="space-10"/>
                                    <p style={{textTransform:'capitalize'}} className="post-p">{item.acf.newsdescription}</p>
                                    <div className="space-20"/>
                                    <div style={{textTransform:'capitalize'}}  className="meta3">
                                        <Link to="">{getCategories(item.categories[0])}</Link>
                                        <Link to="">{format(new Date(item.date.split('T')[0]),"PP")}</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurBlogSectionTwo;