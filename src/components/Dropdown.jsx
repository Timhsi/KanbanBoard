import React from 'react';

const Dropdown = ({ label, options, selected, changeSelection }) => {
    const handleChange = (event) => changeSelection(event.target.value);

    return (
        <div style={dropdownCSS}>
            <span style={labelStyling}>{label}</span>
            <select style={selectStyle} value={selected} onChange={handleChange}>
                {options.map((option) =>
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                )}
            </select>
        </div>
    );
};

const dropdownCSS = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "10px 0",
};

const labelStyling = {
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "grey",
};

const selectStyle = {
    fontWeight: "bold",
    width: "100px",
    border: "0.5px solid grey",
    borderRadius: "3px",
    padding: "1px 5px",
    fontSize: "0.8rem",
};

export default Dropdown;