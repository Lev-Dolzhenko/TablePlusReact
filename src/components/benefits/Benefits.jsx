import armchair from './../../content/Benefits/armchair.svg'
import like from './../../content/Benefits/like.svg'
import drawing from './../../content/Benefits/drawing.svg'
import discount from './../../content/Benefits/discount.svg'

import './Benefits.css'
import './../../base.css'

function Benefits() {
  return (
    <section className="benefits">
      <div className="container">
        <div className="benefits__content">
          <h3 className="title3 title3--benefits">Стол плюс</h3>
          <p className="benefits__text">
            «Стол Плюс» — больше, чем мебельный магазин в Воронеже. Это семейное
            дело с 20-летней историей, 30 проверенными фабриками-партнёрами,
            большим каталогом мебели и собственным производством. У нас
            сплоченная команда профессионалов, преданных своей работе и
            заинтересованных в результате.
          </p>
        </div>
        <div className="benefits__grid">
            <div className="benefits__grid__elem">
                <img src={armchair} alt="Big choose" />
                Большой выбор мебели
            </div>
            <div className="benefits__grid__elem">
                <img src={like} alt="Big choose" />
                Гарантия качества
            </div>
            <div className="benefits__grid__elem">
                <img src={drawing} alt="Big choose" />
                Индивидуальный подход
            </div>
            <div className="benefits__grid__elem">
                <img src={discount} alt="Big choose" />
                Выгодные цены
            </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
