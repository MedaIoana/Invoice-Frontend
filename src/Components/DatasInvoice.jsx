import React from "react";
import "./DatasInvoice.scss";

const DatasInvoice = ({
  date,
  setDate,
  providerName,
  setProviderName,
  providerAddress,
  setProviderAddress,
  registrationCode,
  setRegistrationCode,
  socialCapital,
  setSocialCapital,
  providerCUI,
  setProviderCUI,
  legalForm,
  setLegalForm,
  beneficiaryName,
  setBeneficiaryName,
  beneficiaryAddress,
  setBeneficiaryAddress,
  beneficiaryCUI,
  setBeneficiaryCUI,
}) => {
  return (
    <div className="invoice-datas">
      <div className="invoice">
        <input
          id="date"
          className="input"
          type="date"
          autoComplete="off"
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Date:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="providerName"
          className="input"
          type="text"
          required
          value={providerName}
          onChange={(e) => setProviderName(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Provider name:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="providerAddress"
          className="input"
          type="text"
          required
          value={providerAddress}
          onChange={(e) => setProviderAddress(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Provider address:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="registrationCode"
          className="input"
          type="text"
          required
          value={registrationCode}
          onChange={(e) => setRegistrationCode(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Registration code:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="socialCapital"
          className="input"
          type="text"
          required
          value={socialCapital}
          onChange={(e) => setSocialCapital(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Social capital:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="providerCUI"
          className="input"
          type="text"
          required
          value={providerCUI}
          onChange={(e) => setProviderCUI(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Provider CUI:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="legalForm"
          className="input"
          type="text"
          required
          value={legalForm}
          onChange={(e) => setLegalForm(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Legal form:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="beneficiaryName"
          className="input"
          type="text"
          required
          value={beneficiaryName}
          onChange={(e) => setBeneficiaryName(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Beneficiary name:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="beneficiaryAddress"
          className="input"
          type="text"
          required
          value={beneficiaryAddress}
          onChange={(e) => setBeneficiaryAddress(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Beneficiary address:</span>
        </label>
      </div>
      <div className="invoice">
        <input
          id="beneficiaryCUI"
          className="input"
          type="text"
          required
          value={beneficiaryCUI}
          onChange={(e) => setBeneficiaryCUI(e.target.value)}
        />
        <label className="lable">
          <span className="lable-content">Beneficiary CUI:</span>
        </label>
      </div>
    </div>
  );
};

export default DatasInvoice;
