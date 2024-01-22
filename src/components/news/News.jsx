import playIcon from "./../../content/News/playYoutube.svg";
import logoYoutube from "./../../content/News/logoYoutube.png";

import "./News.css";
import './../../base.css';

function News() {
  return (
    <section className="news">
      <div className="container">
        <div className="news__title">
          <h2 className="title2 title2--news">Новости и предложения</h2>
        </div>
        <div className="news-offers__grid">
          <div className="news-offers--hit">
            <span className="news--hit__name">Диван Альмека</span>
            <strong className="news--hit__title">Хит недели</strong>
            <span className="news--hit__info">Цвет: Синий аметист</span>
            <div className="news--hit__price">
              <span className="hit__price">11.990 руб</span>
              <span className="hit__price--old">17.990 руб</span>
            </div>
            <button className="news--hit__button">В корзину</button>
          </div>
          <div className="news-offers--new"></div>
          <div className="news-offers--choose"></div>
        </div>
        <div className="news__grid">
          <div className="news__grid__item news__grid__item--one">
            <strong>Правильные интерьерные кресла</strong>
            <a href="#!" className="news__grid__link">
              К статье
            </a>
          </div>
          <div className="news__grid__item news__grid__item--two">
            <strong>Не можете выбрать обеденный стол?</strong>
            <a href="#!" className="news__grid__link">
              К статье
            </a>
          </div>
          <div className="news__grid__item news__grid__item--three">
            <strong>Какие стулья часто покупают в прихожую</strong>
            <a href="#!" className="news__grid__link">
              К статье
            </a>
          </div>
          <div className="news__grid__item news__grid__item--four">
            <strong>Правильно и удобно выбираем кресло</strong>
            <a href="#!" className="news__grid__link">
              К статье
            </a>
          </div>
        </div>
        <div className="news__youtube">
          <div className="news__youtube__text">
            <h2 className="title2 title2--youtube">Мы на You-tube</h2>
            <p>
              Специально для вас мы создали канал с полезынми и интересными
              роликами
            </p>
            <button className="news__youtube__button">
              Смотреть <img src={playIcon} alt="play icon" />
            </button>
          </div>
          <div className="news__youtube__logo">
            <img src={logoYoutube} alt="logotype of youtube" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
