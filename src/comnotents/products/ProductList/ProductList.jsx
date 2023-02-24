import React, { useEffect } from "react";
import { useProducts } from "../../../contexts/ProductContextProvider";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import { Parallax, Background } from "react-parallax";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Parallax strength={50}>
      <Background
        className="custom-bg"
        style={{
          background: `url(https://forums.rpgmakerweb.com/data/attachments/112/112638-106616404fe8fd7f66e72fb7f613bc09.jpg) no-repeat center center fixed`,
          backgroundSize: "cover",
        }}
      ></Background>
      <h3 style={{ textAlign: "center" }}>Products List</h3>
      <div className="posts-list">
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </Parallax>
  );
};

export default ProductList;
