import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const SportsNewsTwo = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [perPage, setPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://news.tframe.de/news/wp-json/wp/v2/news?categories=9&per_page=${perPage}&_embed`
      )
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [perPage]);

  return (
    <>
      {posts.length > 0 && (
        <div className="sports_wrap mb30 white_bg border-radious5 shadow7 padding20">
          <div className="finance ">
            <div className="heading">
              <h3 className="widget-title">Magazine</h3>
            </div>
            <div className="single_post type18">
              <div className="post_img">
                <div className="img_wrap">
                  <Link to={`/post/${posts[0].id}`}>
                    <img
                      src={`${posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                      alt="sports41"
                    />
                  </Link>
                </div>
                <span className="batch3 date">
                  {" "}
                  {format(new Date(posts[0].date.split("T")[0]), "PP")}
                </span>
              </div>
              <div className="single_post_text py0">
                <h4 style={{ textTransform: "capitalize" }}>
                  <Link to={`/post/${posts[0].id}`}>
                    {posts[0].title.rendered}
                  </Link>
                </h4>
                <div className="space-10" />
                <p style={{ textTransform: "capitalize" }} className="post-p">
                  {posts[0].acf.newsdescription.slice(0, 120)}...
                </p>

                {/* <ul className="mt10 like_cm">
              <li>
                <Link to="/">
                  <FontAwesome name="eye" /> 6745
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesome name="heart" /> 6745
                </Link>
              </li>
              <li>
                <Link to="/">
                  <FontAwesome name="share" /> 6745
                </Link>
              </li>
            </ul> */}
              </div>
            </div>
            <div className="space-30" />
            <div className="border4" />
            <div className="space-30" />
          </div>
          <div className="sport_buttom">
            {posts.map((item, i) => (
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
                    <h4>
                      <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                    </h4>
                    <ul className="like_cm">
                      <li>
                        <p
                          style={{ textTransform: "capitalize" }}
                          className="post-p"
                        >
                          {item.acf.newsdescription.slice(0, 20)}...
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                {i + 1 < posts.length ? (
                  <Fragment>
                    <div className="space-15" />
                    <div className="border4" />
                    <div className="space-15" />
                  </Fragment>
                ) : null}
              </Fragment>
            ))}
            <div className="space-20" />
            {posts.length % 5 === 0 ? (
              <Link
                to=""
                onClick={() => setPerPage(perPage + 5)}
                className="showmore"
              >
                {!loading ? "Show more" : "Loading..."}
              </Link>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
};

export default SportsNewsTwo;
