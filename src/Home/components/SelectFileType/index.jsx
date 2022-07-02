import React from "react";
import ReactSelect from "react-select";
import fileTypes from "./../../../data/fileTypes";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: 200,
    borderRadius: "999px",
    background: "#edf2f7",
    fontSize: "14px",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "6px",
  }),
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

function SelectFileType({ value, handleSelect }) {
  const options = fileTypes.map((f) => ({ value: f, label: f }));

  return (
    <ReactSelect
      options={options}
      placeholder="File Type"
      value={value}
      onChange={handleSelect}
      styles={customStyles}
      theme={customTheme}
    />
  );
}

export default SelectFileType;
