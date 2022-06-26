import "./App.css";
import Contact from "./components/Contact.js";
import Header from "./components/Header.js";

// Uncomment untuk memuat daftar kontak
// import contacts from './data/contacts.json';
import contacts from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  return (
    <div className="App">
      <Header />
      <div className="kartu">
        <Contact data={contacts[0]} />
        <Contact data={contacts[1]} />
        <Contact data={contacts[2]} />
        <Contact data={contacts[3]} />
        <Contact data={contacts[4]} />
        <Contact data={contacts[5]} />
      </div>
    </div>
  );
};

export default App;
