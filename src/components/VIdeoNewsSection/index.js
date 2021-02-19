import React, { Fragment, useEffect, useState } from "react";
import FontAwesome from "../uiStyle/FontAwesome";
import fultab41 from "../../doc/img/tab/fultab41.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const VIdeoNewsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8888/news/wp-json/wp/v2/news?categories=7&page=1&_embed`
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
      {posts.length > 0 && (
        <div className="v4video primay_bg section-padding2">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="tatal_videos4">
                  <div className="row">
                    <div className="col-lg-8">
                      <div
                        className="tatal_video4"
                        style={{
                          background: `url(${`${posts[0]._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}) center/cover no-repeat`,
                        }}
                      >
                        <div className="video4_content">
                          <div style={{textTransform:'capitalize'}}>
                          <Link to={`/post/${posts[0].id}`}>
                            {posts[0].title.rendered}
                          </Link>
                          </div>
                          <div className="video4_video">
                            <div className="video4_icon">
                              <FontAwesome name="play" />
                            </div>
                            <h6>
                              Sport
                              <span>
                                {format(
                                  new Date(posts[0].date.split("T")[0]),
                                  "PP"
                                )}
                              </span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="video4_list scroll_bar padding20">
                        {posts.map((item, i) => (
                          <Fragment key={i}>
                            <div className="single_video_list">
                              <div className="video_list_author">
                                <FontAwesome name="play-circle" />
                                <h6>
                                  Sport{" "}
                                  <span>
                                    {format(
                                      new Date(item.date.split("T")[0]),
                                      "PP"
                                    )}
                                  </span>
                                </h6>
                              </div>
                              <h4 style={{textTransform:'capitalize'}}>
                                <Link to={`/post/${item.id}`}>
                                  {item.title.rendered}
                                </Link>
                              </h4>
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VIdeoNewsSection;
