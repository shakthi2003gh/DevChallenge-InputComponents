const Input = ({
  value,
  placeholder,
  label,
  error,
  helperText,
  startIcon,
  endIcon,
  size,
  fullWidth,
  multiline,
  row,
  col,
  ...rest
}) => {
  const id = Date.now();
  const e = error ? " error" : "";
  const paddingBlock = size === "sm" ? "10px" : "";
  const widthFull = fullWidth ? "100%" : "";
  const startPadding = startIcon ? { paddingLeft: "45px" } : {};
  const endPadding = endIcon ? { paddingRight: "45px" } : {};

  return (
    <div className={"input-group" + e} style={{ width: widthFull }}>
      {startIcon && (
        <span className="material-symbols-outlined start">
          {startIcon === true ? "call" : startIcon}
        </span>
      )}

      <label htmlFor={id}>{label || "Label"}</label>

      {multiline ? (
        <textarea
          id={id}
          rows={row || ""}
          cols={col || ""}
          placeholder={placeholder || "Placeholder"}
          defaultValue={value || ""}
          {...rest}
        ></textarea>
      ) : (
        <input
          id={id}
          placeholder={placeholder || "Placeholder"}
          defaultValue={value || ""}
          style={{ paddingBlock: paddingBlock, ...startPadding, ...endPadding }}
          {...rest}
        />
      )}

      {endIcon && (
        <span className="material-symbols-outlined end">
          {endIcon === true ? "lock" : endIcon}
        </span>
      )}

      {helperText && <p>{helperText}</p>}
    </div>
  );
};

export default Input;
