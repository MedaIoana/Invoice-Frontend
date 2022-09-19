import "./App.css";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import Invoices from "./Components/Invoices";
import CreateInvoice from "./Components/CreateInvoice";
import Invoice from "./Components/Invoice";
import { InvoicesContext } from "./Contexts/InvoicesContexts";

function App() {
  const [data, setData] = useState([]);

  const value = useMemo(() => ({ data, setData }), [data, setData]);

  const [fetchError, setFetchError] = useState(null);

  function getInvoices() {
    return axios.get(`http://localhost:8080/invoices`);
  }

  const seeInvoice = async () => {
    await getInvoices()
      .then((result) => {
        setData(result.data);
        setFetchError(null);
      })
      .catch(function (err) {
        setFetchError("ERROR: " + err);
      });
  };

  useEffect(() => {
    seeInvoice();
  }, []);

  return (
    <div className="App">
      {fetchError && <p className="error">{`Error: ${fetchError}`}</p>}
      {!fetchError && (
        <InvoicesContext.Provider value={value}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/all"
              element={
                <Invoices
                  // data={data}
                  // len={data.length}
                  seeInvoice={seeInvoice}
                />
              }
            />
            <Route
              path="/new"
              element={<CreateInvoice seeInvoice={seeInvoice} />}
            />
            <Route path="/invoice/:id" element={<Invoice data={data} />} />
          </Routes>
        </InvoicesContext.Provider>
      )}
    </div>
  );
}

export default App;
