import closeMenu from './../../content/Header/closeMenu.svg'

import "./../../base.css";
import "./SubMenu.css";

function SubMenu() {
  return (
    <>
      <div className="container--sub">
        <div className="container--sub-menu">
          <div className="sub-menu__grid">
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Мебель из массива</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Столы из массива
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Стулья из массива
                </a>
              </li>
            </ul>
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Столы</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Кухонные столы
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Керамические столы
                </a>
              </li>
            </ul>
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Стулья</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Барные стулья
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Полубарные стулья
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Малые формы
                </a>
              </li>
            </ul>
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Консоли</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Банкетки
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Журнальные столы
                </a>
              </li>
            </ul>
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Кресла</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Компьютерные кресла
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Кресло руководителя
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Офисные кресла
                </a>
              </li>
            </ul>
            <ul className="sub-menu__list">
              <li className="sub-menu__item--accent">Остальное</li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Кухонные уголки
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Интерьерные диваны
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Кровати
                </a>
              </li>
              <li className="sub-menu__item">
                <a className="sub-menu__link" href="#!">
                  Распродажа
                </a>
              </li>
            </ul>
          </div>
          <button className="sub-menu__button">
            Скидки на журнальные столики до 30%
          </button>
        </div>
      </div>
    </>
  );
}

export default SubMenu;
