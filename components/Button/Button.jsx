import styles from "./Index.module.css";
const Button = ({ name, onSubmit, onClick, type, disabled, }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      name={name}
      className={styles.button}
    >
      {name}
    </button>
  );
};

export default Button;
