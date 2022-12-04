import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../../components/Data/Data";
import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./Home.css";
const Home = () => {
  const navigate = useNavigate();
  const [popular, setPopular] = useState();
  const [sales, setSales] = useState();

  useEffect(() => {
    let d = Data.filter((item, index) => index < 4 && item);
    setPopular(d);
    setSales(Data.filter((item) => item.discount && item));
  }, []);
  return (
    <div>
      <Header />
      <div className="home_sections">
        <SectionHeader
          heading="Popular Products"
          desc="Enrich your shopping list wisely"
          btnText="View All"
          btnClick={() => navigate("/products")}
        />
        <div className="home_section_list" id="popularList">
          {popular?.map((item) => {
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
        <SectionHeader
          heading="Flash Sales"
          desc="Hurry up and buy what you love from the sale"
          btnText="View All"
          btnClick={() => navigate("/products")}
        />
        <div className="home_section_list">
          {sales?.map((item) => {
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
    </div>
  );
};

export default Home;
