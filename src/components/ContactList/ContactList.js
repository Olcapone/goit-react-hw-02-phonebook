import React from "react";
import shortid from "shortid";

export default function ContactList({ ...props }) {
  console.log({ ...props.date });

  return (
    <ul>
      {props.date.map((contact) => (
        <li key={shortid.generate()}>
          {contact.name} : {contact.number}{" "}
        </li>
      ))}
    </ul>
  );
}
