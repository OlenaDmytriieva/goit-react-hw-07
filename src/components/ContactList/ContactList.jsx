import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { useSelector } from 'react-redux';

const getVisibleContacts = (contacts, filter) => {
      return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
};

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={style.ContactList}>
      {visibleContacts.map((contact) => (
        <li className={style.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;