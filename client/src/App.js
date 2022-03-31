import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { getGames, getGenres } from "./Redux/Actions/index";

import Landing from "./Components/Landing/Landing";
import Home from "./Components/home/home";
import Detail from "./Components/Detail/Detail";
import Create from "./Components/Create/Create";

// import NotFound from "./pages/NotFound";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    dispatch(getGames());
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/videogames/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
        {/* <Route path="/about" element={<About />} />
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
