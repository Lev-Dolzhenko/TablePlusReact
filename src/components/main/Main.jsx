import Search from "./search/Search";

import armchair from "./../../content/Main/armchair.png";
import lamp from "./../../content/Main/lamp.png";
import plus from "./../../content/Main/plus.svg";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Main.css";
import "./../../base.css";

function Main() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__text">
            <div className="main__text--title">
              <h1 className="title1 title1--main">
                Идеи, товары и услуги. <br /> Все для красивого дома
              </h1>
            </div>
            <div className="main__text--subtitle">
              <p>
                У нас есть и готовые модели, и возможность сделать мебель на
                заказ по вашему собственному дизайну.
              </p>
            </div>
            <Search />
          </div>
          <div className="main__armchair__info">
            <div className="armchair__info--title">
              <strong>Virtorya</strong>
            </div>
            <div className="armchair__info--subtitle">
              <span>Кресло интерьерное</span>
            </div>
            <div className="armchair__info--variants">
              <div className="info--variants__colors">
                Цвет:
                <div className="color color--white"></div>
                <div className="color color--red"></div>
                <div className="color color--gold"></div>
                <div className="color color--grey"></div>
              </div>
              <div className="info--variants__price">8900.00 руб</div>
            </div>
          </div>
          <div className="main__armchair">
            <img src={armchair} alt="armchair Virtorya" />
            <div className="main__hint main__hint__material">
              <button className="hint__add__button">
                <img className="hint__icon" src={plus} alt="add" />
              </button>
              <span>Итальянская кожа</span>
            </div>
            <div className="main__hint main__hint__stand">
              <span>Прочные опорные ножки</span>
              <button className="hint__add__button">
                <img className="hint__icon" src={plus} alt="add" />
              </button>
            </div>
          </div>
          {/* <div className="main__lamp">
            <img src={lamp} alt="lamp" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Main;
