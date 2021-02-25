import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
import axios from "axios";
import { format } from "date-fns";
import { turnIdIntoCategory } from "../../utils/commonFunctions";


const HeroArea = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const params = {
    activeSlideKey: activeIndex,
    effect: "fade",
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://news.tframe.de/wp-json/wp/v2/posts?page=1&per_page=4&_embed`
      )
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>
      <div className="wrapper_items">
        <div className="wrapper_carousel wlc_slider_demo2">
          <Swiper noSwiping {...params}>
            {posts.length>0&& (
              <div
                key={activeIndex}
                className="welcome4_area_wrap wlc_overlay"
                style={{
                  background: `url(${posts[activeIndex]._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}) center/cover no-repeat`,
                }}
              >
                <div className="welcome4_area">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="welcome_txt">
                          <p style={{textTransform:'capitalize'}} className="title_meta">
                          {turnIdIntoCategory(posts[activeIndex].categories[0])}
                            <span style={{marginLeft:5}}>
                              |{" "}
                              {format(new Date(posts[activeIndex].date.split("T")[0]), "PP")}
                            </span>
                          </p>
                          <h1 style={{textTransform:'capitalize'}}>{posts[activeIndex].title.rendered}</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Swiper>
        </div>
        <div className="container d-md-block d-none">
          <div className="row">
            <div className="col-12">
              <div className="welcome_list">
                <div className="wlc_slide_demo1 d-flex">
                  {posts.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={`single_news_list ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <p style={{textTransform:'capitalize'}}>
                          <span>0{index+1}</span>{" "}
                          {turnIdIntoCategory(item.categories[0])}
                        </p>
                        <h4 style={{textTransform:'capitalize'}}>{item.title.rendered}</h4>
                      </div>
                    );
                  })}
                </div>
                <div onClick={()=>{
                  if (activeIndex===0) {
                    setActiveIndex(3);
                  }else{
                    setActiveIndex(activeIndex-1);
                  }
                }} className='welcomePrev'>{"<"}</div>
                <div onClick={()=>{
                  if (activeIndex===3) {
                    setActiveIndex(0);
                  }else{
                    setActiveIndex(activeIndex+1)
                  }
                }} className='welcomeNext'>{">"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
