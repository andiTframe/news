import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../../components/uiStyle/FontAwesome";
import axios from "axios";
import { format } from "date-fns";
import Loader from "../../containers/Loader/Loader";
import { turnIdIntoCategory } from "../../utils/commonFunctions";


const TrendingNewsThree = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    document.querySelector("body").style.overflow = "hidden";
    axios
      .get(
        `http://localhost:8888/news/wp-json/wp/v2/news?categories=12&page=1&_embed`
      )
      .then((res) => {
        setPosts(res.data);
        document.querySelector("body").style.overflow = "auto";
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="white_bg tranding3 padding20 border-radious5 mb30 shadow7">
        <div className="row">
          <div className="col-12">
            <div className="heading">
              <h2 className="widget-title">Trending News</h2>
            </div>
          </div>
        </div>
        {posts.length > 0 && (
          <div className="row">
            <div className="col-lg-6">
              <div className="single_post post_type3 xs-mb90 post_type15">
                <div className="post_img border-radious5">
                  <div className="img_wrap">
                    <Link to={`/post/${posts[0].id}`}>
                      <img
                        src={`${posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                        alt="trend31"
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
                      <div style={{textTransform:'capitalize'}}  className="meta3">
                        <Link to={`/category/${turnIdIntoCategory(posts[0].categories[0])}`}>
                          {turnIdIntoCategory(posts[0].categories[0])}
                        </Link>
                        <Link to={`/post/${posts[0].id}`}>
                          {format(new Date(posts[0].date.split("T")[0]), "PP")}
                        </Link>
                      </div>
                    </div>
                    {/* <div className="col-3 align-self-cnter">
                                    <div className="share_meta4 text-right">
                                        <ul className="inline">
                                            <li><Link to="/"><FontAwesome name="bookmark"/></Link></li>
                                            <li><Link to="/"><FontAwesome name="share"/></Link></li>
                                        </ul>
                                    </div>
                                </div> */}
                  </div>
                  <div className="space-5" />
                  <h4 style={{textTransform:'capitalize'}} >
                    <Link to={`/post/${posts[0].id}`}>
                      {posts[0].title.rendered}
                    </Link>
                  </h4>
                  <div className="space-10" />
                  <p style={{textTransform:'capitalize'}} className="post-p">{posts[0].acf.newsdescription.slice(0,120)}...</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="popular_items scroll_bar">
                {posts.slice(1).map((item, i) => (
                  <Fragment key={i}>
                    <div className="single_post type10 type16 widgets_small mb15">
                      <div className="post_img">
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
                        <div style={{textTransform:'capitalize'}}  className="meta3">
                        <Link to={`/category/${turnIdIntoCategory(item.categories[0])}`}>
                            {turnIdIntoCategory(item.categories[0])}
                          </Link>
                          <Link to={`/post/${item.id}`}>
                            {format(new Date(item.date.split("T")[0]), "PP")}
                          </Link>
                        </div>
                        <h4 style={{textTransform:'capitalize'}} >
                          <Link to={`/post/${item.id}`}>
                            {item.title.rendered}
                          </Link>
                        </h4>
                      </div>
                    </div>
                    {i + 1 < posts.length ? (
                      <Fragment>
                        <div className="space-5" />
                        <div className="border4" />
                        <div className="space-15" />
                      </Fragment>
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TrendingNewsThree;
