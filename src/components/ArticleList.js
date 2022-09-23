import React from "react";
import Article from "../components/Article";
import blogData from "../data/blog";

function ArticleList({posts}) {
  // const posts = blogData.posts;

  const articles = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
      />
    );
  });
  return <main>{articles}</main>;
}

export default ArticleList;
