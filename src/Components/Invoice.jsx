import React from "react";
import "./Invoice.scss";
import { useParams, useNavigate } from "react-router-dom";
import { FaTrash, FaPrint } from "react-icons/fa";
import axios from "axios";

const Invoice = (data) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const inv = data.data.find(findId);

  function findId(data) {
    return data.invoiceId == id;
  }

  function postDelete(e, id) {
    axios
      .delete(`http://localhost:8080/invoice/${id}`)
      .then((res) => {
        navigate("/all");
      })
      .catch((err) => console.log(err));
  }
  console.log(inv);

  return (
    <div className="invoice">
      <div className="general-data">
        <div className="invoice-data">
          <div className="i-title">Invoice Data</div>
          Registration Number: {id}
          <br />
          Date: {inv.date}
        </div>
        <div className="delete-button">
          <button className="btn" onClick={(e) => postDelete(e, inv.invoiceId)}>
            Delete
            <FaTrash />
          </button>
        </div>
      </div>
      <div className="p-b-data">
        <div className="provider-data">
          <div className="p-title">Provider Data</div>
          Name: {inv.providerName}
          <br />
          Adress: {inv.providerAdress}
          <br />
          Registration Code: {inv.registrationCode}
          <br />
          Social Capital: {inv.socialCapital}
          <br />
          Registration Code: {inv.providerCUI}
          <br />
          Legal Form: {inv.legalForm}
        </div>
        <div className="beneficiary-data">
          <div className="b-title">Beneficiary Data</div>
          Name: {inv.beneficiaryName}
          <br />
          Adress: {inv.beneficiaryAdress}
          <br />
          Registration Code: {inv.beneficiaryCUI}
        </div>
      </div>
      <div className="details">
        <table className="items-table">
          <thead>
            <tr>
              <td>
                Nr.
                <br />
                Crt.
              </td>
              <td>
                Item
                <br />
                Name
              </td>
              <td>Quantity</td>
              <td>
                Unit price
                <br />
                without VAT
              </td>
              <td>
                Total price
                <br />
                without VAT
              </td>
              <td>VAT value</td>
              <td>
                Unit price
                <br />
                with VAT
              </td>
              <td>
                Total price
                <br />
                with VAT
              </td>
            </tr>
          </thead>
          <tbody>
            {inv.itemList.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.itemName}</td>
                <td>{item.itemQuantity}</td>
                <td>{item.pricePerUnitNoVAT}</td>
                <td>{Math.round(item.pricePerQuantityNoVAT * 100) / 100}</td>
                <td>{item.applicableVAT}</td>
                <td>{Math.round(item.pricePerUnitWithVAT * 100) / 100}</td>
                <td>{Math.round(item.pricePerQuantityWithVAT * 100) / 100}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="total">
        <div className="withoutTVA">
          Total price without VAT:
          <br />
          {inv.totalPriceNoVAT}
        </div>
        <div className="withTVA">
          Total price with VAT:
          <br />
          {inv.totalPriceWithVAT}
        </div>
      </div>
      <div className="print-button">
        <a href={"http://localhost:8080/invoice/" + inv.invoiceId + "/print"}>
          <button className="btn">
            Print <FaPrint />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Invoice;
