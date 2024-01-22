import './CatalogCard.css'

function CatalogCard({ img, name, color, price, oldPrice }) {
  return (
    <div className="card">
      <div className="card__photo">
        <img src={img} alt={name} />
      </div>
      <div className="card__info">
        <strong className="card__info__name">{name}</strong>
        <p className="card__info__color">{color}</p>
        <div className="card__info__price">
          <p>{price}</p>
          <span>{oldPrice == undefined ? null : oldPrice}</span>
        </div>
      </div>
    </div>
  );
}

export default CatalogCard;
