import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../components/Data/Data";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./Products.css";
const Products = () => {
  const navigate = useNavigate();
  const [filtered, setFiltered] = useState([]);
  const [cats, setCats] = useState([]);
  const handleFilter = (e) => {
    console.log(e.target.value);
    if (cats.includes(e.target.value)) {
      setCats((val) => {
        return val.filter((item) => item !== e.target.value);
      });
    } else {
      setCats([...cats, e.target.value]);
    }
  };
  useEffect(() => {
    if (cats.length > 0) {
      setFiltered(Data.filter((item) => cats.includes(item.type)));
    } else {
      setFiltered(Data);
    }
  }, [cats]);
  return (
    <div className="products_screen">
      <SectionHeader
        heading="All Products"
        desc="Enrich your shopping list wisely"
      />
      <div className="products_filter">
        <label className="products_filter_item" for="filter1">
          <input
            type="checkbox"
            id="filter1"
            onChange={handleFilter}
            value="watch"
          />
          <span>Watches</span>
        </label>
        <label className="products_filter_item" for="filter2">
          <input
            type="checkbox"
            id="filter2"
            onChange={handleFilter}
            value="cover"
          />
          <span>Phone Covers</span>
        </label>
        <label className="products_filter_item" for="filter3">
          <input
            type="checkbox"
            id="filter3"
            onChange={handleFilter}
            value="charger"
          />
          <span>Chargers</span>
        </label>
        <label className="products_filter_item" for="filter4">
          <input
            type="checkbox"
            id="filter4"
            onChange={handleFilter}
            value="earphone"
          />
          <span>Earphones</span>
        </label>
      </div>
      <div className="all_products_list">
        {filtered.map((item) => {
          return (
            <ProductCard
              btnClick={() => navigate(`/products/${item.id}`)}
              title={item.title}
              desc={item.desc}
              price={item.price}
              image={item.image}
              discount={item.discount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
