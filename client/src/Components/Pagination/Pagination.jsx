import React from "react";
import "./Pagination.css";
export default function Pagination({ gamesPerPage, allGames, paginado }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers?.map((number) => {
          return (
            <li className="number" key={number}>
              <a onClick={() => paginado(number)} href="#">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
