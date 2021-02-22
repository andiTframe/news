import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import { turnIdIntoCategory } from "../../utils/commonFunctions";

const OurBlogSectionTwo = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://news.tframe.de/news/wp-json/wp/v2/news?page=1&per_page=3&_embed`
      )
      .then((res) => {
        setLatestPosts(res.data);
      })
      .catch((err) => {
        console.log(err, "errrprprr");
      });
  }, []);


  return (
    <div className="theme3_bg section-padding layout3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2 className="widget-title">Our Latest Blogs</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {latestPosts.map((item, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="single_post post_type3 mb30 post_type15 border-radious5">
                <div className="post_img border-radious5">
                  <div className="img_wrap">
                    <img
                      src={
                        item._embedded?.["wp:featuredmedia"]?.[0]?.[
                          "source_url"
                        ]
                      }
                      alt="thumb"
                    />
                  </div>
                  <span className="tranding border_tranding">
                    <FontAwesome name="bolt" />
                  </span>
                </div>
                <div
                  style={{ textTransform: "capitalize" }}
                  className="single_post_text padding20 white_bg"
                >
                  <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                  <div className="space-10" />
                  <p style={{ textTransform: "capitalize" }} className="post-p">
                    {item.acf.newsdescription.slice(0,110)}...
                  </p>
                  <div className="space-20" />
                  <div
                    style={{ textTransform: "capitalize" }}
                    className="meta3"
                  >
                    <Link to={`/category/${turnIdIntoCategory(item.categories[0])}`}>{turnIdIntoCategory(item.categories[0])}</Link>
                    <Link to="">
                      {format(new Date(item.date.split("T")[0]), "PP")}
                    </Link>
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
