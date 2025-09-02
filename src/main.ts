import './style.css'

//Interfaces and Types
interface Contact {
  id: number;
  name: string;
  email: string;
  active: boolean;

}

type Contactlist = Contact[];

//Data
const contacts: Contactlist = [
  {id:1, name: "Erik", email: "Erik@hej.com", active: true },
  {id:2, name: "Fredrik", email: "Fredrik@halloj.com", active: true},
  {id:3, name: "Ulf", email: "Ulf@tjena.com", active: false}
];

 contacts.forEach(contact => {
  if (contact.active) {
    console.log(
      `%c${contact.name} (${contact.email}) - Online`,
      "color: green; font-weight: bold;"
    );
  } else {
    console.log(
      `%c${contact.name} (${contact.email}) - Offline`,
      "color: red; font-weight: bold;"
    );
  }
});