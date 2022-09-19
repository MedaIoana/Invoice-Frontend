import React from "react";
import "./Pagination.scss";

function Pagination({ invoicesPerPage, totalInvoices, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalInvoices / invoicesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className="pagination">
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href={`#`}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
