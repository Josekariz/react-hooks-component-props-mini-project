import React from "react";
import Article from "../components/Article";
import blogData from "../data/blog";

function ArticleList() {
  const posts = blogData.posts;

  const articles = posts.map((article) => {
    return (
      <Article
        key={article.id}
        title={article.title}
        date={article.date}
        preview={article.preview}
      />
    );
  });
  return <main>{articles}</main>;
}

export default ArticleList;
