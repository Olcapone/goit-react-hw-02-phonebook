import React from "react";
import shortid from "shortid";

export default function ContactList({ date, onDelete }) {
  return (
    <ul>
      {date.map(({ name, number }) => (
        <li key={shortid.generate()}>
          {name} : {number}{" "}
          <button type="button" onClick={() => onDelete(name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
