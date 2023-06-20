import React from "react";
import Link from "next/link";
import styles from "./Index.module.css";

const Anchor = React.forwardRef(
  ({ onClick, path, disabled, children }, ref) => {
    return (
      <Link href={path} passHref
      rel="noopener noreferrer"
      onClick={onClick}
      disabled={disabled}
      ref={ref}
      >
         {children}
      </Link>
    );
  }
);
export default Anchor;
