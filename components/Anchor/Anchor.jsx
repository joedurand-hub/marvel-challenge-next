import React from "react";
import Link from "next/link";
import styles from "./Index.module.css";

const Anchor = React.forwardRef(
  ({ onClick, path, name, disabled, children }, ref) => {
    return (
      <Link href={path} passHref
      rel="noopener noreferrer"
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      >
          {name} {children}
      </Link>
    );
  }
);
export default Anchor;
