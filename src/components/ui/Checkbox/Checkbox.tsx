import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  isChecked: boolean;
  setChcked: () => void;
}

export function Checkbox({ isChecked, setChcked }: CheckboxProps) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={isChecked} onChange={setChcked} />
      <span className={styles.checkmark}></span>
    </label>
  );
}
