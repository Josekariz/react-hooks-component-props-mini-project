import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import ArticleList from "../components/ArticleList";
import blogData from "../data/blog";

function App() {
  return (
    (
      <div className="App">
        You're on your own from here! Follow the deliverables; test things out
        in the browser as you write your code; and good luck!
      </div>
    ),
    (
      <>
        <Header name={blogData.name} />
        <About image={blogData.image} about={blogData.about} />
        <ArticleList />
      </>
    )
  );
}

export default App;
