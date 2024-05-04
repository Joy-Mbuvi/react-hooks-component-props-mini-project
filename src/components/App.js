import React from "react";
import blogData from "../data/blog";
import Header from "./header";
import About from "./About";
import ArticleList from "./ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header blogData={blogData}/>
      <About image = {blogData.image} about= {blogData.about}/>
      <ArticleList posts= {blogData.posts}/>
    </div>
  );
}

export default App;
