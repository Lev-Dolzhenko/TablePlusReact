import SwiperComments from "../SwiperComments/SwiperComments";

import "./Comments.css";
import "swiper/css";
import "./../../../base.css"

function Comments() {
  return (
    <section className="comments">
      <div className="container">
        <div className="comments__title">
          <h2 className="title2 title2--comments">Отзывы клиентов</h2>
        </div>
        <SwiperComments />
      </div>
    </section>
  );
}

export default Comments;
