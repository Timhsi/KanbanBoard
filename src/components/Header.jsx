import React, { useState } from "react";
import Dropdown from './Dropdown'
import { BsList } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const sortOptions = [
  { label: "Status", value: "status" },
  { label: "Priority", value: "priority" },
  { label: "User", value: "user" },
];

const groupOptions = [
  { label: "Priority", value: "priority" },
  { label: "Title", value: "title" },
];

const Header = ({ groupBy, changeGroupBy, sortby, changeSortBy }) => {
  const [MenuVisible, setMenuVisible] = useState(false);
  return (
    <div style={{
        padding: "15px",
        background: "white",
    }}>
        <button style={buttonStyle} onClick={() => setMenuVisible(!MenuVisible)}>
            <BsList />
            <span style={{ margin: "0 5px" }}>Display</span>
            {MenuVisible ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </button>
        {MenuVisible && (
            <div style={dropdownContainerStyle}>
                <Dropdown label="Grouping" selected={groupBy} changeSelection={changeGroupBy} options={sortOptions} />
                <Dropdown label="Ordering" selected={sortby} changeSelection={changeSortBy} options={groupOptions} />
            </div>
        )}
    </div>
  );
}

const buttonStyle = {
    marginLeft: "15px",
    background: "#ecf0eb",
    border: "0.5px solid grey",
    borderRadius: "3px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const dropdownContainerStyle = {
    background: "white",
    width: "250px",
    border: "0.5px solid grey",
    padding: "0 15px",
    borderRadius: "5px",
    margin: "10px 20px",
    position: "absolute",
    left: "10px",
    top: "30px",
};

export default Header;
