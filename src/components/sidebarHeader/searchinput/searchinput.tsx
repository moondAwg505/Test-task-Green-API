import style from "./searchinput.module.css";
import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <form className={style.form} aria-label="Форма поиска">
      <Search className={style.search} />
      <input
        className={style.input}
        placeholder="Search"
        aria-label="Строка поиска"
      />
    </form>
  );
};

export default SearchInput;
