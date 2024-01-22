import { useState } from "react";

import "./CatalogTab.css";
import RenderCatalogCards from "../renderCatalogCards/RenderCatalogCards";

function CatalogTab() {
  const [activeButton, setActiveButton] = useState("Стулья");

  return (
    <>
      <div className="catalog__tab">
        <button
          className={
            activeButton === "Столы"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Столы");
          }}
        >
          Столы
        </button>
        <button
          className={
            activeButton === "Стулья"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Стулья");
          }}
        >
          Стулья
        </button>
        <button
          className={
            activeButton === "Консоли"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Консоли");
          }}
        >
          Консоли
        </button>
        <button
          className={
            activeButton === "Кресла"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Кресла");
          }}
        >
          Кресла
        </button>
        <button
          className={
            activeButton === "Интерьерные диваны"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Интерьерные диваны");
          }}
        >
          Интерьерные диваны
        </button>
        <button
          className={
            activeButton === "Распродажа"
              ? "catalog__tab__button catalog__tab__button--active"
              : "catalog__tab__button"
          }
          onClick={() => {
            setActiveButton("Распродажа");
          }}
        >
          Распродажа
        </button>
      </div>
      <RenderCatalogCards type={activeButton}/>
    </>
  );
}

export default CatalogTab;
