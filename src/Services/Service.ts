import axios from "axios";

export function getInvoices() {
  return axios.get(`http://localhost:8080/invoices`);
}
