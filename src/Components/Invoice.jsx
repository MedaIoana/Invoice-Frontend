import React from "react";
import "./Invoice.scss";
import { useParams } from "react-router-dom";

const Invoice = (data) => {
  const { id } = useParams();

  //console.log(data);
  //const invoice = function (data) {
  //data = JSON.parse(data);
  console.log(data);
  // data.forEach((element) => {
  //   //if (element.invoiceId === id) return element;
  //   console.log(element);
  // });
  //};
  //console.log(invoice);
  return (
    <div className="invoice">
      <div className="general-data">
        <div className="invoice-data">Invoice data:{id}</div>
        <div className="delete-button">Delete button</div>
      </div>
      <div className="p-b-data">
        <div className="provider-data">Provider Data</div>
        <div className="beneficiary-data">Beneficiary Data</div>
      </div>
    </div>
  );
};

export default Invoice;
