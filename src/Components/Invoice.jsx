import React from "react";
import "./Invoice.scss";
import { useParams } from "react-router-dom";

const Invoice = (data) => {
  const params = useParams();
  return (
    <div className="invoice">
      <div>Invoice data:{params}</div>
    </div>
  );
};

export default Invoice;
