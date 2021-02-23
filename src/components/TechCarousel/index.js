import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import Swiper from "react-id-swiper";
import axios from "axios";

const BusinessCarousel = () => {
  const [swiper, setSwiper] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://news.tframe.de/wp-json/wp/v2/posts?categories=6&_embed`
      )
      .then((res) => {
        setPosts(res.data);
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
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  };
  return (
    <div className="business_carousel nav_style4 mb30 ">
     {posts.length>0&& <Swiper getSwiper={setSwiper} {...params}>
        {posts.map((item, i) => (
          <div
            key={i}
            className="business_carousel_items white_bg padding20 shadow7"
          >
            <div className="single_international">
              <p style={{textTransform:'capitalize'}} className="meta before">
                {/* {turnIdIntoCategory(item.categories[0])} */}Technology
              </p>
              <h4 style={{textTransform:'capitalize',marginTop:15}}>
                <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
              </h4>
              <div className="row">
                <div className="col-8 align-self-center">
                  <p style={{textTransform:"capitalize"}}>{item.acf.newsdescription.slice(0, 100)}...</p>
                </div>
                <div className="col-4 align-self-center">
                  <div className="img_wrap">
                    <Link to={`/post/${item.id}`}>
                      <img
                        src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                        alt="thumb"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <ul  className="mt20 like_cm">
                {/* <li> */}
                  {/* <Link to="/">
                    <FontAwesome name="eye" /> 6745
                  </Link> */}
                  {/* <div style={{height:0}}></div> */}
                {/* </li> */}
                {/* <li>
                  <Link to="/">
                    <FontAwesome name="heart" /> 6745
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <FontAwesome name="share" /> 6745
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        ))}
      </Swiper>}
      <div className="owl-nav">
        <div onClick={goPrev} className="owl-prev">
          <FontAwesome name="angle-left" />
        </div>
        <div onClick={goNext} className="owl-next">
          <FontAwesome name="angle-right" />
        </div>
      </div>
    </div>
  );
};

export default BusinessCarousel;
