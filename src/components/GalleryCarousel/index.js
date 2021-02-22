import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import axios from "axios";
import { format } from "date-fns";

const GalleryCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://news.tframe.de/news/wp-json/wp/v2/news?categories=10&per_page=2&_embed`
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  const params = {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".owl-dots",
      clickable: true,
    },
  };
  return (
    <>
    {posts.length>0&&<div className="dots_style1 mb30">
      <div className="gallary_carousel">
        <Swiper {...params}>
          {posts.map((item, i) => (
            <div
              key={i}
              className="single_post post_type6 border-radious7 xs-mb30"
            >
              <div className="post_img gradient1">
                <div className="img_wrap">
                  <Link to={`/post/${item.id}`}>
                    <img
                        style={{minHeight:257}}
                      src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                      alt="thumb"
                    />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <p className="meta meta_style4">
                  Food{" "}
                  <span>
                    &nbsp;| &nbsp;{" "}
                    {format(new Date(item.date.split("T")[0]), "PP")}
                  </span>
                </p>
                <h4>
                  <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                </h4>
              </div>
            </div>
          ))}
        </Swiper>
      </div>
    </div>}
    </>
  );
};

export default GalleryCarousel;
