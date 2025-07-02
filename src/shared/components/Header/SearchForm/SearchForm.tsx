import React, { ChangeEvent, FC, useEffect, useRef, useState, FormEvent } from "react";
import s from "./SearchForm.module.css";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

interface SearchFormProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const SearchForm: FC<SearchFormProps> = ({ onSearch, placeholder = "Поиск..." }) => {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
    inputRef.current?.focus();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(searchValue.trim());
  };

  return (
    <form className={s.searchContainer} onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className={s.searchInput}
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {searchValue && (
        <button
          type="button"
          className={s.clearButton}
          onClick={handleClear}
          aria-label="Очистить поиск"
        >
          <ClearIcon />
        </button>
      )}
      <button type="submit" className={s.searchButton} aria-label="Начать поиск">
        <SearchIcon />
      </button>
    </form>
  );
};

export default SearchForm;
