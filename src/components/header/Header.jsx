import SubMenu from "../subMenu/SubMenu";
import { useRef, useState, useEffect } from "react";

import logotype from "./../../content/Header/logotype.svg";
import catalog from "./../../content/Header/catalogIcon.svg";
import bag from "./../../content/Header/bagIcon.svg";

import "./Header.css";

function Header() {
  const [show, setShow] = useState(false);
  const catalogButton = useRef();
  const catalogImg = useRef()

  useEffect(() => {
    if (show === true) {
      catalogButton.current.classList.add("button--catalog--active");
      catalogImg.current.classList.add('catalogImg--active');
    } else {
      catalogButton.current.classList.remove("button--catalog--active");
      catalogImg.current.classList.remove('catalogImg--active')
    }
  }, [show]);

  function showSubMenu() {
    setShow((prevState) => !prevState);
  }
  return (
    <header className="header">
      <div className="container--header">
        <div className="header__grid">
          <div className="header__grid__logotype">
            <img src={logotype} alt="tablePlus" />
          </div>
          <div className="header__grid__catalog">
            <button
              ref={catalogButton}
              className="button button--catalog"
              onClick={showSubMenu}
            >
              <svg ref={catalogImg} className="catalogImg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 7L5 7.00002M19 12H5M19 17L5 17"
                  stroke-width="1.2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Каталог
            </button>
          </div>
          <div className="header__grid__nav">
            <nav>
              <ul className="nav__list">
                <li className="nav__list__item">
                  <a className="nav__list__link" href="#!">
                    Доставка
                  </a>
                </li>
                <li className="nav__list__item">
                  <a className="nav__list__link" href="#!">
                    Способы оплаты
                  </a>
                </li>
                <li className="nav__list__item">
                  <a className="nav__list__link" href="#!">
                    Контакты
                  </a>
                </li>
                <li className="nav__list__item">
                  <a className="nav__list__link" href="#!">
                    Гарантии и возврат
                  </a>
                </li>
                <li className="nav__list__item">
                  <a className="nav__list__link" href="#!">
                    Политика конфиденциальности
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__grid__bag">
            <button className="button button--bag">
              <img src={bag} alt="" />
              Корзина
            </button>
          </div>
        </div>
      </div>
      {show && <SubMenu />}
    </header>
  );
}

export default Header;
