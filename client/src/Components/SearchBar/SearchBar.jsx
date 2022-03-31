import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVgames } from "../../Redux/Actions/index";
import "./SearchBar.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setname] = useState("");

  function handleImputChange(e) {
    e.preventDefault();
    setname(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameVgames(name));
    alert("Videojuego Encontrado!!");
  }
  return (
    <div className="busca">
      <input
        className="buscador"
        id="bt"
        type="text"
        placeholder="Buscar..."
        required
        onChange={(e) => handleImputChange(e)}
      />
      <button
        className="buscador"
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
}
