import React, { Fragment, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import { Link } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import CategoryFour from "../../components/CategoryFour";
import ReactHtmlParser from "react-html-parser";
import { format } from "date-fns";

import OurBlogSectionTwo from "../../components/OurBlogSectionTwo";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { turnIdIntoCategory } from "../../utils/commonFunctions";
import Footer from "../Footer";
import img from '../../assets/390x312.jpg'


const PostOneHThreePage = (props) => {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.querySelector("body").style.overflow = "hidden";
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    if (props.match.params.id) {
      axios
        .get(
          `https://news.tframe.de/wp-json/wp/v2/posts/${props.match.params.id}?_embed`
        )
        .then((res) => {
          let id = res.data.categories[0];
          let category = turnIdIntoCategory(id);

          let newsWithNoCategory = { ...res.data };
          newsWithNoCategory.category = category;
          setNews(newsWithNoCategory);
          document.querySelector("body").style.overflow = "auto";
          setLoading(false);
        })
        .catch((err) => {
          console.log(err, "errrprprr");
        });
    }
  }, [props.match.params.id]);

  return (
    <Fragment>
      <MainMenuThree />
      {loading && <Loader />}
      <div
        style={{ paddingTop: 70 }}
        className="archives layout3 post post1 padding-top-30"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="bridcrumb"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-6 align-self-center">
                  <div className="page_category">
                    {news && (
                      <h4
                        style={{
                          textTransform:
                            "capitalize",
                        }}
                      >
                        {news.category}
                      </h4>
                    )}
                  </div>
                </div>
                <div className="col-6 text-right">
                  <div className="page_comments">
                    <ul className="inline">
                      <li>
                       
                      </li>
                      <li>
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-30" />
              <div className="single_post_heading">
                {news && (
                  <>
                    <h1
                      style={{
                        textTransform:
                          "capitalize",
                      }}
                    >
                      {news.title.rendered}
                    </h1>
                    <div className="space-10" />
                    <p
                      style={{
                        textTransform:
                          "capitalize",
                      }}
                    >
                      {news.acf.newsdescription}
                    </p>
                  </>
                )}
              </div>
              <div className="space-40" />
              <div className="border-radious5">
                {news && (
                  <img
                    src={`${news._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                    alt="thumb"
                  />
                )}
              </div>
              <div className="space-20" />
              <div style={{ marginBottom: 30 }} className="row">
                <div className="col-lg-6 align-self-center">
                  <div className="author">
                    <div className="author_img">
                      <div className="author_img_wrap">
                        <img src={img} alt="img" />
                      </div>
                    </div>
                    <Link to="">{news && news._embedded.author[0].name}</Link>
                    <ul>
                      <li>
                        <Link to="">
                          {news &&
                            format(new Date(news.date.split("T")[0]), "PP")}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {news && ReactHtmlParser(news.content.rendered)}

              <div className="space-40" />
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="banner2 mb30 border-radious5">
                <Link to="">
                  <img src={img} alt="img" />
                </Link>
              </div>
              <WidgetFinanceTwo />
              <NewsLetter
                titleClass="white"
                className="news_letter4 border-radious5"
              />
              <CategoryFour />
            </div>
          </div>
        </div>
      </div>
      <div className="space-60" />
      <OurBlogSectionTwo />
      <BannerSectionThree />
      <Footer/>
    </Fragment>
  );
};

export default PostOneHThreePage;
