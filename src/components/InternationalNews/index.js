import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const InternationalNews = ({ className }) => {
  const [perPage, setPerPage] = useState(5);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://news.tframe.de/news/wp-json/wp/v2/news?categories=2&per_page=${perPage}&_embed`
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
        <div
          className={`business3 padding30 white_bg border-radious5 ${
            className ? className : ""
          }`}
        >
          <h4 className="widget-title">World</h4>
          {posts.map((item, i) => (
            <div
              key={i}
              className={`single_post post_type12 type20 ${
                i + 1 < posts.length ? "mb30" : ""
              }`}
            >
              <div className="post_img">
                <div className="img_wrap  border-radious5">
                  <Link to={`/post/${item.id}`}>
                    <img
                      src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                      alt="thumb"
                    />
                  </Link>
                </div>
              </div>
              <div className="single_post_text">
                <div className="row">
                  <div className="col-9 align-self-cnter">
                    <div className="meta3">
                      <Link to={`/post/${item.id}`}>World</Link>
                      <Link to={`/post/${item.id}`}>
                        {" "}
                        {format(new Date(item.date.split("T")[0]), "PP")}
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-3 align-self-cnter">
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
                  </div> */}
                </div>
                <h4 style={{ textTransform: "capitalize" }}>
                  <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                </h4>
                <div className="space-10" />
                <p className="post-p">
                  {item.acf.newsdescription.slice(0, 100)}...
                </p>
                <div className="space-10" />
                <Link to={`/post/${item.id}`} className="readmore4">
                  Read more
                </Link>
              </div>
            </div>
          ))}
          {posts.length % 5 === 0 ? (
            <Link
              to=""
              onClick={() => setPerPage(perPage + 5)}
              className="showmore"
            >
              {!loading?"Show more":"Loading..."}
            </Link>
          ) : null}
        </div>
      )}
    </>
  );
};

export default InternationalNews;
