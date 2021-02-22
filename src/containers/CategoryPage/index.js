import React, { Fragment, useState, useEffect } from "react";
import MainMenuThree from "../../components/MainMenuThree";
import BannerSectionThree from "../../components/BannerSectionThree";
import FollowUs from "../../components/FollowUs";
import WidgetFinanceTwo from "../../components/WidgetFinanceTwo";
import NewsLetter from "../../components/NewsLetter";
import { Link } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import axios from "axios";
import { format } from "date-fns";

import banner4 from "../../doc/img/bg/banner4.png";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { addNextPost, addPrevPost } from "../../store/actions";
import { turnCategoryIntoId } from "../../utils/commonFunctions";
import Footer from "../Footer";


const SportsThreePage = (props) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [forceRender, setForceRender] = useState(0);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    document.querySelector("body").style.overflow = "hidden";
    
    let category = props.match.params.id;
    let id = turnCategoryIntoId(category);

    await axios
      .get(
        `http://localhost:8888/news/wp-json/wp/v2/news?categories=${id}&page=${pagination}&per_page=11&_embed`
      )
      .then((res) => {
        setPosts(res.data);
        document.querySelector("body").style.overflow = "auto";
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };

  useEffect(() => {
    if (props.match.params.id) {
      fetchPosts();
    }
  }, [props.match.params.id, pagination]);

  useEffect(() => {
    setForceRender(Math.random());
  }, [props.match.params.id]);

  
  const addPrevNext = (index)=>{
    dispatch(addPrevPost(posts[index - 1]));
    dispatch(addNextPost(posts[index + 1]));
  }

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
                  posts.slice(0,10).map((item, i) => {
                    let date = item.date.split("T")[0];
                    return (
                      <div key={i} className="col-lg-6">
                        <div
                          className={`single_post post_type3 xs-mb90 post_type15 ${
                            i + 1 < posts.length ? "mb30" : ""
                          }`}
                        >
                          <div className="post_img border-radious5">
                            <div className="img_wrap">
                              <Link
                                onClick={() => addPrevNext(i)}
                                to={`/post/${item.id}`}
                              >
                                <img
                                  style={{ minHeight: "220px" }}
                                  src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
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
                                <div
                                  style={{ display: "flex" }}
                                  className="meta3"
                                >
                                  <p style={{ textTransform: "capitalize" }}>
                                    {props.match.params.id}
                                  </p>
                                  <p>{format(new Date(date), "PP")}</p>
                                </div>
                              </div>
                              <div className="col-3 align-self-cnter">
                                {/* <div className="share_meta4 text-right">
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
                                </div> */}
                              </div>
                            </div>
                            <div className="space-5" />
                            <h4 style={{ textTransform: "capitalize" }}>
                              <Link to={`/post/${item.id}`}>
                                {item.title.rendered}
                              </Link>
                            </h4>
                            <div className="space-10" />
                            <p
                              style={{ textTransform: "capitalize" }}
                              className="post-p"
                            >
                              {item.acf.newsdescription.slice(0,100)}...
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <div className="paginationA">
                {pagination > 1 && (
                  <div
                    onClick={() => {
                      setPagination(pagination - 1);
                      window.scroll({
                        top:0,
                        behavior:'smooth'
                      })
                    }}
                    className="paginationBtns"
                  >
                    <p>Prev</p>
                  </div>
                )}
                {posts.length > 10 && (
                  <div
                  onClick={() => {
                    setPagination(pagination + 1);
                    window.scroll({
                      top:0,
                      behavior:'smooth'
                    })
                  }}
                    className="paginationBtns"
                  >
                    <p>Next</p>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <FollowUs title="Follow Us" />
              <div className="banner2 mb30 border-radious5">
                <Link to="">
                  <img src={banner4} alt="banner4" />
                </Link>
              </div>
              <WidgetFinanceTwo id={props.match.params.id} forceRender={forceRender} />
              <NewsLetter
                titleClass="white"
                className="news_letter4 border-radious5"
              />
            </div>
          </div>
        </div>
      </div>
      <BannerSectionThree />
      <Footer/>
    </Fragment>
  );
};

export default SportsThreePage;
