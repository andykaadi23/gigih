import React from "react";

export default function Button({ children, type, onClick }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}
