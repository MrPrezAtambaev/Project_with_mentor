import React, { useState, useEffect } from "react";
import FilterProduct from "../FilterProduct/FilterProduct";
import "../../../styles/ProductSideBar.css";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const ProductSideBar = ({ isSideBar, setPage }) => {
  const { products, getProducts } = useProducts();

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  return isSideBar ? (
    <div className="sideBar">
      <input
        type="text"
        placeholder="Search"
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FilterProduct />
    </div>
  ) : null;
};

export default ProductSideBar;
