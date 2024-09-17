import React from "react";

import addImg from "../../assets/tabler-icon-plus.svg";

interface TaskAdderProps {
  inputValue: string;
  isInputValid: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function TaskAdder({
  inputValue,
  isInputValid,
  onInputChange,
  onAddButtonClick,
}: TaskAdderProps) {
  return (
    <div className="adder">
      <input
        type="text"
        placeholder="Add task"
        className={isInputValid ? "valid" : "invalid"}
        value={inputValue}
        onChange={onInputChange}
      />
      <button
        className={isInputValid ? "valid" : "invalid"}
        onClick={onAddButtonClick}
      >
        <img src={addImg} />
      </button>
    </div>
  );
}
