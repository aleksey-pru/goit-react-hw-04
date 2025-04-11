import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return toast.error("Can not be empty, please enter query");
    }
    console.log(query);
    onSubmit(query);
    setQuery("");
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <div className={s.formWrapper}>
          <input
            className={s.inputStyle}
            value={query}
            name="search"
            onChange={handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
