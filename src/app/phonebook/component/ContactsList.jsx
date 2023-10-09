import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { isEdit } from "../../../feature/Reducer";

export default function ContactsList() {
  const contacts = useSelector((state) => state.phoneBook.value);
  const isFiltering = useSelector((state) => state.phoneBook.isFiltering);
  const filteredContact = useSelector((state) => state.phoneBook.filtered);
  const dispatch = useDispatch();

  function hideEditUi() {
    dispatch(isEdit(false));
  }
  if (isFiltering) {
    return (
      <ul>
        {filteredContact.map((contact, index) => (
          <li key={index} className="block-link border-b-gray-600 border-b">
            <Link onClick={hideEditUi} to={contact.phone}>
              {contact.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ul>
        {contacts.map((contact, index) => (
          <li key={index} className="block-link border-b-gray-600 border-b">
            <Link onClick={hideEditUi} to={contact.phone}>
              {contact.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
