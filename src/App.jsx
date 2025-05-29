import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { Loader } from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { fetchContacts } from "./redux/contactsOps";


export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contacts.loading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          {loading && <Loader>Loading in progress, please wait</Loader>}
          {error && <Error>Error message</Error>}
          <ContactList />
        </div>
      </Container>
    </Section>
  );
}
