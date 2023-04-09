import React from "react";
import styles from "../Form.module.css";
import { useSelector } from "react-redux";
import {getContactsQuery, delContactMutation} from "../../redux/ContactSlice";
import{selectFilter} from "../../redux/selector"

export const ContactList = () => {
  const { data } = getContactsQuery();
  const [delContact] = delContactMutation();
  const filter = useSelector(selectFilter);


  const handleDelContact = id => {
    delContact(id);
  };

   if (!data) {
    return;
  }

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = data.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });
  return(
    <ul className={styles.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name + ": " + number}
          {
            <button
              className={styles.btn}
              type="button"
              name="delte"
              onClick={() => handleDelContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  )
};



