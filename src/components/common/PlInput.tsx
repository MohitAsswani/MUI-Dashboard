import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { TextField, MenuItem } from "@mui/material";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme:Theme) => ({
  plTextField: {
    background: "#fff",
    borderRadius: "6px",
    marginTop: "30px!important",
    width: "100%",
    "& .MuiInputLabel-root": {
      left: "-9px",
      top: "-10px",
      color: 'gray',
      fontWeight: 600,
    },
    "& .MuiInputBase-input": {
      height: "auto",
      padding: "10px 8px",
      borderRadius: "6px",
      boxShadow:"0px 0px 10px 0px #efefef"
    },
    "& .MuiOutlinedInput-notchedOutline": {
      top: 0,
      border: "none",
      boxShadow: "0 7px 64px 0 rgba(0, 0, 0, 0.07)",
    },
    "& legend": {
      display: "none",
    },
    "& input::placeholder": {
      fontSize: "14px",
      fontWeight: 600,
      color: "gray",
    },
  },
  disabled: {
    opacity: 0.7,
    pointerEvents: "none",
    background:'#EBEBEB !important',
    color:"black !important"
  },
}));

interface PlInputProps {
    id: string;
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string; // Add name prop here
    error?:boolean;
    showError?: boolean;
    errorMsg?: string;
    required?: boolean;
    isValid?: boolean;
    placeholder?: string;
    variant?: string;
    type?: string;
    icon?: any;
    isSelect?: boolean;
    list?: { value: string; label: string }[];
    showShadow?: boolean;
    showBorder?: boolean;
    multiline?: boolean;
    rows?: string;
    maxRows?: string;
    disabled?: boolean;
    helperText?:string;
  }

const PlInput: React.FC<PlInputProps> = ({
  id,
  label,
  value,
  onChange,
  showError,
  errorMsg,
  required,
  isValid,
  placeholder,
  variant,
  error,
  type,
  icon,
  isSelect,
  list,
  showShadow,
  showBorder,
  multiline,
  rows,
  maxRows,
  disabled,
}) => {
  const classes = useStyles();
  return (
    <TextField
      type={type ? type : "text"}
      className={`${classes.plTextField} ${
        disabled ? classes.disabled : ""
      }`}
      id={id}
      name={id}
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      InputProps={{
        startAdornment: icon,
      }}
      placeholder={placeholder}
      select={isSelect}
      sx={{
        boxShadow: showShadow ? "0 2px 10px 0 #c1c8ff" : "none",
        border: showBorder ? "1px solid #8097B1" : "none",
        height: rows ? rows : "none",
      }}
      value={value}
      onChange={onChange}
      required={required}
      error={required && !isValid && showError}
      helperText={required && !isValid && showError ? errorMsg : ""}
      multiline={multiline}
      rows={rows}
      maxRows={maxRows}
      disabled={disabled}
      SelectProps={{
        displayEmpty: true,
      }}
    >
      {isSelect &&
        list &&
        list.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
    </TextField>
  );
};

PlInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  showError: PropTypes.bool,
  errorMsg: PropTypes.string,
  required: PropTypes.bool,
  isValid: PropTypes.bool,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.any,
  isSelect: PropTypes.bool,
  list: PropTypes.array,
  showShadow: PropTypes.bool,
  showBorder: PropTypes.bool,
  multiline: PropTypes.bool,
  rows: PropTypes.string,
  helperText: PropTypes.string,
  maxRows: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool, // Add error prop to PropTypes
};
export default PlInput;
