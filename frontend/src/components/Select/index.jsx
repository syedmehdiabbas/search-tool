import React from "react";
import ReactSelect from "react-select";
import {Box} from "@chakra-ui/react"

const customStyles = {
  control: (provided, state) => ({
    display: "flex",
    width: "100%",
    border: "1px solid #A0AEC0",
    background: "transparent",
    borderRadius: "999px",
    color: "#718096",
    fontSize: "1rem",
    paddingLeft: "8px",
    flexFrow: "1"
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

function Select({ value, handleSelect, options, placeholder }) {
  return (
    <Box
      width="full"
    >
      <ReactSelect
        options={options}
        placeholder={placeholder}
        value={value}
        onChange={handleSelect}
        styles={customStyles}
        theme={customTheme}
        isClearable
        tabIndex={4}
        isSearchable={false}
        />
    </Box>
  );
}

export default Select;
