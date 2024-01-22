import "./News.css";

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
          <div className="news-offers--new">
            
          </div>
          <div className="news-offers--choose"></div>
        </div>
      </div>
    </section>
  );
}

export default News;
