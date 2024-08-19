import "./App.css";
import Button from "./components/Button/Button";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
      <ContactHeader />
      <ContactForm />
      </main>
      { <Button /> }
    </div>
  );
};
export default App;
