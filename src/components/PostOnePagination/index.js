import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPostState } from "../../store/reducers/postReducer";

const PostOnePagination = (props) => {
  const [prevPost, setPrevPost] = useState();
  const [nextPost, setNextPost] = useState();
  const postState = useSelector(getPostState);

  useEffect(() => {
    setPrevPost(postState.prevPost);
    setNextPost(postState.nextPost);
  }, [postState]);

  const removeThem = ()=>{
      setPrevPost(null)
      setNextPost(null)
  }

  return (
    <div className="next_prev">
      <div className="row">
        {prevPost && (
          <div className="col-lg-6 align-self-center">
            <div
              className={`${
                props.className
                  ? props.className
                  : "next_prv_single border_left3"
              }`}
            >
              <p>PREVIOUS NEWS</p>
              <h3 style={{textTransform:'capitalize'}}>
                <Link onClick={removeThem} to={`/post/${prevPost.id}`}>
                  {prevPost?.title?.rendered}
                </Link>
              </h3>
            </div>
          </div>
        )}
        {nextPost && (
          <div className="col-lg-6 align-self-center">
            <div
              className={`${
                props.className
                  ? props.className
                  : "next_prv_single border_left3"
              }`}
            >
              <p>NEXT NEWS</p>
              <h3 style={{textTransform:'capitalize'}}>
                <Link onClick={removeThem} to={`/post/${nextPost.id}`}>
                  {nextPost?.title?.rendered}
                </Link>
              </h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostOnePagination;
