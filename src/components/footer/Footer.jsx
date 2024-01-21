import logotype from "./../../content/Footer/logotype.png";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__grid__logotype">
            <img src={logotype} alt="" />
            <p className="grid__logotype__title">
              <strong>
                StolPlus - Компания по <br /> производствуи продажи мебели
              </strong>
            </p>
            <p className="grid__logotype__subtitle">
              Информация на сайте исключительно для ознакомления
            </p>
          </div>
          <div className="footer__grid__furniture">
            <ul className="grid__list">
                <li className="grid__item grid__item--title">Каталог</li>
                <li className="grid__item"><a href="#!" className="grid__link">Мебель из массива</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Столы</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Стулья</a></li>
                <li className="grid__item grid__item--accent">Консоли</li>
                <li className="grid__item"><a href="#!" className="grid__link">Кухонные уголки</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Кресла</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Интерьерные диваны</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Кровати</a></li>
            </ul>
          </div>
          <div className="footer__grid__help">
          <ul className="grid__list">
                <li className="grid__item grid__item--title">Помощь</li>
                <li className="grid__item"><a href="#!" className="grid__link">Мебель из массива</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Столы</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Стулья</a></li>
                <li className="grid__item grid__item--accent">Консоли</li>
                <li className="grid__item"><a href="#!" className="grid__link">Кухонные уголки</a></li>
            </ul>
          </div>
          <div className="footer__grid__contacts">
          <ul className="grid__list">
                <li className="grid__item grid__item--title">Контакты</li>
                <li className="grid__item"><a href="#!" className="grid__link">г.Воронеж Бульвар Победы 23Б</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">+7 (961) 181-69-70</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">stolplus@mail.ru</a></li>
                <li className="grid__item"><a href="#!" className="grid__link">Время работы: 10:00-21:00</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
