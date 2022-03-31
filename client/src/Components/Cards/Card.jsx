import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css";
import "../../assets/fondocard.jpg";
function Card({ name, image, id, genres, rating }) {
  return (
    <div className="card">
      <NavLink to={`/videogames/${id}`}>
        <h3>{name}</h3>
        <img
          className="imageCard"
          src={image}
          alt=""
          height="200px"
          width="350px"
        />
        <div className="conteiner">
          <h5>{genres}</h5>
          <h5>{rating}</h5>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
