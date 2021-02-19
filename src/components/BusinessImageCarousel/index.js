import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swiper from "react-id-swiper";
import FontAwesome from "../uiStyle/FontAwesome";
import axios from "axios";
import pop51 from "../../doc/img/popular/pop51.jpg";
import pop52 from "../../doc/img/popular/pop52.jpg";
import pop53 from "../../doc/img/popular/pop53.jpg";
import pop54 from "../../doc/img/popular/pop54.jpg";
import pop56 from "../../doc/img/popular/pop56.jpg";
import gallery42 from "../../doc/img/gallary/gallery42.jpg";
import { format } from "date-fns";

const BusinessImageCarousel = () => {
  const [swiper, setSwiper] = useState(null);
  const [postsTech, setPostsTech] = useState([]);
  const [postsBizz, setPostsBizz] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/news/wp-json/wp/v2/news?categories=5&per_page=5&_embed`)
      .then((res) => {
        setPostsTech(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8888/news/wp-json/wp/v2/news?categories=4&per_page=5&_embed`)
      .then((res) => {
        setPostsBizz(res.data);
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
    slidesPerView: 1,
    loop: true,
  };

  return (
    <div className="row">
      <div className="col-lg-7">
        <div className="image_carousel nav_style4 mb30">
          {postsBizz.length>0&&<Swiper getSwiper={setSwiper} {...params}>
            {postsBizz.map((item, i) => (
              <div
                key={i}
                className="single_post gradient1 post_type6 border-radious7 xs-mb30"
              >
                <div className="post_img gradient1">
                  <div className="img_wrap">
                    <Link to={`/post/${item.id}`}>
                      <img
                        src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                        alt="thumb"
                      />
                    </Link>
                  </div>
                </div>
                <div className="single_post_text">
                  <p className="meta meta_style4">
                    Business{" "}
                    <span>
                      &nbsp;| &nbsp;{" "}
                      {format(new Date(item.date.split("T")[0]), "PP")}
                    </span>
                  </p>
                  <h4 style={{textTransform:'capitalize',marginTop:5}}>
                    <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                  </h4>
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
      </div>
     {postsTech.length&& <div className="col-lg-5">
        <div className="padding20 white_bg border-radious5 mb30">
          <p className="meta before">Technology</p>
          <div className="space-15" />
          {postsTech.map((item, i) => (
            <Fragment key={i}>
              <div className="single_post type10 type16 type22 widgets_small mb15">
                <div className="post_img">
                  <div className="img_wrap">
                    <Link to={`/post/${item.id}`}>
                      <img src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`} alt="thumb" />
                    </Link>
                  </div>
                </div>
                <div className="single_post_text">
                  <h4>
                    <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                  </h4>
                </div>
              </div>
              {i + 1 < postsTech.length ? (
                <Fragment>
                  <div className="space-15" />
                  <div className="border4" />
                  <div className="space-15" />
                </Fragment>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>}
    </div>
  );
};

export default BusinessImageCarousel;
