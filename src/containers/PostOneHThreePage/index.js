import React, { Fragment, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import { Link } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import CategoryFour from "../../components/CategoryFour";
import PostOnePagination from "../../components/PostOnePagination";
import ReactHtmlParser from "react-html-parser";
import { format } from "date-fns";

import banner4 from "../../doc/img/bg/banner4.png";
import finance41 from "../../doc/img/finance/finance41.jpg";
import author2 from "../../doc/img/author/author2.png";
import OurBlogSectionTwo from "../../components/OurBlogSectionTwo";
import BlogComment from "../../components/BlogComment";
import axios from "axios";
import { useState } from "react";
import Loader from "../Loader/Loader";
import { turnIdIntoCategory } from "../../utils/commonFunctions";
import Footer from "../Footer";

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
          `https://news.tframe.de/news/wp-json/wp/v2/news/${props.match.params.id}?_embed`
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
                        <FontAwesome name="comment" />
                        563
                      </li>
                      <li>
                        <FontAwesome name="fire" />
                        536
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
                        <img src={author2} alt="author2" />
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
                <div className="col-lg-6 align-self-center">
                  <div className="author_social inline text-right">
                    <ul>
                      <li>
                        <Link to="/">
                          <FontAwesome name="instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FontAwesome name="facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FontAwesome name="youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <FontAwesome name="instagram" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {news && ReactHtmlParser(news.content.rendered)}

              <div className="space-40" />
              {/* <PostOnePagination id={props.match.params.id} /> */}
            </div>
            <div className="col-md-6 col-lg-4">
              <FollowUs title="Follow Us" />
              <div className="banner2 mb30 border-radious5">
                <Link to="">
                  <img src={banner4} alt="banner4" />
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
      {/* <div className="space-60" /> */}
      {/* <BlogComment theme={3} /> */}
      {/* <div className="space-60" /> */}
      <BannerSectionThree />
      <Footer/>
    </Fragment>
  );
};

export default PostOneHThreePage;
