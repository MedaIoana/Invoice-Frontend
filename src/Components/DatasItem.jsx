import React from "react";
import "./DatasItem.scss";

const DatasItem = ({
  index,
  itemList,
  setItemList,
  itemName,
  setItemName,
  itemQuantity,
  setItemQuantity,
  aplicableVAT,
  setAplicableVAT,
  pricePerUnitNoVAT,
  setPricePerUnitNoVAT,
}) => {
  const handleItemChange = (e, index) => {
    const { name, value } = e;
    const list = [...itemList];
    list[index][name] = value;
    setItemList(list);
  };
  return (
    <div className="datas-item">
      <label>Name: </label>
      <input
        id="itemName"
        name="itemName"
        className="input"
        type="text"
        placeholder="ex: biscuiti"
        required
        value={itemName}
        onChange={(e) => handleItemChange(e, index)}
      />
      <label>Quantity: </label>
      <input
        id="itemQuantity"
        name="itemQuantity"
        className="input"
        type="text"
        placeholder="ex: 15"
        required
        value={itemQuantity}
        onChange={(e) => handleItemChange(e, index)}
      />
      <label>VAT to apply: </label>
      <input
        id="aplicableVAT"
        name="aplicableVAT"
        className="input"
        type="text"
        placeholder="ex: 15"
        required
        value={aplicableVAT}
        onChange={(e) => handleItemChange(e, index)}
      />
      <label>Price per unit without VAT: </label>
      <input
        id="pricePerUnitNoVAT"
        name="pricePerUnitNoVAT"
        className="input"
        type="text"
        placeholder="ex: 15"
        required
        value={pricePerUnitNoVAT}
        onChange={(e) => handleItemChange(e, index)}
      />
    </div>
  );
};

export default DatasItem;
