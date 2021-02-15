import React, { Fragment, useState, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import { Link } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import axios from "axios";

import banner4 from "../../doc/img/bg/banner4.png";
import finance41 from "../../doc/img/finance/finance41.jpg";
import international41 from "../../doc/img/international/international41.jpg";
import international42 from "../../doc/img/trending/trend31.jpg";
import international43 from "../../doc/img/international/international43.jpg";
import international44 from "../../doc/img/trending/trend31.jpg";
import international45 from "../../doc/img/international/international45.jpg";

const featurePosts = [
  {
    photo: international41,
    title: "Verizon is buying b2b video conferen firm Blue Jeans",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international42,
    title: "Investors explain COVID-19’s impact on consumer startups",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international43,
    title:
      "Unraveling immigration politics and Silicon Valley ethic with Jaclyn…",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international42,
    title: "Bridgecrew announces $14M Series A to automate cloud security",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international44,
    title: "She tried for many years pregnant & happy and thing going..",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international42,
    title: "Bridgecrew announces $14M Series A to automate cloud security",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international44,
    title: "She tried for many years pregnant & happy and thing going..",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
  {
    photo: international45,
    title: "She tried for many years pregnant & happy and thing going..",
    description:
      "The property, complete with 30-seat screening from room, a 100-seat amphitheater and a swimming pond with",
  },
];

const financePosts = [
  {
    photo: finance41,
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with seates screening from room amphitheater pond with sandy",
  },
  {
    photo: finance41,
    title: "Copa America: Luis Suarez from devastated US",
    description:
      "The property, complete with seates screening from room amphitheater pond with sandy",
  },
];

const SportsThreePage = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8888/news/wp-json/wp/v2/news")
      .then((res) => {
        setPosts(res.data);

        console.log(res.data[0])
      })
      .catch((err) => {
        console.log(err, "errrprprr");
      });
  }, []);


  return (
    <Fragment>
      <MainMenuThree />
      <div
        style={{ paddingTop: 70 }}
        className="archives layout3 post post1 padding-top-30"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div style={{ display: "flex" }} className="bridcrumb">
                <Link style={{ marginRight: 5 }} to="/">
                  Home
                </Link>{" "}
                / Categories /{" "}
                <p style={{ textTransform: "capitalize", paddingLeft: 5 }}>
                  {props.match.params.id}
                </p>
              </div>
            </div>
          </div>
          <div className="space-30" />
          <div className="row">
            <div className="col-md-6 col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="categories_title">
                    <h5 style={{ display: "flex" }}>
                      Category :{" "}
                      <p
                        style={{ textTransform: "capitalize", paddingLeft: 5 }}
                      >
                        {props.match.params.id}
                      </p>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                {posts.length > 0 &&
                  posts.map((item, i) => {
                    return (
                      <div key={i} className="col-lg-6">
                        <div
                          className={`single_post post_type3 xs-mb90 post_type15 ${
                            i + 1 < featurePosts.length ? "mb30" : ""
                          }`}
                        >
                          <div className="post_img border-radious5">
                            <div className="img_wrap">
                              <Link to="">
                                <img
                                  src={`http://localhost:8888/news/wp-json/wp/v2/media/${item.featured_media}`}
                                  alt="thumb"
                                />
                              </Link>
                            </div>
                            <span className="tranding border_tranding">
                              <FontAwesome name="bolt" />
                            </span>
                          </div>
                          <div className="single_post_text">
                            <div className="row">
                              <div className="col-9 align-self-cnter">
                                <div className="meta3">
                                  <Link to="">TECHNOLOGY</Link>
                                  <Link to="">March 26, 2020</Link>
                                </div>
                              </div>
                              <div className="col-3 align-self-cnter">
                                <div className="share_meta4 text-right">
                                  <ul className="inline">
                                    <li>
                                      <Link to="/">
                                        <FontAwesome name="bookmark" />
                                      </Link>
                                    </li>
                                    <li>
                                      <Link to="/">
                                        <FontAwesome name="share" />
                                      </Link>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="space-5" />
                            <h4>
                              <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                            </h4>
                            <div className="space-10" />
                            {/* <p className="post-p">{item.description}</p> */}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="cpagination v4 padding5050">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link className="page-link" to="/" aria-label="Previous">
                        <span aria-hidden="true">
                          <FontAwesome name="caret-left" />
                        </span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        ..
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/">
                        5
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="/" aria-label="Next">
                        <span aria-hidden="true">
                          <FontAwesome name="caret-right" />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <FollowUs title="Follow Us" />
              <div className="banner2 mb30 border-radious5">
                <Link to="">
                  <img src={banner4} alt="banner4" />
                </Link>
              </div>
              <WidgetFinanceTwo data={financePosts} title="Finance" />
              <NewsLetter
                titleClass="white"
                className="news_letter4 border-radious5"
              />
            </div>
          </div>
        </div>
      </div>
      <BannerSectionThree />
    </Fragment>
  );
};

export default SportsThreePage;
