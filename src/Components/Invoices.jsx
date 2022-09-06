import React from "react";
import "./Invoices.scss";
import { useNavigate, Link } from "react-router-dom";
import { FaTrash, FaPrint } from "react-icons/fa";
import axios from "axios";

const Invoices = ({ data, len, seeInvoice }) => {
  const navigate = useNavigate();

  function postDelete(e, id) {
    axios
      .delete(`http://localhost:8080/invoice/${id}`)
      .then((res) => {
        seeInvoice();
      })
      .catch((err) => console.log(err));
  }

  // useEffect(() => {
  //   postDelete();
  // }, []);

  function handleRowClick(e, idI) {
    //navigate.push("/invoice", { id: idI });
  }

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
            {data.map((data) => (
              <tr>
                <Link
                  to={{ pathname: "/invoice", state: { id: data.invoiceId } }}
                >
                  <td onClick={(e) => handleRowClick(e, data.invoiceId)}>
                    {data.providerName}
                  </td>
                </Link>
                <td onClick={(e) => handleRowClick(e, data.invoiceId)}>
                  {data.date}
                </td>

                <td onClick={(e) => handleRowClick(e, data.invoiceId)}>
                  {data.beneficiaryName}
                </td>
                <td onClick={(e) => handleRowClick(e, data.invoiceId)}>
                  {data.registrationCode}
                </td>
                <td onClick={(e) => handleRowClick(e, data.invoiceId)}>
                  {data.totalPriceWithVAT}
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
