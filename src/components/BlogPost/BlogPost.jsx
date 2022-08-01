import React from "react";
import styles from "./BlogPost.module.scss";

const BlogPost = (props) => {
  const { post } = props;
  return (
    <div className={styles.blogpost}>
      <h4>{post.title}</h4>
      <p>{post.body}</p>
    </div>
  );
};

export default BlogPost;
