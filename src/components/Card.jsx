import React from "react";
import Avatar from "react-avatar";
import icons from "../icons";
import { getRandomColor } from "../util";

const Card = ({ card }) => {
  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <span style={idStyle}>{card.id}</span>
        <span style={pfpStyle}>
          <Avatar
            size="20"
            round={true}
            textSizeRatio={1.75}
            color={getRandomColor(card.userName)}
            name={card.userName}
          />
        </span>
      </div>

      <div style={contentContainerStyle}>
        <span style={iconStyle}>{icons[card.status]}</span>
        <p style={titleStyle}>
          {card.title.length > 100
            ? card.title.slice(0,100) + "..."
            : card.title}
        </p>
      </div>

      <div style={tagsContainerStyle}>
        <span style={iconStyle}>{icons[card.priority]}</span>
        <div style={tagsStyle}>
          {card.tag.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

const cardStyle = {
  fontSize: "2 rem",
  border: "0.5px outset",
  background: "white",
  padding: "15px 20px",
  margin: "20px 0",
  borderRadius: "20px",
};

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const idStyle = {
  fontWeight: "bold",
  color: "grey",
};

const pfpStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};

const contentContainerStyle = {
  display: "flex",
  alignItems: "center",
  margin: "5px 0 ",
  gap: "5px",
};

const iconStyle = {
  display: "inline-block",
  verticalAlign: "middle",
};

const titleStyle = {
  fontWeight: "bold",
  height: "1.6rem",
  padding : "8px",
};

const tagsContainerStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "0.7rem",
  gap: "8px",
  padding: "8px",
};

const tagsStyle = {
  fontWeight: "bold",
  color: "grey",
  border: "0.1px solid grey",
  borderRadius: "3px",
  padding: "3px",
};

export default Card;