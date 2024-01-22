import CatalogTab from "./catalogTab/CatalogTab";
// import { CatalogCardInfo } from "./catalogCard/CatalogCardDate";
// import CatalogCard from "./catalogCard/CatalogCard";

import "./Catalog.css";
import "./../../base.css";

function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog__title">
          <h2 className="title2 title2--catalog">Популярные категории</h2>
        </div>
        <CatalogTab />
      </div>
    </section>
  );
}

export default Catalog;
