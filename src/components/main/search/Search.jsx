import seacrhIcon from "./../../../content/Main/search.svg";
import moriInfoIcon from "./../../../content/Main/moreInfo.svg";

import "./Search.css";

function Search() {
  return (
    <form className="search__form">
      <input
        className="seacrh__form--input"
        type="text"
        placeholder="Найти товары"
      />
      <div className="search__form__wrapper__button">
        <p>
          Поиск по: <span>товарам</span>
        </p>
        <img src={moriInfoIcon} alt="more info" />
        <button className="search__form--button">
          <img src={seacrhIcon} alt="button icon" />
        </button>
      </div>
    </form>
  );
}

export default Search;
