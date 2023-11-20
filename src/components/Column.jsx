import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import CardList from "./CardList";

const Column = ({ column }) => {
  return (
    <div style={columnStyle}>
      <div style={headerStyle}>
        <div style={InfoStyle}>
          <span style={iconStyle}>{column.icon}</span>
          <span style={labelStyle}>{column.label}</span>
          <span style={cardCountStyle}>{column.cards.length}</span>
        </div>
        <div style={actionsStyle}>
          <AiOutlinePlus />
          <BsThreeDots />
        </div>
      </div>
      <CardList cards={column.cards} />
    </div>
  );
};

const columnStyle = {
  width: "100%",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const InfoStyle = {
  fontSize: "0.8rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
};

const iconStyle = {
  margin: "0 10px",
  height: "20px",
  width: "20px",
};

const labelStyle = {
  verticalAlign: "middle",
};

const cardCountStyle = {
  margin: "0 20px",
  color: "grey",
};

const actionsStyle = {
  display: "flex",
  gap: "5px",
};

export default Column;
