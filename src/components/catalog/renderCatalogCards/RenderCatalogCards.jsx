import { CatalogCardInfo } from "../catalogCard/CatalogCardDate";
import CatalogCard from "../catalogCard/CatalogCard";

function RenderCatalogCards({type}) {
    return (
        <div className="catalog__grid">
        {CatalogCardInfo.map(
          (CatalogCardDate) =>
            CatalogCardDate.type === type && (
              <CatalogCard
                key={CatalogCardDate.id}
                img={CatalogCardDate.image}
                name={CatalogCardDate.name}
                color={CatalogCardDate.color}
                price={CatalogCardDate.price}
                oldPrice={CatalogCardDate.oldPrice}
              />
            )
        )}
      </div>
    );
}

export default RenderCatalogCards;