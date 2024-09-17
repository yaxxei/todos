import React from "react";

import addImg from "../../assets/tabler-icon-plus.svg";

interface TodoAdderProps {
  inputValue: string;
  isInputValid: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function TodoAdder({
  inputValue,
  isInputValid,
  onInputChange,
  onButtonClick,
}: TodoAdderProps) {
  return (
    <div className="adder">
      <input
        className={isInputValid ? "valid" : "invalid"}
        type="text"
        placeholder="Add ToDo"
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        onClick={onButtonClick}
        className={isInputValid ? "valid" : "invalid"}
      >
        <img src={addImg} />
      </button>
    </div>
  );
}
