import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Post from "./pages/Post";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="post">
          <Route path=":id" element={<Post />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
