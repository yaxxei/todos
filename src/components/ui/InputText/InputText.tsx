import { useRef } from "react";
import styles from "./InputText.module.scss";

interface InputTextProps {
  isInputValid: boolean;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export function InputText({
  isInputValid,
  onInputChange,
  onButtonClick,
}: InputTextProps) {
  let inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
        className={isInputValid ? styles.valid : styles.invalid}
        placeholder="Start input"
        onChange={onInputChange}
      />
      <button
        className={isInputValid ? styles.valid : styles.invalid}
        onClick={onButtonClick}
      >
        +
      </button>
    </div>
  );
}
