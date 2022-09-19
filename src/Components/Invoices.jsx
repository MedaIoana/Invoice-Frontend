import React, { useEffect, useState } from "react";
import "./Invoices.scss";
import { Link } from "react-router-dom";
import { FaTrash, FaPrint } from "react-icons/fa";
import axios from "axios";
import Pagination from "./Pagination";
import { InvoicesContext } from "../Contexts/InvoicesContexts";
import { useContext } from "react";

const Invoices = ({ seeInvoice }) => {
  const { data } = useContext(InvoicesContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [invoicesPerPage] = useState(15);

  useEffect(() => {
    const pagination = () => {
      setLoading(true);
      setInvoices(data);
      setLoading(false);
      setInvLen(invoices.length);
    };

    pagination();
  }, [data]);

  function postDelete(e, id) {
    axios
      .delete(`http://localhost:8080/invoice/${id}`)
      .then(() => {
        seeInvoice();
      })
      .catch((err) => console.log(err));
  }
  const [invLen, setInvLen] = useState(invoices.length);
  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = invoices
    .filter((val) => {
      if (searchTerm === "") return val;
      else if (
        val.providerName.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return val;
      else if (val.date.includes(searchTerm)) {
        return val;
      }
    })
    .slice(indexOfFirstInvoice, indexOfLastInvoice);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (invoices.length !== 0)
    return (
      <div className="all-invoices">
        <label className="search-bar-lable">
          Search Provider or Date:
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </label>
        <table className="content-table">
          <thead>
            <tr>
              <th>Provider</th>
              <th>Date</th>
              <th>Beneficiary</th>
              <th>Code</th>
              <th>Total</th>
              <th>Option1</th>
              <th>Option2</th>
            </tr>
          </thead>
          <tbody>
            {currentInvoices
              // .filter((val) => {
              //   if (searchTerm === "") return val;
              //   else if (
              //     val.providerName
              //       .toLowerCase()
              //       .includes(searchTerm.toLowerCase())
              //   )
              //     return val;
              //   else if (val.date.includes(searchTerm)) return val;
              // })
              .map((data, key) => (
                <tr>
                  <td className="outside-td" key={key}>
                    <Link to={`/invoice/${data.invoiceId}`} className="link">
                      {data.providerName}
                    </Link>
                  </td>
                  <td>{data.date}</td>
                  <td>{data.beneficiaryName}</td>
                  <td>{data.registrationCode}</td>
                  <td>{data.totalPriceWithVAT}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={(e) => postDelete(e, data.invoiceId)}
                    >
                      Delete
                      <FaTrash />
                    </button>
                  </td>
                  <td>
                    <a
                      href={
                        "http://localhost:8080/invoice/" +
                        data.invoiceId +
                        "/print"
                      }
                    >
                      <button className="btn">
                        Print <FaPrint />
                      </button>
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {!searchTerm && (
          <Pagination
            invoicesPerPage={invoicesPerPage}
            totalInvoices={invoices.length}
            paginate={paginate}
          ></Pagination>
        )}
        {searchTerm && (
          <Pagination
            invoicesPerPage={invoicesPerPage}
            totalInvoices={invoices.length}
            paginate={paginate}
          ></Pagination>
        )}
      </div>
    );
  else return <div className="empty-invoices">No invoice to see.</div>;
};

export default Invoices;
