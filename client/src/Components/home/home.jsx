//importo los hooks que voy a usar de react
import React from "react";
import { useState, useEffect } from "react";
//importo los hooks de react-redux (previamente los instalo npm i react-redux)
import { useDispatch, useSelector } from "react-redux";
// import { getVgames, filterCreated, getPlatforms, sortvgames } from "../../Redux/Actions/index";

import {
  getGames,
  filterCreated,
  orderByName,
  orderByRating,
  filterByGenres,
} from "../../Redux/Actions/index";
//importo los componentes que voy a usar
// import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "../Cards/Card";

import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";
import "../home/Home.css";

//comienza el componente
export default function Home() {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games);

  const genres = useSelector((state) => state.genres);

  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage] = useState(15);
  const [order, setOrder] = useState("");

  const indexOfLastVgames = currentPage * gamesPerPage; //15
  const indexOfFirstVgames = indexOfLastVgames - gamesPerPage; //0
  const currentVgames = allGames?.slice(indexOfFirstVgames, indexOfLastVgames);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // useEffect(() => {
  //   dispatch(getVgames());
  //   dispatch(getPlatforms());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  function handleClick(e) {
    e.preventDefault();
    dispatch(getGames());
  }
  function handleFilterGenres(e) {
    dispatch(filterByGenres(e.target.value));
  }

  function handleFilterCreated(e) {
    dispatch(filterCreated(e.target.value));
    setCurrentPage(1);
  }

  function handleSortName(e) {
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  function handleSortRating(e) {
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
    setOrder(e.target.value);
  }

  return (
    <div>
      <div className="navBar">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <img src="https://i.imgur.com/OBjeGYI.png" alt="loguito" />
        </Link>

        <Link to="/create">
          <button className="btnI">Crear Juego!</button>
        </Link>
        <button
          className="btnI"
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Recargar Juegos
        </button>
        <div className="search">
          <SearchBar setCurrentPage={setCurrentPage} />
        </div>
      </div>
      <div>
        <div className="custom-select">
          <div>
            <h5>FILTRAR ALFABETICAMENTE</h5>
            <select
              onChange={(e) => {
                handleSortName(e);
              }}
              defaultValue="Nothing"
              className="select-css"
            >
              <option disabled value="Nothing">
                alfabet...
              </option>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>

          <div>
            <h5>FILTRAR POR RAITING</h5>
            <select
              onChange={(e) => {
                handleSortRating(e);
              }}
              defaultValue="Nothing"
              className="select-css"
            >
              <option disabled value="Nothing">
                raiting
              </option>
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
          </div>

          <div>
            <h5>JUEGOS CREADOS</h5>
            <select
              onChange={(e) => handleFilterCreated(e)}
              className="select-css"
            >
              <option value="All">All</option>
              <option value="created">Created</option>
              <option value="api">Apigames</option>
            </select>
          </div>

          <div>
            <h5>GENEROS</h5>
            <select
              onChange={(e) => handleFilterGenres(e)}
              className="select-css"
            >
              {genres.map((genre) => {
                return (
                  <option value={genre.name} key={genre.name}>
                    {genre.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <Pagination
          gamesPerPage={gamesPerPage}
          allGames={allGames?.length}
          paginado={paginado}
        />
        <br />
        <br />
        <div className="cards">
          {currentVgames?.map((el) => {
            return (
              <div className="card-link">
                <Card
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  rating={el.rating}
                  genres={
                    !currentVgames[0].createdInDb
                      ? el.genres
                      : currentVgames[0].genres.join("-")
                    // .map((el) => el.name)
                  }
                  key={el.id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
