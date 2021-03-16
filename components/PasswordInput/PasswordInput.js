import React from "react";
import "./PasswordInput.css";

function PasswordInput({ text }) {
  const [clicked, setClicked] = React.useState(false);
  const [inputFocus, setInputFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  function isValueSet() {
    if (value === "") {
      setClicked(false);
    } else {
      setClicked(true);
    }
    setInputFocus(false);
  }
  return (
    <div
      className={
        inputFocus
          ? "PasswordInputRow PasswordInputRowActive"
          : "PasswordInputRow"
      }
    >
      <label
        for={text}
        className={
          clicked
            ? "PasswordInputLabel PasswordInputLabelActive"
            : "PasswordInputLabel"
        }
      >
        {text}
      </label>
      <input
        type="text"
        className="PasswordInput"
        id={text}
        name="Password"
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => {
          setInputFocus(true);
          setClicked(true);
        }}
        onBlur={() => isValueSet()}
      />
    </div>
  );
}

export default PasswordInput;
