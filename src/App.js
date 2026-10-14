import { useState } from "react";
import "./styles.css";

export default function App() {
  // const [name, setName] = useState("");
  // const [strasse, setStrasse] = useState("");
  // const [hausnummer, setHausnummer] = useState(0);
  //Ubung 1
  //const [adress, setAdress] = useState({
  //  name: "",
  //  strasse: "",
  //  hausnummer: 0,});

  const defaultAdress = {
    name: "",
    strasse: "",
    hausnummer: 0,
  };

  const [adress, setAdress] = useState(defaultAdress)

  return (
    <div id="app">
      <header>Übung WID 4 - Object State </header>
      <h4>Lieferung an</h4>
      <div id="adressEingabe">
        <div className="container">
          <span>Nachname</span>
          <input
            className="input"
            placeholder="Nachname"
            type="text"
            value={adress.name}
            onChange={(e) => setAdress({ ...adress, name: e.target.value })}
          />
        </div>
        <div className="container">
          <span>Strasse</span>
          <input
            className="input"
            placeholder="Strassenname"
            type="text"
            value={adress.strasse}
            onChange={(e) => setAdress({ ...adress, strasse: e.target.value })}
          />
        </div>
        <div className="container">
          <span>Hausnummer</span>
          <input
            className="input"
            type="number"
            value={adress.hausnummer}
            onChange={(e) => setAdress({ ...adress, hausnummer: parseInt(e.target.value) })} // String aus Event wird zu Zahl
          />
        </div>
        <button
          className="Button"
          onClick={() => {
            // Zeigt die Eingaben aus den Feldern als Popup:
            alert(`Gesendet an ${adress.name}, in ${adress.strasse} ${adress.hausnummer}`);
          }}
        >
          Absenden
        </button>
        <button className="Button" onClick={() =>
          setAdress(defaultAdress)}>
          Zurücksetzen
        </button>
      </div>
    </div>
  );
}
