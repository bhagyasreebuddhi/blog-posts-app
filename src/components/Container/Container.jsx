import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogPost from "../BlogPost/BlogPost";
import styles from "./Container.module.scss";

const Container = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const posts = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data);
    setPosts(posts);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className={styles.container}>
      {posts.map((post) => {
        return <BlogPost post={post} />;
      })}
    </div>
  );
};

export default Container;
