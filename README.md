# gruppuppgift-typescript
Interfaces och Types

**Introduktion**
Interfaces och Types är väldigt lika i sitt utförande och kan lätt förväxlas. Med t.ex. Types så kan man ange vilket värde den ska ha:

*Exempel*

type ID = string;  Då säger jag åt den att ID ska bara ta emot strängar.
type State = "gas" | "fast" | "flytande";  Dessa är en union, flera möjliga types

type Result = {
    x: number;
    y: number;          En objektstruktur
};

Med interfaces kan jag beskriva objektets struktur. Det ser väldigt mycket ut som Types men Interfaces kan utökas.

*Exempel*

interface Animal {
    name: string;
    habitat: string;           Väldigt användbart och man kan bygga
    legs: number;              vidare på detta om det behövs.
    laysEggs: boolean;
}

**Vanliga fel och felsökning**

*Exempel 1*

Ett misstag man kan råka göra är:

interface State = "gas" | "fast" | "flytande";

Detta går inte TypeScript med på eftersom interface inte kan användas för unions, då måste man byta till type.

type State = "gas" | "fast" | "flytande";

*Exempel 2*

type Animal {
    name: string;
    habitat: string; 
}

interface Animal {
    name: string;
    habitat: string;
}

Ett annat misstag är att man kan tro att man kan använda vilken som helst av dessa två och det gör inget. Ja, men inte om man sedan vill utöka objektet, då är det bättre att använda sig av interface som kan utökas.

*Exempel 3*

interface Guest {
    name: string;
    partySize: number;
    email: string;
}

const g: Guest = { name: "Frank", partySize: 4 };    

Då ger TypeScript ett fel eftersom man inte skrivit in sin email. Ibland måste inte alla fält vara obligatoriska att fylla i, så då kan man istället göra så här:

interface Guest {
    name: string;
    partySize: number;
    email?: string;
}

Med frågetecknet gör man det fältet valfritt.

**Ert kompletta program**

Konceptet med detta program är att hålla koll på sina kontakter och få reda på om de är online eller inte. Du kan även söka upp dina kontakter.

*Köra programmet*

I terminalen, skriv in:

npm init vite@latest .

välj Vanilla

välj Typescript

npm install

sedan npm run dev

inne på sidan kommer du kunna se dina kontakter

du kommer att kunna se vem som är online och offline


**Övningsuppgift** 

*Filtrera kontakter efter status:* 
- Lägg till en **toggle button** som växlar mellan att visa endast online- och offline kontakter.
- knappen ska ändra färg när den är aktiverad, så användaren tydligt ser ser om filtret är på eller inte. 

*Ledtrådar:*  
- Använd `addEventListener("click", ...)` för att filtrera listan.  
- Återanvänd `updateList` för att rita om listan efter filtreringen.

