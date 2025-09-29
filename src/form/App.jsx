import { useState } from "react";
import FormFill from "./done/form/FormFill.jsx";
import Card from "./Card.js";

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = (country) => {
    setCountries([...countries, country]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Liste des Pays</h1>

      <FormFill onSubmit={addCountry} />

      {countries.map((c, index) => (
        <Card
          key={index}
          name={c.name}
          capital={c.capital}
          flag={c.flag}
          continent={c.continent}
        />
      ))}
    </div>
  );
}

export default App