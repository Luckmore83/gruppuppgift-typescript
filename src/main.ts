import './style.css'

//Interfaces and Types


// Interface definerar strukturen för en kontakt
// Gör så att alla objekt av typen Contact måste ha dessa fält
interface Contact {
  id: number; // Unikt id
  name: string; // Kontaktens namn
  email: string; // Kontaktens e-post
  active: boolean; // Online/Offline status

}

// Type alias för en lista av kontakter = en array av contact
type Contactlist = Contact[];

// Data (lista av kontakter)
// TS infererar varje objekt i arrayen,
// men "satisfies" garanterar att listan följer Contact[]
const contacts = [
  {id: 1, name: "Erik", email: "Erik@hej.com", active: true },
  {id: 2, name: "Fredrik", email: "Fredrik@halloj.com", active: true},
  {id: 3, name: "Ulf", email: "Ulf@tjena.com", active: false},
  {id: 4, name: "Helene", email: "Helene@tjo.com", active: false },
  {id: 5, name: "Sandra", email: "Sandra@tjim.com", active: true},
  {id: 6, name: "Peter", email: "Peter@tjenixen.com", active: false},
  {id: 7, name: "Alexandra", email: "Alexandra@hejsan.com", active: true },
  {id: 8, name: "Lina", email: "Lina@tjabba.com", active: false},
  {id: 9, name: "Tim", email: "Tim@otej.com", active: false}
] satisfies Contactlist;

// ForEach används för att skriva ut alla kontakter i webbläsarens console. 
// Använder färger (grön/röd) för att visa online/offline status grön=online och röd=offline förutom det används även "✅/❌" 
 contacts.forEach((contact) => {
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

// Funktion som bygger själva UI

// Starta appen direkt på document.body
function startApp() {
  // Skapar en rubrik
  const h1 = document.createElement("h1");
  h1.textContent = "Kontakter";
// Skapar ett sökfält
  const input = document.createElement("input");
  input.placeholder = "Sök kontakt...";
// Container som håller listan
  const listContainer = document.createElement("div");

  // Hjälpfunktion för att rita listan
  const updateList = (list: Contactlist) => {
    listContainer.innerHTML = ""; // rensar listan varje gång
    const ul = document.createElement("ul");

    // Loopa igenom kontakterna och lägger till <li> element
    list.forEach((c) => {
      const li = document.createElement("li");
      li.textContent = `${c.name} (${c.email}) ${c.active ? "✅" : "❌"}`;
      ul.appendChild(li);
    });
    listContainer.appendChild(ul);
  };

  // Initierar render för att visa alla kontakter
  updateList(contacts);

  // Filter logik vid sökning för att visa kontakten man söker på
  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    const filtered = contacts.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q)
    );
    updateList(filtered); // Ritar om listan med filtrerade kontakter
  });

  // Lägg in allt i <body>
  document.body.appendChild(h1);
  document.body.appendChild(input);
  document.body.appendChild(listContainer);
}

// Startar appen
startApp();