export const customStyles = {
  control: (provided, state) => ({
    display: "flex",
    width: "100%",
    border: "1px solid #A0AEC0",
    background: "transparent",
    borderRadius: "999px",
    color: "#718096",
    fontSize: "1rem",
    paddingLeft: "8px",
    flexFrow: "1",
    height: "40px"
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

export const customTheme = (theme) => ({
  ...theme,
  borderRadius: 0,
  colors: {
    ...theme.colors,
    primary25: "#E9D8FD", // purple.100 for option hover
    primary: "#B794F4", //purple.300 for select control outline
  },
});