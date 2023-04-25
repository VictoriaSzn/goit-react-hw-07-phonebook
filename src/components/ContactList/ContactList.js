import React from "react";
import styles from "../Form.module.css";
import { useSelector } from "react-redux";
import {useGetContactsQuery, useDeleteContactMutation} from "../../redux/ContactSlice";
import{selectFilter} from "../../redux/selector"

export const ContactList = () => {
  const { data } = useGetContactsQuery();
  const [delContact] = useDeleteContactMutation();
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
      {filterContacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.item}>
          {name + ": " + phone}
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



