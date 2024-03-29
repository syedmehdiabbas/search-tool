import React from "react";
import ReactSelect from "react-select";

const customStyles = {
  control: (provided, state) => ({
    display: "flex",
    width: 160,
    border: "1px solid #718096",
    background: "transparent",
    borderRadius: "999px",
    color: "#718096",
    fontSize: "1rem",
    paddingLeft: "8px",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "6px",
  }),
  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#8A919B",
    };
  },
};

const customTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: "#E9D8FD", // purple.100 for option hover
    primary: "#B794F4", //purple.300 for select control outline
  },
});

function SelectFileType({ value, handleSelect, data, placeholder }) {
  const options = data.map((f) => ({ value: f, label: f }));

  return (
    <ReactSelect
      options={options}
      placeholder={placeholder}
      value={value}
      onChange={handleSelect}
      styles={customStyles}
      theme={customTheme}
      isClearable
    />
  );
}

export default SelectFileType;
