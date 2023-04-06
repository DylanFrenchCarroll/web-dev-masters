import React from "react";
import "../../../styles.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="paginationNav">
      <ul className="paginationList justify-content-center">
        <li className="page-item">
          <a className="paginationButtons" onClick={prevPage} href="#">
            Previous
          </a>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`paginationButtons ${
              currentPage == pgNumber ? "active" : ""
            } `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="paginationButtons"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="paginationButtons" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
