import React from "react";
import shortid from "shortid";
import s from "./ContactList.module.css";

export default function ContactList({ date, onDelete }) {
  return (
    <ul className={s.list}>
      {date.map(({ name, number }) => (
        <li className={s.item} key={shortid.generate()}>
          {name} : {number}{" "}
          <button
            className={s.button}
            type="button"
            onClick={() => onDelete(name)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
