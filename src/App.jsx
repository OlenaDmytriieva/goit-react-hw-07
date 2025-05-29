import ContactForm from "./components/ContactForm/ContactForm";
import { Container } from "./components/Container/Container";
import { Section } from "./components/Section/Section";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  return (
    <Section>
      <Container>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <SearchBox />
          <ContactList />
        </div>
      </Container>
    </Section>
  );
}
