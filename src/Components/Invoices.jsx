import React, { useEffect, useCallback } from "react";
import "./Invoices.scss";
import { Link } from "react-router-dom";
import { FaTrash, FaPrint } from "react-icons/fa";
import axios from "axios";
import * as service from "../Services/Service.ts";

const Invoices = ({ data, len, seeInvoice }) => {
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

  // const handleRowClick = (event, idI) => {
  //   navigate(`/invoice/${idI}`);
  //   console.log(idI);
  //   console.log(2);
  // };
  // useEffect(() => {
  //   handleRowClick();
  // }, [handleRowClick]);

  if (len !== 0)
    return (
      <div className="all-invoices">
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
            {data.map((data, key) => (
              <tr>
                {/* onClick={handleRowClick(data.invoiceId)} */}
                <td className="outside-td" key={key}>
                  <Link to={`/invoice/${data.invoiceId}`} className="link">
                    <td className="inside-td">{data.providerName}</td>
                  </Link>
                </td>
                <td key={key}>
                  <Link to={`/invoice/${data.invoiceId}`} className="link">
                    <td>{data.date}</td>
                  </Link>
                </td>
                <td key={key}>
                  <Link to={`/invoice/${data.invoiceId}`} className="link">
                    <td>{data.beneficiaryName}</td>
                  </Link>
                </td>
                <td key={key}>
                  <Link to={`/invoice/${data.invoiceId}`} className="link">
                    <td>{data.registrationCode}</td>
                  </Link>
                </td>
                <td key={key}>
                  <Link to={`/invoice/${data.invoiceId}`} className="link">
                    <td>{data.totalPriceWithVAT}</td>
                  </Link>
                </td>
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
