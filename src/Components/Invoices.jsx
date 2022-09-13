import React, { useEffect, useState } from "react";
import "./Invoices.scss";
import { Link } from "react-router-dom";
import { FaTrash, FaPrint } from "react-icons/fa";
import axios from "axios";
import * as service from "../Services/Service.ts";

const Invoices = ({ data, len, seeInvoice }) => {
  const [searchTerm, setSearchTerm] = useState("");
  function postDelete(e, id) {
    axios
      .delete(`http://localhost:8080/invoice/${id}`)
      .then((res) => {
        seeInvoice();
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    service.getInvoices();
    console.table(service.getInvoices());
  }, []);

  if (len !== 0)
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
            {data
              .filter((val) => {
                if (searchTerm === "") return val;
                else if (
                  val.providerName
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                  return val;
                else if (val.date.includes(searchTerm)) return val;
                // else if (
                //   val.beneficiaryName
                //     .toLowerCase()
                //     .includes(searchTerm.toLowerCase())
                // )
                //   return val;
              })
              .map((data, key) => (
                <tr>
                  <td className="outside-td">
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
      </div>
    );
  else return <div className="empty-invoices">No invoice to see.</div>;
};

export default Invoices;
