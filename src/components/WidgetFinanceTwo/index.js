import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "../uiStyle/FontAwesome";
import { format } from "date-fns";
import axios from "axios";

const WidgetFinanceTwo = (props) => {
  const [leftPosts2, setLeftPosts2] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("");

  useEffect(() => {
    let randomId = Math.floor(Math.random() * 11);
    if (randomId === 0) {
      randomId += 2;
    }
    if (randomId === 1) {
      randomId += 1;
    }
    let category;
    let id = randomId;
    if (id === 2) category = "world";
    if (id === 3) category = "politics";
    if (id === 4) category = "business";
    if (id === 5) category = "tech";
    if (id === 6) category = "health";
    if (id === 7) category = "sports";
    if (id === 8) category = "style";
    if (id === 9) category = "magazine";
    if (id === 10) category = "food";

    setCategoryTitle(category);

    axios
      .get(
        `http://localhost:8888/news/wp-json/wp/v2/news?categories=${randomId}&per_page=3&_embed`
      )
      .then((res) => {
        setLeftPosts2(res.data);
      })
      .catch((err) => {
        console.log(err, "error");
      });
  }, [props.forceRender]);

  return (
    <Fragment>
      {leftPosts2.length > 0 && (
        <div className="finance mb30 white_bg border-radious5 shadow7 padding20">
          <div className="heading">
            <h3 style={{textTransform:'capitalize'}}  className="widget-title">{categoryTitle}</h3>
          </div>
          {leftPosts2.map((item, i) => (
            <div key={i} className="single_post mb30 type18">
              <div className="post_img">
                <div className="img_wrap">
                  <Link to={`/post/${item.id}`}>
                    <img
                      src={`${item._embedded?.["wp:featuredmedia"]?.[0]?.["source_url"]}`}
                      alt="thumb"
                    />
                  </Link>
                </div>
                <span className="batch3 date">
                  {format(new Date(item.date.split("T")[0]), "PP")}
                </span>
              </div>
              <div className="single_post_text py0">
                <h4 style={{textTransform:'capitalize'}} >
                  <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                </h4>
                <div className="space-10" />
                <p style={{textTransform:'capitalize'}}  className="post-p">{item.acf.newsdescription}</p>
                {/* <ul className="mt10 like_cm">
                            <li><Link to="/"><FontAwesome name="eye"/> 6745</Link></li>
                            <li><Link to="/"><FontAwesome name="heart"/> 6745</Link></li>
                            <li><Link to="/"><FontAwesome name="share"/> 6745</Link></li>
                        </ul> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default WidgetFinanceTwo;
