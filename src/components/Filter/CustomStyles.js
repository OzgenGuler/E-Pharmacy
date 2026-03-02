export const customStyles = {
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "60px",
    border: "1px solid rgba(29, 30, 33, 0.10)",
    height: "46px",
    background: "#fff",
    fontSize: "12px",
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "14px",
    background: "#FFF",
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.5",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "none",
    fontWeight: state.isSelected ? "600" : "500",
    color: state.isSelected ? "#1D1E21" : "#1D1E21",
    "&:hover": {
      backgroundColor: "rgba(89, 177, 122, 0.10)",
      cursor: "pointer",
      color: "#3F945F",
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    paddingLeft: "18px",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.5",
    color: "rgba(29, 30, 33, 0.6)",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontSize: "12px",
    fontWeight: "400",
    lineHeight: "1.5",
    textTransform: "capitalize",
    color: "1#1D1E2",
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: "none",
  }),
  indicatorsContainer: (baseStyles) => ({
    ...baseStyles,
    paddingRight: "8px",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: "1#1D1E2",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",
  }),
};
