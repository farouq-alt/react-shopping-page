import { useState } from "react";

function FormFill({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    capital: "",
    flag: "",
    continent: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        name="name"
        placeholder="Nom"
        value={formData.name}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        name="capital"
        placeholder="Capitale"
        value={formData.capital}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        name="flag"
        placeholder="URL Drapeau"
        value={formData.flag}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <input
        name="continent"
        placeholder="Continent"
        value={formData.continent}
        onChange={handleChange}
        className="form-control mb-2"
      />
      <button type="submit" className="btn btn-primary w-100">
        Ajouter
      </button>
    </form>
  );
}

export default FormFill