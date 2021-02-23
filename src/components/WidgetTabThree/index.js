import React, { Fragment, useEffect, useState } from "react";
import { Nav, NavItem, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import Fade from "reactstrap/es/Fade";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const WidgetTabPane = ({ arr, a_id, id }) => {
  return (
    <Fade in={id === a_id}>
      {arr.slice(2).map((item, i) => (
        <Fragment key={i}>
          <div className="single_post widgets_small widgets_type4">
            <div className="post_img number">
              <h2>{i + 1}</h2>
            </div>
            <div className="single_post_text">
              <h4>
                <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
              </h4>
              <div className="row">
                <div className="col-7 align-self-cnter">
                  <div className="meta4">
                    <Link to={`/post/${item.id}`}>
                      {format(new Date(item.date.split("T")[0]), "PP")}
                    </Link>
                  </div>
                </div>
                <div className="col-5 align-self-cnter">
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
            </div>
          </div>
          {i + 1 < arr.length ? (
            <Fragment>
              <div className="space-15" />
              <div className="border4" />
              <div className="space-15" />
            </Fragment>
          ) : null}
        </Fragment>
      ))}
    </Fade>
  );
};
const WidgetTabThree = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://news.tframe.de/wp-json/wp/v2/posts?categories=11&per_page=7&_embed`)
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
        <div className="tab4 padding20 white_bg border-radious5 shadow7">
          <Nav tabs>
            <NavItem>
              <Link
                to="/"
                className={classnames({ active: activeTab === "1" })}
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Food
              </Link>
            </NavItem>
          </Nav>
          <div className="space-20" />
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <WidgetTabPane a_id={activeTab} id="1" arr={posts} />
            </TabPane>
          </TabContent>
        </div>
      )}
    </>
  );
};

export default WidgetTabThree;
