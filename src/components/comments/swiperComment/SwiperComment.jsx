import star from "./../../../content/Comments/star.png";
import personImage from "./../../../content/Comments/personOne.png";

import './swiperComment.css'

function SwiperComment() {
  return (
    <div className="comment">
      <div className="comment__stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
      </div>
      <div className="comment__person">
        <img src={personImage} alt="Elena Alexsandrovna" />
        <strong>Елена Александровна</strong>
      </div>
      <div className="comment__text">
        <p>
          Конструкторы Лего развивают мелкую моторику рук, способность к
          концентрации, мышление, ловкость, интеллект, и помогают ребятишкам
          раскрывать их творческий потенциал. Элементам конструкторов Lego
          свойственны четкие геометрические формы, что помогает
        </p>
      </div>
      <div className="comment__date">
        21.07.2023
      </div>
    </div>
  );
}

export default SwiperComment;
