import React from "react";
import "./UsernameInput.css";

function UsernameInput({ text }) {
  const [clicked, setClicked] = React.useState(false);
  const [UsernameInputFocus, setUsernameInputFocus] = React.useState(false);
 
  return (
    <div
      className={
        UsernameInputFocus ? "UsernameInputRow UsernameInputRowActive" : "UsernameInputRow"
      }
    >
      <label
        for={text}
        className={
          clicked ? "UsernameInputLabel UsernameInputLabelActive" : "UsernameInputLabel"
        }
      >
        {text}
      </label>
      <UsernameInput     
       label={text}
        className="UsernameInput"
        onFocus={() => {
          setUsernameInputFocus(true);
          setClicked(true);
        }}
      />
    </div>
  );
}

export default UsernameInput;
