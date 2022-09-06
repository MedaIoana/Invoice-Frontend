import React from "react";
import "./CreateInvoice.scss";
import DatasInvoice from "./DatasInvoice";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaCheck } from "react-icons/fa";

const CreateInvoice = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState("");
  const [providerName, setProviderName] = useState("");
  const [providerAddress, setProviderAddress] = useState("");
  const [registrationCode, setRegistrationCode] = useState("");
  const [socialCapital, setSocialCapital] = useState("");
  const [providerCUI, setProviderCUI] = useState("");
  const [legalForm, setLegalForm] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  const [beneficiaryCUI, setBeneficiaryCUI] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(0);
  const [aplicableVAT, setAplicableVAT] = useState(0);
  const [pricePerUnitNoVAT, setPricePerUnitNoVAT] = useState(0);

  const [itemList, setItemList] = useState([
    {
      itemName: itemName,
      itemQuantity: itemQuantity,
      aplicableVAT: aplicableVAT,
      pricePerUnitNoVAT: pricePerUnitNoVAT,
    },
  ]);

  const handleItemAdd = () => {
    setItemList([
      ...itemList,
      {
        itemName: itemName,
        itemQuantity: itemQuantity,
        aplicableVAT: aplicableVAT,
        pricePerUnitNoVAT: pricePerUnitNoVAT,
      },
    ]);
  };

  const handleItemRemove = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
  };

  const handleItemChange = (e, index) => {
    const list = [...itemList];
    if (
      e.target.name === "itemQuantity" ||
      e.target.name === "aplicableVAT" ||
      e.target.name === "pricePerUnitNoVAT"
    )
      list[index][e.target.name] = parseFloat(e.target.value);
    else list[index][e.target.name] = e.target.value;
    setItemList(list);
  };

  const handleCreateInvoice = async (e) => {
    e.preventDefault();
    const newInvoice = {
      date: date,
      providerName: providerName,
      providerAdress: providerAddress,
      registrationCode: registrationCode,
      socialCapital: socialCapital,
      providerCUI: providerCUI,
      legalForm: legalForm,
      beneficiaryName: beneficiaryName,
      beneficiaryAdress: beneficiaryAddress,
      beneficiaryCUI: beneficiaryCUI,
      itemList: itemList,
    };
    await axios
      .post(`http://localhost:8080/invoice`, newInvoice)
      .then((res) => {
        navigate("/invoice");
      })
      .catch(function (err) {
        console.log("ERROR: " + err);
      });
  };

  return (
    <div className="create-form">
      <p className="create">Create new invoice</p>
      <div className="datas">
        <DatasInvoice
          date={date}
          setDate={setDate}
          providerName={providerName}
          setProviderName={setProviderName}
          providerAddress={providerAddress}
          setProviderAddress={setProviderAddress}
          registrationCode={registrationCode}
          setRegistrationCode={setRegistrationCode}
          socialCapital={socialCapital}
          setSocialCapital={setSocialCapital}
          providerCUI={providerCUI}
          setProviderCUI={setProviderCUI}
          legalForm={legalForm}
          setLegalForm={setLegalForm}
          beneficiaryName={beneficiaryName}
          setBeneficiaryName={setBeneficiaryName}
          beneficiaryAddress={beneficiaryAddress}
          setBeneficiaryAddress={setBeneficiaryAddress}
          beneficiaryCUI={beneficiaryCUI}
          setBeneficiaryCUI={setBeneficiaryCUI}
        />
        <div className="wrapper-items">
          {itemList.map((singleItem, index) => (
            <div key={index}>
              {itemList.length > 1 && (
                <button
                  type="button"
                  className="remove-btn"
                  onClick={() => handleItemRemove(index)}
                >
                  <span className="remove-text">Remove</span>
                  <span className="remove-icon">
                    <FaTrash />
                  </span>
                </button>
              )}
              {/* <DatasItem
              index={index}
              itemName={singleItem.itemName}
              setItemName={setItemName}
              itemQuantity={singleItem.itemQuantity}
              setItemQuantity={setItemQuantity}
              aplicableVAT={singleItem.aplicableVAT}
              setAplicableVAT={setAplicableVAT}
              pricePerUnitNoVAT={singleItem.pricePerUnitNoVAT}
              setPricePerUnitNoVAT={setPricePerUnitNoVAT}
            /> */}
              <div className="datas-item">
                <span className="title">Item</span>
                <div className="item">
                  <input
                    id="itemName"
                    name="itemName"
                    className="input"
                    type="text"
                    required
                    value={singleItem.itemName}
                    onChange={(e) => handleItemChange(e, index)}
                  />
                  <label className="lable">
                    <span className="lable-content">Name:</span>
                  </label>
                </div>
                <div className="item">
                  <input
                    id="itemQuantity"
                    name="itemQuantity"
                    className="input"
                    type="number"
                    required
                    value={singleItem.itemQuantity}
                    onChange={(e) => handleItemChange(e, index)}
                  />
                  <label className="lable">
                    <span className="lable-content">Quantity:</span>
                  </label>
                </div>
                <div className="item">
                  <input
                    id="aplicableVAT"
                    name="aplicableVAT"
                    className="input"
                    type="number"
                    required
                    value={singleItem.aplicableVAT}
                    onChange={(e) => handleItemChange(e, index)}
                  />
                  <label className="lable">
                    <span className="lable-content">VAT to apply:</span>
                  </label>
                </div>
                <div className="item">
                  <input
                    id="pricePerUnitNoVAT"
                    name="pricePerUnitNoVAT"
                    className="input"
                    type="number"
                    required
                    value={singleItem.pricePerUnitNoVAT}
                    onChange={(e) => handleItemChange(e, index)}
                  />
                  <label className="lable">
                    <span className="lable-content">
                      Price per unit without VAT:
                    </span>
                  </label>
                </div>
              </div>
              {itemList.length - 1 === index && (
                <button
                  type="button"
                  className="add-btn"
                  onClick={handleItemAdd}
                >
                  <span className="add-text">Item</span>
                  <span className="add-icon">
                    <FaPlus />
                  </span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="button-create">
        <button
          type="submit"
          className="create-btn"
          onClick={(e) => {
            handleCreateInvoice(e);
          }}
        >
          <span className="create-text">Create</span>
          <span className="create-icon">
            <FaCheck />
          </span>
        </button>
      </div>
    </div>
  );
};

export default CreateInvoice;
