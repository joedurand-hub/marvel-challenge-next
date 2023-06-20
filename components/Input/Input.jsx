import styles from "./Index.module.css";
import { DebounceInput } from 'react-debounce-input'

const Input = ({
  label,
  name,
  placeholder,
  type,
  minLength,
  maxLength,
  pattern,
  min,
  max,
  value,
  required,
  onChange,
  onKeyUp,
  onBlur,
  validate,
  error,
}) => {
  return (
    <div className={styles.field}>
      {label && (
        <label className={styles.field_label} htmlFor={name}>
          {label}
        </label>
      )}
      <DebounceInput
      className={styles.field_input}
        debounceTimeout={500}
        type={type}
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        min={min}
        max={max}
        validate={validate}
        value={value}
        onKeyUp={onKeyUp}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <p className={styles.field_input_error}>{error}</p>}
    </div>
  );
};

export default Input;
